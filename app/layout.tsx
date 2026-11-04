import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/lib/i18n'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'DM Promotions | Ferrari Finali Mondiali 2026',
  description:
    'Experience the Ferrari Finali Mondiali 2026 in Barcelona with exclusive DM Promotions packages, including Casa Ferrari weekend tickets, full-weekend hospitality, hotel stays and vehicle transport.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{
      '--font-inter': inter.style.fontFamily,
    } as React.CSSProperties}>
      <body className={`${inter.className} antialiased bg-[#0d0d0d] text-white font-sans`}>
        <I18nProvider>
          {children}
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
