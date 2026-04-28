<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Motologistic Moments Website - Development Guidelines

### Project Overview
This is a Next.js-based premium automotive delivery experience website featuring three service packages, gallery showcase, and a booking system.

### Technology Stack
- **Framework**: Next.js 16 (React 19, TypeScript)
- **Styling**: Tailwind CSS
- **Component Library**: React functional components with hooks
- **Deployment**: Vercel

### Key Features
1. **Hero Section** - Eye-catching landing with service overview
2. **Packages Showcase** - Three tiered service packages with pricing
3. **Gallery** - Filterable image gallery with categories
4. **Booking Modal** - Form-based booking system
5. **Responsive Design** - Mobile-first approach

### Color Scheme
- **Luxury Dark**: #1a1a1a (primary)
- **Accent Gold**: #d4af37 (highlights)
- **Light Background**: #f5f5f5 (secondary)
- **Gray Palette**: Standard grays for text and borders

### Development Workflow
1. Create components in `/src/components/`
2. Use Tailwind CSS for styling (avoid custom CSS when possible)
3. Keep components client-side where interactivity needed (`'use client'`)
4. Server-side render where possible for better performance
5. Follow Next.js App Router conventions

### Common Tasks
- **Edit Package Details**: Modify `src/components/Packages.tsx`
- **Update Gallery**: Change images and data in `src/components/Gallery.tsx`
- **Customize Colors**: Edit `tailwind.config.ts`
- **Add Pages**: Create new routes in `src/app/` directory
- **Update Contact Info**: Edit `src/components/Footer.tsx`

### Performance Considerations
- Use Next.js Image component for image optimization
- Lazy load gallery images
- Code split components when possible
- Monitor bundle size with `npm run build`

### Testing & Validation
- Run `npm run lint` to check code quality
- Test responsive design on multiple breakpoints
- Verify booking form submissions
- Check gallery filtering functionality

### Deployment Notes
- Project is ready for deployment to Vercel
- Environment variables can be added to `.env.local`
- Build output goes to `.next/`
- Static assets are in `public/` directory

### Future Enhancements
- Add backend API for booking submissions
- Integrate with email service for confirmations
- Add customer testimonials section
- Implement payment processing
- Add admin dashboard for viewing bookings
- SEO optimization and meta tags
