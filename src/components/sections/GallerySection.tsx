'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import SafeImage from '@/components/SafeImage'
import Lightbox from '@/components/Lightbox'

const GALLERY = [
  { src: '/images/gallery/mens-1.jpg', alt: "Men's haircut", w: 1000, h: 1000 },
  { src: '/images/gallery/quince-1.jpg', alt: 'Quinceañera hairstyle', w: 1000, h: 1000 },
  { src: '/images/gallery/mens-2.jpg', alt: "Men's haircut", w: 1000, h: 1000 },
  { src: '/images/gallery/quince-2.jpg', alt: 'Quinceañera hairstyle', w: 1000, h: 1000 },
  { src: '/images/gallery/kids-1.jpg', alt: "Kid's haircut", w: 1000, h: 1000 },
  { src: '/images/gallery/quince-3.jpg', alt: 'Quinceañera hairstyle', w: 1000, h: 1000 },
  { src: '/images/gallery/mens-3.jpg', alt: "Men's haircut", w: 1000, h: 1000 },
  { src: '/images/gallery/kids-2.jpg', alt: "Kid's haircut", w: 1000, h: 1000 },
  { src: '/images/gallery/quince-4.jpg', alt: 'Quinceañera hairstyle', w: 1000, h: 1000 },
]

const FALLBACKS = ['#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0']

export default function GallerySection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <>
      <section id="gallery" ref={ref} className="py-24 md:py-36 bg-ink">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-xs font-bold tracking-[0.22em] uppercase text-accent mb-4"
              >
                The Work
              </motion.p>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: '102%' }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1], delay: 0.05 }}
                  style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)', lineHeight: 0.92, letterSpacing: '-0.04em' }}
                  className="font-black text-white"
                >
                  Cuts that
                  <br />
                  <span className="text-accent">hit different.</span>
                </motion.h2>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-xs font-black tracking-[0.14em] uppercase text-white border-b-2 border-accent pb-1 hover:text-accent transition-colors duration-200"
              >
                Full Gallery →
              </Link>
            </motion.div>
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 md:gap-4">
            {GALLERY.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.2, delay: i * 0.03 }}
                className="break-inside-avoid mb-3 md:mb-4 overflow-hidden group cursor-pointer"
                onClick={() => setLightbox({ src: img.src, alt: img.alt })}
                data-cursor
              >
                <div className="relative overflow-hidden">
                  <SafeImage
                    src={img.src}
                    alt={img.alt}
                    width={img.w}
                    height={img.h}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                    fallbackColor={FALLBACKS[i % FALLBACKS.length]}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-all duration-500 flex items-center justify-center">
                    <span className="text-white font-black text-xs tracking-[0.18em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            src={lightbox.src}
            alt={lightbox.alt}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
