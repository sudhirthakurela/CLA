import { useState } from 'react'
import { X, CheckCircle } from 'lucide-react'
import { centers } from '../data/centers'
import { programs } from '../data/programs'

export default function EnrollModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childDob: '',
    center: '',
    program: '',
    startDate: '',
    message: '',
  })

  if (!isOpen) return null

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with actual form submission (Formspree, Netlify Forms, etc.)
    console.log('Enrollment inquiry:', form)
    setSubmitted(true)
  }

  const handleClose = () => {
    setSubmitted(false)
    setStep(1)
    setForm({
      parentName: '', email: '', phone: '', childName: '',
      childDob: '', center: '', program: '', startDate: '', message: '',
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-4xl shadow-pop w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-4xl px-8 pt-8 pb-4 border-b border-gray-100 z-10">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400"
          >
            <X size={20} />
          </button>
          <div className="pr-8">
            <h2 className="font-display font-900 text-2xl text-gray-900">
              {submitted ? 'Inquiry Sent! 🎉' : 'Start Enrollment'}
            </h2>
            {!submitted && (
              <p className="text-gray-500 text-sm mt-1">
                Tell us about your family and we'll reach out within 1 business day.
              </p>
            )}
          </div>

          {/* Step indicator */}
          {!submitted && (
            <div className="flex items-center gap-2 mt-4">
              {[1, 2].map((s) => (
                <div
                  key={s}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    s === step
                      ? 'bg-brand-coral w-8'
                      : s < step
                      ? 'bg-brand-teal w-4'
                      : 'bg-gray-200 w-4'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="px-8 py-6">
          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle size={64} className="text-brand-teal mx-auto mb-4" />
              <h3 className="font-display font-800 text-xl text-gray-900 mb-2">
                Thank you, {form.parentName.split(' ')[0]}!
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                We've received your inquiry for <strong>{form.childName}</strong>.
                Our team will be in touch at <strong>{form.email}</strong> within one business day.
              </p>
              <button
                onClick={handleClose}
                className="bg-brand-coral text-white font-display font-700 px-8 py-3 rounded-2xl hover:bg-coral-600 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={step === 2 ? handleSubmit : (e) => { e.preventDefault(); setStep(2) }}>
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-display font-700 text-sm text-gray-500 uppercase tracking-wide">
                    About Your Child
                  </h3>
                  <div>
                    <label className="block text-sm font-display font-600 text-gray-700 mb-1.5">
                      Child's Name *
                    </label>
                    <input
                      type="text"
                      name="childName"
                      value={form.childName}
                      onChange={handleChange}
                      required
                      placeholder="First & Last Name"
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/30 focus:border-brand-coral text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-display font-600 text-gray-700 mb-1.5">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="childDob"
                      value={form.childDob}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/30 focus:border-brand-coral text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-display font-600 text-gray-700 mb-1.5">
                      Preferred Center
                    </label>
                    <select
                      name="center"
                      value={form.center}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/30 focus:border-brand-coral text-sm transition-all bg-white"
                    >
                      <option value="">Any center</option>
                      {centers.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name} — {c.city}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-display font-600 text-gray-700 mb-1.5">
                      Desired Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={form.startDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/30 focus:border-brand-coral text-sm transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-coral text-white font-display font-700 py-3.5 rounded-2xl hover:bg-coral-600 transition-colors mt-2"
                  >
                    Next: Your Contact Info →
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-display font-700 text-sm text-gray-500 uppercase tracking-wide">
                    Parent / Guardian Info
                  </h3>
                  <div>
                    <label className="block text-sm font-display font-600 text-gray-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={form.parentName}
                      onChange={handleChange}
                      required
                      placeholder="First & Last Name"
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/30 focus:border-brand-coral text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-display font-600 text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/30 focus:border-brand-coral text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-display font-600 text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(xxx) xxx-xxxx"
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/30 focus:border-brand-coral text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-display font-600 text-gray-700 mb-1.5">
                      Questions or Notes
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Anything you'd like us to know..."
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/30 focus:border-brand-coral text-sm transition-all resize-none"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 border-2 border-gray-200 text-gray-600 font-display font-700 py-3.5 rounded-2xl hover:border-gray-300 transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="flex-2 bg-brand-coral text-white font-display font-700 py-3.5 px-6 rounded-2xl hover:bg-coral-600 transition-colors"
                    >
                      Send Inquiry 🎉
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 text-center">
                    We respect your privacy and will never share your information.
                  </p>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
