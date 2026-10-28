import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function CustomCursor() {
  const reduce = useReducedMotion()
  const [pos, setPos] = useState({ x: -200, y: -200 })
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run on devices with a mouse cursor
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      const target = e.target as HTMLElement | null
      const hoverable = target?.closest(
        'a, button, input, textarea, select, .card-3d, article, [role="button"]'
      )
      setIsHovered(!!hoverable)
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
  }, [isVisible])

  if (reduce || !isVisible) return null

  // Size specifications:
  // Normal state: 28px wide
  // Hovered state: spreads outward to 56px with a smooth spring transition
  const size = isHovered ? 56 : 28
  const half = size / 2
  const bracketLength = isHovered ? 12 : 7
  const borderThickness = 1.8

  return (
    <div className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden">
      {/* ── Outer Position Controller (Directly locked to cursor) ── */}
      <div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          willChange: 'transform',
        }}
      >
        {/* ── 1. Target Center Dot (always locked dead center) ── */}
        <div
          className="rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)]"
          style={{
            position: 'absolute',
            left: -2,
            top: -2,
            width: 4,
            height: 4,
          }}
        />

        {/* ── 2. Rotating Viewfinder Brackets ── */}
        <div
          className="animate-[spin_9s_linear_infinite]"
          style={{
            position: 'absolute',
            left: -half,
            top: -half,
            width: size,
            height: size,
            transition: 'width 0.28s cubic-bezier(0.2, 0.9, 0.3, 1.2), height 0.28s cubic-bezier(0.2, 0.9, 0.3, 1.2), left 0.28s cubic-bezier(0.2, 0.9, 0.3, 1.2), top 0.28s cubic-bezier(0.2, 0.9, 0.3, 1.2)',
          }}
        >
          {/* Top-Left Bracket */}
          <span
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: bracketLength,
              height: bracketLength,
              borderLeft: `${borderThickness}px solid rgba(255,255,255,0.95)`,
              borderTop: `${borderThickness}px solid rgba(255,255,255,0.95)`,
              transition: 'all 0.28s ease',
            }}
          />

          {/* Top-Right Bracket */}
          <span
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              width: bracketLength,
              height: bracketLength,
              borderRight: `${borderThickness}px solid rgba(255,255,255,0.95)`,
              borderTop: `${borderThickness}px solid rgba(255,255,255,0.95)`,
              transition: 'all 0.28s ease',
            }}
          />

          {/* Bottom-Left Bracket */}
          <span
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: bracketLength,
              height: bracketLength,
              borderLeft: `${borderThickness}px solid rgba(255,255,255,0.95)`,
              borderBottom: `${borderThickness}px solid rgba(255,255,255,0.95)`,
              transition: 'all 0.28s ease',
            }}
          />

          {/* Bottom-Right Bracket */}
          <span
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: bracketLength,
              height: bracketLength,
              borderRight: `${borderThickness}px solid rgba(255,255,255,0.95)`,
              borderBottom: `${borderThickness}px solid rgba(255,255,255,0.95)`,
              transition: 'all 0.28s ease',
            }}
          />
        </div>
      </div>
    </div>
  )
}
