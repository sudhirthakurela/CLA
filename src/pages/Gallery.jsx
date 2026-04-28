// Gallery page — displays a placeholder grid until real photos are added.
// To add real photos: drop images into /public/gallery/ and update the `photos` array below.

const categories = ['All', 'Infant & Toddler', 'Preschool', 'Arts & Crafts', 'Outdoors', 'Events']

const placeholderPhotos = [
  { id: 1, category: 'Arts & Crafts', emoji: '🎨', label: 'Painting in the atelier', color: '#FFF4F1', accent: '#FF6B47' },
  { id: 2, category: 'Outdoors', emoji: '🌳', label: 'Nature walk at Arlington Main', color: '#EDFFF8', accent: '#06D6A0' },
  { id: 3, category: 'Preschool', emoji: '📚', label: 'Storytime', color: '#F5F0FF', accent: '#9B5DE5' },
  { id: 4, category: 'Events', emoji: '🎉', label: 'Spring Celebration', color: '#FFFBEE', accent: '#FFCB47' },
  { id: 5, category: 'Infant & Toddler', emoji: '🍼', label: 'Tummy time & play', color: '#FFF0F4', accent: '#FF8FAB' },
  { id: 6, category: 'Outdoors', emoji: '🌻', label: 'Garden exploration', color: '#EDFFF8', accent: '#06D6A0' },
  { id: 7, category: 'Arts & Crafts', emoji: '🖼️', label: 'Mixed media project', color: '#FFF4F1', accent: '#FF6B47' },
  { id: 8, category: 'Preschool', emoji: '🧩', label: 'Building block challenges', color: '#EDFAFA', accent: '#2EC4B6' },
  { id: 9, category: 'Events', emoji: '🎭', label: 'Dramatic play showcase', color: '#F5F0FF', accent: '#9B5DE5' },
  { id: 10, category: 'Infant & Toddler', emoji: '🎵', label: 'Music & rhythm class', color: '#FFF0F4', accent: '#FF8FAB' },
  { id: 11, category: 'Preschool', emoji: '🔬', label: 'Science exploration lab', color: '#FFFBEE', accent: '#FFCB47' },
  { id: 12, category: 'Outdoors', emoji: '🌈', label: 'Splash day fun', color: '#EDFAFA', accent: '#2EC4B6' },
]

import { useState } from 'react'
import { Camera } from 'lucide-react'

export default function Gallery({ onEnrollClick }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? placeholderPhotos
      : placeholderPhotos.filter((p) => p.category === activeCategory)

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

      {/* ─── PHOTO NOTICE (remove once real photos are added) ─── */}
      <div className="bg-yellow-50 border-b border-yellow-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 text-sm text-yellow-700">
          <Camera size={18} className="flex-shrink-0" />
          <p>
            <strong>Coming soon:</strong> Real photos from our classrooms are on the way!
            Drop images into <code className="bg-yellow-100 px-1.5 py-0.5 rounded text-xs">/public/gallery/</code> and
            update <code className="bg-yellow-100 px-1.5 py-0.5 rounded text-xs">src/pages/Gallery.jsx</code> to display them.
          </p>
        </div>
      </div>

      {/* ─── GRID ─── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((photo, i) => (
              <div
                key={photo.id}
                className={`break-inside-avoid rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all hover:-translate-y-1 ${
                  i % 3 === 0 ? 'aspect-square' : i % 3 === 1 ? 'aspect-[4/3]' : 'aspect-[3/4]'
                }`}
                style={{ backgroundColor: photo.color }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center p-8 min-h-40">
                  <span className="text-6xl mb-4">{photo.emoji}</span>
                  <p
                    className="font-display font-700 text-sm text-center"
                    style={{ color: photo.accent }}
                  >
                    {photo.label}
                  </p>
                  <span
                    className="mt-2 text-xs font-display font-600 px-3 py-1 rounded-full"
                    style={{ backgroundColor: photo.accent + '20', color: photo.accent }}
                  >
                    {photo.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display font-900 text-3xl text-gray-900 mb-4">
            Want to See It In Person?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Schedule a free center tour and experience the CLA magic firsthand.
          </p>
          <button
            onClick={onEnrollClick}
            className="bg-brand-coral text-white font-display font-800 px-10 py-4 rounded-2xl hover:bg-coral-600 transition-all shadow-card hover:-translate-y-1"
          >
            Schedule a Tour
          </button>
        </div>
      </section>
    </div>
  )
}
