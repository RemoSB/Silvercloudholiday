# Silver Clouds Holiday — Setup & Handoff

Next.js 16 (App Router) + Tailwind v4 + Framer Motion + Sanity CMS.
The site runs **today on built-in data** and auto-upgrades to CMS content the
moment a Sanity project id is set — no code changes needed.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (all pages prerender)
```

## Project structure

```
app/            routes: / /fleet /destinations /services /about /contact
                api/inquiry (lead email), studio/ (embedded Sanity Studio),
                sitemap.ts, robots.ts
components/      layout/ (Navbar, Footer, WhatsAppFloat), home/ (sections + QuoteForm), ui/
lib/            data.ts (built-in content — the fallback), inquiry.ts (form logic)
sanity/         env, client, image, queries (CMS-or-fallback), schemaTypes/
app/legacy.css  the original hand-tuned CSS, reused verbatim for pixel parity
index.legacy.html  the original single-file site, kept for reference
```

## Step 1 — Stand up Sanity (client edits content here)

Requires a free Sanity account (Google login is fine).

```bash
npx sanity login
npx sanity init --env .env.local     # pick "create new project", dataset: production
```

This writes `NEXT_PUBLIC_SANITY_PROJECT_ID` into `.env.local`. Also add:

```
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

Restart `npm run dev`. Now:

- Studio is live at **/studio** — the client logs in and edits content.
- The homepage/fleet/destinations pages read from Sanity (ISR, 60s revalidate).
- If a collection is empty in Sanity, the site falls back to `lib/data.ts`, so
  it never looks broken.

Content types the client controls: **Vehicle, Tour Package, Destination,
Testimonial, Service, Site Settings**. Seed them by copying the values already
in `lib/data.ts` and uploading the matching images from `public/images/`.

Deploy the Studio for the client (optional, gives a hosted editor URL):

```bash
npx sanity deploy
```

## Step 2 — Inquiry email (optional)

The quote form already works without this: it validates, saves to localStorage,
and opens a prefilled WhatsApp chat. To *also* email leads to the travel desk,
set in `.env.local`:

```
RESEND_API_KEY=re_xxx
INQUIRY_TO=info@silvercloudsholiday.in
INQUIRY_FROM=Silver Clouds Holiday <noreply@yourdomain.com>
```

Get a free key at resend.com. Without it, `/api/inquiry` no-ops gracefully.

## Step 3 — Deploy

Recommended: **Vercel** (free tier). Import the repo, add the same env vars in
the Vercel dashboard, deploy. Sanity image CDN (`cdn.sanity.io`) is already
whitelisted in `next.config.ts`.

## Notes

- All images are in `public/images/`. Swap the placeholder phone/WhatsApp
  number (`+91 98765 43210` / `919876543210`) once the real one is known — it
  lives in Navbar, Footer, CTA, QuoteForm/lib and WhatsAppFloat, and will move
  to Site Settings when CMS wiring for those is extended.
