'use client'

import { useState, useEffect } from 'react'
import ResponsiveHeader from '@/components/ResponsiveHeader'
import ResponsiveHero from '@/components/ResponsiveHero'
import ResponsivePackages from '@/components/ResponsivePackages'
import ResponsiveGallery from '@/components/ResponsiveGallery'
import Booking from '@/components/Booking'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'

export default function Home() {
  const [showBooking, setShowBooking] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      {/* Ultra-premium cursor glow effect (desktop only) */}
      <CursorGlow isEnabled={!isMobile} />
      
      <main className="min-h-screen bg-luxury-dark text-text-primary">
        <ResponsiveHeader onBookingClick={() => setShowBooking(true)} />
        <ResponsiveHero onBookingClick={() => setShowBooking(true)} />
        <ResponsivePackages onSelectPackage={() => setShowBooking(true)} />
        <ResponsiveGallery />
        {showBooking && <Booking onClose={() => setShowBooking(false)} onPackageSelect={(pkg) => console.log('Selected:', pkg)} />}
        <Footer />
      </main>
    </>
  )
}
