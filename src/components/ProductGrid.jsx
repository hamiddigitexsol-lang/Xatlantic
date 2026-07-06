import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { allProducts } from '../data/products'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

// Monogram placeholder so cards look intentional without photography.
// Set a product's `image` field to a real photo path and it renders instead.
function ProductVisual({ product }) {
  if (product.image) {
    return (
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    )
  }
  return (
    <div className="relative grid h-full w-full place-items-center bg-gradient-to-br from-paper to-brand-soft">
      <div
        className="absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage: 'radial-gradient(#c9d6ea 1px, transparent 1.4px)',
          backgroundSize: '14px 14px',
        }}
        aria-hidden
      />
      <div className="grid h-20 w-20 place-items-center rounded-2xl border border-brand/20 bg-white shadow-card transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
        <span className="font-display text-3xl font-extrabold text-brand">
          {product.short.charAt(0)}
        </span>
      </div>
    </div>
  )
}

export default function ProductGrid() {
  return (
    <section id="products" className="bg-paper py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Custom Products"
          title="Decades of craft, woven into every stitch"
          subtitle="Every product is made to order with materials selected for durability and finish. Tap any card to explore details and pricing."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allProducts.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 0.06}>
              <Link
                to={`/products/${product.slug}`}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-white text-left shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-card-hover"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <ProductVisual product={product} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-navy-900 transition-colors group-hover:text-brand">
                      {product.name}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="mt-0.5 shrink-0 text-muted/50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                    />
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{product.description}</p>
                  <span className="mt-4 text-xs font-bold uppercase tracking-wider text-brand">
                    Explore &amp; price →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
