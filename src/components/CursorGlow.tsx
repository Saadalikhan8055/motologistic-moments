'use client'

import { useEffect, useRef } from 'react'

interface CursorGlowProps {
  isEnabled?: boolean
}

export default function CursorGlow({ isEnabled = true }: CursorGlowProps) {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isEnabled || typeof window === 'undefined') return

    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
        glowRef.current.style.opacity = '1'
      }
    }

    const handleMouseLeave = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = '0'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isEnabled])

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-50 mix-blend-screen opacity-0 transition-opacity duration-300"
      style={{
        width: '400px',
        height: '400px',
        marginLeft: '-200px',
        marginTop: '-200px',
        background: 'radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
      }}
    />
  )
}
