import { addBooking } from '@/lib/googleSheets'

async function sendEmailViaResend(
  to: string,
  subject: string,
  htmlContent: string
) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey || apiKey.includes('your_key')) {
    console.log('ℹ Resend API key not configured. Email notification skipped.')
    console.log('📧 To enable emails:')
    console.log('   1. Get free API key at https://resend.com')
    console.log('   2. Add to .env.local: RESEND_API_KEY=your_key_from_resend')
    return null
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: 'Motologistic Moments <onboarding@resend.dev>',
        to: to,
        subject: subject,
        html: htmlContent
      })
    })

    const data = await response.json()

    if (response.ok) {
      console.log('✓ Email sent successfully to:', to)
      return data
    } else {
      console.error('Email delivery failed:', data)
      return null
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return null
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone) {
      return Response.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save booking to database
    const bookingId = Date.now()
    const bookingTimestamp = new Date().toISOString()
    const bookingSuccess = await addBooking({
      id: bookingId,
      timestamp: bookingTimestamp,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      vehicleModel: formData.vehicleModel,
      preferredDate: formData.preferredDate,
      package: formData.package,
      specialRequests: formData.specialRequests || 'None',
      status: 'pending'
    })

    if (!bookingSuccess) {
      return Response.json(
        { success: false, error: 'Failed to save booking to database' },
        { status: 500 }
      )
    }

    console.log('✓ Booking #' + bookingId + ' saved from:', formData.fullName)
    
    const booking = {
      id: bookingId,
      timestamp: bookingTimestamp
    }

    // Send email notification to business owner
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; color: #333; background: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #1a1a1a, #333); color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 30px; }
            .header h1 { margin: 0; font-size: 24px; }
            .header p { margin: 5px 0 0 0; opacity: 0.9; }
            .section { margin-bottom: 25px; }
            .section h3 { color: #d4af37; font-size: 16px; margin-top: 0; border-bottom: 2px solid #d4af37; padding-bottom: 10px; }
            .info-row { display: flex; margin: 10px 0; }
            .info-label { font-weight: bold; color: #1a1a1a; width: 140px; }
            .info-value { color: #666; flex: 1; }
            .actions { background: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 25px; text-align: center; }
            .action-button { display: inline-block; padding: 10px 20px; margin: 5px; border-radius: 5px; font-weight: bold; text-decoration: none; }
            .whatsapp-btn { background: #25D366; color: white; }
            .email-btn { background: #0284C7; color: white; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999; }
            .booking-id { background: #e8f4f8; padding: 10px; border-radius: 5px; margin-bottom: 15px; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 New Booking Request!</h1>
              <p>Motologistic Moments</p>
            </div>

            <div class="booking-id">
              <strong>Booking ID:</strong> #${booking.id} | <strong>Date:</strong> ${new Date(booking.timestamp).toLocaleString()}
            </div>

            <div class="section">
              <h3>👤 Contact Information</h3>
              <div class="info-row">
                <span class="info-label">Name:</span>
                <span class="info-value">${formData.fullName}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Email:</span>
                <span class="info-value"><a href="mailto:${formData.email}">${formData.email}</a></span>
              </div>
              <div class="info-row">
                <span class="info-label">Phone:</span>
                <span class="info-value"><a href="tel:${formData.phone}">${formData.phone}</a></span>
              </div>
            </div>

            <div class="section">
              <h3>🚗 Experience Details</h3>
              <div class="info-row">
                <span class="info-label">Vehicle:</span>
                <span class="info-value">${formData.vehicleModel}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Preferred Date:</span>
                <span class="info-value">${new Date(formData.preferredDate).toLocaleDateString()}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Package:</span>
                <span class="info-value">${formData.package}</span>
              </div>
            </div>

            <div class="section">
              <h3>✨ Special Requests</h3>
              <div class="info-value">${formData.specialRequests || 'None'}</div>
            </div>

            <div class="actions">
              <p style="margin: 0 0 15px 0; color: #333;">Quick actions:</p>
              <a href="https://wa.me/${formData.phone.replace(/\D/g, '')}" class="action-button whatsapp-btn">💬 WhatsApp</a>
              <a href="mailto:${formData.email}" class="action-button email-btn">✉️ Email</a>
            </div>

            <div class="footer">
              <p>This is an automated notification from Motologistic Moments booking system.</p>
              <p>View all bookings: <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/admin">Admin Dashboard</a></p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email to business owner
    const emailResult = await sendEmailViaResend(
      'motologisticmoments@gmail.com',
      `🎉 New Booking - ${formData.fullName} (Booking #${booking.id})`,
      emailHtml
    )

    // Optional: Also send confirmation email to customer
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; color: #333; background: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #00d4ff, #a855f7); color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 30px; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { color: #555; line-height: 1.6; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✓ Booking Received!</h1>
            </div>

            <div class="content">
              <p>Hi ${formData.fullName},</p>
              
              <p>Thank you for choosing <strong>Motologistic Moments</strong>!</p>
              
              <p>We have received your booking request for your <strong>${formData.vehicleModel}</strong> reveal experience on <strong>${new Date(formData.preferredDate).toLocaleDateString()}</strong>.</p>
              
              <p><strong>Your Booking ID:</strong> #${booking.id}</p>
              
              <p>Our team will review your request and contact you within 24 hours to confirm your booking and discuss any special arrangements.</p>
              
              <p>If you have any questions in the meantime, feel free to reach out to us:</p>
              <p>
                📧 Email: motologisticmoments@gmail.com<br>
                📱 WhatsApp: <a href="https://wa.me/919398415471">+91 9398415471</a>
              </p>
              
              <p>Thank you for trusting us with your memorable moment!</p>
              
              <p>Best regards,<br><strong>Motologistic Moments Team</strong></p>
            </div>

            <div class="footer">
              <p>This is an automated confirmation email. Please do not reply to this email.</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send confirmation to customer
    await sendEmailViaResend(
      formData.email,
      '✓ Booking Confirmation - Motologistic Moments',
      customerEmailHtml
    )

    return Response.json({
      success: true,
      message: 'Booking submitted and saved successfully',
      bookingId: booking.id,
      emailSent: !!emailResult,
      data: formData
    })

  } catch (error) {
    console.error('Error processing booking:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to process booking'
    return Response.json(
      { success: false, error: errorMessage },
      { status: 500 }
    )
  }
}
