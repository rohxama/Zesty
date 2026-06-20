import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'

const categories = [
  { name: 'Burgers', emoji: '🍔', count: 12 },
  { name: 'Pizza', emoji: '🍕', count: 8 },
  { name: 'Sushi', emoji: '🍣', count: 15 },
  { name: 'Chicken', emoji: '🍗', count: 6 },
  { name: 'Grill', emoji: '🥩', count: 10 },
  { name: 'Shawarma', emoji: '🌯', count: 9 },
]

export default function CategoriesPage() {
  const navigate = useNavigate()

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
          Categories
        </h1>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        >
          <Search size={20} style={{ color: 'var(--color-text-primary)' }} />
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 gap-4 px-4 pt-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => navigate('/categories')}
            className="card flex flex-col items-center justify-center p-6 transition-all duration-200 hover:scale-[1.02]"
          >
            <span className="mb-3 text-5xl">{category.emoji}</span>
            <h3
              className="font-heading text-lg font-semibold"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {category.name}
            </h3>
            <p
              className="text-sm mt-1"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {category.count} items
            </p>
          </button>
        ))}
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
              style={{ color: 'var(--color-primary-red)' }}
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <span
              className="text-xs font-medium"
              style={{ color: 'var(--color-primary-red)' }}
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
              style={{ color: 'var(--color-text-muted)' }}
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
            <span
              className="text-xs"
              style={{ color: 'var(--color-text-muted)' }}
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
