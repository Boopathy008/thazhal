# THAZHAL website

React + TypeScript + Vite + Tailwind + Framer Motion + React Router.

## Run
```
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview
```

## Configure
Copy `.env.example` to `.env`:
- `VITE_CONTACT_ENDPOINT` – JSON POST endpoint (Formspree, Web3Forms, your API). Without it the form shows an honest "not configured" error and never claims delivery.
- `VITE_X_URL`, `VITE_INSTAGRAM_URL` – social icons stay inactive until set.

## Content
Everything editable lives in `src/data/content.ts` (products, solutions, articles, partners, supporters, contact details).
Set `image: '/images/your-photo.jpg'` on any product/solution to replace generated artwork with a real photo (put files in `public/images`).
Hero video: add `public/media/hero.mp4` (see `public/media/README.md`). Until then the poster shows.
SWOAD copy is intentionally placeholder until the official description exists. Privacy/Terms pages are placeholders.

## Deploy
Build output is `dist/`. SPA refresh is handled by `public/_redirects` (Netlify/Cloudflare) and `vercel.json` (Vercel).
Add a sitemap and its robots.txt line once the production domain is known.
