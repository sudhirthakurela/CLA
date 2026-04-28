import { Link } from 'react-router-dom'
import { MapPin, Star, Shield, Heart, Award, ArrowRight, Play } from 'lucide-react'
import { centers } from '../data/centers'
import { programs } from '../data/programs'

const testimonials = [
  {
    quote:
      "My daughter lights up every morning when we pull into the parking lot. The teachers genuinely know and love every child here.",
    author: 'Sarah M.',
    location: 'Arlington Main',
    stars: 5,
  },
  {
    quote:
      "The yoga and arts programs are incredible. My son is calmer, more creative, and so much more confident since starting here.",
    author: 'James T.',
    location: 'Arlington North',
    stars: 5,
  },
  {
    quote:
      "We were nervous about transitioning from a nanny. The staff made our family feel at home immediately. Worth every penny.",
    author: 'Priya K.',
    location: 'Harvard Center',
    stars: 5,
  },
]

const whyUs = [
  {
    icon: '🎓',
    title: 'EEC Certified Educators',
    description:
      'Every teacher is Massachusetts EEC certified and undergoes continuous professional development.',
    color: '#FF6B47',
    bg: '#FFF4F1',
  },
  {
    icon: '🧡',
    title: 'Low Child-to-Teacher Ratios',
    description:
      'We maintain ratios well below state requirements so every child receives individualized attention.',
    color: '#FFCB47',
    bg: '#FFFBEE',
  },
  {
    icon: '🌍',
    title: 'Bilingual Programs',
    description:
      'Spanish and Mandarin immersion activities are woven into daily routines across all age groups.',
    color: '#2EC4B6',
    bg: '#EDFAFA',
  },
  {
    icon: '🔒',
    title: 'Safe & Secure Facilities',
    description:
      'Keypad-secured entrances, background-checked staff, and daily health screenings for every child.',
    color: '#9B5DE5',
    bg: '#F5F0FF',
  },
  {
    icon: '🎨',
    title: 'Creative Curriculum',
    description:
      'Research-backed Creative Curriculum framework with yoga, arts, dance, and music enrichment.',
    color: '#FF8FAB',
    bg: '#FFF0F4',
  },
  {
    icon: '💰',
    title: 'Affordable Quality',
    description:
      'We believe every child deserves excellent care. We work with families on subsidies and payment plans.',
    color: '#06D6A0',
    bg: '#EDFFF8',
  },
]

