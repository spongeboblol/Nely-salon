'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SafeImage from '@/components/SafeImage'

const HEADLINE = ['Look', 'Sharp.', 'Feel', 'Sharper.']

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const lineVariants = {
  hidden: { y: '105%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.85, ease: [0.33, 1, 0.68, 1] },
  },
}

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1], delay },
  }),
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-ink"
      aria-label="Hero"
    >
      {/* Right-half image panel */}
      <div className="absolute right-0 top-0 w-full md:w-[50%] h-full bg-accent-tint">
        <SafeImage
          src="/images/about/about-1.jpeg"
          alt="Nely's Salon interior"
          fill
          className="object-cover object-center"
          priority
          fallbackColor="#FFE4EE"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient fade so left-side text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent md:via-ink/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-0">
        <div className="max-w-[90%] md:max-w-[52%]">
          {/* Eyebrow */}
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-xs font-bold tracking-[0.22em] uppercase text-accent mb-6"
          >
            Nely&apos;s Salon & Barbershop
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-sans font-black leading-[1.05]"
            style={{ fontSize: 'clamp(2.8rem, 7.5vw, 7.5rem)' }}
            aria-label="Look Sharp. Feel Sharper."
          >
            {HEADLINE.map((word, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  variants={lineVariants}
                  className={`block ${
                    word === 'Sharper.' ? 'text-accent relative inline-block' : 'text-white'
                  }`}
                >
                  {word}
                  {word === 'Sharper.' && (
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.9, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                      className="absolute bottom-1 left-0 right-0 h-[3px] md:h-[5px] bg-accent origin-left block"
                      style={{ bottom: '-4px' }}
                    />
                  )}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            custom={0.7}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 text-base md:text-lg text-white/60 font-semibold max-w-xs leading-relaxed"
          >
            Your neighborhood salon & barbershop.
            <br />
            Walk in or book your chair ahead.
          </motion.p>

          {/* CTA group */}
          <motion.div
            custom={0.9}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex items-center gap-4 flex-wrap"
          >
            <Link
              href="/book"
              className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 text-xs font-black tracking-[0.16em] uppercase rounded-full hover:bg-ink hover:text-white transition-all duration-300 group"
            >
              Book Now
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase text-white hover:text-accent transition-colors duration-200 border-b-2 border-white/20 hover:border-accent pb-0.5"
            >
              See Services
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            custom={1.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-14 flex items-center gap-8 md:gap-12"
          >
            {[
              { value: '10+', label: 'Years Open' },
              { value: '5K+', label: 'Happy Clients' },
              { value: '4.9★', label: 'Avg. Rating' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl md:text-3xl font-black tracking-[-0.03em] text-white">{value}</p>
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/40 mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-10 bg-accent"
        />
        <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/30">Scroll</span>
      </motion.div>
    </section>
  )
}
