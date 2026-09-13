# Azura Distribution — Corporate Website

A single-page corporate site for Azura Distribution Ltd, built with Vite + React + Tailwind CSS, ready to deploy on Vercel.

## Stack

- **Vite** — build tool / dev server
- **React** — UI (plain JSX, no router needed since it's a one-pager with anchor links)
- **Tailwind CSS v3** — styling, configured via `tailwind.config.js`

## Project structure

```
src/
  data/content.js       ← ALL page copy lives here. Edit text without touching components.
  components/
    Nav.jsx              Sticky nav bar
    Hero.jsx              Hero section (headline + network map visual)
    NetworkMap.jsx        The reusable SVG "distribution network" graphic
    About.jsx              "About Azura" / foundation story
    Ambition.jsx           4 commercial pillars
    Channels.jsx           7 commercial focus channels
    Distribution.jsx       Numerical distribution + regions + map
    Process.jsx             6-step "How We Work" timeline
    WhyAzura.jsx            Closing brand statement
    Contact.jsx              CTA + contact details
    Footer.jsx
  App.jsx                 Assembles all sections in order
  index.css               Global styles, fonts, small reusable classes (.kicker, .section, .divider)
tailwind.config.js       Color palette, fonts, animations — the design "tokens"
index.html                SEO meta tags, Open Graph tags, JSON-LD structured data
public/
  favicon.svg
  robots.txt
  sitemap.xml
```

## Editing the content

Open `src/data/content.js`. Every heading, paragraph, list item, email, and phone number
on the site is exported from that one file as plain JS objects/arrays. Change the values
there and the whole site updates — no need to touch JSX in the components.

To add/remove a list item (e.g. a new commercial-focus channel or process step), just
add/remove an entry in the relevant array in `content.js`; the components map over these
arrays automatically.

## Editing the design

All design tokens are in `tailwind.config.js` under `theme.extend`:

- **Colors** — `void` (background), `panel`/`panelLight` (section backgrounds), `gold`/`gold.light`/`gold.dim`
  (primary accent), `ivory`/`ivoryDim` (text), `teal` (secondary accent, currently unused but available).
  Change the hex values there to retint the whole site.
- **Fonts** — `font-display` (Space Grotesk, used for all headings) and `font-body` (Inter, used for
  body text). Loaded via Google Fonts `@import` at the top of `src/index.css`. Swap the font names
  in both places to change typefaces.
- **The network map** (`src/components/NetworkMap.jsx`) is hand-built SVG, not a chart library —
  node positions are in the `nodes` array at the top of that file if you want to reposition them,
  and `edges` controls which nodes are connected by lines.

## Local development

```bash
npm install
npm run dev
```

Visit the printed localhost URL (usually http://localhost:5173).

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally to sanity-check it
```

## Deploying to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
vercel        # first deploy, follow prompts
vercel --prod # subsequent production deploys
```

**Option B — Git-based deploy (recommended for ongoing edits)**
1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. In the Vercel dashboard, "Add New Project" → import the repo.
3. Vercel auto-detects Vite (framework preset "Vite"); build command `npm run build`,
   output directory `dist` — both are also pinned in `vercel.json` so they're picked up
   automatically either way.
4. Every push to your main branch redeploys automatically.

## Before going live — checklist

- [ ] Replace placeholder domain `azura.mu` in `index.html` (canonical/OG URLs) and
      `public/sitemap.xml` / `public/robots.txt` with the real production domain.
- [x] `public/og-image.jpg` (1200×630px) is included for social share previews. Regenerate
      it if the headline/tagline in `content.js` changes significantly, so the preview stays in sync.
- [ ] Confirm email/phone/address in `src/data/content.js` under `export const site`.
- [ ] Consider swapping the SVG favicon for the client's actual logo mark once you have
      a vector version of it.
