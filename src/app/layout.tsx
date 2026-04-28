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
      <body className="bg-light text-gray-800">
        {children}
      </body>
    </html>
  )
}
