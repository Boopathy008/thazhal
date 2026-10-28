import { Mail, MapPin, Globe2, Compass } from 'lucide-react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import { contact } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'
import { Reveal } from '../components/ui'

export default function Contact() {
  usePageMeta('Contact', 'Talk to the THAZHAL team about your geospatial project.')
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[380px] items-center overflow-hidden bg-[#0A1208] pb-20 pt-36 sm:min-h-[440px]">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="/images/contact-hero.jpg"
            alt="THAZHAL contact hero background"
            onError={(e) => {
              ;(e.currentTarget as HTMLElement).style.display = 'none'
            }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A1208]/75" />
          <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-15" />
        </div>

        <div className="wrap relative">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
              <p className="eyebrow !text-white/90">Contact Us</p>
            </div>
            <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let's Start a <span className="text-emerald">Conversation.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/70">
              Tell us about your project, your organization, or the geospatial and monitoring challenge you are looking to solve. Our team is ready to collaborate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative overflow-hidden bg-paper section">
        <div className="geo-grid-bg pointer-events-none absolute inset-0 opacity-8" />
        <div className="wrap relative grid gap-14 lg:grid-cols-5 items-start">
          {/* Contact Details Cards */}
          <div className="space-y-6 lg:col-span-2">
            <Reveal delay={0.05}>
              <div className="group rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-emerald/40 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald/10 text-emerald transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald group-hover:text-navy">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy">Headquarters</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{contact.hq}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="group rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-emerald/40 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald/10 text-emerald transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald group-hover:text-navy">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy">Direct Email</h3>
                    <a
                      className="mt-2 inline-block text-[14px] font-medium text-emerald transition-colors hover:underline"
                      href={`mailto:${contact.email}`}
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-emerald/20 bg-gradient-to-br from-navy to-forest p-7 text-white shadow-xl">
                <div className="flex items-center gap-3 text-emerald mb-3">
                  <Compass size={20} />
                  <span className="font-mono text-xs uppercase tracking-wider">Geospatial Advisory</span>
                </div>
                <h4 className="font-display text-lg font-bold">Looking for Custom Sensing?</h4>
                <p className="mt-2 text-xs text-white/70 leading-relaxed">
                  We configure specialized multispectral orbits and sensor payloads tailored to environmental hazards, pipeline corridors, and watershed analysis.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
