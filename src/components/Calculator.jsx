import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Minus, Plus, Sparkles, Tag } from 'lucide-react'
import { calculatorProducts } from '../data/products'
import {
  backings,
  calculatePricing,
  clamp,
  formatCurrency,
  QTY_LIMITS,
  SIZE_LIMITS,
} from '../data/pricing'
import AnimatedNumber from './ui/AnimatedNumber'
import QuoteModal from './QuoteModal'

// Self-contained quote calculator card. Placed inside the hero (right column)
// and used as the site's primary lead-gen tool.
export default function Calculator({ selectedProductId }) {
  const [productId, setProductId] = useState(calculatorProducts[0].id)
  const [width, setWidth] = useState(3)
  const [height, setHeight] = useState(3)
  const [backingId, setBackingId] = useState(backings[0].id)
  const [quantity, setQuantity] = useState(100)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (selectedProductId && calculatorProducts.some((p) => p.id === selectedProductId)) {
      setProductId(selectedProductId)
    }
  }, [selectedProductId])

  const product = useMemo(
    () => calculatorProducts.find((p) => p.id === productId) ?? calculatorProducts[0],
    [productId],
  )
  const backing = useMemo(() => backings.find((b) => b.id === backingId) ?? backings[0], [backingId])

  const result = useMemo(
    () =>
      calculatePricing({
        basePrice: product.basePrice,
        width,
        height,
        backingModifier: backing.modifier,
        quantity,
      }),
    [product, width, height, backing, quantity],
  )

  const quoteSummary = {
    lines: [
      { label: 'Product', value: product.name },
      { label: 'Size', value: `${width}" × ${height}"` },
      { label: 'Backing', value: backing.label },
      { label: 'Quantity', value: quantity.toLocaleString() },
      { label: 'Price / unit', value: formatCurrency(result.pricePerUnit) },
      { label: 'Estimated total', value: formatCurrency(result.totalPrice) },
      { label: 'Turnaround', value: result.turnaround },
    ],
    notes: `I'm interested in ${quantity.toLocaleString()} × ${product.name} at ${width}" × ${height}" with ${backing.label} backing. Estimated total: ${formatCurrency(
      result.totalPrice,
    )}.`,
  }

  const stepQty = (delta) =>
    setQuantity((q) => clamp(Math.round(q + delta), QTY_LIMITS.min, QTY_LIMITS.max))

  return (
    <div
      id="calculator"
      className="relative rounded-3xl border border-line bg-white p-6 shadow-float sm:p-7"
    >
      {/* Accent glow behind the card */}
      <div
        className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-brand/10 blur-2xl"
        aria-hidden
      />

      <div className="flex items-center justify-between">
        <div>
          <span className="chip">
            <Sparkles size={13} /> Live Pricing
          </span>
          <h3 className="mt-2 text-xl font-extrabold text-navy-900">Instant Quote Calculator</h3>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        {/* Product + Backing */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label>Product Type</Label>
            <select
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="input-base appearance-none bg-[length:12px] bg-[right_0.9rem_center] bg-no-repeat pr-9"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%2364748B' d='M6 8 0 0h12z'/%3E%3C/svg%3E\")",
              }}
            >
              {calculatorProducts.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label>Backing / Finish</Label>
            <select
              value={backingId}
              onChange={(e) => setBackingId(e.target.value)}
              className="input-base appearance-none bg-[length:12px] bg-[right_0.9rem_center] bg-no-repeat pr-9"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%2364748B' d='M6 8 0 0h12z'/%3E%3C/svg%3E\")",
              }}
            >
              {backings.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.label}
                  {b.modifier > 0 ? ` (+${formatCurrency(b.modifier)})` : ''}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Size */}
        <div className="grid grid-cols-2 gap-4">
          <NumberField
            label="Width (in)"
            value={width}
            min={SIZE_LIMITS.min}
            max={SIZE_LIMITS.max}
            step={0.5}
            onCommit={(v) => setWidth(clamp(v, SIZE_LIMITS.min, SIZE_LIMITS.max))}
          />
          <NumberField
            label="Height (in)"
            value={height}
            min={SIZE_LIMITS.min}
            max={SIZE_LIMITS.max}
            step={0.5}
            onCommit={(v) => setHeight(clamp(v, SIZE_LIMITS.min, SIZE_LIMITS.max))}
          />
        </div>

        {/* Quantity */}
        <div>
          <div className="flex items-center justify-between">
            <Label className="mb-0">Quantity</Label>
            <span className="text-sm font-bold text-brand">{quantity.toLocaleString()} units</span>
          </div>
          <input
            type="range"
            min={QTY_LIMITS.min}
            max={QTY_LIMITS.max}
            step={25}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="mt-3 w-full accent-brand"
            aria-label="Quantity"
          />
          <div className="mt-2.5 flex items-center gap-2.5">
            <button
              onClick={() => stepQty(-25)}
              className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-brand hover:text-brand"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            <NumberField
              value={quantity}
              min={QTY_LIMITS.min}
              max={QTY_LIMITS.max}
              step={1}
              onCommit={(v) => setQuantity(clamp(Math.round(v), QTY_LIMITS.min, QTY_LIMITS.max))}
              className="h-9 w-24 py-0 text-center"
            />
            <button
              onClick={() => stepQty(25)}
              className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-brand hover:text-brand"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
            <span className="ml-auto text-[0.7rem] text-muted">
              {QTY_LIMITS.min}–{QTY_LIMITS.max.toLocaleString()}+
            </span>
          </div>
        </div>
      </div>

      {/* Live output */}
      <motion.div layout className="mt-5 rounded-2xl bg-navy-grad p-5 text-white">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-white/60">Price / unit</p>
            <p className="text-2xl font-extrabold">
              <AnimatedNumber value={result.pricePerUnit} format={(v) => formatCurrency(v)} />
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium uppercase tracking-wider text-white/60">Estimated total</p>
            <p className="text-3xl font-extrabold text-white sm:text-4xl">
              <AnimatedNumber value={result.totalPrice} format={(v) => formatCurrency(v)} />
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-3 text-xs text-white/80">
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-brand-light" /> {result.turnaround}
          </span>
          <span className="flex items-center gap-1.5">
            <Tag size={14} className="text-brand-light" /> Tier: {result.tierLabel}
          </span>
          {result.discountMultiplier < 1 && (
            <span className="rounded-full bg-brand/30 px-2 py-0.5 font-semibold text-white">
              You save {Math.round((1 - result.discountMultiplier) * 100)}%
            </span>
          )}
        </div>
      </motion.div>

      <button onClick={() => setModalOpen(true)} className="btn-accent mt-4 w-full">
        Get This Quote — Free Proof
      </button>
      <p className="mt-2.5 text-center text-[0.7rem] text-muted">
        Estimate only. Final pricing confirmed with your free proof. No sign-up required.
      </p>

      <QuoteModal open={modalOpen} onClose={() => setModalOpen(false)} summary={quoteSummary} />
    </div>
  )
}

function Label({ children, className = '' }) {
  return (
    <p className={`mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted ${className}`}>
      {children}
    </p>
  )
}

// Lets the user freely type (clear the field, enter multi-digit numbers,
// start a decimal) without every keystroke being clamped mid-edit. The value
// is only parsed and clamped when the field is committed (blur / Enter).
function NumberField({ label, value, min, max, step, onCommit, className = '' }) {
  const [draft, setDraft] = useState(String(value))

  useEffect(() => {
    setDraft(String(value))
  }, [value])

  const commit = () => {
    const parsed = Number(draft)
    if (draft.trim() === '' || Number.isNaN(parsed)) {
      setDraft(String(value))
      return
    }
    onCommit(parsed)
  }

  return (
    <div>
      {label && <Label>{label}</Label>}
      <input
        type="number"
        inputMode="decimal"
        value={draft}
        min={min}
        max={max}
        step={step}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === 'Enter') e.currentTarget.blur()
        }}
        className={`input-base ${className}`}
      />
    </div>
  )
}
