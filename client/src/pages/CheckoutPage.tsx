import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function CheckoutPage() {
  const navigate = useNavigate()
  const [selectedAddress, setSelectedAddress] = useState('home')
  const [selectedPayment, setSelectedPayment] = useState('cash')

  const subtotal = 74.00
  const delivery = 10.00
  const total = subtotal + delivery

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
          Checkout
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

      {/* Shipping Address */}
      <div className="px-4 pt-4">
        <h2
          className="heading-sm mb-4"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Shipping Address
        </h2>
        <div className="space-y-3">
          {/* Home Address */}
          <button
            onClick={() => setSelectedAddress('home')}
            className="flex w-full items-center gap-4 rounded-xl p-4"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              border: selectedAddress === 'home'
                ? '2px solid var(--color-primary-red)'
                : '1px solid var(--color-border-color)',
            }}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <h3
                className="font-body font-semibold"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Home
              </h3>
              <p
                className="text-sm mt-1"
                style={{ color: 'var(--color-text-muted)' }}
              >
                219, Alexander Key, New York
              </p>
            </div>
            <div
              className="flex h-6 w-6 items-center justify-center rounded-full"
              style={{
                backgroundColor: selectedAddress === 'home'
                  ? 'var(--color-primary-red)'
                  : 'var(--color-bg-hover)',
              }}
            >
              {selectedAddress === 'home' && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          </button>

          {/* Work Address */}
          <button
            onClick={() => setSelectedAddress('work')}
            className="flex w-full items-center gap-4 rounded-xl p-4"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              border: selectedAddress === 'work'
                ? '2px solid var(--color-primary-red)'
                : '1px solid var(--color-border-color)',
            }}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl"
              style={{
                backgroundColor: selectedAddress === 'work'
                  ? 'var(--color-bg-hover)'
                  : 'var(--color-bg-hover)',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <h3
                className="font-body font-semibold"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Work
              </h3>
              <p
                className="text-sm mt-1"
                style={{ color: 'var(--color-text-muted)' }}
              >
                164, Glen Avenue, Dream City
              </p>
            </div>
            <div
              className="flex h-6 w-6 items-center justify-center rounded-full"
              style={{
                backgroundColor: selectedAddress === 'work'
                  ? 'var(--color-primary-red)'
                  : 'var(--color-bg-hover)',
              }}
            >
              {selectedAddress === 'work' && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Payment Method */}
      <div className="px-4 pt-6">
        <h2
          className="heading-sm mb-4"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Payment Method
        </h2>
        <div className="space-y-3">
          {/* Cash */}
          <button
            onClick={() => setSelectedPayment('cash')}
            className="flex w-full items-center gap-4 rounded-xl p-4"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              border: selectedPayment === 'cash'
                ? '2px solid var(--color-primary-red)'
                : '1px solid var(--color-border-color)',
            }}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <h3
                className="font-body font-semibold"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Cash
              </h3>
            </div>
            <div
              className="flex h-6 w-6 items-center justify-center rounded-full"
              style={{
                backgroundColor: selectedPayment === 'cash'
                  ? 'var(--color-primary-red)'
                  : 'var(--color-bg-hover)',
              }}
            >
              {selectedPayment === 'cash' && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          </button>

          {/* Credit Card */}
          <button
            onClick={() => setSelectedPayment('card')}
            className="flex w-full items-center gap-4 rounded-xl p-4"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              border: selectedPayment === 'card'
                ? '2px solid var(--color-primary-red)'
                : '1px solid var(--color-border-color)',
            }}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl"
              style={{
                backgroundColor: selectedPayment === 'card'
                  ? 'var(--color-bg-hover)'
                  : 'var(--color-bg-hover)',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <h3
                className="font-body font-semibold"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Credit/Debit Card
              </h3>
            </div>
            <div
              className="flex h-6 w-6 items-center justify-center rounded-full"
              style={{
                backgroundColor: selectedPayment === 'card'
                  ? 'var(--color-primary-red)'
                  : 'var(--color-bg-hover)',
              }}
            >
              {selectedPayment === 'card' && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          </button>

          {/* E-vouchers */}
          <button
            onClick={() => setSelectedPayment('voucher')}
            className="flex w-full items-center gap-4 rounded-xl p-4"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              border: selectedPayment === 'voucher'
                ? '2px solid var(--color-primary-red)'
                : '1px solid var(--color-border-color)',
            }}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl"
              style={{
                backgroundColor: selectedPayment === 'voucher'
                  ? 'var(--color-bg-hover)'
                  : 'var(--color-bg-hover)',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4" />
                <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                <path d="M18 12a2 2 0 000 4h4v-4h-4z" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <h3
                className="font-body font-semibold"
                style={{ color: 'var(--color-text-primary)' }}
              >
                E-vouchers
              </h3>
            </div>
            <div
              className="flex h-6 w-6 items-center justify-center rounded-full"
              style={{
                backgroundColor: selectedPayment === 'voucher'
                  ? 'var(--color-primary-red)'
                  : 'var(--color-bg-hover)',
              }}
            >
              {selectedPayment === 'voucher' && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Order Summary */}
      <div className="px-4 pt-6">
        <h2
          className="heading-sm mb-4"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Order Summary
        </h2>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span
              className="text-base"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Subtotal
            </span>
            <span
              className="font-body font-medium"
              style={{ color: 'var(--color-text-primary)' }}
            >
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span
              className="text-base"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Delivery
            </span>
            <span
              className="font-body font-medium"
              style={{ color: 'var(--color-text-primary)' }}
            >
              ${delivery.toFixed(2)}
            </span>
          </div>
          <div
            className="border-t pt-3"
            style={{ borderColor: 'var(--color-border-color)' }}
          >
            <div className="flex justify-between">
              <span
                className="heading-sm"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Total
              </span>
              <span className="price-lg">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Button */}
      <div
        className="fixed bottom-0 left-0 right-0 border-t p-4"
        style={{
          backgroundColor: 'var(--color-bg-card)',
          borderColor: 'var(--color-border-color)',
        }}
      >
        <button
          onClick={() => navigate('/order-done')}
          className="btn-primary w-full"
        >
          Confirmation
        </button>
      </div>
    </div>
  )
}
