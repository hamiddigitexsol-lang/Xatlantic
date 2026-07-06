import { Star } from 'lucide-react'
import { clientLogos } from '../data/content'
import Reveal from './ui/Reveal'

// Infinite, hover-pausable logo marquee. Logos are placeholder wordmarks —
// replace the strings in content.js (or render <img> tags) with real client logos.
export default function LogoMarquee() {
  const loop = [...clientLogos, ...clientLogos]

  return (
    <section className="border-y border-line bg-paper py-10">
      <div className="container-x">
        <Reveal className="mb-7 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          {/* Trustpilot-style rating badge (placeholder) */}
          <div className="flex items-center gap-2.5 rounded-full border border-line bg-white px-4 py-2 shadow-sm">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-semibold text-navy-900">4.9 / 5</span>
            <span className="text-xs text-muted">· 1,200+ reviews</span>
          </div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
            Trusted by teams &amp; brands worldwide
          </p>
        </Reveal>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent" />

        <div className="marquee-track flex w-max animate-marquee items-center gap-14">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-display text-xl font-extrabold tracking-tight text-navy-900/35 transition-colors hover:text-navy-900/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
