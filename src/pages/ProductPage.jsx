import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, BadgeCheck, CheckCircle2 } from 'lucide-react'
import { productBySlug, allProducts, calculatorProducts } from '../data/products'
import Seo, { SITE_URL } from '../components/Seo'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import Calculator from '../components/Calculator'
import QuoteForm from '../components/QuoteForm'
import CTABanner from '../components/CTABanner'

// One template renders every /products/<slug> page from products.js data.
export default function ProductPage() {
  const { slug } = useParams()
  const product = productBySlug(slug)

  if (!product) return <Navigate to="/products" replace />

  const hasCalculator = calculatorProducts.some((p) => p.id === product.id)
  const related = allProducts.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <>
      <Seo
        title={product.seoTitle}
        description={product.metaDesc}
        path={`/products/${product.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.plural,
          description: product.metaDesc,
          image: product.image ? `${SITE_URL}${product.image}` : undefined,
          brand: { '@type': 'Brand', name: 'Xatlantic Patches' },
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'USD',
            lowPrice: product.basePrice.toFixed(2),
            offerCount: '4',
          },
        }}
      />

      <PageHero
        crumbs={[{ label: 'Products', to: '/products' }, { label: product.plural }]}
        title={product.plural}
        intro={product.intro}
      />

      {/* Details + pricing tool side by side */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <div>
              <h2 className="text-2xl font-extrabold text-navy-900">
                Why choose {product.name.toLowerCase()}s?
              </h2>
              <ul className="mt-6 space-y-4">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand" />
                    <span className="text-[0.95rem] leading-relaxed text-ink">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-line bg-paper p-6">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
                  <BadgeCheck size={16} /> Perfect for
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink">{product.useCases}</p>
              </div>

              {/* Per-product FAQs (also useful long-tail SEO content) */}
              <div className="mt-10">
                <h3 className="text-xl font-extrabold text-navy-900">Common questions</h3>
                <div className="mt-4 space-y-4">
                  {product.faqs.map((f) => (
                    <div key={f.q} className="rounded-xl border border-line p-5">
                      <p className="font-bold text-navy-900">{f.q}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {hasCalculator ? (
              <div className="lg:sticky lg:top-24">
                <Calculator selectedProductId={product.id} />
              </div>
            ) : (
              <div className="lg:sticky lg:top-24">
                <div className="mb-4 rounded-xl border border-brand/20 bg-brand-soft p-4 text-sm text-brand-dark">
                  {product.name} orders are quoted per design — send your artwork and we’ll price it
                  within one business day.
                </div>
                <QuoteForm defaultProduct={product.name} />
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* Related products — internal linking for SEO */}
      <section className="border-t border-line bg-paper py-14">
        <div className="container-x">
          <h2 className="text-2xl font-extrabold text-navy-900">Explore more products</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.slug}`}
                className="group rounded-2xl border border-line bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card-hover"
              >
                <h3 className="font-bold text-navy-900 transition-colors group-hover:text-brand">{p.plural}</h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-muted">{p.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand">
                  View <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
