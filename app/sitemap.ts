import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://theapexvisuals.me',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // If you have a portfolio page, add it like this:
    // {
    //   url: 'https://theapexvisuals.me/portfolio',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}
