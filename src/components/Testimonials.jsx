import { Link } from 'react-router-dom'
import { ArrowUpRight, Quote, Star } from 'lucide-react'
import { testimonials } from '../data/content'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

export default function Testimonials({ limit }) {
  const items = limit ? testimonials.slice(0, limit) : testimonials

  return (
    <section id="reviews" className="bg-paper py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Social Proof"
          title="Brands that don’t settle, settle on us"
          subtitle="Real feedback from teams, brands, and departments who've put our patches, pins, and coins to work."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.1}>
              <figure className="relative h-full rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="flex items-center justify-between">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={34} className="text-brand/15" fill="currentColor" />
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-ink">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-navy-900 font-display text-lg font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-navy-900">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {limit && limit < testimonials.length && (
          <div className="mt-10 text-center">
            <Link
              to="/about/testimonials"
              className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-brand transition-colors hover:text-brand-dark"
            >
              See all reviews <ArrowUpRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
