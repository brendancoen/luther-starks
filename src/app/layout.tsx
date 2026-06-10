import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const siteUrl = 'https://luther-starks.vercel.app'
const title = 'Luther Starks | Payments, Banking & Fintech Leader'
const description =
  'Luther Starks \u2014 VP of Acquiring and Banking-as-a-Service at Priority. A recognized leader in payments, banking, and fintech, building high-growth businesses and forging strategic partnerships across acquiring, BaaS, and embedded finance.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Luther Starks',
  },
  description,
  keywords: [
    'Luther Starks',
    'Payments',
    'Banking-as-a-Service',
    'BaaS',
    'Embedded Finance',
    'Acquiring',
    'Fintech',
    'Commercial Payments',
    'Priority',
  ],
  authors: [{ name: 'Luther Starks' }],
  creator: 'Luther Starks',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Luther Starks',
    title,
    description,
    images: [
      {
        url: '/icon.svg',
        width: 64,
        height: 64,
        alt: 'Luther Starks',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: ['/icon.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A0E1A] text-[#E8EAF0] antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
