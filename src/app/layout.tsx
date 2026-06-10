import type { Metadata } from 'next'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Luther Starks | Payments, Banking & Fintech Leader',
  description: 'Luther Starks - VP of Acquiring and Banking-as-a-Service at Priority.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0A0E1A] text-gray-100 antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
