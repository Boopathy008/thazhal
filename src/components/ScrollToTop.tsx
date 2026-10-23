import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 80)
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  useEffect(() => { const f = () => setShow(window.scrollY > 700); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  return show ? (
    <button type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 rounded-full bg-emerald p-3 text-navy shadow-lg hover:bg-white"><ArrowUp size={20} /></button>
  ) : null
}
