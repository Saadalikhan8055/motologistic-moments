export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-luxury-dark via-luxury-dark to-black text-text-primary relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent-cyan/30 to-transparent rounded-full filter blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 relative z-10">
        {/* Main Grid */}
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple p-0.5">
                <div className="w-full h-full rounded-full bg-luxury-dark flex items-center justify-center">
                  <span className="text-accent-gold font-bold text-sm">MM</span>
                </div>
              </div>
              <h3 className="text-xl font-bold">
                <span className="text-accent-gold">Motologistic</span>
                <span className="text-accent-cyan"> Moments</span>
              </h3>
            </div>
            <p className="text-text-secondary text-sm mb-6 leading-relaxed">
              Transforming vehicle delivery into refined, memorable moments.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/motologisticmoments?igsh=MWZucDFleXUwYjVuNQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent-cyan/20 hover:bg-accent-cyan text-accent-cyan hover:text-luxury flex items-center justify-center transition-all duration-300 hover:scale-110">📷</a>
              <a href="https://youtube.com/@motologistic110?si=-IAH2-AgCoLI2OMz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent-purple/20 hover:bg-accent-purple text-accent-purple hover:text-luxury flex items-center justify-center transition-all duration-300 hover:scale-110">▶</a>
            </div>
          </div>

          {/* Packages */}
          <div>
            <h4 className="font-bold mb-6 text-accent-gold text-sm tracking-wide">PACKAGES</h4>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li><a href="#" className="hover:text-accent-gold transition-all duration-300">Essential Reveal</a></li>
              <li><a href="#" className="hover:text-accent-gold transition-all duration-300">Signature Reveal</a></li>
              <li><a href="#" className="hover:text-accent-gold transition-all duration-300">Luxury Reveal</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6 text-accent-gold text-sm tracking-wide">COMPANY</h4>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li><a href="#" className="hover:text-accent-gold transition-all duration-300">About</a></li>
              <li><a href="#" className="hover:text-accent-gold transition-all duration-300">Gallery</a></li>
              <li><a href="#" className="hover:text-accent-gold transition-all duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-accent-gold text-sm tracking-wide">CONTACT</h4>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li><a href="mailto:motologisticmoments@gmail.com" className="hover:text-accent-gold transition-all duration-300">motologisticmoments@gmail.com</a></li>
              <li><a href="tel:+919398415471" className="hover:text-accent-gold transition-all duration-300">+91 9398415471</a></li>
              <li><p className="text-xs text-text-secondary">Available 365 days</p></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent-cyan/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-text-secondary text-xs md:text-sm gap-6">
            <p>&copy; {currentYear} Motologistic Moments. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent-gold transition-all duration-300">Privacy</a>
              <a href="#" className="hover:text-accent-gold transition-all duration-300">Terms</a>
              <a href="#" className="hover:text-accent-gold transition-all duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
