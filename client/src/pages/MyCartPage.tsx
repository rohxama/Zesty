import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const cartItems = [
  {
    id: '1',
    name: 'Margherita Pizza',
    restaurant: 'Pizza Palace',
    price: 14.99,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=200',
  },
  {
    id: '2',
    name: 'Jumbo Burger',
    restaurant: 'Burger Factory',
    price: 42.00,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200',
  },
]

export default function MyCartPage() {
  const navigate = useNavigate()
  const [promoCode, setPromoCode] = useState('')
  const [items, setItems] = useState(cartItems)

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const delivery = 10.00
  const total = subtotal + delivery

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
          My Cart
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

      {/* Cart Items */}
      <div className="space-y-4 px-4 pt-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="card flex items-center gap-4 p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-20 w-20 rounded-xl object-cover"
            />
            <div className="flex-1">
              <h3
                className="food-name"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {item.name}
              </h3>
              <p
                className="text-sm mt-1"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {item.restaurant}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="flex h-6 w-6 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'var(--color-bg-hover)' }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <span
                  className="w-6 text-center font-body font-medium"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="flex h-6 w-6 items-center justify-center rounded-full"
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="text-right">
              <span className="price-md">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Promo Code */}
      <div className="px-4 pt-6">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter Promo Code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="input flex-1"
          />
          <button
            className="rounded-xl px-6 py-3 font-semibold text-white"
            style={{ background: 'var(--gradient-primary)' }}
          >
            Apply
          </button>
        </div>
      </div>

      {/* Order Summary */}
      <div className="px-4 pt-6">
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

      {/* Checkout Button */}
      <div className="px-4 pt-6">
        <button
          onClick={() => navigate('/checkout')}
          className="btn-primary w-full"
        >
          Proceed To Checkout
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
              style={{ color: 'var(--color-primary-red)' }}
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
            <span
              className="text-xs font-medium"
              style={{ color: 'var(--color-primary-red)' }}
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
              style={{ color: 'var(--color-text-muted)' }}
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span
              className="text-xs"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Profile
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
