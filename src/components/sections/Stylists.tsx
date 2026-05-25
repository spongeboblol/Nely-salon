'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SafeImage from '@/components/SafeImage'

const STYLISTS = [
  { name: 'Santiago', title: 'Barber', src: '/images/stylists/stylist-1.jpg' },
  { name: 'Bryan', title: 'Barber', src: '/images/stylists/stylist-2.jpg' },
  { name: 'Lolita', title: 'Stylist & Makeup Artist', src: '/images/stylists/stylist-3.jpg' },
  { name: 'Nely', title: 'Stylist & Barber', src: '/images/stylists/stylist-4.jpg' },
  { name: 'Leslie', title: 'Hairstylist & Color Specialist', src: '/images/stylists/stylist-leslie.jpg' },
  { name: 'Nora', title: 'Nail Tech', src: '/images/stylists/stylist-nora.jpg' },
  { name: 'Caro', title: 'Stylist & Esteticista', src: '/images/stylists/stylist-caro.jpg' },
]

export default function Stylists() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="stylists" ref={ref} className="py-24 md:py-36 bg-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="mb-14 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.22em] uppercase text-accent mb-4"
          >
            The Team
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '102%' }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1], delay: 0.05 }}
              style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)', lineHeight: 0.92, letterSpacing: '-0.04em' }}
              className="font-black text-white"
            >
              Meet your
              <br />
              <span className="text-accent">stylists.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {STYLISTS.map((stylist, i) => (
            <motion.div
              key={stylist.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: i * 0.08 + 0.1 }}
              className="group"
            >
              {/* Photo */}
              <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-accent-tint">
                <SafeImage
                  src={stylist.src}
                  alt={stylist.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  fallbackColor="#FFE4EE"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-all duration-500" />
              </div>

              {/* Info */}
              <h3 className="font-black text-lg md:text-xl tracking-[-0.02em] text-white">{stylist.name}</h3>
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-accent mt-0.5">
                {stylist.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
