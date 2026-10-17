# Wealthvo

A free, honest roadmap for building income from zero — with step-by-step level
guides, a blog-style money roadmap, live experiments, and a community feed.
Built with React 19, Vite, Tailwind CSS v4 and Framer Motion.

## Develop

```bash
npm install
npm run dev        # local dev server
npm run build      # type-check + production build → dist/
npm run preview    # serve the production build locally
```

## Deploying to free hosting

`npm run build` produces a fully static site in `dist/` — any static host works.
SPA routing fallbacks are already included:

| Host                | What's included                      | Setup                                                        |
| ------------------- | ------------------------------------ | ------------------------------------------------------------ |
| **Netlify**         | `public/_redirects`                  | Connect repo or drag `dist/` into Netlify Drop. Done.         |
| **Cloudflare Pages**| `public/_redirects`                  | Build command `npm run build`, output dir `dist`. Done.       |
| **Vercel**          | `vercel.json` (rewrites)             | Import repo. Done.                                            |
| **GitHub Pages**    | `public/404.html` fallback           | See note below.                                               |
| **Apache / cPanel** | `public/.htaccess`                   | Upload the contents of `dist/` to `public_html`. Done.        |

### GitHub Pages

For a **project site** (`username.github.io/repo/`), set the base path in
`vite.config.ts` before building:

```ts
export default defineConfig({
  base: '/repo-name/',
  plugins: [react(), tailwindcss()],
})
```

`404.html` then redirects unknown routes back to the site root and the app
restores the deep link automatically.

## Notes

- **Dark mode** follows the visitor's system preference by default, can be
  toggled in the nav, and persists in `localStorage`.
- **Setup guides**: every path has a day-one, click-by-click guide at `/start`
  (data in `src/data/setup.ts`).

### Making the community live (required before launch)

The community feed works in two modes:

- **Local beta (default)** — posts stay in each visitor's browser. Good for
  testing, but visitors can't see each other's posts.
- **Live (shared database)** — every visitor posts to and reads from the same
  feed, in realtime. Free on Supabase's free tier, no credit card.

To go live (about 5 minutes, one time):

1. Create a free project at supabase.com (New project).
2. Open **SQL Editor** in the dashboard, paste the contents of
   `supabase/schema.sql`, and hit Run. This creates the `posts` + `comments`
   tables, row-level-security policies, the atomic `like_post` function, and
   realtime.
3. Grab two values from **Project Settings > API**: the Project URL and the
   anon public key.
4. Add them as build-time env vars — locally in a `.env` file (copy
   `.env.example`), and in your host's dashboard (Netlify / Vercel /
   Cloudflare > site settings > environment variables):

       VITE_SUPABASE_URL=https://YOUR-PROJECT-REF.supabase.co
       VITE_SUPABASE_ANON_KEY=your-anon-public-key

5. Redeploy. The community page now shows a green "Live" badge and every
   visitor sees every post — new posts and replies appear in realtime.

The anon key is public by design; what it can do is limited by the
row-level-security policies in `schema.sql`. Known beta tradeoffs: posts are
moderated by you (delete via the Supabase dashboard SQL editor, e.g.
`delete from posts where id = '...'`), and if spam becomes a problem the next
step is adding Supabase email auth before insert policies.
