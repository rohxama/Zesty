import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const menuItems = [
  { icon: 'info', label: 'About Inggros', subtitle: 'About company restaurant' },
  { icon: 'language', label: 'Language', subtitle: 'English' },
  { icon: 'heart', label: 'Favourites', subtitle: ' favourite food items' },
  { icon: 'settings', label: 'Settings', subtitle: '' },
  { icon: 'faq', label: 'FAQ', subtitle: 'Consult FAQs' },
  { icon: 'terms', label: 'Terms Of Use', subtitle: '' },
  { icon: 'privacy', label: 'Privacy Policy', subtitle: '' },
]

export default function ProfilePage() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(true)

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'info':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        )
      case 'language':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          </svg>
        )
      case 'heart':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        )
      case 'settings':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        )
      case 'faq':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        )
      case 'terms':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        )
      case 'privacy':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        )
      default:
        return null
    }
  }

  const getIconBg = (icon: string) => {
    switch (icon) {
      case 'info': return '#FF6B6B'
      case 'language': return '#4ECDC4'
      case 'heart': return '#FF6B6B'
      case 'settings': return '#95A5A6'
      case 'faq': return '#3498DB'
      case 'terms': return '#E74C3C'
      case 'privacy': return '#2ECC71'
      default: return '#FF4D4D'
    }
  }

  return (
    <div
      className="min-h-screen pb-24"
      style={{ backgroundColor: 'var(--color-bg-main)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <button
          onClick={() => navigate('/home')}
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
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
        </button>
      </div>

      {/* Profile Info */}
      <div className="px-4 pt-2">
        <div
          className="flex items-center gap-4 rounded-xl p-4"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        >
          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-full" style={{ background: 'var(--gradient-primary)' }}>
              <span className="text-xl font-bold text-white">A</span>
            </div>
          </div>
          <div className="flex-1">
            <h2
              className="font-heading text-base font-semibold"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Abdullah
            </h2>
          </div>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full"
            style={{ backgroundColor: 'var(--color-bg-hover)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-text-muted)' }}>
              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Wallet Balance */}
      <div className="px-4 pt-4">
        <div
          className="rounded-xl p-4"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        >
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Wallet Balance</p>
          <p className="mt-1 font-heading text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>$582.00</p>
        </div>
      </div>

      {/* Dark Mode */}
      <div className="px-4 pt-4">
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

      {/* Menu Items */}
      <div className="px-4 pt-4">
        <div className="space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="flex w-full items-center gap-4 rounded-xl p-4"
              style={{ backgroundColor: 'var(--color-bg-card)' }}
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ backgroundColor: getIconBg(item.icon) }}
              >
                {getIcon(item.icon)}
              </div>
              <div className="flex-1 text-left">
                <span
                  className="font-body text-sm font-medium"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {item.label}
                </span>
                {item.subtitle && (
                  <p className="mt-0.5 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {item.subtitle}
                  </p>
                )}
              </div>
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
