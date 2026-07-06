import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Star } from 'lucide-react'
import Calculator from './Calculator'
import FloatingPatches from './FloatingPatches'

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const bullets = ['Low order minimums', 'Free digital proof', 'Ships in as few as 7 days']

export default function Hero({ selectedProductId }) {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* soft brand wash + dotted texture */}
      <div className="pointer-events-none absolute inset-0 bg-hero-fade" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: 'radial-gradient(#dbe3f0 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'linear-gradient(to bottom, black, transparent 70%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 70%)',
        }}
        aria-hidden
      />

      {/* Real patch photos gently floating across the whole hero. Placed
          after the background layers but before the content in DOM order,
          so it paints above the texture and below the text/card (which
          have opaque backgrounds) — no z-index juggling needed. */}
      <FloatingPatches />

      <div className="container-x relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        {/* Left — copy */}
        <div className="max-w-xl">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-semibold text-ink shadow-sm">
              <span className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </span>
              Rated 4.9/5 by 1,000+ brands
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl"
          >
            Custom emblems —{' '}
            <span className="relative whitespace-nowrap text-brand">
              done right
              <svg
                className="absolute -bottom-1.5 left-0 h-2.5 w-full text-brand/30"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d="M0 6 Q 50 0 100 6" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
            , done premium.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-5 text-lg leading-relaxed text-muted"
          >
            Your one-stop shop for turning ideas into reality. From embroidered and leather patches
            to challenge coins and pins — crafted with personalized service and quality you’ll love.
          </motion.p>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-6 flex flex-wrap gap-x-6 gap-y-2"
          >
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm font-medium text-ink">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-soft text-brand">
                  <Check size={13} strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href="#calculator" className="btn-accent group">
              Get Started
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <Link to="/products" className="btn-outline">
              Explore Products
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-4 text-xs text-muted"
          >
            ⚡ Order now & get <span className="font-semibold text-ink">free delivery</span> on your first run.
          </motion.p>
        </div>

        {/* Right — live calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <Calculator selectedProductId={selectedProductId} />
        </motion.div>
      </div>
    </section>
  )
}
