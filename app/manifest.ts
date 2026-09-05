import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'My App',
    short_name: 'My App',
    description: 'My application',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: {
      icon: '/icon.png',
      apple: '/apple-icon.png',
    },
  };
}
