interface PackagesProps {
  onSelectPackage: () => void
}

const packages = [
  {
    id: 1,
    name: 'Essential Reveal',
    price: '₹14,999',
    description: 'A refined and well-executed delivery experience designed to elevate a standard handover.',
    features: [
      'Coordinated delivery to your preferred location (within city limits)',
      'Clean, minimal delivery setup (no decorations)',
      'Premium black satin cloth reveal',
      'White-glove vehicle handling',
      'High-quality cinematic reel (short format)',
      'Basic photo coverage (5–7 edited images)',
      'Key handover presentation (premium key box)',
    ],
    icon: '✨',
    highlight: false,
  },
  {
    id: 2,
    name: 'Signature Reveal',
    price: '₹19,999',
    description: 'A more curated and personalized experience with better control, styling, and documentation.',
    features: [
      'Everything in Essential Reveal',
      'Guided reveal flow (timing, positioning, pacing)',
      'Pre-Delivery Inspection (PDI)',
      'Outfit suggestions for better visual presentation',
      'One premium printed photo frame (highlight moment)',
      'Enhanced photo set (8–12 edited images)',
      'Improved cinematic reel with better sequencing',
    ],
    icon: '🎬',
    highlight: true,
  },
  {
    id: 3,
    name: 'Luxury Reveal',
    price: '₹29,999',
    description: 'A refined, cinematic, and more premium execution focused on visual impact and experience quality.',
    features: [
      'Everything in Signature Reveal',
      'Enhanced reveal choreography (more controlled and dramatic)',
      'Portable lighting for improved visual quality',
      'Extended cinematic video (45–60 seconds)',
      'Premium photo set (15–20 edited images)',
      'VIP-style entry coordination (calm, controlled arrival experience)',
      'Priority handling and smoother on-site execution',
    ],
    icon: '👑',
    highlight: false,
  },
]

export default function Packages({ onSelectPackage }: PackagesProps) {
  return (
    <section id="packages" className="py-24 bg-gradient-to-br from-luxury via-luxury-light to-luxury-dark relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-20 animate-fade-in-down">
          <h2 className="heading-md mb-6">Our Curated <span className="text-accent-gold">Packages</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-xl font-light">
            Choose the experience that matches your vision. Each package is meticulously designed to exceed expectations.
          </p>
          <div className="flex gap-2 justify-center mt-8">
            <div className="w-12 h-1 bg-accent-gold rounded-full"></div>
            <div className="w-3 h-1 bg-cyan-premium rounded-full opacity-50"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Floating elements background */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-premium rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{animationDelay: '2s'}}></div>
          {packages.map((pkg, idx) => (
            <div
              key={pkg.id}
              className={`rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 animate-fade-in-up group relative ${
                pkg.highlight
                  ? 'md:scale-105 bg-gradient-to-br from-luxury-light via-luxury to-luxury-dark text-white shadow-2xl border-2 border-cyan-premium/50 hover:border-cyan-premium hover:shadow-[0_0_50px_rgba(0,229,255,0.8)]'
                  : 'bg-gradient-to-br from-luxury to-luxury-light border-2 border-accent-gold/20 hover:border-accent-gold/80 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]'
              }`}
              style={{animationDelay: `${idx * 0.2}s`}}
            >
              {/* Animated Border Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl ${
                pkg.highlight 
                  ? 'shadow-[inset_0_0_30px_rgba(0,229,255,0.3)]' 
                  : 'shadow-[inset_0_0_30px_rgba(212,175,55,0.2)]'
              }`}></div>

              {/* Card content */}
              <div className="p-8 relative z-10">
                <div className="text-6xl mb-5 transform transition-transform duration-300 group-hover:scale-125 group-hover:animate-rotate-in">{pkg.icon}</div>
                <h3 className="text-3xl font-bold mb-3 transition-colors duration-300 text-white group-hover:animate-text-glow">{pkg.name}</h3>
                <div className={`text-4xl font-black mb-4 transition-all duration-300 ${
                  pkg.highlight 
                    ? 'bg-gradient-to-r from-cyan-premium to-accent-gold bg-clip-text text-transparent animate-gradient-flow' 
                    : 'bg-gradient-to-r from-accent-gold to-yellow-500 bg-clip-text text-transparent animate-color-shift'
                }`}>
                  {pkg.price}
                </div>
                <p className="mb-6 text-base leading-relaxed text-gray-300 transition-colors duration-300">
                  {pkg.description}
                </p>
              </div>

              <div className="p-8 relative z-10">
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3 group/item animate-fade-in-up" style={{animationDelay: `${fidx * 0.1}s`}}>
                      <span className={`text-2xl mt-0.5 transition-all duration-300 group-hover/item:scale-150 group-hover/item:animate-bounce-in ${
                        pkg.highlight ? 'text-cyan-premium' : 'text-accent-gold'
                      }`}>
                        ✓
                      </span>
                      <span className={`${pkg.highlight ? 'text-gray-200 group-hover/item:text-cyan-premium' : 'text-gray-200 group-hover/item:text-accent-gold'} font-medium transition-all duration-300`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onSelectPackage}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-110 relative overflow-hidden group animate-zoom-in ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-cyan-premium to-purple-premium text-black hover:shadow-[0_0_30px_rgba(0,229,255,0.8)] shadow-pulse'
                      : 'bg-gradient-to-r from-accent-gold to-yellow-500 text-black hover:shadow-[0_0_25px_rgba(212,175,55,0.8)] shadow-pulse'
                  }`}
                >
                  <span className="relative z-10 font-bold">Select Package</span>
                  <div className={`absolute inset-0 ${
                    pkg.highlight ? 'bg-gradient-to-r from-purple-premium to-cyan-premium' : 'bg-gradient-to-r from-yellow-500 to-yellow-600'
                  } transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500`}></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
