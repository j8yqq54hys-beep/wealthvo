/**
 * Community feed data. The beta stores everything in the user's browser
 * (localStorage) so it runs on any free static host — when the real backend
 * launches, these types map 1:1 to API models.
 */

export type PostKind = 'progress' | 'win' | 'fail' | 'question'

export interface CommunityComment {
  id: string
  author: string
  text: string
  createdAt: number
}

export interface CommunityPost {
  id: string
  author: string
  kind: PostKind
  /** path id from data/paths, or 'general' */
  pathId: string
  /** milestone id from data/milestones, optional */
  milestoneId?: string
  text: string
  /** optional dollar figure attached to the update */
  income?: number
  createdAt: number
  likes: number
  likedByMe: boolean
  comments: CommunityComment[]
  /** true for the built-in starter posts */
  seed?: boolean
}

export const kindConfig: Record<
  PostKind,
  { label: string; badge: string; active: string }
> = {
  progress: {
    label: 'Milestone',
    badge: 'bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300',
    active: 'bg-violet-100 text-violet-700 ring-1 ring-violet-300 dark:bg-violet-500/15 dark:text-violet-300 dark:ring-violet-500/30',
  },
  win: {
    label: 'What worked',
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
    active: 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-300 dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-500/30',
  },
  fail: {
    label: "Didn't work",
    badge: 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300',
    active: 'bg-rose-100 text-rose-700 ring-1 ring-rose-300 dark:bg-rose-500/15 dark:text-rose-300 dark:ring-rose-500/30',
  },
  question: {
    label: 'Question',
    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
    active: 'bg-amber-100 text-amber-700 ring-1 ring-amber-300 dark:bg-amber-500/15 dark:text-amber-300 dark:ring-amber-500/30',
  },
}

