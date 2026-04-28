import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { programs, enrichmentPrograms, developmentAreas } from '../data/programs'

export default function Programs({ onEnrollClick }) {
  return (
    <div className="pt-20">
      {/* ─── HERO ─── */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 text-8xl opacity-10">🎨</div>
          <div className="absolute bottom-10 right-10 text-8xl opacity-10">🧩</div>
          <div className="absolute top-20 right-20 text-6xl opacity-10">🚀</div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <p className="text-brand-coral font-display font-700 text-sm uppercase tracking-widest mb-4">
            What We Teach
          </p>
          <h1 className="font-display font-900 text-5xl sm:text-6xl text-gray-900 mb-6">
            Programs Built for Every Stage
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            From your newest arrival to your kindergarten-bound explorer, CLA has a nurturing,
            research-backed program to match every age and stage.
          </p>
        </div>
      </section>

      {/* ─── DEVELOPMENT PILLARS ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-900 text-2xl text-gray-900 text-center mb-8">
            Every program develops the whole child across four core areas
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {developmentAreas.map((area, i) => {
              const colors = ['#FF6B47', '#2EC4B6', '#9B5DE5', '#FFCB47']
              const bgs = ['#FFF4F1', '#EDFAFA', '#F5F0FF', '#FFFBEE']
              return (
                <div
                  key={area.title}
                  className="rounded-3xl p-6 flex items-start gap-4"
                  style={{ backgroundColor: bgs[i] }}
                >
                  <span className="text-3xl">{area.icon}</span>
                  <div>
                    <h3 className="font-display font-800 text-sm mb-1" style={{ color: colors[i] }}>
                      {area.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{area.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── MAIN PROGRAMS ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {programs.map((program, i) => (
            <div
              key={program.id}
              id={program.id}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Color panel */}
              <div
                className="rounded-4xl p-12 flex flex-col items-center justify-center text-center min-h-72"
                style={{ backgroundColor: program.colorLight }}
              >
                <span className="text-8xl mb-4">{program.icon}</span>
                <h2
                  className="font-display font-900 text-3xl mb-2"
                  style={{ color: program.color }}
                >
                  {program.name}
                </h2>
                <div
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-display font-700 mt-2"
                  style={{ backgroundColor: program.color + '20', color: program.color }}
                >
                  {program.ageRange}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display font-900 text-2xl text-gray-900 mb-4">
                  {program.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="font-display font-800 text-sm text-gray-900 mb-3">
                      Program Features
                    </p>
                    <ul className="space-y-2">
                      {program.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle
                            size={16}
                            className="mt-0.5 flex-shrink-0"
                            style={{ color: program.color }}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-display font-800 text-sm text-gray-900 mb-3">
                      Curriculum Highlights
                    </p>
                    <ul className="space-y-2">
                      {program.curriculum.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-gray-600">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: program.color }}
                          />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={onEnrollClick}
                  className="mt-8 flex items-center gap-2 text-sm font-display font-700 px-6 py-3 rounded-2xl text-white transition-all hover:-translate-y-0.5 hover:shadow-card"
                  style={{ backgroundColor: program.color }}
                >
                  Enroll in {program.name} <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ENRICHMENT ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-purple font-display font-700 text-sm uppercase tracking-widest mb-4">
              Beyond the Classroom
            </p>
            <h2 className="font-display font-900 text-4xl text-gray-900 mb-4">
              Enrichment Programs
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Woven into every program, these specialties set CLA apart and make every day
              an adventure.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrichmentPrograms.map((ep, i) => {
              const colors = ['#FF6B47', '#9B5DE5', '#2EC4B6', '#FFCB47', '#FF8FAB', '#06D6A0']
              const bgs = ['#FFF4F1', '#F5F0FF', '#EDFAFA', '#FFFBEE', '#FFF0F4', '#EDFFF8']
              return (
                <div
                  key={ep.name}
                  className="rounded-4xl p-8 hover:shadow-card transition-all hover:-translate-y-1"
                  style={{ backgroundColor: bgs[i] }}
                >
                  <span className="text-5xl mb-4 block">{ep.icon}</span>
                  <h3
                    className="font-display font-800 text-xl mb-3"
                    style={{ color: colors[i] }}
                  >
                    {ep.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{ep.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-brand-coral to-orange-500">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="font-display font-900 text-4xl text-white mb-4">
            The Right Program is Waiting
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Not sure which program fits your child? We'll help you figure it out. Give us a
            call or start an inquiry and we'll match your child to the perfect class.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onEnrollClick}
              className="bg-white text-brand-coral font-display font-800 px-10 py-4 rounded-2xl hover:bg-orange-50 transition-all shadow-card hover:-translate-y-1"
            >
              Start Enrollment
            </button>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-display font-700 px-10 py-4 rounded-2xl hover:bg-white/10 transition-all"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
