import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const colorMeanings = [
  {
    color: '#FF6B47',
    bg: '#FFF4F1',
    swatch: '#FF6B47',
    title: 'Coral — Warmth & Energy',
    symbol: '🔥',
    description:
      'Coral is the color of passion and hands-on care. It represents the warm, energetic engagement our educators bring every day — the kind of enthusiasm that makes children feel safe enough to try new things, make mistakes, and grow.',
    connection: '"Creative" — our active, expressive spirit',
  },
  {
    color: '#2EC4B6',
    bg: '#EDFAFA',
    swatch: '#2EC4B6',
    title: 'Teal — Growth & Calm',
    symbol: '🌱',
    description:
      'Teal evokes steady rivers and lush growth. It represents the calm, trust-filled environment where deep learning happens. Like a seedling finding water, children flourish when their environment is consistent, safe, and nurturing.',
    connection: '"Learning" — steady, purposeful growth',
  },
  {
    color: '#FFCB47',
    bg: '#FFFBEE',
    swatch: '#FFCB47',
    title: 'Yellow — Joy & Curiosity',
    symbol: '☀️',
    description:
      'Sunshine yellow captures the pure joy and relentless curiosity of childhood. Every "why?", every mud puddle, every painted handprint is a celebration. Yellow reminds us that wonder is not a distraction — it is the engine of all learning.',
    connection: 'The golden center — the shining individual child',
  },
  {
    color: '#9B5DE5',
    bg: '#F5F0FF',
    swatch: '#9B5DE5',
    title: 'Purple — Imagination & Wonder',
    symbol: '✨',
    description:
      'Purple is the color of "what if?" — the question behind every great idea, story, and invention. Our arts, music, and drama programs live in this purple space where imagination has no ceiling and children learn that their ideas matter.',
    connection: '"Academy" — the highest aspiration for each child',
  },
]

const symbolMeanings = [
  {
    element: 'The 8-Petal Sunburst',
    meaning:
      'Eight petals represent the eight domains of early childhood development: physical health, social-emotional skills, cognitive growth, language, literacy, mathematics, creative arts, and science. Like petals opening toward the sun, each child unfolds across all eight areas at their own pace, in their own beautiful way.',
    icon: '🌸',
    color: '#FF6B47',
    bg: '#FFF4F1',
  },
  {
    element: 'The Star at Center',
    meaning:
      'The five-pointed star at the heart of our emblem is the star we see in every child. Its five points represent our five core commitments: Safety, Creativity, Respect, Growth, and Joy. It also honors the five senses — how young children first understand their world.',
    icon: '⭐',
    color: '#FFCB47',
    bg: '#FFFBEE',
  },
  {
    element: 'The Golden Center Dot',
    meaning:
      'The small golden dot at the very heart of the star is the most important element of all: it represents the individual child. Not a group, not a statistic — your child, seen, known, and cherished as a unique human being. Every decision we make radiates outward from that single dot.',
    icon: '🌟',
    color: '#9B5DE5',
    bg: '#F5F0FF',
  },
  {
    element: 'The Teal Ring',
    meaning:
      'A gentle teal ring encircles the star — the protective, nurturing boundary CLA provides. This ring represents the secure attachment and consistent care that research shows is the single most important factor in healthy child development. Safe inside, free to explore.',
    icon: '💫',
    color: '#2EC4B6',
    bg: '#EDFAFA',
  },
]

const wordMeanings = [
  {
    word: 'Creative',
    color: '#FF6B47',
    bg: '#FFF4F1',
    meaning:
      'Creativity is not a subject — it is a way of thinking. We believe every child is born with profound creative intelligence, and our job is to protect and amplify it. Through arts, music, dramatic play, building, and open-ended exploration, we ensure that creativity is never schooled out of children.',
  },
  {
    word: 'Learning',
    color: '#2EC4B6',
    bg: '#EDFAFA',
    meaning:
      'Learning at CLA means following curiosity, not a script. It happens in the sandbox, at storytime, during lunch conversations, and on the playground. Our educators design environments that invite learning rather than forcing it — because children who love to learn become adults who never stop.',
  },
  {
    word: 'Academy',
    color: '#9B5DE5',
    bg: '#F5F0FF',
    meaning:
      'Academy signals our commitment to professional, research-backed early education. We are not just a daycare — we are an institution where Massachusetts EEC-certified educators apply proven methodologies to give every child the strongest possible start. Excellence without elitism.',
  },
]

