import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Luther Starks to discuss payments, acquiring, Banking-as-a-Service, and fintech partnership opportunities.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Luther Starks',
    description:
      'Get in touch with Luther Starks to discuss payments, acquiring, BaaS, and fintech partnership opportunities.',
    url: '/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
