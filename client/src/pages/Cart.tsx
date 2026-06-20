import { useAppSelector, useAppDispatch } from '@/hooks/useRedux'
import { removeFromCart, updateQuantity, clearCart } from '@/store/slices/cartSlice'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { items, total } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div
          className="mb-6 flex h-24 w-24 items-center justify-center rounded-full"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        >
          <ShoppingBag size={40} style={{ color: 'var(--color-text-muted)' }} />
        </div>
        <h1
          className="text-3xl font-bold"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Your Cart is Empty
        </h1>
        <p
          className="mt-2"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Looks like you haven't added anything yet
        </p>
        <Link
          to="/menu"
          className="btn-primary mt-8 flex items-center gap-2"
        >
          Browse Menu
          <ArrowRight size={18} />
        </Link>
      </div>
    )
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Cart Items */}
      <div className="space-y-4 lg:col-span-2">
        <div className="flex items-center justify-between">
          <h1
            className="text-3xl font-bold"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Your Cart
          </h1>
          <button
            onClick={() => dispatch(clearCart())}
            className="flex items-center gap-2 text-sm transition-colors"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <Trash2 size={16} />
            Clear Cart
          </button>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.food.id}
              className="card flex items-center gap-4 p-4"
            >
              <img
                src={item.food.image}
                alt={item.food.name}
                className="h-20 w-20 rounded-xl object-cover"
              />
              <div className="flex-1">
                <h3
                  className="font-semibold"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {item.food.name}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {item.food.description}
                </p>
                <p
                  className="mt-1 font-bold"
                  style={{ color: 'var(--color-primary-red)' }}
                >
                  ${item.food.price.toFixed(2)}
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={() => dispatch(removeFromCart(item.food.id))}
                  className="transition-colors"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  <Trash2 size={18} />
                </button>
                <div
                  className="flex items-center gap-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-bg-hover)' }}
                >
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.food.id,
                          quantity: item.quantity - 1,
                        }),
                      )
                    }
                    className="p-2 transition-colors hover:text-[var(--color-primary-red)]"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    <Minus size={16} />
                  </button>
                  <span
                    className="min-w-[2rem] text-center font-medium"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.food.id,
                          quantity: item.quantity + 1,
                        }),
                      )
                    }
                    className="p-2 transition-colors hover:text-[var(--color-primary-red)]"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <div className="card sticky top-24 p-6">
          <h2
            className="mb-6 text-xl font-bold"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Order Summary
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span style={{ color: 'var(--color-text-secondary)' }}>Subtotal</span>
              <span
                className="font-medium"
                style={{ color: 'var(--color-text-primary)' }}
              >
                ${total.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span style={{ color: 'var(--color-text-secondary)' }}>Delivery</span>
              <span
                className="font-medium"
                style={{ color: total >= 30 ? '#22c55e' : 'var(--color-text-primary)' }}
              >
                {total >= 30 ? 'Free' : '$4.99'}
              </span>
            </div>
            <div
              className="border-t pt-4"
              style={{ borderColor: 'var(--color-border-color)' }}
            >
              <div className="flex justify-between">
                <span
                  className="text-lg font-bold"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Total
                </span>
                <span
                  className="text-lg font-bold"
                  style={{ color: 'var(--color-primary-red)' }}
                >
                  ${(total >= 30 ? total : total + 4.99).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <button className="btn-primary mt-6 flex w-full items-center justify-center gap-2">
            Proceed to Checkout
            <ArrowRight size={18} />
          </button>

          <Link
            to="/menu"
            className="mt-4 block text-center text-sm transition-colors hover:text-[var(--color-primary-red)]"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
