import { useEffect, useRef } from 'react'

export const useCursorGlow = (isEnabled: boolean = true) => {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isEnabled || typeof window === 'undefined') return

    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }
    }

    const handleMouseLeave = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = '0'
      }
    }

    const handleMouseEnter = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = '1'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isEnabled])

  return glowRef
}
