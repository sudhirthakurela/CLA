import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-teal font-display font-700 text-sm uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="font-display font-900 text-4xl text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Creative Learning Academy</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-6 text-gray-600 leading-relaxed text-base">
          <p>
            We respect your privacy and are committed to protecting your personal information.
          </p>
          <p>
            We may collect basic information such as your name, phone number, email address, and
            child's age when you contact us or submit an enrollment form. This information is used
            only to respond to inquiries, manage enrollment, and provide childcare services.
          </p>
          <p>
            We do not sell or share your personal information with third parties, except when
            required by law or licensing authorities.
          </p>
          <p>
            We take reasonable steps to keep your information safe, but no online system is
            100% secure.
          </p>
          <p>
            If you have any questions, please contact us.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400">
            Questions about this policy?{' '}
            <Link to="/contact" className="text-brand-coral hover:underline font-display font-700">
              Contact us
            </Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
