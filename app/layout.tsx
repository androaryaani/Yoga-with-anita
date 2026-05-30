import type { Metadata } from 'next'
import { Poppins, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans'
})

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Get Ideal Health - Yoga with Anita | Weight Loss, Hormonal Health & Wellness',
  description: 'Transform your body, hormones & lifestyle naturally with Anita. Online yoga sessions, personalized diet plans, weight loss coaching, PCOS/PCOD support, and stress management. 8000+ followers trust us.',
  keywords: 'yoga, weight loss, hormonal health, PCOS, PCOD, online yoga, diet plans, wellness coach, fitness program, Indian wellness',
  authors: [{ name: 'Anita - Get Ideal Health' }],
  openGraph: {
    title: 'Get Ideal Health - Yoga with Anita',
    description: 'Transform your body, hormones & lifestyle naturally with personalized yoga and nutrition coaching.',
    type: 'website',
    locale: 'en_IN',
  },
}

export const viewport = {
  themeColor: '#1a1612',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${poppins.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
