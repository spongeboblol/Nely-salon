'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote:
      'Best haircut I&apos;ve ever had — and I&apos;ve been to salons all over the city. Nely herself did my color and I walked out feeling like a completely different person.',
    name: 'Maria G.',
    detail: 'Client since 2019',
  },
  {
    quote:
      'My son refuses to go anywhere else. Carlos makes him feel like a king every time he sits down. The whole place has such a good energy.',
    name: 'David P.',
    detail: 'Client since 2021',
  },
  {
    quote:
      'The atmosphere, the skill, the results — Nely&apos;s is something special. Sofia did my balayage and every single person asked where I got it done.',
    name: 'Jasmine T.',
    detail: 'Client since 2020',
  },
  {
    quote:
      'I come in looking rough and leave looking like I have my life together. That&apos;s the Nely&apos;s effect. Wouldn&apos;t trust anyone else with my fade.',
    name: 'Marcus R.',
    detail: 'Client since 2018',
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const current = TESTIMONIALS[index]

  return (
    <section
      ref={ref}
      className="py-24 md:py-36 bg-ink overflow-hidden border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold tracking-[0.22em] uppercase text-accent mb-10 md:mb-14"
        >
          What Clients Say
        </motion.p>

        {/* Large quote mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[6rem] md:text-[8rem] font-black leading-none text-accent mb-2 -mt-6 select-none"
          aria-hidden
        >
          &ldquo;
        </motion.div>

        {/* Quote — fades between testimonials */}
        <div className="min-h-[12rem] md:min-h-[10rem] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
              style={{ fontSize: 'clamp(1.1rem, 2.8vw, 2rem)', lineHeight: 1.35, letterSpacing: '-0.02em' }}
              className="font-black text-accent max-w-3xl mx-auto text-balance"
              dangerouslySetInnerHTML={{ __html: current.quote }}
            />
          </AnimatePresence>
        </div>

        {/* Attribution */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`attr-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-8"
          >
            <p className="text-sm font-black tracking-[0.14em] uppercase text-accent">{current.name}</p>
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/40 mt-1">{current.detail}</p>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === index
                  ? 'w-6 h-2 bg-accent'
                  : 'w-2 h-2 bg-white/20 hover:bg-accent/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
