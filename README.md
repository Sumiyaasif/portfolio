# Portfolio (Astro)

## Run it
```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to /dist
```

## Edit your content
Everything is in **src/data/site.ts**: name, email, socials, apps, design & art, websites, skills.

- **App screenshots**: put images in `public/images/apps/` and list them in `screenshots`,
  e.g. `['/images/apps/app-one-1.png', ...]`. The first one also appears on the home page.
- **Design & art**: put images in `public/images/design/` and update the `design` list.
  `category` is `'Graphic design'` or `'Art'`; `ratio` is `'tall'`, `'square'` or `'wide'`.
  Delete the placeholder SVGs (and `scripts/make-placeholders.mjs`) when done.
- **Colors / font**: tokens at the top of `src/styles/global.css`.
- **Favicon**: `public/favicon.svg` (change the "YN" initials).

## Deploy (free)
Push to GitHub, then import the repo on Netlify, Vercel or Cloudflare Pages.
Build command: `npm run build` · Output folder: `dist`.
Set your real domain in `astro.config.mjs`.
