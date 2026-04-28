import { getBookings } from '@/lib/googleSheets'

export async function GET(_request: Request) {
  try {
    const bookings = await getBookings()
    return Response.json(bookings)
  } catch (error) {
    console.error('Error getting bookings:', error)
    return Response.json(
      { success: false, error: 'Failed to get bookings' },
      { status: 500 }
    )
  }
}
