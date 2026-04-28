import { NextRequest, NextResponse } from 'next/server'
import * as XLSX from 'xlsx'
import { importBookings } from '@/lib/googleSheets'

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

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Read the file
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Parse the Excel file
    const workbook = XLSX.read(buffer, { type: 'buffer' })
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const importedData = XLSX.utils.sheet_to_json(worksheet) as Array<Record<string, unknown>>

    // Validate and prepare bookings
    const bookings: Booking[] = []
    const errors: string[] = []

    for (const row of importedData) {
      try {
        // Validate required fields
        if (!row.id || !row.fullName || !row.email || !row.phone) {
          errors.push(`Row skipped: Missing required fields (id, fullName, email, phone)`)
          continue
        }

        const booking: Booking = {
          id: Number(row.id),
          timestamp: String(row.timestamp || new Date().toISOString()),
          fullName: String(row.fullName),
          email: String(row.email),
          phone: String(row.phone),
          vehicleModel: String(row.vehicleModel || ''),
          preferredDate: String(row.preferredDate || ''),
          package: String(row.package || ''),
          specialRequests: String(row.specialRequests || ''),
          status: String(row.status || 'pending')
        }

        bookings.push(booking)
      } catch (error) {
        errors.push(`Row error: ${error}`)
      }
    }

    // Import to Google Sheets
    const result = await importBookings(bookings)

    return NextResponse.json({
      success: true,
      message: `Imported ${result.imported} new bookings, updated ${result.updated} existing bookings`,
      imported: result.imported,
      updated: result.updated,
      errors: errors.length > 0 || result.errors.length > 0 ? [...errors, ...result.errors] : undefined
    })
  } catch (error) {
    console.error('Error importing bookings:', error)
    return NextResponse.json(
      { error: 'Failed to import bookings', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
