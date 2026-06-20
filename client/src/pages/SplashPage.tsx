import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SplashPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding')
    }, 2500)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div
      className="flex h-screen flex-col items-center justify-center"
      style={{ backgroundColor: 'var(--color-bg-main)' }}
    >
      {/* Logo */}
      <div className="flex flex-col items-center gap-4">
        <div
          className="flex h-24 w-24 items-center justify-center rounded-3xl"
          style={{ background: 'var(--gradient-primary)' }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 10V45M20 45C20 45 25 50 30 50C35 50 40 45 40 45M40 10V45M20 20H40M20 30H40"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 10C15 10 15 20 20 20"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M45 10C45 10 45 20 40 20"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h1
          className="font-heading text-5xl font-bold"
          style={{ color: 'var(--color-primary-red)' }}
        >
          Wagba
        </h1>
      </div>

      {/* Loading Indicator */}
      <div className="mt-12">
        <div
          className="h-1 w-32 animate-pulse rounded-full"
          style={{ background: 'var(--gradient-primary)' }}
        />
      </div>
    </div>
  )
}
