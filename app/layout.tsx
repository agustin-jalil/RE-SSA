import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const _playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Real Estate | Propiedades Exclusivas',
  description: 'Encuentra la propiedad de tus suenos. Apartamentos, casas, penthouses y mas.',
  generator: '',
  icons: {
    icon: [
      {
        url: '',
        media: '',
      },
      {
        url: '',
        media: '',
      },
      {
        url: '',
        type: '',
      },
    ],
    apple: '',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f0eb',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${_inter.variable} ${_playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
