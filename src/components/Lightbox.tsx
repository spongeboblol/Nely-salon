'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface LightboxProps {
  src: string
  alt: string
  onClose: () => void
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-ink/90 flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
        className="relative max-w-4xl w-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full" style={{ maxHeight: '85vh' }}>
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={900}
            className="object-contain w-full h-auto"
            style={{ maxHeight: '85vh' }}
          />
        </div>

        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 bg-ink text-white flex items-center justify-center font-black text-xl hover:bg-accent hover:text-white transition-colors duration-200 rounded-sm"
          aria-label="Close"
        >
          ×
        </button>
      </motion.div>
    </motion.div>
  )
}
