'use client'

import { useState } from 'react'

interface BookingProps {
  onClose: () => void
  onPackageSelect?: (packageName: string) => void
}

export default function Booking({ onClose, onPackageSelect: _onPackageSelect }: BookingProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    vehicleModel: '',
    preferredDate: '',
    package: '',
    specialRequests: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [emailNotification, setEmailNotification] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Add 10 second timeout to the fetch request
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000)

      // Call API endpoint to process booking
      const response = await fetch('/api/submit-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      const result = await response.json()

      if (result.success) {
        // Show success message and close after a delay
        setSubmitted(true)
        
        // Show email status if available
        if (!result.emailSent) {
          setEmailNotification('Note: Email notifications could not be sent at this time, but your booking is saved.')
        }
        
        // Auto-close after 3 seconds
        setTimeout(() => {
          onClose()
          setSubmitted(false)
          setEmailNotification('')
        }, 3000)
      } else {
        // Show error message from API
        setError(result.error || 'Failed to submit booking. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting booking:', error)
      if (error instanceof Error && error.name === 'AbortError') {
        setError('Request timeout. Please check your Firebase configuration in .env.local and try again.')
      } else {
        setError('Error submitting booking. Please check your connection and try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in-down">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto shadow-2xl transform transition-all">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-luxury to-gray-900 text-white p-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Reserve Your Experience</h2>
            <p className="text-gray-300 text-sm mt-2 font-light">Complete the form below to book your premium reveal</p>
          </div>
          <button
            onClick={onClose}
            className="text-3xl hover:opacity-70 transition-all duration-300 hover:scale-110"
          >
            ✕
          </button>
        </div>

        {/* Form or Success Message */}
        {submitted ? (
          <div className="p-12 text-center animate-fade-in-up">
            <div className="text-8xl mb-6 animate-bounce">✓</div>
            <h3 className="text-3xl font-bold text-luxury mb-3">Booking Submitted!</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Thank you for choosing Motologistic Moments. We have received your booking request and will contact you within 24 hours to confirm your experience.
            </p>
            
            {emailNotification && (
              <div className="bg-yellow-50 border-2 border-yellow-300 text-yellow-800 px-5 py-3 rounded-lg mb-6 text-sm">
                ⚠️ {emailNotification}
              </div>
            )}
            
            <div className="mt-8 h-1 bg-gradient-to-r from-accent to-yellow-500 rounded-full animate-pulse"></div>
            <p className="text-sm text-gray-500 mt-6 font-light">This modal will close automatically...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-10 space-y-8">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-2 border-red-300 text-red-800 px-5 py-4 rounded-lg animate-fade-in-up">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <p className="font-bold mb-1">Booking Error</p>
                    <p className="text-sm">{error}</p>
                  </div>
                </div>
              </div>
            )}
            {/* Contact Information */}
            <div className="animate-fade-in-up">
              <h3 className="text-xl font-bold mb-6 text-luxury flex items-center gap-2">
                <span className="text-2xl">👤</span> Contact Information
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3 group-hover:text-accent transition-colors">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-all duration-300 font-medium group-hover:border-accent text-gray-900 placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3 group-hover:text-accent transition-colors">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-all duration-300 font-medium group-hover:border-accent text-gray-900 placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="md:col-span-2 group">
                  <label className="block text-sm font-bold text-gray-700 mb-3 group-hover:text-accent transition-colors">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-all duration-300 font-medium group-hover:border-accent text-gray-900 placeholder-gray-500"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
              </div>
            </div>

            {/* Experience Details */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-bold mb-6 text-luxury flex items-center gap-2">
                <span className="text-2xl">🚗</span> Experience Details
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3 group-hover:text-accent transition-colors">
                    Vehicle Model *
                  </label>
                  <input
                    type="text"
                    name="vehicleModel"
                    value={formData.vehicleModel}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-all duration-300 font-medium group-hover:border-accent text-gray-900 placeholder-gray-500"
                    placeholder="e.g., Tesla Model S"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3 group-hover:text-accent transition-colors">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-all duration-300 font-medium group-hover:border-accent text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div className="md:col-span-2 group">
                  <label className="block text-sm font-bold text-gray-700 mb-3 group-hover:text-accent transition-colors">
                    Package Selection *
                  </label>
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-all duration-300 font-medium group-hover:border-accent bg-white text-gray-900"
                  >
                    <option value="" className="text-gray-400">Choose your package</option>
                    <option value="essential" className="text-gray-900">✨ Essential Reveal - ₹14,999</option>
                    <option value="signature" className="text-gray-900">🎬 Signature Reveal - ₹19,999</option>
                    <option value="luxury" className="text-gray-900">👑 Luxury Reveal - ₹29,999</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <label className="block text-sm font-bold text-gray-700 mb-3 group-hover:text-accent">
                ✨ Special Requests
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none h-32 resize-none transition-all duration-300 font-medium text-gray-900 placeholder-gray-500 focus:text-gray-900"
                placeholder="Tell us about any special preferences or requirements..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-luxury to-gray-900 text-white text-lg font-bold py-4 px-6 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group animate-fade-in-up disabled:opacity-50 disabled:cursor-not-allowed"
              style={{animationDelay: '0.3s'}}
            >
              <span className="relative z-10">{loading ? 'Submitting...' : 'Request Booking'}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>

            <p className="text-xs text-gray-500 text-center font-light">
              We'll review your request and contact you within 24 hours to confirm availability.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
