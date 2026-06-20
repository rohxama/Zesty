import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-6xl font-bold text-orange-500">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page not found</p>
      <Link to="/" className="mt-8 rounded-lg bg-orange-500 px-6 py-3 text-white hover:bg-orange-600">
        Go Home
      </Link>
    </div>
  )
}
