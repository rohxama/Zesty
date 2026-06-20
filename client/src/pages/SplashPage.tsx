import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SplashPage() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const enterTimer = setTimeout(() => setVisible(true), 100)
    const exitTimer = setTimeout(() => setExiting(true), 2200)
    const navTimer = setTimeout(() => navigate('/onboarding/1'), 3000)
    return () => {
      clearTimeout(enterTimer)
      clearTimeout(exitTimer)
      clearTimeout(navTimer)
    }
  }, [navigate])

  return (
    <div
      className="flex h-screen flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundColor: 'var(--color-bg-main)',
        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease',
        transform: exiting ? 'translateX(-100%)' : 'translateX(0)',
        opacity: exiting ? 0 : 1,
      }}
    >
      {/* Logo + Brand */}
      <div
        className="flex flex-col items-center gap-5"
        style={{
          transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)',
        }}
      >
        <img
          src="/logo.svg"
          alt="Wagba Logo"
          className="w-28 h-28"
          style={{
            filter: 'drop-shadow(0 0 30px rgba(255, 77, 77, 0.3))',
          }}
        />
        <h1
          className="font-heading text-5xl font-bold tracking-tight"
          style={{
            background: 'var(--gradient-primary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Wagba
        </h1>
      </div>
    </div>
  )
}
