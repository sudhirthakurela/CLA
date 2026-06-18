import { Link } from 'react-router-dom'

export default function TermsOfService() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-teal font-display font-700 text-sm uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="font-display font-900 text-4xl text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-400 text-sm">Creative Learning Academy</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-6 text-gray-600 leading-relaxed text-base">
          <p>
            By using our website or enrolling in our program, you agree to our terms.
          </p>
          <p>
            We provide childcare services based on availability and enrollment requirements.
            Parents must submit accurate information and complete all required forms.
          </p>
          <p>
            Tuition must be paid on time as agreed during enrollment. We follow all required
            health and safety regulations.
          </p>
          <p>
            We may update website content, policies, and terms at any time.
          </p>
          <p>
            We are not responsible for issues arising from the use of this website.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400">
            Questions about these terms?{' '}
            <Link to="/contact" className="text-brand-coral hover:underline font-display font-700">
              Contact us
            </Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
