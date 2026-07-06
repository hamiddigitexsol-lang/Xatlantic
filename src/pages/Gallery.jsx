import { useState } from 'react'
import { motion } from 'framer-motion'
import { allProducts } from '../data/products'
import Seo from '../components/Seo'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import CTABanner from '../components/CTABanner'

// Placeholder gallery — each tile is generated art keyed to a product type.
// Replace `image: null` in products.js (or add a dedicated gallery data file
// with real photo paths) and the tiles will render photos instead.
const filters = ['All', 'Patches', 'Pins & Coins', 'Apparel']

const galleryItems = allProducts.map((p, i) => ({
  id: p.id,
  title: p.plural,
  image: p.image,
  group:
    ['lapel-pin', 'coin', 'keychain'].includes(p.id)
      ? 'Pins & Coins'
      : ['socks', 'beanies', 'scarves', 'shoe-charms'].includes(p.id)
        ? 'Apparel'
        : 'Patches',
  hue: (i * 37) % 360, // varied placeholder tint
}))

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const items = filter === 'All' ? galleryItems : galleryItems.filter((g) => g.group === filter)

  return (
    <>
      <Seo
        title="Custom Patch Gallery — Our Work | X Atlantic Patches"
        description="Browse examples of our custom embroidered, PVC, chenille, leather and woven patches, plus pins, coins and keychains. See the quality before you order."
        path="/gallery"
      />
      <PageHero
        crumbs={[{ label: 'Gallery' }]}
        title="A Look at Our Craft"
        intro="A cross-section of the patches, pins, and coins we produce every day — browse by category to find the style closest to your project."
      />

      <section className="bg-white py-12 sm:py-16">
        <div className="container-x">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2.5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  filter === f
                    ? 'bg-navy-900 text-white shadow-card'
                    : 'border border-line bg-white text-ink hover:border-brand hover:text-brand'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((item, i) => (
              <Reveal key={item.id} delay={(i % 4) * 0.05}>
                <motion.figure
                  layout
                  className="group overflow-hidden rounded-2xl border border-line shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="aspect-square w-full object-cover" />
                  ) : (
                    <div
                      className="relative grid aspect-square w-full place-items-center"
                      style={{
                        background: `linear-gradient(135deg, hsl(${item.hue} 45% 94%), hsl(${item.hue} 40% 86%))`,
                      }}
                    >
                      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white shadow-card transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <span className="font-display text-2xl font-extrabold" style={{ color: `hsl(${item.hue} 55% 42%)` }}>
                          {item.title.charAt(7) || item.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}
                  <figcaption className="bg-white px-4 py-3 text-sm font-semibold text-navy-900">
                    {item.title}
                  </figcaption>
                </motion.figure>
              </Reveal>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
