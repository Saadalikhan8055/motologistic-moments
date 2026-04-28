'use client'

import { useState } from 'react'

interface ResponsiveHeaderProps {
  onBookingClick?: () => void
}

export default function ResponsiveHeader({ onBookingClick }: ResponsiveHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex fixed top-0 w-full z-40 bg-gradient-to-b from-luxury-dark via-luxury-dark to-transparent backdrop-blur-md">
        <div className="w-full px-8 py-4 flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-accent-gold/40 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Motologistic Moments" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-accent-gold font-bold text-lg">Motologistic</h1>
              <p className="text-text-secondary text-xs">Moments</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="text-text-primary hover:text-accent-gold transition-colors duration-300 font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={onBookingClick}
            className="hidden lg:flex px-6 py-2 rounded-full bg-gradient-to-r from-accent-gold to-accent-gold text-luxury font-bold text-sm hover:shadow-lg hover:shadow-accent-gold/50 transition-all duration-300"
          >
            Book Now
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 w-full z-40 bg-gradient-to-b from-luxury-dark via-luxury-dark to-transparent backdrop-blur-md">
        <div className="px-4 py-3 flex items-center justify-between">
          {/* Mobile Logo */}
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-accent-gold/40 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Motologistic Moments" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-accent-gold font-bold text-sm">Motologistic</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-luxury-light transition-colors"
          >
            <svg
              className="w-6 h-6 text-accent-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-luxury-dark/95 backdrop-blur-md border-b border-accent-cyan/20 animate-slide-down">
            <nav className="flex flex-col py-4">
              {menuItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="px-4 py-3 text-text-primary hover:text-accent-gold hover:bg-luxury-light/10 transition-all duration-300 font-medium text-sm border-b border-luxury-light/10"
                  style={{
                    animation: `slide-up 0.3s ease-out ${index * 0.05}s both`,
                  }}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  onBookingClick?.()
                }}
                className="m-4 px-4 py-3 rounded-full bg-gradient-to-r from-accent-gold to-accent-gold text-luxury font-bold text-sm hover:shadow-lg hover:shadow-accent-gold/50 transition-all duration-300"
              >
                Book Now
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Floating CTA Button (Mobile Only) */}
      <button
        onClick={onBookingClick}
        className="md:hidden fixed bottom-6 right-4 z-30 w-14 h-14 rounded-full bg-gradient-to-r from-accent-gold to-accent-gold text-luxury font-bold flex items-center justify-center hover:shadow-lg hover:shadow-accent-gold/50 transition-all duration-300 animate-glow-cyan"
      >
        📅
      </button>

      {/* Header Spacer */}
      <div className="h-16 md:h-20" />
    </>
  )
}
