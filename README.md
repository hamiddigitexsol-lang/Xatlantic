# X Atlantic Patches — Multi-Page Marketing Website

A production-ready, SEO-structured, multi-page marketing site for **X Atlantic Patches**,
a custom patches & promotional products company. Built with **React (Vite)**,
**React Router**, **Tailwind CSS**, **Framer Motion**, and **lucide-react**.

---

## 🚀 Getting started

```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # production build → /dist
npm run preview  # preview the production build
```

Requires Node 18+.

> **Deploying:** this is a single-page app with client-side routing. Configure your
> host (Netlify/Vercel/nginx) to rewrite all paths to `/index.html`.

---

## 🗺 Page tree (≈40 pages)

| Route | Page |
| --- | --- |
| `/` | Home — hero with live calculator, logo marquee, trust pillars, product grid, process, testimonials, CTA |
| `/products` | Product catalog index |
| `/products/<slug>` | 15 product pages (embroidered, chenille, PVC, silicone, leather, woven, dye-sublimation, metflex, lapel pins, keychains, challenge coins, socks, shoe charms, beanies, scarves) |
| `/patches` | Patch styles index |
| `/patches/<slug>` | 14 style/industry pages (military, army, navy, air force, fire, police, EMS, first responder, morale, scouts, sports, biker, name patches, merit badges) |
| `/pricing` | Live calculator + volume-discount and backing tables |
| `/gallery` | Filterable gallery (placeholder art, photo-ready) |
| `/about` | Company story & values |
| `/about/testimonials` | Reviews page |
| `/about/faqs` | FAQ accordion with FAQPage structured data |
| `/about/how-to-order` | 4-step ordering guide |
| `/contact` | Quote form + contact channels |
| `*` | Styled 404 |

**Product and style pages are data-driven templates.** Add an entry to
`src/data/products.js` or `src/data/styles.js` and the page, nav dropdowns, footer
links, and related-page cross-links all pick it up automatically. (Remember to add the
URL to `public/sitemap.xml` too.)

---

## 🔍 SEO features

- Unique, keyword-targeted **title tag, meta description, and H1** on every page
  (set via `src/components/Seo.jsx` — no extra dependency).
- **Canonical URLs** and Open Graph tags per page.
- **JSON-LD structured data**: `Organization` (home), `Product` (product pages),
  `Service` (style pages), `FAQPage` (FAQs).
- `public/sitemap.xml` (39 URLs) + `public/robots.txt`.
- Heavy **internal linking**: product ↔ style cross-links, footer link columns,
  breadcrumbs on every interior page.
- ⚠️ **Set the real domain** in two places before launch:
  `src/components/Seo.jsx` (`SITE_URL`) and `public/sitemap.xml` / `robots.txt`.
- 💡 For maximum crawlability you can later add prerendering (e.g. `vite-plugin-ssr`
  or a prerender service) — the per-page meta is already in place.

---

## 📁 Structure

```
src/
├─ App.jsx                 # routes
├─ data/
│  ├─ products.js          # 15 products: pricing + page copy + meta
│  ├─ styles.js            # 14 style pages: copy + meta + recommendations
│  ├─ pricing.js           # calculator formula, tiers, backings, limits
│  ├─ faqs.js              # sitewide FAQs
│  └─ content.js           # trust pillars, process, testimonials, stats, contact
├─ pages/                  # one file per page type (Product/Style pages are templates)
└─ components/
   ├─ Layout.jsx           # header/footer wrapper + scroll restoration
   ├─ Seo.jsx              # per-page title/meta/canonical/JSON-LD
   ├─ Calculator.jsx       # ⭐ live price calculator
   ├─ QuoteForm.jsx        # full inline lead form (artwork upload UI)
   ├─ QuoteModal.jsx       # calculator's lead capture modal
   └─ ...                  # Hero, Header, Footer, grids, marquee, etc.
```

---

## 🛠 Customizing

| What | Where |
| --- | --- |
| Product copy, prices, page meta | `src/data/products.js` |
| Style-page copy & keywords | `src/data/styles.js` |
| Pricing formula & discounts | `src/data/pricing.js` |
| Stats, testimonials, contact info | `src/data/content.js` |
| Brand colors & fonts | `tailwind.config.js` |
| Real product photos | set each product's `image` field (see below) |

### Dropping in real photos

Every product has `image: null`. Put photos in `src/assets/`, import them, and set the
field — the product grid, gallery, and product pages render them automatically:

```js
import embroidered from '../assets/embroidered.jpg'
{ id: 'embroidered', image: embroidered, ... }
```

### Wiring the forms (backend TODO)

`QuoteForm.jsx` and `QuoteModal.jsx` currently log submissions and show a styled
confirmation. Replace the marked `handleSubmit` bodies with a `fetch()` to your API,
a form service (Formspree/Getform), or an email route (Resend/SendGrid). The footer
newsletter input is visual-only.

### Placeholder content to replace before launch

- Stats (“1,000+ brands”, “4.9/5”…) and testimonials in `src/data/content.js`
- Client logo wordmarks in the marquee (`clientLogos` in `content.js`)
- Contact phone/email/address in `content.js`
- Gallery tiles (photo-ready, currently generated art)
