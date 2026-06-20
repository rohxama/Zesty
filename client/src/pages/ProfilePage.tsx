import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function ProfilePage() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(true)

  const menuItems = [
    { icon: '👤', label: 'Edit Profile' },
    { icon: '📍', label: 'Shipping Address' },
    { icon: '🕐', label: 'Order History' },
    { icon: '⚙️', label: 'Settings' },
    { icon: '❓', label: 'Help Center' },
  ]

  return (
    <div
      className="min-h-screen pb-32"
      style={{ backgroundColor: 'var(--color-bg-main)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-text-primary)' }}>
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1
          className="font-heading text-lg font-bold"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Profile
        </h1>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-text-primary)' }}>
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>
      </div>

      {/* Profile Info */}
      <div className="px-4 pt-4">
        <div
          className="flex items-center gap-4 rounded-xl p-4"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        >
          {/* Avatar */}
          <div className="relative">
            <div className="flex h-16 w-16 items-center justify-center rounded-full" style={{ background: 'var(--gradient-primary)' }}>
              <span className="text-2xl font-bold text-white">A</span>
            </div>
            <div
              className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full"
              style={{ backgroundColor: 'var(--color-primary-red)' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </div>
          </div>

          {/* Name and Email */}
          <div className="flex-1">
            <h2
              className="font-heading text-base font-bold"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Alex Jacob
            </h2>
            <p
              className="mt-1 text-sm"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              alexjacob@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 pt-6">
        <div className="space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="flex w-full items-center gap-4 rounded-xl p-4"
              style={{ backgroundColor: 'var(--color-bg-card)' }}
            >
              <span className="text-xl">{item.icon}</span>
              <span
                className="font-body text-sm font-medium"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {item.label}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="ml-auto"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="px-4 pt-6">
        <div
          className="flex items-center justify-between rounded-xl p-4"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        >
          <span
            className="font-body text-sm font-medium"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Dark Mode
          </span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative h-7 w-12 rounded-full transition-colors"
            style={{
              backgroundColor: darkMode ? 'var(--color-primary-red)' : 'var(--color-bg-hover)',
            }}
          >
            <div
              className="absolute top-1 h-5 w-5 rounded-full bg-white transition-transform"
              style={{
                transform: darkMode ? 'translateX(24px)' : 'translateX(4px)',
              }}
            />
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="px-4 pt-4">
        <button
          onClick={() => navigate('/signin')}
          className="flex w-full items-center justify-center gap-2 rounded-xl py-4"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ color: 'var(--color-primary-red)' }}
          >
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span
            className="font-body text-sm font-medium"
            style={{ color: 'var(--color-primary-red)' }}
          >
            Log Out
          </span>
        </button>
      </div>

      {/* Bottom Navigation */}
      <div
        className="fixed bottom-0 left-0 right-0 border-t px-4 py-3"
        style={{
          backgroundColor: 'var(--color-bg-card)',
          borderColor: 'var(--color-border-color)',
        }}
      >
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center gap-1" onClick={() => navigate('/home')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-text-muted)' }}>
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Home</span>
          </button>
          <button className="flex flex-col items-center gap-1" onClick={() => navigate('/categories')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-text-muted)' }}>
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Categories</span>
          </button>
          <button className="flex flex-col items-center gap-1" onClick={() => navigate('/cart')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-text-muted)' }}>
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
            <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>My Cart</span>
          </button>
          <button className="flex flex-col items-center gap-1" onClick={() => navigate('/profile')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-primary-red)' }}>
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-xs font-semibold" style={{ color: 'var(--color-primary-red)' }}>Profile</span>
          </button>
        </div>
      </div>
    </div>
  )
}
