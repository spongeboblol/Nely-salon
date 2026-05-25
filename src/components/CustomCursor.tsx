'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)

  const springConfig = { stiffness: 600, damping: 40, mass: 0.4 }
  const x = useSpring(rawX, springConfig)
  const y = useSpring(rawY, springConfig)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const onOver = (e: MouseEvent) => {
      const el = e.target as Element
      if (el.closest('a, button, [data-cursor]')) setHovering(true)
    }

    const onOut = (e: MouseEvent) => {
      const el = e.relatedTarget as Element | null
      if (!el || !el.closest('a, button, [data-cursor]')) setHovering(false)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [rawX, rawY, visible])

  const size = hovering ? 44 : 14

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full hidden md:block"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        opacity: visible ? 1 : 0,
      }}
      animate={{
        width: size,
        height: size,
        backgroundColor: '#C9A532',
        mixBlendMode: hovering ? 'normal' : 'normal',
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    />
  )
}
