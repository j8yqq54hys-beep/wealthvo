/**
 * "Start here" setup guides — the dead-simple, click-by-click version of
 * beginning each path. Written for someone who has never done this before:
 * what to sign up for, what to type, what a normal week looks like, and
 * copy-paste templates. Levels teach the strategy; this teaches day one.
 */

export interface SetupStep {
  title: string
  detail: string
}

export interface DayPlan {
  day: string
  action: string
}

export interface SetupTemplate {
  label: string
  body: string
}

export interface AvoidItem {
  mistake: string
  fix: string
}

export interface SetupGuide {
  pathId: string
  /** One sentence, zero jargon: what this path actually is. */
  plainIntro: string
  /** Everything you need in hand before step 1. */
  need: string[]
  timeToFirstDollar: string
  /** Literal setup: accounts to create, things to post. */
  setup: SetupStep[]
  /** Day-by-day plan for week one. */
  firstWeek: DayPlan[]
  /** The rhythm once week one is done. */
  routine: string[]
  /** Copy-paste text the reader can adapt. */
  templates: SetupTemplate[]
  /** Common beginner mistakes + the simple fix. */
  avoid: AvoidItem[]
}

export const setupGuides: SetupGuide[] = [
  {
    pathId: 'local-services',
    plainIntro:
      'Get paid to do simple things for people who live near you — mowing, cleaning, moving boxes, walking dogs. If you can do it tomorrow morning with what you already own, it counts.',
    need: ['A phone', 'Shoes you can work in', 'Anything your service needs (a mower, cleaning spray) — borrow if you don\'t have it'],
    timeToFirstDollar: 'This week, if you post today',
    setup: [
      {
        title: 'Pick 1–2 services you can do THIS week',
        detail:
          'Mowing, raking, cleaning, moving help, dog walking, taking out trash bins. The test is simple: can you start tomorrow morning with stuff you already have? If yes, that\'s your service.',
      },
      {
        title: 'Create your Nextdoor account',
        detail:
          'Download the Nextdoor app, sign up with your address, verify it. This is where neighbors actually ask for help. Do the same in your neighborhood Facebook group (search "[your neighborhood] + residents").',
      },
      {
        title: 'Write your post (copy the template below)',
        detail:
          'One honest photo of you or your tools, what you do, your price, and your availability. You don\'t need a business name. You don\'t need a logo. You need to post it.',
      },
      {
        title: 'Post it in 3 places, in the evening',
        detail:
          'Nextdoor, the Facebook group, and Craigslist gigs — between 6–9 PM, when people are scrolling and planning their weekend. Morning posts get buried.',
      },
      {
        title: 'Answer every reply within 15 minutes',
        detail:
          'Speed is your only marketing at the start. A reply within 15 minutes feels professional; a reply tomorrow feels like a maybe.',
      },
    ],
    firstWeek: [
      { day: 'Day 1 (today)', action: 'Pick your service, write your post with the template, post it in 3 places tonight.' },
      { day: 'Day 2', action: 'Answer every reply fast. Book your first job for the weekend. Post again if nobody replied (new day = new audience).' },
      { day: 'Day 3', action: 'Do your first job. Arrive 5 minutes early. Take a photo of the finished work (with permission).' },
      { day: 'Day 4', action: 'Send the finished-work photo + a "thank you" text. Ask: "Want me to come back every other week?"' },
      { day: 'Day 5', action: 'Post again with a line of social proof: "Just finished 2 yards this week — 2 slots left Saturday."' },
      { day: 'Day 6', action: 'Do job #2. Do the edges, wipe the surfaces nobody asked you to wipe. That\'s what gets you the referral.' },
      { day: 'Day 7', action: 'Count your money. You should be at or near $100. Ask each customer for a review or referral.' },
    ],
    routine: [
      'Check your messages morning and evening — reply within 15 minutes.',
      'Every finished job gets: a photo text, a thank-you, and the recurring offer.',
      'One new post or bump per week keeps the pipeline full.',
      'Put every dollar earned into one spot so you can see it grow.',
    ],
    templates: [
      {
        label: 'Your first gig post',
        body: 'Hi neighbors! 👋 I\'m a [your age / "local student"] offering [service] in [neighborhood] this week.\n\n✅ [Service 1] — $[price]\n✅ [Service 2] — $[price]\n\nI have [day] open and I bring everything I need. I send a photo of the finished work every time.\n\nMessage me here and I\'ll reply fast!',
      },
      {
        label: 'The recurring-client ask (text after a job)',
        body: 'Thanks so much, [name]! Really enjoyed doing it. Quick question — want me to come back every other week at the same price? I\'ll put you in for a standing spot so you never have to think about it again.',
      },
    ],
    avoid: [
      { mistake: 'Buying $400 of equipment before your first customer', fix: 'Borrow or rent for the first 3 jobs. Buy gear with money customers gave you.' },
      { mistake: 'Pricing at $10/hour to "be safe"', fix: 'Charge $20–30/hour. Cheap prices attract the worst customers and double your work.' },
      { mistake: 'Ghosting messages because you\'re shy', fix: 'Copy-paste answers: "Yes, I\'m free Saturday morning — does 9 AM work?" Short replies count.' },
    ],
  },
  {
    pathId: 'online-gigs',
    plainIntro:
      'Make your first money from your laptop or phone with zero dollars — research studies, website tests, and small tasks. It won\'t make you rich; it proves you can earn online and pays while you learn a skill.',
    need: ['A phone or laptop', 'Internet', 'A PayPal or bank account for cash-outs'],
    timeToFirstDollar: '3–7 days',
    setup: [
      {
        title: 'Create your Prolific account',
        detail:
          'Go to prolific.com and sign up free. Fill out EVERY profile question — this is how they match you to studies that pay $8–15/hour. A half-empty profile means half the studies.',
      },
      {
        title: 'Create your UserTesting account',
        detail:
          'usertesting.com pays ~$10 per 20-minute website test (you talk out loud while clicking around). Do one practice test so you\'re ready when a real one arrives.',
      },
      {
        title: 'Add 2–3 backup platforms',
        detail:
          'Swagbucks, Clickworker, Amazon MTurk. Not amazing pay, but they fill the gaps. Rule zero: if a site asks YOU to pay, it\'s a scam. Real ones pay you.',
      },
      {
        title: 'Set your cash-out method',
        detail:
          'Link PayPal (or your bank) to each platform now, not later. Nothing kills motivation like $27 sitting somewhere you can\'t spend.',
      },
      {
        title: 'Pin Prolific in your browser',
        detail:
          'Studies drop in waves and fill in minutes. A pinned tab you check morning and evening is the entire strategy.',
      },
    ],
    firstWeek: [
      { day: 'Day 1 (today)', action: 'Sign up for Prolific + UserTesting. Fill every profile question completely. Link PayPal.' },
      { day: 'Day 2', action: 'Morning: check Prolific. Evening: check again. Take every study you qualify for.' },
      { day: 'Day 3', action: 'Do your first UserTesting test if one arrives. Keep the morning/evening check rhythm.' },
      { day: 'Day 4', action: 'Same checks. Start a note: which platform paid best per hour?' },
      { day: 'Day 5', action: 'Cash out your first few dollars. It\'s small — it\'s proof the loop works.' },
      { day: 'Day 6', action: 'Double down on your best-paying platform. Drop the worst one.' },
      { day: 'Day 7', action: 'Total it up. $50+ in week one is normal. Time to think about level 2: a real skill.' },
    ],
    routine: [
      'Morning (5 min): check Prolific with coffee.',
      'Evening (5 min): check again — evening studies are less crowded.',
      'One focused hour a day beats four distracted ones.',
      'Log what you earned per hour per platform. After two weeks, cut the losers.',
    ],
    templates: [
      {
        label: 'UserTesting intro (why testers get picked)',
        body: 'Hi! I\'m [name], a [student / everyday person] who uses websites like a normal customer would. I speak clearly, follow instructions, and say what I\'m thinking out loud. Looking forward to testing your site!',
      },
      {
        label: 'Your daily tracker (put this in Google Sheets)',
        body: 'Date | Platform | Task | Time spent | Money earned\n--- Example ---\nOct 7 | Prolific | 2 studies | 45 min | $11.50\nOct 7 | UserTesting | 1 test | 20 min | $10.00',
      },
    ],
    avoid: [
      { mistake: 'Paying a "registration fee" to join a platform', fix: 'Every legit platform is free. Paying to work is always a scam.' },
      { mistake: 'Doing surveys all day for months', fix: 'After your first $100, the lesson is learned. The same hour spent learning Canva or writing pays 5–10x more later.' },
      { mistake: 'Only using one platform', fix: 'Work dries up without warning. Three active platforms = a stable floor.' },
    ],
  },
  {
    pathId: 'reselling',
    plainIntro:
      'Buy things cheap at thrift stores, garage sales, and clearance racks — then sell them for more online. Start with $50–100, things you already know about, and the stuff sitting in your own closet.',
    need: ['$50–100 to start (or start by selling your own stuff for free)', 'A phone with a camera', 'Boxes + tape for shipping'],
    timeToFirstDollar: '1–2 weeks',
    setup: [
      {
        title: 'Create your eBay seller account',
        detail:
          'ebay.com → register → set up selling (they\'ll verify your bank account for payouts). While you\'re there, search ANY item and filter by "Sold Items" — those green prices are your pricing bible from now on.',
      },
      {
        title: 'Sell your own stuff first (free inventory!)',
        detail:
          'Grab 3–5 things you own but don\'t use — old games, sneakers, clothes with tags, books. This teaches listing, photos, and shipping with ZERO risk because the inventory was free.',
      },
      {
        title: 'Learn to photograph properly',
        detail:
          'Plain background (a white sheet on the floor), daylight near a window, 5–8 photos per item, INCLUDING the flaws. Honest photos = fewer returns and better reviews.',
      },
      {
        title: 'Write listings that answer questions before they\'re asked',
        detail:
          'Brand, size, condition (be honest), measurements, and what\'s included. Every unanswered question is a buyer who scrolls past.',
      },
      {
        title: 'Ship within 24 hours of a sale',
        detail:
          'Print the label from eBay (they give you a discount), tape the box, drop it off. Fast shipping = great reviews = more sales. This is the flywheel.',
      },
    ],
    firstWeek: [
      { day: 'Day 1 (today)', action: 'Create the eBay account. Filter a search by "Sold Items" for 10 minutes just to train your eye.' },
      { day: 'Day 2', action: 'Photograph and list your first 3 items (your own stuff). Price them at the sold prices you saw.' },
      { day: 'Day 3', action: 'List 2 more. Answer any questions within an hour.' },
      { day: 'Day 4', action: 'First sales should be coming in. Ship anything sold — same day if possible.' },
      { day: 'Day 5', action: 'Thrift store trip with a $50 limit. Only buy what you\'ve SEEN sell (check the sold filter in the aisle).' },
      { day: 'Day 6', action: 'Photograph + list everything you bought. Batch it: all photos in one session, all listings in another.' },
      { day: 'Day 7', action: 'Update your tracker: what you paid, what sold, what profit is left after fees + shipping.' },
    ],
    routine: [
      'List something every day — even one item. Listings = sales.',
      'Check "sold listings" prices in the store aisle before buying anything.',
      'Ship same or next day. Always.',
      'Track every item in a spreadsheet: cost, fees, shipping, sale price, profit.',
      'Anything unsold after 30 days: cut the price and move on. Cash beats clutter.',
    ],
    templates: [
      {
        label: 'Listing title formula',
        body: '[Brand] [Item] [Size/Model] [Color] [Key condition word]\n--- Example ---\nNike Air Force 1 White Mens Size 10 Slightly Used Clean',
      },
      {
        label: 'Item description skeleton',
        body: 'Up for sale: [item].\n\nCondition: [be honest — "light scuffs on left toe, see photo 4"]\nSize: [size + measurements if clothing]\nIncludes: [box, tags, extras — or "item only"]\n\nShips within 24 hours, carefully packed. Message me with any questions!',
      },
    ],
    avoid: [
      { mistake: 'Buying something because it FEELS like a deal', fix: 'No sold listings above ~$25 = walk away. The parking-lot check saves your whole budget.' },
      { mistake: 'Hiding flaws in photos', fix: 'Flaws photographed honestly = fewer returns. Flaws discovered by buyers = refunds and bad reviews.' },
      { mistake: 'Hoarding stuff that won\'t sell', fix: '30 days, then discount. Inventory is fuel, not a collection.' },
    ],
  },
  {
    pathId: 'freelancing',
    plainIntro:
      'Get paid for a skill you already have — writing, design, video editing, coding, translation — for clients anywhere. You don\'t need a degree or experience. You need 3 sample pieces and the patience to apply every day.',
    need: ['A computer', 'One skill (or one you\'ll spend 2 weeks sharpening)', 'Free accounts: Upwork, Contra'],
    timeToFirstDollar: '2–4 weeks',
    setup: [
      {
        title: 'Make 3 sample pieces this weekend',
        detail:
          'No clients yet? Make the work anyway: redesign a local business\'s website, write a sample newsletter, edit a 30-second reel from stock footage. Nobody pays for potential, everybody pays for proof.',
      },
      {
        title: 'Set up your Upwork profile properly',
        detail:
          'Professional photo (plain background, smiling), a title that names the skill AND who it\'s for ("Webflow Designer for Small Businesses"), and your 3 samples in the portfolio section. 100% complete.',
      },
      {
        title: 'Write ONE proposal template you can reuse',
        detail:
          'The first two lines must be about THEIR problem, not you. Then 2–3 lines on how you\'d fix it, then one relevant sample. Send it to 10 jobs a day — it\'s a numbers game.',
      },
      {
        title: 'Price your first jobs at $15–25/hour equivalent',
        detail:
          'Low enough that someone takes a chance on you, high enough that you\'re not working for nothing. Your FIRST two jobs are for reviews, not money. After 2–3 reviews, raise rates 25%.',
      },
      {
        title: 'Create a one-page scope for every project',
        detail:
          'What you\'ll deliver, by when, how many revisions ("2 rounds included"). One paragraph. This one habit prevents 90% of client problems.',
      },
    ],
    firstWeek: [
      { day: 'Day 1 (today)', action: 'Pick your skill. Create your Upwork + Contra accounts with a real photo.' },
      { day: 'Day 2–3', action: 'Make sample #1 and #2. Good beats perfect — a finished okay sample beats a perfect imaginary one.' },
      { day: 'Day 4', action: 'Make sample #3, add all three to your profile, write your proposal template.' },
      { day: 'Day 5', action: 'Send 10 proposals. Customize the first two lines for every single one. Reply to every response within the hour.' },
      { day: 'Day 6', action: 'Send 10 more. Track: proposals sent, replies, calls.' },
      { day: 'Day 7', action: 'Review what got replies and tweak. Average time to first yes: 2–4 weeks of daily applying. Keep going.' },
    ],
    routine: [
      '10 proposals a day (or 5 with great custom openings) until the calendar is full.',
      'Reply to every client message within an hour — speed wins jobs.',
      'Every finished project: ask for a review the same day, while they\'re happy.',
      'Save 25–30% of everything you earn for taxes. Separate account, automatic transfer.',
      'Raise your rate 25% for every new client once you have 2–3 reviews.',
    ],
    templates: [
      {
        label: 'Upwork proposal opening (the part they read)',
        body: 'Hi [name] — you mentioned [their exact problem from the job post]. I can fix that.\n\nI\'d [1-line plan]. Here\'s a sample of exactly this kind of work: [link].\n\nI can start this week and deliver by [date]. Want me to walk you through the plan in 5 minutes?',
      },
      {
        label: 'One-page scope (send before starting any job)',
        body: 'Project: [what you\'re building]\nDeliverables: [thing 1], [thing 2], [thing 3]\nTimeline: [X days from kickoff]\nRevisions: 2 rounds included\nPrice: $[amount]\n\nAnything outside this list, we\'ll quote separately. Sound good?',
      },
    ],
    avoid: [
      { mistake: 'Racing to $3/hour to win jobs', fix: 'Cheap attracts clients who haggle and ghost. Fair rates attract clients who pay and refer.' },
      { mistake: 'Applying to 1 job a week with a perfect essay', fix: '10 fast, tailored applications beat 1 perfect one. It\'s a numbers game at the start.' },
      { mistake: 'Working without any written scope', fix: '"Just one more small thing" × 5 = a 40% pay cut. The one-paragraph scope prevents it for free.' },
    ],
  },
  {
    pathId: 'digital-products',
    plainIntro:
      'Make something once — a template, a checklist, a mini-guide — and sell it over and over while you sleep. No shipping, no inventory. The catch: you need to find one specific problem people keep complaining about.',
    need: ['A computer or just Canva on your phone', 'A free Gumroad or Etsy account', 'An idea (find it in step 1)'],
    timeToFirstDollar: '2–4 weeks',
    setup: [
      {
        title: 'Find the complaint (don\'t skip this)',
        detail:
          'Spend 30 minutes on Reddit, TikTok comments, or Discord in a topic you know. Write down every "I hate doing X" or "why is there no easy way to Y." The third time you see the same complaint, that\'s your product.',
      },
      {
        title: 'Post the idea BEFORE you build',
        detail:
          'Share it where the complaint lives: "Would anyone actually use a [thing] that does [outcome]?" Ten "I\'d buy that" replies = green light. Zero replies = free feedback, pick another idea.',
      },
      {
        title: 'Build the weekend version',
        detail:
          'A 10-page PDF, a Notion template, a Canva pack. 6–10 hours max. Version one exists to learn, not to be beautiful. Done and selling beats perfect and pending.',
      },
      {
        title: 'Create your Gumroad account and list it',
        detail:
          'gumroad.com is free — you pay only when you sell. Price it $9–29. Write the listing about the OUTCOME ("Never stare at a blank weekly update again"), not the file ("10-page PDF").',
      },
      {
        title: 'Tell the 10 people who have the problem',
        detail:
          'Post the making-of where the complaint lives: "We kept talking about [problem], so I built [thing] — here it is." Your first 10 sales come from conversations, not ads.',
      },
    ],
    firstWeek: [
      { day: 'Day 1 (today)', action: '30 minutes of complaint-mining. Write down 5 candidate problems.' },
      { day: 'Day 2', action: 'Post the best idea as a "would anyone want this?" in the community where the complaint lives.' },
      { day: 'Day 3', action: 'Build the rough version. Ugly is fine. Timer on: 4 hours max.' },
      { day: 'Day 4', action: 'Finish it. Make a simple cover in Canva. Screenshot 2–3 preview images.' },
      { day: 'Day 5', action: 'Create Gumroad, list it at $9–29, write the listing around the outcome.' },
      { day: 'Day 6', action: 'Share it in 2–3 places where the complaint lives. Talk like a person, not an ad.' },
      { day: 'Day 7', action: 'First sales (or first feedback). Either way: improve version one and repeat the sharing next week.' },
    ],
    routine: [
      'Ship version one in a weekend — it\'s a learning tool, not a masterpiece.',
      'Every buyer gets asked one day later: "What did it help with?" Screenshots of real words = your future marketing.',
      'One share per week about the product (the making-of, a tip it teaches).',
      'Start a simple email list once you have 10+ buyers — your future launches live there.',
    ],
    templates: [
      {
        label: 'The idea-validation post',
        body: 'Quick question for this group: I keep seeing people struggle with [specific problem]. Would a simple [template/tool/guide] that does [specific outcome] be useful? Not selling anything yet — just checking if it\'s worth building. 👇',
      },
      {
        label: 'The launch post (post it where the complaint lives)',
        body: 'Hey all — a while back people here kept mentioning [problem]. I finally built the thing: [name], a [what it is] that helps you [outcome].\n\nIt\'s [price] and there are [X] of them out in the wild so far. If it\'s useful to you, it\'s here: [link]. Happy to answer anything about how I made it!',
      },
    ],
    avoid: [
      { mistake: 'Building for 6 weeks in secret', fix: 'Validate with a post BEFORE building. Zero replies now saves you six dead weeks.' },
      { mistake: 'Pricing at $1–3 "to be safe"', fix: '$9–29 is the honest beginner band. Cheap signals low value and attracts refund-seekers.' },
      { mistake: 'Twelve mediocre products', fix: 'One great product with 50 reviews beats twelve with 3. Depth first, catalog later.' },
    ],
  },
  {
    pathId: 'content',
    plainIntro:
      'Make videos or posts about one thing you care about, consistently, until an audience forms — then earn from ads, sponsors, links, and your own products. This is the slowest path to the first dollar but the highest ceiling. The secret is boring: pick one platform and post 3 times a week for 90 days.',
    need: ['A phone', 'Free editing (CapCut) + thumbnails (Canva)', 'One topic you can talk about forever'],
    timeToFirstDollar: '3–6 months (but the first video is TODAY)',
    setup: [
      {
        title: 'Create the account (10 minutes — do it today)',
        detail:
          'YouTube, TikTok, or Instagram — the one you\'ll still show up on in month three. Make the account TODAY even if video one is weeks away. Named accounts create pressure to post, which is the point.',
      },
      {
        title: 'Choose your one audience + one outcome',
        detail:
          'Not "money stuff" but "budgeting for new grads." Not "fitness" but "15-minute home workouts for beginners." One audience, one promise, every post. This is what turns viewers into followers.',
      },
      {
        title: 'Study 10 winners in your niche',
        detail:
          'Find the 10 best-performing posts from people doing what you want to do. Screenshot their first 5 seconds (the hook). Write 10 hook ideas per post of yours and keep the sharpest one.',
      },
      {
        title: 'Set a posting schedule you can survive',
        detail:
          '3x per week, same days — Monday/Wednesday/Friday works. Put it in your calendar like a class. Consistency is the entire strategy; the algorithm is just a mirror of it.',
      },
      {
        title: 'Make video #1 stupidly simple',
        detail:
          'One idea, one takeaway, shot on your phone, edited in CapCut in under an hour. It will be bad. Post it anyway — the first 30 posts are practice that ships.',
      },
    ],
    firstWeek: [
      { day: 'Day 1 (today)', action: 'Create the account. Choose your audience + outcome. Write it at the top of your profile bio.' },
      { day: 'Day 2', action: 'Study 10 winner posts. Screenshot hooks. Write your first 5 video ideas.' },
      { day: 'Day 3', action: 'Film + edit video #1. Ship it imperfect. Total time: under 2 hours.' },
      { day: 'Day 4', action: 'Film video #2. Batch-filming (2 in one sitting) makes the schedule survivable.' },
      { day: 'Day 5', action: 'Post video #2. Watch 10 minutes of analytics on video #1 — where did people drop off?' },
      { day: 'Day 6', action: 'Film video #3. Reply to every single comment (yes, even the weird ones).' },
      { day: 'Day 7', action: 'Review: which idea performed best? Make 3 more in that direction. Schedule next week.' },
    ],
    routine: [
      'Post 3x/week, same days, no exceptions — this is the whole game.',
      'Batch-film: two videos in one sitting halves the work.',
      '10 minutes of analytics per week tells you what to make next. Watch time > views.',
      'Reply to every comment in month one — early fans become the community.',
      'Add affiliate links for gear/products you actually use from video one (this is usually the first $).',
    ],
    templates: [
      {
        label: 'Hook formulas that stop the scroll',
        body: '"Stop doing [common thing] if you want [outcome]."\n"I tried [thing] for 30 days — here\'s what actually happened."\n"3 [tools/tips] that [outcome] — number 2 is free."\n"Nobody talks about this part of [topic]…"\n"If I was starting [topic] from zero, here\'s exactly what I\'d do."',
      },
      {
        label: 'The 90-day content plan (put in Notion/Sheets)',
        body: 'Weeks 1–4: post 3x/week, learn editing + hooks. Expect nothing.\nWeeks 5–8: double down on your 2 best-performing formats.\nWeeks 9–12: add a freebie (checklist/template) + start the email list.\nMonth 4+: affiliate links on, pitch small sponsors at 5–10K engaged followers.',
      },
    ],
    avoid: [
      { mistake: 'Quitting at month two when views are 40', fix: 'Every monetized creator has a graveyard of 40-view months. Compounding starts after ~50–100 posts.' },
      { mistake: 'Chasing every trend outside your promise', fix: 'A viral one-off brings tourists, not residents. Serve your one audience relentlessly.' },
      { mistake: 'Polishing post #1 for six weeks', fix: 'Six weeks = six posts of learning lost. Publish, read the data, improve. The audience is the editor.' },
    ],
  },
  {
    pathId: 'ecommerce',
    plainIntro:
      'Sell physical products online — print-on-demand (zero inventory), handmade, or sourced goods. This one has real setup costs and more moving pieces, but it teaches marketing like nothing else. Start with 1–3 products, not 30.',
    need: ['$100–300 to start', 'A product idea people ALREADY buy (check Etsy/Amazon bestsellers)', 'Free accounts: Etsy or Shopify trial, Canva'],
    timeToFirstDollar: '2–4 weeks',
    setup: [
      {
        title: 'Prove demand BEFORE you build anything',
        detail:
          'Search your product idea on Etsy + Amazon + TikTok Shop. Lots of sales with mediocre listings = opportunity. Zero sales = the market already voted no. You want proven spenders with an unmet angle.',
      },
      {
        title: 'Start with print-on-demand or Etsy (zero inventory risk)',
        detail:
          'Printful/Printful-style services print and ship when someone orders — you never touch stock. Etsy gives you built-in buyers while Shopify gives you control. Beginners: start Etsy, graduate to Shopify.',
      },
      {
        title: 'Make ONE hero product page amazing',
        detail:
          'Headline = the outcome ("Gift for the dog who destroys every toy"). 5–8 real-use photos, benefits not features, and an FAQ answering the top 3 objections. This page IS the store.',
      },
      {
        title: 'Get your first 100 visitors for FREE',
        detail:
          '3 short videos a week showing the product in use (TikTok/Reels), post in niche communities where allowed, pin on Pinterest. Free traffic forces your offer to get good — ads just burn money on a weak one.',
      },
      {
        title: 'Set up payments + shipping answers',
        detail:
          'Connect your bank, set shipping prices (Etsy/Printful calculate them), write your returns policy in two sentences. Boring stuff now prevents angry DMs later.',
      },
    ],
    firstWeek: [
      { day: 'Day 1 (today)', action: 'Demand research: 30 minutes on Etsy/Amazon/TikTok Shop. Write down 3 proven products with a weak "angle" you could improve.' },
      { day: 'Day 2', action: 'Pick ONE product. Set up print-on-demand (Printful) or your handmade workflow.' },
      { day: 'Day 3', action: 'Create your Etsy listing: outcome headline, 5+ real-use photos, benefit bullets, FAQ.' },
      { day: 'Day 4', action: 'Film your first 3 short videos showing the product in use. Post one.' },
      { day: 'Day 5', action: 'Post video #2 + share in 1–2 niche communities (read their self-promo rules first).' },
      { day: 'Day 6', action: 'Post video #3. Reply to every comment and DM within the hour.' },
      { day: 'Day 7', action: 'Check: views, favorites, any sales. First sale = you\'re validated. No sales = fix photos/headline before making more videos.' },
    ],
    routine: [
      '3 short videos a week showing the product in real life — this is your free traffic engine.',
      'One page to obsess over: conversion rate. 100 visitors and 0 sales = fix the page, not the ads.',
      'Answer every customer message same-day. Reviews are your whole reputation at the start.',
      'Know your unit economics on one sheet: product cost, shipping, fees → profit per order.',
      'Ads only AFTER the page converts on free traffic. Then start at $10/day on your best-performing video.',
    ],
    templates: [
      {
        label: 'Product headline formula (outcome, not features)',
        body: '"[Gift/for whom] that [desired outcome]"\n--- Examples ---\n"Gift for the dog owner who has everything"\n"The desk planner that finally clears your brain at night"\n"A poster for people who never finish their books"',
      },
      {
        label: 'Short-video script that sells without feeling salesy',
        body: '[0–2s] Show the product IN USE + the outcome ("My coffee station finally doesn\'t annoy me")\n[2–8s] The before/after or the problem it solves\n[8–15s] One specific detail that makes it different\n[15–20s] Soft CTA: "It\'s in my shop if you want one — link in bio."',
      },
    ],
    avoid: [
      { mistake: 'Spending $300 on ads before the page converts', fix: 'Ads amplify what exists. 100 free visitors buying nothing = fix photos + headline first. Always.' },
      { mistake: 'Launching 30 products at once', fix: 'One hero product with a great page teaches you faster than a scattered catalog ever will.' },
      { mistake: 'Choosing products you personally love but nobody buys', fix: 'Sold data is demand. Taste is not demand. Check the bestseller lists first.' },
    ],
  },
  {
    pathId: 'software',
    plainIntro:
      'Build a small tool, app, or service that solves one painful problem — then charge for it monthly. Highest ceiling of any path, but it needs either coding skills or the patience to learn (freeCodeCamp is free) or no-code tools. The secret that matters most: talk to users BEFORE and WHILE building.',
    need: ['A computer', 'Free stack: Vercel + Supabase + Stripe', 'One real problem you\'ve seen people complain about'],
    timeToFirstDollar: '1–3 months',
    setup: [
      {
        title: 'Find the problem where people ALREADY pay',
        detail:
          'Browse communities where your future users hang out. Look for: spreadsheets held together with duct tape, manual workarounds, clunky tools with angry reviews. "I pay for X but I hate it" is the best brief you\'ll ever get.',
      },
      {
        title: 'Pre-sell before you build (yes, really)',
        detail:
          'One landing page: problem, promise, price, buy button. Drive ~100 niche visitors (communities, posts). Ten pre-orders = build it. Zero = you just saved three months. Both results are wins.',
      },
      {
        title: 'Set up the free stack',
        detail:
          'Vercel (hosting) + Supabase (database/auth) + Stripe (payments). All free to start. If you don\'t code: no-code tools (Bubble, Glide) or find a technical partner. Don\'t buy courses — the docs are free.',
      },
      {
        title: 'Build the weekend MVP — one feature only',
        detail:
          'The one painful feature, ugly on purpose, two weekends max. Every extra week before charging is a week of guessing instead of learning.',
      },
      {
        title: 'Charge from day one — even $5',
        detail:
          'Free users give polite feedback; paying users give true feedback. The payment is the only honest signal that the problem is worth solving.',
      },
    ],
    firstWeek: [
      { day: 'Day 1 (today)', action: 'Problem hunt: 1 hour in 2–3 communities. Write down 5 complaints people already pay to avoid.' },
      { day: 'Day 2', action: 'Pick one. Write the one-sentence pitch: "[Tool] helps [who] do [outcome] without [pain]."' },
      { day: 'Day 3', action: 'Landing page (Carrd/Notion/Framer — 2 hours): problem, promise, price, buy button.' },
      { day: 'Day 4–5', action: 'Share the page where the complaint lives. Collect pre-orders OR feedback. Target: 100 visitors.' },
      { day: 'Day 6', action: 'Evaluate honestly. 10+ pre-orders = start building this weekend. Zero = pick problem #2. You lost nothing.' },
      { day: 'Day 7', action: 'Set up Vercel + Supabase + Stripe accounts so the build can start immediately.' },
    ],
    routine: [
      'Build in public: one short update per week wherever your users live. It doubles as marketing.',
      'Talk to 3 users a week — what almost stopped them signing up, what they\'d pay more for.',
      'Watch where users get stuck (PostHog, free) — the biggest leak is your entire roadmap.',
      'Ship something small every week. Perfect is the enemy of users.',
      'Track one number: paying users. Everything else is vanity until that moves.',
    ],
    templates: [
      {
        label: 'The pre-sell landing page structure',
        body: 'Headline: [Tool] helps [who] [outcome] without [pain]\nSub: "If you currently [do the painful workaround], this is for you."\n3 bullets: what it does (outcomes, not features)\nPrice: $[X]/month — early access price\nButton: "Get early access"\nFooter: "Building this in public — questions? DM [wherever]."',
      },
      {
        label: 'The community share post (not an ad)',
        body: 'I keep seeing [problem] here, so I\'m building a small tool that [outcome]. It\'s early — ugly but working. If you want in, the page is here: [link]. Roasting it is also welcome — that\'s how it gets good.',
      },
    ],
    avoid: [
      { mistake: 'Building in secret for six months', fix: 'Ship the ugly version. The market edits better than you can, and it edits faster.' },
      { mistake: 'Over-engineering the MVP (auth systems, dark mode, microservices)', fix: 'One painful problem solved shabbily beats ten solved beautifully that nobody asked for.' },
      { mistake: 'Free forever "to build a user base"', fix: 'Free attracts tourists whose feedback points nowhere. $5 filters for the truth and pays the hosting bill.' },
    ],
  },
]

export const getSetupGuide = (pathId: string) => setupGuides.find(g => g.pathId === pathId)
