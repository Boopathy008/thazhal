/**
 * Home.tsx — THAZHAL homepage
 * Monochrome Black & White + Cyber Sky Blue accent with animated borders and 3D interactions.
 */

import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Hero from '../components/Hero'
import { Btn, CTA, Reveal, SectionHeading, Card3D } from '../components/ui'
import { BlogCard, ProductCard } from '../components/Cards'
import { articles, partners, products, solutions, supporters } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'

export function LogoMarquee({ list, slow = false }: { list: { name: string; logo: string }[]; slow?: boolean }) {
  const items = [...list, ...list]
  return (
    <div className="overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)' }}>
      <div className={slow ? 'marquee-track-slow' : 'marquee-track'}>
        {items.map((p, i) => (
          <div
            key={i}
            className="anim-border-box mx-4 shrink-0"
            style={{ height: '160px', width: '280px' }}
          >
            <div className="anim-border-inner flex items-center justify-center px-8 shadow-sm">
              {p.logo
                ? <img src={p.logo} alt={p.name} loading="lazy" className="max-h-full max-w-full object-contain filter contrast-105" style={{ maxHeight: '105px' }} />
                : <span className="font-mono text-xs text-slate-400">Logo</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SupporterGrid({ list }: { list: { name: string; logo: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 items-stretch">
      {list.map((p, i) => (
        <div key={i} className="anim-border-box h-32 w-full">
          <div className="anim-border-inner flex h-full items-center justify-center px-6 shadow-sm">
            {p.logo
              ? <img src={p.logo} alt={p.name} loading="lazy" className="max-h-20 max-w-full object-contain filter contrast-105" />
              : <span className="font-mono text-xs text-slate-400">Logo</span>}
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Testimonials data ──
const testimonials = [
  {
    name: 'Name 1',
    role: 'Role, Organization',
    quote:
      'Testimonial text placeholder. Working with THAZHAL has transformed how we monitor our environmental assets.',
  },
  {
    name: 'Name 2',
    role: 'Role, Organization',
    quote:
      'Testimonial text placeholder. The geospatial intelligence platform provided insights we could never have achieved otherwise.',
  },
  {
    name: 'Name 3',
    role: 'Role, Organization',
    quote:
      "Testimonial text placeholder. THAZHAL's satellite-based analytics helped us make faster, data-driven decisions on the ground.",
  },
  {
    name: 'Name 4',
    role: 'Role, Organization',
    quote:
      'Testimonial text placeholder. Exceptional team and cutting-edge technology — a true partner for our sustainability goals.',
  },
]

export default function Home() {
  usePageMeta('THAZHAL')
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 380
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  // First solutions, then products as requested
  const items = [...solutions, ...products]

  return (
    <>
      <Hero />

      {/* ── All Partners & Supporters Marquee in One Row ── */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="wrap mb-8">
          <Reveal>
            <SectionHeading
              eyebrow="Partners & Backing"
              title="Working with Leading Organisations & Supported By"
              text="Building meaningful connections with premier institutions championing our geospatial and environmental innovations."
            />
          </Reveal>
        </div>
        <div>
          <LogoMarquee list={[...partners, ...supporters]} />
        </div>
      </section>

      {/* ── About us ── */}
      <section className="relative overflow-hidden bg-white section">
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-60" />
        <div className="wrap relative grid items-center gap-14 lg:grid-cols-12">
          {/* Text — 7 cols */}
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading eyebrow="About us" title="Welcome to THAZHAL" />
              <p className="mt-4 text-[16px] font-semibold text-emerald">
                Innovation meets geospatial intelligence.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                THAZHAL focuses on developing forward-thinking solutions that combine geospatial technologies,
                imagery analytics, and intelligent monitoring to help organizations better understand the world around them,
                supporting informed decision-making and resilient infrastructure.
              </p>
              <h3 className="mt-6 text-[17px] font-bold text-navy">
                Core Capabilities & Focus
              </h3>
              <ul className="mt-4 space-y-3.5">
                {[
                  'Environmental Monitoring with Satellite Precision',
                  'Imagery Analytics for Informed Decision-Making',
                  'Cutting-Edge Technology for Comprehensive Surveys',
                ].map((x) => (
                  <li key={x} className="flex items-center gap-3 text-[14px] text-navy font-medium group">
                    <span className="h-[2px] w-5 shrink-0 rounded-full bg-emerald transition-all duration-300 group-hover:w-8" />
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <Btn to="/contact">Contact Us</Btn>
              </div>
            </Reveal>
          </div>

          {/* Image — 5 cols, compact with 3D Card */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal delay={0.1} className="w-full max-w-[340px]">
              <Card3D className="aspect-[4/4.5] overflow-hidden rounded-2xl shadow-2xl border border-slate-200">
                <div className="relative h-full w-full group overflow-hidden">
                  <img
                    src="/images/about.jpg"
                    alt="About THAZHAL"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="scan-line pointer-events-none" />
                  <div className="absolute bottom-3 left-3 hud-tag text-[9px]">
                    <span className="h-1 w-1 rounded-full bg-emerald animate-ping-slow" />
                    GEOSPATIAL CORE
                  </div>
                </div>
              </Card3D>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Testimonials auto-marquee (right after About Us) ── */}
      <section className="section-gradient section relative overflow-hidden text-white">
        <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-15" />
        <div className="wrap relative mb-10">
          <Reveal>
            <SectionHeading
              dark
              eyebrow="Testimonials"
              title="What our partners say"
              text="Hear from the organisations and leaders who've experienced THAZHAL's geospatial intelligence first-hand."
            />
          </Reveal>
        </div>

        {/* Auto-scrolling marquee — right to left, loops infinitely */}
        <div
          className="overflow-hidden"
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)' }}
        >
          <div className="marquee-track">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="mx-4 shrink-0 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7"
                style={{ width: '320px' }}
              >
                {/* Quote mark */}
                <span className="text-4xl leading-none text-emerald font-serif select-none">"</span>
                {/* Quote text */}
                <p className="flex-1 text-[15px] leading-relaxed text-white/80">{t.quote}</p>
                {/* Divider */}
                <div className="h-px w-full bg-white/10" />
                {/* Author */}
                <div>
                  <p className="text-[15px] font-semibold text-white">{t.name}</p>
                  <p className="mt-0.5 text-[13px] text-white/50">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Solutions & Products Horizontal Scroll ── */}
      <section id="products" className="section-gradient section relative overflow-hidden text-white">
        <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-15" />
        <div className="wrap relative">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <Reveal>
              <SectionHeading
                dark
                eyebrow="Our Solutions"
                title="See the change. Understand the risk. Act with confidence."
                text="Space-based intelligence designed to help monitor assets, protect ecosystems and plan for a changing climate."
              />
            </Reveal>

            {/* Navigation buttons for scroll left / right */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => scroll('left')}
                aria-label="Scroll left"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:border-emerald hover:bg-emerald hover:text-navy hover:scale-105 active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                aria-label="Scroll right"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:border-emerald hover:bg-emerald hover:text-navy hover:scale-105 active:scale-95"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Horizontal scroll container */}
          <div
            ref={scrollRef}
            className="mt-12 flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth [scrollbar-width:thin] [scrollbar-color:#38BDF8_rgba(255,255,255,0.05)] snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {items.map((p) => (
              <div
                key={`${p.kind}-${p.slug}`}
                className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 snap-start h-auto flex flex-col"
              >
                <ProductCard p={p} disableHover={true} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ── */}
      <section className="section-gradient section relative overflow-hidden text-white">
        <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-15" />
        <div className="wrap relative">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
              <SectionHeading
                dark
                eyebrow="Insights & perspectives"
                title="Latest from THAZHAL"
                text="Explore how geospatial intelligence transforms environmental management, infrastructure, and resilience."
              />
              <Link
                to="/blog"
                className="shrink-0 text-sm font-semibold text-emerald transition-all duration-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1"
              >
                View all 8 articles →
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {articles.slice(0, 4).map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.08} className="h-full">
                <BlogCard a={a} dark />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
