import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

// Interior-page hero: breadcrumb + H1 + intro copy on a soft brand wash.
export default function PageHero({ crumbs = [], title, intro, children }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div className="pointer-events-none absolute inset-0 bg-hero-fade" aria-hidden />
      <div className="container-x relative py-12 sm:py-16">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
              <li>
                <Link to="/" className="hover:text-brand">
                  Home
                </Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  <ChevronRight size={12} />
                  {c.to && i < crumbs.length - 1 ? (
                    <Link to={c.to} className="hover:text-brand">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-ink">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-900 sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {intro}
          </motion.p>
        )}

        {children}
      </div>
    </section>
  )
}
