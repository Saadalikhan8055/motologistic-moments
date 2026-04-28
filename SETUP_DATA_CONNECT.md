# Google Cloud Data Connect Setup Guide for Netlify

This guide helps you set up **Google Cloud Data Connect** (PostgreSQL) to store bookings. Data Connect works perfectly with Netlify's serverless environment.

## Why Data Connect?

- ✅ **Works with Netlify** - Full PostgreSQL support
- ✅ **Free tier** - $0.25/hour per database (shared instance available)
- ✅ **Powerful SQL** - Full SQL database capabilities
- ✅ **Managed Database** - Google handles maintenance & backups
- ✅ **Enterprise-grade** - Production-ready security

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Click the project dropdown at the top
3. Click **"NEW PROJECT"**
4. Enter project name: `motologistic-moments`
5. Click **"CREATE"**
6. Wait for project creation (1-2 minutes)

## Step 2: Enable Required APIs

1. In Google Cloud Console, go to **"APIs & Services"** → **"Library"**
2. Search for **"Data Connect API"**
3. Click on it and press **"ENABLE"**
4. Wait for API to enable (1-2 minutes)
5. Go back to Library and search for **"Cloud SQL Admin API"**
6. Click and press **"ENABLE"**

## Step 3: Create Data Connect Instance

1. Go to **"Data Connect"** (left sidebar under "Database")
2. Click **"Create a Data Connect instance"**
3. Configure:
   - **Instance name:** `motologistic-moments-db`
   - **Region:** Select closest to you (e.g., `asia-south1` for India)
   - **Database version:** PostgreSQL 14+ (default is fine)
4. Click **"CREATE"**
5. Wait for creation (2-3 minutes)

## Step 4: Get Connection Details

1. Once instance is created, click on it to open
2. You'll see the connection info. Copy:
   - **Username** (default: `postgres`)
   - **Password** (you'll set this or auto-generated)
3. Go to **"Connections"** tab
4. Add your IP address to **"Authorized networks"** (or use 0.0.0.0/0 for testing)
5. Copy the **"Connection string"** (looks like below):

```
postgresql://postgres:PASSWORD@INSTANCE_IP:5432/postgres
```

Or use Cloud SQL Proxy:
```
postgresql://postgres:PASSWORD@127.0.0.1:5433/postgres
```

## Step 5: Update .env.local

1. Open `.env.local` in your project root
2. Replace Firebase variables with:

```env
# Google Cloud Data Connect - PostgreSQL
POSTGRES_CONNECTION_STRING=postgresql://postgres:YOUR_PASSWORD@YOUR_INSTANCE_IP:5432/postgres

# Alternative for Netlify Functions (using Cloud SQL Proxy):
# POSTGRES_CONNECTION_STRING=postgresql://postgres:YOUR_PASSWORD@127.0.0.1:5433/postgres
```

3. Save the file

## Step 6: Test Locally

If testing locally, you have two options:

### Option A: Direct Connection (Easy for local testing)
- Just use the connection string from Step 4
- Make sure your IP is whitelisted in Data Connect

### Option B: Cloud SQL Proxy (Secure, Recommended)
1. Download Cloud SQL Proxy: https://cloud.google.com/sql/docs/mysql/sql-proxy
2. Start in a terminal:
   ```bash
   cloud_sql_proxy -instances=PROJECT_ID:REGION:INSTANCE_NAME
   ```
3. Use `localhost:5433` in connection string

Then test:
```bash
npm run dev
```

- Go to http://localhost:3000
- Click "Book Now" and submit a test booking
- Tables will be created automatically!

## Step 7: View Bookings in Data Connect

1. Go to Google Cloud Console → **Data Connect**
2. Click on your instance
3. Click **"Query editor"** tab
4. Run SQL query:
   ```sql
   SELECT * FROM bookings ORDER BY timestamp DESC;
   ```
5. See all your bookings with full details

## Step 8: Deploy to Netlify

1. Add environment variable to Netlify:
   - Netlify Dashboard → Site Settings → Build & Deploy → Environment
   - Click **"Edit variables"**
   - Add:
     ```
     POSTGRES_CONNECTION_STRING=postgresql://postgres:PASSWORD@INSTANCE_IP:5432/postgres
     ```

2. For Netlify Functions (serverless), use Cloud SQL Proxy:
   - Set up Cloud SQL Proxy in a separate process
   - Or use Netlify's PostgreSQL integration if available

3. Redeploy:
   - Push to GitHub
   - Netlify auto-deploys with database access!

## Viewing & Managing Bookings

### In Data Connect Console
```sql
-- View all bookings
SELECT * FROM bookings ORDER BY timestamp DESC;

-- Update booking status
UPDATE bookings SET status = 'confirmed' WHERE id = 1;

-- Get bookings from today
SELECT * FROM bookings WHERE DATE(timestamp) = CURRENT_DATE;

-- Count pending bookings
SELECT COUNT(*) FROM bookings WHERE status = 'pending';
```

### In Your App
- **Admin page:** http://localhost:3000/admin
- Bookings load from PostgreSQL automatically

## Troubleshooting

**Error: "connection refused"**
- Check if your IP is whitelisted in Data Connect authorized networks
- Use `0.0.0.0/0` for testing (not secure for production)
- Verify connection string is correct

**Error: "password authentication failed"**
- Double-check password in connection string
- Make sure special characters are URL-encoded: `@` → `%40`, `:` → `%3A`

**Tables not creating**
- First API call creates tables automatically
- Check Data Connect logs for any SQL errors
- Manually create table:
  ```sql
  CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    vehicle_model VARCHAR(255),
    preferred_date DATE,
    package VARCHAR(100),
    special_requests TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

**Bookings not saving locally**
- Check browser console for errors
- Verify `.env.local` has correct connection string
- Restart dev server after changing `.env.local`

## Costs & Limits

**Shared Instance (Free tier):** $0.25/hour (on shared resource)
**Dedicated Instance:** $0.25/hour for smallest instance

**Storage:**
- 10 GB included
- Additional: $0.17/GB per month

**Backup:**
- Automatic backups included
- Point-in-time recovery available

## Cloud SQL Proxy Setup (Recommended for Production)

1. Install Cloud SQL Proxy
2. Set up authentication:
   ```bash
   gcloud auth login
   gcloud config set project PROJECT_ID
   ```
3. Start proxy:
   ```bash
   cloud_sql_proxy -instances=PROJECT_ID:REGION:INSTANCE_NAME
   ```
4. Use connection string:
   ```
   postgresql://postgres:PASSWORD@127.0.0.1:5433/postgres
   ```

## Need Help?

- Data Connect Docs: https://cloud.google.com/dataconnect/docs
- Google Cloud Console: https://console.cloud.google.com
- Cloud SQL Docs: https://cloud.google.com/sql/docs
- Report issues in Google Cloud Console support
