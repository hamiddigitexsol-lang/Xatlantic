import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react'
import { contactInfo } from '../data/content'
import { patches, otherProducts } from '../data/products'
import { styles } from '../data/styles'
import logoIcon from '../assets/logo-icon.png'

function Logo({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="group flex items-center gap-2.5 leading-none" aria-label="Xatlantic Patches — home">
      <img src={logoIcon} alt="" className="h-14 w-14 rounded-xl object-cover" />
      <span className="flex flex-col">
        <span className="font-display text-base font-extrabold tracking-tight text-navy-900">
          XATLANTIC <span className="text-brand">PATCHES</span>
        </span>
        <span className="text-[0.6rem] font-medium uppercase tracking-[0.28em] text-muted">Custom Emblems</span>
      </span>
    </Link>
  )
}

// Hover/click dropdown wrapper used for Products / Patches / About menus.
function Dropdown({ label, isActive, children, width = 'w-[36rem]' }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-brand ${
          isActive ? 'text-brand' : 'text-ink'
        }`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {label}
        <ChevronDown size={15} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18 }}
            className={`absolute left-1/2 top-full ${width} -translate-x-1/2 pt-4`}
          >
            <div className="rounded-2xl border border-line bg-white p-6 shadow-float" onClick={() => setOpen(false)}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MenuColumn({ title, links }) {
  return (
    <div>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand">{title}</p>
      <ul className="space-y-0.5">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="block w-full rounded-lg px-2.5 py-1.5 text-left text-sm text-ink transition-colors hover:bg-brand-soft hover:text-brand-dark"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Close the mobile menu on navigation.
  useEffect(() => setMobileOpen(false), [pathname])

  const productLinks = {
    patches: patches.map((p) => ({ label: p.short, to: `/products/${p.slug}` })),
    other: otherProducts.map((p) => ({ label: p.short, to: `/products/${p.slug}` })),
  }
  const styleLinks = styles.map((s) => ({ label: s.name, to: `/patches/${s.slug}` }))

  const navLinkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors hover:text-brand ${isActive ? 'text-brand' : 'text-ink'}`

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden bg-navy-900 text-white/80 lg:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <p className="tracking-wide">Free digital proof on every order · Ships worldwide</p>
          <div className="flex items-center gap-5">
            <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-1.5 hover:text-white">
              <Phone size={13} /> {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-1.5 hover:text-white">
              <Mail size={13} /> {contactInfo.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-line bg-white/90 shadow-card backdrop-blur-md' : 'border-b border-transparent bg-white'
        }`}
      >
        <div className="container-x flex h-[4.5rem] items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 xl:gap-7 lg:flex">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            <Dropdown label="Products" isActive={pathname.startsWith('/products')}>
              <div className="grid grid-cols-2 gap-6">
                <MenuColumn title="Patches" links={productLinks.patches} />
                <MenuColumn title="Other Products" links={productLinks.other} />
              </div>
              <div className="mt-4 border-t border-line pt-3">
                <Link to="/products" className="text-sm font-semibold text-brand hover:text-brand-dark">
                  View all products →
                </Link>
              </div>
            </Dropdown>

            <Dropdown label="Patches by Use" isActive={pathname.startsWith('/patches')} width="w-[38rem]">
              <div className="grid grid-cols-2 gap-x-6">
                <MenuColumn title="Styles & Industries" links={styleLinks.slice(0, 7)} />
                <MenuColumn title="More" links={styleLinks.slice(7)} />
              </div>
              <div className="mt-4 border-t border-line pt-3">
                <Link to="/patches" className="text-sm font-semibold text-brand hover:text-brand-dark">
                  Browse all patch styles →
                </Link>
              </div>
            </Dropdown>

            <NavLink to="/pricing" className={navLinkClass}>
              Pricing
            </NavLink>
            <NavLink to="/gallery" className={navLinkClass}>
              Gallery
            </NavLink>

            <Dropdown label="About" isActive={pathname.startsWith('/about')} width="w-56">
              <ul className="space-y-0.5">
                {[
                  { label: 'Our Company', to: '/about' },
                  { label: 'How to Order', to: '/about/how-to-order' },
                  { label: 'Testimonials', to: '/about/testimonials' },
                  { label: 'FAQs', to: '/about/faqs' },
                ].map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="block rounded-lg px-2.5 py-1.5 text-sm text-ink transition-colors hover:bg-brand-soft hover:text-brand-dark"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Dropdown>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/contact" className="btn-outline !px-5 !py-2.5">
              Get a Sample
            </Link>
            <Link to="/pricing" className="btn-accent !px-5 !py-2.5">
              Get a Free Quote
            </Link>
          </div>

          <button className="text-navy-900 lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-navy-900/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-white px-6 py-5 lg:hidden"
            >
              <div className="flex items-center justify-between">
                <Logo onClick={() => setMobileOpen(false)} />
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-muted hover:text-brand">
                  <X size={26} />
                </button>
              </div>

              <nav className="mt-7 flex flex-col gap-0.5">
                {[
                  { label: 'Home', to: '/' },
                  { label: 'All Products', to: '/products' },
                  { label: 'Patch Styles', to: '/patches' },
                  { label: 'Pricing', to: '/pricing' },
                  { label: 'Gallery', to: '/gallery' },
                  { label: 'About Us', to: '/about' },
                  { label: 'How to Order', to: '/about/how-to-order' },
                  { label: 'FAQs', to: '/about/faqs' },
                  { label: 'Contact', to: '/contact' },
                ].map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="rounded-xl px-3 py-2.5 text-base font-semibold text-navy-900 transition-colors hover:bg-brand-soft hover:text-brand-dark"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>

              <div className="my-5 h-px w-full bg-line" />

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand">Shop Patches</p>
              <div className="flex flex-wrap gap-2">
                {patches.map((p) => (
                  <Link
                    key={p.id}
                    to={`/products/${p.slug}`}
                    className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-brand hover:text-brand"
                  >
                    {p.short}
                  </Link>
                ))}
              </div>

              <div className="mt-auto space-y-3 pt-8">
                <Link to="/contact" className="btn-outline w-full">
                  Get a Sample
                </Link>
                <Link to="/pricing" className="btn-accent w-full">
                  Get a Free Quote
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
