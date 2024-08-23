import type { Metadata } from 'next';
import image from '@/assets/world.jpeg';

const TITLE_PAGE = 'Challenge TOTS';
const DESCRIPTION_PAGE =
  'Search countries by name, region, or ISO code, dynamically updating pins on an interactive map for an immersive and educational user experience. Discover data, geography, and more with each query.';

export const DEFAULT_METADATA: Metadata = {
  title: TITLE_PAGE,
  description: DESCRIPTION_PAGE,
  authors: [{ name: 'Lucia Aldana Castillo', url: 'https://github.com/luciaaldana' }],
  openGraph: {
    title: TITLE_PAGE,
    description: DESCRIPTION_PAGE,
    siteName: TITLE_PAGE,
    images: [
      {
        url: image.src,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE_PAGE,
    description: DESCRIPTION_PAGE,
    images: [
      {
        url: image.src,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    'interactive world map',
    'country information map',
    'ISO country code finder',
    'search countries by region',
    'map pin explorer',
    'interactive geography tool',
  ],
};
