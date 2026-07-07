import { useEffect } from 'react'

// Lightweight per-page SEO: sets the document title, meta description,
// canonical URL, and optional JSON-LD structured data on route change.
// (No extra dependency needed — works with any React Router page.)
const SITE_NAME = 'Xatlantic Patches'
const SITE_URL = 'https://www.xatlanticpatches.com'

function upsertMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo({ title, description, path = '/', jsonLd = null }) {
  useEffect(() => {
    document.title = title ? title : `${SITE_NAME} | Custom Patches & Emblems`
    if (description) upsertMeta('description', description)
    upsertLink('canonical', `${SITE_URL}${path}`)

    // Open Graph mirrors
    const og = (prop, content) => {
      let el = document.querySelector(`meta[property="${prop}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', prop)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }
    og('og:title', title || SITE_NAME)
    if (description) og('og:description', description)
    og('og:url', `${SITE_URL}${path}`)

    // JSON-LD structured data (Product / FAQPage / Organization)
    const SCRIPT_ID = 'seo-jsonld'
    document.getElementById(SCRIPT_ID)?.remove()
    if (jsonLd) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = SCRIPT_ID
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
  }, [title, description, path, jsonLd])

  return null
}

export { SITE_NAME, SITE_URL }
