import { Calculator, Factory, PenTool, Truck } from 'lucide-react'
import { processSteps } from '../data/content'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const icons = { PenTool, Calculator, Factory, Truck }

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="How It Works"
          title="From idea to doorstep in four steps"
          subtitle="A streamlined, transparent process designed to get premium emblems into your hands without the back-and-forth."
        />

        <div className="relative mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* connecting line on desktop */}
          <div
            className="pointer-events-none absolute left-[12%] right-[12%] top-7 hidden h-0.5 bg-gradient-to-r from-line via-brand/30 to-line lg:block"
            aria-hidden
          />
          {processSteps.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <Reveal key={s.step} delay={i * 0.1} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-white text-brand shadow-card ring-1 ring-line">
                    {Icon && <Icon size={24} />}
                    <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-brand text-[0.7rem] font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
