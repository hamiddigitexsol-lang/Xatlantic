import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProductsIndex from './pages/ProductsIndex'
import ProductPage from './pages/ProductPage'
import StylesIndex from './pages/StylesIndex'
import StylePage from './pages/StylePage'
import Pricing from './pages/Pricing'
import Gallery from './pages/Gallery'
import About from './pages/About'
import TestimonialsPage from './pages/TestimonialsPage'
import FaqsPage from './pages/FaqsPage'
import HowToOrder from './pages/HowToOrder'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Multi-page site map. Product and style pages are data-driven templates —
// add an entry to src/data/products.js or src/data/styles.js and the page,
// nav links, and sitemap references pick it up automatically.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsIndex />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/patches" element={<StylesIndex />} />
          <Route path="/patches/:slug" element={<StylePage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/testimonials" element={<TestimonialsPage />} />
          <Route path="/about/faqs" element={<FaqsPage />} />
          <Route path="/about/how-to-order" element={<HowToOrder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
