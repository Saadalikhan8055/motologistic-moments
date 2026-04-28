// Database operations using Render PostgreSQL
import { Pool } from 'pg'
import * as fs from 'fs'
import * as path from 'path'

// Validate configuration
function validateConfig() {
  const connectionString = process.env.POSTGRES_CONNECTION_STRING
  
  if (!connectionString) {
    const error = 'PostgreSQL connection string not configured. Add POSTGRES_CONNECTION_STRING to .env.local'
    console.error('❌ ' + error)
    throw new Error(error)
  }
  
  if (connectionString.includes('your_') || connectionString === 'postgresql://user:password@hostname:5432/dbname') {
    const error = 'PostgreSQL connection string is a placeholder. See SETUP_RENDER.md for setup instructions'
    console.error('❌ ' + error)
    throw new Error(error)
  }
  
  return connectionString
}

let pool: Pool | null = null
let tablesInitialized = false

function getDatabase() {
  if (!pool) {
    try {
      const connectionString = validateConfig()
      
      // Create pool with optimized settings for Render
      // Render requires SSL connections
      pool = new Pool({
        connectionString,
        ssl: {
          rejectUnauthorized: false, // Allow Render's SSL certificates
        },
        // Pool settings
        max: 1, // Start with 1 connection
        min: 0,
        idleTimeoutMillis: 5000, // 5 seconds idle timeout
        connectionTimeoutMillis: 5000, // 5 seconds to establish connection
      })
      
      // Error handling
      pool.on('error', (err) => {
        console.error('🔴 Unexpected pool error:', err)
        pool = null // Reset pool on error
      })
      
      console.log('✓ PostgreSQL pool created (SSL enabled)')
    } catch (error) {
      console.error('❌ Failed to create database pool:', error)
      throw error
    }
  }
  return pool
}

