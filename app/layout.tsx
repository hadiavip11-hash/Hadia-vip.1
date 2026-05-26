import type { Metadata, Viewport } from 'next'
import { Tajawal, Amiri } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const tajawal = Tajawal({ 
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal"
})

const amiri = Amiri({ 
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri"
})

export const metadata: Metadata = {
  title: 'هديّة | منصة الهدايا الفاخرة',
  description: 'أهدِ من القلب إلى القلب - منصة الهدايا الفاخرة الأولى في العراق',
  generator: 'v0.app',
  keywords: ['هدايا', 'هدية', 'فاخرة', 'العراق', 'بغداد', 'luxury gifts', 'Iraq'],
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0f1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="bg-background">
      <body className={`${tajawal.variable} ${amiri.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
