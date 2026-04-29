'use client'

import { useState, useEffect } from 'react'

interface GalleryItem {
  id: number
  title: string
  category: string
  image: string
  description: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Pristine Reveal',
    category: 'Signature',
    image: 'https://picsum.photos/600/400?random=1',
    description: 'Elegant satin-cover reveal with professional lighting'
  },
  {
    id: 2,
    title: 'Cinematic Moment',
    category: 'Luxury',
    image: 'https://picsum.photos/600/400?random=2',
    description: 'Professional cinematic documentation'
  },
  {
    id: 3,
    title: 'Dawn Reveal',
    category: 'Luxury',
    image: 'https://picsum.photos/600/400?random=3',
    description: 'Golden hour luxury vehicle presentation'
  },
  {
    id: 4,
    title: 'Minimalist Elegance',
    category: 'Essential',
    image: 'https://picsum.photos/600/400?random=4',
    description: 'Clean, refined delivery experience'
  },
  {
    id: 5,
    title: 'Premium Positioning',
    category: 'Signature',
    image: 'https://picsum.photos/600/400?random=5',
    description: 'Strategic positioning and ambient lighting'
  },
  {
    id: 6,
    title: 'White Glove Service',
    category: 'Luxury',
    image: 'https://picsum.photos/600/400?random=6',
    description: 'Meticulous attention to detail'
  },
]

export default function ResponsiveGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const categories = ['All', 'Essential', 'Signature', 'Luxury']
  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section id="gallery" className="relative w-full py-12 md:py-20 px-4 md:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/50 to-luxury-dark -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-text-primary">Gallery of</span>
            <br className="md:hidden" />
            <span className="ml-0 md:ml-2 bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
              Memorable Moments
            </span>
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-2xl mx-auto">
            Explore professional captures from our premium vehicle reveals
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-accent-gold to-accent-gold text-luxury shadow-lg shadow-accent-gold/50'
                  : 'border border-accent-cyan/50 text-accent-cyan hover:border-accent-gold hover:text-accent-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={`grid gap-4 md:gap-6 ${
          isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl h-64 md:h-72 cursor-pointer"
              style={{
                animation: `slide-up 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Image Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/10" />
              
              {/* Actual Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay - Always visible on mobile, hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/40 to-transparent flex flex-col justify-end p-4 md:p-6 group-hover:from-luxury-dark/80 md:group-hover:from-luxury-dark transition-all duration-300">
                {/* Category Badge */}
                <div className="inline-block w-max mb-3 px-3 py-1 rounded-full bg-accent-cyan/20 border border-accent-cyan/50">
                  <span className="text-accent-cyan font-bold text-xs">{item.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-accent-gold mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-xs md:text-sm line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Glow Effect on Hover (Desktop) */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* View All CTA (Mobile) */}
        {isMobile && filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-secondary mb-4">No gallery items found in this category</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple text-luxury font-bold text-sm hover:shadow-lg transition-all"
            >
              View All
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
