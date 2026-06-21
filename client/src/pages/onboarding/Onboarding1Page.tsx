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
  'https://images.unsplash.com/photo-1432139509613-5c4255a1d197?w=300',
]

export default function Onboarding1Page() {
  const navigate = useNavigate()

  useEffect(() => {
    const navTimer = setTimeout(() => navigate('/onboarding/2'), 3000)
    return () => clearTimeout(navTimer)
  }, [navigate])

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: 'var(--color-bg-main)' }}
    >
      <div className="flex-1 px-6">
        <div className="grid grid-cols-3 gap-2">
          {foodImages.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-xl">
              <img src={src} alt={`Food ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <h1 className="mt-6 font-heading text-3xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
          Choose your meal!
        </h1>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          Discover delicious meals from your favorite restaurants in just a few taps
        </p>
      </div>
      <div className="px-6 pb-10">
        <div className="flex justify-center gap-2">
          <div className="h-2 w-8 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--color-bg-hover)' }} />
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--color-bg-hover)' }} />
        </div>
      </div>
    </div>
  )
}
