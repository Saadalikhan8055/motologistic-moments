interface HeroProps {
  onGetStarted: () => void
  onLearnMore: () => void
}

export default function Hero({ onGetStarted, onLearnMore }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-luxury via-luxury-light to-luxury-dark text-white min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background Blobs */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-premium rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-40" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-premium rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-35" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent-gold rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-30" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-premium rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-25" style={{animationDelay: '3s'}}></div>
        
        {/* Additional Light Beams */}
        <div className="absolute top-0 left-1/3 w-96 h-full bg-gradient-to-b from-accent-gold via-transparent to-transparent opacity-10 animate-light-beam" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-0 right-1/4 w-96 h-full bg-gradient-to-b from-cyan-premium via-transparent to-transparent opacity-10 animate-light-beam" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-80 h-80 bg-accent-gold rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-premium rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-10" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-8 px-6 py-3 bg-gradient-to-r from-cyan-premium via-purple-premium to-accent-gold bg-opacity-20 rounded-full border-2 border-cyan-premium border-opacity-50 text-cyan-premium text-sm font-bold tracking-widest animate-fade-in-down animate-pulse-ring">
            ✨ PREMIUM AUTOMOTIVE EXPERIENCE ✨
          </div>
          
          <h1 className="heading-lg mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Transform Your Vehicle Delivery Into A <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-premium via-purple-premium to-accent-gold animate-gradient-flow">Memorable Moment</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Experience a refined, carefully orchestrated reveal. From precision planning to white-glove handling, every detail is designed with intent. Professional photography and cinematic video documentation included.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <button
              onClick={onGetStarted}
              className="btn-primary text-lg font-bold px-8 py-4 shadow-pulse hover:shadow-[0_20px_50px_rgba(212,175,55,0.8)] transition-all"
            >
              Book Now
            </button>
            <button className="btn-secondary text-lg font-bold px-8 py-4 border-glow hover:border-glow" onClick={onLearnMore}>
              <span>Explore Packages</span>
            </button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '500+', label: 'Happy Clients', delay: '0.8s', color: 'cyan' },
              { number: '24/7', label: 'Support', delay: '1s', color: 'cyan' },
              { number: '100%', label: 'Premium', delay: '1.2s', color: 'cyan' }
            ].map((stat, idx) => (
              <div key={idx} className="animate-fade-in-up glass-effect rounded-xl p-6 border border-cyan-premium border-opacity-30 hover:border-opacity-100 hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all duration-300 animate-pulse-scale" style={{animationDelay: stat.delay}}>
                <div className="text-5xl md:text-6xl font-bold mb-3 drop-shadow-lg text-cyan-premium animate-text-glow">{stat.number}</div>
                <p className="text-lg text-gray-300 font-medium drop-shadow-md">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Animated Decorative Elements */}
          <div className="absolute -top-10 -left-20 w-40 h-40 bg-accent-gold rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse-dot"></div>
          <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-cyan-premium rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse-dot" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gradient-to-b from-cyan-premium to-accent-gold rounded-full flex items-center justify-center glass-effect group hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] transition-all">
          <div className="w-1 h-3 bg-gradient-to-b from-cyan-premium to-accent-gold rounded-full animate-pulse-dot"></div>
        </div>
      </div>
    </section>
  )
}
