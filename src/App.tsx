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

// Super 3D Page Transition Variant (3D Flip / Depth Lift)
const page3DVariants = {
  initial: {
    opacity: 0,
    rotateY: 8,
    scale: 0.94,
    y: 20,
    filter: 'blur(8px)',
  },
  animate: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    rotateY: -8,
    scale: 0.94,
    y: -20,
    filter: 'blur(8px)',
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function App() {
  const loc = useLocation()
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-emerald focus:px-4 focus:py-2">Skip to content</a>
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        <MagicCursor />
      </div>
      <Navbar />
      <div style={{ perspective: 1400, overflowX: 'hidden' }}>
        <AnimatePresence mode="wait">
          <motion.main
            id="main"
            key={loc.pathname}
            variants={page3DVariants}
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
