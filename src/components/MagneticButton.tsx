'use client'

import React, { useEffect, useRef, useState } from 'react'

interface MagneticButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  magneticStrength?: number
}

export default function MagneticButton({
  children,
  onClick,
  className = '',
  magneticStrength = 0.3,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const button = buttonRef.current
    if (!button || typeof window === 'undefined') return

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return

      const rect = button.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distX = e.clientX - centerX
      const distY = e.clientY - centerY
      const distance = Math.sqrt(distX * distX + distY * distY)

      // Only apply magnetic effect within 150px radius
      if (distance < 150) {
        const pullX = (distX / distance) * magneticStrength * (150 - distance) * 0.1
        const pullY = (distY / distance) * magneticStrength * (150 - distance) * 0.1

        button.style.transform = `translate(${pullX}px, ${pullY}px) scale(1.05)`
      } else {
        button.style.transform = 'translate(0, 0) scale(1)'
      }
    }

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0, 0) scale(1)'
    }

    window.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isHovering, magneticStrength])

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  )
}
