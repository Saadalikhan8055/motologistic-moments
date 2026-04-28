import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Base
        'luxury-dark': '#0B0F1A',
        'luxury': '#1a1a1a',
        'luxury-light': '#2d2d2d',
        
        // Premium Accents
        'accent-gold': '#D4AF37',
        'accent-cyan': '#00E5FF',
        'accent-purple': '#8B5CF6',
        'accent-blue': '#3B82F6',
        
        // Extended Palette
        'light': '#f5f5f5',
        'cyan-premium': '#00d4ff',
        'purple-premium': '#a855f7',
        'rose-premium': '#f43f5e',
        'emerald-premium': '#10b981',
        
        // Text Colors
        'text-primary': '#E5E7EB',
        'text-secondary': '#9CA3AF',
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
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 212, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.8)' },
        },
        'glow-cyan': {
          '0%, 100%': { 
            boxShadow: '0 0 10px rgba(0, 229, 255, 0.3), 0 0 20px rgba(0, 229, 255, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(0, 229, 255, 0.6), 0 0 40px rgba(0, 229, 255, 0.3)' 
          },
        },
        'glow-purple': {
          '0%, 100%': { 
            boxShadow: '0 0 10px rgba(139, 92, 246, 0.3), 0 0 20px rgba(139, 92, 246, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.3)' 
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
            filter: 'drop-shadow(0 0 5px rgba(0, 229, 255, 0.3))',
          },
          '50%': { 
            filter: 'drop-shadow(0 0 20px rgba(0, 229, 255, 0.8)) drop-shadow(0 0 40px rgba(139, 92, 246, 0.4))',
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
            boxShadow: '0 0 0px rgba(0, 229, 255, 0)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(0, 229, 255, 0.6), 0 0 60px rgba(139, 92, 246, 0.3)',
          },
        },
        'ambient-light': {
          '0%, 100%': { 
            backgroundColor: 'rgba(139, 92, 246, 0.05)',
            boxShadow: 'inset 0 0 60px rgba(0, 229, 255, 0.1)',
          },
          '50%': { 
            backgroundColor: 'rgba(0, 229, 255, 0.08)',
            boxShadow: 'inset 0 0 60px rgba(139, 92, 246, 0.2)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
