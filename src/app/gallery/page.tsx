'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import SafeImage from '@/components/SafeImage'
import Lightbox from '@/components/Lightbox'
import Footer from '@/components/sections/Footer'

type Category = 'All' | 'Mens Cuts' | 'Kids Cuts' | 'Women Cuts' | 'Quinceañera' | 'Nails'

const ALL_IMAGES = [
  { src: '/images/gallery/mens-1.jpg', alt: "Men's haircut", w: 1000, h: 1000, category: 'Mens Cuts' as Category },
  { src: '/images/gallery/mens-2.jpg', alt: "Men's haircut", w: 1000, h: 1000, category: 'Mens Cuts' as Category },
  { src: '/images/gallery/mens-3.jpg', alt: "Men's haircut", w: 1000, h: 1000, category: 'Mens Cuts' as Category },
  { src: '/images/gallery/mens-4.jpg', alt: "Men's haircut", w: 1000, h: 1000, category: 'Mens Cuts' as Category },
  { src: '/images/gallery/mens-5.jpg', alt: "Men's haircut", w: 1000, h: 1000, category: 'Mens Cuts' as Category },
  { src: '/images/gallery/mens-6.jpg', alt: "Men's haircut", w: 1000, h: 1000, category: 'Mens Cuts' as Category },
  { src: '/images/gallery/kids-1.jpg', alt: "Kid's haircut", w: 1000, h: 1000, category: 'Kids Cuts' as Category },
  { src: '/images/gallery/kids-2.jpg', alt: "Kid's haircut", w: 1000, h: 1000, category: 'Kids Cuts' as Category },
  { src: '/images/gallery/kids-3.jpg', alt: "Kid's haircut", w: 1000, h: 1000, category: 'Kids Cuts' as Category },
  { src: '/images/gallery/kids-4.jpg', alt: "Kid's haircut", w: 1000, h: 1000, category: 'Kids Cuts' as Category },
  { src: '/images/gallery/kids-5.jpg', alt: "Kid's haircut", w: 1000, h: 1000, category: 'Kids Cuts' as Category },
  { src: '/images/gallery/kids-6.jpg', alt: "Kid's haircut", w: 1000, h: 1000, category: 'Kids Cuts' as Category },
  { src: '/images/gallery/kids-7.jpg', alt: "Kid's haircut", w: 1000, h: 1000, category: 'Kids Cuts' as Category },
  { src: '/images/gallery/kids-8.jpg', alt: "Kid's haircut", w: 1000, h: 1000, category: 'Kids Cuts' as Category },
  { src: '/images/gallery/womens-1.jpg', alt: "Women's haircut", w: 1000, h: 1000, category: 'Women Cuts' as Category },
  { src: '/images/gallery/womens-2.jpg', alt: "Women's haircut", w: 1000, h: 1000, category: 'Women Cuts' as Category },
  { src: '/images/gallery/womens-3.jpg', alt: "Women's haircut", w: 1000, h: 1000, category: 'Women Cuts' as Category },
  { src: '/images/gallery/womens-4.jpg', alt: "Women's haircut", w: 1000, h: 1000, category: 'Women Cuts' as Category },
  { src: '/images/gallery/womens-5.jpg', alt: "Women's haircut", w: 1000, h: 1000, category: 'Women Cuts' as Category },
  { src: '/images/gallery/womens-6.jpg', alt: "Women's haircut", w: 1000, h: 1000, category: 'Women Cuts' as Category },
  { src: '/images/gallery/womens-7.jpg', alt: "Women's haircut", w: 1000, h: 1000, category: 'Women Cuts' as Category },
  { src: '/images/gallery/womens-8.jpg', alt: "Women's haircut", w: 1000, h: 1000, category: 'Women Cuts' as Category },
  { src: '/images/gallery/womens-9.jpg', alt: "Women's haircut", w: 1000, h: 1000, category: 'Women Cuts' as Category },
  { src: '/images/gallery/womens-10.jpg', alt: "Women's haircut", w: 1000, h: 1000, category: 'Women Cuts' as Category },
  { src: '/images/gallery/womens-11.jpg', alt: "Women's haircut", w: 1000, h: 1000, category: 'Women Cuts' as Category },
  { src: '/images/gallery/womens-12.jpg', alt: "Women's haircut", w: 1000, h: 1000, category: 'Women Cuts' as Category },
  { src: '/images/gallery/womens-13.jpg', alt: "Women's haircut", w: 1000, h: 1000, category: 'Women Cuts' as Category },
  { src: '/images/gallery/nails-1.jpg', alt: 'Nail art', w: 1000, h: 1000, category: 'Nails' as Category },
  { src: '/images/gallery/nails-2.jpg', alt: 'Nail art', w: 1000, h: 1000, category: 'Nails' as Category },
  { src: '/images/gallery/nails-3.jpg', alt: 'Nail art', w: 1000, h: 1000, category: 'Nails' as Category },
  { src: '/images/gallery/nails-4.jpg', alt: 'Nail art', w: 1000, h: 1000, category: 'Nails' as Category },
  { src: '/images/gallery/quince-1.jpg', alt: 'Quinceañera hairstyle', w: 1000, h: 1000, category: 'Quinceañera' as Category },
  { src: '/images/gallery/quince-2.jpg', alt: 'Quinceañera hairstyle', w: 1000, h: 1000, category: 'Quinceañera' as Category },
  { src: '/images/gallery/quince-3.jpg', alt: 'Quinceañera hairstyle', w: 1000, h: 1000, category: 'Quinceañera' as Category },
  { src: '/images/gallery/quince-4.jpg', alt: 'Quinceañera hairstyle', w: 1000, h: 1000, category: 'Quinceañera' as Category },
  { src: '/images/gallery/quince-5.jpg', alt: 'Quinceañera hairstyle', w: 1000, h: 1000, category: 'Quinceañera' as Category },
  { src: '/images/gallery/quince-6.jpg', alt: 'Quinceañera hairstyle', w: 1000, h: 1000, category: 'Quinceañera' as Category },
  { src: '/images/gallery/quince-7.jpg', alt: 'Quinceañera hairstyle', w: 1000, h: 1000, category: 'Quinceañera' as Category },
  { src: '/images/gallery/quince-8.jpg', alt: 'Quinceañera hairstyle', w: 1000, h: 1000, category: 'Quinceañera' as Category },
  { src: '/images/gallery/quince-9.jpg', alt: 'Quinceañera hairstyle', w: 1000, h: 1000, category: 'Quinceañera' as Category },
  { src: '/images/gallery/quince-10.jpg', alt: 'Quinceañera hairstyle', w: 1000, h: 1000, category: 'Quinceañera' as Category },
  { src: '/images/gallery/quince-11.jpg', alt: 'Quinceañera hairstyle', w: 1000, h: 1000, category: 'Quinceañera' as Category },
  { src: '/images/gallery/quince-12.jpg', alt: 'Quinceañera hairstyle', w: 1000, h: 1000, category: 'Quinceañera' as Category },
  { src: '/images/gallery/quince-13.jpg', alt: 'Quinceañera hairstyle', w: 1000, h: 1000, category: 'Quinceañera' as Category },
  { src: '/images/gallery/quince-14.jpg', alt: 'Quinceañera hairstyle', w: 1000, h: 1000, category: 'Quinceañera' as Category },
]

