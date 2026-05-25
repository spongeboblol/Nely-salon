'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/sections/Footer'

const CATEGORIES = [
  {
    title: 'Barbershop',
    accent: true,
    services: [
      { name: "Men's Classic Cut", desc: 'Scissor cut, styled to your preference', price: '$30' },
      { name: "Men's Fade", desc: 'Skin, low, mid, or high — you call it', price: '$35' },
      { name: "Men's Textured Cut", desc: 'Curly, wavy, thick — all textures welcome', price: '$40' },
      { name: 'Beard Trim', desc: 'Clean up and shape existing beard', price: '$20' },
      { name: 'Full Beard Shape Up', desc: 'Full shaping and definition', price: '$30' },
      { name: 'Hot Towel Shave', desc: 'Classic straight-razor experience', price: '$25' },
      { name: 'Cut + Beard Combo', desc: 'Best value — full look in one visit', price: '$50' },
    ],
  },
  {
    title: 'Salon',
    accent: false,
    services: [
      { name: "Women's Haircut", desc: 'Includes blow dry and style', price: '$45' },
      { name: 'Blowout', desc: 'Sleek, smooth, voluminous finish', price: '$50' },
      { name: 'Full Color', desc: 'Root-to-tip color application', price: 'From $80' },
      { name: 'Highlights', desc: 'Partial or full foil highlights', price: 'From $100' },
      { name: 'Balayage', desc: 'Hand-painted for that sun-kissed look', price: 'From $150' },
      { name: 'Toner / Gloss', desc: 'Tone, refresh, and shine', price: 'From $60' },
      { name: "Kids' Cut", desc: 'Under 12 years old', price: '$20' },
    ],
  },
  {
    title: 'Styling',
    accent: false,
    services: [
      { name: 'Silk Press', desc: 'Smooth, pin-straight results', price: '$70' },
      { name: 'Braids', desc: 'Consultation required for pricing', price: 'Consult' },
      { name: 'Updo / Special Occasion', desc: 'Event-ready styling', price: 'From $80' },
      { name: 'Extensions', desc: 'Install, consultation required', price: 'Consult' },
      { name: 'Keratin Treatment', desc: 'Frizz-free, smooth, long-lasting', price: 'From $200' },
    ],
  },
]

function PricingTable({ category, index }: { category: typeof CATEGORIES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <div ref={ref} className="mb-16 md:mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="flex items-center gap-4 mb-8"
      >
        <h2
          className={`font-black tracking-[-0.03em] ${category.accent ? 'text-accent' : 'text-white'}`}
          style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}
        >
          {category.title}
        </h2>
        <div className="h-px flex-1 bg-black/10" />
      </motion.div>

      <div className="divide-y divide-black/6">
        {category.services.map((service, i) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: i * 0.05 + index * 0.1 + 0.1 }}
            className="flex items-start justify-between gap-6 py-5 group hover:bg-accent-tint -mx-4 px-4 transition-colors duration-200"
          >
            <div>
              <p className="font-black text-base md:text-lg text-white group-hover:text-accent transition-colors duration-200">
                {service.name}
              </p>
              <p className="text-sm font-semibold text-white/40 mt-0.5">{service.desc}</p>
            </div>
            <p className="font-black text-sm md:text-base text-white whitespace-nowrap mt-0.5">{service.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <main>
      {/* Page hero */}
      <div ref={heroRef} className="pt-28 md:pt-36 pb-16 md:pb-20 bg-ink">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.22em] uppercase text-accent mb-5"
          >
            Services & Pricing
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: '102%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1] }}
              style={{ fontSize: 'clamp(3rem, 9vw, 9rem)', lineHeight: 0.9, letterSpacing: '-0.04em' }}
              className="font-black text-white"
            >
              Everything
              <br />
              <span className="text-accent">we offer.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-lg text-base md:text-lg font-semibold text-white/50 leading-relaxed"
          >
            Prices may vary based on hair length and density.
            Call or book online for a free consultation before your service.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              href="/book"
              className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 text-xs font-black tracking-[0.16em] uppercase rounded-full hover:bg-ink hover:text-white transition-all duration-300 group"
            >
              Book an Appointment
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Pricing tables */}
      <div className="bg-ink pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {CATEGORIES.map((cat, i) => (
            <PricingTable key={cat.title} category={cat} index={i} />
          ))}

          {/* Note */}
          <div className="border-t border-white/8 pt-8">
            <p className="text-sm font-semibold text-white/40 leading-relaxed max-w-lg">
              * All prices are starting prices. Final pricing depends on hair length, density, and complexity.
              Walk-ins welcome. Appointments recommended. Call us to discuss your specific needs before booking.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
