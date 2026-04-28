import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, MapPin } from 'lucide-react'
import { centers } from '../data/centers'

export default function Navbar({ onEnrollClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [centersOpen, setCentersOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false)
    setCentersOpen(false)
  }, [location])

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/programs', label: 'Programs' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-card' : 'shadow-soft'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.svg"
              alt="Creative Learning Academy"
              className="h-12 w-auto"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
            <span className="font-display font-900 text-lg leading-tight hidden sm:block">
              <span className="text-brand-coral">Creative Learning</span>
              <br />
              <span className="text-brand-teal">Academy</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full font-display font-600 text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-orange-50 text-brand-coral'
                      : 'text-gray-600 hover:text-brand-coral hover:bg-orange-50'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Centers dropdown */}
            <div className="relative">
              <button
                onClick={() => setCentersOpen(!centersOpen)}
                className="flex items-center gap-1 px-4 py-2 rounded-full font-display font-600 text-sm text-gray-600 hover:text-brand-teal hover:bg-teal-50 transition-all duration-200"
              >
                Our Centers
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${centersOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {centersOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-pop border border-gray-100 overflow-hidden">
                  <div className="p-2">
                    <Link
                      to="/centers"
                      className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-display font-700 text-brand-coral hover:bg-orange-50 transition-colors"
                    >
                      View All Centers →
                    </Link>
                    <div className="border-t border-gray-100 my-1" />
                    {centers.map((center) => (
                      <Link
                        key={center.id}
                        to={`/centers/${center.slug}`}
                        className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <MapPin size={16} className="mt-0.5 text-brand-teal flex-shrink-0" />
                        <div>
                          <div className="font-display font-700 text-gray-800 text-sm group-hover:text-brand-teal transition-colors">
                            {center.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {center.city}, {center.state}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onEnrollClick}
              className="hidden sm:flex items-center gap-2 bg-brand-coral text-white font-display font-700 text-sm px-5 py-2.5 rounded-full hover:bg-coral-600 transition-all duration-200 shadow-soft hover:shadow-card hover:-translate-y-0.5"
            >
              Enroll Now
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl font-display font-600 text-sm transition-colors ${
                    isActive
                      ? 'bg-orange-50 text-brand-coral'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            <div className="px-4 pt-1">
              <p className="text-xs font-display font-700 text-gray-400 uppercase tracking-wider mb-2">
                Our Centers
              </p>
              <Link
                to="/centers"
                className="block py-2 text-sm font-display font-600 text-brand-coral"
              >
                View All Centers →
              </Link>
              {centers.map((center) => (
                <Link
                  key={center.id}
                  to={`/centers/${center.slug}`}
                  className="flex items-center gap-2 py-2 text-sm text-gray-700 hover:text-brand-teal transition-colors"
                >
                  <MapPin size={14} className="text-brand-teal" />
                  {center.name} — {center.city}
                </Link>
              ))}
            </div>

            <div className="px-4 pt-3">
              <button
                onClick={onEnrollClick}
                className="w-full bg-brand-coral text-white font-display font-700 text-sm py-3 rounded-2xl hover:bg-coral-600 transition-colors"
              >
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Close dropdown when clicking outside */}
      {centersOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setCentersOpen(false)} />
      )}
    </header>
  )
}
