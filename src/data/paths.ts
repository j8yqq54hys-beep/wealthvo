/**
 * The eight income paths. Each level inside a path is a mini blog post:
 * what the goal is, HOW to actually do it (specific actions), how you know
 * you're ready to level up, and what NOT to do while you're in it.
 */

export interface LevelStep {
  title: string
  detail: string
}

export interface LevelTrap {
  mistake: string
  why: string
}

export interface LevelResource {
  name: string
  url?: string
  note?: string
}

export interface Level {
  id: string
  title: string
  /** Which milestone of the overall roadmap this level lives in */
  milestoneId: string
  description: string
  goal: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  timeToReach: string
  startupCost: string
  keySkills: string[]
  howToWin: LevelStep[]
  readyToLevelUp: string[]
  traps: LevelTrap[]
  resources: LevelResource[]
}

export interface Path {
  id: string
  title: string
  description: string
  icon: string
  /** accent key from src/lib/colors.ts */
  color: string
  startupCost: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  realisticTimeline: string
  whoItsFor: string
  levels: Level[]
  resources: { name: string; url: string; type: string }[]
}

export const paths: Path[] = [
  {
    id: 'local-services',
    title: 'Local Services',
    description: 'Earn money by helping people in your area — cleaning, moving, repairs, yard work, pet care, and more.',
    icon: '🧹',
    color: 'orange',
    startupCost: '$0–$100',
    difficulty: 'beginner',
    realisticTimeline: '$100 in 1–2 weeks → $1K/mo in 1–3 months',
    whoItsFor: 'Anyone willing to work hard and show up consistently. No special skills required.',
    levels: [
      {
        id: 'local-100',
        title: 'First $100',
        milestoneId: 'first-100',
        description: 'Offer simple services in your neighborhood and get paid this week.',
        goal: 'Make your first $100 doing something for someone else.',
        difficulty: 'beginner',
        timeToReach: '1–2 weeks',
        startupCost: '$0–$50',
        keySkills: ['Talking to people', 'Showing up on time', 'Basic manual labor'],
        howToWin: [
          {
            title: 'Pick 1–3 services you can do with what you own',
            detail:
              'Mowing (if you have a mower), moving help, cleaning, leaf raking, trash hauling. The test: could you do it tomorrow morning with zero purchases? If yes, it’s on the list.',
          },
          {
            title: 'Post where neighbors actually look',
            detail:
              'Nextdoor, your neighborhood Facebook group, and Craigslist gigs. One honest photo of you working, the price, and availability. Post in the evening when people scroll — that’s when “someone to clean Saturday” requests appear.',
          },
          {
            title: 'Price at $20–30/hour and deliver small miracles',
            detail:
              'Show up 5 minutes early, do the edges others skip, and text a photo of the finished work. That one text is why they book you again and tell two neighbors.',
          },
          {
            title: 'Ask for the next job before you leave',
            detail:
              'Ending line: “I’m here every other week if you’d like this on a schedule.” Half will say no, some will say yes — and the yeses stack into your $1K/mo later.',
          },
        ],
        readyToLevelUp: [
          'You’ve earned $100+ across 2–3 jobs',
          'At least one customer asked if you “do this regularly”',
          'You finish jobs faster than your first attempt — your hourly rate is quietly rising',
        ],
        traps: [
          {
            mistake: 'Underpricing to “be safe”',
            why: 'At $12/hour you must work double the hours for the same money and attract price-shoppers — the worst customers. Fair prices attract people who value their weekends.',
          },
          {
            mistake: 'Being flaky about timing',
            why: 'In local work, reliability beats skill. One no-show erases three great jobs — neighbors talk. On-time is the entire brand at this level.',
          },
          {
            mistake: 'Spending on gear before customers',
            why: 'A $400 pressure washer with zero bookings is a hobby. Borrow or rent until real demand tells you what to buy.',
          },
        ],
        resources: [
          { name: 'Nextdoor', url: 'https://nextdoor.com', note: 'where neighbors ask for help' },
          { name: 'Facebook Marketplace', url: 'https://facebook.com/marketplace', note: 'gigs + services category' },
          { name: 'TaskRabbit', url: 'https://taskrabbit.com', note: 'they take a cut but bring customers' },
        ],
      },
      {
        id: 'local-1k',
        title: '$1K/Month',
        milestoneId: 'first-1k',
        description: 'Turn one-time gigs into a booked-out local business with recurring clients.',
        goal: 'Recurring weekly or biweekly clients cover $1K/mo without new hustle.',
        difficulty: 'beginner',
        timeToReach: '1–3 months',
        startupCost: '$50–$200',
        keySkills: ['Customer service', 'Pricing confidence', 'Scheduling'],
        howToWin: [
          {
            title: 'Convert every happy customer into a recurring slot',
            detail:
              'Offer a simple plan: “Every other week, same day, $X.” Ten biweekly clients at $60–100 per visit is $1,200–2,000/mo. Recurring slots mean you stop selling and start routing.',
          },
          {
            title: 'Raise rates 20% on every new client',
            detail:
              'Existing clients keep their price; new bookings pay the new one. Your first price was a guess — this is how you find the real ceiling without risking the base.',
          },
          {
            title: 'Run a referral engine',
            detail:
              'After each finished job: “If a neighbor could use this, I’ll give you $20 off your next visit when they book.” Cheap, honest, and local word-of-mouth compounds fast.',
          },
          {
            title: 'Claim your Google Business Profile',
            detail:
              'Free, takes 15 minutes, and it’s how “cleaner near me” finds you. Ask recurring clients for a review after their second visit — that’s when the praise is specific.',
          },
          {
            title: 'Keep a route, not a scatter',
            detail:
              'Cluster clients by neighborhood and day. Driving 40 minutes between jobs is a pay cut; four jobs in one subdivision on one afternoon is a raise.',
          },
        ],
        readyToLevelUp: [
          'Your week is mostly recurring slots — income arrives without re-selling it',
          'You’re turning work away or raising prices without losing your best clients',
          'A waitlist exists — demand exceeds your hours, which is pricing power',
        ],
        traps: [
          {
            mistake: 'Doing every job yourself forever',
            why: 'Solo caps out around your waking hours. Once the schedule is full, a paid helper on your best day doubles revenue — that’s the door to $5K/mo.',
          },
          {
            mistake: 'Never asking for referrals',
            why: 'Happy customers assume you’re busy. The ask takes one text and costs nothing — skipping it is leaving your cheapest growth channel empty.',
          },
          {
            mistake: 'Staying at launch rates for a year',
            why: 'A year of experience, reviews, and full calendar is worth more than day-one pricing. Raise annually at minimum — the market will tell you when you’ve gone too far.',
          },
        ],
        resources: [
          { name: 'Google Business Profile', url: 'https://business.google.com', note: 'free local discovery + reviews' },
          { name: 'Thumbtack', url: 'https://thumbtack.com', note: 'pay per lead — track ROI closely' },
          { name: 'Jobber', url: 'https://getjobber.com', note: 'scheduling + invoicing when it gets busy' },
        ],
      },
    ],
    resources: [
      { name: 'TaskRabbit', url: 'https://taskrabbit.com', type: 'Platform' },
      { name: 'Thumbtack', url: 'https://thumbtack.com', type: 'Platform' },
      { name: 'Nextdoor', url: 'https://nextdoor.com', type: 'Community' },
    ],
  },
  {
    id: 'freelancing',
    title: 'Freelancing',
    description: 'Sell your skills — writing, design, coding, video editing, translation — to clients worldwide.',
    icon: '💻',
    color: 'violet',
    startupCost: '$0–$200',
    difficulty: 'intermediate',
    realisticTimeline: '$100 in 2–4 weeks → $1K/mo in 2–4 months',
    whoItsFor: 'People with a marketable skill who can communicate well and meet deadlines.',
    levels: [
      {
        id: 'free-100',
        title: 'First $100',
        milestoneId: 'first-100',
        description: 'Land your first paid client with the skill you already have.',
        goal: 'Get paid real money for a skill you already have.',
        difficulty: 'intermediate',
        timeToReach: '2–4 weeks',
        startupCost: '$0–$100',
        keySkills: ['Sales', 'Portfolio presentation', 'Client communication'],
        howToWin: [
          {
            title: 'Build a 3-piece portfolio this weekend',
            detail:
              'No clients yet? Make the work: redesign a real small-business site, write a sample newsletter for a brand you like, edit a stock-footage reel. Nobody pays for potential, but everybody pays for proof — three strong samples are proof.',
          },
          {
            title: 'Apply like it’s a numbers game, because it is',
            detail:
              'Ten thoughtful proposals a day beats one perfect one a week. Open with their problem, not your resume: first two lines must be about THEM. Reply within an hour of posting — speed wins on Upwork.',
          },
          {
            title: 'Do one small paid test project cheap — once',
            detail:
              'A $50–100 first project buys reviews, which buy everything else. Say yes to one or two, over-deliver, then never again — this is a launch ramp, not a price.',
          },
          {
            title: 'Wrap every project in professionalism',
            detail:
              'One-page scope, a deadline, and a simple message when it’s done: “Delivered — here’s a quick summary of choices I made.” This reads senior; senior reads expensive. Clone a contract template — never work without one.',
          },
        ],
        readyToLevelUp: [
          'You have 2–3 completed projects and testimonials to show',
          'Clients come back or refer you without you asking',
          'You know your real delivery speed and can price by project, not by anxious hour',
        ],
        traps: [
          {
            mistake: 'Racing to the bottom on price',
            why: 'The cheapest bidder attracts clients who haggle, scope-creep, and vanish. Fair-rate clients respect boundaries and refer — the cheap ones cost you the expensive ones.',
          },
          {
            mistake: 'Taking every client that says yes',
            why: 'Red flags: “quick and easy” (it won’t be), no budget stated, weekend emergencies from strangers. One bad client can eat the month you needed for two good ones.',
          },
          {
            mistake: 'No written scope',
            why: '“Just one more small thing” five times is a 40% pay cut. A one-paragraph scope with “revisions: 2 rounds included” prevents it for free.',
          },
        ],
        resources: [
          { name: 'Upwork', url: 'https://upwork.com', note: 'biggest market — brutal start, real money later' },
          { name: 'Contra', url: 'https://contra.com', note: '0% commission for creatives' },
          { name: 'Bonsai', url: 'https://hellobonsai.com', note: 'contracts + invoicing templates' },
        ],
      },
      {
        id: 'free-1k',
        title: '$1K/Month',
        milestoneId: 'first-1k',
        description: 'Build a repeatable pipeline instead of a proposal treadmill.',
        goal: 'Consistent clients at rising rates — no more feast-or-famine.',
        difficulty: 'intermediate',
        timeToReach: '2–4 months',
        startupCost: '$100–$500',
        keySkills: ['Niche selection', 'Raising rates', 'Managing projects'],
        howToWin: [
          {
            title: 'Pick a niche you can name in six words',
            detail:
              '“Webflow sites for law firms.” “Email copy for course creators.” Specialists charge 2–4x generalists because the client trusts that you’ve seen their exact problem before. Rewrite your profile and proposals around it this week.',
          },
          {
            title: 'Raise rates 25–50% on every new proposal',
            detail:
              'New clients never knew the old price. Keep delivering the same quality and track the response — when close rates hold, raise again. Your current clients keep their rate until scope grows.',
          },
          {
            title: 'Retire platforms as fast as you can',
            detail:
              'Marketplaces take 10–20% and own the client relationship. Every happy platform client gets a gentle move to direct (check the terms first). Your own list — even 20 emails — is a business; a platform profile is a rental.',
          },
          {
            title: 'Create one productized offer',
            detail:
              'A fixed-scope, fixed-price package (“Landing page in 5 days — $900”) sells 3x easier than hours. It forces you to systemize, and it’s the seed of scaling beyond your calendar.',
          },
          {
            title: 'Save 25–30% of every payment for taxes',
            detail:
              'Freelance income is untaxed at source, and April surprise-bills kill more freelance careers than bad clients. A separate account, automatic transfer, done.',
          },
        ],
        readyToLevelUp: [
          'You’re declining work — either too much volume or rates too low for the ask',
          'Half your revenue is repeat or referral clients',
          'A niche is emerging: you can name your best client type without hesitating',
        ],
        traps: [
          {
            mistake: 'Staying a generalist',
            why: '“I can do anything” is a positioning that competes on price forever. The riches are in the niches because trust converts better than range.',
          },
          {
            mistake: 'Ignoring the tax man',
            why: 'No withholdings means a nasty spring bill plus penalties. Automate the 25–30% split on day one — future you sends thanks.',
          },
          {
            mistake: 'Living proposal-to-proposal',
            why: 'Feast-famine isn’t a personality, it’s a missing pipeline. An hour a week of outreach even while busy is the difference between choosing work and begging for it.',
          },
        ],
        resources: [
          { name: 'Bonsai', url: 'https://hellobonsai.com', note: 'contracts, invoices, tax reminders' },
          { name: 'Notion', url: 'https://notion.so', note: 'free client + pipeline tracker' },
          { name: 'Fiverr Workspace', url: 'https://workspace.fiverr.com', note: 'free contracts + time tracking' },
        ],
      },
    ],
    resources: [
      { name: 'Upwork', url: 'https://upwork.com', type: 'Platform' },
      { name: 'Contra', url: 'https://contra.com', type: 'Platform' },
    ],
  },
  {
    id: 'online-gigs',
    title: 'Online Gigs',
    description: 'Make money from your computer — research studies, microtasks, virtual assistance, testing.',
    icon: '📱',
    color: 'cyan',
    startupCost: '$0',
    difficulty: 'beginner',
    realisticTimeline: '$50 in 1 week → $500/mo in 1–2 months',
    whoItsFor: 'Anyone with internet access and patience. The gentlest possible starting point.',
    levels: [
      {
        id: 'gigs-100',
        title: 'First $100',
        milestoneId: 'first-100',
        description: 'Sign up and complete tasks on multiple legit platforms.',
        goal: 'Earn your first $100 online without spending a cent.',
        difficulty: 'beginner',
        timeToReach: '3–7 days',
        startupCost: '$0',
        keySkills: ['Attention to detail', 'Basic computer skills', 'Time management'],
        howToWin: [
          {
            title: 'Sign up for 5–10 legit platforms today',
            detail:
              'Prolific (research studies — best pay), UserTesting, Swagbucks, Amazon MTurk, Clickworker. Rule zero: any site asking YOU to pay is a scam. Legit platforms pay you, never the reverse.',
          },
          {
            title: 'Complete every profile 100% before doing tasks',
            detail:
              'Demographic data is how Prolific matches you to studies worth $8–15/hour. A half-finished profile gets half the studies. One focused evening, permanent better matching.',
          },
          {
            title: 'Check Prolific morning and evening',
            detail:
              'Studies drop in waves and fill fast — two 2-minute check-ins a day is the whole strategy. Keep the tab pinned; when a study appears, take it immediately.',
          },
          {
            title: 'Treat it like a shift, not a scroll',
            detail:
              'One focused hour a day beats four distracted ones. Track hourly earnings per platform in a note — after two weeks, double down on the top one and drop the rest.',
          },
        ],
        readyToLevelUp: [
          'You’ve cashed out $100+ and know which platform pays best per hour',
          'You can earn ~$10/hour on demand — the loop from time to money is proven',
          'You’re bored — which is the signal to convert screen time into a real skill',
        ],
        traps: [
          {
            mistake: 'Paying to join anything',
            why: '“Activation fees” and “premium task access” are the classic tell. Every legitimate platform is free to join, forever.',
          },
          {
            mistake: 'Living on $2/hour tasks',
            why: 'Surveys and click-farms cap brutally low. They’re fine for day one proof — but the same hour invested in Canva, writing, or data skills pays 5–10x within months.',
          },
          {
            mistake: 'One platform only',
            why: 'Work dries up without warning — studies end, queues empty. Three active platforms is a stable income floor; one is a coin flip.',
          },
        ],
        resources: [
          { name: 'Prolific', url: 'https://prolific.com', note: 'research studies, fair pay, the best one' },
          { name: 'UserTesting', url: 'https://usertesting.com', note: '$10 per 20-min website test' },
          { name: 'r/beermoney', url: 'https://reddit.com/r/beermoney', note: 'community vetting of what’s legit' },
        ],
      },
      {
        id: 'gigs-500',
        title: '$500/Month',
        milestoneId: 'first-1k',
        description: 'Graduate from microtasks to real virtual work.',
        goal: 'Virtual assistance or gig services replace microtask grinding.',
        difficulty: 'beginner',
        timeToReach: '1–2 months',
        startupCost: '$0–$100',
        keySkills: ['Communication', 'Organization', 'One specialized tool'],
        howToWin: [
          {
            title: 'Learn one tool deeply this month',
            detail:
              'Canva for design, or a publishing stack (Notion + a scheduler) for social VA work. One tool at “fast and reliable” level beats five at beginner — clients hire the former.',
          },
          {
            title: 'Package a micro-service on Fiverr',
            detail:
              '“I’ll design 5 Canva posts for $25, 48-hour delivery.” Small, clear, buyable without a call. Deliver early, collect reviews, raise the price every five orders.',
          },
          {
            title: 'Pitch 3 small businesses a week for VA work',
            detail:
              'Local shops and solo creators are drowning in inbox and scheduling. Short message: who you are, one concrete outcome (“I answer email and book calls so you sell more”), your rate. Three a week, every week — that’s a pipeline.',
          },
          {
            title: 'Graduate to VA agencies and platforms',
            detail:
              'Belay and Time Etc pay better than microtasks and come with clients included. The interview is mostly reliability questions — your microtask track record is the answer.',
          },
        ],
        readyToLevelUp: [
          'You earn $15+/hour consistently — real-service rates, not survey rates',
          'A repeat client or two relies on you weekly',
          'You’ve hit the ceiling of hours and are ready for real pricing power (see Freelancing)',
        ],
        traps: [
          {
            mistake: 'Staying in the microtask comfort zone',
            why: 'It feels safe because it’s easy — but $3/hour forever is not a plan, it’s a trap with extra steps. Use earnings data as a springboard, not a home.',
          },
          {
            mistake: 'No routine',
            why: 'Gig income without a schedule evaporates. Same hour daily = 4x output of “when I feel like it,” and clients can tell who has a routine.',
          },
          {
            mistake: 'Offering everything',
            why: '“Admin, design, social, research…” reads as junior. One sharp offer (“Canva posts for coaches”) wins the client and the better rate.',
          },
        ],
        resources: [
          { name: 'Fiverr', url: 'https://fiverr.com', note: 'package a micro-service' },
          { name: 'Belay', url: 'https://belaysolutions.com', note: 'VA agency — clients included' },
          { name: 'Canva', url: 'https://canva.com', note: 'the fastest skill-to-money tool' },
        ],
      },
    ],
    resources: [
      { name: 'Prolific', url: 'https://prolific.com', type: 'Research' },
      { name: 'UserTesting', url: 'https://usertesting.com', type: 'Testing' },
    ],
  },
  {
    id: 'reselling',
    title: 'Reselling',
    description: 'Buy low, sell high — thrift stores, clearance, garage sales, online arbitrage.',
    icon: '🛒',
    color: 'emerald',
    startupCost: '$100–$500',
    difficulty: 'intermediate',
    realisticTimeline: '$100 in 1–2 weeks → $1K/mo in 2–4 months',
    whoItsFor: 'People who like hunting for deals and have an eye for value.',
    levels: [
      {
        id: 'resell-100',
        title: 'First $100',
        milestoneId: 'first-100',
        description: 'Learn to spot undervalued items and flip them.',
        goal: 'Turn $100 (or less) into $200+ through smart reselling.',
        difficulty: 'intermediate',
        timeToReach: '1–2 weeks',
        startupCost: '$100',
        keySkills: ['Research', 'Photography', 'Listing quality'],
        howToWin: [
          {
            title: 'Start with what you know',
            detail:
              'Sneakers? Video games? Kitchen gear? Your existing knowledge is an unfair advantage — you can spot a $60 item priced at $8 in seconds. Strangers’ niches are how beginners overpay.',
          },
          {
            title: 'Check sold prices, never asking prices',
            detail:
              'eBay: search the item → filter “Sold Items.” Asking prices are wishes; sold prices are facts. No sold history above ~$25? Put it down and walk away — this single rule protects your entire budget.',
          },
          {
            title: 'Photograph like it matters, because it does',
            detail:
              'Plain background (a wall or a sheet), daylight near a window, 5–8 photos including flaws honestly. Good photos are the entire marketing budget — they can double the final price.',
          },
          {
            title: 'List on the platform where it belongs',
            detail:
              'eBay for most things, Poshmark for brand fashion, Facebook Marketplace for local/bulky (no shipping). Ship same or next day — seller ratings are the flywheel.',
          },
        ],
        readyToLevelUp: [
          'You’ve doubled your starting budget at least once',
          'You can eyeball a thrift shelf and shortlist candidates in minutes',
          'Your items sell within two weeks of listing — you’ve found your category',
        ],
        traps: [
          {
            mistake: 'Overpaying for “maybe” items',
            why: 'Beginner math: “it’s only $8.” Professional math: “it sells for $22, ships for $8, fees take $4 — that’s $2/hour.” The sold-price rule exists to prevent this death by $8.',
          },
          {
            mistake: 'Buying slow movers',
            why: 'Capital tied up in dusty inventory can’t buy the hot item you find tomorrow. If it hasn’t sold in 30 days, discount it and recycle the cash.',
          },
          {
            mistake: 'Skipping the spreadsheet',
            why: 'Item, cost, fees, shipping, sale price, profit. Without it you can feel busy and rich while actually paying to play. Five minutes per listing.',
          },
        ],
        resources: [
          { name: 'eBay Sold Listings', url: 'https://ebay.com', note: 'filter by “Sold Items” — your pricing bible' },
          { name: 'Poshmark', url: 'https://poshmark.com', note: 'brand fashion, social selling' },
          { name: 'Facebook Marketplace', url: 'https://facebook.com/marketplace', note: 'local sales, zero shipping' },
        ],
      },
      {
        id: 'resell-1k',
        title: '$1K/Month',
        milestoneId: 'first-1k',
        description: 'Scale sourcing and turn flipping into a system.',
        goal: 'A repeatable sourcing-to-listing pipeline producing $1K/mo profit.',
        difficulty: 'intermediate',
        timeToReach: '2–4 months',
        startupCost: '$200–$500',
        keySkills: ['Inventory management', 'Bundling', 'Pricing strategy'],
        howToWin: [
          {
            title: 'Double down on your proven category',
            detail:
              'Your spreadsheet shows which category actually pays. Go deep there: learn models, brands, and seasonal patterns. Specialists source faster, price smarter, and sell quicker than generalists.',
          },
          {
            title: 'Build a sourcing route',
            detail:
              'Same thrift stores weekly (ask when restocks land), clearance racks on a schedule, garage-sale Saturday mornings. Sourcing is a route, not luck — the pros know which shelf gets stocked which day.',
          },
          {
            title: 'Batch the work',
            detail:
              'Photograph 10 items in one session, list 10 in another, ship on fixed days. Context-switching is the hidden hourly-rate killer — batches turn this from hobby pace to business pace.',
          },
          {
            title: 'Bundle and average up',
            detail:
              'Group small related items (“lot of 5 gaming cables, $30”) to move slow stock and raise average order value. One listing, one shipment, five items gone.',
          },
          {
            title: 'Reinvest exactly 50%',
            detail:
              'Half of profit back into inventory, half to you. Reinvesting everything starves your life; withdrawing everything starves growth. 50/50 until $1K/mo, then revisit.',
          },
        ],
        readyToLevelUp: [
          'Consistent $800–1,000/mo profit for 3 months',
          'A sourcing route that reliably produces inventory — you’re not “finding” deals anymore, you’re collecting them',
          'You could hand sourcing or listing to a helper for a day and the machine keeps running',
        ],
        traps: [
          {
            mistake: 'Hoarding unsellable stock',
            why: 'A garage of “someday” items is money frozen at negative interest. Inventory is fuel, not trophies — burn it or recycle it into cash.',
          },
          {
            mistake: 'Not tracking expenses',
            why: 'Mileage, shipping supplies, platform fees, cost of goods — untracked, these silently eat 20–30%. Tracked, they’re decisions.',
          },
          {
            mistake: 'Emotional attachment to inventory',
            why: '“It’s worth $80!” — it’s worth what someone pays this month. The market doesn’t care what you paid or how you feel; price to move.',
          },
        ],
        resources: [
          { name: 'eBay', url: 'https://ebay.com', note: 'your pricing bible — filter by Sold Items' },
          { name: 'Mercari', url: 'https://mercari.com', note: 'lower fees, fast sales' },
          { name: 'Flyp / crosslist tools', url: 'https://flyp.me', note: 'list once, sell everywhere' },
        ],
      },
    ],
    resources: [
      { name: 'eBay', url: 'https://ebay.com', type: 'Marketplace' },
      { name: 'Poshmark', url: 'https://poshmark.com', type: 'Fashion' },
    ],
  },
  {
    id: 'content',
    title: 'Content Creation',
    description: 'Build an audience on YouTube, TikTok, or a blog. Monetize through ads, sponsorships, and products.',
    icon: '🎬',
    color: 'pink',
    startupCost: '$0–$500',
    difficulty: 'advanced',
    realisticTimeline: '$0 for 3–6 months → $1K/mo in 6–12 months',
    whoItsFor: 'People willing to be consistent and patient. Results take time but compound hardest.',
    levels: [
      {
        id: 'content-100',
        title: 'First $100',
        milestoneId: 'first-100',
        description: 'Publish relentlessly and learn what resonates.',
        goal: 'First real money from content — affiliate, tip, or small sponsor.',
        difficulty: 'advanced',
        timeToReach: '3–6 months',
        startupCost: '$0–$200',
        keySkills: ['Storytelling', 'Editing', 'Consistency', 'Hook writing'],
        howToWin: [
          {
            title: 'Pick ONE platform and post 3x/week for 90 days',
            detail:
              'The platform where you’ll still show up in month three. The niche: one audience plus one outcome (“budgeting for new grads”). One platform, one promise — everything else is a distraction in disguise.',
          },
          {
            title: 'Study 10 winners, reverse-engineer the first 5 seconds',
            detail:
              'The hook decides 80% of performance. Screenshot the hooks of the best performers in your niche, write 10 of yours per post, keep the sharpest. Titles and thumbnails are half the job — treat them that way.',
          },
          {
            title: 'Aim for volume with feedback, not perfection',
            detail:
              'Your first 30 posts are practice that ships. Each one: one idea, one takeaway, done in a day. Perfectionism is fear wearing a productivity costume — publish, learn, iterate.',
          },
          {
            title: 'Make your first $100 the honest way',
            detail:
              'Affiliate links for gear you actually use, a tip jar, or a $5 digital download. Small first money matters less as income and more as signal: strangers find your work valuable enough to pay for.',
          },
        ],
        readyToLevelUp: [
          'A few posts clearly outperformed the rest — you know what your audience wants',
          'Strangers comment, share, or subscribe — it’s not just friends being nice',
          'Publishing 3x/week feels routine, not heroic',
        ],
        traps: [
          {
            mistake: 'Quitting at month two',
            why: 'Almost every monetized creator has a graveyard of months with 40 views. The compounding starts after ~50–100 posts; quitting at 20 means paying the costs and skipping the reward.',
          },
          {
            mistake: 'Chasing trends outside your promise',
            why: 'A viral one-off brings tourists, not residents. Serve your one audience relentlessly — reach without relevance doesn’t monetize.',
          },
          {
            mistake: 'Polishing post one for six weeks',
            why: 'Six weeks = six posts of learning lost. You can’t find what resonates from inside your editing software — only the audience can tell you, one post at a time.',
          },
        ],
        resources: [
          { name: 'CapCut', url: 'https://capcut.com', note: 'free editing, fast enough for 3x/week' },
          { name: 'Canva', url: 'https://canva.com', note: 'thumbnails that get clicked' },
          { name: 'Google Trends', url: 'https://trends.google.com', note: 'what your niche is searching' },
        ],
      },
      {
        id: 'content-1k',
        title: '$1K/Month',
        milestoneId: 'first-1k',
        description: 'Stack income streams on top of the audience you built.',
        goal: '$1K/mo from a mix of ads, sponsors, affiliates, and products.',
        difficulty: 'advanced',
        timeToReach: '6–12 months',
        startupCost: '$200–$500',
        keySkills: ['Audience engagement', 'Sponsorship pitching', 'Product creation'],
        howToWin: [
          {
            title: 'Start the email list before you need it',
            detail:
              'Platforms change algorithms; email doesn’t. A freebie (checklist, template, mini-guide) converts viewers to subscribers. By the time you sell something, the list is the launch.',
          },
          {
            title: 'Pitch sponsors at 5–10K engaged followers',
            detail:
              'You don’t need a million — you need a niche brands want. Pitch small tools in your space with a one-pager: audience, engagement, what you offer. $200–500 per integration is normal at this size.',
          },
          {
            title: 'Sell something once a month, minimum',
            detail:
              'A $9 template, a $29 guide — one small product teaches you the entire commerce loop (offer, page, pitch, delivery) with training wheels. Your best-selling post tells you what the product should be.',
          },
          {
            title: 'Repurpose everything',
            detail:
              'One long video = 3 shorts + a newsletter + 2 tweets. Same idea, four surfaces, four chances to compound. Creating once and posting once is leaving 70% of the value on the table.',
          },
        ],
        readyToLevelUp: [
          'Income arrives from 2+ sources — no single platform outage can zero you',
          'Sponsors or affiliates approach YOU',
          'A product idea keeps appearing in your comments — the audience is writing your roadmap',
        ],
        traps: [
          {
            mistake: 'Building on one platform only',
            why: 'Algorithm shifts and bans are an extinction-level event for single-platform creators. Own the email list; treat every platform as rented land.',
          },
          {
            mistake: 'Ignoring analytics',
            why: 'Watch time and saves tell you what to make next; vibes don’t. Ten minutes of analytics per week doubles the value of ten hours of creating.',
          },
          {
            mistake: 'Selling nothing while waiting to be “big enough”',
            why: 'There is no big enough — there’s only start and learn. Sellers at 2K followers outlearn sellers at 200K who never made an offer.',
          },
        ],
        resources: [
          { name: 'Kit (ConvertKit)', url: 'https://kit.com', note: 'free email list up to 10K' },
          { name: 'Beacons', url: 'https://beacons.ai', note: 'one link, all your monetization' },
          { name: 'SparkLoop', url: 'https://sparkloop.app', note: 'newsletter growth partnerships' },
        ],
      },
    ],
    resources: [
      { name: 'CapCut', url: 'https://capcut.com', type: 'Editing' },
      { name: 'Canva', url: 'https://canva.com', type: 'Design' },
    ],
  },
  {
    id: 'digital-products',
    title: 'Digital Products',
    description: 'Create once, sell forever — templates, courses, ebooks, printables, tools, presets.',
    icon: '📦',
    color: 'amber',
    startupCost: '$0–$200',
    difficulty: 'intermediate',
    realisticTimeline: '$100 in 2–4 weeks → $1K/mo in 2–6 months',
    whoItsFor: 'People who can package what they know into something others reuse.',
    levels: [
      {
        id: 'digi-100',
        title: 'First $100',
        milestoneId: 'first-100',
        description: 'Ship a small product that solves one sharp problem.',
        goal: 'Make your first sale — proof that your knowledge converts.',
        difficulty: 'intermediate',
        timeToReach: '2–4 weeks',
        startupCost: '$0–$100',
        keySkills: ['Problem spotting', 'Product creation', 'Basic marketing'],
        howToWin: [
          {
            title: 'Find a problem you hear people complain about weekly',
            detail:
              'Mine your own comments, DMs, Reddit, Discord — the complaint you see three times is a product. “I hate writing my weekly update” beats “productivity template” by a mile. Specific pain, specific product.',
          },
          {
            title: 'Build the weekend version',
            detail:
              'A 10-page PDF, a Notion template, a Canva pack — 6–10 hours total, priced $9–29. Version one exists to learn what buyers want, not to be beautiful. Done and selling beats perfect and pending.',
          },
          {
            title: 'List it where buyers already browse',
            detail:
              'Gumroad for simplicity, Etsy for search traffic, Lemon Squeezy when you grow. Write the listing around the transformation: “Never stare at a blank update doc again,” not “10-page PDF.”',
          },
          {
            title: 'Tell the 10 people who have the problem',
            detail:
              'Post the making-of where the complaint lives (that subreddit, that Discord). “I built the thing we all kept asking for — here it is.” Your first 10 sales come from conversations, not ads.',
          },
        ],
        readyToLevelUp: [
          'You’ve made a handful of sales — and at least one came from a stranger',
          'A buyer told you what they wish it included — that’s your roadmap',
          'You could make version two in half the time — the process is becoming a system',
        ],
        traps: [
          {
            mistake: 'Overcomplicating version one',
            why: 'A 6-hour course that ships teaches you more than a 60-hour course that doesn’t. Small products find buyers fast; big products find excuses.',
          },
          {
            mistake: 'Pricing at $1–3 “to be safe”',
            why: 'Cheap attracts refund-seekers and signals low value. $9–29 is the honest beginner band — enough to filter for real buyers, low enough for an impulse buy.',
          },
          {
            mistake: 'Building with zero audience signal',
            why: 'Six weeks building in silence for a market you never asked is the classic first-product failure. Post the idea first — 20 “I’d buy that” replies is your green light.',
          },
        ],
        resources: [
          { name: 'Gumroad', url: 'https://gumroad.com', note: 'sell in 15 minutes, no monthly fee' },
          { name: 'Etsy', url: 'https://etsy.com', note: 'printables + templates with built-in search' },
          { name: 'Canva', url: 'https://canva.com', note: 'make the product AND the mockups' },
        ],
      },
      {
        id: 'digi-1k',
        title: '$1K/Month',
        milestoneId: 'first-1k',
        description: 'Turn one product into a small catalog with a list behind it.',
        goal: 'A product line and an email list producing consistent monthly sales.',
        difficulty: 'intermediate',
        timeToReach: '2–6 months',
        startupCost: '$100–$300',
        keySkills: ['Marketing', 'Product development', 'Email list building'],
        howToWin: [
          {
            title: 'Ship v2 of your best-seller, then sibling products',
            detail:
              'Your sales data already picked the winner. Improve it with buyer feedback, then build the obvious neighbors (the checklist that complements the template). Catalogs cross-sell; lone products don’t.',
          },
          {
            title: 'Build the email list with a free bite of the paid thing',
            detail:
              'One-page free version of your best product as the signup incentive. Every buyer was once a freebie-taker — the list is where consistent launches live.',
          },
          {
            title: 'Email the list every week — sell every third',
            detail:
              'Two helpful emails, then one launch or offer. People buy from senders who gave value first. A 500-person warm list outsells 50K passive followers.',
          },
          {
            title: 'Collect reviews and plaster them',
            detail:
              'Ask every buyer, one day after delivery: “One sentence on what it helped with?” Screenshots of real words on your listing page are the highest-leverage marketing you own.',
          },
          {
            title: 'Run a real launch every quarter',
            detail:
              'New product or major update, one week of emails and posts, a launch discount with a deadline. Launches create focus for you and urgency for buyers — and they reliably spike a flat month.',
          },
        ],
        readyToLevelUp: [
          'Sales happen weekly without you manually pushing — the listing + list do the work',
          'You have 2–3 products and can see which audience buys them all',
          'Buyers email you asking “what’s next?” — demand is ahead of supply',
        ],
        traps: [
          {
            mistake: 'Launching into silence',
            why: 'The list exists precisely so launches aren’t crickets. Build the audience before you need it — or partner with someone who has it.',
          },
          {
            mistake: 'Never updating products',
            why: 'Stale listings die in search and refunds. A quarterly refresh (new examples, fixed screenshots) keeps conversions alive and gives past buyers a reason to talk about you.',
          },
          {
            mistake: 'Too many products, no depth',
            why: 'Twelve mediocre products split your attention and your brand. One great product with 50 reviews outsells twelve with three.',
          },
        ],
        resources: [
          { name: 'Kit (ConvertKit)', url: 'https://kit.com', note: 'email list + freebie automation' },
          { name: 'Lemon Squeezy', url: 'https://lemonsqueezy.com', note: 'scales with you, handles taxes' },
          { name: 'Notion', url: 'https://notion.so', note: 'build template products fast' },
        ],
      },
    ],
    resources: [
      { name: 'Gumroad', url: 'https://gumroad.com', type: 'Platform' },
      { name: 'Etsy', url: 'https://etsy.com', type: 'Marketplace' },
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    description: 'Sell physical products — dropshipping, print-on-demand, handmade goods, or your own products.',
    icon: '🛍️',
    color: 'rose',
    startupCost: '$100–$1000',
    difficulty: 'advanced',
    realisticTimeline: '$100 in 2–4 weeks → $1K/mo in 3–6 months',
    whoItsFor: 'People willing to learn marketing, understand customers, and handle logistics.',
    levels: [
      {
        id: 'ec-100',
        title: 'First $100',
        milestoneId: 'first-100',
        description: 'Launch a simple store and make your first sales.',
        goal: 'First $100 of online sales — proof your product + message convert.',
        difficulty: 'advanced',
        timeToReach: '2–4 weeks',
        startupCost: '$100–$300',
        keySkills: ['Store setup', 'Offer writing', 'Customer empathy'],
        howToWin: [
          {
            title: 'Choose a niche where people already buy repetitively',
            detail:
              'Pet owners, hobbyists, specific professions. Check demand honestly: Etsy bestsellers, Amazon reviews (“I wish it also…”), TikTok Shop. You want proven spenders with an unmet angle — not a “unique idea” nobody has validated.',
          },
          {
            title: 'Launch with 1–3 products, not 30',
            detail:
              'One hero product with a great page converts better than a scattered catalog and teaches you faster. Print-on-demand (Printful) or handmade means zero inventory risk while you learn.',
          },
          {
            title: 'Write the product page like a landing page',
            detail:
              'Headline = outcome (“Gift for the dog who destroys every toy”). Photos in real use, 5 bullet benefits (not features), FAQ that handles the top 3 objections. This page IS the store — polish it obsessively.',
          },
          {
            title: 'Get the first 100 visitors free before touching ads',
            detail:
              'Post the product in niche communities (respect the rules), 3 short TikToks/Reels a week showing it in use, pin on Pinterest. Free traffic forces your offer to get good; ads on a weak offer just burn money faster.',
          },
        ],
        readyToLevelUp: [
          'You’ve made sales to people who aren’t friends',
          'You know your conversion rate and where visitors come from',
          'At least one product clearly outsells the rest — your hero is emerging',
        ],
        traps: [
          {
            mistake: 'Spending on ads before the offer converts',
            why: 'Ads are an amplifier, not a fixer. If 100 free visitors buy nothing, 1,000 paid visitors buy nothing faster. Fix the page first — always.',
          },
          {
            mistake: 'Choosing products on vibes',
            why: '“I like it” is not demand. Sold data (Etsy/Amazon/TikTok) is demand. The graveyard of e-com is full of stores founded on personal taste.',
          },
          {
            mistake: 'Perfection-launching for a month',
            why: 'Logo fonts don’t make sales; offers do. A decent store live this week with real feedback beats a beautiful store “launching soon” forever.',
          },
        ],
        resources: [
          { name: 'Shopify', url: 'https://shopify.com', note: 'the standard; $1/mo trial periods are common' },
          { name: 'Etsy', url: 'https://etsy.com', note: 'zero-risk start with built-in buyers' },
          { name: 'Printful', url: 'https://printful.com', note: 'print-on-demand, no inventory' },
        ],
      },
      {
        id: 'ec-1k',
        title: '$1K/Month',
        milestoneId: 'first-1k',
        description: 'Optimize the funnel and scale what already works.',
        goal: 'Consistent $1K/mo revenue with margin you can name.',
        difficulty: 'advanced',
        timeToReach: '3–6 months',
        startupCost: '$300–$1000',
        keySkills: ['Paid ads basics', 'Email marketing', 'Unit economics'],
        howToWin: [
          {
            title: 'Know your unit economics cold',
            detail:
              'One page: product cost, shipping, fees, ad cost per order, refund rate → profit per order. If that number is thin, fix it (price, supplier, product) BEFORE scaling ads. This single sheet is the difference between a store and a bonfire.',
          },
          {
            title: 'Start ads at $10–20/day on winning creative',
            detail:
              'Boost the organic post that already worked. One campaign, one audience, one creative — watch cost-per-order for a week. Scale budget 20% at a time when the math holds; kill it fast when it doesn’t.',
          },
          {
            title: 'Build the email machine',
            detail:
              'Abandoned-cart email (recovers 5–10% of lost sales), welcome discount for signups, monthly product email. Klaviyo’s free tier covers it. Stores with email run sales on rainy days; stores without run ads.',
          },
          {
            title: 'Obsess over repeat purchase',
            detail:
              'A thank-you card with a code, a “buy again in 60 days” email, consumables and bundles. A second purchase costs 5x less than a first customer — repeat buyers are where margins actually live.',
          },
        ],
        readyToLevelUp: [
          'Profit per order is positive and stable with paid traffic included',
          'Revenue repeats monthly without heroics — inventory, shipping, support all run on rails',
          'Your best customers come back and bring friends',
        ],
        traps: [
          {
            mistake: 'Scaling ad spend on thin margins',
            why: 'A $2 profit per order evaporates the moment ad costs rise 15%. Scale multiplies what exists — including fragility.',
          },
          {
            mistake: 'Ignoring refunds and support',
            why: 'Every silent bad experience is a refund, a 1-star review, and a killed conversion rate. At this level support IS marketing.',
          },
          {
            mistake: 'Adding products instead of improving the funnel',
            why: 'More SKUs multiply complexity, not profit. Deepen the hero product’s funnel first; widen the catalog when the machine prints margin.',
          },
        ],
        resources: [
          { name: 'Klaviyo', url: 'https://klaviyo.com', note: 'email that pays for itself' },
          { name: 'DSers', url: 'https://dsers.com', note: 'AliExpress order automation (Oberlo’s replacement)' },
          { name: 'Shopify Analytics', url: 'https://shopify.com', note: 'your unit-economics source of truth' },
        ],
      },
    ],
    resources: [
      { name: 'Shopify', url: 'https://shopify.com', type: 'Platform' },
      { name: 'Printful', url: 'https://printful.com', type: 'Print-on-Demand' },
    ],
  },
  {
    id: 'software',
    title: 'Software / SaaS',
    description: 'Build digital products, tools, apps, or services that solve real problems at scale.',
    icon: '⚙️',
    color: 'blue',
    startupCost: '$0–$500',
    difficulty: 'advanced',
    realisticTimeline: '$0–$100 in 1–3 months → $1K/mo in 6–12 months',
    whoItsFor: 'Technical people or those willing to learn to code. Highest leverage path.',
    levels: [
      {
        id: 'sw-100',
        title: 'First $100',
        milestoneId: 'first-100',
        description: 'Build a small tool that solves one painful problem and charge for it.',
        goal: 'Your first software sale — validation that the problem is real.',
        difficulty: 'advanced',
        timeToReach: '1–3 months',
        startupCost: '$0–$200',
        keySkills: ['Coding', 'Problem identification', 'Marketing basics'],
        howToWin: [
          {
            title: 'Hunt for problems people already pay to solve badly',
            detail:
              'Browse communities where your future users complain: spreadsheets held together with duct tape, manual workarounds, clunky existing tools with angry reviews. “I pay for X but I hate it” is the best brief you’ll ever get.',
          },
          {
            title: 'Pre-sell before you build',
            detail:
              'Landing page: problem, promise, price, “buy” button. Drive 100 niche visitors. Ten pre-orders = build it. Zero = you just saved three months — that’s a win, not a failure.',
          },
          {
            title: 'Build the weekend MVP, ugly on purpose',
            detail:
              'One feature, the painful one. Free stack: Vercel + Supabase + Stripe. Two weekends, max. Every extra week before charging is a week of guessing instead of learning.',
          },
          {
            title: 'Charge from day one — even $5',
            detail:
              'Free users give polite feedback; paying users give true feedback. The $5 payment is the only signal that the problem is worth solving. Founders who wait a year to charge build for a market that was never there.',
          },
        ],
        readyToLevelUp: [
          'Strangers pay and keep using it after week one',
          'Users ask for the same next feature repeatedly — demand is leading your roadmap',
          'You can explain exactly who hurts without your tool and how it stops the pain',
        ],
        traps: [
          {
            mistake: 'Building in secret for six months',
            why: 'Stealth mode feels safe and is the single most common way technical founders waste a year. Ship the ugly version; the market edits better than you can.',
          },
          {
            mistake: 'Over-engineering the MVP',
            why: 'Auth systems, dark mode, microservices — none earn the second customer. One painful problem solved shabbily beats ten solved beautifully that nobody asked for.',
          },
          {
            mistake: 'Free-forever “to build a user base”',
            why: 'Free attracts tourists whose feedback points anywhere. A price, any price, filters for the truth — and pays the hosting bill.',
          },
        ],
        resources: [
          { name: 'Vercel', url: 'https://vercel.com', note: 'free hosting for your MVP' },
          { name: 'Supabase', url: 'https://supabase.com', note: 'free-tier backend, auth, database' },
          { name: 'Stripe', url: 'https://stripe.com', note: 'payments — set up on day one' },
        ],
      },
      {
        id: 'sw-1k',
        title: '$1K/Month',
        milestoneId: 'first-1k',
        description: 'Find the users who stay and grow from there.',
        goal: 'Consistent revenue with retention you can measure and defend.',
        difficulty: 'advanced',
        timeToReach: '6–12 months',
        startupCost: '$200–$500',
        keySkills: ['Product development', 'Growth marketing', 'Customer success'],
        howToWin: [
          {
            title: 'Talk to every user — weekly, forever',
            detail:
              'Fifteen-minute calls: what almost stopped them signing up, what they’d pay more for, what they use it FOR really (not what you assume). Five calls a week is the highest-signal activity in software.',
          },
          {
            title: 'Instrument the funnel end to end',
            detail:
              'PostHog (free tier): signup → activation → habit → payment → churn. Watch where users die. The one step with the biggest leak is your entire roadmap until it’s fixed.',
          },
          {
            title: 'Find ONE repeatable acquisition channel',
            detail:
              'SEO on the exact problem keywords, a template/free tool as bait, founder-led content, or a niche community you genuinely serve. One channel that reliably produces users beats five that might.',
          },
          {
            title: 'Fight churn before fighting for growth',
            detail:
              'MRR lost is silent — you don’t see it leave, you just grow slower. Onboarding that gets users to their first win in 10 minutes, a check-in email before they go quiet. Retention compounds; acquisition rents.',
          },
          {
            title: 'Price with a real plan',
            detail:
              'Tiers that map to value received (seats, usage, outcomes). Raise the price for new signups when value proves out — software is the one product where the price should go UP as it improves.',
          },
        ],
        readyToLevelUp: [
          'MRR grows month over month and churn is single-digit',
          'Users would be genuinely upset if you shut down — you can name ten of them',
          'One channel brings users predictably enough to plan around',
        ],
        traps: [
          {
            mistake: 'Ignoring churn to chase new signups',
            why: 'A leaky bucket needs refilling forever — and investors (or your own math) price the leak, not the traffic. Fix retention first; it makes every future user worth more.',
          },
          {
            mistake: 'Feature creep',
            why: 'Every “small addition” costs maintenance forever. Features get requested by many but used by few — usage data before roadmap, always.',
          },
          {
            mistake: 'No sales process',
            why: '“Build it and they will come” is a prayer, not a channel. Even self-serve SaaS needs onboarding emails, docs, and a founder answering questions where users live.',
          },
        ],
        resources: [
          { name: 'Stripe', url: 'https://stripe.com', note: 'billing as your product grows' },
          { name: 'PostHog', url: 'https://posthog.com', note: 'free analytics + session replay' },
          { name: 'Plausible', url: 'https://plausible.io', note: 'simple privacy-first traffic stats' },
        ],
      },
    ],
    resources: [
      { name: 'Vercel', url: 'https://vercel.com', type: 'Hosting' },
      { name: 'Supabase', url: 'https://supabase.com', type: 'Backend' },
    ],
  },
]

export const getAllLevels = (): Level[] => {
  const all: Level[] = []
  paths.forEach(p => p.levels.forEach(l => all.push(l)))
  return all
}

export const getPathById = (id: string) => paths.find(p => p.id === id)

export const getLevelById = (id: string) => getAllLevels().find(l => l.id === id)

/**
 * Returns a level together with its parent path and siblings.
 * Replaces the old (broken) string-splitting lookup.
 */
export function getLevelContext(id: string) {
  for (const path of paths) {
    const index = path.levels.findIndex(l => l.id === id)
    if (index !== -1) {
      return {
        path,
        level: path.levels[index],
        index,
        prev: index > 0 ? path.levels[index - 1] : undefined,
        next: index < path.levels.length - 1 ? path.levels[index + 1] : undefined,
      }
    }
  }
  return undefined
}
