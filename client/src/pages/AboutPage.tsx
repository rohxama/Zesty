import { useNavigate } from 'react-router-dom'

const teamMembers = [
  { name: 'Abdullah Al-Rashid', role: 'Founder & CEO', initial: 'A', color: '#FF4D4D' },
  { name: 'Sarah Khan', role: 'Head of Operations', initial: 'S', color: '#4ECDC4' },
  { name: 'Omar Hassan', role: 'Lead Developer', initial: 'O', color: '#3498DB' },
  { name: 'Fatima Al-Zahra', role: 'Marketing Director', initial: 'F', color: '#9B59B6' },
]

const milestones = [
  { year: '2020', event: 'Zesty Founded', desc: 'Started with a vision to deliver premium food experiences' },
  { year: '2021', event: 'First 1000 Orders', desc: 'Reached our first milestone in just 6 months' },
  { year: '2022', event: 'Expanded to 15+ Cities', desc: 'Growing rapidly across the region' },
  { year: '2023', event: 'Premium Restaurant Partners', desc: 'Partnered with 200+ top-rated restaurants' },
  { year: '2024', event: '50,000+ Happy Customers', desc: 'Building trust through quality service' },
]

export default function AboutPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: 'var(--color-bg-main)' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <button
          onClick={() => navigate('/profile')}
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: 'var(--color-bg-card)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-text-primary)' }}>
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="font-heading text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>
          About Zesty
        </h1>
        <div className="h-10 w-10" />
      </div>

      {/* Hero Section */}
      <div className="px-4 pt-2">
        <div className="rounded-2xl p-6" style={{ background: 'var(--gradient-primary)' }}>
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <span className="text-2xl font-bold text-white">Z</span>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-white">Zesty</h2>
              <p className="text-sm text-white/80">Premium Food Delivery</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/90 leading-relaxed">
            Delivering happiness, one meal at a time. Zesty connects you with the finest restaurants in your city, ensuring every bite is a delight.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="px-4 pt-6">
        <h3 className="font-heading text-base font-bold" style={{ color: 'var(--color-text-primary)' }}>
          Our Mission
        </h3>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          To revolutionize food delivery by providing a seamless, fast, and reliable service that brings restaurant-quality meals straight to your doorstep. We believe everyone deserves access to great food without compromise.
        </p>
      </div>

      {/* Values */}
      <div className="px-4 pt-6">
        <h3 className="font-heading text-base font-bold" style={{ color: 'var(--color-text-primary)' }}>
          Our Values
        </h3>
        <div className="mt-3 space-y-3">
          {[
            { icon: 'Quality', title: 'Quality First', desc: 'We partner only with restaurants that meet our high standards for taste and hygiene.' },
            { icon: 'Speed', title: 'Lightning Fast', desc: 'Our optimized delivery network ensures your food arrives hot and fresh.' },
            { icon: 'Trust', title: 'Building Trust', desc: 'Transparent pricing, real-time tracking, and responsive support.' },
          ].map((value) => (
            <div key={value.icon} className="rounded-xl p-4" style={{ backgroundColor: 'var(--color-bg-card)' }}>
              <h4 className="font-heading text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                {value.title}
              </h4>
              <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="px-4 pt-6">
        <h3 className="font-heading text-base font-bold" style={{ color: 'var(--color-text-primary)' }}>
          Meet the Team
        </h3>
        <div className="mt-3 space-y-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex items-center gap-3 rounded-xl p-4" style={{ backgroundColor: 'var(--color-bg-card)' }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: member.color }}>
                <span className="text-lg font-bold text-white">{member.initial}</span>
              </div>
              <div>
                <h4 className="font-heading text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                  {member.name}
                </h4>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="px-4 pt-6">
        <h3 className="font-heading text-base font-bold" style={{ color: 'var(--color-text-primary)' }}>
          Our Journey
        </h3>
        <div className="mt-3 space-y-3">
          {milestones.map((item) => (
            <div key={item.year} className="flex gap-3 rounded-xl p-4" style={{ backgroundColor: 'var(--color-bg-card)' }}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0" style={{ background: 'var(--gradient-primary)' }}>
                <span className="text-xs font-bold text-white">{item.year}</span>
              </div>
              <div>
                <h4 className="font-heading text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                  {item.event}
                </h4>
                <p className="mt-0.5 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="px-4 pt-6">
        <h3 className="font-heading text-base font-bold" style={{ color: 'var(--color-text-primary)' }}>
          Contact Us
        </h3>
        <div className="mt-3 rounded-xl p-4" style={{ backgroundColor: 'var(--color-bg-card)' }}>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: '#3498DB' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Email</p>
                <p className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>support@zesty.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: '#2ECC71' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Phone</p>
                <p className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>+971 50 123 4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: '#E74C3C' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Address</p>
                <p className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>Dubai, United Arab Emirates</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Version */}
      <div className="px-4 pt-6 pb-4">
        <p className="text-center text-xs" style={{ color: 'var(--color-text-muted)' }}>
          Zesty v1.0.0 • Made with ❤️
        </p>
      </div>
    </div>
  )
}
