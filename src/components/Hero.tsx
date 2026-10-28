/**
 * Hero — homepage hero with the authentic Originkit Terra Dusk 3D Earth globe.
 */

import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Btn } from './ui'
import TerraDusk from './TerraDusk'

/* ── Animation factory ─────────────────────────────────────────── */
function item(i: number, reduce: boolean | null) {
  return {
    initial: reduce ? false : { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay: 0.2 + i * 0.18, ease: [0.22, 1, 0.36, 1] as const },
  }
}

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      style={{ background: '#02040A' }}
    >
      {/* ── Terra Dusk 3D Canvas Background (Interactive) ──────────── */}
      <div
        aria-hidden
        className="pointer-events-auto absolute inset-0 z-0 flex items-center justify-end"
      >
        <div className="absolute inset-0 h-full w-full">
          <TerraDusk
            background="transparent"
            size={760}
            sun="cursor"
            drag={true}
            hover={7}
            speed={8}
            stars={6}
            daylight={85}
            look={{
              clouds: 6,
              lights: 6,
              atmosphere: "#A9B887", // THAZHAL brand sage/emerald atmosphere glow
            }}
            style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
          />
        </div>
      </div>

      {/* ── Left-side dark veil so text stays readable on top of space/globe ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to right, rgba(2,4,10,0.92) 0%, rgba(2,4,10,0.78) 42%, rgba(2,4,10,0.3) 68%, transparent 100%)',
        }}
      />

      {/* ── Mobile bottom veil ──────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] lg:hidden"
        style={{
          background:
            'linear-gradient(to top, rgba(2,4,10,0.92) 35%, rgba(2,4,10,0.5) 70%, transparent 100%)',
        }}
      />

      {/* ── Hero content ─────────────────────────────────────────────── */}
      <div className="wrap relative z-10 flex flex-col justify-center py-28 sm:py-32 lg:max-w-[55%]">
        <motion.p {...item(0, reduce)} className="eyebrow mb-5 text-xs sm:text-sm">
          Geospatial Intelligence · Environmental Innovation
        </motion.p>

        <motion.h1
          {...item(1, reduce)}
          className="max-w-2xl text-3xl font-bold leading-[1.07] text-white sm:text-5xl lg:text-6xl"
        >
          See the Earth{' '}
          <span className="text-emerald">Differently.</span>
          <br />
          Build a More{' '}
          <span className="text-emerald">Resilient</span> Future.
        </motion.h1>

        <motion.p
          {...item(2, reduce)}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          THAZHAL transforms geospatial data into meaningful intelligence, helping
          organisations understand environmental change, monitor critical infrastructure,
          and make informed decisions for a sustainable future.
        </motion.p>

        <motion.div {...item(3, reduce)} className="mt-9 flex flex-wrap gap-4">
          <Btn to="/#solutions">Explore Our Solutions</Btn>
          <Btn to="/about" variant="ghost">Discover THAZHAL</Btn>
        </motion.div>
      </div>

      {/* ── Scroll chevron ───────────────────────────────────────────── */}
      <a
        href="#impact"
        aria-label="Scroll to content"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white/50 transition-colors hover:text-emerald"
      >
        <ChevronDown className={reduce ? '' : 'animate-bounce'} />
      </a>
    </section>
  )
}
