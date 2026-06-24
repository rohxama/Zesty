import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Onboarding2Page() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const enterTimer = setTimeout(() => setVisible(true), 100)
    const navTimer = setTimeout(() => navigate('/onboarding/3'), 3000)
    return () => {
      clearTimeout(enterTimer)
      clearTimeout(navTimer)
    }
  }, [navigate])

  return (
    <div
      className="relative flex min-h-screen flex-col"
      style={{ backgroundColor: 'var(--color-bg-main)' }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate('/onboarding/1')}
        className="absolute left-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-text-primary)' }}>
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Skip Button */}
      <button
        onClick={() => navigate('/signin')}
        className="absolute right-4 top-4 z-20 rounded-full px-5 py-2 font-body text-sm font-semibold"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          color: 'var(--color-text-primary)',
        }}
      >
        Skip
      </button>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-6">
        {/* Image */}
        <div
          className="mb-8 mt-5 overflow-hidden rounded-3xl"
          style={{
            width: '350px',
            height: '350px',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0.9)',
          }}
        >
          <img
            src="/onboarding-img2.png"
            alt="Special Offer"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div
          style={{
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <h1
            className="font-heading text-3xl font-bold text-center"
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
      </div>

      {/* Progress Dots */}
      <div className="px-6 pb-10">
        <div className="flex justify-center gap-2">
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--color-bg-hover)' }} />
          <div className="h-2 w-2 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--color-bg-hover)' }} />
        </div>
      </div>
    </div>
  )
}
