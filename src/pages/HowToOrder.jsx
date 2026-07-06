import { Link } from 'react-router-dom'
import { ArrowRight, FileImage, MessageSquareQuote, PackageCheck, Stamp } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import CTABanner from '../components/CTABanner'

const steps = [
  {
    Icon: FileImage,
    title: '1 · Send your artwork',
    body: 'Upload a vector file, a PNG, or even a napkin sketch through the quote form. Our art team redraws and digitizes it for production at no charge.',
  },
  {
    Icon: MessageSquareQuote,
    title: '2 · Approve your quote & proof',
    body: 'Price it instantly with the calculator or receive a formal quote within one business day — always with a free digital proof. We revise until it’s right.',
  },
  {
    Icon: Stamp,
    title: '3 · We craft your order',
    body: 'Production begins only after proof approval. Every piece passes a quality check against your approved design before it leaves the floor.',
  },
  {
    Icon: PackageCheck,
    title: '4 · Delivered to your door',
    body: 'Most orders ship in 7–10 business days after approval, carefully packed. Rush options are available when the calendar is tight.',
  },
]

export default function HowToOrder() {
  return (
    <>
      <Seo
        title="How to Order Custom Patches — 4 Simple Steps | X Atlantic Patches"
        description="Ordering custom patches is easy: send artwork, approve your free proof and quote, we produce, you receive. Most orders ship in 7–10 business days."
        path="/about/how-to-order"
      />
      <PageHero
        crumbs={[{ label: 'About', to: '/about' }, { label: 'How to Order' }]}
        title="How to Order Custom Patches"
        intro="Four steps, zero friction. Most customers go from first artwork upload to approved proof in under two days."
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {steps.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.07}>
              <div className="flex h-full gap-5 rounded-2xl border border-line bg-white p-7 shadow-card">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon size={24} />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-navy-900">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="container-x mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-lg font-semibold text-navy-900">Ready when you are.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/pricing" className="btn-accent group">
                Price My Patch Now
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Send My Artwork
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <CTABanner />
    </>
  )
}
