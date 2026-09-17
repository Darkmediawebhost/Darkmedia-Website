import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.darkmedia.tech'

  const routes = [
    '',
    '/about-us',
    '/services',
    '/services/web-development',
    '/services/web-development/ecommerce-websites',
    '/services/web-development/corporate-websites',
    '/services/web-development/web-applications',
    '/services/branding',
    '/services/branding/brand-identity-design',
    '/services/branding/rebranding-strategy',
    '/services/video-production',
    '/services/video-production/corporate-video-production',
    '/services/video-production/commercial-ad-films',
    '/services/video-production/ai-video-production',
    '/services/seo-analytics',
    '/services/seo-analytics/local-seo-services',
    '/services/seo-analytics/technical-seo-audit',
    '/services/social-media-management',
    '/services/social-media-management/performance-marketing',
    '/services/social-media-management/content-creation-reels',
    '/locations/mangaluru',
    '/locations/dubai',
    '/locations/riyadh',
    '/locations/muscat',
    '/work',
    '/blog',
    '/contact-us',
  ]

  const currentDate = new Date()

  return routes.map((route) => {
    let priority = 0.7
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly'

    if (route === '') {
      priority = 1.0
      changeFrequency = 'weekly'
    } else if (route === '/contact-us') {
      priority = 0.9
      changeFrequency = 'monthly'
    } else if (route.startsWith('/services') && route.split('/').length === 3) {
      priority = 0.9
      changeFrequency = 'weekly'
    } else if (route.startsWith('/services')) {
      priority = 0.8
      changeFrequency = 'weekly'
    } else if (route.startsWith('/locations')) {
      priority = 0.8
      changeFrequency = 'monthly'
    } else if (route === '/work' || route === '/blog') {
      priority = 0.8
      changeFrequency = 'weekly'
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency,
      priority,
    }
  })
}
