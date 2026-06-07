import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const BASE = import.meta.env.BASE_URL   // '/CLA/' in prod, '/' in dev
const img  = (file) => `${BASE}gallery/${file}`

const categories = ['All', 'Outdoors', 'Arts & Crafts', 'Little Chefs', 'Classroom Life', 'Science & Nature', 'Special Events', 'Awards']

const photos = [
  // ── Outdoor Adventures ──
  { id: 1,  src: img('outdoor-soccer.jpeg'),     alt: 'Kids playing soccer outdoors',            category: 'Outdoors',          span: 'tall' },
  { id: 2,  src: img('field-trip-bridge.jpeg'),  alt: 'Field trip — kids on a bridge',           category: 'Outdoors',          span: 'wide' },
  { id: 3,  src: img('playground.jpeg'),         alt: 'Kids climbing on the playground',         category: 'Outdoors',          span: 'normal' },
  { id: 4,  src: img('nature-explore.jpeg'),     alt: 'Children exploring nature together',      category: 'Science & Nature',  span: 'normal' },
  { id: 5,  src: img('farm-visit.jpeg'),         alt: 'Field trip to an alpaca farm',            category: 'Outdoors',          span: 'wide' },
  // ── Arts & Crafts ──
  { id: 6,  src: img('painting.jpeg'),           alt: 'Boy painting with a brush',               category: 'Arts & Crafts',     span: 'tall' },
  { id: 7,  src: img('sensory-paint.jpeg'),      alt: 'Child doing sensory paint exploration',   category: 'Arts & Crafts',     span: 'normal' },
  { id: 8,  src: img('art-craft.jpeg'),          alt: 'Kids making crafts at the table',         category: 'Arts & Crafts',     span: 'wide' },
  // ── Little Chefs ──
  { id: 9,  src: img('little-chef-2.jpeg'),      alt: 'Little chefs making food together',       category: 'Little Chefs',      span: 'wide' },
  { id: 10, src: img('little-chef-1.jpeg'),      alt: 'Young chef with spoon and cup',           category: 'Little Chefs',      span: 'tall' },
  { id: 11, src: img('little-chef-3.jpeg'),      alt: 'Girl in chef hat creating her dish',      category: 'Little Chefs',      span: 'normal' },
  { id: 12, src: img('dough-play.jpeg'),         alt: 'Child kneading dough',                    category: 'Little Chefs',      span: 'normal' },
  // ── Classroom Life ──
  { id: 13, src: img('circle-time.jpeg'),        alt: 'Teacher doing circle time with toddlers', category: 'Classroom Life',    span: 'wide' },
  { id: 14, src: img('storytime.jpeg'),          alt: 'Storytime — reading about astronauts',    category: 'Classroom Life',    span: 'normal' },
  { id: 15, src: img('reading-corner.jpeg'),     alt: 'Toddler reading in the cozy corner',      category: 'Classroom Life',    span: 'tall' },
  { id: 16, src: img('classroom-setup.jpeg'),    alt: 'Creative classroom sensory station',      category: 'Classroom Life',    span: 'normal' },
  // ── Science & Nature ──
  { id: 17, src: img('gardening.jpeg'),          alt: 'Girl learning to plant seedlings',        category: 'Science & Nature',  span: 'tall' },
  // ── Special Events ──
  { id: 18, src: img('easter-event.jpeg'),       alt: 'Kids celebrating Easter with the bunny',  category: 'Special Events',    span: 'wide' },
  // ── Awards ──
  { id: 19, src: img('award-2025-daycare.jpeg'), alt: 'Arlington Best of 2025 — Day Care Center', category: 'Awards',           span: 'normal' },
  { id: 20, src: img('award-2025.jpeg'),         alt: 'BusinessRate Best of 2025 Arlington',     category: 'Awards',            span: 'normal' },
  { id: 21, src: img('award-ranked-1.jpeg'),     alt: '#1 Ranked Child Care Agency Arlington',   category: 'Awards',            span: 'normal' },
  { id: 22, src: img('award-2024.jpeg'),         alt: 'Arlington Best of 2024 — Child Care',     category: 'Awards',            span: 'normal' },
]

export default function Gallery({ onEnrollClick }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCategory === 'All'
    ? photos
    : photos.filter((p) => p.category === activeCategory)

  return (
    <div className="pt-20">
      {/* ─── HERO ─── */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-24 text-center relative overflow-hidden">
        <div className="absolute top-10 left-10 text-8xl opacity-10">📸</div>
        <div className="absolute bottom-10 right-10 text-8xl opacity-10">🌟</div>
        <div className="relative max-w-4xl mx-auto px-4">
          <p className="text-brand-purple font-display font-700 text-sm uppercase tracking-widest mb-4">
            Our Little Stars
          </p>
          <h1 className="font-display font-900 text-5xl sm:text-6xl text-gray-900 mb-6">
            Photo Gallery
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            A window into the joy, curiosity, and creativity happening every day across our
            three centers.
          </p>
        </div>
      </section>

      {/* ─── FILTERS ─── */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-display font-700 transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-coral text-white shadow-soft'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MASONRY GRID ─── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((photo) => (
              <div
                key={photo.id}
                className="break-inside-avoid rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all hover:-translate-y-1 cursor-pointer group"
                onClick={() => setLightbox(photo)}
              >
                <div className="relative">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end">
                    <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="bg-white/90 text-gray-800 font-display font-700 text-xs px-3 py-1.5 rounded-full">
                        {photo.alt}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-5xl mb-4">📷</p>
              <p className="font-display font-700">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ─── LIGHTBOX ─── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white font-display font-700 text-sm flex items-center gap-2"
            >
              Close ✕
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
            />
            <p className="text-white/70 text-sm font-display font-600 mt-3 text-center">
              {lightbox.alt}
            </p>
          </div>
        </div>
      )}

      {/* ─── CTA ─── */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display font-900 text-3xl text-gray-900 mb-4">
            Want to See It In Person?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Schedule a free center tour and experience the CLA magic firsthand.
          </p>
          <Link
            to="/contact"
            state={{ scrollToForm: true }}
            className="inline-flex items-center gap-2 bg-brand-coral text-white font-display font-800 px-10 py-4 rounded-2xl hover:bg-coral-600 transition-all shadow-card hover:-translate-y-1"
          >
            Schedule a Tour <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
