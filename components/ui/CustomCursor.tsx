'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 350, damping: 28 })
  const springY = useSpring(y, { stiffness: 350, damping: 28 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!visible) setVisible(true)
    }
    const hide = () => setVisible(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', hide)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', hide)
    }
  }, [visible, x, y])

  return (
    <motion.div
      style={{ left: springX, top: springY, opacity: visible ? 1 : 0 }}
      className="pointer-events-none fixed z-[9999] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference transition-opacity duration-200"
    />
  )
}
