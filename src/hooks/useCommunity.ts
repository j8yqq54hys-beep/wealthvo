import { useCallback, useEffect, useRef, useState } from 'react'
import { seedPosts, type CommunityComment, type CommunityPost } from '../data/community'
import { isSupabaseConfigured, supabase } from '../lib/supabase'

const POSTS_KEY = 'wealthvo-community-posts-v1'
const PROFILE_KEY = 'wealthvo-profile-v1'
const LIKED_KEY = 'wealthvo-liked-v1'
const HIDDEN_KEY = 'wealthvo-hidden-v1'

export type CommunityMode = 'live' | 'local'

function makeId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function writeJson(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* private mode — things live in memory for this visit */
  }
}

function loadPosts(): CommunityPost[] {
  const stored = readJson<CommunityPost[]>(POSTS_KEY, [])
  return stored.length > 0 ? stored : seedPosts()
}

/* ---------- Supabase row mapping ---------- */

interface DbComment {
  id: string
  post_id: string
  author: string
  text: string
  created_at: string
}

interface DbPost {
  id: string
  author: string
  kind: string
  path_id: string
  milestone_id: string | null
  text: string
  income: number | null
  likes: number
  created_at: string
  comments?: DbComment[]
}

function mapComment(c: DbComment): CommunityComment {
  return { id: c.id, author: c.author, text: c.text, createdAt: Date.parse(c.created_at) }
}

function mapPost(row: DbPost, likedIds: Set<string>): CommunityPost {
  return {
    id: row.id,
    author: row.author,
    kind: (['progress', 'win', 'fail', 'question'].includes(row.kind)
      ? row.kind
      : 'question') as CommunityPost['kind'],
    pathId: row.path_id || 'general',
    milestoneId: row.milestone_id ?? undefined,
    text: row.text,
    income: row.income != null ? Number(row.income) : undefined,
    createdAt: Date.parse(row.created_at),
    likes: row.likes ?? 0,
    likedByMe: likedIds.has(row.id),
    comments: (row.comments ?? []).map(mapComment).sort((a, b) => a.createdAt - b.createdAt),
  }
}

/**
 * Community state.
 *
 * - 'live' mode (Supabase env vars set): posts/comments live in a shared
 *   database — every visitor sees every post, updates arrive in realtime,
 *   likes go through an atomic RPC.
 * - 'local' mode: everything lives in this browser's localStorage.
 *
 * In both modes the UI and the post shape are identical.
 */
