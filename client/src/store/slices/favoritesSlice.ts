import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { FoodItem } from '@/types'

interface FavoritesState {
  items: FoodItem[]
}

const loadFavorites = (): FoodItem[] => {
  try {
    const saved = localStorage.getItem('zesty_favorites')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

const saveFavorites = (items: FoodItem[]) => {
  localStorage.setItem('zesty_favorites', JSON.stringify(items))
}

const initialState: FavoritesState = {
  items: loadFavorites(),
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<FoodItem>) => {
      const exists = state.items.find((item) => item.id === action.payload.id)
      if (exists) {
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      } else {
        state.items.push(action.payload)
      }
      saveFavorites(state.items)
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      saveFavorites(state.items)
    },
    clearFavorites: (state) => {
      state.items = []
      saveFavorites(state.items)
    },
  },
})

export const { toggleFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
