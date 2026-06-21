import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SplashPage() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const enterTimer = setTimeout(() => setVisible(true), 100)
    const exitTimer = setTimeout(() => setExiting(true), 2000)
    const navTimer = setTimeout(() => navigate('/onboarding/1'), 2600)
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
        transition: exiting ? 'transform 0.6s cubic-bezier(0.4, 0, 1, 1)' : 'none',
        transform: exiting ? 'translateY(-100%)' : 'translateY(0)',
        position: 'fixed',
        inset: 0,
        zIndex: 50,
      }}
    >
      {/* Logo + Brand */}
      <div
        className="flex flex-col items-center gap-5"
        style={{
          transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)',
        }}
      >
        <img
          src="/logo.png"
          alt="Zesty Logo"
          className="w-60 h-60 object-contain"
        />
      </div>
    </div>
  )
}
