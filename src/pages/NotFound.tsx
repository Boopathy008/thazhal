import { Btn } from '../components/ui'
import { usePageMeta } from '../hooks/usePageMeta'
export default function NotFound() {
  usePageMeta('Page not found')
  return (
    <section className="flex min-h-[80vh] items-center bg-navy pt-24"><div className="wrap">
      <p className="eyebrow mb-4">Error 404</p>
      <h1 className="text-5xl font-bold text-white sm:text-7xl">This location is off the map.</h1>
      <p className="mt-5 text-lg text-white/70">The page you requested does not exist or has moved.</p>
      <div className="mt-8"><Btn to="/">Back to Home</Btn></div>
    </div></section>
  )
}
