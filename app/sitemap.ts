import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://theapexvisuals.me',
      lastModified: new Date(),
      changeFrequency: 'weekly', // Increased frequency to help Google index changes faster
      priority: 1,
    },
    // If you ever add a /blog or /contact page, add them here with priority 0.8
  ]
}