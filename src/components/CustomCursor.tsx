import { useEffect, useState } from 'react'
import { motion, useSpring, useReducedMotion } from 'framer-motion'

export default function CustomCursor() {
  const reduce = useReducedMotion()
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [targetRect, setTargetRect] = useState<{
    x: number
    y: number
    w: number
    h: number
  } | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Smooth mouse coordinates
  const springConfig = { damping: 25, stiffness: 350 }
  const cursorX = useSpring(-100, springConfig)
  const cursorY = useSpring(-100, springConfig)

  useEffect(() => {
    // Only run on devices with a mouse
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)

      // Check if hovering over cards, buttons, or input fields
      const target = e.target as HTMLElement | null
      const hoverable = target?.closest(
        'a, button, input, textarea, select, .card-3d, article, [data-cursor-target]'
      ) as HTMLElement | null

      if (hoverable) {
        const rect = hoverable.getBoundingClientRect()
        // Spread padding around the element
        const pad = 10
        setTargetRect({
          x: rect.left - pad,
          y: rect.top - pad,
          w: rect.width + pad * 2,
          h: rect.height + pad * 2,
        })
      } else {
        setTargetRect(null)
      }
    }

    const onMouseLeave = () => setIsVisible(false)
    const onMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [cursorX, cursorY, isVisible])

  if (reduce || !isVisible) return null

  const isTargeting = !!targetRect

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* ── 1. Target Center Dot (always tracks cursor exactly) ── */}
      <motion.div
        className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald shadow-[0_0_8px_#A9B887]"
        style={{
          x: pos.x,
          y: pos.y,
        }}
      />

      {/* ── 2. Rotating Viewfinder Bracket Reticle ── */}
      {isTargeting ? (
        /* SPREAD STATE (Image 3): Snaps & expands around hovered card/input */
        <motion.div
          className="fixed left-0 top-0"
          initial={false}
          animate={{
            x: targetRect.x,
            y: targetRect.y,
            width: targetRect.w,
            height: targetRect.h,
            rotate: 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 26,
          }}
        >
          {/* Top-Left Corner */}
          <span className="absolute -left-1 -top-1 h-3.5 w-3.5 border-l-2 border-t-2 border-emerald" />
          {/* Top-Right Corner */}
          <span className="absolute -right-1 -top-1 h-3.5 w-3.5 border-r-2 border-t-2 border-emerald" />
          {/* Bottom-Left Corner */}
          <span className="absolute -bottom-1 -left-1 h-3.5 w-3.5 border-b-2 border-l-2 border-emerald" />
          {/* Bottom-Right Corner */}
          <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 border-b-2 border-r-2 border-emerald" />
        </motion.div>
      ) : (
        /* DEFAULT STATE (Image 1): Compact rotating viewfinder reticle */
        <motion.div
          className="fixed left-0 top-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2"
          style={{
            x: cursorX,
            y: cursorY,
          }}
        >
          {/* Continuous Rotation Wrapper */}
          <div className="relative h-full w-full animate-[spin_10s_linear_infinite]">
            {/* Top-Left Corner */}
            <span className="absolute left-0 top-0 h-2.5 w-2.5 border-l-[1.5px] border-t-[1.5px] border-white/90" />
            {/* Top-Right Corner */}
            <span className="absolute right-0 top-0 h-2.5 w-2.5 border-r-[1.5px] border-t-[1.5px] border-white/90" />
            {/* Bottom-Left Corner */}
            <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b-[1.5px] border-l-[1.5px] border-white/90" />
            {/* Bottom-Right Corner */}
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b-[1.5px] border-r-[1.5px] border-white/90" />
          </div>
        </motion.div>
      )}
    </div>
  )
}
