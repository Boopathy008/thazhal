import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import MagicCursor from './components/MagicCursor'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import DetailPage from './pages/Detail'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

// Super 3D Spatial Fly-Through & Dimensional Zoom (GPU accelerated with translate3d)
const super3DPageVariants = {
  initial: {
    opacity: 0,
    scale: 0.96,
    y: 28,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.03,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function App() {
  const loc = useLocation()
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-emerald focus:px-4 focus:py-2">Skip to content</a>
      <MagicCursor />
      <Navbar />
      <div style={{ perspective: 1200 }}>
        <AnimatePresence mode="wait">
          <motion.main
            id="main"
            key={loc.pathname}
            variants={super3DPageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ transformStyle: 'preserve-3d', willChange: 'transform, opacity' }}
          >
            <Routes location={loc}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products/:slug" element={<DetailPage kind="product" />} />
              <Route path="/solutions/:slug" element={<DetailPage kind="solution" />} />
              <Route path="/privacy" element={<Legal kind="privacy" />} />
              <Route path="/terms" element={<Legal kind="terms" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  )
}
