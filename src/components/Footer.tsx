export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-luxury-dark via-luxury to-luxury-light text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-premium rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-purple-premium rounded-full mix-blend-multiply filter blur-3xl animate-pulse-dot opacity-20"></div>
      </div>

      {/* Animated Light Beams */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-cyan-premium to-transparent animate-light-beam"></div>
        <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-accent-gold to-transparent animate-light-beam" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 relative z-10">
        {/* Main Grid */}
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4 group hover:animate-float-bounce">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-accent-gold to-purple-premium p-0.5 shadow-lg group-hover:shadow-[0_0_25px_rgba(212,175,55,0.8)] animate-pulse-dot transition-all">
                <div className="w-full h-full rounded-full bg-luxury-dark flex items-center justify-center">
                  <span className="text-accent-gold font-bold text-sm animate-text-glow">MM</span>
                </div>
              </div>
              <h3 className="text-xl font-bold">
                <span className="text-accent-gold group-hover:animate-text-glow">Motologistic</span>
                <span className="text-cyan-premium group-hover:animate-text-glow"> Moments</span>
              </h3>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Transforming vehicle delivery into refined, memorable moments.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/motologisticmoments?igsh=MWZucDFleXUwYjVuNQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-premium/20 to-transparent hover:from-cyan-premium hover:to-purple-premium text-cyan-premium hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-120 border border-cyan-premium/50 hover:border-cyan-premium hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] animate-entrance-scale">📷</a>
              <a href="https://youtube.com/@motologistic110?si=-IAH2-AgCoLI2OMz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-premium/20 to-transparent hover:from-purple-premium hover:to-accent-gold text-purple-premium hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-120 border border-purple-premium/50 hover:border-accent-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] animate-entrance-scale" style={{animationDelay: '0.1s'}}>▶</a>
            </div>
          </div>

          {/* Packages */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h4 className="font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-cyan-premium text-sm tracking-wide animate-text-glow">PACKAGES</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="group"><a href="#" className="hover:text-accent-gold hover:translate-x-2 transition-all duration-300 inline-block group-hover:animate-pulse-scale">Essential Reveal</a></li>
              <li className="group"><a href="#" className="hover:text-accent-gold hover:translate-x-2 transition-all duration-300 inline-block group-hover:animate-pulse-scale">Signature Reveal</a></li>
              <li className="group"><a href="#" className="hover:text-accent-gold hover:translate-x-2 transition-all duration-300 inline-block group-hover:animate-pulse-scale">Luxury Reveal</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-premium to-accent-gold text-sm tracking-wide animate-text-glow">COMPANY</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="group"><a href="#" className="hover:text-cyan-premium hover:translate-x-2 transition-all duration-300 inline-block group-hover:animate-pulse-scale">About</a></li>
              <li className="group"><a href="#" className="hover:text-cyan-premium hover:translate-x-2 transition-all duration-300 inline-block group-hover:animate-pulse-scale">Gallery</a></li>
              <li className="group"><a href="#" className="hover:text-cyan-premium hover:translate-x-2 transition-all duration-300 inline-block group-hover:animate-pulse-scale">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h4 className="font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-cyan-premium text-sm tracking-wide animate-text-glow">CONTACT</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="group"><a href="mailto:motologisticmoments@gmail.com" className="hover:text-cyan-premium transition-all duration-300 group-hover:animate-bounce-in">motologisticmoments@gmail.com</a></li>
              <li className="group"><a href="tel:+919398415471" className="hover:text-accent-gold transition-all duration-300 group-hover:animate-bounce-in">+91 9398415471</a></li>
              <li><p className="text-xs text-gray-400 animate-floating">Available 365 days</p></li>
            </ul>
          </div>
        </div>

        {/* Animated Divider */}
        <div className="border-t border-gradient-to-r from-cyan-premium via-accent-gold to-purple-premium relative">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer-light h-px bg-gradient-to-r from-transparent via-cyan-premium to-transparent"></div>
          <div className="pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs md:text-sm gap-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <p className="hover:text-cyan-premium transition-all duration-300 cursor-default">&copy; {currentYear} Motologistic Moments. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-accent-gold transition-all duration-300 hover:shadow-[0_0_10px_rgba(212,175,55,0.5)] rounded px-2 py-1 group hover:animate-pulse-scale">Privacy</a>
                <a href="#" className="hover:text-cyan-premium transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,229,255,0.5)] rounded px-2 py-1 group hover:animate-pulse-scale">Terms</a>
                <a href="#" className="hover:text-accent-gold transition-all duration-300 hover:shadow-[0_0_10px_rgba(212,175,55,0.5)] rounded px-2 py-1 group hover:animate-pulse-scale">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
