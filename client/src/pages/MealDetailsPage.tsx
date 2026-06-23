import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

const mealsData: Record<
  string,
  {
    name: string
    description: string
    fullDescription: string
    price: number
    calories: string
    rating: number
    time: string
    image: string
    options: { name: string; price: number }[]
  }
> = {
  burgers: {
    name: 'Jumbo Burger',
    description: 'Tasty Jumbo Burger with extra cheese, mayo, and veggies.',
    fullDescription:
      'Tasty Jumbo Burger with extra cheese, mayo, and veggies. This hearty burger is packed with flavor and made with 100% premium beef. Our signature sauce and fresh lettuce add the perfect crunch. Served on a toasted sesame seed bun with a side of golden fries.',
    price: 43.0,
    calories: '900 Cal',
    rating: 4.8,
    time: '20-25 Min',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600',
    options: [
      { name: 'Add Cheese', price: 0.5 },
      { name: 'Add Extra Sauce', price: 0.3 },
      { name: 'Add Extra Meat', price: 2.0 },
    ],
  },
  pizza: {
    name: 'Margherita Pizza',
    description: 'Classic Italian pizza with fresh mozzarella, tomatoes, and basil.',
    fullDescription:
      'Classic Italian pizza with fresh mozzarella, tomatoes, and basil on a crispy thin crust. Made with our hand-stretched dough that rises for 24 hours. Topped with San Marzano tomato sauce and drizzled with extra virgin olive oil. Baked in a traditional wood-fired oven for that authentic smoky flavor.',
    price: 38.5,
    calories: '850 Cal',
    rating: 4.9,
    time: '25-30 Min',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600',
    options: [
      { name: 'Add Extra Cheese', price: 1.0 },
      { name: 'Add Mushrooms', price: 0.75 },
      { name: 'Add Pepperoni', price: 1.5 },
    ],
  },
  sushi: {
    name: 'Salmon Sushi Set',
    description: 'Fresh premium salmon sashimi and nigiri.',
    fullDescription:
      'Fresh premium salmon sashimi and nigiri, served with wasabi, ginger, and soy sauce. Our salmon is sourced daily from sustainable fisheries and prepared by expert sushi chefs. Includes 8 pieces of nigiri and 6 pieces of sashimi. Each piece is handcrafted with precision and care.',
    price: 52.0,
    calories: '450 Cal',
    rating: 4.7,
    time: '15-20 Min',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600',
    options: [
      { name: 'Add Miso Soup', price: 2.0 },
      { name: 'Add Edamame', price: 1.5 },
      { name: 'Extra Soy Sauce', price: 0.25 },
    ],
  },
  chicken: {
    name: 'Crispy Fried Chicken',
    description: 'Golden crispy fried chicken pieces with a blend of secret spices and herbs.',
    price: 28.0,
    calories: '720 Cal',
    rating: 4.6,
    time: '20-25 Min',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600',
    options: [
      { name: 'Add Coleslaw', price: 1.0 },
      { name: 'Add Fries', price: 1.5 },
      { name: 'Extra Sauce', price: 0.5 },
    ],
  },
  grill: {
    name: 'Grilled Steak',
    description:
      'Premium cut grilled steak cooked to perfection, served with grilled vegetables and sauce.',
    price: 65.0,
    calories: '1100 Cal',
    rating: 4.9,
    time: '30-35 Min',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600',
    options: [
      { name: 'Add Garlic Bread', price: 1.5 },
      { name: 'Add Side Salad', price: 2.0 },
      { name: 'Extra Sauce', price: 0.75 },
    ],
  },
  shawarma: {
    name: 'Chicken Shawarma',
    description:
      'Juicy marinated chicken wrapped in warm pita with tahini, pickles, and fresh veggies.',
    price: 22.0,
    calories: '650 Cal',
    rating: 4.7,
    time: '15-20 Min',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=600',
    options: [
      { name: 'Add Hummus', price: 1.0 },
      { name: 'Add Fries', price: 1.5 },
      { name: 'Extra Garlic Sauce', price: 0.5 },
    ],
  },
}

