import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'

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

async function initializeSheet(): Promise<GoogleSpreadsheet> {
  const email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  let key = process.env.GOOGLE_SHEETS_PRIVATE_KEY || ''
  const sheetId = process.env.GOOGLE_SHEETS_ID

  if (!email) {
    throw new Error('❌ Missing GOOGLE_SHEETS_CLIENT_EMAIL environment variable')
  }
  if (!key) {
    throw new Error('❌ Missing GOOGLE_SHEETS_PRIVATE_KEY environment variable')
  }
  if (!sheetId) {
    throw new Error('❌ Missing GOOGLE_SHEETS_ID environment variable')
  }

  // Handle different private key formats
  // Replace escaped newlines with actual newlines (handles both \\n and \n)
  key = key.replace(/\\n/g, '\n').replace(/\\\\n/g, '\n')
  
  // Ensure key starts and ends with BEGIN/END markers
  if (!key.includes('BEGIN PRIVATE KEY')) {
    throw new Error('❌ Invalid private key format - missing BEGIN PRIVATE KEY marker')
  }

  try {
    const auth = new JWT({
      email,
      key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const doc = new GoogleSpreadsheet(sheetId, auth)
    await doc.loadInfo()
    return doc
  } catch (error: any) {
    console.error('❌ Failed to authenticate with Google Sheets:', {
      message: error?.message,
      code: error?.code,
      status: error?.status,
    })
    throw error
  }
}

export async function getBookings(): Promise<Booking[]> {
  try {
    const doc = await initializeSheet()
    const sheet = doc.sheetsByTitle['bookings'] || doc.sheetsByIndex[0]
    
    if (!sheet) {
      console.error('No sheet found')
      return []
    }

    const rows = await sheet.getRows<Booking>()
    return rows.map((row) => ({
      id: Number(row.get('id')),
      timestamp: row.get('timestamp'),
      fullName: row.get('fullName'),
      email: row.get('email'),
      phone: row.get('phone'),
      vehicleModel: row.get('vehicleModel'),
      preferredDate: row.get('preferredDate'),
      package: row.get('package'),
      specialRequests: row.get('specialRequests'),
      status: row.get('status'),
    }))
  } catch (error) {
    console.error('Error fetching bookings from Google Sheets:', error)
    return []
  }
}

export async function addBooking(booking: Booking): Promise<boolean> {
  try {
    const doc = await initializeSheet()
    const sheet = doc.sheetsByTitle['bookings'] || doc.sheetsByIndex[0]
    
    if (!sheet) {
      console.error('❌ Sheet "bookings" not found. Available sheets:', Object.keys(doc.sheetsByTitle))
      return false
    }

    await sheet.addRow({
      id: booking.id.toString(),
      timestamp: booking.timestamp,
      fullName: booking.fullName,
      email: booking.email,
      phone: booking.phone,
      vehicleModel: booking.vehicleModel,
      preferredDate: booking.preferredDate,
      package: booking.package,
      specialRequests: booking.specialRequests,
      status: booking.status,
    })

    return true
  } catch (error: any) {
    console.error('❌ Error adding booking to Google Sheets:', {
      message: error?.message,
      code: error?.code,
      status: error?.status,
      fullError: JSON.stringify(error, null, 2)
    })
    return false
  }
}

export async function updateBookingStatus(bookingId: number, newStatus: string): Promise<boolean> {
  try {
    const doc = await initializeSheet()
    const sheet = doc.sheetsByTitle['bookings'] || doc.sheetsByIndex[0]
    
    if (!sheet) {
      console.error('No sheet found')
      return false
    }

    const rows = await sheet.getRows<Booking>()
    const row = rows.find((r) => Number(r.get('id')) === bookingId)
    
    if (!row) {
      console.error(`Booking with id ${bookingId} not found`)
      return false
    }

    row.set('status', newStatus)
    await row.save()
    return true
  } catch (error) {
    console.error('Error updating booking status in Google Sheets:', error)
    return false
  }
}

export async function deleteBooking(bookingId: number): Promise<boolean> {
  try {
    const doc = await initializeSheet()
    const sheet = doc.sheetsByTitle['bookings'] || doc.sheetsByIndex[0]
    
    if (!sheet) {
      console.error('No sheet found')
      return false
    }

    const rows = await sheet.getRows<Booking>()
    const row = rows.find((r) => Number(r.get('id')) === bookingId)
    
    if (!row) {
      console.error(`Booking with id ${bookingId} not found`)
      return false
    }

    await row.delete()
    return true
  } catch (error) {
    console.error('Error deleting booking from Google Sheets:', error)
    return false
  }
}

export async function importBookings(bookings: Booking[]): Promise<{ imported: number; updated: number; errors: string[] }> {
  try {
    const doc = await initializeSheet()
    const sheet = doc.sheetsByTitle['bookings']
    
    if (!sheet) {
      console.error('Sheet "bookings" not found')
      return { imported: 0, updated: 0, errors: ['Sheet not found'] }
    }

    const existingRows = await sheet.getRows<Booking>()
    let imported = 0
    let updated = 0
    const errors: string[] = []

    for (const booking of bookings) {
      try {
        const existingRow = existingRows.find((r) => Number(r.get('id')) === booking.id)
        
        if (existingRow) {
          existingRow.set('timestamp', booking.timestamp)
          existingRow.set('fullName', booking.fullName)
          existingRow.set('email', booking.email)
          existingRow.set('phone', booking.phone)
          existingRow.set('vehicleModel', booking.vehicleModel)
          existingRow.set('preferredDate', booking.preferredDate)
          existingRow.set('package', booking.package)
          existingRow.set('specialRequests', booking.specialRequests)
          existingRow.set('status', booking.status)
          await existingRow.save()
          updated++
        } else {
          await sheet.addRow({
            id: booking.id.toString(),
            timestamp: booking.timestamp,
            fullName: booking.fullName,
            email: booking.email,
            phone: booking.phone,
            vehicleModel: booking.vehicleModel,
            preferredDate: booking.preferredDate,
            package: booking.package,
            specialRequests: booking.specialRequests,
            status: booking.status,
          })
          imported++
        }
      } catch (error) {
        errors.push(`Error processing booking ${booking.id}: ${error}`)
      }
    }

    return { imported, updated, errors }
  } catch (error) {
    console.error('Error importing bookings to Google Sheets:', error)
    return { imported: 0, updated: 0, errors: [`Import failed: ${error}`] }
  }
}
