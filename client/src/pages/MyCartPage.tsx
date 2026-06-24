import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { removeFromCart, updateQuantity as updateCartQuantity } from '@/store/slices/cartSlice'

export default function MyCartPage() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector((state) => state.cart.items)
  const [promoCode, setPromoCode] = useState('')

  const updateQuantity = (id: string, delta: number) => {
    const item = cartItems.find((i) => i.food.id === id)
    if (item) {
      dispatch(updateCartQuantity({ id, quantity: item.quantity + delta }))
    }
  }

  const removeItem = (id: string) => {
    dispatch(removeFromCart(id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.food.price * item.quantity, 0)
  const delivery = 10.00
  const total = cartItems.length > 0 ? subtotal + delivery : 0

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
          My Cart
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

      {/* Cart Items */}
      <div className="space-y-4 px-4 pt-4">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--color-text-muted)' }}>
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
            <p className="mt-4 text-sm" style={{ color: 'var(--color-text-muted)' }}>Your cart is empty</p>
          </div>
        ) : (
          cartItems.map((item) => (
          <div
            key={item.food.id}
            className="card relative p-4"
          >
            <button
              onClick={() => removeItem(item.food.id)}
              className="absolute right-3 top-3"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ color: 'var(--color-text-muted)' }}>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="flex items-center gap-4">
              <img
                src={item.food.image}
                alt={item.food.name}
                className="h-20 w-20 rounded-xl object-cover"
              />
              <div className="flex-1">
                <h3
                  className="font-heading text-sm font-semibold"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {item.food.name}
                </h3>
                <div className="mt-3 flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.food.id, -1)}
                    className="flex h-7 w-7 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'var(--color-bg-hover)' }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-text-primary)' }}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  <span
                    className="w-6 text-center font-body text-sm font-medium"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.food.id, 1)}
                    className="flex h-7 w-7 items-center justify-center rounded-full"
                    style={{ background: 'var(--gradient-primary)' }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="text-right">
                <span className="font-body text-base font-bold" style={{ color: 'var(--color-primary-red)' }}>
                  ${(item.food.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))
        )}
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
            className="rounded-xl px-6 py-3 text-sm font-semibold text-white"
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
            <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Subtotal</span>
            <span className="font-body text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
              ${subtotal.toFixed(2)}
            </span>
          </div>
         <div className="flex justify-between">
            <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Delivery: </span>
             <span className="font-body text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>${delivery.toFixed(2)}</span>
          </div>
          <div className="border-t pt-3" style={{ borderColor: 'var(--color-border-color)' }}>
            <div className="flex justify-between">
              <span className="font-heading text-base font-bold" style={{ color: 'var(--color-text-primary)' }}>Total</span>
              <span className="font-body text-xl font-bold" style={{ color: 'var(--color-primary-red)' }}>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="px-4 pt-6">
        <button
          onClick={() => navigate('/checkout')}
          className="btn-primary w-full py-4"
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  )
}
