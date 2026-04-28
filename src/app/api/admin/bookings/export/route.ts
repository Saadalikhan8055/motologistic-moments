import { NextResponse } from 'next/server'
import * as XLSX from 'xlsx'
import { getBookings } from '@/lib/googleSheets'

export async function GET() {
  try {
    // Read bookings from Google Sheets
    const bookings = await getBookings()

    // Create a new workbook
    const ws = XLSX.utils.json_to_sheet(bookings)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Bookings')

    // Style the header row
    const range = XLSX.utils.decode_range(ws['!ref'] || 'A1')
    for (let C = range.s.c; C <= range.e.c; ++C) {
      const address = XLSX.utils.encode_col(C) + '1'
      if (!ws[address]) continue
      ws[address].font = { bold: true, color: { rgb: 'FFFFFF' } }
      ws[address].fill = { fgColor: { rgb: 'D4AF37' } }
      ws[address].alignment = { horizontal: 'center' }
    }

    // Auto-fit columns
    const colWidths = [
      { wch: 15 }, // id
      { wch: 20 }, // timestamp
      { wch: 15 }, // fullName
      { wch: 25 }, // email
      { wch: 15 }, // phone
      { wch: 18 }, // vehicleModel
      { wch: 15 }, // preferredDate
      { wch: 12 }, // package
      { wch: 25 }, // specialRequests
      { wch: 12 } // status
    ]
    ws['!cols'] = colWidths

    // Convert to buffer
    const buffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' })

    // Return as downloadable file
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Disposition': `attachment; filename="bookings-${new Date().toISOString().split('T')[0]}.xlsx"`,
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      }
    })
  } catch (error) {
    console.error('Error exporting bookings:', error)
    return NextResponse.json(
      { error: 'Failed to export bookings' },
      { status: 500 }
    )
  }
}
