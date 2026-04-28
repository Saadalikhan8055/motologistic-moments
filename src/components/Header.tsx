interface HeaderProps {
  onBookClick: () => void
}

export default function Header({ onBookClick }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-luxury via-gray-900 to-black text-white sticky top-0 z-50 shadow-2xl border-b-2 border-gradient-to-r border-transparent bg-clip-padding backdrop-blur-sm">
      <div className="absolute inset-0 opacity-10 h-full">
        <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-cyan-premium to-transparent blur-3xl"></div>
      </div>
      <div className="container py-5 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3 group">
          {/* Logo Icon */}
          <div className="relative w-14 h-14 bg-gradient-to-br from-cyan-premium to-purple-premium rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 p-2">
            <img 
              src="/logo.png" 
              alt="Motologistic Moments Logo" 
              className="w-full h-full object-contain filter drop-shadow-lg"
            />
            <div className="absolute inset-0 rounded-full border-2 border-cyan-premium opacity-0 group-hover:opacity-100 animate-pulse-ring"></div>
          </div>
          
          {/* Logo Text */}
          <div className="text-2xl font-bold tracking-tight flex flex-col">
            <span className="text-accent group-hover:text-rose-premium transition-colors duration-300 font-black leading-none">Motologistic</span>
            <span className="text-xs bg-gradient-to-r from-cyan-premium to-purple-premium bg-clip-text text-transparent font-semibold leading-none">MOMENTS</span>
          </div>
        </div>
        <nav className="hidden md:flex gap-10 items-center">
          <a href="#packages" className="text-gray-300 hover:text-accent font-medium transition-all duration-300 relative group">
            Packages
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#gallery" className="text-gray-300 hover:text-accent font-medium transition-all duration-300 relative group">
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <button
            onClick={onBookClick}
            className="btn-secondary text-sm font-bold"
          >
            Book Now
          </button>
        </nav>
        <button
          onClick={onBookClick}
          className="md:hidden btn-secondary text-sm font-bold"
        >
          Book
        </button>
      </div>
    </header>
  )
}
