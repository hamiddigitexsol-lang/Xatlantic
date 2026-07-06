// ─────────────────────────────────────────────────────────────────────────────
// Pricing engine for the live calculator.
// Calibrated against ~90 real invoiced patch orders (a working supplier's
// order history) rather than illustrative round numbers. The formula:
//   sizeMultiplier        = sqrt((width * height) / 9)   (3"x3" = 1.0 baseline)
//     Real invoices scale with size much more gently than raw area (a 4"x4"
//     patch isn't 1.78x a 3"x3" patch in practice) — sqrt fit the data best.
//   quantityDiscount      = tiered multiplier that drops with volume
//   pricePerUnit          = base * sizeMultiplier * discount, PLUS flat backing
//   totalPrice            = pricePerUnit * quantity   (clamped to a floor)
// Backing is added AFTER the quantity discount — it's a flat per-unit
// material/labor cost, not something that should shrink at high volume.
// ─────────────────────────────────────────────────────────────────────────────

export const SIZE_LIMITS = { min: 0.5, max: 12 }
export const QTY_LIMITS = { min: 25, max: 5000 }

// Safety net only — real high-volume orders (750-1,500+ units) priced as low
// as $0.90-$1.35/unit, so this must stay low enough not to override a
// legitimate bulk calculation. It mainly guards tiny-size + low-qty combos.
const MIN_UNIT_PRICE = 1.5

export const backings = [
  { id: 'iron-on', label: 'Iron-on', modifier: 0.0, note: 'Heat-seal adhesive' },
  { id: 'sew-on', label: 'Sew-on', modifier: 0.0, note: 'Stitched to garment' },
  { id: 'velcro', label: 'Velcro (Hook & Loop)', modifier: 0.5, note: 'Removable, tactical' },
  { id: 'adhesive', label: 'Adhesive (Peel & Stick)', modifier: 0.35, note: 'Self-stick backing' },
]

// Bulk-discount tiers (highest qualifying threshold wins). Multipliers are
// relative to the 100–249 band (1.0x), fitted to the observed decline in
// real per-unit invoice prices as quantity increases.
export const quantityTiers = [
  { min: 5000, multiplier: 0.4, label: '5,000+' },
  { min: 2500, multiplier: 0.45, label: '2,500–4,999' },
  { min: 1000, multiplier: 0.53, label: '1,000–2,499' },
  { min: 500, multiplier: 0.66, label: '500–999' },
  { min: 250, multiplier: 0.85, label: '250–499' },
  { min: 100, multiplier: 1.0, label: '100–249' },
  { min: 50, multiplier: 1.4, label: '50–99' },
  { min: 0, multiplier: 1.9, label: '25–49' },
]

export function clamp(value, min, max) {
  if (Number.isNaN(value) || value == null) return min
  return Math.min(Math.max(value, min), max)
}

export function getQuantityTier(quantity) {
  return quantityTiers.find((tier) => quantity >= tier.min) ?? quantityTiers[quantityTiers.length - 1]
}

// Estimated turnaround scales gently with volume.
export function getTurnaround(quantity) {
  if (quantity >= 2000) return '12–16 business days'
  if (quantity >= 1000) return '10–14 business days'
  if (quantity >= 500) return '8–12 business days'
  return '7–10 business days'
}

/**
 * Calculate live pricing.
 * @param {Object} params
 * @param {number} params.basePrice  per-unit base for the product type
 * @param {number} params.width      inches
 * @param {number} params.height     inches
 * @param {number} params.backingModifier  flat per-unit add-on
 * @param {number} params.quantity   units
 * @returns {{ pricePerUnit:number, totalPrice:number, sizeMultiplier:number,
 *             discountMultiplier:number, tierLabel:string, turnaround:string }}
 */
export function calculatePricing({ basePrice, width, height, backingModifier, quantity }) {
  const w = clamp(Number(width), SIZE_LIMITS.min, SIZE_LIMITS.max)
  const h = clamp(Number(height), SIZE_LIMITS.min, SIZE_LIMITS.max)
  const qty = clamp(Math.round(Number(quantity)), QTY_LIMITS.min, QTY_LIMITS.max)

  const sizeMultiplier = Math.sqrt((w * h) / 9) // 3"x3" baseline = 1.0
  const tier = getQuantityTier(qty)

  let pricePerUnit = basePrice * sizeMultiplier * tier.multiplier + backingModifier
  pricePerUnit = Math.max(pricePerUnit, MIN_UNIT_PRICE)

  // Round sensibly to 2 decimals.
  pricePerUnit = Math.round(pricePerUnit * 100) / 100
  const totalPrice = Math.round(pricePerUnit * qty * 100) / 100

  return {
    pricePerUnit,
    totalPrice,
    sizeMultiplier,
    discountMultiplier: tier.multiplier,
    tierLabel: tier.label,
    turnaround: getTurnaround(qty),
  }
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}
