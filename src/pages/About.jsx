import { Link } from 'react-router-dom'
import { Award, HeartHandshake, Ruler, Sparkles } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import CTABanner from '../components/CTABanner'

const values = [
  {
    Icon: Ruler,
    title: 'Detail-obsessed production',
    body: 'Every proof is checked against your artwork line by line — thread counts, color matches, and border integrity included.',
  },
  {
    Icon: HeartHandshake,
    title: 'Personal service',
    body: 'You work with a real person from quote to delivery. Questions get answers, not ticket numbers.',
  },
  {
    Icon: Sparkles,
    title: 'Premium materials',
    body: 'Twill, thread, PVC, and leather selected for how they look in year five — not just on delivery day.',
  },
  {
    Icon: Award,
    title: 'A guarantee that means it',
    body: 'If your order doesn’t match the approved proof, we remake it. Simple as that.',
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us — A Detail-Obsessed Custom Patch Company | Xatlantic Patches"
        description="Xatlantic Patches crafts custom patches, pins and coins for brands, teams, military and first responders. Learn about our story, values and quality guarantee."
        path="/about"
      />
      <PageHero
        crumbs={[{ label: 'About Us' }]}
        title="The Patch Company That Sweats the Small Stuff"
        intro="Xatlantic Patches exists for one reason: too many teams and brands settle for emblems that look fine from ten feet and cheap from two. We make the ones that hold up close."
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-5 leading-relaxed text-ink">
              <h2 className="text-2xl font-extrabold text-navy-900">Our story</h2>
              <p>
                We started Xatlantic Patches after years inside the promotional-products industry
                watching quality get traded away for pennies. Patches were treated as commodities —
                but to the people wearing them, they never were. A unit insignia, a fire house
                crest, a first jersey patch: these things carry identity.
              </p>
              <p>
                So we built a shop around the opposite premise: premium materials, careful
                digitizing, honest pricing you can see up front, and a real person who answers when
                something matters. From 25-piece first runs to 5,000-piece programs, every order
                gets the same proofing rigor.
              </p>
              <p>
                Today we serve apparel brands, sports teams, scouting programs, military units, and
                public-safety departments across the country —{' '}
                <Link to="/about/testimonials" className="font-semibold text-brand hover:underline">
                  and they keep coming back
                </Link>
                .
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-5 sm:grid-cols-2">
              {values.map(({ Icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-line bg-paper p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 font-bold text-navy-900">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
