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
    <section id="packages" className="py-24 bg-gradient-to-br from-white via-light to-gray-50 relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-20 animate-fade-in-down">
          <h2 className="heading-md mb-6">Our Curated Packages</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-xl font-light">
            Choose the experience that matches your vision. Each package is meticulously designed to exceed expectations.
          </p>
          <div className="flex gap-2 justify-center mt-8">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <div className="w-3 h-1 bg-accent rounded-full opacity-50"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Floating elements background */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-premium rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-premium rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{animationDelay: '2s'}}></div>
          {packages.map((pkg, idx) => (
            <div
              key={pkg.id}
              className={`rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-4 animate-fade-in-up group relative ${
                pkg.highlight
                  ? 'md:scale-105 bg-gradient-to-br from-luxury via-gray-800 to-gray-900 text-white shadow-2xl border-2 border-transparent hover:border-gradient-to-r hover:border-cyan-premium'
                  : 'bg-white border-2 border-gray-200 hover:border-gradient-to-r hover:border-purple-premium'
              }`}
              style={{animationDelay: `${idx * 0.2}s`}}
            >
              {/* Glow effect on hover */}
              <div className={`absolute -inset-px rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                pkg.highlight 
                  ? 'bg-gradient-to-r from-cyan-premium via-purple-premium to-rose-premium' 
                  : 'bg-gradient-to-br from-gray-50 to-white'
              }`}></div>

              <div className={`p-8 ${pkg.highlight ? 'bg-gradient-to-br from-luxury via-gray-800 to-gray-900' : 'bg-white'}`}>
                <div className="text-6xl mb-5 transform transition-transform duration-300 group-hover:scale-110">{pkg.icon}</div>
                <h3 className={`text-3xl font-bold mb-3 transition-colors duration-300 ${pkg.highlight ? 'text-white' : 'text-luxury'}`}>{pkg.name}</h3>
                <div className={`text-4xl font-black mb-4 transition-all duration-300 ${pkg.highlight ? 'bg-gradient-to-r from-cyan-premium to-purple-premium bg-clip-text text-transparent drop-shadow-lg' : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-premium to-rose-premium'}`}>
                  {pkg.price}
                </div>
                <p className={`mb-6 text-base leading-relaxed transition-colors duration-300 ${pkg.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
              </div>

              <div className="p-8">
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3 group/item">
                      <span className={`text-2xl mt-0.5 transition-all duration-300 group-hover/item:scale-125 ${pkg.highlight ? 'text-cyan-premium' : 'text-accent'}`}>
                        ✓
                      </span>
                      <span className={`${pkg.highlight ? 'text-gray-200 group-hover/item:text-white' : 'text-gray-700 group-hover/item:text-gray-900'} font-medium transition-all duration-300`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onSelectPackage}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-cyan-premium via-purple-premium to-rose-premium text-white hover:shadow-2xl hover:shadow-purple-premium/50'
                      : 'bg-luxury text-white hover:bg-gray-800 hover:shadow-xl'
                  }`}
                >
                  <span className="relative z-10">Select Package</span>
                  <div className={`absolute inset-0 ${
                    pkg.highlight ? 'bg-gradient-to-r from-rose-premium to-cyan-premium' : 'bg-gray-900'
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
