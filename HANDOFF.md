# Handoff Brief — X Atlantic Patches Website

Read this first, then paste a summary of it (or the whole file) into your Claude Code
session so Claude has context before you ask for changes. Claude sessions don't carry
memory between people/machines — this file is the bridge.

---

## What this project is

A multi-page marketing + e-commerce-style website for **X Atlantic Patches**, a custom
patches and promotional products company. Built with React (Vite) + Tailwind CSS +
Framer Motion + React Router.

**Design direction:** clean white background with navy (`#0B1B33`) and blue accent
(`#2563EB`) — modeled structurally on qualitypatches.com and americanpatch.com, but
with 100% original copy and a standout feature they don't have: a **live, real-time
price calculator**.

## How to run it

```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # production build
```

Requires Node 18+.

## Site structure (~40 pages, all live)

- `/` — Home (hero + live calculator, trust bar, product grid, process, testimonials, CTA)
- `/products` + 15 individual product pages (`/products/embroidered-patches`, etc.)
- `/patches` + 14 style/industry pages (`/patches/military-patches`, `/patches/fire-department-patches`, etc.)
- `/pricing` — calculator + discount/backing tables
- `/gallery`, `/about`, `/about/testimonials`, `/about/faqs`, `/about/how-to-order`, `/contact`
- Product and style pages are **data-driven templates** — new pages come from adding
  an entry to `src/data/products.js` or `src/data/styles.js`, not new component files.

## Key files to know about

| File | Purpose |
| --- | --- |
| `src/data/products.js` | All 15 products: prices, copy, SEO meta, FAQs |
| `src/data/styles.js` | All 14 style pages: copy, SEO meta, recommended products |
| `src/data/pricing.js` | The calculator's pricing formula, quantity discount tiers, backing costs |
| `src/data/content.js` | Trust pillars, process steps, testimonials, stats, contact info |
| `src/data/faqs.js` | Sitewide FAQ content |
| `src/components/Calculator.jsx` | The live price calculator (core feature) |
| `src/components/QuoteForm.jsx` / `QuoteModal.jsx` | Lead-capture forms |
| `src/components/Seo.jsx` | Per-page title/meta/canonical/JSON-LD |
| `README.md` | Full technical documentation |

## What's placeholder / needs real content before launch

- **Contact info** (phone/email/address) in `src/data/content.js`
- **Stats** ("1,000+ brands", "4.9/5 rating"...) in `src/data/content.js` — currently illustrative
- **Testimonials** — currently written as realistic placeholders, not real quotes
- **Client logo wordmarks** in the marquee — currently text, not real logos
- **Product photography** — every product has `image: null` and renders a monogram
  placeholder; drop real photos into `src/assets/` and set the `image` field
- **Quote form backend** — `QuoteForm.jsx` and `QuoteModal.jsx` currently log
  submissions to the console and show a "thank you" message. Needs a real backend
  (Formspree, email service, or custom API) — marked with `TODO` comments in the code
- **Real domain** — `src/components/Seo.jsx` (`SITE_URL`) and `public/sitemap.xml` /
  `robots.txt` currently reference a placeholder domain

## Decisions already made (so they don't get re-litigated)

- Chose **clean white/navy** design over an initial dark navy+gold concept, to match
  the look of competitor sites (qualitypatches.com / americanpatch.com) while staying
  more modern
- Kept the **live calculator** as a differentiator — competitors only have static quote
  forms, not real-time pricing
- Built the **full page tree** (~40 pages) rather than a smaller core set, to compete
  on SEO surface area with americanpatch.com
- Copy is **entirely original** — not copied from any reference site (to avoid
  duplicate-content SEO penalties)

## Natural next steps (not yet done)

- Backend integration for the quote forms
- Real product photography
- A blog section (americanpatch.com has one; it's a meaningful part of their SEO)
- Prerendering/SSR for stronger SEO crawlability (currently client-side rendered)
- Real testimonials, stats, and contact info once available
