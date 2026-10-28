/**
 * Cards.tsx — THAZHAL premium card components
 * Anti-slop design: editorial, data-rich, purposeful hierarchy.
 */

import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Article, Detail, pathOf } from '../data/content'
import { Visual, Card3D } from './ui'

export function ImageCard({ title, text, to, variant, image }: {
  title: string; text: string; to: string; variant: number; image?: string
}) {
  return (
    <Link to={to} className="group relative block aspect-[4/5] overflow-hidden bg-navy sm:aspect-[5/6]">
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        <Visual variant={variant} image={image} label={`${title} imagery`} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
        <h3 className="text-3xl font-bold text-white">{title}</h3>
        <p className="mt-3 max-w-md text-white/75">{text}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald">
          Read More <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  )
}

export function ProductCard({ p }: { p: Detail }) {
  return (
    <Card3D className="h-full">
      <Link
        to={pathOf(p)}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-slate-200/70 shadow-sm transition-all duration-400 hover:shadow-xl hover:shadow-navy/8 hover:border-emerald/30"
      >
        {/* Image area — 16:9 aspect */}
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
          <div className="h-full transition-transform duration-700 group-hover:scale-106">
            <Visual variant={p.variant} image={p.image} label={`${p.name} visual`} />
          </div>
          {/* Geo scan line on hover */}
          <div className="scan-line pointer-events-none" />
          {/* Tag overlay */}
          <div className="absolute top-3 left-3 rounded-md bg-navy/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-emerald/90 backdrop-blur-sm">
            GEO PRODUCT
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-base font-bold leading-snug text-navy transition-colors duration-300 group-hover:text-forest">
            {p.name}
          </h3>
          <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-500 line-clamp-3">
            {p.summary}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wider text-emerald transition-all duration-300 group-hover:translate-x-1">
            Explore
            <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </span>
        </div>
      </Link>
    </Card3D>
  )
}

export function SolutionBlock({ s, flip, light }: { s: Detail; flip?: boolean; light?: boolean }) {
  const heading = light ? 'text-navy' : 'text-white'
  const body    = light ? 'text-slate-500' : 'text-white/65'
  const listTxt = light ? 'text-navy'     : 'text-white/80'
  return (
    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
      <div className={`lg:col-span-5 flex justify-center ${flip ? 'lg:order-2' : ''}`}>
        <Card3D className="w-full max-w-md">
          <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lg border border-slate-200/50">
            <Visual variant={s.variant} image={s.image} label={`${s.name} visual`} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent" />
            {/* Scan overlay */}
            <div className="scan-line pointer-events-none" />
          </div>
        </Card3D>
      </div>
      <div className="lg:col-span-7">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald/10 border border-emerald/20 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald">
          <span className="h-1 w-1 rounded-full bg-emerald animate-pulse" />
          Geospatial Solution
        </div>
        <h3 className={`text-2xl font-bold sm:text-3xl ${heading}`}>{s.name}</h3>
        <p className={`mt-4 text-[15px] leading-relaxed ${body}`}>{s.summary}</p>
        <ul className={`mt-5 space-y-2.5 text-[14px] ${listTxt}`}>
          {s.uses.map((u) => (
            <li key={u} className="flex gap-3 items-start">
              <span className="mt-1.5 h-1 w-4 shrink-0 rounded-full bg-emerald" />
              <span>{u}</span>
            </li>
          ))}
        </ul>
        <Link
          to={pathOf(s)}
          className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald transition-all duration-300 hover:translate-x-1.5"
        >
          <span>Explore {s.name}</span>
          <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </div>
  )
}

export function BlogCard({ a, dark }: { a: Article; dark?: boolean }) {
  return (
    <Card3D className="h-full">
      <article
        className={`group flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-350 hover:shadow-xl ${
          dark
            ? 'border-white/10 bg-white/[0.04] backdrop-blur-sm hover:border-emerald/30 hover:bg-white/[0.07]'
            : 'border-slate-200/70 bg-white shadow-sm hover:border-emerald/25 hover:shadow-navy/8'
        }`}
      >
        <Link to={`/blog/${a.slug}`} className="flex flex-1 flex-col">
          {/* Cover image */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <div className="h-full transition-transform duration-700 group-hover:scale-105">
              <Visual variant={a.variant} image={a.image} label={`Cover for ${a.title}`} />
            </div>
            <div className="scan-line pointer-events-none" />
            {/* Date overlay chip */}
            <div className="absolute bottom-3 left-3 rounded-md bg-navy/80 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-emerald/90 backdrop-blur-sm">
              {a.date}
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-1 flex-col p-4">
            <div className="mb-2 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-emerald">
              <span className="h-1 w-1 rounded-full bg-emerald" />
              <span className={dark ? 'text-white/55' : 'text-slate-400'}>by {a.author ?? 'Thazhal'}</span>
            </div>
            <h3
              className={`flex-1 text-[15px] font-bold leading-snug transition-colors duration-300 ${
                dark ? 'text-white group-hover:text-emerald' : 'text-navy group-hover:text-forest'
              }`}
            >
              {a.title}
            </h3>
            <p className={`mt-2.5 text-[13px] line-clamp-2 leading-relaxed ${dark ? 'text-white/55' : 'text-slate-500'}`}>
              {a.excerpt}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald transition-all duration-300 group-hover:translate-x-1">
              Read Article <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </span>
          </div>
        </Link>
      </article>
    </Card3D>
  )
}
