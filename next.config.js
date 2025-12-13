/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilitar React Strict Mode
  reactStrictMode: true,

  // Configuração de imagens
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Configuração SCSS (se usar)
  sassOptions: {
    includePaths: ['./styles'],
  },

  // Otimizações de build
  swcMinify: true,

  // Headers de segurança
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },

  // Configurar redirects (se necessário)
  async redirects() {
    return [
      // {
      //   source: '/old-path',
      //   destination: '/new-path',
      //   permanent: true,
      // },
    ]
  },

  // Variáveis de ambiente públicas
  env: {
    NEXT_PUBLIC_WHATSAPP_NUMBER: '551130514139',
    NEXT_PUBLIC_EMAIL: 'contato@onepilates.com.br',
  },
}

module.exports = nextConfig
