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
          onClick={() => navigate('/onboarding')}
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
            style={{ color: 'var(--color-text-primary)' }}
          >
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-6">
        {/* Image */}
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400"
            alt="Delivery Person"
            className="h-64 w-64 rounded-3xl object-cover"
          />
        </div>

        {/* Text Content */}
        <h1
          className="heading-xl mb-4 text-center"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Get a special offer!
        </h1>
        <p
          className="text-base max-w-sm text-center"
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
            className="btn-secondary flex-1"
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
