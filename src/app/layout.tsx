import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Motologistic Moments - Premium Vehicle Reveal Experience',
  description: 'Transform your vehicle delivery into a refined, memorable moment with our premium automotive reveal services.',
  keywords: 'luxury car delivery, vehicle reveal, premium automotive experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans text-white">
        {children}
      </body>
    </html>
  )
}
