interface HeroProps {
  onGetStarted: () => void
  onLearnMore: () => void
}

export default function Hero({ onGetStarted, onLearnMore }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-luxury via-gray-900 to-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-premium rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-30" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-premium rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-25" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-rose-premium rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-20" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-premium rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-20" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-10" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-8 px-6 py-3 bg-gradient-to-r from-cyan-premium via-purple-premium to-rose-premium bg-opacity-20 rounded-full border border-cyan-premium border-opacity-50 text-cyan-premium text-sm font-bold tracking-widest animate-fade-in-down animate-pulse-ring">
            ✨ PREMIUM AUTOMOTIVE EXPERIENCE ✨
          </div>
          
          <h1 className="heading-lg mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Transform Your Vehicle Delivery Into A <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-premium to-purple-premium animate-rainbow animate-neon">Memorable Moment</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Experience a refined, carefully orchestrated reveal. From precision planning to white-glove handling, every detail is designed with intent. Professional photography and cinematic video documentation included.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <button
              onClick={onGetStarted}
              className="btn-secondary text-lg font-bold px-8 py-4 relative overflow-hidden group"
            >
              <span className="relative z-10">Explore Packages</span>
              <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
            <button className="btn-primary text-lg font-bold px-8 py-4 border-2 border-white text-white bg-transparent hover:bg-white hover:text-luxury relative overflow-hidden group" onClick={onLearnMore}>
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '3+', label: 'Curated Packages', delay: '0.8s', color: 'emerald' },
              { number: '100%', label: 'Professional Quality', delay: '1s', color: 'cyan' },
              { number: '365', label: 'Days Available', delay: '1.2s', color: 'purple' }
            ].map((stat, idx) => (
              <div key={idx} className="animate-fade-in-up glass-effect rounded-xl p-6" style={{animationDelay: stat.delay}}>
                <div className={`text-5xl md:text-6xl font-bold mb-3 drop-shadow-lg animate-pulse-glow ${
                  stat.color === 'cyan' ? 'text-cyan-premium' :
                  stat.color === 'purple' ? 'text-purple-premium' :
                  'text-emerald-premium'
                }`}>{stat.number}</div>
                <p className="text-lg text-gray-300 font-medium drop-shadow-md">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gradient-to-b from-cyan-premium to-purple-premium rounded-full flex items-center justify-center glass-effect">
          <div className="w-1 h-3 bg-gradient-to-b from-cyan-premium to-purple-premium rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
