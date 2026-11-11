import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Check, Trees, Leaf, LineChart, ShieldAlert, Building2, Monitor, LayoutGrid, AlertCircle, Sprout, Headphones, Waves, CloudRain, Sun, Mountain, TrendingUp, Thermometer, Wind, RefreshCw, Zap, Landmark, Shield, Flame, Map, BarChart2, FileText, Briefcase, GraduationCap, Activity, Factory, Database, Scan, Share2, Users, DollarSign, UserPlus, Camera, Eye, Layers } from 'lucide-react'
import { Btn, Card3D, CTA, Reveal, SectionHeading, Visual } from '../components/ui'
import { Detail as D, details, pathOf } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'
import NotFound from './NotFound'

export default function DetailPage({ kind }: { kind: D['kind'] }) {
  const { slug } = useParams()
  const d = details.find((x) => x.kind === kind && x.slug === slug)
  usePageMeta(d?.name ?? 'Not found', d?.summary)
  if (!d) return <NotFound />
  const label = kind === 'product' ? 'Product' : 'Solution'
  const isForest = slug === 'forest-intelligence'
  const isSwoad = slug === 'swoad'
  const isClimateAudit = slug === 'climate-audit'
  const isFireAudit = slug === 'fire-audit'
  const isEnvMonitoring = slug === 'environmental-monitoring'
  const isInfraMonitoring = slug === 'infrastructure-monitoring'
  const isMining = slug === 'mining'
  const isDisaster = slug === 'disaster-management'

  return (
    <>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-navy pb-16 pt-32">
        <div className="absolute inset-0"><Visual variant={d.variant} image={d.image} label={`${d.name} visual`} /></div>
        <div className="absolute inset-0 bg-navy/60" />
        <div className="wrap relative">
          <p className="eyebrow mb-3">{label}</p>
          <h1 className="text-4xl font-bold text-white sm:text-6xl">{d.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">{d.tagline}</p>
          <div className="mt-7"><Btn to="/contact">Talk to Our Team</Btn></div>
        </div>
      </section>

      {isForest ? (
        /* ── Custom Forest Intelligence Section ── */
        <section className="bg-white section">
          <div className="wrap space-y-16">
            <Reveal>
              <div className="grid gap-12 lg:grid-cols-12 items-center">
                {/* Left — hero section image */}
                <div className="lg:col-span-5">
                  <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200 aspect-[4/3] lg:aspect-[4/4.5]">
                    <img
                      src="/images/forest-intelligence.webp"
                      alt="Forest Intelligence"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Right — content */}
                <div className="lg:col-span-7">
                  <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
                    Monitor Forest Health, Track Deforestation, and Support Carbon Assessment with Thazhal’s Geospatial Intelligence
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
                    Leverage satellite imagery, remote sensing, GIS, and AI-powered analytics to monitor forest ecosystems,
                    assess vegetation changes, and support afforestation and carbon assessment initiatives.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      'Canopy Density & Tree Cover Change Detection',
                      'Plantation Monitoring & Carbon Stock Estimation',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-base font-semibold text-navy">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald/20 text-emerald">
                          <ArrowRight size={14} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* 3 Interactive 3D Cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch pt-4">
              {[
                {
                  id: 'card-1',
                  num: '01',
                  icon: Trees,
                  title: 'Forest Health Monitoring',
                  desc: 'Monitor canopy density, tree cover, vegetation health, and changes across forest blocks using Earth Observation (EO) data and geospatial analytics. Integrate available environmental datasets to assess forest conditions and generate GIS-based maps, monitoring reports, and decision-support insights for conservation planning and impact assessment.',
                },
                {
                  id: 'card-2',
                  num: '02',
                  icon: LineChart,
                  title: 'Carbon Stock Estimation & Plantation Planning',
                  desc: 'Assess plantation areas, map vegetation, and evaluate afforestation sites using satellite imagery, GIS, and remote sensing techniques. Support tree counting, species classification where data permits, vegetation structure analysis, and carbon stock estimation to help inform restoration planning and carbon assessment initiatives.',
                },
                {
                  id: 'card-3',
                  num: '03',
                  icon: ShieldAlert,
                  title: 'Deforestation & Biodiversity Monitoring',
                  desc: 'Use satellite-based change detection, Land Use and Land Cover (LULC) classification, and spatial analysis to identify forest cover loss, encroachment, invasive species, and ecosystem changes. Support forest departments and environmental organisations with geospatial insights for conservation planning, ecosystem monitoring, and restoration activities.',
                },
              ].map((card, i) => {
                const Icon = card.icon
                return (
                  <Reveal key={card.id} delay={i * 0.1} className="h-full">
                    <Card3D className="h-full">
                      <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-350 hover:border-emerald/40 hover:shadow-xl hover:shadow-navy/5">
                        <div>
                          <div className="flex items-center justify-between">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/15 text-emerald transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                              <Icon size={24} aria-hidden />
                            </div>
                            <span className="font-mono text-2xl font-bold text-slate-300 group-hover:text-emerald transition-colors">
                              {card.num}
                            </span>
                          </div>
                          <h3 className="mt-6 text-xl font-bold leading-snug text-navy group-hover:text-forest transition-colors">
                            {card.title}
                          </h3>
                          <p className="mt-3 text-[14px] leading-relaxed text-slate-500">
                            {card.desc}
                          </p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-xs font-mono font-semibold uppercase tracking-wider text-emerald">
                          <span>Intelligence Layer</span>
                        </div>
                      </div>
                    </Card3D>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>
      ) : isSwoad ? (
        /* ── Custom SWOAD / Water Body Monitoring Sections ── */
        <>
          {/* Section 1 — Why to use this product (image left, content right) */}
          <section className="bg-white section">
            <div className="wrap">
              <div className="grid gap-12 lg:grid-cols-12 items-center">
                {/* Left — image */}
                <div className="lg:col-span-5">
                  <Reveal>
                    <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200 aspect-[4/3]">
                      <img
                        src="/images/swoad.webp"
                        alt="Water Body Monitoring"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                </div>
                {/* Right — content */}
                <div className="lg:col-span-7">
                  <Reveal delay={0.1}>
                    <p className="eyebrow mb-3 text-sky-500 font-bold uppercase tracking-wider text-xs">OUR PRODUCTS</p>
                    <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
                      Why to use this product ?
                    </h2>
                    <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
                      Monitor the surface water body at your fingertips and make proactive decisions with advanced analytics.
                      Tackle water scarcity by leveraging historical data from satellites, enabling informed and effective
                      management strategies.
                    </p>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                      {[
                        'Comprehensive analysis',
                        'Environmental sustainability',
                        'Data-driven approach & Technology leverage',
                        'Advanced analytics & Water scarcity',
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-sky-500 text-sky-500">
                            <Check size={14} strokeWidth={3} />
                          </span>
                          <span className="text-[14px] font-bold text-navy leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 — Why you should have this */}
          <section className="section bg-slate-50 overflow-hidden">
            <div className="wrap">
              <div className="grid gap-12 lg:grid-cols-12 items-center">
                {/* Left — features grid */}
                <div className="lg:col-span-7">
                  <Reveal>
                    <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl mb-10">
                      Why you should have this
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                      {[
                        {
                          icon: Building2,
                          title: 'City administration',
                          desc: 'Unified application specific portals for smart workflow improving transparency.',
                        },
                        {
                          icon: Monitor,
                          title: 'Real-time monitoring',
                          desc: 'Drone based assessment of all government assets.',
                        },
                        {
                          icon: LayoutGrid,
                          title: 'Infrastructure',
                          desc: 'Leverages solutions for city developments maintaining effectiveness.',
                        },
                        {
                          icon: AlertCircle,
                          title: 'Emergency management',
                          desc: 'Customized warning alerts on extreme events.',
                        },
                        {
                          icon: Sprout,
                          title: 'Sustainable developments',
                          desc: 'Active monitoring and actionable developments of natural/economic resources.',
                        },
                        {
                          icon: Headphones,
                          title: 'Decision support',
                          desc: 'Provides solutions on task management for that last miles visibility.',
                        },
                      ].map((item) => {
                        const Icon = item.icon
                        return (
                          <div key={item.title} className="flex gap-4 items-start">
                            <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                              <Icon size={22} aria-hidden />
                            </div>
                            <div>
                              <h3 className="text-[16px] font-bold text-navy">{item.title}</h3>
                              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{item.desc}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </Reveal>
                </div>

                {/* Right — dam image */}
                <div className="lg:col-span-5">
                  <Reveal delay={0.1} className="relative">
                    <div className="overflow-hidden rounded-2xl shadow-xl aspect-[4/3] lg:aspect-[4/5] border border-slate-200">
                      <img
                        src="/images/swoad-why.webp"
                        alt="Water body monitoring — dam infrastructure"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : isClimateAudit ? (
        /* ── Custom Climate Audit Sections ── */
        <>
          {/* Section 1 — Why to use this product (image left, content right) */}
          <section className="bg-white section">
            <div className="wrap">
              <div className="grid gap-12 lg:grid-cols-12 items-center">
                {/* Left — image */}
                <div className="lg:col-span-5">
                  <Reveal>
                    <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200 aspect-[4/3]">
                      <img
                        src="/images/climate-audit.webp"
                        alt="Climate Audit"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                </div>
                {/* Right — content */}
                <div className="lg:col-span-7">
                  <Reveal delay={0.1}>
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-sky-500">OUR PRODUCTS</p>
                    <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
                      Why to use this product ?
                    </h2>
                    <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
                      Equips organizations with the tools to forecast, prepare for and reduce climate-related disruptions.
                      Understanding climate risks allows companies to protect long term value, ensuring business continuity
                      and investor confidence. Identifying location-specific hazards helps to prioritize adaptation actions
                      at any level.
                    </p>
                    <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                      {[
                        'Comprehensive vulnerability Assessment and Risk Scoring',
                        'Environmental sustainability',
                        'Data-driven approach & Technology leverage',
                        'Advanced analytics & Water scarcity',
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-sky-500 text-sky-500">
                            <Check size={14} strokeWidth={3} />
                          </span>
                          <span className="text-[14px] font-bold leading-snug text-navy">{item}</span>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 — List of Hazards */}
          <section className="section bg-slate-50">
            <div className="wrap">
              <Reveal>
                <h2 className="mb-12 text-center text-3xl font-bold text-navy sm:text-4xl">List of Hazards</h2>
              </Reveal>
              <div className="grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2">
                {[
                  {
                    icon: Waves,
                    title: 'Flood',
                    desc: 'Evaluate the frequency and intensity of flooding events including river overflows, storm surges and sudden flash floods that pose serious threats to assets and livelihoods.',
                  },
                  {
                    icon: CloudRain,
                    title: 'Extreme Rainfall',
                    desc: 'Evaluate patterns of intense and prolonged rainfall that increase the risk of urban flooding, waterlogging, infrastructure damage and disruption to essential services.',
                  },
                  {
                    icon: Sun,
                    title: 'Drought',
                    desc: 'Identify areas vulnerable to prolonged water scarcity, affecting agriculture, groundwater levels and industrial operations.',
                  },
                  {
                    icon: Mountain,
                    title: 'Landslide',
                    desc: 'Identify landslide-prone zones triggered by heavy rainfall, soil erosion or seismic activity which can endanger lives, block transport routes, and damage property.',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Sea Level Rise',
                    desc: 'Assess long-term sea level rise and tidal intrusion risks that threaten coastal infrastructure, freshwater supplies and low-lying communities.',
                  },
                  {
                    icon: Thermometer,
                    title: 'Temperature',
                    desc: 'Identify geographic areas and sectors at risk from rising temperatures and heat stress, enabling targeted mitigation for health, productivity and infrastructure stability.',
                  },
                  {
                    icon: Wind,
                    title: 'Wind',
                    desc: 'Analyze high-wind events, including cyclonic gusts and storm winds, that can damage buildings, power lines, transportation systems and outdoor operations.',
                  },
                  {
                    icon: RefreshCw,
                    title: 'Cyclone',
                    desc: 'Analyze cyclone-prone zones and wind damage potential to safeguard critical assets and minimize downtime.',
                  },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <Reveal key={item.title} delay={i * 0.05}>
                      <div className="flex gap-4 items-start">
                        <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                          <Icon size={24} aria-hidden />
                        </div>
                        <div>
                          <h3 className="text-[17px] font-bold text-navy">{item.title}</h3>
                          <p className="mt-1.5 text-[14px] leading-relaxed text-slate-500">{item.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Section 3 — Who Can We Assist? */}
          <section className="section bg-white overflow-hidden">
            <div className="wrap">
              <div className="grid gap-12 lg:grid-cols-12 items-center">
                {/* Left — audience grid */}
                <div className="lg:col-span-7">
                  <Reveal>
                    <h2 className="mb-10 text-3xl font-bold leading-tight text-navy sm:text-4xl">
                      Who Can We Assist?
                    </h2>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                      {[
                        {
                          icon: Building2,
                          title: 'Real Estate Developers and Investors',
                          desc: 'Protect long-term asset value, optimize site selection and ensure climate-resilient investments with forward-looking risk insights tailored for real estate development and acquisitions.',
                        },
                        {
                          icon: Zap,
                          title: 'Energy Companies',
                          desc: 'Strengthen infrastructure, reduce downtime, and optimize future investments against rising temperatures, extreme weather, and supply chain disruptions.',
                        },
                        {
                          icon: Landmark,
                          title: 'Banks and Financial Institutions',
                          desc: 'Future-proof lending and investment strategies by integrating climate risk into asset valuations, credit risk models, and regulatory compliance frameworks.',
                        },
                        {
                          icon: Shield,
                          title: 'Insurance Providers',
                          desc: 'Strengthen risk assessments, optimize policy offerings, and reduce claims volatility by integrating climate hazard insights into insurance workflows.',
                        },
                      ].map((item) => {
                        const Icon = item.icon
                        return (
                          <div key={item.title} className="flex gap-4 items-start">
                            <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                              <Icon size={22} aria-hidden />
                            </div>
                            <div>
                              <h3 className="text-[16px] font-bold text-navy">{item.title}</h3>
                              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{item.desc}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </Reveal>
                </div>

                {/* Right — cyclone satellite image */}
                <div className="lg:col-span-5">
                  <Reveal delay={0.1}>
                    <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200 aspect-[4/4.5]">
                      <img
                        src="/images/climate-assist.webp"
                        alt="Climate risk — satellite view of cyclone"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : isFireAudit ? (
        /* ── Custom Fire Audit Sections ── */
        <>
          {/* Section 1 — Intro with floor plan image */}
          <section className="bg-white section">
            <div className="wrap">
              <div className="grid gap-12 lg:grid-cols-12 items-center">
                <div className="lg:col-span-6">
                  <Reveal>
                    <h2 className="text-3xl font-bold text-navy sm:text-4xl uppercase tracking-wide">Fire Audit</h2>
                    <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                      Traditional fire safety inspections often rely on manual observation, documentation, and reporting. This can make large-scale assessments time-consuming and difficult to standardize.
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                      Our solution uses AI-powered video analysis to automatically identify relevant fire-safety elements from inspection footage and convert them into structured audit information.
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                      From video capture to final report, the system provides a streamlined digital workflow for fire safety assessment.
                    </p>
                  </Reveal>
                </div>
                <div className="lg:col-span-6">
                  <Reveal delay={0.1}>
                    <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200">
                      <img
                        src="/images/fire-audit.webp"
                        alt="Fire Audit — building floor plan"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 — OUR PRODUCTS (image left, text right) */}
          <section className="section bg-slate-50 overflow-hidden">
            <div className="wrap">
              <div className="grid gap-12 lg:grid-cols-12 items-stretch">
                {/* Left — thermal image */}
                <div className="lg:col-span-5 flex flex-col">
                  <Reveal className="flex flex-1 flex-col">
                    <div className="flex-1 overflow-hidden rounded-2xl shadow-xl border border-slate-200 mb-10">
                      <img
                        src="/images/fire-product.webp"
                        alt="Fire Audit — thermal heatmap"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                </div>
                {/* Right — content */}
                <div className="lg:col-span-7">
                  <Reveal delay={0.1}>
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-sky-500">OUR PRODUCTS</p>
                    <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
                      Why to use this product ?
                    </h2>
                    <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
                      Traditional fire safety audits can involve extensive manual inspection, documentation, and report preparation. Our AI-powered Fire Safety Audit System helps simplify this process by converting inspection videos into structured and actionable safety information.
                    </p>
                    <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      {[
                        { title: 'Faster Audits', desc: 'Reduce the time required for manual observation and documentation by automating the analysis of inspection footage.' },
                        { title: 'Better Visibility', desc: 'Identify fire hazards and safety equipment across different rooms and building spaces through a centralized digital system.' },
                        { title: 'Visual Evidence', desc: 'Automatically capture relevant images from inspection videos to support audit findings and observations.' },
                        { title: 'Standardized Assessment', desc: 'Follow a consistent digital workflow for collecting, analyzing, and reporting fire safety information.' },
                        { title: 'Easy Reporting', desc: 'Generate structured building-level reports and summaries for faster review and decision-making.' },
                        { title: 'Digital Monitoring', desc: 'Maintain organized inspection information and review findings through an interactive dashboard.' },
                      ].map((item) => (
                        <div key={item.title}>
                          <h3 className="text-[15px] font-bold text-navy">{item.title}</h3>
                          <p className="mt-1 text-[13px] leading-relaxed text-slate-500">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 — Why Should You Have This? */}
          <section className="section bg-white">
            <div className="wrap text-center">
              <Reveal>
                <h2 className="mb-6 text-3xl font-bold text-navy sm:text-4xl">Why Should You Have This?</h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mx-auto max-w-3xl text-[15px] leading-relaxed text-slate-600">
                  Fire safety is not just about conducting an inspection — it is about knowing what was identified,
                  where it was identified, and having clear evidence to support the findings.
                </p>
                <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-relaxed text-slate-600">
                  Our solution helps organizations move from conventional inspection records to a digital and
                  evidence-based fire safety assessment workflow.
                </p>
                <p className="mt-8 text-[15px] font-semibold text-navy">With this system, you can:</p>
              </Reveal>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 items-stretch">
                {[
                  'Digitize fire safety inspections',
                  'Reduce repetitive manual documentation',
                  'Maintain visual evidence of observations',
                  'Review building and room-level findings',
                  'Identify potential fire-safety concerns',
                  'Monitor safety equipment and identified hazards',
                  'Generate structured audit reports',
                  'Support better safety-related decision-making',
                ].map((item, i) => (
                  <Reveal key={item} delay={i * 0.07} className="h-full">
                    <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-sky-200">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-sky-500 bg-sky-50 text-sky-500">
                        <Check size={15} strokeWidth={3} />
                      </span>
                      <p className="text-[13px] font-medium leading-snug text-navy">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4 — Who Can We Assist? */}
          <section className="section bg-slate-50 overflow-hidden">
            <div className="wrap">
              <div className="grid gap-12 lg:grid-cols-12 items-center">
                {/* Left — audience grid */}
                <div className="lg:col-span-7">
                  <Reveal>
                    <h2 className="mb-6 text-3xl font-bold leading-tight text-navy sm:text-4xl">
                      Who Can We Assist?
                    </h2>
                    <p className="mb-8 text-[15px] leading-relaxed text-slate-600">
                      Our Fire Safety Audit System can support organizations that manage large buildings, multiple facilities, or frequent safety inspections.
                    </p>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      {[
                        { title: 'Government Departments & Public Offices', desc: 'Support systematic fire safety assessments across government buildings and public facilities.' },
                        { title: 'Hospitals & Healthcare Facilities', desc: 'Assist in documenting fire safety conditions across rooms, departments, and healthcare facilities.' },
                        { title: 'Commercial Buildings', desc: 'Support fire safety assessments for offices, business centers, shopping and commercial facilities.' },
                        { title: 'Educational Institutions', desc: 'Help schools, colleges, universities, and other educational facilities organize fire safety inspections.' },
                        { title: 'Industrial Facilities', desc: 'Support safety assessment workflows across industrial and operational buildings.' },
                        { title: 'Hotels & Hospitality', desc: 'Assist in assessing fire safety conditions across rooms, common areas, and other indoor spaces.' },
                        { title: 'Residential & Apartment Buildings', desc: 'Support systematic inspection and documentation of fire safety conditions across residential facilities.' },
                        { title: 'Facility Management & Safety Teams', desc: 'Provide a digital platform for organizations responsible for regular building inspections, safety monitoring, and reporting.' },
                      ].map((item) => (
                        <div key={item.title} className="flex gap-4 items-start">
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-sky-500 text-sky-500">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <div>
                            <h3 className="text-[15px] font-bold text-navy">{item.title}</h3>
                            <p className="mt-1 text-[13px] leading-relaxed text-slate-500">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="mt-8 text-[15px] leading-relaxed text-slate-600">
                      Turn building inspection videos into structured fire safety information and make your safety
                      assessment process more efficient, consistent, and transparent.
                    </p>
                  </Reveal>
                </div>
                {/* Right — fire safety image */}
                <div className="lg:col-span-5">
                  <Reveal delay={0.1}>
                    <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200 aspect-square">
                      <img
                        src="/images/fire-assist.webp"
                        alt="Fire Safety Audit"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : isEnvMonitoring ? (
        /* ── Custom Environmental Monitoring Sections ── */
        <>
          {/* Section 1 — Headline + 2 cards */}
          <section className="bg-white section">
            <div className="wrap">
              <Reveal>
                <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl max-w-4xl">
                  Save the Environment by monitoring and data driven decision making
                </h2>
              </Reveal>
              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {[
                  {
                    title: 'Environmental Intelligence System',
                    desc: 'AI based intelligence system to monitor the environment.',
                  },
                  {
                    title: 'Advance Risk Assessment',
                    desc: 'Assessing risk for proactive decision making.',
                  },
                ].map((card, i) => (
                  <Reveal key={card.title} delay={i * 0.15}>
                    <div className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm min-h-[180px] transition-all duration-300 hover:-translate-y-2 hover:border-emerald/40 hover:shadow-xl hover:shadow-navy/5">
                      <h3 className="text-xl font-bold text-navy transition-colors duration-300 group-hover:text-emerald">{card.title}</h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-slate-400">{card.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2 — Why you should have this */}
          <section className="section bg-slate-50 overflow-hidden">
            <div className="wrap">
              <div className="grid gap-12 lg:grid-cols-12 items-start">
                {/* Left — features */}
                <div className="lg:col-span-6">
                  <Reveal>
                    <h2 className="mb-10 text-3xl font-bold leading-tight text-navy sm:text-4xl">
                      Why you should have this
                    </h2>
                    <div className="space-y-8">
                      {[
                        {
                          icon: Database,
                          title: 'Enhanced Data Collection',
                          desc: 'Remote sensing allows for gathering data over vast areas, overcoming limitations of traditional ground-based methods, and enabling efficient monitoring of remote locations.',
                        },
                        {
                          icon: Scan,
                          title: 'Improved Detection and Tracking',
                          desc: 'Geospatial technology facilitates early detection of environmental changes like deforestation, pollution events, or wildfires. This allows for timely intervention and mitigation strategies.',
                        },
                        {
                          icon: Share2,
                          title: 'Spatial Analysis and Modeling',
                          desc: 'GIS analysis helps identify spatial patterns and trends in environmental data, enabling scientists to understand complex environmental processes and predict future scenarios.',
                        },
                        {
                          icon: Users,
                          title: 'Effective Communication and Collaboration',
                          desc: 'Geospatial tools like maps and visualizations provide a powerful communication platform for scientists, policymakers, and the public, fostering collaboration and environmental awareness.',
                        },
                        {
                          icon: BarChart2,
                          title: 'Data-Driven Decision Making',
                          desc: 'Environmental data collected and analyzed through geospatial technology provides valuable insights for informed decision-making regarding conservation efforts, pollution control strategies, and sustainable resource management.',
                        },
                      ].map((item) => {
                        const Icon = item.icon
                        return (
                          <div key={item.title} className="flex gap-4 items-start">
                            <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald/10 text-emerald">
                              <Icon size={22} aria-hidden />
                            </div>
                            <div>
                              <h3 className="text-[16px] font-bold text-navy">{item.title}</h3>
                              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{item.desc}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </Reveal>
                </div>

                {/* Right — satellite NDVI image */}
                <div className="lg:col-span-6">
                  <Reveal delay={0.15} className="sticky top-28">
                    <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200 aspect-[3/4]">
                      <img
                        src="/images/environmental-monitoring.webp"
                        alt="Environmental monitoring — satellite vegetation analysis"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : isInfraMonitoring ? (
        /* ── Custom Infrastructure Monitoring Sections ── */
        <>
          {/* Section 1 — Our Solution: 3 cards */}
          <section className="bg-white section">
            <div className="wrap">
              <Reveal>
                <h2 className="mb-12 text-center text-3xl font-bold text-navy sm:text-4xl">Our Solution</h2>
              </Reveal>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  {
                    title: 'Monitor assets for better future',
                    desc: 'Regular monitoring using satellite imagery reduces the need for frequent physical inspections, saving time and resources.',
                  },
                  {
                    title: 'Geospatial Business Intelligence',
                    desc: 'Leveraging geospatial data for protecting assets.',
                  },
                  {
                    title: 'Early Warning System',
                    desc: 'Ensuring proactive decision making for assets management.',
                  },
                ].map((card, i) => (
                  <Reveal key={card.title} delay={i * 0.1}>
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm min-h-[200px] hover:border-emerald/40 hover:shadow-md transition-all duration-300">
                      <h3 className="text-xl font-bold text-navy leading-snug">{card.title}</h3>
                      <p className="mt-3 text-[13px] leading-relaxed text-slate-400">{card.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2 — Why you should use our solution */}
          <section className="section bg-slate-50 overflow-hidden">
            <div className="wrap">
              <div className="grid gap-12 lg:grid-cols-12 items-start">
                {/* Left — features */}
                <div className="lg:col-span-7">
                  <Reveal>
                    <h2 className="mb-10 text-3xl font-bold leading-tight text-navy sm:text-4xl">
                      Why you should use our solution
                    </h2>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                      {[
                        {
                          icon: TrendingUp,
                          title: 'Improved Efficiency',
                          desc: 'Regular monitoring using satellite imagery and aerial photography reduces the need for frequent physical inspections, saving time and resources.',
                        },
                        {
                          icon: UserPlus,
                          title: 'Enhanced Safety',
                          desc: 'Satellite based inspections minimize the risk of sending personnel into hazardous environments like high bridges or confined spaces.',
                        },
                        {
                          icon: Flame,
                          title: 'Fire Detection and Analysis',
                          desc: 'Fire detection and analysis are crucial aspects of fire prevention and management. By utilizing advanced technologies and methodologies, fire detection systems can efficiently identify and respond to fire incidents.',
                        },
                        {
                          icon: Database,
                          title: 'Data-Driven Decision Making',
                          desc: 'GIS allows for analyzing vast amounts of data to identify trends, predict potential problems before they escalate, and prioritize maintenance needs.',
                        },
                        {
                          icon: Share2,
                          title: 'Improved Communication and Collaboration',
                          desc: 'Sharing data and visualizations through GIS platforms facilitates better communication and collaboration among different stakeholders involved in infrastructure management.',
                        },
                        {
                          icon: DollarSign,
                          title: 'Cost Savings',
                          desc: 'Early detection of infrastructure problems through geospatial monitoring can prevent costly repairs and disruptions down the line.',
                        },
                      ].map((item) => {
                        const Icon = item.icon
                        return (
                          <div key={item.title} className="flex gap-4 items-start">
                            <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                              <Icon size={22} aria-hidden />
                            </div>
                            <div>
                              <h3 className="text-[15px] font-bold text-navy">{item.title}</h3>
                              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{item.desc}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </Reveal>
                </div>

                {/* Right — dam/infrastructure image */}
                <div className="lg:col-span-5">
                  <Reveal delay={0.15} className="sticky top-28">
                    <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200 aspect-[3/4]">
                      <img
                        src="/images/infrastructure-monitoring.webp"
                        alt="Infrastructure monitoring — aerial dam view"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : isMining ? (
        /* ── Custom Mining Sections ── */
        <>
          {/* Section 1 — Intro: Area Audit & Monitoring */}
          <section className="bg-white section">
            <div className="wrap">
              <div className="grid gap-12 lg:grid-cols-12 items-center">
                {/* Left — hero section image */}
                <div className="lg:col-span-5">
                  <Reveal>
                    <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200 aspect-[4/3] lg:aspect-[4/4.5]">
                      <img
                        src="/images/mining.webp"
                        alt="Mining Operations"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                </div>

                {/* Right — content */}
                <div className="lg:col-span-7">
                  <Reveal delay={0.1}>
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-sky-500">OUR SOLUTIONS</p>
                    <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
                      Area Audit & Monitoring
                    </h2>
                    <p className="mt-3 text-lg font-semibold text-emerald">
                      Satellite and Drone-Based Intelligence for Mining Operations
                    </p>
                    <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
                      Accurate monitoring of mining activities is essential for resource estimation, operational efficiency,
                      slope safety, and regulatory compliance.
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
                      At Thazhal Geospatial Analytics, we combine drone surveys, satellite imagery, LiDAR, and geospatial
                      analytics to help mining companies monitor site changes, calculate extracted material volumes, assess
                      ground deformation, and support environmental and regulatory reporting.
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 — Key Capabilities (2-col without 01-05 numbers) */}
          <section className="section bg-slate-50">
            <div className="wrap">
              <Reveal>
                <h2 className="mb-12 text-center text-3xl font-bold text-navy sm:text-4xl">Key Capabilities</h2>
              </Reveal>
              <div className="grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2">
                {[
                  {
                    icon: Camera,
                    title: 'Drone & Satellite Data Collection',
                    desc: 'Conduct periodic surveys using drone imagery and satellite data to capture detailed mine surface information, map excavation areas, and monitor changes in mining sites over time.',
                  },
                  {
                    icon: Layers,
                    title: 'Mining Volume Estimation',
                    desc: 'Compare Digital Surface Models (DSMs) and terrain models from different survey dates to estimate excavated material, stockpile volumes, and changes in overburden and waste dump areas.',
                  },
                  {
                    icon: Activity,
                    title: 'InSAR-Based Ground Deformation Monitoring',
                    desc: 'Use satellite radar data to detect and monitor ground movement around mine slopes, tailings facilities, waste dumps, and surrounding infrastructure, supporting the identification of areas requiring further geotechnical investigation.',
                  },
                  {
                    icon: Mountain,
                    title: 'Slope Stability Risk Assessment',
                    desc: 'Analyse terrain characteristics and ground deformation patterns to support slope-risk screening and mine safety assessments. Integrate satellite-derived insights with field surveys and geotechnical information for a more comprehensive assessment.',
                  },
                  {
                    icon: FileText,
                    title: 'Compliance & Royalty Reporting Support',
                    desc: 'Generate geospatial maps, volume estimates, and periodic change reports to support mining audits, operational documentation, regulatory reporting, and mineral royalty calculations.',
                  },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <Reveal key={item.title} delay={i * 0.06}>
                      <div className="flex gap-4 items-start">
                        <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                          <Icon size={22} aria-hidden />
                        </div>
                        <div>
                          <h3 className="text-[16px] font-bold text-navy">{item.title}</h3>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{item.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Section 3 — Benefits for Mining Operations + mining-benefits.webp */}
          <section className="section bg-white overflow-hidden">
            <div className="wrap">
              <div className="grid gap-16 lg:grid-cols-12 items-center">
                {/* Left — benefits */}
                <div className="lg:col-span-7">
                  <Reveal>
                    <h2 className="mb-8 text-3xl font-bold text-navy sm:text-4xl">
                      Benefits for Mining Operations
                    </h2>
                    <div className="space-y-6">
                      {[
                        {
                          icon: BarChart2,
                          title: 'Accurate Volume Estimation',
                          desc: 'Quantify changes in excavation areas and stockpiles using repeat surveys and surface models.',
                        },
                        {
                          icon: Eye,
                          title: 'Improved Operational Visibility',
                          desc: 'Track mining progress and surface changes across large operational areas.',
                        },
                        {
                          icon: AlertCircle,
                          title: 'Early Identification of Ground Movement',
                          desc: 'Monitor deformation trends and flag areas requiring further investigation.',
                        },
                        {
                          icon: Database,
                          title: 'Data-Driven Decision-Making',
                          desc: 'Support mine planning, resource management, and operational assessments with geospatial data.',
                        },
                        {
                          icon: FileText,
                          title: 'Streamlined Reporting',
                          desc: 'Provide consistent maps, measurements, and reports for audit and compliance workflows.',
                        },
                      ].map((item) => {
                        const Icon = item.icon
                        return (
                          <div key={item.title} className="flex gap-4 items-start">
                            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                              <Icon size={20} aria-hidden />
                            </div>
                            <div>
                              <h3 className="text-[15px] font-bold text-navy">{item.title}</h3>
                              <p className="mt-1 text-[13px] leading-relaxed text-slate-500">{item.desc}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </Reveal>
                </div>

                {/* Right — mining-benefits image */}
                <div className="lg:col-span-5">
                  <Reveal delay={0.1}>
                    <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200 aspect-[4/3] lg:aspect-[4/5]">
                      <img
                        src="/images/mining-benefits.webp"
                        alt="Mining Operations Benefits"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : isDisaster ? (
        /* ── Custom Disaster Management Sections ── */
        <>
          {/* Section 1 — Hero Image (Left) + Satellite Intelligence Content (Right) */}
          <section className="bg-white section">
            <div className="wrap">
              <div className="grid gap-12 lg:grid-cols-12 items-center">
                {/* Left — hero section image */}
                <div className="lg:col-span-5">
                  <Reveal>
                    <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200 aspect-[4/3] lg:aspect-[4/4.5]">
                      <img
                        src="/images/disaster-management.webp"
                        alt="Disaster Management"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                </div>

                {/* Right — content */}
                <div className="lg:col-span-7">
                  <Reveal delay={0.1}>
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-sky-500">OUR SOLUTIONS</p>
                    <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
                      Satellite Intelligence for Disaster Preparedness, Response & Recovery
                    </h2>
                    <p className="mt-6 text-[15px] leading-relaxed text-slate-600">
                      Track disasters from space and respond faster with satellite imagery, remote sensing, and geospatial analytics. Thazhal helps government agencies, disaster management authorities, and organisations identify affected areas, assess damage, map vulnerable locations, and monitor recovery through actionable maps, alerts, and reports.
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 — Damage Mapping (2 highlight cards) */}
          <section className="section bg-slate-50">
            <div className="wrap">
              <Reveal>
                <h2 className="mb-12 text-center text-3xl font-bold text-navy sm:text-4xl">Damage Mapping</h2>
              </Reveal>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {[
                  {
                    title: 'Rapid Assessment of Disaster Impact',
                    desc: 'Quickly identify flood-affected areas, damaged infrastructure, impacted settlements, and potential contamination zones using satellite imagery, drone data, and geospatial analytics. Generate damage assessment maps to support emergency response, recovery planning, and impact reporting.',
                  },
                  {
                    title: 'Flood Risk & Extent Analysis',
                    desc: 'Map flood extent and assess flood exposure by combining satellite observations, terrain models, drainage networks, and spatial data. Identify vulnerable settlements, roads, infrastructure, and agricultural areas to support preparedness, response planning, and post-flood recovery.',
                  },
                ].map((card, i) => (
                  <Reveal key={card.title} delay={i * 0.1}>
                    <div className="flex flex-col justify-center rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm min-h-[220px] transition-all duration-300 hover:-translate-y-1 hover:border-emerald/40 hover:shadow-xl hover:shadow-navy/5">
                      <h3 className="text-xl font-bold text-navy">{card.title}</h3>
                      <p className="mt-4 text-[14px] leading-relaxed text-slate-500">{card.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3 — Key Capabilities (6 Points Left + Image Right) */}
          <section className="section bg-white overflow-hidden">
            <div className="wrap">
              <div className="grid gap-16 lg:grid-cols-12 items-center">
                {/* Left — 6 capabilities */}
                <div className="lg:col-span-7">
                  <Reveal>
                    <h2 className="mb-8 text-3xl font-bold text-navy sm:text-4xl">
                      Key Capabilities
                    </h2>
                    <div className="space-y-6">
                      {[
                        {
                          icon: Waves,
                          title: 'Flood Monitoring',
                          desc: 'Map inundated areas and track changes in flood extent using satellite imagery.',
                        },
                        {
                          icon: Building2,
                          title: 'Infrastructure Damage Assessment',
                          desc: 'Identify potentially affected roads, buildings, and other critical assets to prioritise field inspections.',
                        },
                        {
                          icon: ShieldAlert,
                          title: 'Disaster Risk Mapping',
                          desc: 'Analyse terrain, land use, drainage, and exposure to identify areas vulnerable to natural hazards.',
                        },
                        {
                          icon: Sun,
                          title: 'Drought Monitoring',
                          desc: 'Assess vegetation conditions and changes in land surface characteristics to support drought impact assessment.',
                        },
                        {
                          icon: Mountain,
                          title: 'Landslide Susceptibility Mapping',
                          desc: 'Identify terrain characteristics associated with landslide susceptibility to support risk assessment and preparedness.',
                        },
                        {
                          icon: Activity,
                          title: 'Post-Disaster Recovery Monitoring',
                          desc: 'Compare pre- and post-event imagery to track visible changes, assess damage, and monitor recovery progress.',
                        },
                      ].map((item) => {
                        const Icon = item.icon
                        return (
                          <div key={item.title} className="flex gap-4 items-start">
                            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                              <Icon size={20} aria-hidden />
                            </div>
                            <div>
                              <h3 className="text-[15px] font-bold text-navy">{item.title}</h3>
                              <p className="mt-1 text-[13px] leading-relaxed text-slate-500">{item.desc}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </Reveal>
                </div>

                {/* Right — disaster-capabilities image */}
                <div className="lg:col-span-5">
                  <Reveal delay={0.1}>
                    <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200 aspect-[4/3] lg:aspect-[4/5]">
                      <img
                        src="/images/disaster-capabilities.webp"
                        alt="Disaster Key Capabilities"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 — Turning Disaster Data into Actionable Intelligence */}
          <section className="section bg-slate-50">
            <div className="wrap max-w-4xl text-center">
              <Reveal>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-500 mb-3 block">
                  Actionable Intelligence
                </span>
                <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
                  Turning Disaster Data into Actionable Intelligence
                </h2>
                <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-slate-600">
                  Thazhal integrates satellite remote sensing, GIS, drone surveys, and geospatial analytics to transform complex disaster data into clear, decision-ready information. Interactive maps and structured reports help response teams understand the extent of an event, prioritise affected areas, and coordinate recovery efforts.
                </p>
                <div className="mt-8 flex justify-center">
                  <Btn to="/contact">Talk to Our Team</Btn>
                </div>
              </Reveal>
            </div>
          </section>
        </>
      ) : (
        /* ── Default Sections for other pages ── */
        <>
          <section className="section"><div className="wrap grid gap-12 lg:grid-cols-3">
            <Reveal><SectionHeading title="Overview" /></Reveal>
            <Reveal className="space-y-5 text-lg text-slate-700 lg:col-span-2"><p className="font-display text-2xl text-navy">{d.summary}</p>{d.overview.map((p) => <p key={p}>{p}</p>)}</Reveal>
          </div></section>

          <section className="bg-white section"><div className="wrap grid gap-14 md:grid-cols-2">
            <Reveal><h2 className="text-3xl font-bold">{kind === 'product' ? 'Intended use cases' : 'Potential applications'}</h2>
              <ul className="mt-6 space-y-3">{d.uses.map((u) => <li key={u} className="flex gap-3"><Check className="mt-0.5 shrink-0 text-emerald" size={20} aria-hidden />{u}</li>)}</ul></Reveal>
            <Reveal delay={0.1}><h2 className="text-3xl font-bold">Benefits</h2>
              <ul className="mt-6 space-y-3">{d.benefits.map((u) => <li key={u} className="flex gap-3"><Check className="mt-0.5 shrink-0 text-emerald" size={20} aria-hidden />{u}</li>)}</ul></Reveal>
          </div></section>
        </>
      )}

      <section className="bg-forest section"><div className="wrap">
        <Reveal><SectionHeading dark title={kind === 'product' ? 'How it works' : 'Geospatial intelligence in practice'} /></Reveal>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{d.steps.map((s, i) => <li key={s.title} className="border-t border-emerald/60 pt-5"><span className="font-mono text-sm text-emerald">{String(i + 1).padStart(2, '0')}</span><h3 className="mt-2 text-xl font-bold text-white">{s.title}</h3><p className="mt-2 text-white/70">{s.text}</p></li>)}</ol>
      </div></section>

      <CTA title={`Interested in ${d.name}?`} text="Tell us about your project and we will get back to you." />
    </>
  )
}
