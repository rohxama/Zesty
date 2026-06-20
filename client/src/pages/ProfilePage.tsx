import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const menuItems = [
  {
    name: 'My Wagba',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    color: 'var(--color-primary-red)',
  },
  {
    name: 'Wallet Balance',
    value: '$560.00',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 6L2 7" />
      </svg>
    ),
    color: 'var(--color-secondary-orange)',
  },
  {
    name: 'Dark Mode',
    isToggle: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    ),
    color: '#8B5CF6',
  },
  {
    name: 'About Wagba',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
    color: 'var(--color-primary-red)',
  },
  {
    name: 'Language',
    value: 'English',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    color: 'var(--color-secondary-orange)',
  },
  {
    name: 'Favorites',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    color: 'var(--color-primary-red)',
  },
  {
    name: 'Settings',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    color: 'var(--color-text-muted)',
  },
  {
    name: 'Log Out',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
    ),
    color: 'var(--color-primary-red)',
  },
]

export default function ProfilePage() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div
      className="min-h-screen pb-24"
      style={{ backgroundColor: 'var(--color-bg-main)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <button
          onClick={() => navigate(-1)}
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
        <h1
          className="heading-md"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Profile
        </h1>
        <button
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
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>
      </div>

      {/* Profile Avatar */}
      <div className="flex flex-col items-center px-4 pt-4">
        <div className="relative">
          <div
            className="flex h-24 w-24 items-center justify-center rounded-full"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <button
            className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
        </div>
        <h2
          className="font-heading text-xl font-bold mt-4"
          style={{ color: 'var(--color-text-primary)' }}
        >
          John Anderson
        </h2>
        <p
          className="text-sm mt-1"
          style={{ color: 'var(--color-text-muted)' }}
        >
          +1 234 567 890
        </p>
      </div>

      {/* Menu Items */}
      <div className="px-4 pt-8">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="flex w-full items-center gap-4 rounded-xl p-4 transition-colors"
              style={{ backgroundColor: 'var(--color-bg-card)' }}
              onClick={() => {
                if (item.name === 'Dark Mode') {
                  setDarkMode(!darkMode)
                }
              }}
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{
                  backgroundColor: `${item.color}20`,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>
              <span
                className="flex-1 text-left font-body font-medium"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {item.name}
              </span>
              {item.value && (
                <span
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {item.value}
                </span>
              )}
              {item.isToggle ? (
                <div
                  className="relative h-6 w-11 rounded-full transition-colors"
                  style={{
                    backgroundColor: darkMode
                      ? 'var(--color-primary-red)'
                      : 'var(--color-bg-hover)',
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setDarkMode(!darkMode)
                  }}
                >
                  <div
                    className="absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform"
                    style={{
                      transform: darkMode ? 'translateX(22px)' : 'translateX(2px)',
                    }}
                  />
                </div>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              )}
            </button>
          ))}
        </div>
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
          <button
            className="flex flex-col items-center gap-1"
            onClick={() => navigate('/home')}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span
              className="text-xs"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Home
            </span>
          </button>
          <button
            className="flex flex-col items-center gap-1"
            onClick={() => navigate('/categories')}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <span
              className="text-xs"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Categories
            </span>
          </button>
          <button
            className="flex flex-col items-center gap-1"
            onClick={() => navigate('/cart')}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
            <span
              className="text-xs"
              style={{ color: 'var(--color-text-muted)' }}
            >
              My Cart
            </span>
          </button>
          <button
            className="flex flex-col items-center gap-1"
            onClick={() => navigate('/profile')}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ color: 'var(--color-primary-red)' }}
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span
              className="text-xs font-medium"
              style={{ color: 'var(--color-primary-red)' }}
            >
              Profile
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
