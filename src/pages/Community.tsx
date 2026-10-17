import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Rocket,
  BadgeCheck,
  XCircle,
  HelpCircle,
  Heart,
  MessageCircle,
  Trash2,
  Info,
  RotateCcw,
  Send,
  Sparkles,
} from 'lucide-react'
import { useCommunity } from '../hooks/useCommunity'
import {
  avatarAccent,
  kindConfig,
  timeAgo,
  type CommunityPost,
  type PostKind,
} from '../data/community'
import { paths, getPathById } from '../data/paths'
import { getMilestoneById } from '../data/milestones'
import { accent } from '../lib/colors'
import { cn } from '../lib/cn'
import { isStaticRender } from '../lib/isStatic'

const kindIcon: Record<PostKind, typeof Rocket> = {
  progress: Rocket,
  win: BadgeCheck,
  fail: XCircle,
  question: HelpCircle,
}

const composerPlaceholders: Record<PostKind, string> = {
  progress: 'What milestone did you hit? How did you do it? Numbers welcome…',
  win: 'What worked? Share the specific move so others can copy it…',
  fail: "What didn't work? What did it cost you, and what will you do differently?",
  question: 'What are you stuck on? The more specific, the better the answers…',
}

const inputClasses =
  'w-full bg-paper dark:bg-black/20 border border-line rounded-xl px-3.5 py-2.5 text-sm text-ink placeholder-ink-faint focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-500/20 transition-shadow'

function Avatar({ name, size = 'md' }: { name: string; size?: 'md' | 'sm' }) {
  const a = accent(avatarAccent(name))
  return (
    <div
      className={cn(
        'flex-shrink-0 rounded-2xl bg-gradient-to-br flex items-center justify-center font-display font-bold text-white',
        a.gradient,
        size === 'md' ? 'w-10 h-10 text-sm' : 'w-7 h-7 text-[11px]'
      )}
    >
      {name.trim().charAt(0).toUpperCase() || '?'}
    </div>
  )
}

