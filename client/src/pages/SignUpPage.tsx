import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import api from '@/api/axios'

export default function SignUpPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return

    setLoading(true)
    try {
      const response = await api.post('/auth/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })

      if (response.data.success) {
        navigate('/signin')
      }
    } catch (error: any) {
      const message = error.response?.data?.message || 'Something went wrong'
      if (message.includes('already exists')) {
        setErrors({ email: message })
      } else if (message.includes('Database not connected')) {
        setErrors({ email: 'Server is starting up. Please try again in a moment.' })
      } else {
        setErrors({ email: message })
      }
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: 'var(--color-bg-main)' }}
    >
      {/* Content */}
      <div className="flex flex-1 flex-col px-6 pt-12">
        {/* Header */}
        <h1
          className="font-heading text-3xl font-bold"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Sign up
        </h1>

        {/* Form */}
        <div className="mt-8 space-y-5">
          {/* Name Field */}
          <div>
            <label
              className="mb-2 flex items-center gap-2 text-sm font-medium"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input w-full"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              style={{
                borderColor: errors.name ? 'var(--color-primary-red)' : undefined,
              }}
            />
            {errors.name && (
              <p className="mt-1 text-xs" style={{ color: 'var(--color-primary-red)' }}>{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              className="mb-2 flex items-center gap-2 text-sm font-medium"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 6L2 7" />
              </svg>
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="input w-full"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              style={{
                borderColor: errors.email ? 'var(--color-primary-red)' : undefined,
              }}
            />
            {errors.email && (
              <p className="mt-1 text-xs" style={{ color: 'var(--color-primary-red)' }}>{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              className="mb-2 flex items-center gap-2 text-sm font-medium"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input w-full"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              style={{
                borderColor: errors.password ? 'var(--color-primary-red)' : undefined,
              }}
            />
            {errors.password && (
              <p className="mt-1 text-xs" style={{ color: 'var(--color-primary-red)' }}>{errors.password}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              className="mb-2 flex items-center gap-2 text-sm font-medium"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input w-full"
              value={formData.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
              style={{
                borderColor: errors.confirmPassword ? 'var(--color-primary-red)' : undefined,
              }}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-xs" style={{ color: 'var(--color-primary-red)' }}>{errors.confirmPassword}</p>
            )}
          </div>

          {/* Sign Up Button */}
          <button
            onClick={handleSubmit}
            className="btn-primary w-full py-4"
            disabled={loading}
            style={{ opacity: loading ? 0.7 : 1 }}
          >
            {loading ? 'Creating account...' : 'Sign up'}
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1" style={{ backgroundColor: 'var(--color-border-color)' }} />
          <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>or sign up with</span>
          <div className="h-px flex-1" style={{ backgroundColor: 'var(--color-border-color)' }} />
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-6">
          <button
            className="flex h-14 w-14 items-center justify-center rounded-full transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--color-bg-card)' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>

          <button
            className="flex h-14 w-14 items-center justify-center rounded-full transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--color-bg-card)' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </button>

          <button
            className="flex h-14 w-14 items-center justify-center rounded-full transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--color-bg-card)' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--color-text-primary)' }}>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </button>
        </div>

        {/* Sign In Link */}
        <div className="mt-auto pb-8 text-center">
          <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
            Already have an account?{' '}
          </span>
          <button
            onClick={() => navigate('/signin')}
            className="text-sm font-semibold"
            style={{ color: 'var(--color-primary-red)' }}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  )
}
