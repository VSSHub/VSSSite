import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Vibe Software Solutions — Premium SaaS Development',
  description:
    'We build elite software products for founders who refuse to ship average. Sprint-based delivery. Real results.',
  keywords: ['SaaS development', 'software agency', 'sprint delivery', 'product engineering'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
