import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Calculator from './Calculator'
import PatchesBackground from './PatchesBackground'

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
    <section id="home" className="relative isolate overflow-hidden bg-navy-900">
      {/* Full-bleed "flat lay" of real patch photos, with a directional
          scrim on top — darkest on the left (behind the text) and lighter
          toward the calculator, plus a soft vignette for depth. DOM order
          (not z-index) keeps this behind the content below. */}
      <PatchesBackground />
      {/* Guaranteed baseline contrast at every breakpoint (mobile stacks to
          a single column, so the left-vs-right split below isn't enough on
          its own). */}
      <div className="pointer-events-none absolute inset-0 bg-navy-900/75" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background:
            'radial-gradient(120% 90% at 15% 20%, rgba(8,19,33,0.35), transparent 60%), ' +
            'linear-gradient(115deg, rgba(8,19,33,0.55) 15%, rgba(8,19,33,0.35) 45%, rgba(8,19,33,0.2) 70%, rgba(8,19,33,0.1) 100%), ' +
            'radial-gradient(140% 100% at 50% 100%, rgba(8,19,33,0.35), transparent 55%)',
        }}
        aria-hidden
      />

      <div className="container-x relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        {/* Left — copy */}
        <div className="max-w-xl">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-semibold text-ink shadow-sm">
              Premium custom patches &amp; emblems
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl"
          >
            Custom emblems —{' '}
            <span className="relative whitespace-nowrap text-brand-light">
              done right
              <svg
                className="absolute -bottom-1.5 left-0 h-2.5 w-full text-brand-light/40"
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
            className="mt-5 text-lg leading-relaxed text-white/85 [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]"
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
              <li key={b} className="flex items-center gap-2 text-sm font-medium text-white">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand text-white">
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
            className="mt-4 text-xs text-white/70"
          >
            ⚡ Order now & get <span className="font-semibold text-white">free delivery</span> on your first run.
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
