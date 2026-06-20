import { ArrowRight, Star, Clock, Truck } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 text-center">
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2"
          style={{
            backgroundColor: 'var(--color-bg-card)',
            border: '1px solid var(--color-border-color)',
          }}
        >
          <span className="text-sm font-body" style={{ color: 'var(--color-text-secondary)' }}>
            🍕 #1 Food Delivery App
          </span>
        </div>

        <h1 className="heading-xl">
          Delicious Food,
          <br />
          <span className="text-gradient">Delivered Fast</span>
        </h1>

        <p className="text-lg mx-auto mt-6 max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
          Experience the finest cuisines from top restaurants, delivered right to your
          doorstep. Fresh, fast, and full of flavor.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="/menu"
            className="btn-primary flex items-center gap-2"
          >
            Explore Menu
            <ArrowRight size={20} />
          </a>
          <a
            href="/login"
            className="btn-secondary flex items-center gap-2"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          {
            icon: <Clock size={24} />,
            title: 'Lightning Fast',
            description: 'Average delivery time of 30 minutes',
          },
          {
            icon: <Star size={24} />,
            title: 'Top Rated',
            description: 'Curated restaurants with 4.5+ ratings',
          },
          {
            icon: <Truck size={24} />,
            title: 'Free Delivery',
            description: 'Free delivery on orders over $30',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="card card-hover p-6 transition-all duration-200"
          >
            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <span className="text-white">{feature.icon}</span>
            </div>
            <h3 className="heading-sm" style={{ color: 'var(--color-text-primary)' }}>
              {feature.title}
            </h3>
            <p className="text-base mt-2" style={{ color: 'var(--color-text-secondary)' }}>
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      {/* Popular Categories */}
      <section>
        <h2 className="heading-lg mb-8">Popular Categories</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { emoji: '🍔', name: 'Burgers' },
            { emoji: '🍕', name: 'Pizza' },
            { emoji: '🍣', name: 'Sushi' },
            { emoji: '🥗', name: 'Salads' },
          ].map((category, index) => (
            <div
              key={index}
              className="card card-hover flex flex-col items-center p-6 transition-all duration-200"
            >
              <span className="mb-3 text-4xl">{category.emoji}</span>
              <span className="font-heading font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="card overflow-hidden p-8 text-center md:p-12">
        <h2 className="heading-lg">Ready to Order?</h2>
        <p className="text-lg mx-auto mt-4 max-w-xl" style={{ color: 'var(--color-text-secondary)' }}>
          Join thousands of happy customers enjoying delicious meals every day.
        </p>
        <a
          href="/menu"
          className="btn-primary mt-8 inline-flex items-center gap-2"
        >
          Order Now
          <ArrowRight size={20} />
        </a>
      </section>
    </div>
  )
}
