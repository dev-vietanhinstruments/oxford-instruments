export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://oxford-vietanh.vercel.app/sitemap.xml',
    }
  }