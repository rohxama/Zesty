import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/context/ThemeContext'

type SettingItem = {
  icon: string
  label: string
  subtitle: string
  type: string
  route?: string
}

const mainSettings = [
  {
    icon: 'notification',
    label: 'Push Notifications',
    subtitle: 'Receive order updates and alerts',
    type: 'toggle',
  },
  {
    icon: 'location',
    label: 'Location Services',
    subtitle: 'Allow app to access your location',
    type: 'toggle',
  },
  {
    icon: 'payment',
    label: 'Payment Methods',
    subtitle: 'Manage your payment options',
    type: 'arrow',
  },
  { icon: 'address', label: 'Saved Addresses', subtitle: '2 addresses saved', type: 'arrow' },
  { icon: 'currency', label: 'Currency', subtitle: 'USD ($)', type: 'arrow' },
]

const popularSettings: SettingItem[] = [
  {
    icon: 'security',
    label: 'Privacy & Security',
    subtitle: 'Manage your data and privacy',
    type: 'arrow',
  },
  { icon: 'language', label: 'Language', subtitle: 'English', type: 'arrow', route: '/languages' },
  { icon: 'help', label: 'Help & Support', subtitle: 'Get help with your account', type: 'arrow' },
  { icon: 'feedback', label: 'Send Feedback', subtitle: 'Help us improve Zesty', type: 'arrow' },
  {
    icon: 'share',
    label: 'Share Zesty',
    subtitle: 'Invite friends and earn rewards',
    type: 'arrow',
  },
  { icon: 'rate', label: 'Rate Us', subtitle: 'Rate Zesty on the App Store', type: 'arrow' },
  { icon: 'clear', label: 'Clear Cache', subtitle: '12.5 MB', type: 'arrow' },
  { icon: 'version', label: 'App Version', subtitle: 'v1.0.0', type: 'none' },
]

export default function SettingsPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { darkMode, toggleDarkMode } = useTheme()
  const [notifications, setNotifications] = useState(true)
  const [location, setLocation] = useState(false)

  const getIcon = (icon: string) => {
    const color = 'white'
    switch (icon) {
      case 'notification':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
          >
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
        )
      case 'location':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        )
      case 'payment':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
          >
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
        )
      case 'address':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        )
      case 'currency':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
          >
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
          </svg>
        )
      case 'security':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        )
      case 'language':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          </svg>
        )
      case 'help':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        )
      case 'feedback':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
          >
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )
      case 'share':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
          >
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        )
      case 'rate':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={color}
            stroke={color}
            strokeWidth="2"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        )
      case 'clear':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
          </svg>
        )
      case 'version':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        )
      default:
        return null
    }
  }

  const getIconBg = (icon: string) => {
    switch (icon) {
      case 'notification':
        return '#FF6B6B'
      case 'location':
        return '#4ECDC4'
      case 'payment':
        return '#3498DB'
      case 'address':
        return '#9B59B6'
      case 'currency':
        return '#F39C12'
      case 'security':
        return '#2ECC71'
      case 'language':
        return '#1ABC9C'
      case 'help':
        return '#3498DB'
      case 'feedback':
        return '#E74C3C'
      case 'share':
        return '#9B59B6'
      case 'rate':
        return '#F1C40F'
      case 'clear':
        return '#95A5A6'
      case 'version':
        return '#7F8C8D'
      default:
        return '#FF4D4D'
    }
  }

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: 'var(--color-bg-main)' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <button
          onClick={() => navigate('/profile')}
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
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'var(--color-text-primary)' }}
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1
          className="font-heading text-lg font-bold"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {t('settings.title')}
        </h1>
        <div className="h-10 w-10" />
      </div>

      {/* Dark Mode Toggle */}
      <div className="px-4 pb-2">
        <div
          className="flex items-center justify-between rounded-xl p-4"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full"
              style={{ backgroundColor: '#2C3E50' }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="white"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </div>
            <div>
              <span
                className="font-body text-sm font-medium"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {t('profile.darkMode')}
              </span>
              <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                {darkMode ? 'Enabled' : 'Disabled'}
              </p>
            </div>
          </div>
          <button
            onClick={toggleDarkMode}
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

      {/* Main Settings */}
      <div className="px-4 pt-4">
        <h2
          className="font-heading text-xs font-semibold uppercase tracking-wider"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Main Settings
        </h2>
        <div className="mt-3 space-y-2">
          {mainSettings.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-xl p-4"
              style={{ backgroundColor: 'var(--color-bg-card)' }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full"
                  style={{ backgroundColor: getIconBg(item.icon) }}
                >
                  {getIcon(item.icon)}
                </div>
                <div>
                  <span
                    className="font-body text-sm font-medium"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {item.label}
                  </span>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
              {item.type === 'toggle' && item.icon === 'notification' && (
                <button
                  onClick={() => setNotifications(!notifications)}
                  className="relative h-7 w-12 rounded-full transition-colors"
                  style={{
                    backgroundColor: notifications
                      ? 'var(--color-primary-red)'
                      : 'var(--color-bg-hover)',
                  }}
                >
                  <div
                    className="absolute top-1 h-5 w-5 rounded-full bg-white transition-transform"
                    style={{
                      transform: notifications ? 'translateX(24px)' : 'translateX(4px)',
                    }}
                  />
                </button>
              )}
              {item.type === 'toggle' && item.icon === 'location' && (
                <button
                  onClick={() => setLocation(!location)}
                  className="relative h-7 w-12 rounded-full transition-colors"
                  style={{
                    backgroundColor: location
                      ? 'var(--color-primary-red)'
                      : 'var(--color-bg-hover)',
                  }}
                >
                  <div
                    className="absolute top-1 h-5 w-5 rounded-full bg-white transition-transform"
                    style={{
                      transform: location ? 'translateX(24px)' : 'translateX(4px)',
                    }}
                  />
                </button>
              )}
              {item.type === 'arrow' && (
                <button
                 onClick={() => {
  navigate('/languages')
}}
                  className="flex h-8 w-8 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'var(--color-bg-hover)' }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-text-muted)"
                    strokeWidth="2"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              )}
              {item.type === 'none' && (
                <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  {item.subtitle}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Popular Settings */}
      <div className="px-4 pt-6">
        <h2
          className="font-heading text-xs font-semibold uppercase tracking-wider"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Popular Settings
        </h2>
        <div className="mt-3 space-y-2">
          {popularSettings.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-xl p-4"
              style={{ backgroundColor: 'var(--color-bg-card)' }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full"
                  style={{ backgroundColor: getIconBg(item.icon) }}
                >
                  {getIcon(item.icon)}
                </div>
                <div>
                  <span
                    className="font-body text-sm font-medium"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {item.label}
                  </span>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
              {item.type === 'arrow' && (
                <button
                onClick={() => {
  if (typeof item.route === 'string') {
    navigate(item.route)
  }
}}
                  className="flex h-8 w-8 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'var(--color-bg-hover)' }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-text-muted)"
                    strokeWidth="2"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              )}
              {item.type === 'none' && (
                <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  {item.subtitle}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sign Out */}
      <div className="px-4 pt-6">
        <button
          onClick={() => {
            localStorage.removeItem('zesty_current_user')
            navigate('/signin')
          }}
          className="flex w-full items-center justify-center gap-2 rounded-xl p-4"
          style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid #FF4D4D' }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FF4D4D"
            strokeWidth="2"
          >
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span className="font-body text-sm font-semibold" style={{ color: '#FF4D4D' }}>
            {t('settings.signOut')}
          </span>
        </button>
      </div>
    </div>
  )
}
