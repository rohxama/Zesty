import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const foodImages = [
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300',
  'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300',
  'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300',
  'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=300',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300',
  'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=300',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300',
  'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=300',
  'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300',
]

export default function Onboarding1Page() {
  const navigate = useNavigate()

  useEffect(() => {
    const navTimer = setTimeout(() => navigate('/onboarding/2'), 3000)
    return () => clearTimeout(navTimer)
  }, [navigate])

  return (
    <div className="relative flex min-h-screen flex-col" style={{ backgroundColor: 'var(--color-bg-main)' }}>
      {/* Skip Button */}
      <button
        onClick={() => navigate('/signin')}
        className="absolute right-4 top-4 z-20 rounded-full px-5 py-2 font-body text-sm font-semibold"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.40)',
          color: 'var(--color-text-primary)',
        }}
      >
        Skip
      </button>

      {/* Image grid with top cut-off and bottom overlay */}
      <div className="relative" style={{ marginTop: '-60px' }}>
        <div
          className="grid gap-3 px-4"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto',
          }}
        >
          {foodImages.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl" style={{ aspectRatio: '1' }}>
              <img
                src={src}
                alt={`Food ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Gradient overlay at bottom of grid */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, var(--color-bg-main) 100%)',
          }}
        />
      </div>

      {/* Text Content */}
      <div className="mt-6 px-6">
        <h1
          className="font-heading text-3xl font-bold text-center"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Choose your meal!
        </h1>
        <p
          className="mt-3 text-sm leading-relaxed text-center"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Discover delicious meals from your favorite restaurants in just a few taps
        </p>
      </div>

      {/* Progress Dots */}
      <div className="mt-auto px-6 pb-10">
        <div className="flex justify-center gap-2">
          <div className="h-2 w-2 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--color-bg-hover)' }} />
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--color-bg-hover)' }} />
        </div>
      </div>
    </div>
  )
}
