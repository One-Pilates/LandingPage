import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'One Pilates - Transforme seu corpo, descubra sua melhor versão',
  description: 'Pilates, Fisioterapia, Acupuntura, Osteopatia, RPG e mais. +20 anos cuidando de você em São Paulo.',
  keywords: 'pilates, fisioterapia, acupuntura, osteopatia, RPG, microfisioterapia, shiatsu, drenagem linfática, São Paulo',
  authors: [{ name: 'One Pilates' }],
  creator: 'One Pilates',
  publisher: 'One Pilates',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://onepilates.com.br',
    title: 'One Pilates - Transforme seu corpo, descubra sua melhor versão',
    description: 'Pilates, Fisioterapia, Acupuntura e mais. +20 anos cuidando de você.',
    siteName: 'One Pilates',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'One Pilates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One Pilates',
    description: 'Transforme seu corpo, descubra sua melhor versão',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'your-google-verification-code', // Adicione seu código
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
