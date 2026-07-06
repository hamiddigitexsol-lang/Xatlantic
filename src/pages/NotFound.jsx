import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | X Atlantic Patches" description="This page could not be found." path="/404" />
      <section className="flex min-h-[60vh] items-center bg-white">
        <div className="container-x py-20 text-center">
          <p className="font-display text-7xl font-extrabold text-brand">404</p>
          <h1 className="mt-4 text-3xl font-extrabold text-navy-900">This page came unstitched</h1>
          <p className="mx-auto mt-3 max-w-md text-muted">
            The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/" className="btn-accent">
              Back to Home
            </Link>
            <Link to="/products" className="btn-outline">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
