import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { isStaticRender } from './lib/isStatic'
import Layout from './components/Layout'
import Home from './pages/Home'
import Roadmap from './pages/Roadmap'
import Start from './pages/Start'
import StartDetail from './pages/StartDetail'
import Paths from './pages/Paths'
import PathDetail from './pages/PathDetail'
import LevelDetail from './pages/LevelDetail'
import Experiments from './pages/Experiments'
import Resources from './pages/Resources'
import Community from './pages/Community'
import NotFound from './pages/NotFound'

/** Scrolls to top on route change (except in-page hash links). */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={isStaticRender ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="roadmap" element={<Roadmap />} />
              <Route path="start" element={<Start />} />
              <Route path="start/:pathId" element={<StartDetail />} />
              <Route path="paths" element={<Paths />} />
              <Route path="path/:pathId" element={<PathDetail />} />
              <Route path="level/:levelId" element={<LevelDetail />} />
              <Route path="experiments" element={<Experiments />} />
              <Route path="resources" element={<Resources />} />
              <Route path="community" element={<Community />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
