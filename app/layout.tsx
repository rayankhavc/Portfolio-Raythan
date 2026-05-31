import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Raythan Web Design | Sites & Applications qui convertissent',
  description: 'Agence web indépendante basée à Nantes. No-code pour les commerces locaux, développement sur-mesure pour les projets ambitieux.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Raythan Web Design',
    description: 'Sites et applications qui convertissent. No-code pour les commerces locaux, développement sur-mesure pour les projets ambitieux.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${geist.variable} bg-black`}>
      <body className="font-sans antialiased bg-black text-white">
        {children}
      </body>
    </html>
  )
}