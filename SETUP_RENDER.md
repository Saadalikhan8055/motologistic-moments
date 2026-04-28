# Render.com PostgreSQL Setup Guide for Netlify

This guide helps you set up **Render.com's free PostgreSQL database** to store bookings. It works perfectly with Netlify and requires no billing.

## Why Render.com?

- ✅ **Completely FREE** - No billing required ever
- ✅ **Works with Netlify** - Full PostgreSQL support
- ✅ **Simple setup** - Just 5 minutes
- ✅ **Managed database** - Auto backups & maintenance
- ✅ **Reliable** - Used by thousands of apps

## Step 1: Create Render Account

1. Go to [Render.com](https://render.com)
2. Click **"Get started"** (top right)
3. Sign up with GitHub or email
4. Verify your email
5. ✅ Account created!

## Step 2: Create PostgreSQL Database

1. In Render dashboard, click **"New"** (top right)
2. Select **"PostgreSQL"**
3. Configure:
   - **Name:** `motologistic-moments`
   - **Database:** `postgres` (default)
   - **User:** `postgres` (default)
   - **Region:** `Singapore` (closest to India)
   - **Version:** Latest PostgreSQL
   - **Plan:** "Free" (blue button on right)
4. Click **"Create Database"**
5. Wait 2-3 minutes for creation

## Step 3: Get Connection String

Once database is created:

1. Open your database from the dashboard
2. You'll see connection details on the page
3. Look for **"External Database URL"** (this is your connection string)
4. **Copy the entire URL** - it looks like:
   ```
   postgresql://username:password@hostname:5432/dbname
   ```

## Step 4: Update .env.local

1. Open `.env.local` in your project
2. Find and replace:
   ```env
   POSTGRES_CONNECTION_STRING=postgresql://postgres:your_password@your_instance_ip:5432/postgres
   ```
   
   With your Render connection string:
   ```env
   POSTGRES_CONNECTION_STRING=postgresql://user:password@hostname:5432/dbname
   ```

3. Save the file

## Step 5: Test Locally

1. Restart dev server:
   ```bash
   npm run dev
   ```

2. Go to http://localhost:3000

3. Click "Book Now" and submit a test booking

4. If it works:
   - Table created automatically ✅
   - Booking saved to Render database ✅

## Step 6: View Bookings in Render

1. In Render dashboard, click on your database
2. Click **"Connect"** button
3. Use **"Browser"** tab to view data
4. Create a query:
   ```sql
   SELECT * FROM bookings ORDER BY timestamp DESC;
   ```
5. See all your bookings!

## Step 7: Deploy to Netlify

### Add Environment Variable:
1. Go to **Netlify Dashboard**
2. Click your site
3. Go to **Site Settings** → **Build & Deploy** → **Environment**
4. Click **"Edit Variables"**
5. Add new variable:
   ```
   POSTGRES_CONNECTION_STRING = your_render_connection_string
   ```
6. Save

### Deploy:
1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Add Render database"
   git push origin main
   ```

2. Netlify auto-deploys ✅
3. Your site now uses Render PostgreSQL! 🎉

## Querying Bookings

### Using Render Web Interface:
1. Dashboard → Your database → "Connect" → "Browser"
2. Run SQL:
   ```sql
   -- See all bookings
   SELECT * FROM bookings ORDER BY timestamp DESC;

   -- Count pending
   SELECT COUNT(*) FROM bookings WHERE status = 'pending';

   -- See today's bookings
   SELECT * FROM bookings WHERE DATE(timestamp) = CURRENT_DATE;
   ```

### In Your App:
- **Admin page:** `http://localhost:3000/admin` (local)
- **Or on Netlify:** `https://your-site.netlify.app/admin`
- Bookings load automatically!

## Free Tier Limits

- **Storage:** 1 GB (should be enough for 50k+ bookings)
- **Queries:** Unlimited
- **Connections:** 2 simultaneous (fine for most apps)
- **Backup:** Daily automatic

For your booking app, these limits are **more than enough**! ✅

## Troubleshooting

**Error: "connect ECONNREFUSED"**
- Check connection string is correct
- Make sure you copied the entire URL from Render
- Verify `.env.local` has no typos
- Restart dev server after changing `.env.local`

**Error: "password authentication failed"**
- Connection string has special characters that need escaping
- Try copying directly from Render again
- Check for extra spaces

**Database is sleeping (free tier)**
- Render puts free databases to sleep after 7 days of inactivity
- Just click "Wake up" in the dashboard
- Or make a query to wake it automatically

**Can't see bookings in Render Browser**
- Refresh the page
- Check if filters are applied
- Make sure tables were created (first booking should have created them)

## Database Details (For Reference)

Your database details are visible in Render dashboard:
- **Host:** Render's server URL
- **Port:** 5432 (PostgreSQL default)
- **Database:** `postgres`
- **User:** `postgres`
- **Password:** Auto-generated (shown once during creation)

**These are all included in the connection string!**

## Need Help?

- Render Docs: https://render.com/docs/databases
- PostgreSQL Docs: https://www.postgresql.org/docs/
- Check Render status: https://status.render.com/

You're all set! Your database is ready to go! 🚀
