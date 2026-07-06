import Seo from '../components/Seo'
import PageHero from '../components/ui/PageHero'
import Testimonials from '../components/Testimonials'
import CTABanner from '../components/CTABanner'

export default function TestimonialsPage() {
  return (
    <>
      <Seo
        title="Customer Testimonials & Reviews | X Atlantic Patches"
        description="Read what brands, teams and first responders say about our custom patches, pins and coins — quality, service and turnaround reviewed by real customers."
        path="/about/testimonials"
      />
      <PageHero
        crumbs={[{ label: 'About', to: '/about' }, { label: 'Testimonials' }]}
        title="What Our Customers Say"
        intro="From first responders to varsity teams to corporate brands — here's what customers say after their patches, pins, and coins arrive."
      />
      <Testimonials />
      <CTABanner />
    </>
  )
}
