import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '@/hooks/useRedux'
import { removeFavorite } from '@/store/slices/favoritesSlice'

export default function FavoritesPage() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const favorites = useAppSelector((state) => state.favorites.items)

  const handleRemove = (id: string) => {
    dispatch(removeFavorite(id))
  }

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: 'var(--color-bg-main)' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <button
          onClick={() => navigate('/profile')}
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-text-primary)' }}>
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="font-heading text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>
          Favourites
        </h1>
        <div className="h-10 w-10" />
      </div>

      {/* Favorites List */}
      <div className="px-4 pt-2">
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center pt-20">
            <div className="flex h-20 w-20 items-center justify-center rounded-full" style={{ backgroundColor: 'var(--color-bg-card)' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </div>
            <p className="mt-4 font-heading text-base font-semibold" style={{ color: 'var(--color-text-primary)' }}>
              No favourites yet
            </p>
            <p className="mt-1 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              Tap the heart icon on any meal to add it here
            </p>
            <button
              onClick={() => navigate('/categories')}
              className="btn-primary mt-6"
            >
              Browse Meals
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {favorites.map((meal) => (
              <div
                key={meal.id}
                className="flex items-center gap-3 rounded-xl p-3"
                style={{ backgroundColor: 'var(--color-bg-card)' }}
              >
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="h-16 w-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-heading text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                    {meal.name}
                  </h3>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {meal.category}
                  </p>
                  <p className="mt-1 text-sm font-bold" style={{ color: 'var(--color-primary-red)' }}>
                    ${meal.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => navigate(`/meal/${meal.id}`)}
                    className="flex h-8 w-8 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'var(--color-bg-hover)' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-primary)" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleRemove(meal.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'var(--color-bg-hover)' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF4D4D" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
