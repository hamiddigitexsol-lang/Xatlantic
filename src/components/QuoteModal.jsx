import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'

// Lead-capture modal, pre-filled with the visitor's calculator selections.
//
// ── BACKEND INTEGRATION (TODO) ───────────────────────────────────────────────
// Submitting currently logs the lead and shows a confirmation. To make this a
// real lead tool, replace the body of `handleSubmit` with one of:
//   • a fetch() POST to your API / serverless function
//   • a form service (Formspree, Getform, Basin) endpoint
//   • an email service (Resend, SendGrid) call from a serverless route
// The `summary` object + `form` state below contain everything you need.
// ─────────────────────────────────────────────────────────────────────────────
export default function QuoteModal({ open, onClose, summary }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (open) {
      setSubmitted(false)
      setForm((f) => ({ ...f, notes: summary?.notes ?? '' }))
    }
  }, [open, summary])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: send `form` + `summary` to your backend / email service here.
    // eslint-disable-next-line no-console
    console.log('Quote lead submitted →', { ...form, quote: summary })
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-line bg-white shadow-float"
            role="dialog"
            aria-modal="true"
            aria-label="Request a quote"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 text-muted transition-colors hover:text-brand"
            >
              <X size={22} />
            </button>

            {!submitted ? (
              <div className="p-7 sm:p-9">
                <span className="eyebrow">
                  <span className="h-px w-6 bg-brand" /> Get This Quote
                </span>
                <h3 className="mt-3 text-2xl font-extrabold text-navy-900">Lock in your pricing</h3>
                <p className="mt-2 text-sm text-muted">
                  Send us your selections and our team will follow up with a formal quote and a free
                  digital proof.
                </p>

                {summary?.lines?.length > 0 && (
                  <div className="mt-5 rounded-xl border border-line bg-paper p-4 text-sm">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-brand">
                      Your selection
                    </p>
                    <ul className="space-y-1 text-ink">
                      {summary.lines.map((line) => (
                        <li key={line.label} className="flex justify-between gap-4">
                          <span className="text-muted">{line.label}</span>
                          <span className="font-semibold">{line.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name" required value={form.name} onChange={update('name')} placeholder="Jane Doe" />
                    <Field
                      label="Email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update('email')}
                      placeholder="jane@brand.com"
                    />
                  </div>
                  <Field label="Phone" type="tel" value={form.phone} onChange={update('phone')} placeholder="(optional)" />
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
                      Notes
                    </label>
                    <textarea
                      value={form.notes}
                      onChange={update('notes')}
                      rows={3}
                      className="input-base"
                      placeholder="Tell us about your artwork, colors, deadline…"
                    />
                  </div>

                  <button type="submit" className="btn-accent w-full">
                    Send My Quote Request
                  </button>
                  <p className="text-center text-xs text-muted">
                    No spam. We typically reply within one business day.
                  </p>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center px-8 py-14 text-center"
              >
                <div className="grid h-16 w-16 place-items-center rounded-full bg-brand-soft text-brand">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="mt-5 text-2xl font-extrabold text-navy-900">
                  Thank you — we’ll be in touch!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  Your request is on its way to our team. Expect a formal quote and a free proof in
                  your inbox shortly.
                </p>
                <button onClick={onClose} className="btn-outline mt-7">
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

function Field({ label, type = 'text', required, value, onChange, placeholder }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <input type={type} required={required} value={value} onChange={onChange} placeholder={placeholder} className="input-base" />
    </div>
  )
}
