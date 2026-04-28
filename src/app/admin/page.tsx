'use client'

import { useState, useEffect } from 'react'

interface Booking {
  id: number
  timestamp: string
  fullName: string
  email: string
  phone: string
  vehicleModel: string
  preferredDate: string
  package: string
  specialRequests: string
  status: string
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [importing, setImporting] = useState(false)
  const [importMessage, setImportMessage] = useState('')

  useEffect(() => {
    // Check if already authenticated
    const auth = localStorage.getItem('adminAuth')
    if (auth === 'true') {
      setIsAuthenticated(true)
      fetchBookings()
    } else {
      setLoading(false)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, validate against backend
    // For now: use default password
    if (password === 'admin@123') {
      localStorage.setItem('adminAuth', 'true')
      setIsAuthenticated(true)
      setPassword('')
      fetchBookings()
    } else {
      alert('Invalid password. Hint: Use admin credentials')
      setPassword('')
    }
  }

  const fetchBookings = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/bookings')
      const data = await response.json()
      setBookings(data)
    } catch (error) {
      console.error('Error fetching bookings:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (bookingId: number, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      })
      if (response.ok) {
        fetchBookings()
      } else {
        alert('Failed to update booking status')
      }
    } catch (error) {
      console.error('Error updating booking:', error)
      alert('Error updating booking status')
    }
  }

  const deleteBooking = async (bookingId: number) => {
    if (confirm('Are you sure you want to delete this booking?')) {
      try {
        const response = await fetch(`/api/admin/bookings/${bookingId}`, {
          method: 'DELETE'
        })
        if (response.ok) {
          fetchBookings()
          alert('Booking deleted successfully')
        } else {
          alert('Failed to delete booking')
        }
      } catch (error) {
        console.error('Error deleting booking:', error)
        alert('Error deleting booking')
      }
    }
  }

  const handleExportExcel = async () => {
    try {
      const response = await fetch('/api/admin/bookings/export')
      if (!response.ok) {
        throw new Error('Failed to export bookings')
      }
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `bookings-${new Date().toISOString().split('T')[0]}.xlsx`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('Error exporting bookings:', error)
      alert('Failed to export bookings')
    }
  }

  const handleImportExcel = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      setImporting(true)
      setImportMessage('')
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/admin/bookings/import', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()
      
      if (response.ok) {
        setImportMessage(`✅ ${result.message}`)
        fetchBookings()
        // Clear the input
        event.target.value = ''
        setTimeout(() => setImportMessage(''), 5000)
      } else {
        setImportMessage(`❌ ${result.error}`)
      }
    } catch (error) {
      console.error('Error importing bookings:', error)
      setImportMessage('❌ Failed to import bookings')
    } finally {
      setImporting(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    setIsAuthenticated(false)
    setPassword('')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-luxury via-gray-900 to-black flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-luxury mb-2">Admin Login</h1>
          <p className="text-gray-600 mb-6">Motologistic Moments Booking Management</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-all"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-luxury to-gray-900 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury via-gray-900 to-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">📋 Booking Dashboard</h1>
            <p className="text-gray-300">Manage your booking requests</p>
          </div>
          <div className="flex gap-3 flex-wrap justify-end">
            <button
              onClick={handleExportExcel}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-bold transition-all flex items-center gap-2"
            >
              📥 Export to Excel
            </button>
            <label className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-2">
              📤 Import Excel
              <input
                type="file"
                accept=".xlsx,.xls,.csv"
                onChange={handleImportExcel}
                disabled={importing}
                className="hidden"
              />
            </label>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-bold transition-all"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Import Message */}
        {importMessage && (
          <div className={`mb-4 p-4 rounded-lg font-bold ${
            importMessage.startsWith('✅') 
              ? 'bg-green-900 text-green-200 border border-green-700' 
              : 'bg-red-900 text-red-200 border border-red-700'
          }`}>
            {importMessage}
          </div>
        )}

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6">
            <p className="text-blue-100 text-sm mb-2">Total Bookings</p>
            <p className="text-3xl font-bold">{bookings.length}</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-6">
            <p className="text-yellow-100 text-sm mb-2">Pending</p>
            <p className="text-3xl font-bold">{bookings.filter(b => b.status === 'pending').length}</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6">
            <p className="text-green-100 text-sm mb-2">Confirmed</p>
            <p className="text-3xl font-bold">{bookings.filter(b => b.status === 'confirmed').length}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6">
            <p className="text-purple-100 text-sm mb-2">Completed</p>
            <p className="text-3xl font-bold">{bookings.filter(b => b.status === 'completed').length}</p>
          </div>
        </div>

        {/* Bookings Table */}
        {loading ? (
          <div className="text-center py-12">
            <div className="text-2xl text-gray-300">Loading bookings...</div>
          </div>
        ) : bookings.length === 0 ? (
          <div className="bg-gray-800 rounded-xl p-12 text-center">
            <p className="text-gray-400 text-lg">No bookings yet</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-800 border-b border-gray-700">
                  <th className="px-6 py-4 text-left text-sm font-bold">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Contact</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Vehicle</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Package</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4">{booking.fullName}</td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <p>{booking.email}</p>
                        <p className="text-gray-400">{booking.phone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">{booking.vehicleModel}</td>
                    <td className="px-6 py-4">{booking.package}</td>
                    <td className="px-6 py-4">{new Date(booking.preferredDate).toLocaleDateString()}</td>
                    <td className="px-6 py-4">
                      <select
                        value={booking.status}
                        onChange={(e) => updateStatus(booking.id, e.target.value)}
                        className={`px-3 py-1 rounded-full text-sm font-bold border-none cursor-pointer ${
                          booking.status === 'pending' ? 'bg-yellow-500 text-black' :
                          booking.status === 'confirmed' ? 'bg-green-500 text-white' :
                          booking.status === 'completed' ? 'bg-blue-500 text-white' :
                          'bg-red-500 text-white'
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={`https://wa.me/${booking.phone.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm font-bold mr-2 transition-all"
                      >
                        WhatsApp
                      </a>
                      <button
                        onClick={() => deleteBooking(booking.id)}
                        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm font-bold transition-all"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
