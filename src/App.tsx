import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Awards from './pages/Awards'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import DetailPage from './pages/Detail'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

// Futuristic 3D Dimensional Warp & Zoom Transition
const dimensional3DVariants = {
  initial: {
    opacity: 0,
    rotateY: 10,
    rotateX: -4,
    scale: 0.92,
    z: -120,
    y: 35,
  },
  animate: {
    opacity: 1,
    rotateY: 0,
    rotateX: 0,
    scale: 1,
    z: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    rotateY: -10,
    rotateX: 4,
    scale: 0.94,
    z: -100,
    y: -30,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function App() {
  const loc = useLocation()
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-emerald focus:px-4 focus:py-2">Skip to content</a>
      <Navbar />
      <div style={{ perspective: 1600, transformStyle: 'preserve-3d', overflowX: 'hidden' }}>
        <AnimatePresence mode="wait">
          <motion.main
            id="main"
            key={loc.pathname}
            variants={dimensional3DVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              transformStyle: 'preserve-3d',
              willChange: 'transform, opacity',
            }}
          >
            <Routes location={loc}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/awards" element={<Awards />} />
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
