import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/'],
      },
      {
        userAgent: ['Google-Extended', 'GPTBot', 'ClaudeBot', 'PerplexityBot'],
        allow: '/',
      }
    ],
    sitemap: 'https://sutantratechnology.com/sitemap.xml',
  };
}