export function timeAgo(ts: number): string {
  const diff = Date.now() - ts
  const m = Math.floor(diff / 60_000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  const d = Math.floor(h / 24)
  if (d < 7) return `${d}d ago`
  const w = Math.floor(d / 7)
  if (w < 5) return `${w}w ago`
  return new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

/** Deterministic accent key for a name — powers avatar colors. */
export function avatarAccent(name: string): string {
  const keys = ['orange', 'violet', 'cyan', 'emerald', 'pink', 'amber', 'rose', 'blue']
  let hash = 0
  for (const ch of name) hash = (hash + ch.charCodeAt(0) * 7) % 997
  return keys[hash % keys.length]
}

const H = 3_600_000
const D = 24 * H

/** Starter posts so the feed never feels empty before launch. */
export function seedPosts(): CommunityPost[] {
  const now = Date.now()
  return [
    {
      id: 'seed-1',
      author: 'Maya R.',
      kind: 'progress',
      pathId: 'local-services',
      milestoneId: 'first-100',
      text: "HIT MY FIRST $100!! 🎉 Three lawns and one driveway this week. The 'post in the evening' tip from the level guide is real — 4 of 5 replies came from my evening post.\n\nAlready asked all of them about biweekly. Two said yes!!",
      income: 140,
      createdAt: now - 26 * H,
      likes: 24,
      likedByMe: false,
      comments: [
        {
          id: 'seed-1c1',
          author: 'Dev T.',
          text: "Yesss! 🔥 Recurring slots are the whole game — two biweekly clients and you're halfway to $1K/mo already.",
          createdAt: now - 25 * H,
        },
        {
          id: 'seed-1c2',
          author: 'Jordan P.',
          text: 'The photo-text-after-the-job move got me my first referral too. It feels small but people forward it to neighbors.',
          createdAt: now - 22 * H,
        },
      ],
      seed: true,
    },
    {
      id: 'seed-2',
      author: 'Dev T.',
      kind: 'win',
      pathId: 'online-gigs',
      text: 'What actually worked for me on Prolific: filling the profile to 100% FIRST and checking the tab morning + evening.\n\nStudies dropped in waves like the guide said — I caught two $8 ones in one evening just by having the tab pinned.',
      income: 52,
      createdAt: now - 2 * D - 3 * H,
      likes: 17,
      likedByMe: false,
      comments: [
        {
          id: 'seed-2c1',
          author: 'Maya R.',
          text: 'Confirmed — I did the same and got way more study invites in week two.',
          createdAt: now - 2 * D - 1 * H,
        },
      ],
      seed: true,
    },
    {
      id: 'seed-3',
      author: 'Jordan P.',
      kind: 'fail',
      pathId: 'reselling',
      text: "Fail post so you don't repeat it: dropped $60 on a 'vintage' leather jacket at a thrift store because it FELT like a steal.\n\nChecked sold listings when I got home: the last 5 sold for $25–35. I'm going to eat about $30 on it.\n\nThe sold-listings rule exists for a reason. Check BEFORE you buy, not after. 😅",
      createdAt: now - 3 * D - 6 * H,
      likes: 31,
      likedByMe: false,
      comments: [
        {
          id: 'seed-3c1',
          author: 'Lena K.',
          text: "Honestly the best posts on here are the fails. Adding 'check solds in the parking lot' to my routine.",
          createdAt: now - 3 * D - 2 * H,
        },
      ],
      seed: true,
    },
    {
      id: 'seed-4',
      author: 'Sam W.',
      kind: 'question',
      pathId: 'freelancing',
      text: 'When do I actually raise my rates? I have 5 steady clients at $25/hr, all happy, but every time I think about asking for more I chicken out.\n\nDid anyone here just… do it? How did the conversation go?',
      createdAt: now - 5 * H,
      likes: 9,
      likedByMe: false,
      comments: [
        {
          id: 'seed-4c1',
          author: 'Lena K.',
          text: "The level guide's move worked for me: keep existing clients at the old rate, put the new rate on every NEW proposal. No scary conversation needed — and after 3 new clients at +40% I raised the old ones too.",
          createdAt: now - 4 * H,
        },
        {
          id: 'seed-4c2',
          author: 'Marcus B.',
          text: 'Also: price the project, not the hour. Faster than you expect = you lose with hourly.',
          createdAt: now - 2 * H,
        },
      ],
      seed: true,
    },
    {
      id: 'seed-5',
      author: 'Lena K.',
      kind: 'progress',
      pathId: 'digital-products',
      milestoneId: 'first-100',
      text: "First Gumroad sale!!! 📦 A $14 Notion budget template I made in a weekend. Posted the making-of in the subreddit where I kept seeing the complaint — exactly like the guide says, 10 sales came from conversations, not ads.\n\n$97 total so far. It's not much but it PROVES it works.",
      income: 97,
      createdAt: now - 3 * D,
      likes: 28,
      likedByMe: false,
      comments: [
        {
          id: 'seed-5c1',
          author: 'Sam W.',
          text: "'Not much but it proves it works' is literally the whole first level. Congrats!",
          createdAt: now - 2 * D - 20 * H,
        },
      ],
      seed: true,
    },
    {
      id: 'seed-6',
      author: 'Marcus B.',
      kind: 'win',
      pathId: 'content',
      text: '90 days of posting 3x/week ✅ and the first affiliate money landed: $34 from links in my descriptions.\n\nWhat worked: studying the first 5 seconds of top posts in my niche. My hooks got visibly better around post 30 and one video finally popped off (12k views).\n\nTo everyone at day 20 with 40 views — the compounding starts later. Keep going.',
      income: 34,
      createdAt: now - 6 * D - 4 * H,
      likes: 41,
      likedByMe: false,
      comments: [],
      seed: true,
    },
    {
      id: 'seed-7',
      author: 'Tom V.',
      kind: 'fail',
      pathId: 'ecommerce',
      text: "$80 of TikTok ads → 2 sales → burned. My product page had no reviews, generic photos, and a headline about FEATURES.\n\nFixed all three before touching ads again: real lifestyle photos, an outcome headline, and the free-traffic feedback from 300 visitors. Conversion went 0.4% → 1.8%.\n\nAds amplify whatever exists. Mine was amplifying a leaky bucket.",
      createdAt: now - 8 * D - 2 * H,
      likes: 36,
      likedByMe: false,
      comments: [
        {
          id: 'seed-7c1',
          author: 'Marcus B.',
          text: "\"Ads amplify whatever exists\" — stealing this for my next post, with credit 😄",
          createdAt: now - 8 * D,
        },
      ],
      seed: true,
    },
  ]
}
