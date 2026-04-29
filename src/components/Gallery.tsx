'use client'

import { useState } from 'react'

const galleryItems = [
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

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', 'Essential', 'Signature', 'Luxury']
  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-luxury via-luxury-light to-luxury-dark relative overflow-hidden">
      {/* Enhanced Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-premium rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-gold rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-purple-premium rounded-full mix-blend-multiply filter blur-3xl animate-pulse-dot opacity-20"></div>
      </div>

      {/* Animated Light Beams */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-full bg-gradient-to-b from-cyan-premium to-transparent animate-light-beam"></div>
        <div className="absolute top-0 right-1/4 w-96 h-full bg-gradient-to-b from-accent-gold to-transparent animate-light-beam" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="heading-md mb-4 animate-text-glow">Gallery of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-premium to-accent-gold animate-gradient-flow">Memorable Moments</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
            Explore professional captures from our premium vehicle reveals. Each moment tells a story.
          </p>
          <div className="flex gap-2 justify-center mt-6">
            <div className="w-12 h-1 bg-cyan-premium rounded-full animate-shimmer-light"></div>
            <div className="w-3 h-1 bg-accent-gold rounded-full opacity-50 animate-shimmer-light" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap relative z-10 animate-fade-in-up">
          {categories.map((category, idx) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 animate-entrance-scale ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-premium to-purple-premium text-black shadow-[0_0_30px_rgba(0,229,255,0.8)] border-2 border-cyan-premium'
                  : 'bg-transparent text-cyan-premium hover:bg-gradient-to-r hover:from-purple-premium hover:to-cyan-premium hover:text-black border-2 border-cyan-premium hover:border-accent-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]'
              }`}
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] transition-all duration-500 cursor-pointer h-80 animate-entrance-scale transform hover:-translate-y-4 border-2 border-cyan-premium/30 hover:border-cyan-premium"
              style={{animationDelay: `${idx * 0.15}s`}}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-130 transition-all duration-700 filter brightness-75 group-hover:brightness-100"
              />
              
              {/* Animated Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6 animate-swipe-reveal">
                <div className="text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-3 animate-text-glow text-transparent bg-clip-text bg-gradient-to-r from-cyan-premium to-accent-gold">{item.title}</h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed animate-fade-in-up">{item.description}</p>
                  <span className="inline-block bg-gradient-to-r from-cyan-premium via-purple-premium to-accent-gold text-black px-4 py-2 rounded-full text-xs font-bold tracking-wider animate-pulse-scale hover:animate-bounce-in">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
              
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_30px_rgba(0,229,255,0.4)]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
