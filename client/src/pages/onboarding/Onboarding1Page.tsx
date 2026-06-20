import { useNavigate } from 'react-router-dom'

export default function Onboarding1Page() {
  const navigate = useNavigate()

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: 'var(--color-bg-main)' }}
    >
      {/* Content */}
      <div className="flex-1 px-6 pt-8">
        {/* Food Image Grid */}
        <div className="mb-8 grid grid-cols-3 gap-2" style={{ height: '280px' }}>
          <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400"
              alt="Burger"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200"
              alt="Pizza"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200"
              alt="Salad"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <h1
          className="font-heading text-3xl font-bold"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Choose your meal!
        </h1>
        <p
          className="mt-3 text-sm leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Discover delicious meals from your favorite restaurants in just a few taps
        </p>
      </div>

      {/* Bottom Section */}
      <div className="px-6 pb-8">
        {/* Progress Dots */}
        <div className="mb-8 flex justify-center gap-2">
          <div
            className="h-2 w-8 rounded-full"
            style={{ background: 'var(--gradient-primary)' }}
          />
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: 'var(--color-bg-hover)' }}
          />
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: 'var(--color-bg-hover)' }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/signin')}
            className="flex-1 rounded-xl py-4 font-body font-semibold transition-all"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              color: 'var(--color-text-secondary)',
              border: '1px solid var(--color-border-color)',
            }}
          >
            Skip
          </button>
          <button
            onClick={() => navigate('/onboarding/2')}
            className="btn-primary flex-1"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
