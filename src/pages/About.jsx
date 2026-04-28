import { Link } from 'react-router-dom'
import { ArrowRight, Award, Heart, BookOpen } from 'lucide-react'
import { centers } from '../data/centers'
import { developmentAreas } from '../data/programs'

const founders = centers[0].staff  // Both founders are at Arlington Main

export default function About({ onEnrollClick }) {
  return (
    <div className="pt-20">
      {/* ─── HERO ─── */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-orange-50 py-24 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <p className="text-brand-teal font-display font-700 text-sm uppercase tracking-widest mb-4">
            Our Story
          </p>
          <h1 className="font-display font-900 text-5xl sm:text-6xl text-gray-900 mb-6">
            About Creative Learning Academy
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
            Founded in Arlington by two passionate educators, CLA has grown from a single center
            into a network of three vibrant learning communities — united by a single belief:
            every child deserves to be seen, celebrated, and inspired.
          </p>
        </div>
      </section>

      {/* ─── MISSION + PHILOSOPHY ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-coral font-display font-700 text-sm uppercase tracking-widest mb-4">
                Our Mission
              </p>
              <h2 className="font-display font-900 text-4xl text-gray-900 mb-6">
                Quality Care That's Truly Affordable
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our mission is to provide high-quality and affordable childcare services that
                promote child development and growth. We strive to create a safe, nurturing, and
                stimulating environment where children can learn and explore.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every family deserves access to exceptional early education. We actively work with
                families on subsidy programs, sliding-scale fees, and flexible scheduling so that
                financial barriers never stand between a child and a great start.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '❤️', label: 'Family Owned', value: '100%', color: '#FF8FAB', bg: '#FFF0F4' },
                { icon: '🎓', label: 'Years of Service', value: '10+', color: '#FF6B47', bg: '#FFF4F1' },
                { icon: '👶', label: 'Children Served', value: '500+', color: '#2EC4B6', bg: '#EDFAFA' },
                { icon: '🏫', label: 'Centers Open', value: '3', color: '#9B5DE5', bg: '#F5F0FF' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl p-6 text-center"
                  style={{ backgroundColor: stat.bg }}
                >
                  <span className="text-4xl">{stat.icon}</span>
                  <p
                    className="font-display font-900 text-3xl mt-2"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-gray-600 text-sm font-display font-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-brand-purple font-display font-700 text-sm uppercase tracking-widest mb-4">
            Our Philosophy
          </p>
          <h2 className="font-display font-900 text-4xl text-gray-900 mb-8">
            Every Child is Unique
          </h2>
          <blockquote className="bg-white rounded-4xl p-10 shadow-soft border-l-4 border-brand-coral text-left">
            <p className="text-gray-700 text-xl leading-relaxed italic font-display font-500">
              "Every child is unique and deserves individualized attention and care. We encourage
              creativity, exploration, and learning through play, and we strive to foster a
              lifelong love of learning in every child."
            </p>
            <footer className="mt-6 font-display font-700 text-brand-coral text-sm">
              — Founders, Creative Learning Academy
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ─── DEVELOPMENT AREAS ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-teal font-display font-700 text-sm uppercase tracking-widest mb-4">
              How We Develop Whole Children
            </p>
            <h2 className="font-display font-900 text-4xl text-gray-900">
              Four Pillars of Development
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentAreas.map((area, i) => {
              const colors = ['#FF6B47', '#2EC4B6', '#9B5DE5', '#FFCB47']
              const bgs = ['#FFF4F1', '#EDFAFA', '#F5F0FF', '#FFFBEE']
              return (
                <div
                  key={area.title}
                  className="rounded-4xl p-8 text-center"
                  style={{ backgroundColor: bgs[i] }}
                >
                  <span className="text-5xl">{area.icon}</span>
                  <h3
                    className="font-display font-800 text-lg mt-4 mb-3"
                    style={{ color: colors[i] }}
                  >
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── FOUNDERS ─── */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-coral font-display font-700 text-sm uppercase tracking-widest mb-4">
              Meet the Founders
            </p>
            <h2 className="font-display font-900 text-4xl text-gray-900">
              The Hearts Behind CLA
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {founders.map((person, i) => {
              const colors = ['#FF6B47', '#2EC4B6']
              const bgs = ['#FFF4F1', '#EDFAFA']
              return (
                <div key={person.name} className="bg-white rounded-4xl p-8 shadow-soft">
                  {/* Avatar placeholder */}
                  <div
                    className="w-20 h-20 rounded-3xl flex items-center justify-center text-3xl font-display font-900 text-white mb-6"
                    style={{ backgroundColor: colors[i] }}
                  >
                    {person.name[0]}
                  </div>
                  <h3 className="font-display font-900 text-2xl text-gray-900 mb-1">
                    {person.name}
                  </h3>
                  <p
                    className="font-display font-700 text-sm mb-4"
                    style={{ color: colors[i] }}
                  >
                    {person.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{person.bio}</p>
                  <div className="space-y-2">
                    {person.credentials.map((cred) => (
                      <div key={cred} className="flex items-center gap-2 text-sm text-gray-600">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: colors[i] }}
                        />
                        {cred}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── CURRICULUM ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-teal font-display font-700 text-sm uppercase tracking-widest mb-4">
            Our Curriculum
          </p>
          <h2 className="font-display font-900 text-4xl text-gray-900 mb-6">
            The Creative Curriculum Framework
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            CLA uses the nationally recognized <strong>Creative Curriculum</strong> framework —
            a research-backed, play-based approach that prepares children for kindergarten and
            beyond by developing the whole child: academically, socially, emotionally, and physically.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '📚', title: 'Play-Based Learning', desc: 'Children learn best through purposeful play — our classrooms are designed to spark curiosity.' },
              { icon: '🔍', title: 'Project-Based Inquiry', desc: 'Real-world projects develop critical thinking, teamwork, and a love of exploration.' },
              { icon: '📊', title: 'Portfolio Assessments', desc: 'We track each child\'s growth through observations and portfolios — no high-stakes testing.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-3xl p-8">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="font-display font-800 text-lg text-gray-900 mt-4 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-brand-teal">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="font-display font-900 text-4xl text-white mb-4">
            Come See Us in Person
          </h2>
          <p className="text-teal-50 text-lg mb-8">
            Schedule a free tour at any of our three centers. Meet the teachers, see the classrooms,
            and feel the CLA difference for yourself.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-brand-teal font-display font-800 px-8 py-4 rounded-2xl hover:bg-teal-50 transition-all shadow-card hover:-translate-y-1 flex items-center gap-2"
            >
              Schedule a Tour <ArrowRight size={18} />
            </Link>
            <button
              onClick={onEnrollClick}
              className="border-2 border-white text-white font-display font-700 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
