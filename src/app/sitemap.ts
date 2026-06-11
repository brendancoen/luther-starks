import type { MetadataRoute } from 'next';

const siteUrl = 'https://lutherstarks.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/specialties', '/case-studies', '/blog', '/contact'];
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
