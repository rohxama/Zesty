import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ShoppingCart, User, Menu as MenuIcon, X } from 'lucide-react'
import { useState } from 'react'

export default function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-main)' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid var(--color-border-color)' }}>
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <span className="text-lg font-bold text-white">Z</span>
            </div>
            <span
              className="text-2xl font-bold"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Zesty
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="/menu"
              className="font-medium transition-colors hover:text-[var(--color-primary-red)]"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Menu
            </a>
            <a
              href="/cart"
              className="relative font-medium transition-colors hover:text-[var(--color-primary-red)]"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <ShoppingCart size={20} />
            </a>
            <a
              href="/login"
              className="btn-primary flex items-center gap-2"
            >
              <User size={18} />
              Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: 'var(--color-text-primary)' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className="border-t px-4 py-4 md:hidden"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              borderColor: 'var(--color-border-color)',
            }}
          >
            <div className="flex flex-col gap-4">
              <a
                href="/menu"
                className="font-medium"
                style={{ color: 'var(--color-text-secondary)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Menu
              </a>
              <a
                href="/cart"
                className="font-medium"
                style={{ color: 'var(--color-text-secondary)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Cart
              </a>
              <a
                href="/login"
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        className="mt-16 border-t py-8"
        style={{ borderColor: 'var(--color-border-color)' }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <span className="text-sm font-bold text-white">Z</span>
            </div>
            <span
              className="text-lg font-bold"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Zesty
            </span>
          </div>
          <p style={{ color: 'var(--color-text-muted)' }}>
            &copy; 2026 Zesty. All rights reserved. Delicious food, delivered to your door.
          </p>
        </div>
      </footer>

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1A1A1A',
            color: '#FFFFFF',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
          },
          success: {
            iconTheme: {
              primary: '#FF4D4D',
              secondary: '#FFFFFF',
            },
          },
        }}
      />
    </div>
  )
}
