import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { contactInfo } from '../data/content'
import { patches } from '../data/products'
import { styles } from '../data/styles'

function PinterestIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.08 2.45 7.59 5.96 9.13-.08-.78-.16-1.97.03-2.82.18-.78 1.14-4.96 1.14-4.96s-.29-.58-.29-1.44c0-1.35.78-2.36 1.76-2.36.83 0 1.23.62 1.23 1.37 0 .83-.53 2.08-.8 3.23-.23.97.48 1.76 1.43 1.76 1.72 0 3.04-1.81 3.04-4.43 0-2.31-1.66-3.93-4.03-3.93-2.75 0-4.36 2.06-4.36 4.19 0 .83.32 1.72.72 2.2.08.1.09.18.07.28-.07.31-.24.97-.27 1.1-.04.18-.14.22-.33.13-1.25-.58-2.03-2.4-2.03-3.86 0-3.14 2.28-6.02 6.58-6.02 3.46 0 6.14 2.46 6.14 5.76 0 3.43-2.16 6.19-5.16 6.19-1.01 0-1.96-.52-2.28-1.14l-.62 2.37c-.22.86-.83 1.94-1.24 2.6.93.29 1.92.44 2.95.44 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  )
}

const socials = [
  { label: 'Facebook', Icon: Facebook, href: '#' },
  { label: 'Instagram', Icon: Instagram, href: '#' },
  { label: 'LinkedIn', Icon: Linkedin, href: '#' },
  { label: 'Pinterest', Icon: PinterestIcon, href: '#' },
]

const quickLinks = [
  { label: 'All Products', to: '/products' },
  { label: 'Patch Styles', to: '/patches' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About Us', to: '/about' },
  { label: 'How to Order', to: '/about/how-to-order' },
  { label: 'FAQs', to: '/about/faqs' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [signedUp, setSignedUp] = useState(false)

  const handleNewsletter = (e) => {
    e.preventDefault()
    // Visual only — wire up to Klaviyo / Mailchimp etc. later.
    if (email.trim()) setSignedUp(true)
  }

  return (
    <footer className="bg-navy-900 pt-16 text-white/80">
      <div className="container-x">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white font-display text-lg font-extrabold text-navy-900">
                X
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-extrabold tracking-tight text-white">
                  ATLANTIC <span className="text-brand-light">PATCHES</span>
                </span>
                <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.28em] text-white/50">
                  Custom Emblems
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Custom emblems, crafted to a premium standard. Detail-obsessed patches, pins, and
              promotional products for brands that care.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-all hover:border-brand-light hover:bg-brand hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/65 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light">Products</h4>
            <ul className="mt-4 space-y-2.5">
              {patches.map((p) => (
                <li key={p.id}>
                  <Link to={`/products/${p.slug}`} className="text-sm text-white/65 transition-colors hover:text-white">
                    {p.plural}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular styles — internal links help SEO crawl depth */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light">Popular Styles</h4>
            <ul className="mt-4 space-y-2.5">
              {styles.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link to={`/patches/${s.slug}`} className="text-sm text-white/65 transition-colors hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light">Get In Touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-brand-light" />
                <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`} className="hover:text-white">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-brand-light" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-light" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>

            <form onSubmit={handleNewsletter} className="mt-6">
              <label className="text-xs font-medium uppercase tracking-wider text-white/50">Newsletter</label>
              {!signedUp ? (
                <div className="mt-2 flex overflow-hidden rounded-full border border-white/15 focus-within:border-brand-light">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-brand px-4 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
                  >
                    Join
                  </button>
                </div>
              ) : (
                <p className="mt-2 rounded-full border border-brand-light/40 bg-brand/15 px-4 py-2.5 text-sm text-brand-light">
                  Thanks for subscribing! 🎉
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="h-px w-full bg-white/10" />
        <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} X Atlantic Patches. All rights reserved.</p>
          <p className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
