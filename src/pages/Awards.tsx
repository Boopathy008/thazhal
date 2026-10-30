import { Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import { CTA, Reveal, SectionHeading } from '../components/ui'
import { LogoMarquee } from './Home'
import { partners, supporters } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'

// 8 award images — most recent first. Place files in /public/images/awards/
const awardImages = [
  { src: '/images/awards/award-1.jpg', year: 'October 2026', alt: 'Award 1 – PM & CM Meeting', title: 'Met the Hon\'ble Prime Minister & Chief Minister of Tamil Nadu', desc: 'Had the opportunity to meet the Hon\'ble Prime Minister of India and the Hon\'ble Chief Minister of Tamil Nadu during the Chennai Metro event.' },
  { src: '/images/awards/award-2.jpg', year: 'June 2026', alt: 'Award 2 – India-Bhutan Delegation', title: 'India-Led Deep-Tech Delegation to Bhutan', desc: 'Thazhal Geospatial Analytics participated in an India-led deep-tech delegation to Bhutan, organized by IN-SPACe. The delegation met with the Prime Minister of Bhutan.' },
  { src: '/images/awards/award-3.jpg', year: 'October 2025', alt: 'Award 7 – MoU with NIT Calicut', title: 'MoU with NIT Calicut for Research Collaboration', desc: 'Signed a Memorandum of Understanding with NIT Calicut to advance research collaboration in geospatial technologies and earth observation.' },
  { src: '/images/awards/award-4.jpg', year: 'July 2025', alt: 'Award 3 – National Geospatial Award', title: 'National Geospatial Award – Best Geospatial Startup', desc: 'Received the National Geospatial Award for Best Geospatial Startup from IIT Bombay, FOSSEE — recognizing innovation in open-source geospatial intelligence.' },
  { src: '/images/awards/award-5.jpg', year: 'November 2024', alt: 'Award 4 – Operation Dronagiri', title: 'Selected Startup in Operation Dronagiri by DST', desc: 'Selected as a startup in "Operation Dronagiri" by the Department of Science and Technology (DST), India — supporting advanced drone-based geospatial initiatives.' },
  { src: '/images/awards/award-6.jpg', year: 'March 2024', alt: 'Award 6 – HDFC Parivarthan Grant', title: 'HDFC Parivarthan Grant for Environmental Monitoring', desc: 'Awarded the HDFC Parivarthan grant in recognition of our impactful work in environmental monitoring using satellite-based geospatial intelligence.' },
  { src: '/images/awards/award-7.jpg', year: 'January 2024', alt: 'Award 5 – JETRO Indo-Japan Challenge', title: 'Selected in JETRO – Indo-Japan Innovation Challenges', desc: 'Selected as a participating startup in the JETRO Indo-Japan Innovation Challenges, bridging Indian geospatial innovation with Japanese technology ecosystems.' },
  { src: '/images/awards/award-8.jpg', year: 'January 2023', alt: 'Award 8 – Appreciation by District Collector', title: 'Appreciation Certificate by District Collector', desc: 'Awarded an Appreciation Certificate by District Collector Mr. Vishnu Venugopalan IAS for outstanding contributions to geospatial development in the district.' },
]

export default function Awards() {
  usePageMeta('Awards & Recognitions', 'Discover THAZHAL\u2019s awards, achievements, and industry recognitions in geospatial innovation and environmental technology.')

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[400px] items-center overflow-hidden bg-[#090A0F] pb-20 pt-36 sm:min-h-[460px]">
        <div className="absolute inset-0">
          <img
            src="/images/about-hero.jpg"
            alt="THAZHAL Awards background"
            onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none' }}
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#090A0F]/80 via-[#090A0F]/90 to-[#090A0F]" />
          <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-20" />
        </div>

        <div className="wrap relative">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-1.5 backdrop-blur-md">
            <Trophy size={14} className="text-emerald" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald">
              Company &middot; Honors &amp; Milestones
            </span>
          </div>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Awards &amp; <span className="text-emerald">Recognitions</span>
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-slate-300">
            Celebrating industry acknowledgements, research grants, and sustainability milestones that validate our mission to make geospatial intelligence actionable and transformative.
          </p>
        </div>
      </section>

      {/* Zigzag Timeline Section */}
      <section className="bg-white section relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-60" />
        <div className="wrap relative">
          <Reveal>
            <SectionHeading
              eyebrow="Timeline · Recent to Past"
              title="Our Awards & Recognitions"
              text="A journey of milestones — from our most recent honors to the achievements that started it all."
            />
          </Reveal>

          {/* Timeline */}
          <div className="relative mt-20">
            {/* Vertical center line — desktop only */}
            <div
              className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block"
              style={{ background: 'linear-gradient(to bottom, #38BDF8 0%, rgba(56,189,248,0.15) 100%)' }}
              aria-hidden
            />

            <div className="flex flex-col gap-20">
              {awardImages.map((award, idx) => {
                const isLeft = idx % 2 === 0
                return (
                  <Reveal key={idx} delay={idx * 0.07}>
                    <div className={`relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-0 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>

                      {/* Image side */}
                      <motion.div
                        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        className={`w-full lg:w-[calc(50%-52px)] ${isLeft ? 'lg:pr-10' : 'lg:pl-10'}`}
                      >
                        {/* Mobile year + title */}
                        <div className="mb-3 flex items-center gap-2 lg:hidden">
                          <Trophy size={14} className="text-emerald" />
                          <span className="font-mono text-xs font-bold text-emerald">{award.year}</span>
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 shadow-md transition-all duration-400 hover:border-emerald/40 hover:shadow-2xl hover:shadow-navy/10">
                          <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                            <img
                              src={award.src}
                              alt={award.alt}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                              onError={(e) => {
                                const el = e.currentTarget
                                el.style.display = 'none'
                                const parent = el.parentElement
                                if (parent && !parent.querySelector('.img-placeholder')) {
                                  const ph = document.createElement('div')
                                  ph.className = 'img-placeholder flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-50 py-12'
                                  ph.innerHTML = `
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 16l5-5 4 4 3-3 6 5"/><circle cx="8.5" cy="8.5" r="1.5"/></svg>
                                    <span style="font-family:monospace;font-size:12px;color:#94a3b8;text-align:center">Award Image ${idx + 1}</span>
                                  `
                                  parent.appendChild(ph)
                                }
                              }}
                            />
                          </div>
                          <div className="scan-line pointer-events-none" />
                        </div>

                        {/* Content below image — mobile only */}
                        <div className="mt-4 lg:hidden">
                          <h3 className="text-lg font-bold leading-snug text-navy">{award.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-slate-500">{award.desc}</p>
                        </div>
                      </motion.div>

                      {/* Centre dot + year — desktop */}
                      <div className="hidden lg:flex lg:w-[104px] lg:shrink-0 lg:flex-col lg:items-center lg:gap-2">
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.07 + 0.3 }}
                          className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-emerald shadow-[0_0_0_4px_rgba(56,189,248,0.2),0_0_24px_rgba(56,189,248,0.5)]"
                        >
                          <Trophy size={20} className="text-navy" aria-hidden />
                        </motion.div>
                        <span className="font-mono text-[11px] font-bold tracking-wider text-emerald text-center leading-tight">{award.year}</span>
                      </div>

                      {/* Text content — opposite side, desktop only */}
                      <motion.div
                        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                        className={`hidden lg:flex lg:w-[calc(50%-52px)] lg:flex-col ${isLeft ? 'lg:pl-10 lg:items-start lg:text-left' : 'lg:pr-10 lg:items-end lg:text-right'}`}
                      >
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald">{award.year}</span>
                        </div>
                        <h3 className="text-xl font-bold leading-snug text-navy sm:text-2xl">{award.title}</h3>
                        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-slate-500">{award.desc}</p>
                      </motion.div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Backing */}
      <section className="section-gradient section relative overflow-hidden text-white">
        <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-15" />
        <div className="wrap relative">
          <Reveal>
            <SectionHeading
              dark
              eyebrow="Endorsements"
              title="Supported &amp; Championed By Institutions"
              text="Our scientific methodologies and geospatial technologies are endorsed by premier research laboratories and government innovation bodies."
            />
          </Reveal>
          <div className="mt-12">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 items-stretch">
              {supporters.map((p, i) => (
                <div key={i} className="anim-border-box h-32 w-full">
                  <div className="anim-border-inner flex h-full items-center justify-center px-6 shadow-sm">
                    {p.logo
                      ? <img src={p.logo} alt={p.name} loading="lazy" className="max-h-20 max-w-full object-contain filter contrast-105" />
                      : <span className="font-mono text-xs text-slate-400">Logo</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="bg-white section border-t border-slate-100">
        <div className="wrap">
          <SectionHeading eyebrow="Our ecosystem" title="Collaborators &amp; Partners" />
        </div>
        <div className="mt-10">
          <LogoMarquee list={partners} />
        </div>
      </section>

      <CTA />
    </>
  )
}
