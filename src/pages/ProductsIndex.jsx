import Seo from '../components/Seo'
import PageHero from '../components/ui/PageHero'
import ProductGrid from '../components/ProductGrid'
import CTABanner from '../components/CTABanner'

export default function ProductsIndex() {
  return (
    <>
      <Seo
        title="Custom Patches & Promotional Products — Full Catalog | X Atlantic Patches"
        description="Browse every custom product we make: embroidered, woven, PVC, chenille, leather & dye sublimation patches, plus enamel pins, challenge coins, keychains and more."
        path="/products"
      />
      <PageHero
        crumbs={[{ label: 'Products' }]}
        title="Custom Patches & Promotional Products"
        intro="Every product below is made to order with premium materials, a free digital proof, and low minimums. Pick a product to see details, FAQs, and live pricing."
      />
      <ProductGrid />
      <CTABanner />
    </>
  )
}
