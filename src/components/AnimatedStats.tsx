'use client'

import { useState, useEffect } from 'react'

export default function AnimatedStats() {
  const [mounted, setMounted] = useState(false)
  const [counters, setCounters] = useState({
    satisfaction: 0,
    projects: 0,
    clients: 0,
    uptime: 0
  })

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCounters(prev => ({
        satisfaction: prev.satisfaction < 98 ? prev.satisfaction + 2 : 98,
        projects: prev.projects < 250 ? prev.projects + 5 : 250,
        clients: prev.clients < 180 ? prev.clients + 4 : 180,
        uptime: prev.uptime < 99.9 ? prev.uptime + 0.2 : 99.9
      }))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <section className="bg-gradient-to-br from-gray-900 via-luxury to-black relative py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-premium rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-20" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-premium rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-20" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-rose-premium rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-15" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="heading-md mb-6 text-white animate-fade-in-down">
            Delivering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-premium via-accent to-purple-premium">Excellence</span> Every Drive
          </h2>
          <p className="text-gray-300 text-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Join hundreds of satisfied clients who have experienced the ultimate in automotive reveal services
          </p>
        </div>

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { label: 'Customer Satisfaction', value: counters.satisfaction, suffix: '%', color: 'cyan', icon: '⭐' },
            { label: 'Reveals Completed', value: counters.projects, suffix: '+', color: 'emerald', icon: '🎯' },
            { label: 'Happy Clients', value: counters.clients, suffix: '+', color: 'purple', icon: '👥' },
            { label: 'Service Uptime', value: counters.uptime, suffix: '%', color: 'rose', icon: '✅' }
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="group relative animate-fade-in-up"
              style={{animationDelay: `${0.1 * idx}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-premium to-purple-premium rounded-2xl p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className={`relative bg-gray-800 bg-opacity-80 backdrop-blur-xl rounded-2xl p-8 h-full transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl border border-gray-700 group-hover:border-${stat.color}-premium`}>
                <div className="mb-6 text-5xl drop-shadow-lg animate-bounce-slow" style={{animationDelay: `${0.2 * idx}s`}}>
                  {stat.icon}
                </div>
                <div className={`text-6xl font-bold mb-3 drop-shadow-lg ${
                  stat.color === 'cyan' ? 'text-cyan-premium' :
                  stat.color === 'purple' ? 'text-purple-premium' :
                  stat.color === 'emerald' ? 'text-emerald-premium' :
                  'text-rose-premium'
                } transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(0,212,255,0.5)]`}>
                  {Math.floor(stat.value)}{stat.suffix}
                </div>
                <p className="text-gray-300 text-lg font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Bar Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Chart 1: Service Quality Metrics */}
          <div className="animate-fade-in-left" style={{animationDelay: '0.4s'}}>
            <div className="bg-gray-800 bg-opacity-80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700 h-full">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                Service Quality Metrics
              </h3>
              <div className="space-y-6">
                {[
                  { label: 'Photography Quality', value: 95, color: 'cyan' },
                  { label: 'Client Communication', value: 98, color: 'emerald' },
                  { label: 'On-Time Delivery', value: 100, color: 'rose' },
                  { label: 'Equipment Reliability', value: 99, color: 'purple' }
                ].map((metric, idx) => (
                  <div key={idx} className="animate-fade-in-up" style={{animationDelay: `${0.5 + idx * 0.1}s`}}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-200 font-medium">{metric.label}</span>
                      <span className={`font-bold text-lg ${
                        metric.color === 'cyan' ? 'text-cyan-premium' :
                        metric.color === 'emerald' ? 'text-emerald-premium' :
                        metric.color === 'rose' ? 'text-rose-premium' :
                        'text-purple-premium'
                      }`}>{metric.value}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-2000 ease-out animate-fill-bar ${
                          metric.color === 'cyan' ? 'bg-gradient-to-r from-cyan-premium to-blue-500' :
                          metric.color === 'emerald' ? 'bg-gradient-to-r from-emerald-premium to-teal-500' :
                          metric.color === 'rose' ? 'bg-gradient-to-r from-rose-premium to-pink-500' :
                          'bg-gradient-to-r from-purple-premium to-blue-500'
                        }`}
                        style={{
                          width: '0%',
                          animation: `fillBar 2s ease-out ${0.5 + idx * 0.15}s forwards`,
                          animationFillMode: 'forwards'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chart 2: Experience Breakdown */}
          <div className="animate-fade-in-right" style={{animationDelay: '0.4s'}}>
            <div className="bg-gray-800 bg-opacity-80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700 h-full">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                Package Popularity
              </h3>
              <div className="space-y-6">
                {[
                  { label: 'Essential Reveal', value: 35, color: 'emerald', count: '350 bookings' },
                  { label: 'Signature Reveal', value: 50, color: 'cyan', count: '500 bookings' },
                  { label: 'Luxury Reveal', value: 15, color: 'purple', count: '150 bookings' }
                ].map((pkg, idx) => (
                  <div key={idx} className="animate-fade-in-down" style={{animationDelay: `${0.6 + idx * 0.12}s`}}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-200 font-medium">{pkg.label}</span>
                      <span className="text-sm text-gray-400">{pkg.count}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-700 rounded-full h-4 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-2500 ease-out ${
                            pkg.color === 'cyan' ? 'bg-gradient-to-r from-cyan-premium via-blue-500 to-cyan-premium' :
                            pkg.color === 'emerald' ? 'bg-gradient-to-r from-emerald-premium via-teal-500 to-emerald-premium' :
                            'bg-gradient-to-r from-purple-premium via-pink-500 to-purple-premium'
                          }`}
                          style={{
                            width: '0%',
                            animation: `fillBar 2.5s ease-out ${0.6 + idx * 0.15}s forwards`,
                            animationFillMode: 'forwards'
                          }}
                        ></div>
                      </div>
                      <span className={`text-lg font-bold w-12 text-right ${
                        pkg.color === 'cyan' ? 'text-cyan-premium' :
                        pkg.color === 'emerald' ? 'text-emerald-premium' :
                        'text-purple-premium'
                      }`}>{pkg.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Moving Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: '📷', 
              title: 'Professional Photography',
              description: 'Ultra HD 4K captures with professional lighting',
              delay: '0.2s',
              color: 'cyan'
            },
            { 
              icon: '🎬', 
              title: 'Cinematic Videos', 
              description: 'Stunning panoramic and slow-motion sequences',
              delay: '0.4s',
              color: 'purple'
            },
            { 
              icon: '✨', 
              title: 'Premium Experience',
              description: 'White-glove service with meticulous attention',
              delay: '0.6s',
              color: 'rose'
            },
            { 
              icon: '🎯', 
              title: 'Precise Planning',
              description: 'Every detail mapped out for perfection',
              delay: '0.8s',
              color: 'emerald'
            },
            { 
              icon: '🌟', 
              title: 'Memorable Moments',
              description: 'Create lasting memories with every reveal',
              delay: '1s',
              color: 'cyan'
            },
            { 
              icon: '🚀', 
              title: 'Quick Turnaround',
              description: '24-48 hour video and photo delivery',
              delay: '1.2s',
              color: 'purple'
            }
          ].map((feature, idx) => (
            <div 
              key={idx}
              className="group animate-fade-in-up"
              style={{animationDelay: feature.delay}}
            >
              <div className={`relative bg-gray-800 bg-opacity-80 backdrop-blur-xl rounded-2xl p-8 h-full border border-gray-700 transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:border-${feature.color}-premium overflow-hidden`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-premium to-purple-premium opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 drop-shadow-lg group-hover:animate-bounce transform group-hover:scale-125 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>

                {/* Animated bottom border */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-700 ${
                  feature.color === 'cyan' ? 'bg-gradient-to-r from-cyan-premium to-blue-500' :
                  feature.color === 'purple' ? 'bg-gradient-to-r from-purple-premium to-pink-500' :
                  feature.color === 'rose' ? 'bg-gradient-to-r from-rose-premium to-red-500' :
                  'bg-gradient-to-r from-emerald-premium to-teal-500'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
