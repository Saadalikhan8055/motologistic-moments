'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import MagneticButton from './MagneticButton'

interface ResponsiveHeroProps {
  onBookingClick?: () => void
}

export default function ResponsiveHero({ onBookingClick }: ResponsiveHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; left: string; top: string; duration: string; delay: string }>>([])

  useEffect(() => {
    setMounted(true)
    
    // Generate particles only on client after mount
    const generateParticles = () => {
      const newParticles = [...Array(8)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: `${3 + Math.random() * 3}s`,
        delay: `${Math.random() * 2}s`,
      }))
      setParticles(newParticles)
    }

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    generateParticles()
    window.addEventListener('resize', checkMobile)

    // Mouse tracking for parallax (desktop only)
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile])

  const getParallaxStyle = () => {
    if (isMobile) return {}
    return {
      transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
    }
  }

  return (
    <section 
      id="home"
      className="relative w-full min-h-screen md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-dark via-luxury-dark to-accent-purple/10 -z-10" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Glowing Orbs */}
        <div
          className="absolute top-10 md:top-20 left-5 md:left-20 w-40 md:w-96 h-40 md:h-96 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/10 rounded-full filter blur-3xl animate-pulse-intense"
          style={{ animation: 'pulse-intense 8s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-10 md:bottom-20 right-5 md:right-20 w-40 md:w-96 h-40 md:h-96 bg-gradient-to-tl from-accent-blue/20 to-accent-purple/10 rounded-full filter blur-3xl animate-pulse-intense"
          style={{ animation: 'pulse-intense 8s ease-in-out infinite 2s' }}
        />
        
        {/* Floating Particles (Desktop only, Client only) */}
        {mounted && !isMobile && particles.length > 0 && (
          <>
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-1 h-1 bg-accent-cyan/50 rounded-full"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animation: `float-up ${particle.duration} ease-in-out infinite`,
                  animationDelay: particle.delay,
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse text-center md:flex md:flex-row md:text-left md:items-center md:justify-between md:gap-12">
          {/* Text Content */}
          <div className="flex-1 mb-8 md:mb-0">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4 md:mb-6">
              <span className="text-text-primary">Transform Your</span>
              <br className="md:hidden" />
              <span className="block text-text-primary">Vehicle Delivery Into A</span>
              <span className="block mt-2 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-gold bg-clip-text text-transparent animate-pulse-intense">
                Memorable Moment
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-text-secondary text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-md">
              Experience luxury automotive delivery like never before. Premium reveals, cinematic moments, personalized service.
            </p>

            {/* CTA Buttons - Magnetic */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <MagneticButton
                onClick={onBookingClick}
                className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-accent-gold to-accent-gold text-luxury font-bold text-sm md:text-base hover:shadow-xl hover:shadow-accent-gold/50 transition-all duration-300"
              >
                Book Now ✨
              </MagneticButton>
              <MagneticButton
                onClick={() => {
                  const packagesSection = document.querySelector('#services')
                  packagesSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-accent-cyan text-accent-cyan font-bold text-sm md:text-base hover:bg-accent-cyan/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/30"
              >
                Explore Packages
              </MagneticButton>
            </div>

            {/* Stats Row (Mobile/Desktop) */}
            <div className="mt-8 md:mt-12 grid grid-cols-3 gap-4 md:gap-6">
              {[
                { number: '500+', label: 'Happy Clients' },
                { number: '24/7', label: 'Support' },
                { number: '100%', label: 'Premium' },
              ].map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Mobile-only Second Reveal Card */}
            <div className="md:hidden w-full relative h-64 justify-center items-center mt-8">
              {/* Animated Background Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-cyan/5 via-accent-purple/5 to-accent-blue/5 blur-2xl -z-10 animate-pulse-glow" />
              
              {/* Main Card with Glassmorphism */}
              <div
                className="relative w-full h-full rounded-3xl backdrop-blur-xl border border-accent-cyan/30 bg-gradient-to-br from-accent-cyan/8 to-accent-purple/8 overflow-hidden group hover:border-accent-cyan/60 transition-all duration-500"
              >
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-blue opacity-0 group-hover:opacity-20 transition-opacity duration-500 p-[2px]" />
                
                {/* Car Image */}
                <Image 
                  src="/car.png"
                  alt="Premium Vehicle"
                  fill
                  className="object-cover object-center animate-float-up"
                  priority
                  sizes="100vw"
                />
                
                {/* Red Reveal Overlay - Dramatic Effect */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none">
                  <svg viewBox="0 0 600 400" className="w-full h-full" style={{ opacity: 0.3 }}>
                    <ellipse cx="300" cy="150" rx="180" ry="120" fill="#CC0000" opacity="0.4" />
                  </svg>
                </div>
                
                {/* Overlay Gradient - Red to Dark */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent rounded-3xl" />
                
                {/* Premium Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-between p-4">
                  {/* Top Accent Line */}
                  <div className="w-8 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full animate-shimmer-premium" />
                  
                  {/* Spacer */}
                  <div />
                  
                  {/* Bottom Content */}
                  <div className="text-center">
                    {/* Premium Text with Gradient */}
                    <h3 className="text-lg font-bold mb-1 bg-gradient-to-r from-accent-cyan via-text-primary to-accent-gold bg-clip-text text-transparent animate-pulse-intense">
                      Premium Vehicle Reveals
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-xs text-text-secondary mb-2">
                      Cinematic Luxury Unveilings
                    </p>
                    
                    {/* Feature Pills */}
                    <div className="grid grid-cols-3 gap-1 w-full">
                      {['4K', '24/7', 'Live'].map((feature, i) => (
                        <div
                          key={i}
                          className="px-2 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-bold text-accent-cyan text-center hover:bg-accent-cyan/20 transition-all duration-300"
                          style={{
                            animation: `slide-up 0.6s ease-out ${i * 0.1}s both`,
                          }}
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element (Mobile/Desktop) - Ultra-Premium Cinematic Card */}
          <div className="flex w-full md:flex-1 relative h-80 md:h-96 justify-center items-center mt-8 md:mt-0">
            {/* Animated Background Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-cyan/5 via-accent-purple/5 to-accent-blue/5 blur-2xl -z-10 animate-pulse-glow" />
            
            {/* Main Card with Glassmorphism */}
            <div
              className="relative w-full h-full rounded-3xl backdrop-blur-xl border border-accent-cyan/30 bg-gradient-to-br from-accent-cyan/8 to-accent-purple/8 overflow-hidden group hover:border-accent-cyan/60 transition-all duration-500"
              style={getParallaxStyle()}
            >
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-blue opacity-0 group-hover:opacity-20 transition-opacity duration-500 p-[2px]" />
              
              {/* Car Image */}
              <Image 
                src="/car.png"
                alt="Premium Vehicle"
                fill
                className="object-cover object-center animate-float-up"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              />
              
              {/* Red Reveal Overlay - Dramatic Effect */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none">
                <svg viewBox="0 0 600 400" className="w-full h-full" style={{ opacity: 0.3 }}>
                  <ellipse cx="300" cy="150" rx="180" ry="120" fill="#CC0000" opacity="0.4" />
                </svg>
              </div>
              
              {/* Overlay Gradient - Red to Dark */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent rounded-3xl" />
              
              {/* Premium Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-between p-6">
                {/* Top Accent Line */}
                <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full animate-shimmer-premium" />
                
                {/* Spacer */}
                <div />
                
                {/* Bottom Content */}
                <div className="text-center">
                  {/* Premium Text with Gradient */}
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-accent-cyan via-text-primary to-accent-gold bg-clip-text text-transparent animate-pulse-intense">
                    Premium Vehicle Reveals
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-sm text-text-secondary mb-4">
                    Cinematic Luxury Unveilings
                  </p>
                  
                  {/* Feature Pills */}
                  <div className="grid grid-cols-3 gap-2 w-full">
                    {['4K', '24/7', 'Live'].map((feature, i) => (
                      <div
                        key={i}
                        className="px-3 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-bold text-accent-cyan text-center hover:bg-accent-cyan/20 transition-all duration-300"
                        style={{
                          animation: `slide-up 0.6s ease-out ${i * 0.1}s both`,
                        }}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Accent Orbs */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-accent-cyan/30 to-transparent rounded-full blur-xl animate-float-x" />
              <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-tl from-accent-purple/30 to-transparent rounded-full blur-lg animate-float-up" style={{ animationDuration: '4s' }} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator (Desktop) */}
        {!isMobile && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-text-secondary text-sm mb-2">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-accent-cyan/50 rounded-full flex justify-center">
              <div
                className="w-1 h-2 bg-accent-cyan rounded-full mt-2 animate-pulse"
                style={{ animation: 'bounce 2s infinite' }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
