import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const faqs = [
  {
    q: 'How do I place an order?',
    a: 'Simply browse our menu, select your favorite meals, add them to your cart, and proceed to checkout. Choose your delivery address and payment method, then tap "Place Order". You\'ll receive a confirmation notification instantly.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We accept all major credit and debit cards (Visa, Mastercard, AMEX), Apple Pay, Google Pay, and cash on delivery. You can manage your payment methods in Settings > Payment Methods.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Delivery times vary by restaurant and location, but typically range from 20-45 minutes. You can track your order in real-time once it\'s confirmed. Express delivery options are available for select restaurants.',
  },
  {
    q: 'Can I cancel or modify my order?',
    a: 'You can cancel or modify your order within 5 minutes of placing it. After that, the restaurant may have already started preparing your food. Go to My Orders to manage your active orders.',
  },
  {
    q: 'What if my order arrives cold or incorrect?',
    a: 'We guarantee hot, fresh deliveries. If there\'s any issue with your order, contact our support team immediately through the app. We\'ll either redeliver or provide a full refund based on the situation.',
  },
  {
    q: 'How do I become a Zesty partner restaurant?',
    a: 'We\'re always looking for great restaurants to partner with! Visit our website at zesty.com/partner or email partner@zesty.com with your restaurant details. Our team will review and get back to you within 48 hours.',
  },
  {
    q: 'Is there a minimum order amount?',
    a: 'Minimum order amounts vary by restaurant, typically ranging from $10-$20. The minimum will be displayed before you place your order. Some restaurants offer free delivery on orders above a certain amount.',
  },
  {
    q: 'How do I apply a promo code?',
    a: 'During checkout, you\'ll see a "Promo Code" field. Enter your code there and tap "Apply". The discount will be reflected in your order total. Promo codes cannot be combined with other offers.',
  },
  {
    q: 'How do I track my delivery?',
    a: 'Once your order is confirmed, you can track it in real-time through the "My Orders" section. You\'ll see the restaurant preparation status, when the rider picks up your order, and the live location during delivery.',
  },
  {
    q: 'How do I contact customer support?',
    a: 'You can reach us through the in-app chat (tap the support icon), email at support@zesty.com, or call us at +971 50 123 4567. Our support team is available 24/7.',
  },
]

export default function FaqsPage() {
  const navigate = useNavigate()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
          FAQs
        </h1>
        <div className="h-10 w-10" />
      </div>

      {/* FAQs */}
      <div className="px-4 pt-2">
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden"
              style={{ backgroundColor: 'var(--color-bg-card)' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-4 text-left"
              >
                <span className="font-body text-sm font-medium pr-4" style={{ color: 'var(--color-text-primary)' }}>
                  {faq.q}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-text-muted)"
                  strokeWidth="2"
                  className="flex-shrink-0 transition-transform"
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4">
                  <div className="border-t" style={{ borderColor: 'var(--color-border-color)' }}>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Still Need Help */}
      <div className="px-4 pt-6">
        <div className="rounded-xl p-4 text-center" style={{ backgroundColor: 'var(--color-bg-card)' }}>
          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
            Still have questions?
          </p>
          <button
            className="mt-2 text-sm font-semibold"
            style={{ color: 'var(--color-primary-red)' }}
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  )
}
