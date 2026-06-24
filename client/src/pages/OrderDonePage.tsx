import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function OrderDonePage() {
  const navigate = useNavigate()
  const [showPopup, setShowPopup] = useState(true)

  return (
    <div
      className="relative min-h-screen pb-32"
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
          Checkout
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

      {/* Shipping Address */}
      <div className="px-4 pt-4">
        <h2
          className="font-heading text-sm font-semibold"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Shipping Address
        </h2>
        <div
          className="mt-3 flex items-center gap-4 rounded-xl p-4"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: 'var(--gradient-primary)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <div>
            <h3 className="font-body text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>Home</h3>
            <p className="mt-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>219, Alexander Key, New York</p>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="px-4 pt-6">
        <h2
          className="font-heading text-sm font-semibold"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Order Summary
        </h2>
        <div className="mt-3 space-y-3">
          <div className="flex justify-between">
            <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Subtotal</span>
            <span className="font-body text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>$74.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Delivery: $10.00</span>
          </div>
          <div className="border-t pt-3" style={{ borderColor: 'var(--color-border-color)' }}>
            <div className="flex justify-between">
              <span className="font-heading text-base font-bold" style={{ color: 'var(--color-text-primary)' }}>Total</span>
              <span className="font-body text-xl font-bold" style={{ color: 'var(--color-primary-red)' }}>$84.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Button */}
      <div className="px-4 pt-6">
        <button
          className="btn-primary w-full py-4"
          onClick={() => setShowPopup(true)}
        >
          Confirmation
        </button>
      </div>

      {/* Success Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
            onClick={() => {
              setShowPopup(false)
              navigate('/home')
            }}
          />

          {/* Modal */}
          <div
            className="relative mx-4 w-full max-w-sm rounded-3xl p-8 text-center"
            style={{ backgroundColor: 'var(--color-bg-card)' }}
          >
            {/* Emoji */}
            <div className="mb-4 text-6xl">😍</div>

            {/* Title */}
            <h2
              className="font-heading text-2xl font-bold"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Congratulation
            </h2>

            {/* Message */}
            <p
              className="mt-2 text-sm"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Your order has been confirmed successfully
            </p>

            {/* OK Button */}
            <button
              onClick={() => {
                setShowPopup(false)
                navigate('/home')
              }}
              className="btn-primary mt-8 w-full py-4"
            >
              Ok
            </button>
          </div>
        </div>
      )}

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
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-text-muted)' }}>
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Profile</span>
          </button>
        </div>
      </div>
    </div>
  )
}
