import type { Metadata } from 'next'
import { Fredoka, Comic_Neue } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LoadingAnimation from '@/components/LoadingAnimation'
import AnimatedBackground from '@/components/AnimatedBackground'
import CustomCursor from '@/components/CustomCursor'

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
  display: 'swap',
})

const comicNeue = Comic_Neue({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-comic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PelzStudio Labs - Creating Games That Entertain, Educate, and Inspire Change',
  description: 'Mobile game developers creating captivating cartoon-style games that educate and inspire positive change',
  icons: {
    icon: [
      {
        url: '/logo.png',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/logo.png',
        type: 'image/png',
      },
    ],
    shortcut: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fredoka.variable} ${comicNeue.variable} overflow-x-hidden`}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <LoadingAnimation />
        <AnimatedBackground />
        <CustomCursor />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}