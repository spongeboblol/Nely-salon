'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

export default function BookingCTA() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section
      ref={ref}
      className="bg-accent py-24 md:py-36 overflow-hidden relative"
    >
      {/* Background texture lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold tracking-[0.22em] uppercase text-white/60 mb-6"
        >
          Your Chair is Waiting
        </motion.p>

        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: '102%' }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1], delay: 0.05 }}
            style={{ fontSize: 'clamp(2.8rem, 8vw, 8rem)', lineHeight: 0.9, letterSpacing: '-0.04em' }}
            className="font-black text-white"
          >
            BOOK YOUR
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-10 md:mb-14">
          <motion.h2
            initial={{ y: '102%' }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1], delay: 0.15 }}
            style={{ fontSize: 'clamp(2.8rem, 8vw, 8rem)', lineHeight: 0.9, letterSpacing: '-0.04em' }}
            className="font-black text-white"
          >
            APPOINTMENT
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/book"
            className="inline-flex items-center gap-3 bg-ink text-white px-10 py-4 text-xs font-black tracking-[0.16em] uppercase rounded-full hover:bg-ink hover:text-white transition-all duration-300 group"
          >
            Reserve Your Spot
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
          <a
            href="tel:6265423328"
            className="inline-flex items-center gap-2 text-xs font-black tracking-[0.14em] uppercase text-white/80 hover:text-white transition-colors duration-200 border-b-2 border-white/30 hover:border-white pb-0.5"
          >
            Or call us directly
          </a>
        </motion.div>
      </div>
    </section>
  )
}
