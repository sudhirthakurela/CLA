import { useState, useEffect } from 'react'

// ─── Change this to your desired preview password ───────────
const PREVIEW_PASSWORD = 'CLA2024'
// ────────────────────────────────────────────────────────────

export default function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('cla_preview') === 'true') {
      setUnlocked(true)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input === PREVIEW_PASSWORD) {
      sessionStorage.setItem('cla_preview', 'true')
      setUnlocked(true)
    } else {
      setError(true)
      setShake(true)
      setInput('')
      setTimeout(() => setShake(false), 600)
      setTimeout(() => setError(false), 3000)
    }
  }

  if (unlocked) return children

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50 flex items-center justify-center p-4">
      {/* Decorative blobs */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative bg-white rounded-4xl shadow-pop p-10 w-full max-w-md text-center">
        {/* Logo / Icon */}
        <div className="w-20 h-20 bg-gradient-to-br from-brand-coral to-orange-400 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-card">
          🌟
        </div>

        <h1 className="font-display font-900 text-3xl text-gray-900 mb-1">
          Creative Learning Academy
        </h1>
        <p className="text-brand-coral font-display font-700 text-sm mb-8">
          Client Preview — Private Access
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className={shake ? 'animate-bounce' : ''}>
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter preview password"
              autoFocus
              className={"w-full px-5 py-4 rounded-2xl border-2 text-center font-display font-700 text-lg tracking-widest focus:outline-none transition-all " +
                (error
                  ? 'border-red-300 bg-red-50 placeholder-red-300'
                  : 'border-gray-200 focus:border-brand-coral')}
            />
            {error && (
              <p className="text-red-500 text-sm font-display font-600 mt-2">
                Incorrect password. Please try again.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-brand-coral text-white font-display font-800 text-base py-4 rounded-2xl hover:bg-coral-600 transition-all shadow-soft hover:shadow-card hover:-translate-y-0.5"
          >
            Unlock Preview
          </button>
        </form>

        <p className="text-gray-400 text-xs font-display mt-6">
          This is a private client preview. Please do not share this link publicly.
        </p>
      </div>
    </div>
  )
}
