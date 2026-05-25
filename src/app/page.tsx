import Hero from '@/components/sections/Hero'
import MarqueeStrip from '@/components/sections/MarqueeStrip'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import GallerySection from '@/components/sections/GallerySection'
import Stylists from '@/components/sections/Stylists'
import Testimonials from '@/components/sections/Testimonials'
import BookingCTA from '@/components/sections/BookingCTA'
import Footer from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <MarqueeStrip />
      <About />
      <Services />
      <GallerySection />
      <Stylists />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </main>
  )
}
