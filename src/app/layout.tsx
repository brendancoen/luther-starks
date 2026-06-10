import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luther Starks | Payments, Banking & Fintech Leader',
  description:
    'Luther Starks — VP of Acquiring and Banking-as-a-Service at Priority. A recognized leader in payments, banking, and fintech.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A0E1A] text-[#E8EAF0] antialiased">
        {children}
      </body>
    </html>
  )
}
