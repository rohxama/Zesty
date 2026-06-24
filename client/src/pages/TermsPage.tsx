import { useNavigate } from 'react-router-dom'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing and using the Zesty application ("App"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the App. These terms apply to all users of the App, including browsers, customers, merchants, and contributors of content.',
  },
  {
    title: '2. Use of the App',
    content: 'You must be at least 18 years of age to use this App. You agree to use the App only for its intended purpose — ordering food for personal consumption. You shall not use the App for any unlawful purpose, including but not limited to fraud, harassment, or distributing harmful content.',
  },
  {
    title: '3. Account Registration',
    content: 'To place orders, you must create an account with accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. We reserve the right to suspend or terminate accounts that violate these terms.',
  },
  {
    title: '4. Orders and Payments',
    content: 'All orders placed through the App are subject to availability and acceptance by the restaurant. Prices displayed are inclusive of applicable taxes unless stated otherwise. Payment must be made through one of the accepted payment methods. We reserve the right to cancel orders that appear fraudulent or suspicious.',
  },
  {
    title: '5. Delivery',
    content: 'Delivery times are estimates and may vary based on restaurant preparation time, traffic, weather, and other factors. Zesty is not responsible for delays beyond our control. Risk of loss and title for items purchased pass to you upon delivery to the specified address.',
  },
  {
    title: '6. Cancellation and Refunds',
    content: 'You may cancel an order within 5 minutes of placement. After this window, cancellations are at the restaurant\'s discretion. Refunds for incorrect, missing, or unsatisfactory orders will be processed within 5-7 business days. We reserve the right to issue refunds as credit rather than cash refunds.',
  },
  {
    title: '7. Intellectual Property',
    content: 'All content on the App, including text, graphics, logos, images, and software, is the property of Zesty or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.',
  },
  {
    title: '8. User Content',
    content: 'By submitting reviews, ratings, or other content to the App, you grant Zesty a non-exclusive, royalty-free, perpetual license to use, modify, and display such content. You represent that you own or have the necessary rights to any content you submit.',
  },
  {
    title: '9. Limitation of Liability',
    content: 'Zesty shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App. Our total liability shall not exceed the amount paid by you for the order in question. We are not liable for the quality, safety, or hygiene of food prepared by restaurants.',
  },
  {
    title: '10. Privacy',
    content: 'Your use of the App is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal information. By using the App, you consent to the collection and use of information as described in the Privacy Policy.',
  },
  {
    title: '11. Modifications',
    content: 'Zesty reserves the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting. Your continued use of the App after changes constitutes acceptance of the modified terms. We will notify users of significant changes via email or in-app notification.',
  },
  {
    title: '12. Governing Law',
    content: 'These Terms of Use are governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes shall be resolved in the courts of Dubai, UAE.',
  },
]

export default function TermsPage() {
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
          Terms of Use
        </h1>
        <div className="h-10 w-10" />
      </div>

      {/* Last Updated */}
      <div className="px-4 pb-4">
        <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
          Last updated: January 1, 2024
        </p>
      </div>

      {/* Terms Content */}
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

      {/* Acceptance */}
      <div className="px-4 pt-6">
        <div className="rounded-xl p-4 text-center" style={{ backgroundColor: 'var(--color-bg-card)' }}>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            By using Zesty, you agree to these Terms of Use
          </p>
        </div>
      </div>
    </div>
  )
}
