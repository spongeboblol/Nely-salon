'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SafeImage from '@/components/SafeImage'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.25 })

  const slideUp = (delay = 0) => ({
    initial: { y: 40, opacity: 0 },
    animate: isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 },
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay },
  })

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-36 bg-ink overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left — text */}
          <div className="order-2 md:order-1">
            <motion.p {...slideUp(0)} className="text-xs font-bold tracking-[0.22em] uppercase text-accent mb-5">
              Our Story
            </motion.p>

            <div className="overflow-hidden mb-6">
              <motion.h2
                style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)', lineHeight: 0.92, letterSpacing: '-0.04em' }}
                initial={{ y: '102%' }}
                animate={isInView ? { y: 0 } : { y: '102%' }}
                transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1], delay: 0.05 }}
                className="font-black text-white"
              >
                More than
                <br />
                <span className="text-accent">just a cut.</span>
              </motion.h2>
            </div>

            <motion.p {...slideUp(0.2)} className="text-base md:text-lg text-white/60 font-semibold leading-relaxed max-w-md">
              We&apos;re not just a salon — we&apos;re a vibe. Nely&apos;s has been the
              go-to spot for cuts, color, and culture in this neighborhood.
              Whether you&apos;re walking in for a clean fade or a full-on
              color transformation, our team shows up for you every single time.
            </motion.p>

            <motion.p {...slideUp(0.3)} className="mt-4 text-base md:text-lg text-white/60 font-semibold leading-relaxed max-w-md">
              Nely built this place on the belief that feeling good about
              yourself starts with the right stylist. Come as you are.
              Leave as your best self.
            </motion.p>

            <motion.div {...slideUp(0.45)} className="mt-10 flex items-center gap-6">
              <div className="h-px flex-1 bg-black/10" />
              <p className="text-xs font-black tracking-[0.18em] uppercase text-white/30">
                Est. 2006 · El Monte, CA
              </p>
              <div className="h-px flex-1 bg-black/10" />
            </motion.div>
          </div>

          {/* Right — image */}
          <div className="order-1 md:order-2">
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.94, opacity: 0 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
              className="relative aspect-[4/5] overflow-hidden bg-ink"
            >
              <SafeImage
                src="/images/hero/image0.jpeg"
                alt="Nely's Salon & Barbershop logo"
                fill
                className="object-contain p-6"
                fallbackColor="#0A0A0A"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
