import { Search, Bell } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const categories = [
  { name: 'Burger', emoji: '🍔' },
  { name: 'Pizza', emoji: '🍕' },
  { name: 'Chicken', emoji: '🍗' },
  { name: 'Salad', emoji: '🥗' },
]

const popularMeals = [
  {
    id: '1',
    name: 'Jumbo Burger',
    restaurant: 'Burger Factory',
    price: 12.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
  },
  {
    id: '2',
    name: 'Margherita Pizza',
    restaurant: 'Pizza Palace',
    price: 14.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400',
  },
]

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div
      className="min-h-screen pb-24"
      style={{ backgroundColor: 'var(--color-bg-main)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        >
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            style={{ color: 'var(--color-text-primary)' }}
          >
            <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-2 rounded-full px-4 py-2"
            style={{ backgroundColor: 'var(--color-bg-card)' }}
          >
            <svg
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              style={{ color: 'var(--color-primary-red)' }}
            >
              <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="currentColor"/>
            </svg>
            <span
              className="text-sm font-medium"
              style={{ color: 'var(--color-text-primary)' }}
            >
              cairo, Egypt
            </span>
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: 'var(--color-bg-card)' }}
          >
            <Bell size={18} style={{ color: 'var(--color-text-primary)' }} />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 pb-4">
        <div
          className="flex items-center gap-3 rounded-2xl px-4 py-3"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        >
          <Search size={18} style={{ color: 'var(--color-text-muted)' }} />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent text-sm outline-none"
            style={{ color: 'var(--color-text-primary)' }}
          />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14" />
              <line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" />
              <line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
          </button>
        </div>
      </div>

      {/* What do you want section */}
      <div className="px-4 pb-6">
        <h2
          className="font-heading text-lg font-bold"
          style={{ color: 'var(--color-text-primary)' }}
        >
          What meal Do You Want?
        </h2>

        {/* Best Seller Banner */}
        <div
          className="relative mt-4 overflow-hidden rounded-2xl p-4"
          style={{ background: 'var(--gradient-primary)' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <span
                className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
                style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
              >
                Our Best Seller!
              </span>
              <h3 className="font-heading text-xl font-bold text-white">
                50% OFF
              </h3>
              <p className="mt-1 text-xs text-white/80">
                On your first order, use code in app
              </p>
              <button
                onClick={() => navigate('/meal/1')}
                className="mt-3 rounded-full bg-white px-4 py-2 text-xs font-semibold"
                style={{ color: 'var(--color-primary-red)' }}
              >
                Order now
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200"
              alt="Burger"
              className="h-20 w-20 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 pb-6">
        <div className="mb-4 flex items-center justify-between">
          <h2
            className="font-heading text-lg font-bold"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Categories
          </h2>
          <button
            onClick={() => navigate('/categories')}
            className="text-sm font-medium"
            style={{ color: 'var(--color-primary-red)' }}
          >
            See all
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => navigate('/categories')}
              className="flex flex-col items-center gap-2 rounded-2xl px-6 py-4 transition-all"
              style={{ backgroundColor: 'var(--color-bg-card)' }}
            >
              <span className="text-3xl">{category.emoji}</span>
              <span
                className="text-sm font-medium"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Meals */}
      <div className="px-4">
        <div className="mb-4 flex items-center justify-between">
          <h2
            className="font-heading text-lg font-bold"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Popular Meals
          </h2>
          <button
            className="text-sm font-medium"
            style={{ color: 'var(--color-primary-red)' }}
          >
            See all
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {popularMeals.map((meal) => (
            <button
              key={meal.id}
              onClick={() => navigate(`/meal/${meal.id}`)}
              className="w-48 flex-shrink-0 overflow-hidden rounded-2xl text-left"
              style={{ backgroundColor: 'var(--color-bg-card)' }}
            >
              <div className="relative h-32">
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="h-full w-full object-cover"
                />
                <button
                  className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'var(--color-bg-card)' }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="var(--color-primary-red)"
                    stroke="var(--color-primary-red)"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
              <div className="p-3">
                <h3
                  className="font-heading text-sm font-semibold"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {meal.name}
                </h3>
                <p
                  className="mt-1 text-xs"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {meal.restaurant}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span
                    className="text-sm font-bold"
                    style={{ color: 'var(--color-primary-red)' }}
                  >
                    ${meal.price.toFixed(2)}
                  </span>
                  <div className="flex items-center gap-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="var(--color-secondary-orange)"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span
                      className="text-xs font-medium"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {meal.rating}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
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
          <button className="flex flex-col items-center gap-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-primary-red)' }}>
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-xs font-medium" style={{ color: 'var(--color-primary-red)' }}>Home</span>
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
