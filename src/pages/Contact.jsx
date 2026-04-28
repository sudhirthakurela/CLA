import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle, ExternalLink } from 'lucide-react'
import { centers } from '../data/centers'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', center: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire to Formspree / Netlify Forms / EmailJS
    console.log('Contact form submission:', form)
    setSubmitted(true)
  }

  return (
    <div className="pt-20">
      {/* ─── HERO ─── */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-orange-50 py-24 text-center relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4">
          <p className="text-brand-teal font-display font-700 text-sm uppercase tracking-widest mb-4">
            We'd Love to Meet You
          </p>
          <h1 className="font-display font-900 text-5xl sm:text-6xl text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Questions, tours, enrollment — we're here to help. Reach out and we'll get back to
            you within one business day.
          </p>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact form */}
            <div className="lg:col-span-3">
              <h2 className="font-display font-900 text-3xl text-gray-900 mb-8">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="bg-teal-50 rounded-4xl p-10 text-center">
                  <CheckCircle size={56} className="text-brand-teal mx-auto mb-4" />
                  <h3 className="font-display font-900 text-2xl text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thanks, <strong>{form.name.split(' ')[0]}</strong>! We'll be in touch at{' '}
                    <strong>{form.email}</strong> within one business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', center: '', subject: '', message: '' }) }}
                    className="mt-6 text-brand-teal font-display font-700 text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-display font-600 text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text" name="name" value={form.name} onChange={handleChange} required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-display font-600 text-gray-700 mb-1.5">Email Address *</label>
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange} required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-display font-600 text-gray-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="(xxx) xxx-xxxx"
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-display font-600 text-gray-700 mb-1.5">Preferred Center</label>
                      <select
                        name="center" value={form.center} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal text-sm bg-white"
                      >
                        <option value="">Any / Not sure</option>
                        {centers.map((c) => (
                          <option key={c.id} value={c.id}>{c.name} — {c.city}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-display font-600 text-gray-700 mb-1.5">Subject *</label>
                    <select
                      name="subject" value={form.subject} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal text-sm bg-white"
                    >
                      <option value="">Select a topic…</option>
                      <option>Enrollment Inquiry</option>
                      <option>Schedule a Tour</option>
                      <option>Program Information</option>
                      <option>Tuition & Subsidies</option>
                      <option>General Question</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-display font-600 text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Tell us a bit about your family, your child's age, and what you're looking for…"
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-teal text-white font-display font-800 py-4 rounded-2xl hover:bg-teal-500 transition-all shadow-soft hover:shadow-card hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    We typically respond within 1 business day. Your information is never shared.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar: Center contacts */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-display font-900 text-3xl text-gray-900">Center Locations</h2>

              {centers.map((center, i) => {
                const colors = ['#FF6B47', '#2EC4B6', '#9B5DE5']
                const bgs = ['#FFF4F1', '#EDFAFA', '#F5F0FF']
                return (
                  <div
                    key={center.id}
                    className="rounded-3xl p-6"
                    style={{ backgroundColor: bgs[i] }}
                  >
                    <h3
                      className="font-display font-800 text-lg mb-4"
                      style={{ color: colors[i] }}
                    >
                      {center.name}
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm text-gray-600">
                        <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: colors[i] }} />
                        <div>
                          <p>{center.address}</p>
                          <p>{center.city}, {center.state} {center.zip}</p>
                          <a
                            href={center.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs flex items-center gap-1 mt-0.5 hover:underline"
                            style={{ color: colors[i] }}
                          >
                            <ExternalLink size={11} /> Directions
                          </a>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-gray-600">
                        <Phone size={16} style={{ color: colors[i] }} />
                        <a href={`tel:${center.phone}`} className="hover:underline">{center.phone}</a>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-gray-600">
                        <Mail size={16} style={{ color: colors[i] }} />
                        <a href={`mailto:${center.email}`} className="hover:underline text-xs break-all">{center.email}</a>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-600">
                        <Clock size={16} className="mt-0.5" style={{ color: colors[i] }} />
                        <div>
                          <p>Mon – Fri: {center.hours.weekdays}</p>
                          <p className="text-gray-400 text-xs">Weekends: Closed</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )
              })}

              {/* General contact */}
              <div className="bg-gray-900 rounded-3xl p-6 text-white">
                <h3 className="font-display font-800 text-base mb-3">General Inquiries</h3>
                <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                  <Mail size={14} />
                  <a href="mailto:info@creativelearningacademy.com" className="hover:text-white transition-colors text-xs">
                    info@creativelearningacademy.com
                  </a>
                </div>
                <p className="text-xs text-gray-500">
                  We respond to all inquiries within 1 business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
