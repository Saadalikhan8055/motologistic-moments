# 📧 Resend API Setup Guide - Motologistic Moments

## Overview
This guide walks you through setting up email notifications for your booking system using **Resend API** (free service).

## What You'll Get ✨
- **Automatic booking emails** sent to your business inbox (motologisticmoments@gmail.com)
- **Confirmation emails** sent to customers after they submit a booking
- **Formatted, professional emails** with all booking details and quick action buttons
- **No server setup required** - Resend handles everything

## Current Status
✅ Email code is ready and integrated  
⏳ Waiting for Resend API key configuration

## Step-by-Step Setup

### Step 1: Create a Resend Account (FREE)
1. Go to **https://resend.com**
2. Click "Get Started" or "Sign Up"
3. Create account using:
   - Email address (your business email preferred)
   - Strong password
4. Verify your email address
5. ✅ Account created!

### Step 2: Get Your API Key
1. Log into Resend dashboard
2. Go to **API Keys** section (usually in Settings or left sidebar)
3. Click **Create API Key** or **Generate Key**
4. Copy the full API key (looks like: `re_xxxxxxxxxxxx`)
5. ✅ API key copied!

### Step 3: Add API Key to Your Project
1. **Open the .env.local file** in your project root
   - Location: `c:\Users\samsung\Desktop\Motologistic Moments\.env.local`
   
2. **Replace the placeholder:**
   ```
   RESEND_API_KEY=re_your_key_here_from_resend_dashboard
   ```
   
   **With your actual key:**
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```
   
3. Save the file (Ctrl+S)
4. ✅ Configuration complete!

## Verify It Works

### Test the Setup
1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open the website:**
   - Go to http://localhost:3000

3. **Submit a test booking:**
   - Click "Explore Packages" or "Book Now"
   - Fill in the form with test data
   - Click "Submit Booking"
   - See success message
   - Wait 3 seconds for auto-close

4. **Check your email:**
   - Look in **motologisticmoments@gmail.com** inbox
   - You should see a professional booking notification
   - Also check customer's email inbox for confirmation

5. **Check admin dashboard:**
   - Go to http://localhost:3000/admin
   - Login with password: `admin@123`
   - See the new booking in the table

### What You Should See
✅ **In motologisticmoments@gmail.com:**
- Subject: "🎉 New Booking - [Customer Name] (Booking #xxxxx)"
- Contains: All booking details, customer contact info, quick action buttons
- Includes: WhatsApp and Email quick-link buttons

✅ **In customer's email inbox:**
- Subject: "✓ Booking Confirmation - Motologistic Moments"
- Confirmation that booking was received
- Booking ID and tracking information
- Your contact information

✅ **In Admin Dashboard:**
- New booking appears in the table
- Status shows as "pending"
- You can update status or contact customer via WhatsApp

## Email Features Included 📧

### Booking Notification Email (To: motologisticmoments@gmail.com)
Contains:
- Booking ID and timestamp
- Customer name, email, phone
- Vehicle model and preferred date
- Selected package
- Special requests
- Quick action buttons:
  - 💬 Link to WhatsApp customer
  - ✉️ Link to email customer

### Customer Confirmation Email (To: Customer's Email)
Contains:
- Booking received confirmation
- Booking ID for reference
- Experience details
- Your contact information
- Professional branded design

## Troubleshooting

### ❌ "Email notification skipped" in console
**Problem:** API key not configured  
**Solution:** 
1. Check .env.local file exists and has API key
2. Make sure there are no spaces or extra quotes around the key
3. Restart the dev server after editing .env.local
4. Try a fresh booking

### ❌ Email not arriving
**Problem:** API key might be incorrect  
**Solution:**
1. Double-check API key in Resend dashboard (copy again)
2. Update .env.local with fresh key
3. Restart dev server
4. Test with another booking

### ❌ "Authorization Bearer token invalid"
**Problem:** API key format is wrong  
**Solution:**
1. Make sure key starts with `re_`
2. Copy entire key from Resend dashboard
3. Paste in .env.local like: `RESEND_API_KEY=re_xxx`
4. No quotes or extra spaces

### ❌ Can't find API Keys in Resend
**Problem:** Dashboard layout might differ  
**Solution:**
1. Look for "Settings" gear icon
2. Or check left sidebar for "API Keys" or "Integration"
3. Contact Resend support if still stuck

## Advanced Configuration

### Change Email Sending Address
The emails currently come from: `bookings@resend.dev` (Resend free tier)

To use a custom domain email:
1. You'll need a custom domain
2. Verify domain with Resend (goes in Resend dashboard)
3. Then change in code: `from: 'your-email@yourdomain.com'`

### Send Custom Email Templates
Email templates are built into the route handler:
- Location: `src/app/api/submit-booking/route.ts`
- Look for `emailHtml` and `customerEmailHtml` variables
- Customize HTML/CSS as desired
- Restart dev server

### Add More Notifications
Current setup sends 2 emails:
1. Business owner notification
2. Customer confirmation

Could add:
- Status update emails when admin changes booking status
- Reminder emails before scheduled date
- Follow-up emails after experience

## Quick Reference

| Component | Value |
|-----------|-------|
| **API Provider** | Resend (Free) |
| **Business Email** | motologisticmoments@gmail.com |
| **Config File** | .env.local |
| **API Key Format** | re_xxxxxxxx |
| **Emails per Month** | 100 free (plenty for bookings) |
| **Setup Time** | 2-3 minutes |

## Next Steps After Setup ✅

1. ✅ Configure Resend API (THIS STEP)
2. ✅ Test with a booking
3. 📱 Optional: Set up WhatsApp Business API
4. 💾 Optional: Migrate to production database
5. 🚀 Optional: Deploy to production hosting

## Support

If you need help:
1. Check troubleshooting section above
2. Visit https://resend.com/docs for Resend help
3. Check console logs for detailed error messages
4. Admin dashboard shows all bookings for verification

---

**Status:** Email integration code ✅ Ready  
**Next:** Add your Resend API key to .env.local and test!

Good luck! 🚀
