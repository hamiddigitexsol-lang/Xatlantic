import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/faqs'
import Seo from '../components/Seo'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import CTABanner from '../components/CTABanner'

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-bold text-navy-900">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-brand transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FaqsPage() {
  // FAQ structured data helps these answers surface in search results.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.flatMap((cat) =>
      cat.items.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    ),
  }

  return (
    <>
      <Seo
        title="Custom Patches FAQs — Ordering, Materials & Shipping | Xatlantic Patches"
        description="Answers to common custom patch questions: minimum orders, file formats, backing options, washability, pricing and delivery times."
        path="/about/faqs"
        jsonLd={jsonLd}
      />
      <PageHero
        crumbs={[{ label: 'About', to: '/about' }, { label: 'FAQs' }]}
        title="Frequently Asked Questions"
        intro="Everything you need to know about ordering custom patches — and if we missed something, our team is one message away."
      />

      <section className="bg-paper py-14 sm:py-20">
        <div className="container-x max-w-4xl space-y-10">
          {faqs.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 0.06}>
              <div>
                <h2 className="mb-4 text-xl font-extrabold text-navy-900">{cat.category}</h2>
                <div className="space-y-3">
                  {cat.items.map((f) => (
                    <FaqItem key={f.q} q={f.q} a={f.a} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
