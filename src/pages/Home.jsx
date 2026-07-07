import Seo from '../components/Seo'
import Hero from '../components/Hero'
import LogoMarquee from '../components/LogoMarquee'
import TrustBar from '../components/TrustBar'
import ProductGrid from '../components/ProductGrid'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import CTABanner from '../components/CTABanner'

export default function Home() {
  return (
    <>
      <Seo
        title="Custom Patches — Embroidered, PVC, Leather & More | Xatlantic Patches"
        description="Design custom patches online: embroidered, woven, PVC, chenille, leather & dye sublimation. Instant pricing, low minimums, free proof, fast turnaround. Start your quote."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Xatlantic Patches',
          url: 'https://www.xatlanticpatches.com',
          description:
            'Custom patches and promotional products manufacturer — embroidered, woven, PVC, chenille, leather, and dye sublimation patches plus pins, coins, and keychains.',
        }}
      />
      <Hero />
      <LogoMarquee />
      <TrustBar />
      <ProductGrid />
      <Process />
      <Testimonials limit={4} />
      <CTABanner />
    </>
  )
}
