import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import EnrollModal from './components/EnrollModal'

import Home from './pages/Home'
import About from './pages/About'
import Centers from './pages/Centers'
import CenterDetail from './pages/CenterDetail'
import Programs from './pages/Programs'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

// Simple 404 page
function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <span className="text-8xl">🙈</span>
        <h1 className="font-display font-900 text-5xl text-gray-900 mt-6 mb-4">Page Not Found</h1>
        <p className="text-gray-500 text-lg mb-8">Looks like this page went on a field trip.</p>
        <a
          href="/"
          className="bg-brand-coral text-white font-display font-800 px-8 py-3.5 rounded-2xl hover:bg-coral-600 transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}

// Placeholder pages for Privacy / Terms
function SimplePage({ title }) {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="font-display font-900 text-4xl text-gray-900 mb-6">{title}</h1>
        <p className="text-gray-500">
          This page is a placeholder. Please update it with your actual {title.toLowerCase()}.
        </p>
      </div>
    </div>
  )
}

export default function App() {
  const [enrollOpen, setEnrollOpen] = useState(false)
  const { pathname } = useLocation()

  // Scroll to top on route change
  const scrollToTop = () => window.scrollTo(0, 0)

  const enrollProps = { onEnrollClick: () => setEnrollOpen(true) }

  return (
    <>
      <Navbar onEnrollClick={() => setEnrollOpen(true)} />

      <main>
        <Routes>
          <Route path="/"                   element={<Home     {...enrollProps} />} />
          <Route path="/about"              element={<About    {...enrollProps} />} />
          <Route path="/centers"            element={<Centers  {...enrollProps} />} />
          <Route path="/centers/:slug"      element={<CenterDetail {...enrollProps} />} />
          <Route path="/programs"           element={<Programs {...enrollProps} />} />
          <Route path="/gallery"            element={<Gallery  {...enrollProps} />} />
          <Route path="/contact"            element={<Contact />} />
          <Route path="/privacy"            element={<SimplePage title="Privacy Policy" />} />
          <Route path="/terms"              element={<SimplePage title="Terms of Service" />} />
          <Route path="*"                   element={<NotFound />} />
        </Routes>
      </main>

      <Footer onEnrollClick={() => setEnrollOpen(true)} />

      <EnrollModal isOpen={enrollOpen} onClose={() => setEnrollOpen(false)} />
    </>
  )
}
