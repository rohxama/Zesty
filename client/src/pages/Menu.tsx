import { Search, Filter, Star, Plus } from 'lucide-react'
import { useAppDispatch } from '@/hooks/useRedux'
import { addToCart } from '@/store/slices/cartSlice'
import toast from 'react-hot-toast'
import type { FoodItem } from '@/types'

const sampleFoods: FoodItem[] = [
  {
    id: '1',
    name: 'Classic Burger',
    description: 'Juicy beef patty with fresh toppings',
    price: 12.99,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    rating: 4.8,
    reviews: 234,
    isAvailable: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Margherita Pizza',
    description: 'Fresh mozzarella, tomato sauce, basil',
    price: 14.99,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400',
    rating: 4.9,
    reviews: 189,
    isAvailable: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Salmon Sushi Roll',
    description: 'Fresh Atlantic salmon, avocado, cucumber',
    price: 16.99,
    category: 'Sushi',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400',
    rating: 4.7,
    reviews: 156,
    isAvailable: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'Caesar Salad',
    description: 'Crispy romaine, parmesan, croutons',
    price: 10.99,
    category: 'Salads',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400',
    rating: 4.6,
    reviews: 98,
    isAvailable: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '5',
    name: 'Grilled Chicken Wrap',
    description: 'Tender chicken, veggies, special sauce',
    price: 11.99,
    category: 'Wraps',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400',
    rating: 4.5,
    reviews: 112,
    isAvailable: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '6',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with molten center',
    price: 8.99,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400',
    rating: 4.9,
    reviews: 203,
    isAvailable: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

export default function Menu() {
  const dispatch = useAppDispatch()

  const handleAddToCart = (food: FoodItem) => {
    dispatch(addToCart(food))
    toast.success(`${food.name} added to cart!`)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1
          className="text-3xl font-bold"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Our Menu
        </h1>
        <p
          className="mt-2"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Discover our delicious selection of food items
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div
          className="input flex flex-1 items-center gap-2"
        >
          <Search size={20} style={{ color: 'var(--color-text-muted)' }} />
          <input
            type="text"
            placeholder="Search food items..."
            className="flex-1 bg-transparent outline-none"
            style={{ color: 'var(--color-text-primary)' }}
          />
        </div>
        <button className="btn-secondary flex items-center gap-2">
          <Filter size={18} />
          Filter
        </button>
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sampleFoods.map((food) => (
          <div
            key={food.id}
            className="card card-hover overflow-hidden transition-all duration-200"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={food.image}
                alt={food.name}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div
                className="absolute top-3 right-3 flex items-center gap-1 rounded-full px-2 py-1"
                style={{ backgroundColor: 'var(--color-bg-card)' }}
              >
                <Star
                  size={14}
                  fill="var(--color-secondary-orange)"
                  color="var(--color-secondary-orange)"
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {food.rating}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {food.name}
                </h3>
                <span
                  className="rounded-full px-2 py-1 text-xs"
                  style={{
                    backgroundColor: 'var(--color-bg-hover)',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {food.category}
                </span>
              </div>

              <p
                className="mb-4 text-sm"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {food.description}
              </p>

              <div className="flex items-center justify-between">
                <span
                  className="text-xl font-bold"
                  style={{ color: 'var(--color-primary-red)' }}
                >
                  ${food.price.toFixed(2)}
                </span>
                <button
                  onClick={() => handleAddToCart(food)}
                  className="flex items-center gap-2 rounded-xl px-4 py-2 font-medium text-white transition-all duration-200 hover:shadow-lg"
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  <Plus size={18} />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
