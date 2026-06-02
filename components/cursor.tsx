"use client"
import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function Cursor() {
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springX = useSpring(mouseX, { stiffness: 600, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 600, damping: 30 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      setHovering(!!t.closest("a, button, [data-hover]"))
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", onOver)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
    }
  }, [mouseX, mouseY, visible])

  if (!visible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[999] rounded-full bg-white mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ width: hovering ? 44 : 10, height: hovering ? 44 : 10 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    />
  )
}