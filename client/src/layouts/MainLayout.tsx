import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="/" className="text-2xl font-bold text-orange-500">
            Zesty
          </a>
          <div className="flex items-center gap-6">
            <a href="/menu" className="hover:text-orange-500">
              Menu
            </a>
            <a href="/cart" className="hover:text-orange-500">
              Cart
            </a>
            <a href="/login" className="hover:text-orange-500">
              Login
            </a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t py-8 text-center text-sm text-gray-500">
        <p>&copy; 2026 Zesty. All rights reserved.</p>
      </footer>

      <Toaster position="top-right" />
    </div>
  )
}
