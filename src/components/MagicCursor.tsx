/**
 * MagicCursor — High-Performance Originkit Spin Cursor
 * Optimized for butter-smooth 60-120fps motion without main-thread or scroll lag.
 */

import { useEffect, useRef } from 'react'

type MagicCursorProps = {
  fillColor?: string
  cursorSize?: number
  enableStretch?: boolean
  style?: React.CSSProperties
}

const CLICK_EFFECT = true
const FOLLOW_TAU = 0.015
const VELOCITY_TAU = 0.04

const ARROW = 'M0,0 L18,11 L9,13 L6,21 Z'
const ARROW_W = 18
const ARROW_H = 21
const ARROW_REST = Math.atan2(-15, -12)

function angleDelta(from: number, to: number) {
  let d = (to - from) % (Math.PI * 2)
  if (d > Math.PI) d -= Math.PI * 2
  if (d < -Math.PI) d += Math.PI * 2
  return d
}

export default function MagicCursor({
  fillColor = '#FFFFFF',
  cursorSize = 20,
  enableStretch = true,
  style,
}: MagicCursorProps) {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only initialize on pointer-capable devices (not touch screens)
    if (window.matchMedia('(pointer: coarse)').matches) return

    const host = hostRef.current
    if (!host) return

    const tag = document.createElement('style')
    tag.textContent = `html, body, *, a, button, [role="button"] { cursor: none !important; }`
    document.head.appendChild(tag)

    let targetX = -9999
    let targetY = -9999
    let x = targetX
    let y = targetY
    let vx = 0
    let vy = 0
    let angle = 0
    let pressed = 0
    let down = false
    let seen = false
    let inside = true

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      if (!seen) {
        x = targetX
        y = targetY
        vx = 0
        vy = 0
        seen = true
      }
      inside = true
    }

    const onWindowLeave = () => {
      inside = false
      if (host) host.style.opacity = '0'
    }

    const onDown = () => { down = true }
    const onUp = () => { down = false }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onWindowLeave)
    window.addEventListener('mousedown', onDown, { passive: true })
    window.addEventListener('mouseup', onUp, { passive: true })

    let raf = 0
    let last = performance.now()

    const frame = (now: number) => {
      const dt = Math.min(0.04, Math.max(0.001, (now - last) / 1000))
      last = now

      const followEase = 1 - Math.exp(-dt / FOLLOW_TAU)
      const prevX = x
      const prevY = y
      x += (targetX - x) * followEase
      y += (targetY - y) * followEase

      if (dt > 0) {
        const vEase = 1 - Math.exp(-dt / VELOCITY_TAU)
        vx += ((x - prevX) / dt - vx) * vEase
        vy += ((y - prevY) / dt - vy) * vEase
      }

      const speed = Math.hypot(vx, vy)

      if (speed > 35) {
        const target = Math.atan2(vy, vx) - ARROW_REST
        angle += angleDelta(angle, target) * (1 - Math.exp(-dt / 0.05))
      }

      const stretch = enableStretch ? 1 + Math.min(speed / 3000, 0.35) : 1
      const squash = enableStretch ? 1 / Math.sqrt(stretch) : 1

      const clickTarget = CLICK_EFFECT && down ? 1 : 0
      pressed += (clickTarget - pressed) * (1 - Math.exp(-dt / 0.05))
      const press = 1 - pressed * 0.2

      const s = (cursorSize / ARROW_H) * press

      host.style.opacity = seen && inside ? '1' : '0'
      // Hardware-accelerated 3D transform (translate3d forces GPU compositor layer)
      host.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${angle}rad) scale(${s * squash}, ${s * stretch})`

      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      tag.remove()
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onWindowLeave)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [cursorSize, enableStretch])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        overflow: 'hidden',
        ...style,
      }}
    >
      <div
        ref={hostRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          transformOrigin: '0 0',
          opacity: 0,
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      >
        <svg
          width={ARROW_W}
          height={ARROW_H}
          viewBox={`0 0 ${ARROW_W} ${ARROW_H}`}
          style={{
            display: 'block',
            overflow: 'visible',
            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.45)) drop-shadow(0 0 10px rgba(56,189,248,0.4))',
          }}
          aria-hidden
        >
          <path
            d={ARROW}
            fill={fillColor}
            stroke="#090A0F"
            strokeWidth={1.2}
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}
