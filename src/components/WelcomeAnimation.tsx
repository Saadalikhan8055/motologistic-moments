'use client'

import { useState, useEffect } from 'react'

export default function WelcomeAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsVisible(true)
    
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted || !isVisible) return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`} style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)'
    }}>
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-premium rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-premium rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-rose-premium rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* Animated Logo/Icon */}
        <div className="mb-8 inline-block animate-bounce-slow" style={{animationDelay: '0s'}}>
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-premium via-purple-premium to-rose-premium rounded-full opacity-30 blur-2xl animate-pulse-scale"></div>
            <div className="relative bg-gradient-to-br from-cyan-premium to-purple-premium rounded-full w-28 h-28 flex items-center justify-center shadow-2xl animate-glow-expand">
              <div className="text-6xl">🚗</div>
            </div>
          </div>
        </div>

        {/* Main Text */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-down" style={{animationDelay: '0.3s'}}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-premium via-accent to-purple-premium animate-rainbow">
            Motologistic
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-premium via-rose-premium to-accordion animate-neon">
            Moments
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          Transform Your Vehicle Delivery Into A
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-premium to-cyan-premium font-semibold">
            Memorable Experience
          </span>
        </p>

        {/* Animated Progress Bar */}
        <div className="mb-8 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
          <div className="h-1.5 w-full max-w-sm mx-auto bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-premium via-purple-premium to-rose-premium rounded-full animate-loading-bar"
              style={{
                animation: 'loadingBar 3s ease-out forwards'
              }}
            ></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-400 text-sm tracking-widest uppercase animate-pulse font-medium" style={{animationDelay: '1.2s'}}>
          Preparing Your Experience...
        </p>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-premium rounded-full opacity-50 animate-float-up"
              style={{
                left: `${20 + i * 15}%`,
                top: '80%',
                animationDelay: `${i * 0.3}s`,
                animation: `float-up ${2 + i * 0.5}s ease-out forwards`
              }}
            ></div>
          ))}
        </div>

        {/* Quick Stats Animation */}
        <div className="grid grid-cols-3 gap-4 mt-12 animate-fade-in-up" style={{animationDelay: '1.5s'}}>
          {[
            { number: '3+', label: 'Packages', icon: '✨' },
            { number: '100%', label: 'Quality', icon: '⭐' },
            { number: '24/7', label: 'Support', icon: '🎯' }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="glass-effect rounded-lg p-4 backdrop-blur-xl border border-gray-700 text-center hover:scale-110 transition-transform"
              style={{animationDelay: `${1.8 + idx * 0.15}s`}}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-lg font-bold text-cyan-premium">{stat.number}</div>
              <div className="text-xs text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-2 text-sm text-gray-400 hover:text-white border border-gray-600 rounded-full hover:border-cyan-premium transition-all duration-300 animate-fade-in-up"
        style={{animationDelay: '2s'}}
      >
        Skip Animation ↓
      </button>
    </div>
  )
}
