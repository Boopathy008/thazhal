import { Mail, MapPin } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import { contact } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'
import { Art } from '../components/ui'

export default function Contact() {
  usePageMeta('Contact', 'Talk to the THAZHAL team about your geospatial project.')
  return (
    <>
      <section className="relative overflow-hidden bg-navy pb-16 pt-36">
        <Art variant={2} className="absolute inset-0 h-full w-full opacity-60" />
        <div className="wrap relative"><p className="eyebrow mb-4">Contact</p>
          <h1 className="max-w-3xl text-4xl font-bold text-white sm:text-6xl">Let's Start a Conversation</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">Tell us about your project, your organization, or the challenge you are looking to solve. Our team would be happy to hear from you.</p></div>
      </section>
      <section className="section"><div className="wrap grid gap-14 lg:grid-cols-5">
        <div className="space-y-8 lg:col-span-2">
          <div className="flex gap-4"><MapPin className="mt-1 text-emerald" aria-hidden /><div><h2 className="font-display text-lg font-bold">Headquarters</h2><p className="text-slate-600">{contact.hq}</p></div></div>
          <div className="flex gap-4"><Mail className="mt-1 text-emerald" aria-hidden /><div><h2 className="font-display text-lg font-bold">Email</h2><a className="text-slate-600 underline" href={`mailto:${contact.email}`}>{contact.email}</a></div></div>
        </div>
        <div className="lg:col-span-3"><ContactForm /></div>
      </div></section>
    </>
  )
}
