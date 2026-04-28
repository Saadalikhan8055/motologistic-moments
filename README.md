# Motologistic Moments - Premium Vehicle Reveal Experience

A premium automotive delivery experience service website built with Next.js, React, and Tailwind CSS. Transform vehicle handovers into refined, memorable moments with professional documentation and white-glove service.

## Features

- **Hero Section** - Engaging landing page showcasing the service
- **Three Curated Packages**
  - Essential Reveal ($1,499) - Clean, tasteful delivery upgrade
  - Signature Reveal ($3,999) - Guided experience with photos and video
  - Luxury Reveal ($7,999) - Premium, fully cinematic experience
- **Gallery Showcase** - Filter and explore past reveal experiences
- **Booking System** - Beautiful modal-based booking form
- **Responsive Design** - Mobile-first, works on all devices
- **Professional Styling** - Luxury aesthetic with accent gold colors

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or your preferred package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
└── components/
    ├── Header.tsx          # Navigation header
    ├── Hero.tsx            # Hero section
    ├── Packages.tsx        # Package showcase
    ├── Gallery.tsx         # Photo gallery
    ├── Booking.tsx         # Booking modal form
    └── Footer.tsx          # Footer
```

## Customization

### Colors

Update the Tailwind config in `tailwind.config.ts`:
- `luxury`: Primary dark color (#1a1a1a)
- `accent`: Gold/yellow accent (#d4af37)
- `light`: Light background (#f5f5f5)

### Package Details

Edit package information in `src/components/Packages.tsx`

### Gallery Images

Replace placeholder images in `src/components/Gallery.tsx` with actual reveal photos

### Contact Information

Update contact details in `src/components/Footer.tsx`

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to other platforms

The project is a standard Next.js app and can be deployed to any platform supporting Node.js:
- Netlify
- AWS Amplify
- Docker
- Traditional web hosts with Node.js support

## API Routes (Optional)

To add backend functionality for booking submissions:

1. Create API route: `src/app/api/bookings/route.ts`
2. Handle form submissions in the Booking component
3. Connect to your database or email service

## License

© 2026 Motologistic Moments. All rights reserved.

## Support

For questions or issues, contact: hello@motologisticmoments.com
