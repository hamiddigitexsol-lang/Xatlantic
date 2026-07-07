import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { contactInfo } from '../data/content'
import Seo from '../components/Seo'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import QuoteForm from '../components/QuoteForm'

const channels = [
  { Icon: Phone, label: 'Call us', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/[^+\d]/g, '')}` },
  { Icon: Mail, label: 'Email us', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { Icon: MapPin, label: 'Visit us', value: contactInfo.address },
  { Icon: Clock, label: 'Hours', value: 'Mon–Fri, 9am–6pm ET' },
]

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us — Free Quotes & Samples | Xatlantic Patches"
        description="Get a free custom patch quote, request a sample, or talk to our team. We reply within one business day with pricing and a free digital proof."
        path="/contact"
      />
      <PageHero
        crumbs={[{ label: 'Contact' }]}
        title="Let’s Make Something Great"
        intro="Send your artwork for a free quote and digital proof, request a sample pack, or just ask a question — a real person replies within one business day."
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="space-y-4">
              {channels.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 rounded-2xl border border-line bg-paper p-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                    <Icon size={21} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">{label}</p>
                    {href ? (
                      <a href={href} className="mt-0.5 block font-semibold text-navy-900 hover:text-brand">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 font-semibold text-navy-900">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="rounded-2xl bg-navy-grad p-6 text-white">
                <h3 className="font-extrabold">Want to feel the quality first?</h3>
                <p className="mt-1.5 text-sm text-white/70">
                  Mention “sample pack” in your message and we’ll mail you real patch samples so you
                  can judge our stitching before you order.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
