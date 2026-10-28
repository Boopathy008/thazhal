import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function CustomCursor() {
  const reduce = useReducedMotion()
  const [pos, setPos] = useState({ x: -200, y: -200 })
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run on devices with a mouse
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      // Use document.elementFromPoint to inspect the true element directly under pointer
      const target = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null
      const hoverable = target?.closest(
        'a, button, input, textarea, select, .card-3d, article, [role="button"], label'
      )
      setIsHovered(!!hoverable)
    }

    const onMouseLeave = () => {
      setIsVisible(false)
      setIsHovered(false)
    }

    const onMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [isVisible])

  if (reduce || !isVisible) return null

  // SVG coordinate dimensions:
  // Normal state: 34px box, 17px center
  // Hovered state: 58px box, 29px center
  const boxSize = isHovered ? 58 : 34
  const center = boxSize / 2
  const bracketLen = isHovered ? 13 : 8
  const pad = 3

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden"
      aria-hidden="true"
    >
      <div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          willChange: 'transform',
        }}
      >
        <svg
          width={boxSize}
          height={boxSize}
          viewBox={`0 0 ${boxSize} ${boxSize}`}
          className="animate-[spin_9s_linear_infinite]"
          style={{
            position: 'absolute',
            left: -center,
            top: -center,
            transition: 'width 0.22s ease-out, height 0.22s ease-out, left 0.22s ease-out, top 0.22s ease-out',
            overflow: 'visible',
          }}
        >
          {/* Top-Left Corner */}
          <path
            d={`M ${pad} ${pad + bracketLen} L ${pad} ${pad} L ${pad + bracketLen} ${pad}`}
            fill="none"
            stroke="rgba(255,255,255,0.95)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Top-Right Corner */}
          <path
            d={`M ${boxSize - pad - bracketLen} ${pad} L ${boxSize - pad} ${pad} L ${boxSize - pad} ${pad + bracketLen}`}
            fill="none"
            stroke="rgba(255,255,255,0.95)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Bottom-Right Corner */}
          <path
            d={`M ${boxSize - pad} ${boxSize - pad - bracketLen} L ${boxSize - pad} ${boxSize - pad} L ${boxSize - pad - bracketLen} ${boxSize - pad}`}
            fill="none"
            stroke="rgba(255,255,255,0.95)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Bottom-Left Corner */}
          <path
            d={`M ${pad + bracketLen} ${boxSize - pad} L ${pad} ${boxSize - pad} L ${pad} ${boxSize - pad - bracketLen}`}
            fill="none"
            stroke="rgba(255,255,255,0.95)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Precision Center Dot (Mathematically guaranteed dead-center) */}
          <circle
            cx={center}
            cy={center}
            r="2"
            fill="#FFFFFF"
            filter="drop-shadow(0 0 4px rgba(255,255,255,0.8))"
          />
        </svg>
      </div>
    </div>
  )
}
