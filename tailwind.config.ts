import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // Premium Dark Blue Base
        'luxury-dark': '#0B0F1A',
        'luxury': '#1a1a2e',
        'luxury-light': '#16213e',
        
        // Gold & Cyan Accents - Premium Theme
        'accent-gold': '#D4AF37',
        'accent-cyan': '#00E5FF',
        'accent-purple': '#00D9FF',
        'accent-blue': '#0099FF',
        
        // Extended Palette
        'light': '#f5f5f5',
        'cyan-premium': '#00E5FF',
        'purple-premium': '#00D9FF',
        'rose-premium': '#FF6B9D',
        'emerald-premium': '#10b981',
      },
      backgroundColor: {
        'glass': 'rgba(255, 255, 255, 0.05)',
        'glass-dark': 'rgba(0, 0, 0, 0.3)',
      },
      backdropFilter: {
        'glass': 'blur(10px)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-intense': 'pulse-intense 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'shimmer': 'shimmer 3s infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'float-up': 'float-up 3s ease-in-out infinite',
        'glow-cyan': 'glow-cyan 3s ease-in-out infinite',
        'glow-purple': 'glow-purple 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'rotate-3d': 'rotate-3d 6s linear infinite',
        'gradient-shift': 'gradient-shift 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'reveal': 'reveal 0.8s ease-out forwards',
        'shimmer-premium': 'shimmer-premium 3s ease-in-out infinite',
        'float-x': 'float-x 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'ambient-light': 'ambient-light 8s ease-in-out infinite',
        // New Red & Black Animations
        'red-glow': 'red-glow 2s ease-in-out infinite',
        'red-pulse': 'red-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'red-shimmer': 'red-shimmer 3s infinite',
        'red-flash': 'red-flash 0.8s infinite',
        'red-wave': 'red-wave 3s ease-in-out infinite',
        'red-breathing': 'red-breathing 4s ease-in-out infinite',
        'red-lightning': 'red-lightning 2.5s infinite',
        'pulse-ring': 'pulse-ring 2s infinite',
        'red-blur-flash': 'red-blur-flash 1.5s infinite',
        'red-rotate-glow': 'red-rotate-glow 6s linear infinite',
        'red-ripple': 'red-ripple 1s ease-out infinite',
        'red-spark': 'red-spark 2s ease-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'slide-in-left': 'slide-in-left 0.8s ease-out',
        'slide-in-right': 'slide-in-right 0.8s ease-out',
        'neon-red': 'neon-red 2s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'pulse-dot': 'pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-border': 'glow-border 3s ease-in-out infinite',
        'spin-border': 'spin-border 8s linear infinite',
        'text-shimmer': 'text-shimmer 3s linear infinite',
        'text-glow': 'text-glow 2.5s ease-in-out infinite',
        'light-beam': 'light-beam 4s ease-in-out infinite',
        'gradient-flow': 'gradient-flow 8s ease-in-out infinite',
        'wave-motion': 'wave-motion 6s ease-in-out infinite',
        'bounce-in': 'bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'flip-in': 'flip-in 0.8s ease-out',
        'zoom-in': 'zoom-in 0.6s ease-out',
        'slide-up-fade': 'slide-up-fade 0.8s ease-out',
        'rotate-in': 'rotate-in 0.8s ease-out',
        'float-bounce': 'float-bounce 3s ease-in-out infinite',
        'shadow-pulse': 'shadow-pulse 2s ease-in-out infinite',
        'color-shift': 'color-shift 4s ease-in-out infinite',
        'border-glow': 'border-glow 2.5s ease-in-out infinite',
        'inner-glow': 'inner-glow 3s ease-in-out infinite',
        'pulse-scale': 'pulse-scale 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer-light': 'shimmer-light 3s infinite',
        'ripple': 'ripple 1.2s ease-out infinite',
        'aurora': 'aurora 6s ease-in-out infinite',
        'particle': 'particle 3s ease-out infinite',
        'glow-expand': 'glow-expand 2s ease-out',
        'liquid-swirl': 'liquid-swirl 5s ease-in-out infinite',
        'pulse-ring-lg': 'pulse-ring-lg 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer-border': 'shimmer-border 3s linear infinite',
        'accent-pulse': 'accent-pulse 2.5s ease-in-out infinite',
        'neon-border': 'neon-border 3s ease-in-out infinite',
        'cyber-pulse': 'cyber-pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'cyber-flicker': 'cyber-flicker 0.15s infinite',
        'entrance-scale': 'entrance-scale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'entrance-rotate': 'entrance-rotate 0.8s ease-out',
        'floating': 'floating 3s ease-in-out infinite',
        'glow-text': 'glow-text 2s ease-in-out infinite',
        'rainbow-border': 'rainbow-border 4s linear infinite',
        'pulse-shadow': 'pulse-shadow 2s ease-in-out infinite',
        'swipe-reveal': 'swipe-reveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'pulse-intense': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(239, 68, 68, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(239, 68, 68, 0.8)' },
        },
        'glow-cyan': {
          '0%, 100%': { 
            boxShadow: '0 0 10px rgba(239, 68, 68, 0.3), 0 0 20px rgba(239, 68, 68, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(239, 68, 68, 0.6), 0 0 40px rgba(239, 68, 68, 0.3)' 
          },
        },
        'glow-purple': {
          '0%, 100%': { 
            boxShadow: '0 0 10px rgba(220, 38, 38, 0.3), 0 0 20px rgba(220, 38, 38, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(220, 38, 38, 0.6), 0 0 40px rgba(220, 38, 38, 0.3)' 
          },
        },
        'float-up': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'rotate-3d': {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'rotateX(5deg) rotateY(10deg)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 5px rgba(239, 68, 68, 0.3))',
          },
          '50%': { 
            filter: 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.8)) drop-shadow(0 0 40px rgba(220, 38, 38, 0.4))',
          },
        },
        'reveal': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer-premium': {
          '0%': { 
            backgroundPosition: '-1000px 0',
            opacity: '0.5',
          },
          '50%': { 
            opacity: '1',
          },
          '100%': { 
            backgroundPosition: '1000px 0',
            opacity: '0.5',
          },
        },
        'float-x': {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 0px rgba(239, 68, 68, 0)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(239, 68, 68, 0.6), 0 0 60px rgba(220, 38, 38, 0.3)',
          },
        },
        'ambient-light': {
          '0%, 100%': { 
            backgroundColor: 'rgba(220, 38, 38, 0.05)',
            boxShadow: 'inset 0 0 60px rgba(239, 68, 68, 0.1)',
          },
          '50%': { 
            backgroundColor: 'rgba(239, 68, 68, 0.08)',
            boxShadow: 'inset 0 0 60px rgba(220, 38, 38, 0.2)',
          },
        },
        // New Red & Black Animations
        'red-glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(239, 68, 68, 1), 0 0 60px rgba(220, 38, 38, 0.8)' },
        },
        'red-pulse': {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 5px rgba(239, 68, 68, 0))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 15px rgba(239, 68, 68, 0.8))' },
        },
        'red-shimmer': {
          '0%': { backgroundPosition: '-1000px 0', filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.3)' },
          '100%': { backgroundPosition: '1000px 0', filter: 'brightness(1)' },
        },
        'red-flash': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'red-wave': {
          '0%': { transform: 'translateY(0px)' },
          '25%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(0px)' },
          '75%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'red-breathing': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.95' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'red-lightning': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.7', filter: 'brightness(1.5)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '1' },
          '100%': { transform: 'scale(1.2)', opacity: '0' },
        },
        'red-blur-flash': {
          '0%, 100%': { filter: 'blur(0px)', opacity: '1' },
          '50%': { filter: 'blur(4px)', opacity: '0.8' },
        },
        'red-rotate-glow': {
          '0%': { transform: 'rotate(0deg)', filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.8))' },
          '50%': { filter: 'drop-shadow(0 0 25px rgba(220, 38, 38, 1))' },
          '100%': { transform: 'rotate(360deg)', filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.8))' },
        },
        'red-ripple': {
          '0%': { transform: 'scale(0.95)', opacity: '1' },
          '100%': { transform: 'scale(1.1)', opacity: '0' },
        },
        'red-spark': {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '1' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translate(30px, -30px) scale(0)', opacity: '0' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'neon-red': {
          '0%, 100%': { textShadow: '0 0 10px rgba(239, 68, 68, 0.5), 0 0 20px rgba(220, 38, 38, 0.3)' },
          '50%': { textShadow: '0 0 20px rgba(239, 68, 68, 1), 0 0 40px rgba(220, 38, 38, 0.8), 0 0 60px rgba(239, 68, 68, 0.6)' },
        },
        'blob': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, -50px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '75%': { transform: 'translate(50px, 50px) scale(1.05)' },
        },
        'pulse-dot': {
          '0%': { boxShadow: '0 0 0 0 rgba(0, 229, 255, 0.7)' },
          '70%': { boxShadow: '0 0 0 20px rgba(0, 229, 255, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(0, 229, 255, 0)' },
        },
        'glow-border': {
          '0%, 100%': { borderColor: 'rgba(212, 175, 55, 0.3)', boxShadow: '0 0 5px rgba(212, 175, 55, 0.1)' },
          '50%': { borderColor: 'rgba(212, 175, 55, 1)', boxShadow: '0 0 25px rgba(212, 175, 55, 0.6)' },
        },
        'spin-border': {
          '0%': { borderImageSource: 'conic-gradient(from 0deg, #D4AF37, #00E5FF, #D4AF37)' },
          '100%': { borderImageSource: 'conic-gradient(from 360deg, #D4AF37, #00E5FF, #D4AF37)' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '-1000px 0', backgroundSize: '200% 100%' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'text-glow': {
          '0%, 100%': { textShadow: '0 0 5px rgba(0, 229, 255, 0.3), 0 0 10px rgba(212, 175, 55, 0.2)' },
          '50%': { textShadow: '0 0 20px rgba(0, 229, 255, 0.8), 0 0 30px rgba(212, 175, 55, 0.6)' },
        },
        'light-beam': {
          '0%': { transform: 'translateX(-100%) scaleX(0.5)', opacity: '0' },
          '50%': { opacity: '0.8' },
          '100%': { transform: 'translateX(100%) scaleX(0.5)', opacity: '0' },
        },
        'gradient-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'wave-motion': {
          '0%': { transform: 'translateY(0) skewY(0deg)' },
          '25%': { transform: 'translateY(-15px) skewY(2deg)' },
          '50%': { transform: 'translateY(0) skewY(0deg)' },
          '75%': { transform: 'translateY(-10px) skewY(-2deg)' },
          '100%': { transform: 'translateY(0) skewY(0deg)' },
        },
        'bounce-in': {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        'flip-in': {
          '0%': { transform: 'perspective(400px) rotateY(90deg)', opacity: '0' },
          '100%': { transform: 'perspective(400px) rotateY(0deg)', opacity: '1' },
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up-fade': {
          '0%': { opacity: '0', transform: 'translateY(50px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'rotate-in': {
          '0%': { opacity: '0', transform: 'rotate(-10deg) scale(0.8)' },
          '100%': { opacity: '1', transform: 'rotate(0deg) scale(1)' },
        },
        'float-bounce': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '25%': { transform: 'translateY(-20px)' },
          '50%': { transform: 'translateY(0px)' },
          '75%': { transform: 'translateY(-10px)' },
        },
        'shadow-pulse': {
          '0%, 100%': { boxShadow: '0 0 0px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 10px 40px rgba(212, 175, 55, 0.6)' },
        },
        'color-shift': {
          '0%': { color: '#00E5FF' },
          '50%': { color: '#D4AF37' },
          '100%': { color: '#00E5FF' },
        },
        'border-glow': {
          '0%, 100%': { borderColor: 'rgba(0, 229, 255, 0.3)', boxShadow: 'inset 0 0 10px rgba(0, 229, 255, 0.1)' },
          '50%': { borderColor: 'rgba(0, 229, 255, 0.8)', boxShadow: 'inset 0 0 20px rgba(0, 229, 255, 0.4), 0 0 25px rgba(0, 229, 255, 0.5)' },
        },
        'inner-glow': {
          '0%, 100%': { boxShadow: 'inset 0 0 10px rgba(212, 175, 55, 0.1), inset 0 0 20px rgba(0, 229, 255, 0.05)' },
          '50%': { boxShadow: 'inset 0 0 20px rgba(212, 175, 55, 0.3), inset 0 0 40px rgba(0, 229, 255, 0.2)' },
        },
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        'shimmer-light': {
          '0%': { backgroundPosition: '-1000px 0', opacity: '0.3' },
          '50%': { opacity: '0.8' },
          '100%': { backgroundPosition: '1000px 0', opacity: '0.3' },
        },
        'ripple': {
          '0%': { boxShadow: '0 0 0 0 rgba(0, 229, 255, 0.7)' },
          '100%': { boxShadow: '0 0 0 30px rgba(0, 229, 255, 0)' },
        },
        'aurora': {
          '0%': { backgroundPosition: '0% 50%' },
          '25%': { backgroundPosition: '100% 50%' },
          '50%': { backgroundPosition: '100% 0%' },
          '75%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'particle': {
          '0%': { opacity: '1', transform: 'translate(0, 0) scale(1)' },
          '100%': { opacity: '0', transform: 'translate(var(--tx, 100px), var(--ty, -100px)) scale(0)' },
        },
        'glow-expand': {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 50px rgba(212, 175, 55, 0.8)' },
        },
        'liquid-swirl': {
          '0%': { transform: 'rotate(0deg) translateY(0)' },
          '25%': { transform: 'rotate(90deg) translateY(-10px)' },
          '50%': { transform: 'rotate(180deg) translateY(0)' },
          '75%': { transform: 'rotate(270deg) translateY(10px)' },
          '100%': { transform: 'rotate(360deg) translateY(0)' },
        },
        'pulse-ring-lg': {
          '0%': { boxShadow: '0 0 0 0 rgba(0, 229, 255, 0.7), 0 0 0 0 rgba(212, 175, 55, 0.5)' },
          '50%': { boxShadow: '0 0 0 15px rgba(0, 229, 255, 0), 0 0 0 25px rgba(212, 175, 55, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(0, 229, 255, 0), 0 0 0 0 rgba(212, 175, 55, 0)' },
        },
        'shimmer-border': {
          '0%': { borderImageSource: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.8), transparent)' },
          '50%': { borderImageSource: 'linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.8), transparent)' },
          '100%': { borderImageSource: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.8), transparent)' },
        },
        'accent-pulse': {
          '0%, 100%': { color: '#00E5FF' },
          '50%': { color: '#D4AF37' },
        },
        'neon-border': {
          '0%, 100%': { borderColor: 'rgba(0, 229, 255, 0.5)', boxShadow: '0 0 10px rgba(0, 229, 255, 0.3)' },
          '50%': { borderColor: 'rgba(212, 175, 55, 1)', boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)' },
        },
        'cyber-pulse': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'cyber-flicker': {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.3' },
        },
        'entrance-scale': {
          '0%': { transform: 'scale(0) rotateX(90deg)', opacity: '0' },
          '100%': { transform: 'scale(1) rotateX(0deg)', opacity: '1' },
        },
        'entrance-rotate': {
          '0%': { transform: 'rotate(-10deg) translateX(-50px)', opacity: '0' },
          '100%': { transform: 'rotate(0deg) translateX(0)', opacity: '1' },
        },
        'floating': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        'glow-text': {
          '0%, 100%': { textShadow: '0 0 5px rgba(0, 229, 255, 0.5), 0 0 10px rgba(212, 175, 55, 0.3)' },
          '50%': { textShadow: '0 0 20px rgba(0, 229, 255, 0.8), 0 0 40px rgba(212, 175, 55, 0.6), 0 0 60px rgba(0, 229, 255, 0.4)' },
        },
        'rainbow-border': {
          '0%': { borderColor: '#00E5FF' },
          '25%': { borderColor: '#D4AF37' },
          '50%': { borderColor: '#00D9FF' },
          '75%': { borderColor: '#D4AF37' },
          '100%': { borderColor: '#00E5FF' },
        },
        'pulse-shadow': {
          '0%, 100%': { boxShadow: '0 0 0px rgba(0, 0, 0, 0.2)' },
          '50%': { boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' },
        },
        'swipe-reveal': {
          '0%': { transform: 'translateX(-100%) skewX(-20deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) skewX(0deg)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
