/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    ppr: true, // Включаем Partial Prerendering
    optimizeCss: true, // Оптимизация CSS
    scrollRestoration: true, // Восстановление позиции скролла
  },
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://mc.yandex.ru https://connect.facebook.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://hebbkx1anhila5yf.public.blob.vercel-storage.com https://mc.yandex.ru; font-src 'self'; connect-src 'self' https://www.google-analytics.com https://mc.yandex.ru; frame-src 'self'",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

