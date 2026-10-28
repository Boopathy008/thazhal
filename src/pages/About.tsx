/**
 * About.tsx — THAZHAL about page
 * Premium editorial layout with taste-skill design principles.
 */

import { Linkedin, User } from 'lucide-react'
import { CTA, Reveal, SectionHeading, Art, Card3D } from '../components/ui'
import { LogoMarquee } from './Home'
import { advisors, partners, teamMembers, TeamMember } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'

function MemberCard({ m }: { m: TeamMember }) {
  return (
    <Card3D className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition-all duration-350 hover:shadow-xl hover:border-emerald/25">
        {/* Photo */}
        <div className="relative aspect-[4/4.5] overflow-hidden bg-slate-50">
          {m.image ? (
            <img
              src={m.image}
              alt={m.name}
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none'
                const fallback = e.currentTarget.parentElement?.querySelector('.fallback-avatar')
                if (fallback) (fallback as HTMLElement).style.display = 'flex'
              }}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-104"
            />
          ) : null}
          <div
            className={`fallback-avatar h-full w-full items-center justify-center bg-gradient-to-br from-forest/8 via-paper to-emerald/15 text-forest/35 ${
              m.image ? 'hidden' : 'flex'
            }`}
          >
            <User size={56} strokeWidth={1.5} />
          </div>

          {/* Scan line on hover */}
          <div className="scan-line pointer-events-none" />

          {m.linkedin && (
            <a
              href={m.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${m.name} on LinkedIn`}
              className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-navy shadow-md backdrop-blur-sm transition-all duration-250 hover:scale-110 hover:bg-emerald hover:text-navy"
            >
              <Linkedin size={16} />
            </a>
          )}
        </div>

        {/* Name & role */}
        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
            <h4 className="text-[17px] font-bold text-navy leading-snug">{m.name}</h4>
            <p className="mt-1.5 text-[13px] leading-snug text-slate-500">{m.role}</p>
          </div>
        </div>
      </div>
    </Card3D>
  )
}

export default function About() {
  usePageMeta('About', 'THAZHAL combines geospatial technologies, imagery analytics and intelligent monitoring.')
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[380px] items-center overflow-hidden bg-navy pb-20 pt-36 sm:min-h-[440px]">
        <div className="absolute inset-0">
          <img
            src="/images/about-hero.jpg"
            alt="THAZHAL about background"
            onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none' }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/65" />
          {/* Subtle geo grid */}
          <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-10" />
        </div>
        <div className="wrap relative">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
            <p className="eyebrow">About us</p>
          </div>
          <h1 className="max-w-3xl text-3xl font-bold text-white sm:text-5xl">
            Innovation meets geospatial intelligence.
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70">
            THAZHAL focuses on developing forward-thinking solutions that combine geospatial technologies,
            imagery analytics, and intelligent monitoring to help organizations better understand the world around them.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="wrap">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 dot-grid opacity-50"
            style={{ position: 'absolute' }}
          />
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-slate-200/70 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                  <p className="eyebrow">Mission</p>
                </div>
                <h2 className="text-2xl font-bold text-navy">Our Mission</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
                  To make geospatial intelligence more useful for environmental understanding,
                  infrastructure assessment, and informed decision-making.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-slate-200/70 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                  <p className="eyebrow">Vision</p>
                </div>
                <h2 className="text-2xl font-bold text-navy">Our Vision</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
                  To contribute to a future where better spatial information supports a more resilient
                  and sustainable world.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-gradient section text-white">
        <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-10" />
        <div className="wrap relative grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              dark
              title="Our Approach"
              text="We bring data and technology together: gather relevant geospatial information, analyse it for patterns and change, and turn it into insight that supports planning and decisions."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="font-display text-[17px] font-bold text-white mb-5">Areas of expertise</h3>
            <ul className="space-y-3.5">
              {[
                'Environmental Monitoring',
                'Imagery Analytics for Informed Decision-Making',
                'Cutting-Edge Technology for Comprehensive Surveys',
                'Geospatial Intelligence for Infrastructure Assessment',
              ].map((x) => (
                <li key={x} className="flex items-center gap-3 text-[15px] text-white/80">
                  <span className="h-[1.5px] w-5 shrink-0 rounded-full bg-emerald" />
                  {x}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-paper section">
        <div className="wrap">
          <Reveal>
            <SectionHeading
              title="Our Team"
              text="A passionate interdisciplinary team driving innovations at the intersection of geospatial sciences, AI, and environmental resilience."
              center
            />
          </Reveal>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {teamMembers.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 0.07} className="h-full flex flex-col">
                <MemberCard m={m} />
              </Reveal>
            ))}
          </div>

          {/* Advisors */}
          <div className="mt-24">
            <Reveal>
              <SectionHeading
                title="Advisors"
                text="Distinguished researchers and scientists helping guide THAZHAL's technological horizon and global impact."
                center
              />
            </Reveal>
            <div className="mx-auto mt-12 grid max-w-3xl gap-7 sm:grid-cols-2 items-stretch">
              {advisors.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.1} className="h-full flex flex-col">
                  <MemberCard m={m} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section className="section bg-white">
        <div className="wrap">
          <Reveal>
            <SectionHeading eyebrow="Expertise" title="Industries Served" />
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              ['Infrastructure', 'Highways, bridges, urban systems and industrial facilities.'],
              ['Environmental', 'Forests, rivers, landscapes and environmental change.'],
            ].map(([t, d]) => (
              <Reveal key={t} delay={0.05}>
                <div className="rounded-2xl border border-slate-200/70 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:border-emerald/25 border-l-[3px] border-l-emerald">
                  <h3 className="text-xl font-bold text-navy">{t}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-slate-500">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners marquee */}
      <section className="bg-white section border-t border-slate-100">
        <div className="wrap">
          <SectionHeading eyebrow="Our network" title="Customers and Partners" />
        </div>
        <div className="mt-10">
          <LogoMarquee list={partners} />
        </div>
      </section>

      <CTA />
    </>
  )
}