// Initialize database tables once
async function initializeTables() {
  if (tablesInitialized) return
  
  const db = getDatabase()
  try {
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS bookings (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        vehicle_model VARCHAR(255),
        preferred_date DATE,
        package VARCHAR(100),
        special_requests TEXT,
        status VARCHAR(50) DEFAULT 'pending',
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `
    
    await db.query(createTableSQL)
    tablesInitialized = true
    console.log('✓ Database tables initialized')
  } catch (error: any) {
    if (error.code === '42P07') {
      // Table already exists
      tablesInitialized = true
      console.log('✓ Bookings table already exists')
    } else {
      console.error('❌ Table initialization error:', error.message || error)
      throw new Error(`Failed to initialize tables: ${error.message}`)
    }
  }
}

// Helper function to transform PostgreSQL snake_case to camelCase
function transformPostgresRow(row: any) {
  return {
    id: row.id,
    timestamp: row.timestamp,
    fullName: row.full_name,
    email: row.email,
    phone: row.phone,
    vehicleModel: row.vehicle_model,
    preferredDate: row.preferred_date,
    package: row.package,
    specialRequests: row.special_requests,
    status: row.status
  }
}

export async function getAllBookings() {
  try {
    const db = getDatabase()
    await initializeTables()
    
    const result = await db.query(
      'SELECT * FROM bookings ORDER BY timestamp DESC'
    )
    
    // If PostgreSQL returns data, use it and transform to camelCase
    if (result.rows && result.rows.length > 0) {
      return result.rows.map(transformPostgresRow)
    }
    
    // If no data in PostgreSQL, fallback to file-based system
    console.log('ℹ No bookings in PostgreSQL, checking file-based system...')
    return getFileBasedBookings()
  } catch (error: any) {
    console.error('❌ PostgreSQL error, falling back to file-based system:', error.message || error)
    
    // Fallback to file-based system on error
    try {
      return getFileBasedBookings()
    } catch (fileError) {
      console.error('❌ Failed to read from both systems:', fileError)
      return []
    }
  }
}

// Helper function to read bookings from file-based system (fallback)
function getFileBasedBookings() {
  const dataDir = path.join(process.cwd(), 'data')
  const filePath = path.join(dataDir, 'bookings.json')
  
  try {
    if (!fs.existsSync(filePath)) {
      console.log('ℹ No file-based bookings found at', filePath)
      return []
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const bookings = JSON.parse(fileContent)
    console.log('✓ Loaded', bookings.length, 'bookings from file system')
    return bookings
  } catch (error) {
    console.error('❌ Error reading file-based bookings:', error)
    return []
  }
}

export async function addBooking(bookingData: any) {
  try {
    const db = getDatabase()
    await initializeTables()
    
    const result = await db.query(
      `INSERT INTO bookings (full_name, email, phone, vehicle_model, preferred_date, package, special_requests)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, full_name, email, phone, vehicle_model, preferred_date, package, special_requests, status, timestamp`,
      [
        bookingData.fullName,
        bookingData.email,
        bookingData.phone,
        bookingData.vehicleModel,
        bookingData.preferredDate,
        bookingData.package,
        bookingData.specialRequests || 'None'
      ]
    )
    
    console.log('✓ Booking saved with ID:', result.rows[0].id)
    return transformPostgresRow(result.rows[0])
  } catch (error: any) {
    const errorMsg = error.message || String(error)
    console.error('❌ Failed to save booking:', errorMsg)
    throw new Error(`Database error: ${errorMsg}`)
  }
}

export async function updateBookingStatus(bookingId: number, status: string) {
  try {
    const db = getDatabase()
    await initializeTables()
    
    const result = await db.query(
      'UPDATE bookings SET status = $1 WHERE id = $2 RETURNING *',
      [status, bookingId]
    )
    
    if (result.rows.length > 0) {
      console.log('✓ Booking status updated in PostgreSQL')
      return transformPostgresRow(result.rows[0])
    }
    
    // If not found in PostgreSQL, try file-based system
    console.log('ℹ Booking not found in PostgreSQL, trying file system...')
    return updateFileBasedBookingStatus(bookingId, status)
  } catch (error: any) {
    console.error('❌ PostgreSQL error, falling back to file system:', error.message || error)
    
    // Fallback to file-based system on error
    try {
      return updateFileBasedBookingStatus(bookingId, status)
    } catch (fileError) {
      console.error('❌ Failed to update booking in both systems:', fileError)
      throw fileError
    }
  }
}

// Helper function to update booking status in file-based system
function updateFileBasedBookingStatus(bookingId: number, status: string) {
  const dataDir = path.join(process.cwd(), 'data')
  const filePath = path.join(dataDir, 'bookings.json')
  
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error('Bookings file not found')
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const bookings = JSON.parse(fileContent)
    
    const bookingIndex = bookings.findIndex((b: any) => b.id === bookingId)
    if (bookingIndex === -1) {
      throw new Error('Booking not found')
    }
    
    bookings[bookingIndex].status = status
    fs.writeFileSync(filePath, JSON.stringify(bookings, null, 2))
    console.log('✓ Booking status updated in file system')
    return bookings[bookingIndex]
  } catch (error) {
    console.error('❌ Error updating booking in file system:', error)
    throw error
  }
}

export async function deleteBooking(bookingId: number) {
  try {
    const db = getDatabase()
    await initializeTables()
    
    const result = await db.query('DELETE FROM bookings WHERE id = $1 RETURNING id', [bookingId])
    
    if (result.rows.length > 0) {
      console.log('✓ Booking deleted from PostgreSQL')
      return true
    }
    
    // If not found in PostgreSQL, try file-based system
    console.log('ℹ Booking not found in PostgreSQL, trying file system...')
    return deleteFileBasedBooking(bookingId)
  } catch (error: any) {
    console.error('❌ PostgreSQL error, falling back to file system:', error.message || error)
    
    // Fallback to file-based system on error
    try {
      return deleteFileBasedBooking(bookingId)
    } catch (fileError) {
      console.error('❌ Failed to delete booking in both systems:', fileError)
      throw fileError
    }
  }
}

// Helper function to delete booking from file-based system
function deleteFileBasedBooking(bookingId: number) {
  const dataDir = path.join(process.cwd(), 'data')
  const filePath = path.join(dataDir, 'bookings.json')
  
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error('Bookings file not found')
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    let bookings = JSON.parse(fileContent)
    
    const originalLength = bookings.length
    bookings = bookings.filter((b: any) => b.id !== bookingId)
    
    if (bookings.length === originalLength) {
      throw new Error('Booking not found')
    }
    
    fs.writeFileSync(filePath, JSON.stringify(bookings, null, 2))
    console.log('✓ Booking deleted from file system')
    return true
  } catch (error) {
    console.error('❌ Error deleting booking in file system:', error)
    throw error
  }
}
