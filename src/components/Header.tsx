interface HeaderProps {
  onBookClick: () => void
}

export default function Header({ onBookClick }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-luxury via-luxury-light to-luxury-dark text-white sticky top-0 z-50 shadow-2xl border-b-2 border-cyan-premium/20 backdrop-blur-sm">
      <div className="absolute inset-0 opacity-10 h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-cyan-premium to-transparent blur-3xl animate-light-beam"></div>
        <div className="absolute top-0 left-1/2 w-96 h-full bg-gradient-to-l from-accent-gold to-transparent blur-3xl opacity-50 animate-light-beam" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="container py-5 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3 group hover:animate-float-bounce">
          {/* Logo Icon */}
          <div className="relative w-14 h-14 bg-gradient-to-br from-accent-gold to-purple-premium rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] group-hover:scale-110 transition-all duration-300 p-2 animate-pulse-dot">
            <img 
              src="/logo.png" 
              alt="Motologistic Moments Logo" 
              className="w-full h-full object-contain filter drop-shadow-lg"
            />
          </div>
          
          {/* Logo Text */}
          <div className="text-2xl font-bold tracking-tight flex flex-col">
            <span className="text-accent-gold group-hover:animate-text-glow transition-colors duration-300 font-black leading-none">Motologistic</span>
            <span className="text-xs bg-gradient-to-r from-cyan-premium to-purple-premium bg-clip-text text-transparent font-semibold leading-none animate-gradient-flow">MOMENTS</span>
          </div>
        </div>
        <nav className="hidden md:flex gap-10 items-center">
          <a href="#packages" className="text-gray-300 hover:text-cyan-premium font-medium transition-all duration-300 relative group">
            Packages
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-premium to-accent-gold group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#gallery" className="text-gray-300 hover:text-cyan-premium font-medium transition-all duration-300 relative group">
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-premium to-accent-gold group-hover:w-full transition-all duration-300"></span>
          </a>
          <button
            onClick={onBookClick}
            className="btn-primary text-sm font-bold shadow-pulse hover:shadow-[0_0_25px_rgba(212,175,55,0.8)] animate-bounce-in"
          >
            Book Now
          </button>
        </nav>
        <button
          onClick={onBookClick}
          className="md:hidden btn-primary text-sm font-bold shadow-pulse"
        >
          Book
        </button>
      </div>
    </header>
  )
}
