import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SplashPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding/1')
    }, 2500)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div
      className="flex h-screen flex-col items-center justify-center"
      style={{ backgroundColor: 'var(--color-bg-main)' }}
    >
      {/* Logo */}
      <div className="flex flex-col items-center gap-3">
        {/* Fork and Knife Icon */}
        <div className="flex items-center gap-1">
          <svg
            width="48"
            height="64"
            viewBox="0 0 48 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Fork */}
            <path
              d="M8 4V20C8 24 12 28 16 28V60H12C10 60 8 58 8 56V28"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: 'var(--color-primary-red)' }}
            />
            <path
              d="M16 4V20C16 24 12 28 8 28"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: 'var(--color-primary-red)' }}
            />
            <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" style={{ color: 'var(--color-primary-red)' }} />
          </svg>
          <svg
            width="48"
            height="64"
            viewBox="0 0 48 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Knife */}
            <path
              d="M40 4C40 4 32 20 32 32C32 40 36 44 40 44V60H36C34 60 32 58 32 56V44"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: 'var(--color-secondary-orange)' }}
            />
          </svg>
        </div>
        {/* Brand Name */}
        <h1
          className="font-heading text-4xl font-bold"
          style={{ color: 'var(--color-primary-red)' }}
        >
          Wagba
        </h1>
      </div>
    </div>
  )
}