export default function MealDetailsPage() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [quantity, setQuantity] = useState(1)
  const [selectedOptions, setSelectedOptions] = useState<number[]>([])

  const meal = mealsData[id ?? ''] ?? mealsData.burgers!

  const toggleOption = (index: number) => {
    setSelectedOptions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const totalPrice =
    meal.price * quantity +
    meal.options
      .filter((_, index) => selectedOptions.includes(index))
      .reduce((sum, opt) => sum + opt.price, 0) *
      quantity

  return (
    <div className="min-h-screen pb-32" style={{ backgroundColor: 'var(--color-bg-main)' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <button
          onClick={() => navigate(-1)}
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
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'var(--color-text-primary)' }}
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1
          className="font-heading text-lg font-bold"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Meal details
        </h1>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="var(--color-primary-red)"
            stroke="var(--color-primary-red)"
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </button>
      </div>

      {/* Meal Image */}
      <div className="px-4">
        <div className="relative overflow-hidden rounded-3xl">
          <img src={meal.image} alt={meal.name} className="h-64 w-full object-cover" />
          <button
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: 'var(--color-bg-card)' }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="var(--color-primary-red)"
              stroke="var(--color-primary-red)"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Meal Info */}
      <div className="px-4 pt-6">
        {/* Name and Quantity */}
        <div className="flex items-start justify-between">
          <h2
            className="font-heading text-2xl font-bold"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {meal.name}
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="flex h-8 w-8 items-center justify-center rounded-full"
              style={{ backgroundColor: 'var(--color-bg-card)' }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ color: 'var(--color-text-primary)' }}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <span
              className="w-6 text-center font-body text-lg font-semibold"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="flex h-8 w-8 items-center justify-center rounded-full"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex gap-3">
          <div
            className="flex items-center gap-2 rounded-full px-3 py-2"
            style={{ backgroundColor: 'var(--color-bg-card)' }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ color: 'var(--color-primary-red)' }}
            >
              <path d="M12 20V10M18 20V4M6 20v-4" />
            </svg>
            <span className="text-xs font-medium" style={{ color: 'var(--color-text-primary)' }}>
              {meal.calories}
            </span>
          </div>
          <div
            className="flex items-center gap-2 rounded-full px-3 py-2"
            style={{ backgroundColor: 'var(--color-bg-card)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-secondary-orange)">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="text-xs font-medium" style={{ color: 'var(--color-text-primary)' }}>
              {meal.rating}
            </span>
          </div>
          <div
            className="flex items-center gap-2 rounded-full px-3 py-2"
            style={{ backgroundColor: 'var(--color-bg-card)' }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="text-xs font-medium" style={{ color: 'var(--color-text-primary)' }}>
              {meal.time}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <h3
            className="font-heading text-sm font-semibold"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Description
          </h3>
          <p
            className="mt-2 text-sm leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {meal.description}
            <button className="ml-1 font-medium" style={{ color: 'var(--color-primary-red)' }}>
              Read More
            </button>
          </p>
        </div>

        {/* Additional Options */}
        <div className="mt-6">
          <h3
            className="font-heading text-sm font-semibold"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Additional options
          </h3>
          <div className="mt-3 space-y-3">
            {meal.options.map((option, index) => (
              <button
                key={index}
                onClick={() => toggleOption(index)}
                className="flex w-full items-center justify-between rounded-xl p-4"
                style={{ backgroundColor: 'var(--color-bg-card)' }}
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {option.name}
                </span>
                <div className="flex items-center gap-3">
                  <span
                    className="text-sm font-medium"
                    style={{ color: 'var(--color-primary-red)' }}
                  >
                    + $ {option.price.toFixed(2)}
                  </span>
                  <div
                    className="flex h-5 w-5 items-center justify-center rounded"
                    style={{
                      backgroundColor: selectedOptions.includes(index)
                        ? 'var(--color-primary-red)'
                        : 'var(--color-bg-hover)',
                    }}
                  >
                    {selectedOptions.includes(index) && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="fixed bottom-0 left-0 right-0 border-t p-4"
        style={{
          backgroundColor: 'var(--color-bg-card)',
          borderColor: 'var(--color-border-color)',
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
              Total price
            </span>
            <p
              className="font-body text-xl font-bold"
              style={{ color: 'var(--color-primary-red)' }}
            >
              ${totalPrice.toFixed(2)}
            </p>
          </div>
          <button onClick={() => navigate('/cart')} className="btn-primary flex items-center gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
