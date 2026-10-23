import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Btn } from './ui'

export default function Hero() {
  const reduce = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    // Force play regardless of browser autoplay policies
    v.muted = true
    v.play().catch(() => {
      // Autoplay blocked — try again on first user interaction
      const resume = () => { v.play().catch(() => {}); document.removeEventListener('click', resume) }
      document.addEventListener('click', resume)
    })
  }, [])

  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.25 + i * 0.18, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy pb-24 pt-32 sm:items-center sm:pb-16">

      {/* Background video — inline styles to guarantee rendering */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/media/hero-poster.svg"
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/media/hero.webm" type="video/webm" />
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay so text stays readable */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(46,61,40,0.88) 0%, rgba(46,61,40,0.40) 50%, rgba(46,61,40,0.15) 100%)',
          zIndex: 1,
        }}
      />



      {/* Content */}
      <div className="wrap relative" style={{ zIndex: 3 }}>
        <motion.p {...item(0)} className="eyebrow mb-6">
          Geospatial Intelligence · Environmental Innovation
        </motion.p>
        <motion.h1
          {...item(1)}
          className="max-w-4xl text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          See the Earth <span className="text-emerald">Differently.</span>
          <br />Build a More <span className="text-emerald">Resilient</span> Future.
        </motion.h1>
        <motion.p
          {...item(2)}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75"
        >
          THAZHAL transforms geospatial data into meaningful intelligence, helping
          organizations understand environmental change, monitor critical infrastructure,
          and make informed decisions for a sustainable future.
        </motion.p>
        <motion.div {...item(3)} className="mt-10 flex flex-wrap gap-4">
          <Btn to="/#solutions">Explore Our Solutions</Btn>
          <Btn to="/about" variant="ghost">Discover THAZHAL</Btn>
        </motion.div>
      </div>

      <a
        href="#impact"
        aria-label="Scroll to content"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-emerald"
        style={{ zIndex: 3 }}
      >
        <ChevronDown className={reduce ? '' : 'animate-bounce'} />
      </a>
    </section>
  )
}
