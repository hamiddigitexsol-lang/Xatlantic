import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { styles } from '../data/styles'
import Seo from '../components/Seo'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import CTABanner from '../components/CTABanner'

export default function StylesIndex() {
  return (
    <>
      <Seo
        title="Custom Patches by Style & Industry | Xatlantic Patches"
        description="Find the right custom patch for your organization: military, fire department, police, EMS, morale, scouts, sports teams, bikers, name patches and merit badges."
        path="/patches"
      />
      <PageHero
        crumbs={[{ label: 'Patch Styles' }]}
        title="Custom Patches for Every Team & Tradition"
        intro="Whatever you serve, play, ride, or build — we craft patches that carry it with pride. Browse by style or industry to see recommendations, options, and pricing."
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-x grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {styles.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.06}>
              <Link
                to={`/patches/${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-card-hover"
              >
                <h2 className="text-lg font-extrabold text-navy-900 transition-colors group-hover:text-brand">
                  {s.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.intro}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
                  Explore {s.name.toLowerCase()} <ArrowRight size={13} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
