import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Onboarding3Page() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const enterTimer = setTimeout(() => setVisible(true), 100)
    const navTimer = setTimeout(() => navigate('/signin'), 3000)
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
        onClick={() => navigate('/onboarding/2')}
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
        {/* Map Image */}
        <div
          className="mb-8 overflow-hidden rounded-3xl"
          style={{
            width: '350px',
            height: '350px',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0.9)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400"
            alt="Map Tracking"
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
            Track your order now!
          </h1>
          <p
            className="mt-3 max-w-sm text-center text-sm leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Follow your meal in real time, from the kitchen straight to your door
          </p>
        </div>
      </div>

      {/* Progress Dots with sliding indicator */}
      <div className="px-6 pb-10">
        <div className="relative flex justify-center gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: 'var(--color-bg-hover)' }}
            />
          ))}
          <div
            className="absolute top-0 left-0 h-2 w-8 rounded-full"
            style={{
              background: 'var(--gradient-primary)',
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: 'translateX(calc(200% + 24px))',
            }}
          />
        </div>
      </div>
    </div>
  )
}