function Composer() {
  const { profile, setDisplayName, addPost, mode } = useCommunity()
  const [kind, setKind] = useState<PostKind>('progress')
  const [pathId, setPathId] = useState('general')
  const [milestoneId, setMilestoneId] = useState('')
  const [income, setIncome] = useState('')
  const [text, setText] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    addPost({
      kind,
      pathId,
      milestoneId: milestoneId || undefined,
      text: text.trim(),
      income: income ? Number(income) : undefined,
    })
    setText('')
    setIncome('')
    setMilestoneId('')
    setKind('progress')
    setPathId('general')
  }

  return (
    <form
      onSubmit={submit}
      className="bg-cream border border-line rounded-3xl p-5 md:p-6 shadow-soft mb-8"
    >
      <div className="flex items-center gap-3 mb-4">
        <Avatar name={profile || 'A'} />
        <input
          value={profile}
          onChange={e => setDisplayName(e.target.value)}
          placeholder="Your display name…"
          maxLength={30}
          className="flex-1 bg-transparent border-b border-line focus:border-brand-400 focus:outline-none text-sm font-semibold text-ink placeholder-ink-faint py-1 transition-colors"
        />
      </div>

      {/* kind selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(Object.keys(kindConfig) as PostKind[]).map(k => {
          const Icon = kindIcon[k]
          const active = kind === k
          return (
            <button
              key={k}
              type="button"
              onClick={() => setKind(k)}
              className={cn(
                'flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all',
                active ? kindConfig[k].active : 'bg-paper text-ink-faint border border-line hover:text-ink-soft'
              )}
            >
              <Icon className="w-3.5 h-3.5" />
              {kindConfig[k].label}
            </button>
          )
        })}
      </div>

      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder={composerPlaceholders[kind]}
        rows={3}
        maxLength={1200}
        className={cn(inputClasses, 'resize-none mb-4')}
      />

      <div className="grid sm:grid-cols-3 gap-3 mb-4">
        <select value={pathId} onChange={e => setPathId(e.target.value)} className={inputClasses}>
          <option value="general">🌍 General</option>
          {paths.map(p => (
            <option key={p.id} value={p.id}>
              {p.icon} {p.title}
            </option>
          ))}
        </select>
        <select
          value={milestoneId}
          onChange={e => setMilestoneId(e.target.value)}
          className={inputClasses}
        >
          <option value="">Milestone (optional)</option>
          <option value="first-100">🌱 $0 → $100 — Proof</option>
          <option value="first-1k">🔥 $100 → $1K/mo — Traction</option>
          <option value="to-5k">🚀 $1K → $5K/mo — Leverage</option>
          <option value="to-10k">⚙️ $5K → $10K+/mo — Systems</option>
          <option value="wealth">🏝️ → Wealth — Ownership</option>
        </select>
        <input
          type="number"
          min={0}
          value={income}
          onChange={e => setIncome(e.target.value)}
          placeholder="Earned so far ($) — optional"
          className={cn(inputClasses, 'font-mono')}
        />
      </div>

      <div className="flex items-center justify-between gap-3 flex-wrap">
        <span className="text-xs text-ink-faint">
          {mode === 'live'
            ? 'Visible to everyone on the site the moment you post.'
            : 'Posts live in your browser during the beta.'}
        </span>
        <button
          type="submit"
          disabled={!text.trim()}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold shadow-[0_8px_20px_-6px_rgb(249_94_51/0.5)] hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:translate-y-0 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
          Share with the crew
        </button>
      </div>
    </form>
  )
}

function PostCard({ post }: { post: CommunityPost }) {
  const { profile, toggleLike, addComment, deletePost } = useCommunity()
  const [showComments, setShowComments] = useState(false)
  const [commentText, setCommentText] = useState('')

  const path = post.pathId !== 'general' ? getPathById(post.pathId) : undefined
  const milestone = post.milestoneId ? getMilestoneById(post.milestoneId) : undefined
  const kind = kindConfig[post.kind]
  const isMine = post.author === profile && !post.seed

  const submitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!commentText.trim()) return
    addComment(post.id, commentText.trim())
    setCommentText('')
  }

  return (
    <motion.article
      layout={!isStaticRender}
      initial={isStaticRender ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={isStaticRender ? undefined : { opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="bg-cream border border-line rounded-3xl p-5 md:p-6 shadow-soft hover:shadow-lift transition-shadow duration-300"
    >
      {/* header */}
      <div className="flex items-start gap-3 mb-4">
        <Avatar name={post.author} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-display font-bold text-sm">{post.author}</span>
            {post.seed && (
              <span className="px-1.5 py-0.5 rounded-md bg-paper border border-line text-ink-faint text-[10px] font-bold uppercase tracking-wide">
                Demo
              </span>
            )}
          </div>
          <div className="text-xs text-ink-faint">{timeAgo(post.createdAt)}</div>
        </div>
        <div className="flex items-center gap-2">
          <span className={cn('px-2.5 py-1 rounded-lg text-[11px] font-bold', kind.badge)}>
            {kind.label}
          </span>
          {isMine && (
            <button
              onClick={() => {
                if (window.confirm('Delete this post?')) deletePost(post.id)
              }}
              aria-label="Delete post"
              className="p-1.5 rounded-lg text-ink-faint hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* context chips */}
      {(path || milestone) && (
        <div className="flex items-center gap-2 flex-wrap mb-3">
          {path && (
            <Link
              to={`/path/${path.id}`}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-paper border border-line text-xs font-medium text-ink-soft hover:text-ink hover:border-brand-300 transition-colors"
            >
              {path.icon} {path.title}
            </Link>
          )}
          {milestone && (
            <Link
              to={`/roadmap#${milestone.id}`}
              className={cn(
                'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-semibold transition-opacity hover:opacity-80',
                accent(milestone.accent).soft,
                accent(milestone.accent).border,
                accent(milestone.accent).text
              )}
            >
              {milestone.icon} {milestone.range}
            </Link>
          )}
          {post.income !== undefined && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-xs font-bold font-mono">
              +${post.income.toLocaleString()}
            </span>
          )}
        </div>
      )}

      {/* body */}
      <p className="text-[15px] text-ink leading-relaxed whitespace-pre-line mb-4">{post.text}</p>

      {/* actions */}
      <div className="flex items-center gap-1 -ml-2">
        <motion.button
          whileTap={isStaticRender ? undefined : { scale: 1.25 }}
          onClick={() => toggleLike(post.id)}
          className={cn(
            'flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold transition-colors',
            post.likedByMe
              ? 'text-rose-500 bg-rose-50 dark:bg-rose-500/10'
              : 'text-ink-faint hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10'
          )}
        >
          <Heart className={cn('w-4 h-4', post.likedByMe && 'fill-current')} />
          {post.likes > 0 && post.likes}
        </motion.button>
        <button
          onClick={() => setShowComments(s => !s)}
          className={cn(
            'flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold transition-colors',
            showComments
              ? 'text-brand-600 bg-brand-100/60 dark:bg-brand-500/10'
              : 'text-ink-faint hover:text-ink hover:bg-paper'
          )}
        >
          <MessageCircle className="w-4 h-4" />
          {post.comments.length > 0 && post.comments.length}
        </button>
      </div>

      {/* comments */}
      <AnimatePresence initial={false}>
        {showComments && (
          <motion.div
            key="comments"
            initial={isStaticRender ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={isStaticRender ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-line space-y-3">
              {post.comments.map(c => (
                <div key={c.id} className="flex items-start gap-2.5">
                  <Avatar name={c.author} size="sm" />
                  <div className="bg-paper dark:bg-black/20 border border-line rounded-2xl px-3.5 py-2.5 flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-bold">{c.author}</span>
                      <span className="text-[10px] text-ink-faint">{timeAgo(c.createdAt)}</span>
                    </div>
                    <p className="text-sm text-ink-soft leading-relaxed mt-0.5">{c.text}</p>
                  </div>
                </div>
              ))}
              {post.comments.length === 0 && (
                <p className="text-xs text-ink-faint">No replies yet — be the first to help.</p>
              )}
              <form onSubmit={submitComment} className="flex items-center gap-2 pt-1">
                <input
                  value={commentText}
                  onChange={e => setCommentText(e.target.value)}
                  placeholder={`Reply as ${profile.trim() || 'Anonymous'}…`}
                  className={cn(inputClasses, 'py-2')}
                />
                <button
                  type="submit"
                  disabled={!commentText.trim()}
                  aria-label="Send reply"
                  className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white flex items-center justify-center disabled:opacity-40 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

type KindFilter = 'all' | PostKind
type SortMode = 'new' | 'top'

export default function Community() {
  const { posts, resetDemo, mode, loading, fetchFailed } = useCommunity()
  const [kindFilter, setKindFilter] = useState<KindFilter>('all')
  const [pathFilter, setPathFilter] = useState<string>('all')
  const [sort, setSort] = useState<SortMode>('new')

  const visible = useMemo(() => {
    let list = posts
    if (kindFilter !== 'all') list = list.filter(p => p.kind === kindFilter)
    if (pathFilter !== 'all') list = list.filter(p => p.pathId === pathFilter)
    return [...list].sort((a, b) =>
      sort === 'new' ? b.createdAt - a.createdAt : b.likes - a.likes || b.createdAt - a.createdAt
    )
  }, [posts, kindFilter, pathFilter, sort])

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-300 text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          Community beta
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
          The feed
        </h1>
        <p className="text-lg text-ink-soft">
          Like the group chat that actually helps: post your milestones, share what worked, admit
          what didn't, and ask when you're stuck. Real numbers welcome.
        </p>
      </div>

      {/* status note */}
      {mode === 'live' ? (
        <div className="flex items-start gap-3 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 p-4 mb-8">
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0 mt-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <p className="text-sm text-ink-soft leading-relaxed">
            <strong className="text-ink font-semibold">Live:</strong> this feed is shared by
            everyone on the site — new posts and replies appear in realtime. Be excellent to each
            other.
          </p>
        </div>
      ) : (
        <div className="flex items-start gap-3 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 p-4 mb-8">
          <Info className="w-4.5 h-4.5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-ink-soft leading-relaxed">
            <strong className="text-ink font-semibold">Local beta:</strong> posts stay in this
            browser for now. {fetchFailed
              ? 'The shared feed couldn\'t be reached, so starter posts are shown instead — check your connection and refresh.'
              : 'The site owner connects the shared database (see README) and the feed goes live for everyone.'}
          </p>
        </div>
      )}

      <Composer />

      {/* filters */}
      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
        <div className="flex items-center gap-1.5 flex-wrap">
          {(['all', 'progress', 'win', 'fail', 'question'] as const).map(k => {
            const label = k === 'all' ? 'All' : kindConfig[k].label
            const active = kindFilter === k
            return (
              <button
                key={k}
                onClick={() => setKindFilter(k)}
                className={cn(
                  'px-3 py-1.5 rounded-xl text-xs font-bold transition-all',
                  active
                    ? 'bg-ink text-cream'
                    : 'bg-cream border border-line text-ink-faint hover:text-ink-soft'
                )}
              >
                {label}
              </button>
            )
          })}
        </div>
        <div className="flex items-center bg-cream border border-line rounded-xl p-0.5">
          {(['new', 'top'] as const).map(s => (
            <button
              key={s}
              onClick={() => setSort(s)}
              className={cn(
                'px-3 py-1.5 rounded-lg text-xs font-bold transition-colors',
                sort === s ? 'bg-brand-500 text-white' : 'text-ink-faint hover:text-ink-soft'
              )}
            >
              {s === 'new' ? 'Newest' : 'Top'}
            </button>
          ))}
        </div>
      </div>

      {/* path chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <button
          onClick={() => setPathFilter('all')}
          className={cn(
            'flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all',
            pathFilter === 'all'
              ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white border-transparent'
              : 'bg-cream border-line text-ink-soft hover:border-brand-300'
          )}
        >
          All paths
        </button>
        {paths.map(p => (
          <button
            key={p.id}
            onClick={() => setPathFilter(p.id)}
            className={cn(
              'flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all whitespace-nowrap',
              pathFilter === p.id
                ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white border-transparent'
                : 'bg-cream border-line text-ink-soft hover:border-brand-300'
            )}
          >
            {p.icon} {p.title}
          </button>
        ))}
      </div>

      {/* feed */}
      {loading ? (
        <div className="space-y-5">
          {[0, 1, 2].map(i => (
            <div key={i} className="bg-cream border border-line rounded-3xl p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-paper animate-pulse" />
                <div className="space-y-1.5 flex-1">
                  <div className="h-3 w-28 bg-paper rounded animate-pulse" />
                  <div className="h-2.5 w-16 bg-paper rounded animate-pulse" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-3 w-full bg-paper rounded animate-pulse" />
                <div className="h-3 w-4/5 bg-paper rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      ) : visible.length > 0 ? (
        <div className="space-y-5">
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="text-center py-16 bg-cream border border-dashed border-line rounded-3xl">
          <div className="text-4xl mb-3">🌱</div>
          <h2 className="font-display font-bold text-lg mb-1.5">Nothing here yet</h2>
          <p className="text-sm text-ink-soft max-w-xs mx-auto">
            No posts match this filter. Be the first — your progress might be exactly what someone
            else needs to see.
          </p>
        </div>
      )}

      {/* footer actions */}
      <div className="mt-10 flex items-center justify-between flex-wrap gap-3">
        <p className="text-xs text-ink-faint">
          Be kind, share real numbers, and no guru spam. That's the whole rulebook.
        </p>
        {mode === 'local' && (
          <button
            onClick={() => {
              if (
                window.confirm(
                  'Reset the feed back to the demo posts? Your posts will be removed.'
                )
              )
                resetDemo()
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-faint hover:text-ink transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset demo posts
          </button>
        )}
      </div>
    </div>
  )
}
