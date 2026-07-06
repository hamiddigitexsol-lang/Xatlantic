import { BadgeDollarSign, Layers, ShieldCheck, Timer } from 'lucide-react'
import { trustFeatures, stats } from '../data/content'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const icons = { Layers, BadgeDollarSign, Timer, ShieldCheck }

export default function TrustBar() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why X Atlantic"
          title="Premium quality, without the runaround"
          subtitle="We obsess over the details cheaper shops skip — so your emblems look as good in year five as they do on day one."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustFeatures.map((f, i) => {
            const Icon = icons[f.icon]
            return (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-card-hover">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-navy-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Stat strip — placeholder numbers, edit in src/data/content.js */}
        <Reveal y={28}>
          <div className="mt-12 grid grid-cols-2 divide-x divide-line overflow-hidden rounded-2xl bg-navy-grad py-9 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-4 text-center">
                <p className="text-3xl font-extrabold text-white sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