export default function LogoStory({ onEnrollClick }) {
  return (
    <div className="pt-20">

      {/* ─── HERO ─── */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-purple-50 py-24 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto text-center px-4">
          <p className="text-brand-coral font-display font-700 text-sm uppercase tracking-widest mb-4">
            Our Identity
          </p>
          <h1 className="font-display font-900 text-5xl sm:text-6xl text-gray-900 mb-6">
            The Story Behind Our Logo
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto mb-14">
            Every line, color, and shape was chosen with purpose.
            Our logo is not just a mark — it is our mission made visible.
          </p>
          <div className="flex justify-center">
            <img
              src={`${import.meta.env.BASE_URL}logo.svg`}
              alt="Creative Learning Academy Logo"
              className="h-36 sm:h-44 w-auto drop-shadow-md"
            />
          </div>
        </div>
      </section>

      {/* ─── COLORS ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-teal font-display font-700 text-sm uppercase tracking-widest mb-3">
              The Color Palette
            </p>
            <h2 className="font-display font-900 text-4xl text-gray-900 mb-4">
              Four Colors, One Purpose
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Each color in our palette carries a meaning that connects directly to how children grow and learn.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {colorMeanings.map((el) => (
              <div key={el.title} className="rounded-4xl p-8 flex flex-col" style={{ backgroundColor: el.bg }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full flex-shrink-0" style={{ backgroundColor: el.swatch }} />
                  <span className="text-2xl">{el.symbol}</span>
                </div>
                <h3 className="font-display font-800 text-base mb-3" style={{ color: el.color }}>
                  {el.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{el.description}</p>
                <p className="text-xs font-display font-700 border-t pt-3" style={{ color: el.color, borderColor: el.swatch + '33' }}>
                  → {el.connection}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SYMBOLS ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-purple font-display font-700 text-sm uppercase tracking-widest mb-3">
              The Emblem
            </p>
            <h2 className="font-display font-900 text-4xl text-gray-900 mb-4">
              Every Shape Has Meaning
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              The sunburst emblem was designed from the inside out — starting with the child at the center.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {symbolMeanings.map((item) => (
              <div key={item.element} className="bg-white rounded-4xl p-8 shadow-soft flex gap-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: item.bg }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-800 text-lg mb-2" style={{ color: item.color }}>
                    {item.element}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NAME ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-coral font-display font-700 text-sm uppercase tracking-widest mb-4">
            The Name
          </p>
          <h2 className="font-display font-900 text-4xl text-gray-900 mb-4">
            Three Words, One Vision
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-14">
            The name "Creative Learning Academy" is not a random combination — each word was deliberate.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {wordMeanings.map((item) => (
              <div key={item.word} className="rounded-4xl p-8 text-left" style={{ backgroundColor: item.bg }}>
                <h3 className="font-display font-900 text-4xl mb-5" style={{ color: item.color }}>
                  {item.word}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BRAND PROMISE QUOTE ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="bg-white rounded-4xl p-10 shadow-soft border-l-4 border-brand-coral text-left">
            <p className="text-gray-700 text-xl leading-relaxed italic font-display font-500">
              "Our logo is a promise. The colors promise warmth, growth, joy, and wonder.
              The star promises we see the brilliance in your child. The golden dot promises
              that your child — this specific, irreplaceable little person — is the center of everything we do."
            </p>
            <footer className="mt-6 font-display font-700 text-brand-coral text-sm">
              — Founders, Creative Learning Academy
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-teal-50">
        <div className="max-w-3xl mx-auto text-center px-4">
          <img
            src={`${import.meta.env.BASE_URL}logo.svg`}
            alt="Creative Learning Academy"
            className="h-24 w-auto mx-auto mb-8"
          />
          <h2 className="font-display font-900 text-4xl text-gray-900 mb-4">
            Come Experience It for Yourself
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Our logo is just the beginning. Visit one of our three centers and see our values in action.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              state={{ scrollToForm: true }}
              className="bg-brand-coral text-white font-display font-800 px-8 py-4 rounded-2xl hover:bg-coral-600 transition-all shadow-card hover:-translate-y-1 flex items-center gap-2"
            >
              Schedule a Tour <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="border-2 border-gray-200 text-gray-700 font-display font-700 px-8 py-4 rounded-2xl hover:border-brand-teal hover:text-brand-teal transition-all"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
