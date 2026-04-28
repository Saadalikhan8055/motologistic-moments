'use client'

import { useState, useEffect, useRef } from 'react'

interface Package {
  id: string
  name: string
  subtitle: string
  price: string
  description: string
  features: string[]
  icon: string
  highlight?: boolean
}

interface ResponsivePackagesProps {
  onSelectPackage?: (packageName: string) => void
}

export default function ResponsivePackages({ onSelectPackage }: ResponsivePackagesProps) {
  const [_selectedPackage, setSelectedPackage] = useState<string | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [_isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const packages: Package[] = [
    {
      id: 'essential',
      name: 'Essential Reveal',
      subtitle: 'Perfect Start',
      price: '₹14,999',
      description: 'A refined and well-executed delivery experience designed to elevate a standard handover.',
      features: [
        '✓ Coordinated delivery to your preferred location (within city limits)',
        '✓ Clean, minimal delivery setup (no decorations)',
        '✓ Premium black satin cloth reveal',
        '✓ White-glove vehicle handling',
        '✓ High-quality cinematic reel (short format)',
        '✓ Basic photo coverage (5–7 edited images)',
        '✓ Key handover presentation (premium key box)',
      ],
      icon: '✨',
    },
    {
      id: 'signature',
      name: 'Signature Reveal',
      subtitle: 'Recommended',
      price: '₹19,999',
      description: 'A more curated and personalized experience with better control, styling, and documentation.',
      features: [
        '✓ Everything in Essential Reveal',
        '✓ Guided reveal flow (timing, positioning, pacing)',
        '✓ Pre-Delivery Inspection (PDI)',
        '✓ Outfit suggestions for better visual presentation',
        '✓ One premium printed photo frame (highlight moment)',
        '✓ Enhanced photo set (8–12 edited images)',
        '✓ Improved cinematic reel with better sequencing',
      ],
      icon: '🎬',
      highlight: true,
    },
    {
      id: 'luxury',
      name: 'Luxury Reveal',
      subtitle: 'Ultimate Experience',
      price: '₹29,999',
      description: 'A refined, cinematic, and more premium execution focused on visual impact and experience quality.',
      features: [
        '✓ Everything in Signature Reveal',
        '✓ Enhanced reveal choreography (more controlled and dramatic)',
        '✓ Portable lighting for improved visual quality',
        '✓ Extended cinematic video (45–60 seconds)',
        '✓ Premium photo set (15–20 edited images)',
        '✓ VIP-style entry coordination (calm, controlled arrival experience)',
        '✓ Priority handling and smoother on-site execution',
      ],
      icon: '👑',
    },
  ]

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollLeft)
  }

  const scrollToPackage = (index: number) => {
    if (carouselRef.current) {
      const packageWidth = carouselRef.current.offsetWidth * 0.85 + 20
      carouselRef.current.scrollLeft = packageWidth * index
    }
  }

  return (
    <section id="services" className="relative w-full py-12 md:py-20 px-4 md:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/50 to-luxury-dark -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-text-primary">Choose Your</span>
            <br className="md:hidden" />
            <span className="ml-0 md:ml-2 bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
              Premium Package
            </span>
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-2xl mx-auto">
            Select the perfect service package tailored to your vehicle delivery experience
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => {
                setSelectedPackage(pkg.id)
                onSelectPackage?.(pkg.name)
              }}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer transform ${
                pkg.highlight
                  ? 'md:scale-105 md:shadow-2xl md:shadow-accent-purple/50'
                  : 'hover:scale-105'
              }`}
            >
              {/* Card Background */}
              <div
                className={`absolute inset-0 ${
                  pkg.highlight
                    ? 'bg-gradient-to-br from-accent-purple/20 to-accent-cyan/10 border border-accent-purple/50'
                    : 'bg-gradient-to-br from-accent-cyan/10 to-luxury-light/5 border border-accent-cyan/30'
                } backdrop-blur-md group-hover:border-accent-gold/50 transition-all`}
              />

              {/* Glow Effect */}
              {pkg.highlight && (
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-transparent animate-glow-purple" />
              )}

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="text-5xl mb-4">{pkg.icon}</div>

                {/* Badge */}
                {pkg.highlight && (
                  <div className="inline-block w-max mb-4 px-3 py-1 rounded-full bg-accent-gold/20 border border-accent-gold/50">
                    <span className="text-accent-gold font-bold text-xs">{pkg.subtitle}</span>
                  </div>
                )}

                {/* Name */}
                <h3 className="text-2xl font-bold text-accent-gold mb-2">{pkg.name}</h3>

                {/* Description */}
                <p className="text-text-secondary text-sm mb-6">{pkg.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <p className="text-4xl font-bold text-text-primary">{pkg.price}</p>
                  <p className="text-text-secondary text-xs">For your special moment</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="text-text-secondary text-sm flex items-start gap-2">
                      <span className="text-accent-cyan flex-shrink-0">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-accent-gold to-accent-gold text-luxury hover:shadow-lg hover:shadow-accent-gold/50'
                      : 'bg-gradient-to-r from-accent-cyan/30 to-accent-purple/30 text-accent-cyan border border-accent-cyan/50 hover:bg-accent-cyan/50'
                  }`}
                >
                  Select Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
            style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
          >
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex-shrink-0 w-full snap-center"
              >
                <div
                  onClick={() => {
                    setSelectedPackage(pkg.id)
                    onSelectPackage?.(pkg.name)
                  }}
                  className={`relative overflow-hidden rounded-2xl h-full transition-all duration-300 ${
                    pkg.highlight ? 'border-2 border-accent-purple' : 'border border-accent-cyan/30'
                  }`}
                >
                  {/* Card Background */}
                  <div
                    className={`absolute inset-0 ${
                      pkg.highlight
                        ? 'bg-gradient-to-br from-accent-purple/20 to-accent-cyan/10'
                        : 'bg-gradient-to-br from-accent-cyan/10 to-luxury-light/5'
                    } backdrop-blur-md`}
                  />

                  {/* Content */}
                  <div className="relative p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div className="text-5xl mb-4">{pkg.icon}</div>

                    {/* Badge */}
                    {pkg.highlight && (
                      <div className="inline-block w-max mb-3 px-3 py-1 rounded-full bg-accent-gold/20 border border-accent-gold/50">
                        <span className="text-accent-gold font-bold text-xs">{pkg.subtitle}</span>
                      </div>
                    )}

                    {/* Name */}
                    <h3 className="text-xl font-bold text-accent-gold mb-2">{pkg.name}</h3>

                    {/* Price */}
                    <div className="mb-4">
                      <p className="text-3xl font-bold text-text-primary">{pkg.price}</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-6 flex-1">
                      {pkg.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-text-secondary text-xs flex items-start gap-2">
                          <span className="text-accent-cyan flex-shrink-0">•</span>
                          {feature}
                        </li>
                      ))}
                      {pkg.features.length > 4 && (
                        <li className="text-accent-cyan text-xs font-bold">+{pkg.features.length - 4} more</li>
                      )}
                    </ul>

                    {/* CTA Button */}
                    <button
                      className={`w-full py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                        pkg.highlight
                          ? 'bg-gradient-to-r from-accent-gold to-accent-gold text-luxury'
                          : 'bg-gradient-to-r from-accent-cyan/30 to-accent-purple/30 text-accent-cyan border border-accent-cyan/50'
                      }`}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel Indicators */}
          <div className="flex gap-2 justify-center mt-4">
            {packages.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToPackage(index)}
                className={`h-2 rounded-full transition-all ${
                  Math.round(scrollPosition / (carouselRef.current?.offsetWidth || 1)) === index
                    ? 'w-8 bg-accent-gold'
                    : 'w-2 bg-accent-cyan/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
