import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const banners = [
  {
    id: 1,
    title: 'Our best Seller!',
    description: 'Loved by thousands, Your new favorite burger is here!',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    buttonText: 'Order now',
    mealId: '1',
  },
  {
    id: 2,
    title: 'Fresh Pizza!',
    description: 'Handmade dough, premium cheese, oven baked to perfection',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
    buttonText: 'Order now',
    mealId: '2',
  },
  {
    id: 3,
    title: 'Healthy Salad!',
    description: 'Fresh ingredients, healthy living starts with a good meal',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
    buttonText: 'Order now',
    mealId: '3',
  },
]

const categories = [
  { name: 'Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200' },
  { name: 'Pizza', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200' },
  { name: 'Chicken', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=200' },
  { name: 'Salad', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200' },
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
  {
    id: '3',
    name: 'Grilled Chicken',
    restaurant: 'Chicken Bros',
    price: 11.49,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400',
  },
  {
    id: '4',
    name: 'Caesar Salad',
    restaurant: 'Green Garden',
    price: 9.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400',
  },
  {
    id: '5',
    name: 'Spaghetti Carbonara',
    restaurant: 'Pasta House',
    price: 13.49,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400',
  },
]

export default function HomePage() {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [offset, setOffset] = useState(0)
  const [animate, setAnimate] = useState(true)

  const total = banners.length
  const isDragging = useRef(false)
  const startX = useRef(0)
  const dragOffset = useRef(0)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const goTo = useCallback((index: number) => {
    setAnimate(true)
    setCurrentSlide(index)
  }, [])

  const next = useCallback(() => {
    setAnimate(true)
    setCurrentSlide((prev) => prev + 1)
  }, [])

  const prev = useCallback(() => {
    setAnimate(true)
    setCurrentSlide((prev) => prev - 1)
  }, [])

  // Auto-play
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      if (!isDragging.current) {
        next()
      }
    }, 3000)
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [next])

  // Seamless loop: when we reach the clone at index total, instantly jump to real 0
  useEffect(() => {
    if (currentSlide === total) {
      resetTimerRef.current = setTimeout(() => {
        setAnimate(false)
        setCurrentSlide(0)
      }, 450)
      return () => {
        if (resetTimerRef.current) clearTimeout(resetTimerRef.current)
      }
    }
  }, [currentSlide, total])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current)
    }
  }, [])

  const onDragStart = (clientX: number) => {
    isDragging.current = true
    startX.current = clientX
    dragOffset.current = 0
    setAnimate(false)
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
  }

  const onDragMove = (clientX: number) => {
    if (!isDragging.current) return
    dragOffset.current = clientX - startX.current
    setOffset(dragOffset.current)
  }

  const onDragEnd = () => {
    if (!isDragging.current) return
    isDragging.current = false
    setAnimate(true)

    const threshold = 50
    if (dragOffset.current < -threshold) {
      next()
    } else if (dragOffset.current > threshold) {
      if (currentSlide === 0) {
        goTo(total)
      } else {
        prev()
      }
    }
    dragOffset.current = 0
    setOffset(0)

    // Restart auto-play
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => {
      if (!isDragging.current) next()
    }, 3000)
  }

  const handleTouchStart = (e: React.TouchEvent) => onDragStart(e.touches[0]?.clientX ?? 0)
  const handleTouchMove = (e: React.TouchEvent) => onDragMove(e.touches[0]?.clientX ?? 0)
  const handleTouchEnd = () => onDragEnd()

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    onDragStart(e.clientX)
  }
  const handleMouseMove = (e: React.MouseEvent) => onDragMove(e.clientX)
  const handleMouseUp = () => onDragEnd()
  const handleMouseLeave = () => {
    if (isDragging.current) onDragEnd()
  }

  const activeDot = currentSlide % total
  const translateX = -(currentSlide * 100) + (offset / (trackRef.current?.offsetWidth ?? 1)) * 100

  return (
    <div
      className="min-h-screen pb-24"
      style={{ backgroundColor: 'var(--color-bg-main)' }}
    >
      {/* Header */}
      <div className="px-4 pt-4">
        <div className="flex items-center gap-3">
          <button
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: 'var(--color-bg-card)' }}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: 'var(--gradient-primary)' }}>
              <span className="text-xs font-bold text-white">A</span>
            </div>
          </button>
          <div className="flex flex-1 items-center gap-2 rounded-2xl px-4 py-2.5" style={{ backgroundColor: 'var(--color-bg-card)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-text-muted)' }}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent text-sm outline-none"
              style={{ color: 'var(--color-text-primary)' }}
            />
          </div>
          <button
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: 'var(--color-bg-card)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-text-primary)' }}>
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </button>
        </div>
        <div className="pt-4 pb-2">
          <h2 className="font-heading text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>
            What meal Do You Want?
          </h2>
        </div>
      </div>

      {/* Banner Slider */}
      <div className="px-4 pb-6 pt-4">
        <div
          className="relative overflow-hidden rounded-2xl select-none"
          style={{ background: 'var(--gradient-primary)', cursor: isDragging.current ? 'grabbing' : 'grab' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={trackRef}
            className="flex"
            style={{
              transform: `translateX(${translateX}%)`,
              transition: animate ? 'transform 0.4s ease' : 'none',
            }}
          >
            {banners.map((banner) => (
              <div key={banner.id} className="min-w-full p-5">
                <div className="flex items-center justify-between">
                  <div className="flex-1 pr-4">
                    <h3 className="font-heading text-xl font-bold text-white">
                      {banner.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/80">
                      {banner.description}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        navigate(`/meal/${banner.mealId}`)
                      }}
                      className="mt-4 rounded-full bg-white px-5 py-2.5 text-xs font-semibold"
                      style={{ color: 'var(--color-primary-red)' }}
                    >
                      {banner.buttonText}
                    </button>
                  </div>
                  <img
                    src={banner.image}
                    alt="Food"
                    className="h-24 w-24 rounded-2xl object-cover"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
            {/* Clone of first slide for seamless loop */}
            <div className="min-w-full p-5">
              <div className="flex items-center justify-between">
                <div className="flex-1 pr-4">
                  <h3 className="font-heading text-xl font-bold text-white">
                    {banners[0]!.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/80">
                    {banners[0]!.description}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate(`/meal/${banners[0]!.mealId}`)
                    }}
                    className="mt-4 rounded-full bg-white px-5 py-2.5 text-xs font-semibold"
                    style={{ color: 'var(--color-primary-red)' }}
                  >
                    {banners[0]!.buttonText}
                  </button>
                </div>
                <img
                  src={banners[0]!.image}
                  alt="Food"
                  className="h-24 w-24 rounded-2xl object-cover"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className="h-2 rounded-full transition-all"
              style={{
                width: '8px',
                background: activeDot === index ? 'var(--gradient-primary)' : 'var(--color-bg-hover)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 pb-8">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-heading text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>
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
        <div className="grid grid-cols-4 gap-3">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => navigate('/categories')}
              className="flex flex-col items-center gap-2"
            >
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full" style={{ backgroundColor: 'var(--color-bg-card)' }}>
                <img src={category.image} alt={category.name} className="h-full w-full object-cover" />
              </div>
              <span className="text-xs font-medium" style={{ color: 'var(--color-text-primary)' }}>
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Meals */}
      <div className="px-4 pb-8">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-heading text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>
            Popular Meals
          </h2>
          <button className="text-sm font-medium" style={{ color: 'var(--color-primary-red)' }}>
            See all
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {popularMeals.map((meal) => (
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

      {/* Bottom Navigation */}
      <div
        className="fixed bottom-0 left-0 right-0 border-t px-4 py-3"
        style={{ backgroundColor: 'var(--color-bg-card)', borderColor: 'var(--color-border-color)' }}
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
