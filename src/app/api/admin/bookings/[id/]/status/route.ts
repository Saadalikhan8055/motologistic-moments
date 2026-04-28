import { updateBookingStatus, deleteBooking } from '@/lib/googleSheets'

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { status } = await request.json()
    const { id } = await params
    const bookingId = parseInt(id)
    
    const updated = await updateBookingStatus(bookingId, status)
    
    if (!updated) {
      return Response.json(
        { success: false, error: 'Booking not found' },
        { status: 404 }
      )
    }
    
    return Response.json({ success: true, booking: updated })
  } catch (error) {
    console.error('Error updating booking:', error)
    return Response.json(
      { success: false, error: 'Failed to update booking' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const bookingId = parseInt(id)
    
    console.log('DELETE request for booking ID:', id, 'parsed as:', bookingId)
    
    if (isNaN(bookingId)) {
      return Response.json(
        { success: false, error: 'Invalid booking ID' },
        { status: 400 }
      )
    }
    
    await deleteBooking(bookingId)
    
    return Response.json({ success: true, message: 'Booking deleted' })
  } catch (error: any) {
    console.error('Error deleting booking:', error.message || error)
    return Response.json(
      { success: false, error: 'Failed to delete booking' },
      { status: 500 }
    )
  }
}
