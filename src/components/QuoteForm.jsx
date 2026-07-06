import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Upload } from 'lucide-react'
import { allProducts } from '../data/products'
import { submitNetlifyForm } from '../lib/netlifyForms'

// Full inline quote/lead form (Contact page + product pages without a
// calculator mapping). Mirrors the modal flow but lives in the page.
// Submits via Netlify Forms — see src/lib/netlifyForms.js and the matching
// hidden form ("quote-request") in index.html.
export default function QuoteForm({ defaultProduct = '' }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    product: defaultProduct,
    quantity: '',
    width: '',
    height: '',
    notes: '',
  })
  const [artwork, setArtwork] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    setSubmitting(true)
    try {
      await submitNetlifyForm('quote-request', { ...form, ...(artwork ? { artwork } : {}) })
      setSubmitted(true)
    } catch (err) {
      console.error('Quote form submission failed', err)
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center rounded-2xl border border-line bg-white p-10 text-center shadow-card"
      >
        <div className="grid h-16 w-16 place-items-center rounded-full bg-brand-soft text-brand">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="mt-5 text-2xl font-extrabold text-navy-900">Thank you — we’ll be in touch!</h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Your request is on its way to our team. Expect a formal quote and a free digital proof
          within one business day.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" required value={form.name} onChange={update('name')} placeholder="Jane Doe" />
        <Field label="Email" type="email" required value={form.email} onChange={update('email')} placeholder="jane@brand.com" />
        <Field label="Phone" type="tel" value={form.phone} onChange={update('phone')} placeholder="(optional)" />
        <div>
          <Label>Product</Label>
          <select value={form.product} onChange={update('product')} className="input-base">
            <option value="">Not sure yet</option>
            {allProducts.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <Field label="Quantity" type="number" value={form.quantity} onChange={update('quantity')} placeholder="e.g. 100" />
        <div className="grid grid-cols-2 gap-3">
          <Field label={'Width (in)'} type="number" value={form.width} onChange={update('width')} placeholder="3" />
          <Field label={'Height (in)'} type="number" value={form.height} onChange={update('height')} placeholder="3" />
        </div>
      </div>

      <div className="mt-4">
        <Label>Artwork (optional)</Label>
        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-line bg-paper px-4 py-3.5 text-sm text-muted transition-colors hover:border-brand hover:text-brand">
          <Upload size={17} />
          {artwork?.name || 'Upload your design — AI, EPS, PDF, PNG, or JPG'}
          <input
            type="file"
            className="hidden"
            accept=".ai,.eps,.pdf,.png,.jpg,.jpeg,.svg"
            onChange={(e) => setArtwork(e.target.files?.[0] ?? null)}
          />
        </label>
      </div>

      <div className="mt-4">
        <Label>Notes</Label>
        <textarea
          value={form.notes}
          onChange={update('notes')}
          rows={4}
          className="input-base"
          placeholder="Tell us about your design, colors, backing preference, deadline…"
        />
      </div>

      <button type="submit" disabled={submitting} className="btn-accent mt-5 w-full disabled:opacity-60 sm:w-auto">
        {submitting ? 'Sending…' : 'Request My Free Quote'}
      </button>
      {error && (
        <p className="mt-3 text-xs font-semibold text-red-600">
          Something went wrong sending your request — please try again or email us directly.
        </p>
      )}
      <p className="mt-3 text-xs text-muted">
        No spam, no obligation. We reply within one business day with pricing and a free digital proof.
      </p>
    </form>
  )
}

function Label({ children }) {
  return <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted">{children}</p>
}

function Field({ label, type = 'text', required, value, onChange, placeholder }) {
  return (
    <div>
      <Label>
        {label}
        {required && <span className="text-brand"> *</span>}
      </Label>
      <input type={type} required={required} value={value} onChange={onChange} placeholder={placeholder} className="input-base" />
    </div>
  )
}
