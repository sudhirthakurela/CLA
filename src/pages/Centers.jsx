import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, ArrowRight, Users } from 'lucide-react'
import { centers } from '../data/centers'

const gradients = [
  'from-coral-400 to-orange-400',
  'from-teal-400 to-cyan-400',
  'from-purple-400 to-violet-500',
]

const emojis = ['🏡', '🌟', '🎓']

export default function Centers({ onEnrollClick }) {
  return (
    <div className="pt-20">
      {/* ─── HERO ─── */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-purple-50 py-24 text-center relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4">
          <p className="text-brand-coral font-display font-700 text-sm uppercase tracking-widest mb-4">
            Locations
          </p>
          <h1 className="font-display font-900 text-5xl sm:text-6xl text-gray-900 mb-6">
            Our Three Centers
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            The same warm, high-quality experience you expect from CLA — now available in
            three convenient Massachusetts locations.
          </p>
        </div>
      </section>

      {/* ─── CENTERS LIST ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {centers.map((center, i) => (
            <div
              key={center.id}
              className={`grid lg:grid-cols-5 gap-8 items-stretch ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Color card */}
              <div
                className={`lg:col-span-2 rounded-4xl bg-gradient-to-br ${gradients[i]} p-10 flex flex-col items-center justify-center min-h-72 text-white`}
              >
                <span className="text-7xl mb-4">{emojis[i]}</span>
                <h2 className="font-display font-900 text-3xl text-center mb-2">{center.name}</h2>
                <p className="text-white/80 text-sm text-center">{center.tagline}</p>
                <div className="mt-6 bg-white/20 rounded-2xl px-4 py-2 text-sm font-display font-700">
                  Ages {center.ageRange}
                </div>
              </div>

              {/* Details */}
              <div className="lg:col-span-3 bg-gray-50 rounded-4xl p-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-900 text-2xl text-gray-900 mb-6">
                    {center.fullName}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3 bg-white rounded-2xl p-4">
                      <MapPin size={18} className="mt-0.5 text-brand-coral flex-shrink-0" />
                      <div>
                        <p className="text-xs font-display font-700 text-gray-400 uppercase mb-1">Address</p>
                        <p className="text-sm text-gray-700 font-display font-600">
                          {center.address}<br />
                          {center.city}, {center.state} {center.zip}
                        </p>
                        <a
                          href={center.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-brand-teal font-display font-700 mt-1 inline-block hover:underline"
                        >
                          Get Directions →
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white rounded-2xl p-4">
                      <Phone size={18} className="mt-0.5 text-brand-teal flex-shrink-0" />
                      <div>
                        <p className="text-xs font-display font-700 text-gray-400 uppercase mb-1">Contact</p>
                        <a
                          href={`tel:${center.phone}`}
                          className="text-sm text-gray-700 font-display font-600 hover:text-brand-teal transition-colors block"
                        >
                          {center.phone}
                        </a>
                        <a
                          href={`mailto:${center.email}`}
                          className="text-xs text-brand-coral font-display font-600 mt-1 block hover:underline break-all"
                        >
                          {center.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white rounded-2xl p-4">
                      <Clock size={18} className="mt-0.5 text-brand-yellow flex-shrink-0" />
                      <div>
                        <p className="text-xs font-display font-700 text-gray-400 uppercase mb-1">Hours</p>
                        <p className="text-sm text-gray-700 font-display font-600">
                          Mon – Fri: {center.hours.weekdays}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          Weekends: Closed
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white rounded-2xl p-4">
                      <Users size={18} className="mt-0.5 text-brand-purple flex-shrink-0" />
                      <div>
                        <p className="text-xs font-display font-700 text-gray-400 uppercase mb-1">Capacity</p>
                        <p className="text-sm text-gray-700 font-display font-600">
                          Up to {center.capacity} children
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          Low ratios guaranteed
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <p className="text-xs font-display font-700 text-gray-400 uppercase tracking-wider mb-3">
                      Center Highlights
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {center.highlights.map((h) => (
                        <span
                          key={h}
                          className="bg-white border border-gray-200 text-gray-600 text-xs font-display font-600 px-3 py-1.5 rounded-full"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Programs */}
                  <div>
                    <p className="text-xs font-display font-700 text-gray-400 uppercase tracking-wider mb-3">
                      Programs Offered
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {center.programs.map((p) => (
                        <span
                          key={p}
                          className="bg-orange-50 text-brand-coral text-xs font-display font-700 px-3 py-1.5 rounded-full capitalize"
                        >
                          {p.replace('-', ' ')}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  <Link
                    to={`/centers/${center.slug}`}
                    className="flex items-center gap-2 bg-gray-900 text-white font-display font-700 text-sm px-6 py-3 rounded-2xl hover:bg-gray-700 transition-colors"
                  >
                    Full Center Details <ArrowRight size={14} />
                  </Link>
                  <button
                    onClick={onEnrollClick}
                    className="border-2 border-brand-coral text-brand-coral font-display font-700 text-sm px-6 py-3 rounded-2xl hover:bg-brand-coral hover:text-white transition-all"
                  >
                    Enroll at this Center
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-900 text-3xl text-gray-900 text-center mb-10">
            Quick Comparison
          </h2>
          <div className="overflow-x-auto rounded-3xl shadow-soft">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 font-display font-700 text-gray-400 text-xs uppercase tracking-wider">
                    Feature
                  </th>
                  {centers.map((c, i) => (
                    <th key={c.id} className="px-6 py-4 font-display font-800 text-gray-900 text-center">
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'City', values: centers.map((c) => c.city) },
                  { label: 'Age Range', values: centers.map((c) => c.ageRange) },
                  { label: 'Capacity', values: centers.map((c) => `${c.capacity} children`) },
                  { label: 'Infant Program', values: centers.map((c) => c.programs.includes('infant') ? '✅' : '—') },
                  { label: 'Toddler Program', values: centers.map((c) => c.programs.includes('toddler') ? '✅' : '—') },
                  { label: 'Preschool', values: centers.map((c) => c.programs.includes('preschool') ? '✅' : '—') },
                  { label: 'Pre-K', values: centers.map((c) => c.programs.includes('pre-k') ? '✅' : '—') },
                  { label: 'Hours', values: centers.map((c) => c.hours.weekdays) },
                ].map((row, ri) => (
                  <tr key={row.label} className={ri % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-display font-700 text-gray-600">{row.label}</td>
                    {row.values.map((v, ci) => (
                      <td key={ci} className="px-6 py-4 text-center text-gray-700">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
