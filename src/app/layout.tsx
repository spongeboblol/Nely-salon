import type { Metadata } from 'next'
import { Poppins, Dancing_Script } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '@/components/SmoothScroll'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Nely's Salon & Barbershop",
  description:
    "Your neighborhood salon & barbershop. Expert cuts, bold color, clean beards — walk in or book your appointment.",
  openGraph: {
    title: "Nely's Salon & Barbershop",
    description: "Cuts that hit different. Book your appointment today.",
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${dancing.variable}`}>
      <body>
        <SmoothScroll>
          <Navigation />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
