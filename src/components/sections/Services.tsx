'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const SERVICES = [
  {
    id: '01',
    name: "Men's Cut",
    desc: 'The classic, perfected. Fades, tapers, textures, and everything between.',
    price: 'From $30',
  },
  {
    id: '02',
    name: "Women's Cut",
    desc: 'Precision meets personality. Every cut is shaped around how you live.',
    price: 'From $45',
  },
  {
    id: '03',
    name: 'Color',
    desc: 'Bold, rich, and made for you. Full color, highlights, balayage & more.',
    price: 'From $80',
  },
  {
    id: '04',
    name: 'Beard Trim',
    desc: 'Edge up. Show up. A clean beard line changes the whole face.',
    price: 'From $20',
  },
  {
    id: '05',
    name: "Kids' Cut",
    desc: 'Big results, tiny prices. Patient stylists who make it fun.',
    price: 'From $20',
  },
  {
    id: '06',
    name: 'Styling',
    desc: 'From the chair to the event. Blowouts, silk press, and special occasion looks.',
    price: 'From $50',
  },
]

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="services" ref={ref} className="py-24 md:py-36 bg-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="text-xs font-bold tracking-[0.22em] uppercase text-accent mb-4"
            >
              What We Do
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '102%' }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1], delay: 0.05 }}
                style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)', lineHeight: 0.92, letterSpacing: '-0.04em' }}
                className="font-black text-white"
              >
                Services
                <br />
                <span className="text-accent">&amp; Pricing</span>
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-black tracking-[0.14em] uppercase text-white border-b-2 border-accent pb-1 hover:text-accent transition-colors duration-200"
            >
              Full Pricing List →
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: i * 0.07 + 0.15 }}
              className="group relative bg-ink p-8 md:p-10 hover:bg-accent transition-colors duration-400 overflow-hidden"
              style={{ transition: 'background-color 0.4s cubic-bezier(0.33, 1, 0.68, 1)' }}
            >
              {/* Number */}
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/20 group-hover:text-white/40 transition-colors duration-400 block mb-8">
                {service.id}
              </span>

              {/* Service name */}
              <h3
                className="font-black text-white group-hover:text-white transition-colors duration-400 mb-3"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
              >
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-sm font-semibold text-white/50 group-hover:text-white/80 transition-colors duration-400 leading-relaxed mb-8">
                {service.desc}
              </p>

              {/* Price */}
              <p className="text-xs font-black tracking-[0.16em] uppercase text-accent group-hover:text-white transition-colors duration-400">
                {service.price}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
