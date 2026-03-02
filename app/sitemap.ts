import { MetadataRoute } from 'next';

const base = 'https://theapexvisuals.me';
const pages = ['', '/portfolio', '/contact', '/blog']; // whatever you have

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
}