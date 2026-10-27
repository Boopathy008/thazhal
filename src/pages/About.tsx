import { Linkedin, User } from 'lucide-react'
import { CTA, Reveal, SectionHeading, Art, Card3D } from '../components/ui'
import { LogoMarquee } from './Home'
import { advisors, partners, teamMembers, TeamMember } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'

function MemberCard({ m }: { m: TeamMember }) {
  return (
    <Card3D className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl">
        <div className="relative aspect-[4/4.5] overflow-hidden bg-slate-100">
          {m.image ? (
            <img
              src={m.image}
              alt={m.name}
              onError={(e) => {
                // Gracefully fallback to avatar placeholder if image hasn't been uploaded yet
                (e.currentTarget as HTMLElement).style.display = 'none'
                const fallback = e.currentTarget.parentElement?.querySelector('.fallback-avatar')
                if (fallback) (fallback as HTMLElement).style.display = 'flex'
              }}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : null}
          <div
            className={`fallback-avatar h-full w-full items-center justify-center bg-gradient-to-br from-forest/10 via-paper to-emerald/20 text-forest/40 ${
              m.image ? 'hidden' : 'flex'
            }`}
          >
            <User size={64} strokeWidth={1.5} />
          </div>

          {m.linkedin && (
            <a
              href={m.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${m.name} on LinkedIn`}
              className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-navy shadow-md backdrop-blur-sm transition-transform hover:scale-110 hover:bg-emerald hover:text-navy"
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>

        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <h4 className="text-xl font-bold text-navy">{m.name}</h4>
            <p className="mt-2 text-sm font-medium leading-snug text-slate-600">{m.role}</p>
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
      <section className="relative flex min-h-[380px] items-center overflow-hidden bg-navy pb-20 pt-32 sm:min-h-[440px]">
        {/* Real photo background with clean uniform neutral dark tint */}
        <div className="absolute inset-0">
          <img
            src="/images/about-hero.jpg"
            alt="THAZHAL about background"
            onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none' }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>

        <div className="wrap relative">
          <p className="eyebrow mb-3">About us</p>
          <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-5xl">Innovation meets geospatial intelligence.</h1>
          <p className="mt-5 max-w-2xl text-base text-white/80 leading-relaxed sm:text-lg">THAZHAL focuses on developing forward-thinking solutions that combine geospatial technologies, imagery analytics, and intelligent monitoring to help organizations better understand the world around them.</p>
        </div>
      </section>

      <section className="section bg-white"><div className="wrap grid gap-10 md:grid-cols-2">
        <Reveal><h2 className="text-2xl font-bold text-navy">Mission</h2><p className="mt-3 text-base leading-relaxed text-slate-600">To make geospatial intelligence more useful for environmental understanding, infrastructure assessment, and informed decision-making.</p></Reveal>
        <Reveal delay={0.1}><h2 className="text-2xl font-bold text-navy">Vision</h2><p className="mt-3 text-base leading-relaxed text-slate-600">To contribute to a future where better spatial information supports a more resilient and sustainable world.</p></Reveal>
      </div></section>

      <section className="section-gradient section text-white"><div className="wrap grid gap-12 lg:grid-cols-2">
        <Reveal><SectionHeading dark title="Our approach" text="We bring data and technology together: gather relevant geospatial information, analyse it for patterns and change, and turn it into insight that supports planning and decisions." /></Reveal>
        <Reveal delay={0.1}><h3 className="font-display text-xl font-bold text-white">Areas of expertise</h3>
          <ul className="mt-5 space-y-3.5 text-base text-white/90">{['Environmental Monitoring', 'Imagery Analytics for Informed Decision-Making', 'Cutting-Edge Technology for Comprehensive Surveys', 'Geospatial Intelligence for Infrastructure Assessment'].map((x) => <li key={x} className="flex items-center gap-2.5"><span className="h-px w-5 shrink-0 bg-emerald" />{x}</li>)}</ul></Reveal>
      </div></section>

      {/* Our Team Section */}
      <section className="bg-paper section">
        <div className="wrap">
          <Reveal>
            <SectionHeading eyebrow="People behind THAZHAL" title="Our Team" text="A passionate interdisciplinary team driving innovations at the intersection of geospatial sciences, AI, and environmental resilience." center />
          </Reveal>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {teamMembers.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 0.08} className="h-full flex flex-col">
                <MemberCard m={m} />
              </Reveal>
            ))}
          </div>

          {/* Advisors Subheading */}
          <div className="mt-28">
            <Reveal>
              <SectionHeading eyebrow="Guidance & Scientific Leadership" title="Advisors" text="Distinguished researchers and scientists helping guide THAZHAL's technological horizon and global impact." center />
            </Reveal>
            <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2 items-stretch">
              {advisors.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.1} className="h-full flex flex-col">
                  <MemberCard m={m} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white"><div className="wrap">
        <h2 className="text-2xl font-bold text-navy">Industries served</h2>
        <div className="mt-7 grid gap-6 md:grid-cols-2">{[['Infrastructure', 'Highways, bridges, urban systems and industrial facilities.'], ['Environmental', 'Forests, rivers, landscapes and environmental change.']].map(([t, d]) => <div key={t} className="border-l-4 border-emerald bg-paper p-6 rounded-r-xl"><h3 className="text-xl font-bold text-navy">{t}</h3><p className="mt-2 text-base text-slate-600">{d}</p></div>)}</div>
      </div></section>

      <section className="bg-white section border-t border-slate-100"><div className="wrap"><SectionHeading eyebrow="Our network" title="Customers and Partners" /></div><div className="mt-10"><LogoMarquee list={partners} /></div></section>
      <CTA />
    </>
  )
}
