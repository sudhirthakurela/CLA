import { useParams, Link, Navigate } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ArrowRight, Users, ExternalLink } from 'lucide-react'
import { getCenterBySlug } from '../data/centers'
import { programs } from '../data/programs'

const gradients = {
  'arlington-main':  'from-coral-400 to-orange-400',
  'arlington-north': 'from-teal-400 to-cyan-400',
  'harvard':         'from-purple-400 to-violet-500',
}

const emojis = {
  'arlington-main':  '🏡',
  'arlington-north': '🌟',
  'harvard':         '🎓',
}

export default function CenterDetail({ onEnrollClick }) {
  const { slug } = useParams()
  const center = getCenterBySlug(slug)

  if (!center) return <Navigate to="/centers" replace />

  const centerPrograms = programs.filter((p) => center.programs.includes(p.id))
  const gradient = gradients[slug] || 'from-gray-400 to-gray-500'
  const emoji = emojis[slug] || '🏫'

  return (
    <div className="pt-20">
      {/* ─── HERO ─── */}
      <section className={`bg-gradient-to-br ${gradient} py-24 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-6">
            <Link to="/centers" className="hover:text-white transition-colors">
              Centers
            </Link>
            <span>/</span>
            <span className="text-white">{center.name}</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-8xl mb-6 block">{emoji}</span>
              <h1 className="font-display font-900 text-5xl sm:text-6xl text-white mb-4">
                {center.name}
              </h1>
              <p className="text-white/80 text-xl mb-6">{center.tagline}</p>
              <div className="flex flex-wrap gap-3">
                {center.programs.map((p) => (
                  <span
                    key={p}
                    className="bg-white/20 text-white font-display font-700 text-sm px-4 py-1.5 rounded-full capitalize"
                  >
                    {p.replace('-', ' ')}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-4xl p-8 text-white">
              <h3 className="font-display font-800 text-lg mb-5">Center Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0 opacity-80" />
                  <div>
                    <p className="font-display font-700 text-sm">{center.address}</p>
                    <p className="text-white/70 text-sm">{center.city}, {center.state} {center.zip}</p>
                    <a
                      href={center.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/60 hover:text-white transition-colors flex items-center gap-1 mt-1"
                    >
                      <ExternalLink size={12} /> Get Directions
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="flex-shrink-0 opacity-80" />
                  <a href={`tel:${center.phone}`} className="text-sm hover:text-white/80 transition-colors">
                    {center.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="flex-shrink-0 opacity-80" />
                  <a href={`mailto:${center.email}`} className="text-sm hover:text-white/80 transition-colors break-all">
                    {center.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="mt-0.5 flex-shrink-0 opacity-80" />
                  <div>
                    <p className="text-sm">Mon – Fri: {center.hours.weekdays}</p>
                    <p className="text-sm text-white/60">Weekends: Closed</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Users size={18} className="flex-shrink-0 opacity-80" />
                  <p className="text-sm">Up to {center.capacity} children · Ages {center.ageRange}</p>
                </li>
              </ul>
              <button
                onClick={onEnrollClick}
                className="w-full mt-6 bg-white text-gray-900 font-display font-800 py-3.5 rounded-2xl hover:bg-gray-50 transition-colors"
              >
                Enroll at {center.name}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HIGHLIGHTS ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-900 text-3xl text-gray-900 mb-8">
            What Makes {center.name} Special
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {center.highlights.map((h, i) => {
              const colors = ['#FF6B47', '#2EC4B6', '#9B5DE5', '#FFCB47']
              const bgs = ['#FFF4F1', '#EDFAFA', '#F5F0FF', '#FFFBEE']
              return (
                <div
                  key={h}
                  className="rounded-3xl p-6"
                  style={{ backgroundColor: bgs[i % bgs.length] }}
                >
                  <div
                    className="w-8 h-8 rounded-full mb-3"
                    style={{ backgroundColor: colors[i % colors.length] }}
                  />
                  <p
                    className="font-display font-700 text-sm"
                    style={{ color: colors[i % colors.length] }}
                  >
                    {h}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── PROGRAMS ─── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-900 text-3xl text-gray-900 mb-8">
            Programs at {center.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {centerPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-4xl p-8 shadow-soft hover:shadow-card transition-all"
                style={{ borderTop: `4px solid ${program.color}` }}
              >
                <span className="text-4xl mb-4 block">{program.icon}</span>
                <h3
                  className="font-display font-800 text-xl mb-1"
                  style={{ color: program.color }}
                >
                  {program.name}
                </h3>
                <p className="text-gray-500 text-sm font-display font-600 mb-3">
                  {program.ageRange}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                <ul className="space-y-1.5">
                  {program.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: program.color }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-brand-coral font-display font-700 hover:gap-3 transition-all"
            >
              View Full Program Details <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STAFF ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-900 text-3xl text-gray-900 mb-8">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {center.staff.map((person, i) => {
              const colors = ['#FF6B47', '#2EC4B6', '#9B5DE5']
              return (
                <div key={person.name} className="bg-gray-50 rounded-4xl p-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-display font-900 text-white mb-4"
                    style={{ backgroundColor: colors[i % colors.length] }}
                  >
                    {person.name[0]}
                  </div>
                  <h3 className="font-display font-900 text-xl text-gray-900">{person.name}</h3>
                  <p
                    className="font-display font-700 text-sm mb-3"
                    style={{ color: colors[i % colors.length] }}
                  >
                    {person.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{person.bio}</p>
                  <div className="space-y-1.5">
                    {person.credentials.map((cred) => (
                      <div key={cred} className="flex items-center gap-2 text-xs text-gray-500">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: colors[i % colors.length] }}
                        />
                        {cred}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
            {/* "All teachers are EEC certified" card */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-4xl p-8 border-2 border-dashed border-orange-200 flex flex-col justify-center items-center text-center">
              <span className="text-4xl mb-3">👩‍🏫</span>
              <h3 className="font-display font-800 text-lg text-gray-900 mb-2">All Our Teachers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every teacher at CLA is EEC certified and undergoes regular professional development
                to stay current with the best practices in early childhood education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ENROLL CTA ─── */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="font-display font-900 text-4xl text-white mb-4">
            Ready to Join the {center.name} Family?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Spots fill quickly. Get in touch today and we'll walk you through everything.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onEnrollClick}
              className="bg-brand-coral text-white font-display font-800 px-10 py-4 rounded-2xl hover:bg-coral-600 transition-all hover:-translate-y-1 flex items-center gap-2"
            >
              Enroll Now <ArrowRight size={18} />
            </button>
            <a
              href={`tel:${center.phone}`}
              className="border-2 border-gray-600 text-gray-300 font-display font-700 px-10 py-4 rounded-2xl hover:border-brand-teal hover:text-brand-teal transition-all"
            >
              Call {center.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
