export interface Resource {
  id: string
  title: string
  description: string
  url: string
  type: 'tool' | 'platform' | 'course' | 'book' | 'community' | 'newsletter'
  cost: 'free' | 'paid' | 'freemium'
  tags: string[]
}

export const resources: Resource[] = [
  { id: 'r1', title: 'Prolific', description: 'Get paid for participating in research studies.', url: 'https://prolific.com', type: 'platform', cost: 'free', tags: ['gigs', 'online'] },
  { id: 'r2', title: 'Canva', description: 'Free design tool for templates, social media, presentations.', url: 'https://canva.com', type: 'tool', cost: 'freemium', tags: ['design', 'content'] },
  { id: 'r3', title: 'Gumroad', description: 'Sell digital products with zero upfront cost.', url: 'https://gumroad.com', type: 'platform', cost: 'free', tags: ['digital-products', 'selling'] },
  { id: 'r4', title: 'Notion', description: 'All-in-one workspace for planning, tracking, and building systems.', url: 'https://notion.so', type: 'tool', cost: 'freemium', tags: ['productivity', 'planning'] },
  { id: 'r5', title: 'YouTube', description: 'The best free education platform — learn anything.', url: 'https://youtube.com', type: 'platform', cost: 'free', tags: ['learning', 'content'] },
  { id: 'r6', title: 'Coursera', description: 'Free courses from top universities.', url: 'https://coursera.org', type: 'course', cost: 'free', tags: ['learning', 'skills'] },
  { id: 'r7', title: 'r/beermoney', description: 'Community sharing online money-making opportunities.', url: 'https://reddit.com/r/beermoney', type: 'community', cost: 'free', tags: ['community', 'gigs'] },
  { id: 'r8', title: 'The Index Card', description: 'Book: personal finance advice on a single index card.', url: 'https://indexcardbook.com', type: 'book', cost: 'paid', tags: ['books', 'finance'] },
  { id: 'r9', title: 'The Simple Path to Wealth', description: 'Book: JL Collins\' guide to building wealth.', url: 'https://simplepathwealth.com', type: 'book', cost: 'paid', tags: ['books', 'investing'] },
  { id: 'r10', title: 'Starter Story', description: 'Real founder stories with revenue and strategy breakdowns.', url: 'https://starterstory.com', type: 'newsletter', cost: 'free', tags: ['learning', 'business'] },
  { id: 'r11', title: 'The Profile', description: 'In-depth interviews with successful founders.', url: 'https://theprofile.com', type: 'newsletter', cost: 'free', tags: ['learning', 'business'] },
  { id: 'r12', title: 'Discord Communities', description: 'Join communities like r/discord for peer support and tips.', url: 'https://discord.com', type: 'community', cost: 'free', tags: ['community', 'networking'] },
  { id: 'r13', title: 'LinkedIn', description: 'Where every job and client lives. Set up a profile, list your skills, and connect with people in your niche.', url: 'https://linkedin.com', type: 'platform', cost: 'free', tags: ['jobs', 'networking'] },
  { id: 'r14', title: 'Indeed', description: 'The biggest job board there is. Filter for part-time, weekend, and remote work to stack your first income.', url: 'https://indeed.com', type: 'platform', cost: 'free', tags: ['jobs', 'local'] },
  { id: 'r15', title: 'freeCodeCamp', description: 'Learn to code for free with real certifications. The clearest zero-cost path into the software path.', url: 'https://freecodecamp.org', type: 'course', cost: 'free', tags: ['learning', 'skills'] },
  { id: 'r16', title: 'Wave', description: 'Free invoicing and accounting. Send professional invoices before you have a business license.', url: 'https://waveapps.com', type: 'tool', cost: 'free', tags: ['invoicing', 'business'] },
  { id: 'r17', title: 'Calendly', description: 'Clients book calls straight into your calendar — no more "when are you free?" texting.', url: 'https://calendly.com', type: 'tool', cost: 'freemium', tags: ['scheduling', 'clients'] },
  { id: 'r18', title: 'ChatGPT', description: 'Your free writing assistant: gig descriptions, Upwork proposals, product listings, and tricky client emails.', url: 'https://chatgpt.com', type: 'tool', cost: 'free', tags: ['writing', 'ai'] },
  { id: 'r19', title: 'Grammarly', description: 'Catches typos in everything you send. The free browser extension is all a beginner needs.', url: 'https://grammarly.com', type: 'tool', cost: 'freemium', tags: ['writing', 'quality'] },
  { id: 'r20', title: 'Pexels', description: 'Free stock photos and videos that make listings, thumbnails, and posts look professional.', url: 'https://pexels.com', type: 'tool', cost: 'free', tags: ['media', 'content'] },
  { id: 'r21', title: 'Google Sheets', description: 'The one spreadsheet every level needs: money in, money out, hours worked, where clients came from.', url: 'https://sheets.google.com', type: 'tool', cost: 'free', tags: ['tracking', 'productivity'] },
  { id: 'r22', title: 'Trello', description: 'Simple boards to keep client work and tasks organized so nothing slips when you get busy.', url: 'https://trello.com', type: 'tool', cost: 'freemium', tags: ['organization', 'productivity'] },
]
