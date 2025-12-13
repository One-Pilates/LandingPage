import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const poppins = Poppins({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'One Pilates - Porque seu corpo é único',
  description: 'One Pilates - A melhor experiência para cuidar do seu corpo com profissionais especializados. Personalização e atenção para cada aluno.',
  keywords: ['Pilates', 'Saúde', 'Bem-estar', 'Exercícios', 'Alongamento', 'One Pilates'],
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
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.onepilates.com.br',
    title: 'One Pilates - Porque seu corpo é único',
    description: 'One Pilates - A melhor experiência para cuidar do seu corpo com profissionais especializados.',
    siteName: 'One Pilates',
    images: [
      {
        url: 'https://www.onepilates.com.br/favicon/og-image.png',
        width: 1200,
        height: 630,
        alt: 'One Pilates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One Pilates - Porque seu corpo é único',
    description: 'One Pilates - A melhor experiência para cuidar do seu corpo com profissionais especializados.',
    images: ['https://www.onepilates.com.br/favicon/og-image.png'],
    site: '@OnePilates',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#f79d1d',
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className={poppins.className}>
        {children}
        
        <div 
          dangerouslySetInnerHTML={{
            __html: `
              <div vw class="enabled">
                <div vw-access-button class="active"></div>
                <div vw-plugin-wrapper>
                  <div class="vw-plugin-top-wrapper"></div>
                </div>
              </div>
            `
          }}
        />
        
        <Script 
          src="https://vlibras.gov.br/app/vlibras-plugin.js" 
          strategy="lazyOnload"
        />
        
        <Script id="vlibras-init" strategy="lazyOnload">
          {`
            window.addEventListener('load', function() {
              setTimeout(function() {
                if (window.VLibras) {
                  new window.VLibras.Widget('https://vlibras.gov.br/app');
                }
              }, 1000);
            });
          `}
        </Script>
      </body>
    </html>
  )
}
