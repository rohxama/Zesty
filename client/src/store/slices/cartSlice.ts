import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { CartItem, FoodItem } from '@/types'

interface CartState {
  items: CartItem[]
  total: number
}

const initialState: CartState = {
  items: [],
  total: 0,
}

const calculateTotal = (items: CartItem[]) =>
  items.reduce((sum, item) => sum + item.food.price * item.quantity, 0)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ food: FoodItem; quantity: number }>) => {
      const { food, quantity } = action.payload
      const existingItem = state.items.find((item) => item.food.id === food.id)
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.items.push({ food, quantity })
      }
      state.total = calculateTotal(state.items)
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.food.id !== action.payload)
      state.total = calculateTotal(state.items)
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find((item) => item.food.id === action.payload.id)
      if (item) {
        item.quantity = Math.max(0, action.payload.quantity)
        if (item.quantity === 0) {
          state.items = state.items.filter((i) => i.food.id !== action.payload.id)
        }
      }
      state.total = calculateTotal(state.items)
    },
    clearCart: (state) => {
      state.items = []
      state.total = 0
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
