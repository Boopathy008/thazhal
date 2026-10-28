/**
 * ui.tsx — THAZHAL design system primitives
 * High-performance 3D components optimized for instantaneous GPU response without layout thrashing.
 */

import { ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const palettes = [
  ['#090A0F', '#141824'],
  ['#141824', '#090A0F'],
  ['#0F172A', '#090A0F'],
  ['#090A0F', '#0F172A'],
  ['#1E293B', '#090A0F'],
]

/** Generated topographic artwork */
export function Art({ variant = 0, className = '', label }: { variant?: number; className?: string; label?: string }) {
  const [a, b] = palettes[variant % palettes.length]
  const id = `art${variant % palettes.length}`
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className={className} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} /></linearGradient></defs>
      <rect width="800" height="600" fill={`url(#${id})`} />
      <g stroke="#38BDF8" fill="none">
        {Array.from({ length: 16 }, (_, i) => (
          <ellipse key={i} cx={420 + Math.sin(i + variant) * 50} cy={300 + Math.cos(i * 1.3 + variant) * 40} rx={30 + i * 30} ry={20 + i * 21}
            strokeOpacity={i % 4 === 0 ? 0.28 : 0.08} transform={`rotate(${variant * 17 + i * 2.5} 420 300)`} />
        ))}
        {Array.from({ length: 9 }, (_, i) => <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="600" strokeOpacity=".04" />)}
        {Array.from({ length: 7 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 100} x2="800" y2={i * 100} strokeOpacity=".04" />)}
      </g>
    </svg>
  )
}

export function Visual({ variant, image, label, className = '' }: { variant: number; image?: string; label: string; className?: string }) {
  return image
    ? <img src={image} alt={label} loading="lazy" className={`h-full w-full object-cover ${className}`} />
    : <Art variant={variant} label={label} className={`h-full w-full ${className}`} />
}

/** Scroll-triggered reveal with 3D depth entrance */
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/**
 * High-performance 3D tilt card
 * Optimized: uses CSS transforms and simple hover states to avoid per-pixel mouse listener re-renders
 */
export function Card3D({ children, className = '' }: { children: ReactNode; className?: string }) {
  const [isHovered, setIsHovered] = useState(false)
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={
        reduce
          ? {}
          : isHovered
          ? { scale: 1.02, y: -6, z: 20 }
          : { scale: 1, y: 0, z: 0 }
      }
      transition={{ type: 'spring', stiffness: 450, damping: 26 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
        willChange: 'transform',
      }}
    >
      {children}
      {/* Specular sheen */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.08 : 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)',
        }}
      />
    </motion.div>
  )
}

/**
 * Super 3D Button with dynamic tilt, physical elevation depth, glowing border, and sheen.
 */
export function Btn({
  to,
  children,
  variant = 'primary',
  onClick,
  className = '',
}: {
  to?: string
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'dark' | 'outline'
  onClick?: () => void
  className?: string
}) {
  const reduce = useReducedMotion()
  const [isHovered, setIsHovered] = useState(false)

  const styles = {
    primary:
      'bg-emerald text-navy font-bold shadow-[0_10px_25px_-5px_rgba(56,189,248,0.5)] hover:shadow-[0_20px_35px_-5px_rgba(56,189,248,0.7)] border border-emerald/50',
    ghost:
      'border border-white/30 text-white backdrop-blur-md bg-white/[0.08] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] hover:border-emerald hover:text-emerald hover:bg-emerald/15 hover:shadow-[0_18px_30px_-5px_rgba(56,189,248,0.3)]',
    dark:
      'bg-navy text-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.6)] hover:bg-forest hover:shadow-[0_20px_35px_-5px_rgba(15,23,42,0.8)] border border-white/10',
    outline:
      'border-2 border-navy/20 text-navy bg-white/50 backdrop-blur-sm shadow-[0_8px_20px_-5px_rgba(0,0,0,0.1)] hover:bg-navy hover:text-white hover:border-navy hover:shadow-[0_16px_30px_-5px_rgba(0,0,0,0.25)]',
  }[variant]

  const base = `group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 select-none ${styles} ${className}`

  const motionProps = reduce
    ? {}
    : {
        animate: isHovered
          ? { scale: 1.05, y: -3, z: 25 }
          : { scale: 1, y: 0, z: 0 },
        whileTap: { scale: 0.96, y: 1 },
        transition: { type: 'spring', stiffness: 500, damping: 24 },
        style: { perspective: 800, transformStyle: 'preserve-3d' as const, willChange: 'transform' },
      }

  const inner = (
    <>
      {/* 3D Specular Sheen sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
      <span className="relative z-10 flex items-center gap-2" style={{ transform: 'translateZ(10px)' }}>
        {children}
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1.5"
          aria-hidden
        />
      </span>
    </>
  )

  return to ? (
    <motion.div {...motionProps} className="inline-block">
      <Link
        to={to}
        className={base}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {inner}
      </Link>
    </motion.div>
  ) : (
    <motion.button
      type="button"
      onClick={onClick}
      {...motionProps}
      className={base}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {inner}
    </motion.button>
  )
}

/** Section heading — enforces typography hierarchy */
export function SectionHeading({ eyebrow, title, text, dark, center }: {
  eyebrow?: string; title: string; text?: string; dark?: boolean; center?: boolean
}) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-2.5 ${center ? 'justify-center' : ''}`}>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
          <p className="eyebrow">{eyebrow}</p>
        </div>
      )}
      <h2 className={`text-3xl font-bold leading-[1.1] sm:text-4xl ${dark ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-4 max-w-2xl text-[15px] leading-relaxed ${center ? 'mx-auto' : ''} ${dark ? 'text-white/70' : 'text-slate-600'}`}>
          {text}
        </p>
      )}
    </div>
  )
}

/** CTA section — full-width call to action with dot-grid texture */
export function CTA({
  title = "Let's Turn Geospatial Data Into Meaningful Action.",
  text = "Have a project, a monitoring challenge, or an idea worth exploring? Let's discuss how THAZHAL's geospatial expertise can support your goals.",
}: { title?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-white section border-t border-slate-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dot-grid opacity-100"
      />
      <div className="wrap relative">
        <Reveal>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
            <p className="eyebrow">Connect with us</p>
          </div>
          <h2 className="max-w-4xl text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] text-slate-600 leading-relaxed">
            {text}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Btn to="/contact">Talk to Our Team</Btn>
            <Btn to="/#solutions" variant="outline">Explore Our Solutions</Btn>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
