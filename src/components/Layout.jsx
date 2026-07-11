import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import QuotePopup from './QuotePopup'

// Wraps every route with the header/footer and restores scroll on navigation.
export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // allow the new page to paint before jumping to an in-page anchor
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <QuotePopup />
    </div>
  )
}
