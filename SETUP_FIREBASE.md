# Firebase Setup Guide for Netlify Deployment

This guide helps you set up Firebase Firestore to store bookings. This works perfectly with Netlify's serverless environment.

## Why Firebase?

- ✅ **Works with Netlify** - No read-only filesystem issues
- ✅ **Free tier** - Generous free limits (1GB storage, 50k reads/day)
- ✅ **Secure** - Database rules prevent unauthorized access
- ✅ **Real-time** - Instant updates
- ✅ **Easy to use** - Simple configuration

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **"Create a new project"** or **"Add project"**
3. Enter project name: `motologistic-moments`
4. Accept the terms and click **"Create project"**
5. Wait for project creation to complete (2-3 minutes)

## Step 2: Create Firestore Database

1. In Firebase Console, go to **"Build"** → **"Firestore Database"**
2. Click **"Create database"**
3. Choose **"Start in production mode"**
4. Select region closest to you (e.g., `asia-south1` for India)
5. Click **"Create"**
6. Database will be created (takes 1-2 minutes)

## Step 3: Set Up Database Rules

1. In Firestore, go to **"Rules"** tab
2. Replace the default rules with:

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /bookings/{document=**} {
      allow read, write: if true;
    }
  }
}
```

3. Click **"Publish"**

> **Note:** This rule allows everyone to read/write for development. For production, you should restrict this.

## Step 4: Get Firebase Configuration

1. Go to **Project Settings** (click gear icon top-left)
2. Click **"Your apps"** section
3. Click **"Add app"** → choose **"</>"** (Web)
4. Register app with name `motologistic-moments`
5. Copy the config object (looks like below):

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

## Step 5: Add Firebase Keys to `.env.local`

1. Open `.env.local` in your project root
2. Add these variables (replace with your Firebase config):

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123def456
```

3. Save the file

## Step 6: Test Locally

1. Restart dev server:
   ```bash
   npm run dev
   ```

2. Go to http://localhost:3000

3. Click "Book Now" and submit a test booking

4. Check Firebase Console:
   - Go to **Firestore Database**
   - You should see a `bookings` collection with your test booking
   - Each booking has: name, email, phone, vehicle, date, package, requests, timestamp, status

## Step 7: Deploy to Netlify

1. Add `.env.local` variables to **Netlify Site Settings**:
   - Go to Netlify Dashboard
   - Select your site
   - Go to **Site Settings** → **Build & Deploy** → **Environment**
   - Click **"Edit variables"**
   - Add all 6 Firebase variables from Step 5

2. Redeploy your site:
   - Push to GitHub/GitLab
   - Netlify will auto-deploy with Firebase enabled

## Viewing Bookings

**Locally:** Bookings appear in `http://localhost:3000/admin`

**In Firebase Console:**
1. Go to **Firestore Database**
2. Click the `bookings` collection
3. See all customer bookings with full details

## Troubleshooting

**Error: "Firebase initialization error"**
- Check if all 6 environment variables are set in `.env.local`
- Make sure `NEXT_PUBLIC_*` prefix is correct (these are public variables)

**Bookings not saving:**
- Check Firestore rules in Firebase Console
- Make sure database is in "Production mode"
- Check browser console for specific error messages

**Can't see bookings in Firestore:**
- Refresh the Firestore page
- Check if there are filters applied
- Verify you're looking at the correct `bookings` collection

## Free Tier Limits

- **Storage:** 1 GB
- **Downloads:** 50,000 per day
- **Writes:** 20,000 per day
- **Deletes:** 20,000 per day

These limits are more than enough for a small booking system. If you exceed them, you'll be charged only for overage.

## Need Help?

- Firebase Docs: https://firebase.google.com/docs/firestore
- Firebase Console: https://console.firebase.google.com
- Report issues in your project
