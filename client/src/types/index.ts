export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'user' | 'admin'
  createdAt: string
  updatedAt: string
}

export interface FoodItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  rating: number
  reviews: number
  isAvailable: boolean
  createdAt: string
  updatedAt: string
}

export interface CartItem {
  food: FoodItem
  quantity: number
}

export interface Order {
  id: string
  user: User
  items: CartItem[]
  total: number
  status: 'pending' | 'confirmed' | 'preparing' | 'delivering' | 'delivered'
  paymentMethod: string
  deliveryAddress: string
  createdAt: string
  updatedAt: string
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}
