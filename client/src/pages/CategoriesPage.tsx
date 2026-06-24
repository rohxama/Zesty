import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Search } from 'lucide-react'
import { allMealsList } from '@/data/meals'

const categories = [
  { id: 'burgers', name: 'Burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' },
  { id: 'pizza', name: 'Pizza', image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400' },
  { id: 'chicken', name: 'Chicken', image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400' },
  { id: 'grill', name: 'Grill', image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400' },
  { id: 'sushi', name: 'Sushi', image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400' },
  { id: 'shawarma', name: 'Shawarma', image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400' },
]

const getCategoryCount = (categoryName: string) =>
  allMealsList.filter((m) => m.category.toLowerCase() === categoryName.toLowerCase()).length

const getCategoryMeals = (categoryName: string) =>
  allMealsList.filter((m) => m.category.toLowerCase() === categoryName.toLowerCase())

export default function CategoriesPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const filteredMeals = useMemo(() => {
    if (!searchQuery.trim()) return allMealsList
    const q = searchQuery.toLowerCase()
    return allMealsList.filter(
      (meal) =>
        meal.name.toLowerCase().includes(q) ||
        meal.restaurant.toLowerCase().includes(q) ||
        meal.category.toLowerCase().includes(q)
    )
  }, [searchQuery])

  const categoryMeals = useMemo(() => {
    if (!selectedCategory) return []
    return getCategoryMeals(selectedCategory)
  }, [selectedCategory])

  const category = categories.find((c) => c.id === selectedCategory)

  // Search view
  if (isSearching) {
    return (
      <div className="min-h-screen pb-24" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => { setIsSearching(false); setSearchQuery('') }}
            className="flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0"
            style={{ backgroundColor: 'var(--color-bg-card)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-text-primary)' }}>
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex flex-1 items-center gap-2 rounded-2xl px-4 py-2.5" style={{ backgroundColor: 'var(--color-bg-card)' }}>
            <Search size={16} style={{ color: 'var(--color-text-muted)' }} />
            <input
              type="text"
              placeholder="Search meals, restaurants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="flex-1 bg-transparent text-sm outline-none"
              style={{ color: 'var(--color-text-primary)' }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="px-4">
          {searchQuery && (
            <p className="mb-3 text-xs" style={{ color: 'var(--color-text-muted)' }}>
              {filteredMeals.length} results found
            </p>
          )}
          <div className="flex flex-col gap-4">
            {filteredMeals.map((meal) => (
              <button
                key={meal.id}
                onClick={() => navigate(`/meal/${meal.id}`)}
                className="flex overflow-hidden rounded-2xl text-left"
                style={{ backgroundColor: 'var(--color-bg-card)' }}
              >
                <div className="relative h-24 w-24 flex-shrink-0">
                  <img src={meal.image} alt={meal.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col justify-center p-3">
                  <h3 className="font-heading text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                    {meal.name}
                  </h3>
                  <p className="mt-0.5 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {meal.restaurant}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold" style={{ color: 'var(--color-primary-red)' }}>
                      ${meal.price.toFixed(2)}
                    </span>
                    <div className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-secondary-orange)">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span className="text-xs font-medium" style={{ color: 'var(--color-text-primary)' }}>
                        {meal.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          {searchQuery && filteredMeals.length === 0 && (
            <div className="flex flex-col items-center pt-20">
              <Search size={48} style={{ color: 'var(--color-text-muted)' }} />
              <p className="mt-4 font-heading text-base font-semibold" style={{ color: 'var(--color-text-primary)' }}>No meals found</p>
              <p className="mt-1 text-sm" style={{ color: 'var(--color-text-muted)' }}>Try a different search term</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Category meals view
  if (selectedCategory) {
    return (
      <div className="min-h-screen pb-24" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="flex items-center justify-between px-4 py-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: 'var(--color-bg-card)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-text-primary)' }}>
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="font-heading text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>
            {category?.name}
          </h1>
          <button
            onClick={() => setIsSearching(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: 'var(--color-bg-card)' }}
          >
            <Search size={18} style={{ color: 'var(--color-text-primary)' }} />
          </button>
        </div>

        <div className="px-4 pt-2">
          <p className="mb-3 text-xs" style={{ color: 'var(--color-text-muted)' }}>
            {categoryMeals.length} {t('categories.meals')}
          </p>
          <div className="flex flex-col gap-4">
            {categoryMeals.map((meal) => (
              <button
                key={meal.id}
                onClick={() => navigate(`/meal/${meal.id}`)}
                className="flex overflow-hidden rounded-2xl text-left"
                style={{ backgroundColor: 'var(--color-bg-card)' }}
              >
                <div className="relative h-24 w-24 flex-shrink-0">
                  <img src={meal.image} alt={meal.name} className="h-full w-full object-cover" />
                  <button
                    className="absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'var(--color-bg-card)' }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-primary-red)" stroke="var(--color-primary-red)" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-1 flex-col justify-center p-3">
                  <h3 className="font-heading text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                    {meal.name}
                  </h3>
                  <p className="mt-0.5 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {meal.restaurant}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold" style={{ color: 'var(--color-primary-red)' }}>
                      ${meal.price.toFixed(2)}
                    </span>
                    <div className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-secondary-orange)">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span className="text-xs font-medium" style={{ color: 'var(--color-text-primary)' }}>
                        {meal.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Categories grid view
  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: 'var(--color-bg-main)' }}>
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
        <h1 className="font-heading text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>
          {t('categories.title')}
        </h1>
        <button
          onClick={() => setIsSearching(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        >
          <Search size={18} style={{ color: 'var(--color-text-primary)' }} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 pt-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category.id)}
            className="card flex flex-col items-center justify-center p-6 transition-all duration-200 hover:scale-[1.02]"
          >
            <div className="mb-3 h-24 w-24 overflow-hidden rounded-full">
              <img src={category.image} alt={category.name} className="h-full w-full object-cover" />
            </div>
            <h3 className="font-heading text-base font-semibold" style={{ color: 'var(--color-text-primary)' }}>
              {category.name}
            </h3>
            <p className="mt-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
              {getCategoryCount(category.name)} {t('categories.meals')}
            </p>
          </button>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 border-t px-4 py-3" style={{ backgroundColor: 'var(--color-bg-card)', borderColor: 'var(--color-border-color)' }}>
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center gap-1" onClick={() => navigate('/home')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-text-muted)' }}>
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{t('navigation.home')}</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-primary-red)' }}>
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <span className="text-xs font-medium" style={{ color: 'var(--color-primary-red)' }}>{t('navigation.categories')}</span>
          </button>
          <button className="flex flex-col items-center gap-1" onClick={() => navigate('/cart')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-text-muted)' }}>
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
            <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{t('navigation.myCart')}</span>
          </button>
          <button className="flex flex-col items-center gap-1" onClick={() => navigate('/profile')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-text-muted)' }}>
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{t('navigation.profile')}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
