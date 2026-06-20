import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div
        className="mb-6 flex h-32 w-32 items-center justify-center rounded-full"
        style={{ backgroundColor: 'var(--color-bg-card)' }}
      >
        <span className="heading-xl text-gradient">404</span>
      </div>

      <h1 className="heading-lg">Page Not Found</h1>

      <p
        className="text-lg mt-4 max-w-md text-center"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        The page you're looking for doesn't exist or has been moved.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          to="/"
          className="btn-primary flex items-center gap-2"
        >
          <Home size={18} />
          Go Home
        </Link>
        <button
          onClick={() => window.history.back()}
          className="btn-secondary flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          Go Back
        </button>
      </div>
    </div>
  )
}
