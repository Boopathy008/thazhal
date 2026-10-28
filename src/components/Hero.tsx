/**
 * Hero — homepage hero section with the Terra-Dusk interactive 3-D Earth globe.
 *
 * Layout:
 *  • Full-viewport dark section (deep-olive navy background)
 *  • Globe fills the right half (desktop) / is centred behind text (mobile)
 *  • Text + CTA overlay on the left
 *  • Subtle star-field and atmospheric glow from the TerraDusk component
 */

import { Suspense } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Btn } from './ui'
import TerraDusk from './TerraDusk'

/* ── Animation helpers ─────────────────────────────────────────── */
function useItem(reduce: boolean | null) {
  return (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay: 0.2 + i * 0.18, ease: [0.22, 1, 0.36, 1] as const },
  })
}

/* ── Component ─────────────────────────────────────────────────── */
export default function Hero() {
  const reduce = useReducedMotion()
  const item   = useItem(reduce)

  return (
    <section
      className="relative flex min-h-[100svh] overflow-hidden"
      style={{ background: '#111a13' }}
    >
      {/* ── Globe canvas — fills right half on desktop, full on mobile ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-end"
      >
        {/* Responsive positioning wrapper */}
        <div
          className="h-full w-full lg:w-[62%]"
          style={{ opacity: 0.92 }}
        >
          <Suspense fallback={null}>
            <TerraDusk className="h-full w-full" />
          </Suspense>
        </div>
      </div>

      {/* ── Left-side gradient veil so text stays legible ───────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(10,18,12,0.97) 38%, rgba(10,18,12,0.65) 60%, transparent 100%)',
        }}
      />

      {/* ── Mobile bottom veil ──────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 lg:hidden"
        style={{
          background:
            'linear-gradient(to top, rgba(10,18,12,0.95) 40%, rgba(10,18,12,0.55) 70%, transparent 100%)',
        }}
      />

      {/* ── Content ─────────────────────────────────────────────────── */}
      <div className="wrap relative z-10 flex flex-col justify-center py-28 sm:py-32 lg:max-w-[55%]">
        <motion.p {...item(0)} className="eyebrow mb-5 text-xs sm:text-sm">
          Geospatial Intelligence · Environmental Innovation
        </motion.p>

        <motion.h1
          {...item(1)}
          className="max-w-2xl text-3xl font-bold leading-[1.07] text-white sm:text-5xl lg:text-6xl"
        >
          See the Earth{' '}
          <span className="text-emerald">Differently.</span>
          <br />
          Build a More{' '}
          <span className="text-emerald">Resilient</span> Future.
        </motion.h1>

        <motion.p
          {...item(2)}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          THAZHAL transforms geospatial data into meaningful intelligence, helping
          organisations understand environmental change, monitor critical infrastructure,
          and make informed decisions for a sustainable future.
        </motion.p>

        <motion.div {...item(3)} className="mt-9 flex flex-wrap gap-4">
          <Btn to="/#solutions">Explore Our Solutions</Btn>
          <Btn to="/about" variant="ghost">Discover THAZHAL</Btn>
        </motion.div>
      </div>

      {/* ── Scroll chevron ──────────────────────────────────────────── */}
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
