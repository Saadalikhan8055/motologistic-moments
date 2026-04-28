# 🚀 Deployment Guide - Motologistic Moments

Your website is ready to go live! Here are multiple deployment options.

## 🎯 Recommended: Deploy to Vercel (FREE & EASIEST)

Vercel is made by the Next.js creators and offers:
- ✅ **FREE hosting** for Next.js projects
- ✅ **Automatic deployments** from GitHub
- ✅ **Global CDN** for lightning-fast speed
- ✅ **Auto SSL certificates**
- ✅ **Environment variables** management
- ✅ **Serverless functions** (your API routes work perfectly)

### Step 1: Push Code to GitHub
```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Motologistic Moments website"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/motologistic-moments.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to **https://vercel.com**
2. Click **"Sign Up"** (use GitHub account)
3. Click **"Import Project"**
4. Select your GitHub repository
5. Click **"Deploy"** (it auto-detects Next.js settings)
6. ✅ Your site is live in ~2-3 minutes!

### Step 3: Add Environment Variables on Vercel
1. Go to your Vercel project dashboard
2. Go to **Settings** → **Environment Variables**
3. Add your credentials:
   ```
   RESEND_API_KEY=re_P7Wya4Zv_8Q2rPizM5msB9Qz6jKA9z9oB
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```
4. Click **"Save"**
5. **Redeploy** (go to Deployments → Trigger Deploy)

### Step 4: Set Custom Domain (Optional)
1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your custom domain (e.g., motologisticmoments.com)
3. Follow DNS instructions from your domain registrar
4. ✅ Domain linked!

---

## 📱 Alternative Options

### Option 2: Netlify
- **Site**: https://netlify.com
- **Steps**: Connect GitHub → Auto-deploy → Add env vars
- **Pros**: Excellent support, form handling, analytics
- **Cons**: Slightly slower cold starts than Vercel for Next.js

### Option 3: Railway
- **Site**: https://railway.app
- **Steps**: Import from GitHub → Deploy
- **Pros**: Simple, free tier available
- **Cost**: $5/month after free credits

### Option 4: AWS Amplify
- **Site**: https://aws.amazon.com/amplify
- **Steps**: Connect GitHub → Deploy
- **Pros**: Scalable enterprise solution
- **Cost**: Pay-as-you-go (usually <$5/month for this site)

---

## 🔑 Production Checklist

Before going live, verify:

### ✅ Environment Variables
- [ ] `RESEND_API_KEY` is set on hosting platform
- [ ] `NEXT_PUBLIC_SITE_URL` matches your deployed URL
- [ ] Remove any `localhost` references

### ✅ Database
- [ ] Booking data is being saved (check `/data/bookings.json`)
- [ ] Admin dashboard accessible at `/admin` with password `admin@123`
- [ ] Email confirmations working (check console logs)

### ✅ Security
- [ ] Change admin password from default `admin@123`
- [ ] Remove any debug logs from production
- [ ] Ensure HTTPS is enabled (Vercel/Netlify do this automatically)

### ✅ Performance
- [ ] Homepage loads in <2 seconds
- [ ] Animations are smooth
- [ ] Mobile responsiveness is working
- [ ] Images are optimized

### ✅ Functionality
- [ ] Hero section displays correctly
- [ ] Animated stats section works
- [ ] Packages page is responsive
- [ ] Gallery loads properly
- [ ] Booking form submits successfully
- [ ] Admin dashboard login works
- [ ] Email notifications being sent

---

## 📊 Post-Deployment

### Monitor Your Site
1. **Vercel Analytics**: Dashboard automatically shows performance
2. **Check Email Delivery**: Submit test booking and verify email
3. **Admin Dashboard**: Review bookings at `/admin`
4. **Performance**: Use https://pagespeed.web.dev to test

### Update Admin Password (Recommended)
1. Open `src/app/admin/page.tsx`
2. Find line with `password === 'admin@123'`
3. Change to your own password
4. Recommit and redeploy

### Custom Domain Setup (If Purchased)
1. Buy domain from GoDaddy, Namecheap, Google Domains, etc.
2. In your hosting dashboard, add domain
3. Update DNS records as instructed by hosting provider
4. Wait 24 hours for DNS to propagate

---

## 🎨 After Deployment

### Analytics & Tracking
- Add Google Analytics for visitor tracking
- Monitor booking form submissions
- Track page performance

### SEO Optimization
- Add meta tags for social media sharing
- Create `robots.txt` and `sitemap.xml`
- Add Open Graph images for link previews

### Future Enhancements
- Set up WhatsApp Business API (optional)
- Implement proper database (MongoDB, PostgreSQL)
- Add payment processing (for premium bookings)
- Build customer portal for viewing booked experiences

---

## 💡 Quick Deploy Command (If Using Vercel CLI)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel

# For production deployment
vercel --prod
```

---

## ❓ Troubleshooting

### Build Fails After Deployment
- Check environment variables are set on hosting platform
- Verify `.env.local` is in `.gitignore` (don't commit secrets)
- Check build logs in hosting dashboard

### Emails Not Sending
- Verify `RESEND_API_KEY` is correctly added to hosting platform
- Check that API key is valid and has credits
- View function logs in hosting dashboard

### Admin Dashboard Not Working
- Verify you can access `https://yourdomain.com/admin`
- Check password is correct (`admin@123` by default)
- Check browser console for errors

### Booking Data Not Saving
- Verify endpoint is returning success response
- Check if `/data/bookings.json` file is being created
- Check function logs for errors

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Resend Email**: https://resend.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

---

## 🎉 You're Ready!

Your **Motologistic Moments** website is production-ready with:
- ✅ Beautiful, animated homepage
- ✅ Professional package showcase
- ✅ Booking system with database storage
- ✅ Email notifications
- ✅ Admin dashboard for managing bookings
- ✅ Mobile-responsive design
- ✅ Enterprise-grade performance

**Recommended Next Step**: Deploy to Vercel (~5 minutes, completely free)

Good luck! 🚀
