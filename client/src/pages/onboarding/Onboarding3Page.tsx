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
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: 'var(--color-bg-main)' }}
    >
      {/* Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-6">
        {/* Map Image */}
        <div
          className="mb-8 overflow-hidden rounded-3xl"
          style={{
            width: '280px',
            height: '280px',
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
            className="font-heading text-3xl font-bold"
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

      {/* Progress Dots */}
      <div className="px-6 pb-10">
        <div className="flex justify-center gap-2">
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: 'var(--color-bg-hover)' }}
          />
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: 'var(--color-bg-hover)' }}
          />
          <div
            className="h-2 w-8 rounded-full"
            style={{ background: 'var(--gradient-primary)' }}
          />
        </div>
      </div>
    </div>
  )
}
