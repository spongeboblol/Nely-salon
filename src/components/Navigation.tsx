'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/#stylists', label: 'Stylists' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink/95 backdrop-blur-sm border-b border-white/8'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="text-lg md:text-xl font-black tracking-[-0.04em] text-white hover:text-accent transition-colors duration-200"
          >
            NELY&apos;S
          </Link>

          {/* Center links — desktop */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative text-xs font-bold tracking-[0.14em] uppercase transition-colors duration-200 group ${
                    active ? 'text-accent' : 'text-white hover:text-accent'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Book CTA — desktop */}
          <Link
            href="/book"
            className="hidden md:inline-flex items-center bg-accent text-white px-6 py-2.5 text-xs font-black tracking-[0.14em] uppercase rounded-full hover:bg-ink hover:text-white transition-all duration-300"
          >
            Book Now
          </Link>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 z-[60] relative"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-6 h-[2px] bg-white origin-center transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white origin-center transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="fixed inset-0 z-40 bg-ink flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map(({ href, label }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ delay: i * 0.07 + 0.1, duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
              >
                <Link
                  href={href}
                  className="text-[2.5rem] font-black tracking-[-0.03em] text-white hover:text-accent transition-colors duration-200"
                >
                  {label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ delay: navLinks.length * 0.07 + 0.1, duration: 0.4 }}
            >
              <Link
                href="/book"
                className="mt-4 inline-flex items-center bg-accent text-white px-8 py-3 text-sm font-black tracking-[0.14em] uppercase rounded-full"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
