import { useNavigate } from 'react-router-dom'

export default function Onboarding2Page() {
  const navigate = useNavigate()

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: 'var(--color-bg-main)' }}
    >
      {/* Back Button */}
      <div className="px-6 pt-6">
        <button
          onClick={() => navigate('/onboarding/1')}
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'var(--color-text-primary)' }}
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-6">
        {/* Image */}
        <div className="mb-8 overflow-hidden rounded-3xl" style={{ width: '280px', height: '280px' }}>
          <img
            src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400"
            alt="Delivery Person"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <h1
          className="font-heading text-3xl font-bold"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Get a special offer!
        </h1>
        <p
          className="mt-3 max-w-sm text-center text-sm leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Sign up today and enjoy exclusive discounts with a tasty deal on your first order!
        </p>
      </div>

      {/* Bottom Section */}
      <div className="px-6 pb-8">
        {/* Progress Dots */}
        <div className="mb-8 flex justify-center gap-2">
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: 'var(--color-bg-hover)' }}
          />
          <div
            className="h-2 w-8 rounded-full"
            style={{ background: 'var(--gradient-primary)' }}
          />
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: 'var(--color-bg-hover)' }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/signin')}
            className="flex-1 rounded-xl py-4 font-body font-semibold transition-all"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              color: 'var(--color-text-secondary)',
              border: '1px solid var(--color-border-color)',
            }}
          >
            Skip
          </button>
          <button
            onClick={() => navigate('/onboarding/3')}
            className="btn-primary flex-1"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
