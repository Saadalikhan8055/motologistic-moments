'use client'

import { useState } from 'react'

const galleryItems = [
  {
    id: 1,
    title: 'Pristine Reveal',
    category: 'Signature',
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=400&fit=crop',
    description: 'Elegant satin-cover reveal with professional lighting'
  },
  {
    id: 2,
    title: 'Cinematic Moment',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1517457373614-b7152f00fc81?w=600&h=400&fit=crop',
    description: 'Professional cinematic documentation'
  },
  {
    id: 3,
    title: 'Dawn Reveal',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    description: 'Golden hour luxury vehicle presentation'
  },
  {
    id: 4,
    title: 'Minimalist Elegance',
    category: 'Essential',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=400&fit=crop',
    description: 'Clean, refined delivery experience'
  },
  {
    id: 5,
    title: 'Premium Positioning',
    category: 'Signature',
    image: 'https://images.unsplash.com/photo-1534224542775-9f1be4a13d51?w=600&h=400&fit=crop',
    description: 'Strategic positioning and ambient lighting'
  },
  {
    id: 6,
    title: 'White Glove Service',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1489493072403-7e07b4e18d7f?w=600&h=400&fit=crop',
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
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-light relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-rose-premium rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-premium rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-md mb-4">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore memorable moments from our past reveals. Each experience is uniquely crafted and professionally documented.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap relative z-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-premium to-purple-premium text-white shadow-lg shadow-purple-premium/50'
                  : 'bg-light text-gray-700 hover:bg-gradient-to-r hover:from-purple-premium hover:to-cyan-premium hover:text-white border-2 border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-80 animate-fade-in-up transform hover:-translate-y-2"
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-125 transition-all duration-700 filter brightness-80 group-hover:brightness-100"
              />
              
              {/* Animated Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                <div className="text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-premium to-purple-premium">{item.title}</h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">{item.description}</p>
                  <span className="inline-block bg-gradient-to-r from-rose-premium to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700" style={{animation: 'none'}}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
