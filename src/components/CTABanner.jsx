import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './ui/Reveal'

export default function CTABanner() {
  return (
    <section className="bg-white py-8">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy-grad px-8 py-16 text-center shadow-float sm:px-14">
            {/* decorative texture + glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                backgroundSize: '38px 38px',
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/30 blur-3xl"
              aria-hidden
            />

            <div className="relative">
              <span className="eyebrow justify-center text-brand-light">
                <span className="h-px w-6 bg-brand-light" /> Let’s Build Something
              </span>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                Ready to bring your design to life?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">
                Price it instantly, request a free sample, and let our team handle the craft. Your
                premium emblem is just a few clicks away.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/pricing" className="btn-accent group">
                  Start Your Quote
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/contact" className="btn-outline !border-white/25 !bg-white/5 !text-white hover:!bg-white/10">
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
