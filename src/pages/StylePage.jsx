import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { styleBySlug, styles } from '../data/styles'
import { allProducts } from '../data/products'
import Seo from '../components/Seo'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import QuoteForm from '../components/QuoteForm'
import CTABanner from '../components/CTABanner'

// One template renders every /patches/<slug> style page from styles.js data.
export default function StylePage() {
  const { slug } = useParams()
  const style = styleBySlug(slug)

  if (!style) return <Navigate to="/patches" replace />

  const recommended = style.recommended
    .map((id) => allProducts.find((p) => p.id === id))
    .filter(Boolean)
  const related = styles.filter((s) => s.slug !== style.slug).slice(0, 6)

  return (
    <>
      <Seo
        title={style.seoTitle}
        description={style.metaDesc}
        path={`/patches/${style.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: style.h1,
          provider: { '@type': 'Organization', name: 'Xatlantic Patches' },
          description: style.metaDesc,
        }}
      />

      <PageHero
        crumbs={[{ label: 'Patch Styles', to: '/patches' }, { label: style.name }]}
        title={style.h1}
        intro={style.intro}
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <div>
              <h2 className="text-2xl font-extrabold text-navy-900">What we make for you</h2>
              <ul className="mt-6 space-y-4">
                {style.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand" />
                    <span className="text-[0.95rem] leading-relaxed text-ink">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <h3 className="text-xl font-extrabold text-navy-900">Recommended products</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {recommended.map((p) => (
                    <Link
                      key={p.id}
                      to={`/products/${p.slug}`}
                      className="group rounded-2xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card"
                    >
                      <h4 className="font-bold text-navy-900 transition-colors group-hover:text-brand">
                        {p.plural}
                      </h4>
                      <p className="mt-1 line-clamp-2 text-sm text-muted">{p.description}</p>
                      <span className="mt-2.5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand">
                        See pricing <ArrowRight size={13} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-24">
              <h3 className="mb-4 text-xl font-extrabold text-navy-900">
                Get a free {style.name.toLowerCase()} quote
              </h3>
              <QuoteForm defaultProduct={recommended[0]?.name ?? ''} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cross-links to sibling style pages */}
      <section className="border-t border-line bg-paper py-12">
        <div className="container-x">
          <h2 className="text-xl font-extrabold text-navy-900">More patch styles</h2>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {related.map((s) => (
              <Link
                key={s.slug}
                to={`/patches/${s.slug}`}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
