import { useAppSelector, useAppDispatch } from '@/hooks/useRedux'
import { removeFromCart, updateQuantity, clearCart } from '@/store/slices/cartSlice'

export default function Cart() {
  const { items, total } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
        <a href="/menu" className="mt-4 text-orange-500 hover:underline">
          Browse Menu
        </a>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <button onClick={() => dispatch(clearCart())} className="text-red-500 hover:underline">
          Clear Cart
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.food.id} className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-4">
              <img src={item.food.image} alt={item.food.name} className="h-16 w-16 rounded object-cover" />
              <div>
                <h3 className="font-semibold">{item.food.name}</h3>
                <p className="text-gray-500">${item.food.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(updateQuantity({ id: item.food.id, quantity: item.quantity - 1 }))}
                  className="rounded border px-2 py-1"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(updateQuantity({ id: item.food.id, quantity: item.quantity + 1 }))}
                  className="rounded border px-2 py-1"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.food.id))}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border p-6">
        <div className="flex items-center justify-between text-xl font-bold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="mt-4 w-full rounded-lg bg-orange-500 py-3 text-white transition-colors hover:bg-orange-600">
          Checkout
        </button>
      </div>
    </div>
  )
}
