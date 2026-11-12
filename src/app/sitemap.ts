import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/clients', '/services', '/alumni', '/team'].map((p) => ({ url: `${SITE_URL}${p}` }))
}