export default function Home({ onEnrollClick }) {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-teal-50 pt-20">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-brand-yellow/10 rounded-full blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-orange-100 rounded-full px-4 py-2 mb-6 shadow-soft">
                <span className="text-lg">⭐</span>
                <span className="text-sm font-display font-700 text-brand-coral">
                  3 Centers · Arlington & Harvard
                </span>
              </div>

              <h1 className="font-display font-900 text-5xl sm:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6">
                Where
                <span className="text-brand-coral"> Little</span>
                <br />
                <span className="text-brand-teal">Minds</span>
                <span className="text-gray-900"> Bloom</span>
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                Award-winning child care and preschool for children 6 weeks – 7 years. Three
                nurturing centers where creativity, curiosity, and confidence grow every day.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={onEnrollClick}
                  className="bg-brand-coral text-white font-display font-800 text-base px-8 py-4 rounded-2xl hover:bg-coral-600 transition-all duration-200 shadow-card hover:shadow-pop hover:-translate-y-1 flex items-center gap-2"
                >
                  Enroll Now
                  <ArrowRight size={18} />
                </button>
                <Link
                  to="/centers"
                  className="border-2 border-gray-200 text-gray-700 font-display font-700 text-base px-8 py-4 rounded-2xl hover:border-brand-teal hover:text-brand-teal transition-all duration-200 flex items-center gap-2"
                >
                  <MapPin size={18} />
                  Find a Center
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 mt-10">
                <div className="flex items-center gap-2 text-sm text-gray-500 font-display font-600">
                  <Shield size={16} className="text-brand-teal" />
                  EEC Licensed
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-display font-600">
                  <Award size={16} className="text-brand-coral" />
                  NAEYC Aligned
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-display font-600">
                  <Heart size={16} className="text-brand-pink" fill="#FF8FAB" />
                  Family Owned
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-display font-600">
                  <Star size={16} className="text-sunshine-400" fill="#fbbf24" />
                  10+ Years Serving Families
                </div>
              </div>
            </div>

            {/* Hero visual — colorful cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { emoji: '🎨', label: 'Arts & Crafts', color: '#FF6B47', bg: '#FFF4F1' },
                { emoji: '🧘', label: 'Yoga & Mindfulness', color: '#9B5DE5', bg: '#F5F0FF' },
                { emoji: '🌍', label: 'Language Immersion', color: '#2EC4B6', bg: '#EDFAFA' },
                { emoji: '🔬', label: 'STEM Explorers', color: '#FFCB47', bg: '#FFFBEE' },
                { emoji: '💃', label: 'Dance & Movement', color: '#FF8FAB', bg: '#FFF0F4' },
                { emoji: '🎵', label: 'Music & Rhythm', color: '#06D6A0', bg: '#EDFFF8' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl p-6 flex flex-col items-center justify-center gap-3 shadow-soft hover:shadow-card transition-all hover:-translate-y-1 cursor-default"
                  style={{ backgroundColor: item.bg }}
                >
                  <span className="text-4xl">{item.emoji}</span>
                  <span
                    className="font-display font-700 text-sm text-center"
                    style={{ color: item.color }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CENTERS STRIP ─── */}
      <section className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <span className="text-gray-400 font-display font-700 text-sm uppercase tracking-widest">
              Our Centers:
            </span>
            {centers.map((center, i) => (
              <Link
                key={center.id}
                to={`/centers/${center.slug}`}
                className="flex items-center gap-2 text-white hover:text-brand-coral transition-colors group"
              >
                <MapPin size={16} className="text-brand-teal group-hover:text-brand-coral transition-colors" />
                <span className="font-display font-700 text-sm">
                  {center.name}
                </span>
                <span className="text-gray-500 text-xs hidden md:block">
                  {center.city}, {center.state}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROGRAMS ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-coral font-display font-700 text-sm uppercase tracking-widest mb-3">
              What We Offer
            </p>
            <h2 className="font-display font-900 text-4xl sm:text-5xl text-gray-900 mb-4">
              Programs for Every Stage
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From your newest addition to kindergarten-ready explorers — we grow with your family.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <Link
                key={program.id}
                to="/programs"
                className="group rounded-4xl p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                style={{ backgroundColor: program.colorLight }}
              >
                <span className="text-5xl mb-4 block">{program.icon}</span>
                <h3
                  className="font-display font-800 text-xl mb-1"
                  style={{ color: program.color }}
                >
                  {program.name}
                </h3>
                <p className="text-gray-500 text-sm font-display font-600 mb-3">
                  {program.ageRange}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {program.description}
                </p>
                <div
                  className="mt-4 text-sm font-display font-700 flex items-center gap-1 group-hover:gap-2 transition-all"
                  style={{ color: program.color }}
                >
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-teal font-display font-700 text-sm uppercase tracking-widest mb-3">
              The CLA Difference
            </p>
            <h2 className="font-display font-900 text-4xl sm:text-5xl text-gray-900 mb-4">
              Why Families Choose Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-4xl p-8 shadow-soft hover:shadow-card transition-all hover:-translate-y-1"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ backgroundColor: item.bg }}
                >
                  {item.icon}
                </div>
                <h3 className="font-display font-800 text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CENTERS PREVIEW ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-coral font-display font-700 text-sm uppercase tracking-widest mb-3">
              Find Your Center
            </p>
            <h2 className="font-display font-900 text-4xl sm:text-5xl text-gray-900 mb-4">
              Three Locations, One Family
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Each center carries the same CLA warmth and quality — find the one closest to you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {centers.map((center, i) => {
              const gradients = [
                'from-coral-400 to-orange-400',
                'from-teal-400 to-cyan-400',
                'from-purple-400 to-violet-500',
              ]
              const emojis = ['🏡', '🌟', '🎓']
              return (
                <div
                  key={center.id}
                  className="rounded-4xl overflow-hidden shadow-soft hover:shadow-pop transition-all hover:-translate-y-2 group"
                >
                  <div
                    className={`bg-gradient-to-br ${gradients[i]} p-10 flex flex-col items-center justify-center min-h-48`}
                  >
                    <span className="text-6xl mb-3">{emojis[i]}</span>
                    <h3 className="font-display font-900 text-2xl text-white text-center">
                      {center.name}
                    </h3>
                    <p className="text-white/80 text-sm mt-1">{center.tagline}</p>
                  </div>
                  <div className="bg-white p-6">
                    <div className="flex items-start gap-2 text-sm text-gray-600 mb-2">
                      <MapPin size={16} className="mt-0.5 flex-shrink-0 text-brand-coral" />
                      {center.address}, {center.city}, {center.state} {center.zip}
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                      <span className="font-display font-700 text-gray-700">Ages: </span>
                      {center.ageRange}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {center.programs.map((p) => (
                        <span
                          key={p}
                          className="bg-gray-100 text-gray-600 text-xs font-display font-700 px-3 py-1 rounded-full capitalize"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/centers/${center.slug}`}
                      className="flex items-center gap-1 text-brand-coral font-display font-700 text-sm hover:gap-2 transition-all"
                    >
                      Explore this center <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/centers"
              className="border-2 border-gray-200 text-gray-700 font-display font-700 px-8 py-3.5 rounded-2xl hover:border-brand-teal hover:text-brand-teal transition-all inline-flex items-center gap-2"
            >
              View All Centers <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-purple font-display font-700 text-sm uppercase tracking-widest mb-3">
              From Our Families
            </p>
            <h2 className="font-display font-900 text-4xl sm:text-5xl text-gray-900 mb-4">
              What Parents Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-4xl p-8 shadow-soft">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={16} className="text-sunshine-400" fill="#fbbf24" />
                  ))}
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-coral to-brand-yellow flex items-center justify-center text-white font-display font-800 text-sm">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="font-display font-700 text-sm text-gray-900">{t.author}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-24 bg-brand-coral overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-10 text-8xl">🌟</div>
          <div className="absolute bottom-5 right-10 text-8xl">🎨</div>
          <div className="absolute top-10 right-1/3 text-6xl">🧩</div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="font-display font-900 text-4xl sm:text-5xl text-white mb-4">
            Ready to Find Your Child's Second Home?
          </h2>
          <p className="text-orange-100 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a tour of any of our three centers and see for yourself why hundreds of
            Arlington and Cambridge families trust Creative Learning Academy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onEnrollClick}
              className="bg-white text-brand-coral font-display font-800 text-base px-10 py-4 rounded-2xl hover:bg-orange-50 transition-all shadow-pop hover:-translate-y-1 flex items-center gap-2"
            >
              Start Enrollment
              <ArrowRight size={18} />
            </button>
            <Link
              to="/contact"
              className="border-2 border-white/50 text-white font-display font-700 text-base px-10 py-4 rounded-2xl hover:bg-white/10 transition-all"
            >
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
