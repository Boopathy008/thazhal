/**
 * ui.tsx — THAZHAL design system primitives
 * Anti-slop design: purposeful typography, spacing, motion, and color hierarchy.
 * Based on taste-skill + awesome-design-md principles.
 */

import { ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const palettes = [['#2E3D28', '#1a2418'], ['#1a2418', '#2E3D28'], ['#3D5234', '#2E3D28'], ['#2E3D28', '#3D5234'], ['#1a2418', '#3D5234']]

/** Generated topographic artwork — stand-in for photography. */
export function Art({ variant = 0, className = '', label }: { variant?: number; className?: string; label?: string }) {
  const [a, b] = palettes[variant % palettes.length]
  const id = `art${variant % palettes.length}`
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className={className} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} /></linearGradient></defs>
      <rect width="800" height="600" fill={`url(#${id})`} />
      <g stroke="#A9B887" fill="none">
        {Array.from({ length: 16 }, (_, i) => (
          <ellipse key={i} cx={420 + Math.sin(i + variant) * 50} cy={300 + Math.cos(i * 1.3 + variant) * 40} rx={30 + i * 30} ry={20 + i * 21}
            strokeOpacity={i % 4 === 0 ? 0.28 : 0.1} transform={`rotate(${variant * 17 + i * 2.5} 420 300)`} />
        ))}
        {Array.from({ length: 9 }, (_, i) => <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="600" strokeOpacity=".05" />)}
        {Array.from({ length: 7 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 100} x2="800" y2={i * 100} strokeOpacity=".05" />)}
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
      initial={reduce ? false : { opacity: 0, y: 32, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/** Interactive 3D perspective tilt card */
export function Card3D({ children, className = '' }: { children: ReactNode; className?: string }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const reduce = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotX = -((y - centerY) / centerY) * 7
    const rotY = ((x - centerX) / centerX) * 7
    setRotateX(rotX)
    setRotateY(rotY)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={
        reduce
          ? {}
          : isHovered
          ? { rotateX, rotateY, scale: 1.025, z: 28 }
          : { rotateX: 0, rotateY: 0, scale: 1, z: 0 }
      }
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
    >
      {children}
      {/* Specular lighting sheen */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-400"
        style={{
          opacity: isHovered ? 0.14 : 0,
          background: `radial-gradient(circle at ${50 + rotateY * 6}% ${50 - rotateX * 6}%, rgba(255,255,255,0.9), transparent 62%)`,
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
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (reduce) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setRotateX(-((y - centerY) / centerY) * 12)
    setRotateY(((x - centerX) / centerX) * 12)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotateX(0)
    setRotateY(0)
  }

  const styles = {
    primary:
      'bg-emerald text-navy font-bold shadow-[0_10px_25px_-5px_rgba(169,184,135,0.5),0_8px_10px_-6px_rgba(169,184,135,0.3)] hover:shadow-[0_20px_35px_-5px_rgba(169,184,135,0.7),0_10px_10px_-5px_rgba(169,184,135,0.4)] border border-emerald/50',
    ghost:
      'border border-white/40 text-white backdrop-blur-md bg-white/[0.08] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] hover:border-emerald hover:text-emerald hover:bg-emerald/15 hover:shadow-[0_18px_30px_-5px_rgba(169,184,135,0.3)]',
    dark:
      'bg-navy text-white shadow-[0_10px_25px_-5px_rgba(46,61,40,0.6)] hover:bg-forest hover:shadow-[0_20px_35px_-5px_rgba(61,82,52,0.8)] border border-white/10',
    outline:
      'border-2 border-navy/20 text-navy bg-white/50 backdrop-blur-sm shadow-[0_8px_20px_-5px_rgba(46,61,40,0.15)] hover:bg-navy hover:text-white hover:border-navy hover:shadow-[0_16px_30px_-5px_rgba(46,61,40,0.3)]',
  }[variant]

  const base = `group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 select-none ${styles} ${className}`

  const motionProps = reduce
    ? {}
    : {
        animate: isHovered
          ? { scale: 1.06, y: -4, rotateX, rotateY, z: 30 }
          : { scale: 1, y: 0, rotateX: 0, rotateY: 0, z: 0 },
        whileTap: { scale: 0.95, y: 1 },
        transition: { type: 'spring', stiffness: 500, damping: 22 },
        style: { perspective: 800, transformStyle: 'preserve-3d' as const },
      }

  const inner = (
    <>
      {/* 3D Specular Sheen sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
      {/* 3D Ambient dynamic highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.35 : 0,
          background: `radial-gradient(circle at ${50 + rotateY * 3}% ${50 - rotateX * 3}%, rgba(255,255,255,0.9), transparent 60%)`,
        }}
      />
      <span className="relative z-10 flex items-center gap-2" style={{ transform: 'translateZ(15px)' }}>
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
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {inner}
    </motion.button>
  )
}

/** Section heading — enforces typography hierarchy, left-aligned by default */
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
        <p className={`mt-4 max-w-2xl text-[15px] leading-relaxed ${center ? 'mx-auto' : ''} ${dark ? 'text-white/65' : 'text-slate-500'}`}>
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
          <p className="mt-5 max-w-2xl text-[15px] text-slate-500 leading-relaxed">
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
