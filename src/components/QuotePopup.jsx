import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Upload, X } from 'lucide-react'
import { allProducts } from '../data/products'
import { backings } from '../data/pricing'
import { submitNetlifyForm } from '../lib/netlifyForms'

const COUNT_KEY = 'xap_quote_popup_count'
const DELAY_MS = 7000
const MAX_SHOWS_PER_SESSION = 3

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  product: '',
  backing: '',
  width: '',
  widthUnit: 'in',
  height: '',
  heightUnit: 'in',
  quantity: '',
}

// Site-wide lead-capture popup — auto-opens 7s after landing on a page, up
// to 3 times per browser session (once per qualifying page landing), so it
// doesn't nag indefinitely. Stops early if the visitor already submitted.
// Skipped on /contact since that page already has the full inline form.
export default function QuotePopup() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [artwork, setArtwork] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (pathname === '/contact') return
    const shownCount = Number(sessionStorage.getItem(COUNT_KEY) || 0)
    if (shownCount >= MAX_SHOWS_PER_SESSION) return
    const timer = setTimeout(() => {
      setOpen(true)
      sessionStorage.setItem(COUNT_KEY, String(shownCount + 1))
    }, DELAY_MS)
    return () => clearTimeout(timer)
  }, [pathname])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    setSubmitting(true)
    try {
      await submitNetlifyForm('quote-request', {
        name: form.name,
        email: form.email,
        phone: form.phone,
        product: form.product,
        backing: form.backing,
        width: form.width ? `${form.width} ${form.widthUnit}` : '',
        height: form.height ? `${form.height} ${form.heightUnit}` : '',
        quantity: form.quantity,
        ...(artwork ? { artwork } : {}),
      })
      setSubmitted(true)
      sessionStorage.setItem(COUNT_KEY, String(MAX_SHOWS_PER_SESSION))
    } catch (err) {
      console.error('Quote popup submission failed', err)
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  const close = () => setOpen(false)

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm"
            onClick={close}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-float"
            role="dialog"
            aria-modal="true"
            aria-label="Get a custom quote"
          >
            {!submitted ? (
              <>
                <div className="relative bg-navy-grad px-7 py-6 text-center sm:px-9">
                  <button
                    onClick={close}
                    aria-label="Close"
                    className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  >
                    <X size={18} />
                  </button>
                  <h3 className="text-xl font-extrabold uppercase tracking-wide text-white sm:text-2xl">
                    Need a Custom Quote?
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                    Free estimate, no obligation
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="p-7 sm:p-9">
                  <Section n={1} title="Contact Information">
                    <div className="grid gap-3 sm:grid-cols-3">
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Full Name"
                        className="input-base"
                      />
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={update('email')}
                        placeholder="Email Address"
                        className="input-base"
                      />
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="Phone Number"
                        className="input-base"
                      />
                    </div>
                  </Section>

                  <Section n={2} title="Service Type and Backing Option">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <select value={form.product} onChange={update('product')} className="input-base">
                        <option value="">Select a product</option>
                        {allProducts.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                      <select value={form.backing} onChange={update('backing')} className="input-base">
                        <option value="">No Backing</option>
                        {backings.map((b) => (
                          <option key={b.id} value={b.label}>
                            {b.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Section>

                  <Section n={3} title="Project Specifications">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex overflow-hidden rounded-xl border border-line focus-within:border-brand">
                        <input
                          type="number"
                          min="0"
                          step="0.1"
                          value={form.width}
                          onChange={update('width')}
                          placeholder="Width"
                          className="w-full border-0 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:outline-none"
                        />
                        <select
                          value={form.widthUnit}
                          onChange={update('widthUnit')}
                          className="border-0 border-l border-line bg-paper px-2 text-sm text-ink focus:outline-none"
                        >
                          <option value="in">in</option>
                          <option value="mm">mm</option>
                        </select>
                      </div>
                      <div className="flex overflow-hidden rounded-xl border border-line focus-within:border-brand">
                        <input
                          type="number"
                          min="0"
                          step="0.1"
                          value={form.height}
                          onChange={update('height')}
                          placeholder="Height"
                          className="w-full border-0 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:outline-none"
                        />
                        <select
                          value={form.heightUnit}
                          onChange={update('heightUnit')}
                          className="border-0 border-l border-line bg-paper px-2 text-sm text-ink focus:outline-none"
                        >
                          <option value="in">in</option>
                          <option value="mm">mm</option>
                        </select>
                      </div>
                    </div>
                    <input
                      type="number"
                      min="1"
                      value={form.quantity}
                      onChange={update('quantity')}
                      placeholder="Qty"
                      className="input-base mt-3"
                    />
                  </Section>

                  <Section n={4} title="Design Upload" last>
                    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-line bg-paper px-4 py-3.5 text-sm text-muted transition-colors hover:border-brand hover:text-brand">
                      <Upload size={17} />
                      {artwork?.name || 'Choose file — AI, EPS, PDF, PNG, or JPG'}
                      <input
                        type="file"
                        className="hidden"
                        accept=".ai,.eps,.pdf,.png,.jpg,.jpeg,.svg"
                        onChange={(e) => setArtwork(e.target.files?.[0] ?? null)}
                      />
                    </label>
                  </Section>

                  <button type="submit" disabled={submitting} className="btn-accent mt-2 w-full disabled:opacity-60">
                    {submitting ? 'Sending…' : 'Get Quote'}
                  </button>
                  {error && (
                    <p className="mt-3 text-center text-xs font-semibold text-red-600">
                      Something went wrong sending your request — please try again or email us directly.
                    </p>
                  )}
                  <p className="mt-3 text-center text-xs text-muted">
                    No spam. We reply within one business day.
                  </p>
                </form>
              </>
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
                  Your request is on its way to our team. Expect a formal quote and a free digital
                  proof within one business day.
                </p>
                <button onClick={close} className="btn-outline mt-7">
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

function Section({ n, title, children, last }) {
  return (
    <div className={last ? 'mt-5' : 'mt-5 first:mt-0'}>
      <p className="mb-2.5 text-xs font-bold uppercase tracking-wider text-brand">
        {n}. {title}
      </p>
      {children}
    </div>
  )
}
