'use client'

interface BusinessDetailsProps {
  onClose: () => void
}

export default function BusinessDetails({ onClose }: BusinessDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="w-full max-w-4xl bg-gradient-to-br from-gray-900 via-luxury to-black rounded-2xl border border-cyan-premium border-opacity-30 backdrop-blur-xl shadow-2xl my-8 animate-fade-in-up">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-luxury via-purple-premium to-cyan-premium p-0.5">
          <div className="bg-gray-900 rounded-t-2xl px-8 py-6 sm:px-12 sm:py-8">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">About Motologistic Moments</h2>
                <p className="text-cyan-premium text-lg">Transforming Vehicle Deliveries Into Unforgettable Experiences</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors text-2xl flex-shrink-0 w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-8 sm:px-12 sm:py-10 space-y-8">
          {/* Mission Section */}
          <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h3 className="text-2xl font-bold text-gradient-cyan flex items-center gap-3">
              <span className="text-3xl">🎯</span> Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              At Motologistic Moments, we believe that receiving a vehicle isn't just a transaction—it's a milestone worth celebrating. Our mission is to transform ordinary deliveries into extraordinary, Instagram-worthy moments that our clients will treasure for a lifetime.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-bold text-gradient-emerald flex items-center gap-3">
              <span className="text-3xl">✨</span> Why Choose Us?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '📷', title: 'Professional Photography', desc: 'Ultra HD 4K captures with cinematic lighting' },
                { icon: '🎬', title: 'Cinematic Videos', desc: 'Slow-motion and panoramic sequences' },
                { icon: '🏆', title: 'Expert Planning', desc: 'Every detail meticulously orchestrated' },
                { icon: '⚡', title: 'Swift Turnaround', desc: '24-48 hour photo and video delivery' },
                { icon: '🌟', title: 'Premium Experience', desc: 'White-glove service from start to finish' },
                { icon: '📍', title: '365-Day Availability', desc: 'Book your reveal anytime year-round' }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700 hover:border-cyan-premium transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Process */}
          <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h3 className="text-2xl font-bold text-gradient-purple flex items-center gap-3">
              <span className="text-3xl">⚙️</span> Our Process
            </h3>
            <div className="space-y-3">
              {[
                { num: '1', title: 'Consultation', desc: 'Understand your vision and preferences' },
                { num: '2', title: 'Planning', desc: 'Design the perfect reveal experience' },
                { num: '3', title: 'Execution', desc: 'Flawlessly execute your dream moment' },
                { num: '4', title: 'Delivery', desc: 'Receive professional media within 48 hours' }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-premium to-purple-premium flex items-center justify-center flex-shrink-0 font-bold text-white">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white">{step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl font-bold text-gradient-rose flex items-center gap-3">
              <span className="text-3xl">📞</span> Get In Touch
            </h3>
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📧</span>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:motologisticmoments@gmail.com" className="text-cyan-premium hover:text-cyan-400 font-bold transition-colors">
                      motologisticmoments@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📱</span>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+919398415471" className="text-cyan-premium hover:text-cyan-400 font-bold transition-colors">
                      +91 9398415471
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <h3 className="text-2xl font-bold text-gradient-emerald flex items-center gap-3">
              <span className="text-3xl">💎</span> Our Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Excellence', desc: 'Premium quality in every detail' },
                { title: 'Innovation', desc: 'Creative approaches to storytelling' },
                { title: 'Reliability', desc: 'Consistent, professional service' }
              ].map((value, idx) => (
                <div key={idx} className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border border-gray-700 text-center hover:border-purple-premium transition-colors">
                  <h4 className="font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-gray-400 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-cyan-premium via-purple-premium to-rose-premium p-0.5 rounded-lg animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Create Your Moment?</h3>
              <p className="text-gray-300 mb-6">Let's transform your vehicle delivery into an unforgettable experience</p>
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-cyan-premium to-purple-premium text-black font-bold px-8 py-3 rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
              >
                Explore Our Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