export function useCommunity() {
  const mode: CommunityMode = isSupabaseConfigured && supabase ? 'live' : 'local'

  const [posts, setPosts] = useState<CommunityPost[]>(() => (mode === 'local' ? loadPosts() : []))
  const [profile, setProfileState] = useState<string>(() => readJson<string>(PROFILE_KEY, '') as unknown as string ?? '')
  const [loading, setLoading] = useState(mode === 'live')
  const [fetchFailed, setFetchFailed] = useState(false)
  const likedIds = useRef<Set<string>>(new Set(readJson<string[]>(LIKED_KEY, [])))
  const hiddenIds = useRef<Set<string>>(new Set(readJson<string[]>(HIDDEN_KEY, [])))

  /* ---------- shared helpers ---------- */

  const setProfileStateSafe = useCallback((name: string) => {
    setProfileState(name)
    writeJson(PROFILE_KEY, name)
  }, [])

  const persistLiked = useCallback(() => {
    writeJson(LIKED_KEY, [...likedIds.current])
  }, [])

  const persistHidden = useCallback(() => {
    writeJson(HIDDEN_KEY, [...hiddenIds.current])
  }, [])

  const hidePost = useCallback(
    (postId: string) => {
      hiddenIds.current.add(postId)
      persistHidden()
      setPosts(prev => prev.filter(p => p.id !== postId))
    },
    [persistHidden]
  )

  /* ---------- live mode: fetch + realtime ---------- */

  useEffect(() => {
    if (mode !== 'live' || !supabase) return
    let cancelled = false
    let channel: ReturnType<typeof supabase.channel> | null = null

    const upsertPost = (post: CommunityPost) => {
      if (hiddenIds.current.has(post.id)) return
      setPosts(prev => {
        const idx = prev.findIndex(p => p.id === post.id)
        if (idx === -1) return [post, ...prev]
        const next = [...prev]
        next[idx] = post
        return next
      })
    }

    ;(async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*, comments(*)')
          .order('created_at', { ascending: false })
          .limit(100)
        if (cancelled) return
        if (error) throw error
        setPosts((data as DbPost[]).map(row => mapPost(row, likedIds.current)))
      } catch {
        if (!cancelled) {
          setFetchFailed(true)
          setPosts(seedPosts())
        }
      } finally {
        if (!cancelled) setLoading(false)
      }

      channel = supabase
        .channel('community-feed')
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'posts' },
          payload => upsertPost(mapPost(payload.new as DbPost, likedIds.current))
        )
        .on(
          'postgres_changes',
          { event: 'UPDATE', schema: 'public', table: 'posts' },
          payload => {
            const row = payload.new as DbPost
            setPosts(prev =>
              prev.map(p =>
                p.id === row.id
                  ? { ...p, likes: row.likes ?? p.likes, author: row.author, text: row.text }
                  : p
              )
            )
          }
        )
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'comments' },
          payload => {
            const c = mapComment(payload.new as DbComment)
            setPosts(prev => {
              const postId = (payload.new as DbComment).post_id
              return prev.map(p => {
                if (p.id !== postId) return p
                const exists = p.comments.some(
                  x =>
                    x.id === c.id ||
                    (x.author === c.author &&
                      x.text === c.text &&
                      Math.abs(x.createdAt - c.createdAt) < 15_000)
                )
                return exists ? p : { ...p, comments: [...p.comments, c] }
              })
            })
          }
        )
        .subscribe()
    })()

    return () => {
      cancelled = true
      if (channel) supabase.removeChannel(channel)
    }
  }, [mode])

  /* ---------- actions ---------- */

  const addPost = useCallback(
    (input: {
      kind: CommunityPost['kind']
      pathId: string
      milestoneId?: string
      text: string
      income?: number
    }) => {
      const author = profile.trim() || 'Anonymous'
      const income = input.income && input.income > 0 ? input.income : undefined

      if (mode === 'live' && supabase) {
        ;(async () => {
          try {
            const { data, error } = await supabase
              .from('posts')
              .insert({
                author,
                kind: input.kind,
                path_id: input.pathId,
                milestone_id: input.milestoneId ?? null,
                text: input.text,
                income: income ?? null,
              })
              .select('*, comments(*)')
              .single()
            if (error) throw error
            setPosts(prev => [mapPost(data as DbPost, likedIds.current), ...prev])
          } catch {
            /* network hiccup — the realtime feed will catch it if the insert
               landed; otherwise the user can retry */
          }
        })()
        return
      }

      const post: CommunityPost = {
        id: makeId(),
        author,
        kind: input.kind,
        pathId: input.pathId,
        milestoneId: input.milestoneId || undefined,
        text: input.text,
        income,
        createdAt: Date.now(),
        likes: 0,
        likedByMe: false,
        comments: [],
      }
      setPosts(prev => [post, ...prev])
    },
    [profile, mode]
  )

  const toggleLike = useCallback(
    (postId: string) => {
      let delta = 1
      setPosts(prev =>
        prev.map(p => {
          if (p.id !== postId) return p
          delta = p.likedByMe ? -1 : 1
          if (delta === 1) likedIds.current.add(postId)
          else likedIds.current.delete(postId)
          return { ...p, likedByMe: !p.likedByMe, likes: Math.max(0, p.likes + delta) }
        })
      )
      persistLiked()
      if (mode === 'live' && supabase) {
        supabase.rpc('like_post', { p_post_id: postId, p_delta: delta }).then(({ error }) => {
          if (error) {
            // revert the optimistic bump if the server refused
            setPosts(prev =>
              prev.map(p =>
                p.id === postId
                  ? {
                      ...p,
                      likedByMe: !p.likedByMe,
                      likes: Math.max(0, p.likes - delta),
                    }
                  : p
              )
            )
            likedIds.current.delete(postId)
            persistLiked()
          }
        })
      }
    },
    [mode, persistLiked]
  )

  const addComment = useCallback(
    (postId: string, text: string) => {
      const author = profile.trim() || 'Anonymous'
      if (mode === 'live' && supabase) {
        ;(async () => {
          try {
            const { data, error } = await supabase
              .from('comments')
              .insert({ post_id: postId, author, text })
              .select()
              .single()
            if (error) throw error
            const c = mapComment(data as DbComment)
            setPosts(prev =>
              prev.map(p =>
                p.id === postId && !p.comments.some(x => x.id === c.id)
                  ? { ...p, comments: [...p.comments, c] }
                  : p
              )
            )
          } catch {
            /* realtime or a refresh will show it if it landed */
          }
        })()
        return
      }
      setPosts(prev =>
        prev.map(p =>
          p.id === postId
            ? {
                ...p,
                comments: [
                  ...p.comments,
                  { id: makeId(), author, text, createdAt: Date.now() },
                ],
              }
            : p
        )
      )
    },
    [profile, mode]
  )

  const deletePost = useCallback(
    (postId: string) => {
      // Beta moderation: removing a post hides it for this visitor. The
      // dashboard SQL editor can remove posts for everyone.
      hidePost(postId)
    },
    [hidePost]
  )

  const resetDemo = useCallback(() => {
    if (mode === 'live' && supabase) {
      setLoading(true)
      ;(async () => {
        try {
          const { data, error } = await supabase
            .from('posts')
            .select('*, comments(*)')
            .order('created_at', { ascending: false })
            .limit(100)
          if (error) throw error
          setPosts((data as DbPost[]).map(row => mapPost(row, likedIds.current)))
        } catch {
          setFetchFailed(true)
        } finally {
          setLoading(false)
        }
      })()
      return
    }
    hiddenIds.current.clear()
    persistHidden()
    setPosts(seedPosts())
  }, [mode, persistHidden])

  return {
    posts: posts.filter(p => !hiddenIds.current.has(p.id)),
    profile,
    setDisplayName: setProfileStateSafe,
    addPost,
    toggleLike,
    addComment,
    deletePost,
    resetDemo,
    mode,
    loading,
    fetchFailed,
  }
}
