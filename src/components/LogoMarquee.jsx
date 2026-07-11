import { styles } from '../data/styles'
import Reveal from './ui/Reveal'

// Infinite, hover-pausable marquee of real patch style categories — this
// used to show fabricated "client logos" and a fake review-count badge,
// which is a trust/legal risk once the site is live with real visitors.
// Showing our actual product range is a truthful substitute until real
// client logos and reviews are available.
export default function LogoMarquee() {
  const styleNames = styles.map((s) => s.name)
  const loop = [...styleNames, ...styleNames]

  return (
    <section className="border-y border-line bg-paper py-10">
      <div className="container-x">
        <Reveal className="mb-7 flex flex-col items-center justify-center gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
            Every style, crafted to order
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
