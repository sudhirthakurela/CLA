import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Heart } from 'lucide-react'
import { centers } from '../data/centers'

export default function Footer({ onEnrollClick }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.svg"
                alt="Creative Learning Academy"
                className="h-10 w-auto"
                onError={(e) => (e.target.style.display = 'none')}
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Nurturing curious minds and joyful hearts across three Massachusetts communities.
              Quality child care and preschool for families who want the best start for their children.
            </p>
            <button
              onClick={onEnrollClick}
              className="bg-brand-coral text-white font-display font-700 text-sm px-6 py-2.5 rounded-full hover:bg-coral-600 transition-colors"
            >
              Enroll Today
            </button>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-800 text-base mb-5 text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/programs', label: 'Programs' },
                { to: '/centers', label: 'Our Centers' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/contact', label: 'Contact & Enroll' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-400 hover:text-brand-coral text-sm transition-colors font-body"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Centers */}
          <div>
            <h3 className="font-display font-800 text-base mb-5 text-white">Our Centers</h3>
            <ul className="space-y-4">
              {centers.map((center) => (
                <li key={center.id}>
                  <Link
                    to={`/centers/${center.slug}`}
                    className="group"
                  >
                    <p className="text-white font-display font-700 text-sm group-hover:text-brand-teal transition-colors">
                      {center.name}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5 flex items-center gap-1">
                      <MapPin size={11} />
                      {center.address}, {center.city}
                    </p>
                    <p className="text-gray-500 text-xs flex items-center gap-1 mt-0.5">
                      <Phone size={11} />
                      {center.phone}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-800 text-base mb-5 text-white">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone size={16} className="mt-0.5 text-brand-coral flex-shrink-0" />
                <div>
                  <p className="text-white font-display font-600 text-xs mb-1">Call or Text</p>
                  <a href={`tel:${centers[0].phone}`} className="hover:text-brand-coral transition-colors">
                    {centers[0].phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail size={16} className="mt-0.5 text-brand-teal flex-shrink-0" />
                <div>
                  <p className="text-white font-display font-600 text-xs mb-1">Email Us</p>
                  <a
                    href="mailto:info@creativelearningacademy.com"
                    className="hover:text-brand-teal transition-colors break-all"
                  >
                    info@creativelearningacademy.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <span className="mt-0.5 text-brand-yellow flex-shrink-0">🕐</span>
                <div>
                  <p className="text-white font-display font-600 text-xs mb-1">Hours</p>
                  <p>Mon – Fri: 7:00 AM – 6:00 PM</p>
                  <p>Saturday & Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-xs font-body">
          <p>
            © {currentYear} Creative Learning Academy, Inc. — All Rights Reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-brand-coral mx-1" fill="#FF6B47" /> for the families we serve
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
