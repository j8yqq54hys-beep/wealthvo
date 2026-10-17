export interface Experiment {
  id: string
  title: string
  date: string
  status: 'success' | 'failed' | 'in-progress' | 'pending'
  description: string
  whatIDid: string
  results: string
  lessons: string[]
  income: number
  image?: string
}

export const experiments: Experiment[] = [
  {
    id: 'exp-1',
    title: 'Flipping Thrift Store Finds',
    date: '2026-10-01',
    status: 'success',
    description: 'Bought $50 of items from thrift stores and resold them online.',
    whatIDid: 'Spent $50 at Goodwill. Found vintage clothes, books, and electronics. Listed on eBay and Facebook Marketplace.',
    results: 'Made $187 in 10 days. 271% return on investment.',
    lessons: ['Research sold prices before buying', 'Photos matter — good lighting = more sales', 'Electronics sold best, clothes took longer'],
    income: 187
  },
  {
    id: 'exp-2',
    title: 'Freelancing on Upwork',
    date: '2026-10-05',
    status: 'in-progress',
    description: 'Started freelancing as a web developer on Upwork.',
    whatIDid: 'Created a profile, applied to 20 jobs, built 2 sample projects for portfolio.',
    results: 'Got 3 proposals accepted, earned $340 so far.',
    lessons: ['Don\'t lowball — charge what you\'re worth', 'A simple portfolio beats no portfolio', 'Response rate matters — reply fast'],
    income: 340
  },
  {
    id: 'exp-3',
    title: 'YouTube Faceless Channel',
    date: '2026-10-12',
    status: 'pending',
    description: 'Starting a faceless YouTube channel about money tips.',
    whatIDid: 'Planned content calendar, script for first 5 videos, set up Canva for thumbnails.',
    results: 'Channel created, first video in production.',
    lessons: [],
    income: 0
  },
]
