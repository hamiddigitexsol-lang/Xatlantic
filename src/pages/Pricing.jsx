import { Link } from 'react-router-dom'
import { Info } from 'lucide-react'
import { calculatorProducts } from '../data/products'
import { quantityTiers, backings, formatCurrency } from '../data/pricing'
import Seo from '../components/Seo'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import Calculator from '../components/Calculator'
import CTABanner from '../components/CTABanner'

export default function Pricing() {
  return (
    <>
      <Seo
        title="Custom Patch Pricing — Instant Online Calculator | Xatlantic Patches"
        description="See exact custom patch pricing instantly. Prices based on size, quantity and backing with volume discounts up to 45%. No sign-up, no waiting — calculate now."
        path="/pricing"
      />

      <PageHero
        crumbs={[{ label: 'Pricing' }]}
        title="Transparent Custom Patch Pricing"
        intro="No mystery quotes. Pricing is based on four things — product type, size, backing, and quantity — and our calculator shows you the exact number instantly."
      />

      {/* Calculator, centered */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <Calculator />
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h2 className="text-2xl font-extrabold text-navy-900">How pricing works</h2>
              <p className="mt-3 leading-relaxed text-muted">
                Smaller patches with standard backings cost the least; larger sizes and premium
                backings add a little. The biggest lever is quantity — per-unit pricing drops
                steeply as your run grows.
              </p>

              {/* Volume tiers */}
              <div className="mt-7 overflow-hidden rounded-2xl border border-line">
                <table className="w-full text-left text-sm">
                  <thead className="bg-navy-900 text-white">
                    <tr>
                      <th className="px-5 py-3.5 font-semibold">Quantity</th>
                      <th className="px-5 py-3.5 font-semibold">Volume discount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line bg-white">
                    {[...quantityTiers].reverse().map((t) => (
                      <tr key={t.label}>
                        <td className="px-5 py-3.5 font-semibold text-navy-900">{t.label}</td>
                        <td className="px-5 py-3.5 text-ink">
                          {t.multiplier === 1 ? (
                            'Standard rate'
                          ) : (
                            <span className="font-semibold text-brand">
                              Save {Math.round((1 - t.multiplier) * 100)}%
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Backing pricing */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-line">
                <table className="w-full text-left text-sm">
                  <thead className="bg-navy-900 text-white">
                    <tr>
                      <th className="px-5 py-3.5 font-semibold">Backing</th>
                      <th className="px-5 py-3.5 font-semibold">Per-piece cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line bg-white">
                    {backings.map((b) => (
                      <tr key={b.id}>
                        <td className="px-5 py-3.5 font-semibold text-navy-900">{b.label}</td>
                        <td className="px-5 py-3.5 text-ink">
                          {b.modifier === 0 ? 'Included' : `+${formatCurrency(b.modifier)}`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-muted">
                <Info size={15} className="mt-0.5 shrink-0 text-brand" />
                Calculator prices are estimates confirmed with your free digital proof and include
                shipping. Metflex, socks, beanies, scarves and shoe charms are quoted per design —{' '}
                <Link to="/contact" className="font-semibold text-brand hover:underline">
                  request a quote
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Base rates per product */}
      <section className="border-t border-line bg-paper py-14">
        <div className="container-x">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-navy-900">Starting rates by product</h2>
            <p className="mt-2 text-muted">
              Base per-unit rates at the 3&quot; × 3&quot; benchmark size, before volume discounts.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {calculatorProducts.map((p, i) => (
              <Reveal key={p.id} delay={(i % 5) * 0.05}>
                <Link
                  to={`/products/${p.slug}`}
                  className="group block rounded-2xl border border-line bg-white p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card-hover"
                >
                  <p className="text-sm font-bold text-navy-900 transition-colors group-hover:text-brand">
                    {p.short}
                  </p>
                  <p className="mt-1.5 text-xl font-extrabold text-brand">
                    {formatCurrency(p.basePrice)}
                    <span className="text-xs font-medium text-muted">/ea</span>
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