const FALLBACKS = ['#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#F0F0F0', '#FFE4EE', '#FFE4EE', '#FFE4EE', '#FFE4EE']

const CATEGORIES: Category[] = ['All', 'Mens Cuts', 'Kids Cuts', 'Women Cuts', 'Quinceañera', 'Nails']

export default function GalleryPage() {
  const [active, setActive] = useState<Category>('All')
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 })

  const filtered = active === 'All' ? ALL_IMAGES : ALL_IMAGES.filter((img) => img.category === active)

  return (
    <>
      <main>
        {/* Page header */}
        <div ref={headerRef} className="pt-28 md:pt-36 pb-12 bg-ink">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-bold tracking-[0.22em] uppercase text-accent mb-5"
            >
              Gallery
            </motion.p>

            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: '102%' }}
                animate={isHeaderInView ? { y: 0 } : {}}
                transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1] }}
                style={{ fontSize: 'clamp(3rem, 9vw, 9rem)', lineHeight: 0.9, letterSpacing: '-0.04em' }}
                className="font-black text-white"
              >
                The Work.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg font-semibold text-white/50 max-w-md"
            >
              Every look, crafted with intention. Browse cuts, color transformations, and styling moments.
            </motion.p>
          </div>
        </div>

        {/* Filter bar */}
        <div className="sticky top-16 md:top-20 z-30 bg-ink/95 backdrop-blur-sm border-b border-white/8 py-4">
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center gap-2 md:gap-3 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex-shrink-0 px-5 py-2 text-xs font-black tracking-[0.14em] uppercase rounded-full transition-all duration-300 ${
                  active === cat
                    ? 'bg-accent text-white'
                    : 'bg-transparent text-white/40 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto flex-shrink-0 text-xs font-bold tracking-[0.12em] uppercase text-white/25">
              {filtered.length} photos
            </span>
          </div>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="bg-ink py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <motion.div
              layout
              className="columns-1 sm:columns-2 lg:columns-3 gap-3 md:gap-4"
            >
              <AnimatePresence>
                {filtered.map((img, i) => (
                  <motion.div
                    key={img.src}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: Math.min(i * 0.02, 0.2) }}
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
                        priority={i < 6}
                      />
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/25 transition-all duration-500 flex items-end p-4">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white font-black text-xs tracking-[0.18em] uppercase">{img.alt}</p>
                          <p className="text-white/60 font-bold text-[10px] tracking-[0.12em] uppercase mt-0.5">{img.category}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-white/30 font-black text-xl">No photos in this category yet.</p>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-accent-tint py-16 md:py-20">
          <div className="max-w-xl mx-auto px-6 text-center">
            <p className="font-black text-2xl md:text-3xl text-white tracking-[-0.03em] mb-6">
              Like what you see?<br />
              <span className="text-accent">Your chair is waiting.</span>
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 text-xs font-black tracking-[0.16em] uppercase rounded-full hover:bg-ink hover:text-white transition-all duration-300 group"
            >
              Book Now
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>

        <Footer />
      </main>

      <AnimatePresence>
        {lightbox && (
          <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
