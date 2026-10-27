import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { contact, nav, social } from '../data/content'
import { Art } from './ui'

const col = 'text-sm text-white/70 transition-colors hover:text-emerald'
export default function Footer() {
  const soc = [
    { n: 'X', I: Twitter, u: social.x },
    { n: 'LinkedIn', I: Linkedin, u: social.linkedin },
    { n: 'Instagram', I: Instagram, u: social.instagram },
  ]
  return (
    <footer className="relative overflow-hidden bg-navy pt-20 text-white">
      <Art variant={4} className="absolute inset-0 h-full w-full opacity-40" />
      <div className="wrap relative grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl font-bold tracking-[0.2em]">THAZHAL</p>
          <p className="mt-4 max-w-xs text-white/70">Geospatial intelligence for a more informed and sustainable future.</p>
          <div className="mt-6 flex gap-3">
            {soc.map(({ n, I, u }) => u
              ? <a key={n} href={u} target="_blank" rel="noopener noreferrer" aria-label={n} className="rounded-full border border-white/20 p-2.5 hover:border-emerald hover:text-emerald"><I size={18} /></a>
              : <span key={n} aria-label={`${n} (link not configured)`} className="rounded-full border border-white/10 p-2.5 text-white/30"><I size={18} /></span>)}
          </div>
        </div>
        <div><h4 className="mb-4 font-semibold">Explore</h4><ul className="space-y-2.5">{[['Home', '/'], ['About', '/about'], ['Blog', '/blog'], ['Contact', '/contact']].map(([l, t]) => <li key={t}><Link className={col} to={t}>{l}</Link></li>)}</ul></div>
        <div>
          <h4 className="mb-4 font-semibold">Products</h4><ul className="space-y-2.5">{nav.products.map((p) => <li key={p.to}><Link className={col} to={p.to}>{p.label}</Link></li>)}</ul>
          <h4 className="mb-4 mt-8 font-semibold">Solutions</h4><ul className="space-y-2.5">{nav.solutions.map((p) => <li key={p.to}><Link className={col} to={p.to}>{p.label}</Link></li>)}</ul>
        </div>
        <div><h4 className="mb-4 font-semibold">Contact Us</h4>
          <p className="text-sm text-white/70">Headquarters:<br />{contact.hq}</p>
          <a className={`${col} mt-3 inline-block`} href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="wrap flex flex-col justify-between gap-3 py-6 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} THAZHAL. All rights reserved.</p>
          <div className="flex gap-6"><Link className={col} to="/privacy">Privacy Policy</Link><Link className={col} to="/terms">Terms and Conditions</Link></div>
        </div>
      </div>
    </footer>
  )
}
