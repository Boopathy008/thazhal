import { Award, Trophy, Star, ShieldCheck, Sparkles } from 'lucide-react'
import { CTA, Reveal, SectionHeading, Card3D } from '../components/ui'
import { LogoMarquee } from './Home'
import { partners, supporters } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'

const recognitions = [
  {
    title: 'Top Geospatial Innovation 2025',
    organization: 'National Geospatial & Earth Observation Forum',
    year: '2025',
    category: 'Innovation in Remote Sensing',
    description: 'Recognized for pioneering automated surface water monitoring and predictive environmental change analytics with SWOAD.',
    badge: 'Winner',
  },
  {
    title: 'Excellence in Environmental Stewardship',
    organization: 'Climate Tech & Sustainable Future Summit',
    year: '2024',
    category: 'Climate Impact & Sustainability',
    description: 'Honored for building high-resolution climate hazard models supporting vulnerable watersheds and biodiversity reserves.',
    badge: 'Special Mention',
  },
  {
    title: 'Infrastructure Resilience Leadership Award',
    organization: 'Smart Infrastructure & Urban Geospatial Consortium',
    year: '2024',
    category: 'Critical Infrastructure Analytics',
    description: 'Awarded for developing autonomous radar and satellite observation workflows for highway, bridge, and energy network safety.',
    badge: 'Gold Award',
  },
  {
    title: 'National Agritech Spatial Innovation Grant',
    organization: 'Department of Science & Innovation',
    year: '2024',
    category: 'Agritech & Precision Mapping',
    description: 'Supported and felicitated for AI-powered automated farm boundary delineation empowering smallholder farmers and crop insurance auditors.',
    badge: 'Selected Cohort',
  },
  {
    title: 'Emerging DeepTech Startup of the Year',
    organization: 'Asia-Pacific Space & Geospatial Awards',
    year: '2023',
    category: 'DeepTech & AI Sensing',
    description: 'Selected among top emerging earth observation intelligence startups tackling large-scale climate adaptation challenges.',
    badge: 'Finalist',
  },
  {
    title: 'Forest & Biodiversity Preservation Accolade',
    organization: 'Ecological Intelligence Network',
    year: '2023',
    category: 'Ecosystem Protection',
    description: 'Commended for high-cadence satellite monitoring of canopy cover loss, biomass estimation, and wildfire risk mitigation.',
    badge: 'Excellence Citation',
  },
]

export default function Awards() {
  usePageMeta('Awards & Recognitions', 'Discover THAZHAL’s awards, achievements, and industry recognitions in geospatial innovation and environmental technology.')

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
              Company · Honors & Milestones
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

      {/* Main Awards Grid */}
      <section className="bg-white section relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-60" />
        <div className="wrap relative">
          <Reveal>
            <SectionHeading
              eyebrow="Milestones"
              title="Recognized for Pioneering Innovation"
              text="Our contributions to earth observation, critical infrastructure surveillance, and environmental resilience have been honored across key national and international platforms."
            />
          </Reveal>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {recognitions.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.08} className="h-full flex flex-col">
                <Card3D className="h-full flex flex-col">
                  <div className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:border-emerald/40 hover:shadow-xl">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald/10 text-emerald transition-transform group-hover:scale-110 group-hover:bg-emerald group-hover:text-navy">
                          <Award size={22} />
                        </div>
                        <span className="rounded-full bg-navy/5 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-navy">
                          {item.year}
                        </span>
                      </div>

                      <div className="inline-block rounded-md bg-emerald/15 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald mb-3">
                        {item.category}
                      </div>

                      <h3 className="text-lg font-bold leading-snug text-navy transition-colors group-hover:text-forest">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs font-semibold text-slate-500">
                        {item.organization}
                      </p>
                      <p className="mt-3.5 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4">
                      <Sparkles size={14} className="text-emerald" />
                      <span className="font-mono text-xs font-bold text-navy">{item.badge}</span>
                    </div>
                  </div>
                </Card3D>
              </Reveal>
            ))}
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
