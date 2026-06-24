import { useNavigate } from 'react-router-dom'

const sections = [
  {
    title: '1. Information We Collect',
    content: 'We collect information you provide directly: name, email, phone number, delivery addresses, and payment information. We also collect automatically: device information, IP address, location data, app usage data, and cookies. This data is necessary to provide and improve our services.',
  },
  {
    title: '2. How We Use Your Information',
    content: 'We use your information to: process and deliver orders, send order updates and notifications, personalize your experience, process payments, communicate with you about promotions and offers, improve our App and services, prevent fraud and ensure security, and comply with legal obligations.',
  },
  {
    title: '3. Information Sharing',
    content: 'We share your information with: restaurants (order details only), delivery partners (name, phone, address for delivery), payment processors (for transaction processing), analytics providers (aggregated data), and law enforcement (when required by law). We do not sell your personal information to third parties.',
  },
  {
    title: '4. Data Security',
    content: 'We implement industry-standard security measures including SSL encryption, secure servers, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but will promptly notify you in case of a data breach.',
  },
  {
    title: '5. Data Retention',
    content: 'We retain your personal information for as long as your account is active or as needed to provide services. Order history is retained for 2 years for your convenience. You may request deletion of your data at any time by contacting support@zesty.com.',
  },
  {
    title: '6. Your Rights',
    content: 'You have the right to: access your personal data, correct inaccurate data, delete your account and data, opt out of marketing communications, request a copy of your data, and restrict processing of your data. To exercise these rights, contact our privacy team.',
  },
  {
    title: '7. Cookies and Tracking',
    content: 'We use cookies and similar technologies to: maintain your session, remember your preferences, analyze usage patterns, and deliver personalized content. You can manage cookie preferences through your device settings. Disabling cookies may affect App functionality.',
  },
  {
    title: '8. Location Data',
    content: 'With your permission, we collect precise location data to: find nearby restaurants, calculate delivery times and fees, and improve delivery accuracy. You can disable location services in your device settings, but some features may not work properly.',
  },
  {
    title: '9. Children\'s Privacy',
    content: 'Zesty is not intended for users under 18 years of age. We do not knowingly collect information from children. If we become aware that a child has provided us with personal information, we will take steps to delete it immediately. Contact us if you believe a child has provided data.',
  },
  {
    title: '10. International Transfers',
    content: 'Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for international transfers, including standard contractual clauses and data processing agreements.',
  },
  {
    title: '11. Changes to This Policy',
    content: 'We may update this Privacy Policy from time to time. We will notify you of significant changes through the App or via email. Your continued use of the App after changes take effect constitutes acceptance of the updated policy.',
  },
  {
    title: '12. Contact Us',
    content: 'For privacy-related inquiries, contact our Data Protection Officer at privacy@zesty.com or write to: Zesty Privacy Team, Dubai, UAE. We will respond to all requests within 30 days.',
  },
]

export default function PrivacyPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: 'var(--color-bg-main)' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <button
          onClick={() => navigate('/profile')}
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-text-primary)' }}>
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="font-heading text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>
          Privacy Policy
        </h1>
        <div className="h-10 w-10" />
      </div>

      {/* Last Updated */}
      <div className="px-4 pb-4">
        <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
          Last updated: January 1, 2024
        </p>
      </div>

      {/* Privacy Content */}
      <div className="px-4">
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="p-4"
            >
              <h3 className="font-heading text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>
                {section.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="px-4 pt-6">
        <div className="rounded-xl p-4 text-center" style={{ backgroundColor: 'var(--color-bg-card)' }}>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            Questions about our privacy practices?
          </p>
          <button
            className="mt-2 text-xs font-semibold"
            style={{ color: 'var(--color-primary-red)' }}
          >
            Contact Privacy Team
          </button>
        </div>
      </div>
    </div>
  )
}
