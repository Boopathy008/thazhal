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
  const related = d.related.map((p) => details.find((x) => pathOf(x) === p)).filter(Boolean) as D[]
  const label = kind === 'product' ? 'Product' : 'Solution'
  const isForest = slug === 'forest-intelligence'
  const isSwoad = slug === 'swoad'
  const isClimateAudit = slug === 'climate-audit'
  const isFireAudit = slug === 'fire-audit'
  const isEnvMonitoring = slug === 'environmental-monitoring'
  const isInfraMonitoring = slug === 'infrastructure-monitoring'
  const isMining = slug === 'mining'

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
              <div className="max-w-4xl">
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
                      At Thazhal, we combine geospatial intelligence and AI to assess fire risks, strengthen safety
                      systems, and ensure compliance. Our audits help organizations protect people, property, and assets
                      with precision and confidence.
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                      Our intelligent system analyzes indoor video and spatial data to detect fire-prone materials,
                      hotspot zones, and missing safety infrastructure — providing actionable insights in under 2 hours
                      per building.
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

          {/* Section 2 — Why to use this product (image left, text right) */}
          <section className="section bg-slate-50 overflow-hidden">
            <div className="wrap">
              <div className="grid gap-12 lg:grid-cols-12 items-center">
                {/* Left — thermal image */}
                <div className="lg:col-span-5">
                  <Reveal>
                    <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200 aspect-[4/3]">
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
                      Equips organizations with the tools to forecast, prepare for and reduce fire-related disruptions.
                      Understanding fire risks allows companies to protect long-term value, ensuring business continuity
                      and investor confidence. Identifying location-specific hazards helps to prioritize adaptation
                      actions at any level.
                    </p>
                    <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                      {[
                        'Prevent fire incidents through early risk identification',
                        'Ensure compliance with fire safety standards',
                        'Access data-driven severity scores for each building',
                        'Prioritize upgrades in vulnerable zones',
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

          {/* Section 3 — What We Assess */}
          <section className="section bg-white">
            <div className="wrap">
              <Reveal>
                <h2 className="mb-12 text-center text-3xl font-bold text-navy sm:text-4xl">What We Assess</h2>
              </Reveal>
              <div className="grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2">
                {[
                  {
                    icon: Flame,
                    title: 'Fire-Prone Objects',
                    desc: 'Detect flammable materials, electrical points, and unprotected machinery using AI object recognition.',
                  },
                  {
                    icon: Map,
                    title: 'Indoor Hotspot Mapping',
                    desc: 'Map and visualize high-risk fire zones across floors and rooms using spatial intelligence.',
                  },
                  {
                    icon: Shield,
                    title: 'Fire Safety Infrastructure',
                    desc: 'Identify missing extinguishers, hydrants, alarms, and exits critical for compliance.',
                  },
                  {
                    icon: BarChart2,
                    title: 'Fire Severity Scoring',
                    desc: 'Generate building-wise risk scores to prioritize mitigation actions.',
                  },
                  {
                    icon: FileText,
                    title: 'Rapid Audit & Reporting',
                    desc: 'Complete assessment and deliver a digital audit report within 2 hours per building.',
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

          {/* Section 4 — Who Can We Assist? */}
          <section className="section bg-slate-50 overflow-hidden">
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
                          title: 'Government Buildings',
                          desc: 'Ensure public safety and strengthen compliance through regular fire audits.',
                        },
                        {
                          icon: Briefcase,
                          title: 'Corporate Offices',
                          desc: 'Safeguard assets, data centers, and employees with intelligent risk detection.',
                        },
                        {
                          icon: GraduationCap,
                          title: 'Schools & Colleges',
                          desc: 'Protect students and staff by proactively addressing indoor fire hazards.',
                        },
                        {
                          icon: Activity,
                          title: 'Hospitals & Public Infrastructure',
                          desc: 'Ensure continuous operations in high-occupancy and critical facilities.',
                        },
                        {
                          icon: Factory,
                          title: 'Industrial & Commercial Spaces',
                          desc: 'Protect workers and assets by proactively identifying and mitigating indoor fire hazards.',
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
                  <Reveal key={card.title} delay={i * 0.1}>
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm min-h-[180px]">
                      <h3 className="text-xl font-bold text-navy">{card.title}</h3>
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
                        src="/images/environmental-monitoring.jpg"
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
                        src="/images/infrastructure-monitoring.jpg"
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
              <Reveal>
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-sky-500">OUR SOLUTIONS</p>
                <h2 className="text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl max-w-3xl">
                  Area Audit & Monitoring
                </h2>
                <p className="mt-3 text-lg font-semibold text-emerald">
                  Satellite and Drone-Based Intelligence for Mining Operations
                </p>
                <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-slate-500">
                  Accurate monitoring of mining activities is essential for resource estimation, operational efficiency,
                  slope safety, and regulatory compliance.
                </p>
                <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-500">
                  At Thazhal Geospatial Analytics, we combine drone surveys, satellite imagery, LiDAR, and geospatial
                  analytics to help mining companies monitor site changes, calculate extracted material volumes, assess
                  ground deformation, and support environmental and regulatory reporting.
                </p>
              </Reveal>
            </div>
          </section>

          {/* Section 2 — Key Capabilities (numbered, 2-col) */}
          <section className="section bg-slate-50">
            <div className="wrap">
              <Reveal>
                <h2 className="mb-12 text-center text-3xl font-bold text-navy sm:text-4xl">Key Capabilities</h2>
              </Reveal>
              <div className="grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2">
                {[
                  {
                    num: '01',
                    icon: Camera,
                    title: 'Drone & Satellite Data Collection',
                    desc: 'Conduct periodic surveys using drone imagery and satellite data to capture detailed mine surface information, map excavation areas, and monitor changes in mining sites over time.',
                  },
                  {
                    num: '02',
                    icon: Layers,
                    title: 'Mining Volume Estimation',
                    desc: 'Compare Digital Surface Models (DSMs) and terrain models from different survey dates to estimate excavated material, stockpile volumes, and changes in overburden and waste dump areas.',
                  },
                  {
                    num: '03',
                    icon: Activity,
                    title: 'InSAR-Based Ground Deformation Monitoring',
                    desc: 'Use satellite radar data to detect and monitor ground movement around mine slopes, tailings facilities, waste dumps, and surrounding infrastructure, supporting the identification of areas requiring further geotechnical investigation.',
                  },
                  {
                    num: '04',
                    icon: Mountain,
                    title: 'Slope Stability Risk Assessment',
                    desc: 'Analyse terrain characteristics and ground deformation patterns to support slope-risk screening and mine safety assessments. Integrate satellite-derived insights with field surveys and geotechnical information for a more comprehensive assessment.',
                  },
                  {
                    num: '05',
                    icon: FileText,
                    title: 'Compliance & Royalty Reporting Support',
                    desc: 'Generate geospatial maps, volume estimates, and periodic change reports to support mining audits, operational documentation, regulatory reporting, and mineral royalty calculations.',
                  },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <Reveal key={item.title} delay={i * 0.06}>
                      <div className="flex gap-5 items-start">
                        <div className="flex flex-col items-center gap-2 shrink-0">
                          <span className="font-mono text-lg font-bold text-sky-500">{item.num}</span>
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                            <Icon size={22} aria-hidden />
                          </div>
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

          {/* Section 3 — Benefits + Closing CTA text */}
          <section className="section bg-white overflow-hidden">
            <div className="wrap">
              <div className="grid gap-16 lg:grid-cols-2">
                {/* Left — benefits */}
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

                {/* Right — closing insight text */}
                <Reveal delay={0.1}>
                  <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-8 h-full flex flex-col justify-center">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-500 mb-4">
                      Intelligence Summary
                    </span>
                    <h3 className="text-2xl font-bold text-navy leading-snug">
                      From Survey Data to Actionable Mining Intelligence
                    </h3>
                    <p className="mt-5 text-[14px] leading-relaxed text-slate-600">
                      Thazhal combines drone surveys, satellite remote sensing, LiDAR, and GIS-based analytics to
                      deliver practical insights for mining operations — from volume estimation and site audits to
                      ground deformation monitoring.
                    </p>
                    <p className="mt-4 text-[14px] leading-relaxed text-slate-600">
                      Explore how geospatial intelligence can improve the accuracy, efficiency, and monitoring of
                      your mining operations.
                    </p>
                    <div className="mt-8">
                      <Btn to="/contact">Talk to Our Team</Btn>
                    </div>
                  </div>
                </Reveal>
              </div>
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

      <section className="section"><div className="wrap grid gap-14 lg:grid-cols-2">
        <div><h2 className="text-3xl font-bold">Frequently asked questions</h2>
          <div className="mt-6 divide-y divide-slate2/30 border-y border-slate2/30">{d.faqs.map((f) => <details key={f.q} className="group py-4"><summary className="cursor-pointer list-none font-semibold marker:hidden">{f.q}</summary><p className="mt-2 text-slate-600">{f.a}</p></details>)}</div></div>
        <div><h2 className="text-3xl font-bold">Related</h2>
          <ul className="mt-6 space-y-3">{related.map((r) => <li key={r.slug}><Link to={pathOf(r)} className="block border border-slate2/30 bg-white p-5 transition-shadow hover:shadow-lg"><span className="font-display text-lg font-bold">{r.name}</span><span className="block text-sm text-slate-600">{r.tagline}</span></Link></li>)}</ul></div>
      </div></section>
      <CTA title={`Interested in ${d.name}?`} text="Tell us about your project and we will get back to you." />
    </>
  )
}
