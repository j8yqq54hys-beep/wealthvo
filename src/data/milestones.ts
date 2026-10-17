/**
 * The five money milestones every path travels through.
 * This is the "how to level up" spine of the site: each stage explains
 * what it is, HOW you get there, how you know you're ready for the next
 * one, and what NOT to do while you're in it.
 */

export interface MilestoneStep {
  title: string
  detail: string
}

export interface MilestoneTrap {
  mistake: string
  why: string
}

export interface Milestone {
  id: string
  order: number
  range: string
  title: string
  tagline: string
  icon: string
  accent: string
  timeToReach: string
  intro: string
  howToGetThere: MilestoneStep[]
  signsYoureReady: string[]
  whatNotToDo: MilestoneTrap[]
  pathIds: string[]
}

export const milestones: Milestone[] = [
  {
    id: 'first-100',
    order: 1,
    range: '$0 → $100',
    title: 'Proof',
    tagline: 'Your first money — evidence that effort converts',
    icon: '🌱',
    accent: 'orange',
    timeToReach: 'A few days to a few weeks',
    intro:
      'The first $100 matters less as money and more as proof. It rewires something in your head: income stops being something other people have and becomes a mechanical process you can repeat. That’s why this stage is about speed, not perfection — pick the most boring, obvious way to earn and execute this week.',
    howToGetThere: [
      {
        title: 'Sell a boring service within one mile of you',
        detail:
          'Pick something people already pay for — lawn mowing, moving help, cleaning, dog walking — and post it on Nextdoor, Facebook groups, and Craigslist today. Not after research. Today. Price at $20–30/hour, show up on time, and you’re already ahead of half the market.',
      },
      {
        title: 'Flip things you already own',
        detail:
          'Look around your home for $100 of stuff you don’t use. Check eBay “sold listings” to see real prices — not what sellers are asking. Photograph items on a plain background near a window, list them, ship within 24 hours of a sale. Fast shipping earns reviews, and reviews earn the next sale.',
      },
      {
        title: 'Stack microtasks if you’re desk-bound',
        detail:
          'Sign up for Prolific and UserTesting (never pay to join — that’s a scam tell). Treat it like a shift: one focused hour a day, every day. The hourly rate is modest, but it proves the loop: your time → a platform → money in your account.',
      },
    ],
    signsYoureReady: [
      'Someone has paid you at least twice — the first sale can be luck, the second is a system',
      'You know exactly which action produced the money and could repeat it tomorrow',
      'You did it with $0 (or close) spent — you learned the loop costs effort, not capital',
    ],
    whatNotToDo: [
      {
        mistake: 'Starting a “business” before you’ve made $100',
        why: 'The LLC, the logo, the business cards — none of it earns. It feels like progress because it’s comfortable. Revenue first, paperwork later.',
      },
      {
        mistake: 'Buying a course to learn “the secret”',
        why: 'Everything at this stage is free — YouTube, Reddit, and the platforms themselves. Anyone selling you a shortcut to your first $100 is monetizing your impatience.',
      },
      {
        mistake: 'Grinding $3/hour tasks for months',
        why: 'Microtasks are a launching pad, not a destination. Once you’ve earned $100, the lesson is learned — the same hour spent on a real skill compounds 10x.',
      },
    ],
    pathIds: ['local-services', 'online-gigs', 'reselling', 'freelancing'],
  },
  {
    id: 'first-1k',
    order: 2,
    range: '$100 → $1K/mo',
    title: 'Traction',
    tagline: 'Random gigs become repeatable income',
    icon: '🔥',
    accent: 'emerald',
    timeToReach: '1–4 months',
    intro:
      'One hundred dollars proved it works. A thousand a month changes your life: it covers rent in most cities, kills credit-card anxiety, and buys you options. The work here is different — less hustle, more consistency. You stop hunting for one-off gigs and start building a flywheel: happy clients → referrals → recurring work → higher rates.',
    howToGetThere: [
      {
        title: 'Raise your rates on every new client',
        detail:
          'Your first price was a guess; now you have data. Add 20–30% for new customers and watch what happens. If nobody blinks, add it again. Existing clients keep their rate — you earn loyalty, they earn stability, and your calendar fills at the new price.',
      },
      {
        title: 'Ask every happy customer for a referral',
        detail:
          'Right after you deliver, while the good feeling is warm, send one message: “Glad you loved it — know anyone else who could use this?” Most people never ask. The ask takes 30 seconds and it’s how local businesses and freelancers fill their books without spending on ads.',
      },
      {
        title: 'Turn one-off gigs into recurring plans',
        detail:
          'A one-time cleaning is a transaction; every-other-week cleaning is an income. Pitch a simple subscription version of whatever you already do — weekly, biweekly, monthly. Ten recurring clients at $100 beat chasing forty strangers for the same money.',
      },
      {
        title: 'Track everything in one dumb spreadsheet',
        detail:
          'Money in, money out, hours worked, where each client came from. Five minutes a week. This is how you’ll spot your best source of customers — and that number is worth more than any guru advice.',
      },
    ],
    signsYoureReady: [
      'You’ve earned $700+ for three consecutive months — consistency, not a lucky month',
      'More people want your work than you have hours — that surplus is pricing power',
      'Clients find you (referrals, reviews, repeat business), not the other way around',
    ],
    whatNotToDo: [
      {
        mistake: 'Keeping starter rates out of fear',
        why: 'Underpricing doesn’t make you safe, it makes you busy and broke. The freelancers and local pros who stall at $1K/mo almost always stall because they never asked for more.',
      },
      {
        mistake: 'Saying yes to every client',
        why: 'A bad client — late payer, scope-creeper, respect-eater — consumes the energy of two good ones. The whole point of traction is the power to choose.',
      },
      {
        mistake: 'Quitting your income to “go all in” too early',
        why: 'Pressure kills judgment. The business built at nights and weekends while the rent is covered outlasts the one built under panic. Wait for 3 months of consistent overlap first.',
      },
    ],
    pathIds: ['local-services', 'freelancing', 'reselling', 'digital-products', 'online-gigs'],
  },
  {
    id: 'to-5k',
    order: 3,
    range: '$1K → $5K/mo',
    title: 'Leverage',
    tagline: 'Stop trading raw hours — specialize and multiply',
    icon: '🚀',
    accent: 'cyan',
    timeToReach: '6–18 months',
    intro:
      'At $1K/mo you have a job you somewhat control. At $5K/mo you have a small machine. The gap isn’t worked with more hours — there aren’t enough hours. It’s worked with leverage: specializing so you charge more for the same hour, systematizing so quality doesn’t depend on your mood, and building demand that comes to you.',
    howToGetThere: [
      {
        title: 'Specialize until it almost hurts',
        detail:
          "‘I do design’ competes with a million people. ‘I redesign checkout pages for Shopify stores’ competes with dozens — and charges 3x. Pick the intersection of what you do well, who pays well, and a problem that keeps them up at night. Rewrite your profile, portfolio, and pitch around that one thing.",
      },
      {
        title: 'Build proof, then raise prices with it',
        detail:
          'Collect before/after numbers from your best work — revenue lifted, hours saved, homes sold, whatever your metric is. A case study turns “I charge $75/hr” into “I charge $150/hr and here’s the math on why that’s cheap.”',
      },
      {
        title: 'Delegate the bottom 20% of your week',
        detail:
          'List everything you did last week and circle anything that’s beneath your hourly rate — scheduling, data entry, simple edits. Hire it out at a lower rate (a VA, a college kid, a neighbor). You don’t buy free time; you buy hours to resell at a higher price.',
      },
      {
        title: 'Create an inbound channel',
        detail:
          'One channel, owned by you: an email list, a LinkedIn/TikTok presence, a simple portfolio site with a booking link. Post weekly about the problem you solve. Inbound leads negotiate less, pay more, and stay longer — this is the seed of the next level.',
      },
    ],
    signsYoureReady: [
      'Your calendar books out weeks in advance at your current price',
      'At least a third of new work arrives through referrals or inbound, not cold outreach',
      'You raised your rates and lost only clients you didn’t want anyway',
    ],
    whatNotToDo: [
      {
        mistake: 'Hiring to feel like a founder',
        why: 'A team multiplies whatever exists — including chaos. Hire to remove a specific bottleneck you can name, not to feel bigger. Contractors for defined tasks first; employees much later.',
      },
      {
        mistake: 'Discounting to fill the calendar',
        why: 'A full calendar at low rates is a treadmill with extra steps. Empty-but-flexible hours beat cheap-but-trapped ones — that’s where raising rates and building products come from.',
      },
      {
        mistake: 'Starting a second business before the first runs itself',
        why: 'Two half-built businesses earn less than one working one. Get the first to run 90 days without heroics, then diversify.',
      },
    ],
    pathIds: ['freelancing', 'digital-products', 'ecommerce', 'content', 'software'],
  },
  {
    id: 'to-10k',
    order: 4,
    range: '$5K → $10K+/mo',
    title: 'Systems',
    tagline: 'The business works — even when you don’t',
    icon: '⚙️',
    accent: 'violet',
    timeToReach: '1–3 years',
    intro:
      'The test for this level is brutal and simple: can you leave for two weeks without it collapsing? If everything still depends on you showing up, you own a job. Systems turn your judgment into processes other people (and software) can run — products replace custom work, funnels replace chasing, and your calendar stops being the ceiling.',
    howToGetThere: [
      {
        title: 'Productize what you already sell',
        detail:
          'Take the service you’ve delivered 20+ times and freeze it into a package with a fixed scope and price: an audit, a template, a mini-course, a done-in-a-week sprint. Products scale without your hours and force you to systematize everything around them.',
      },
      {
        title: 'Build one funnel and automate it',
        detail:
          'Content or ads → email list → a welcome sequence that sells your product on autopilot. It doesn’t need to be clever; it needs to run while you sleep. Track one number: cost or effort per customer. Every system decision flows from that number.',
      },
      {
        title: 'Hire for outcomes, not seats',
        detail:
          'Write down the 5 things only you can do. Everything else gets an owner: a contractor editor, a support person, an ops manager. Your job shrinks to those 5 things plus improving the machine. This is the actual rite of passage to $10K/mo.',
      },
      {
        title: 'Protect margin like it’s the product',
        detail:
          'Revenue is vanity, profit is sanity. Know your margin per customer per month. Raise the floor price, cut the products that eat support time, and fire the customer who costs more than they pay. At this level, profit margin is the business.',
      },
    ],
    signsYoureReady: [
      'Revenue is predictable month to month — you could forecast next quarter within 20%',
      'You took a full week off and income didn’t flinch',
      'Profit margin is 40%+ after paying everyone — including yourself a real salary',
    ],
    whatNotToDo: [
      {
        mistake: 'Pouring ad spend into a leaky funnel',
        why: 'Ads multiply a working system and incinerate money in a broken one. Get the funnel converting with free traffic first; scale with paid only when unit economics are boringly profitable.',
      },
      {
        mistake: 'Confusing revenue with winning',
        why: 'A $30K month with $29K of costs and chaos is a worse business than $10K with $6K of profit and calm. From here on, you optimize profit and hours — the topline lies.',
      },
      {
        mistake: 'Building products nobody asked for',
        why: 'Every feature, SKU, and course module should trace back to something a paying customer said or did. The build-what’s-fun itch is how profitable businesses quietly die.',
      },
    ],
    pathIds: ['software', 'ecommerce', 'content', 'digital-products'],
  },
  {
    id: 'wealth',
    order: 5,
    range: '$10K+/mo → Wealth',
    title: 'Ownership',
    tagline: 'Money starts making money — and work becomes optional',
    icon: '🏝️',
    accent: 'rose',
    timeToReach: '3–10 years',
    intro:
      'Everything before this level was about earning. This level is about keeping, compounding, and owning. High income without ownership is a treadmill with better views — stop running and it stops. Wealth means assets: investments that grow without you, equity in things you build or buy, and income streams that survive your absence.',
    howToGetThere: [
      {
        title: 'Automate investing before lifestyle inflates',
        detail:
          'Set a fixed percentage — start at 20% of profit — to move automatically into low-cost index funds the day money lands. Automating beats discipline because it removes the monthly decision. Boring, unsexy, and how most quiet millionaires actually did it.',
      },
      {
        title: 'Diversify income across three engines',
        detail:
          'One stream is fragile: a platform ban, an algorithm change, one lost client. Build to at least three unrelated engines — e.g., a product business, an audience monetized a second way, and investments. Each new engine should lean on assets you already own (audience, brand, capital).',
      },
      {
        title: 'Buy back your time deliberately',
        detail:
          'Every quarter, buy back the hours that cost least to delegate and earn least to keep. Time is the only input you can’t scale; at this level it’s also your scarcest asset. Guard it like capital.',
      },
      {
        title: 'Own equity in what you build',
        detail:
          'Shares in your own company, small stakes in businesses you advise, or real assets bought with profit. Labor income is taxed hardest and compounds worst; ownership compounds while you sleep. Get a real accountant and structure for the long game.',
      },
    ],
    signsYoureReady: [
      'Net worth grows faster than income — compounding has taken the wheel',
      'You could cover living costs from investments within a number of years you can actually name (the 4% rule math)',
      'Saying no is easy — opportunities cost focus, and you price that',
    ],
    whatNotToDo: [
      {
        mistake: 'Letting lifestyle swallow the raise',
        why: 'The $10K/mo person spending $11K/mo has less freedom than the $4K/mo person saving half. The gap between income and spending IS the wealth — everything else is decoration.',
      },
      {
        mistake: 'Chasing yield — crypto moons, options, hot tips',
        why: 'At your income level, boring index-fund compounding wins the next decade. Speculation with 5% of fun money, fine; with the core, never. Nobody rich got poorer slowly.',
      },
      {
        mistake: 'Ignoring taxes and structure',
        why: 'At this income, the difference between good and bad structure is often 5–10 points of return — every year, compounding. A great accountant pays for themselves many times over.',
      },
    ],
    pathIds: ['software', 'content', 'ecommerce', 'digital-products'],
  },
]

export const getMilestoneById = (id: string) => milestones.find(m => m.id === id)
