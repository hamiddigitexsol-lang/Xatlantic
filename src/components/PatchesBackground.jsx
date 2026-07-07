import shamrockSkull from '../assets/hero-patches/shamrock-skull.jpg'
import usaFlag from '../assets/hero-patches/usa-flag.jpg'
import newYork from '../assets/hero-patches/new-york.jpg'
import moneyRoll from '../assets/hero-patches/money-roll.jpg'
import badMoon from '../assets/hero-patches/bad-moon.jpg'
import compassNavy from '../assets/hero-patches/compass-navy.jpg'
import compassRed from '../assets/hero-patches/compass-red.jpg'
import wovenShield from '../assets/hero-patches/woven-shield.jpg'
import cowboy from '../assets/hero-patches/cowboy.jpg'

const photos = [
  shamrockSkull,
  moneyRoll,
  usaFlag,
  compassNavy,
  newYork,
  badMoon,
  compassRed,
  wovenShield,
  cowboy,
]

// Deterministic pseudo-random generator (mulberry32) so the "scattered flat
// lay" arrangement is stable across renders instead of reshuffling.
function seededRandom(seed) {
  let t = seed
  return () => {
    t += 0x6d2b79f5
    let r = Math.imul(t ^ (t >>> 15), 1 | t)
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

// Lay out patches on a loose grid with per-cell jitter, varied size and
// rotation, so it reads as a real photographed pile of patches rather than
// a mechanical repeating tile grid.
function buildLayout() {
  const rand = seededRandom(20260706)
  const cols = 12
  const rows = 8
  const cellW = 100 / cols
  const cellH = 100 / rows
  const cards = []
  let i = 0
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const jitterX = (rand() - 0.5) * cellW * 0.9
      const jitterY = (rand() - 0.5) * cellH * 0.9
      const centerX = col * cellW + cellW / 2 + jitterX
      const centerY = row * cellH + cellH / 2 + jitterY
      // Width and height are sized off their own axis's cell size (not a
      // single square size derived from width alone) so cards overlap
      // enough on BOTH axes no matter the section's aspect ratio. A square
      // card sized purely as a % of width left tall/narrow viewports (e.g.
      // mobile, where the section is much taller than it is wide) with
      // large vertical gaps between rows.
      const sizeW = cellW * (1.6 + rand() * 0.8) // ~1.6–2.4x cell width
      const sizeH = cellH * (1.6 + rand() * 0.8) // ~1.6–2.4x cell height
      const rotate = Math.round((rand() - 0.5) * 36) // -18..18deg
      cards.push({
        img: photos[i % photos.length],
        left: `${centerX}%`,
        top: `${centerY}%`,
        width: `${sizeW}%`,
        height: `${sizeH}%`,
        rotate,
        depth: rand(), // controls paint order only — see note below
      })
      i++
    }
  }
  // Sort by depth so overlap looks natural. No z-index is used anywhere —
  // relying on explicit integer z-index here previously leaked past this
  // component's local stacking and painted patches on top of the actual
  // hero content (headline/calculator). Plain DOM order is layering enough.
  return cards.sort((a, b) => a.depth - b.depth)
}

const cards = buildLayout()

// Full-bleed "flat lay" of real patch photos covering the entire hero — a
// dynamic gradient scrim (applied by the caller) sits on top so text stays
// readable while still showing depth/light across the pile.
export default function PatchesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {cards.map((c, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border-2 border-white/10 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.65)]"
          style={{
            left: c.left,
            top: c.top,
            width: c.width,
            height: c.height,
            transform: `translate(-50%, -50%) rotate(${c.rotate}deg)`,
          }}
        >
          <img src={c.img} alt="" className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  )
}
