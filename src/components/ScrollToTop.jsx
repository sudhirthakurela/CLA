import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to the top of the page on every route change.
// The Contact page overrides this for the "Schedule a Tour" flow via its own useEffect.
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}
