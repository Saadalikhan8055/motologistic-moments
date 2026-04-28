# Google Sheets Database Setup Guide

## Step 1: Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.clo ud.google.com/)
2. Click **Create Project**
3. Name it: `Motologistic Moments`
4. Click **Create**

## Step 2: Enable Google Sheets API
1. In Cloud Console, search for "Google Sheets API"
2. Click on it
3. Click **Enable**

## Step 3: Create Service Account
1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **Service Account**
3. Fill in:
   - Service account name: `motologistic-db`
   - Click **Create and Continue**
   - Skip optional steps, click **Done**

## Step 4: Create API Key
1. Click on the service account you just created
2. Go to **Keys** tab
3. Click **Add Key** → **Create new key**
4. Choose **JSON**
5. Click **Create** - A JSON file will download
6. **Save this file safely** - you'll need to share it with me

## Step 5: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create new spreadsheet, name it: `Motologistic Bookings`
3. Rename the sheet tab to: `bookings`
4. Create headers in row 1:
   ```
   id | timestamp | fullName | email | phone | vehicleModel | preferredDate | package | specialRequests | status
   ```
5. Copy the **Sheet ID** from the URL (the long string between /d/ and /edit)

## Step 6: Share Sheet with Service Account
1. In the downloaded JSON file, find the `client_email`
2. In your Google Sheet, click **Share**
3. Paste the `client_email` and give it **Editor** access
4. Click **Share**

## What to Send Me:
1. The **Sheet ID**
2. The **client_email** from JSON file
3. The **private_key** from JSON file (or the entire JSON content)

Once you provide these, I'll integrate Google Sheets with your app!
