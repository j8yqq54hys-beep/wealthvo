import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Map, Compass, FlaskConical, BookOpen, Users, Menu, X, TrendingUp, ArrowRight, Sun, Moon, Footprints } from 'lucide-react'
import { cn } from '../lib/cn'
import { useTheme } from '../hooks/useTheme'

const navigation = [
  { path: '/start', label: 'Guides', icon: Footprints },
  { path: '/roadmap', label: 'Roadmap', icon: Map },
  { path: '/paths', label: 'Paths', icon: Compass },
  { path: '/experiments', label: 'Experiments', icon: FlaskConical },
  { path: '/resources', label: 'Resources', icon: BookOpen },
  { path: '/community', label: 'Community', icon: Users },
]

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { theme, toggle } = useTheme()

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  const themeButton = (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="p-2 rounded-xl text-ink-soft hover:text-ink hover:bg-cream border border-transparent hover:border-line transition-colors"
    >
      {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
    </button>
  )

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-line/70 bg-paper/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-[0_6px_16px_-4px_rgb(249_94_51/0.5)] group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
                <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight font-display">
                Wealth<span className="text-brand-500">vo</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navigation.map(item => {
                const Icon = item.icon
                const active = isActive(item.path)
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      'relative px-3.5 py-2 rounded-xl text-sm font-medium transition-colors duration-200 flex items-center gap-2',
                      active ? 'text-brand-600' : 'text-ink-soft hover:text-ink'
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl bg-brand-100/80"
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.55 }}
                      />
                    )}
                    <Icon className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                )
              })}
              <Link
                to="/start"
                className="ml-3 px-4 py-2 rounded-xl bg-ink text-cream text-sm font-semibold hover:bg-brand-600 transition-colors duration-200 flex items-center gap-1.5 group"
              >
                Start here
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              {themeButton}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-xl hover:bg-brand-100/60 text-ink transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t border-line/70 bg-paper/95 backdrop-blur-xl"
            >
              <div className="px-4 py-3 space-y-1">
                {navigation.map((item, i) => {
                  const Icon = item.icon
                  const active = isActive(item.path)
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors',
                          active
                            ? 'bg-brand-100/80 text-brand-700'
                            : 'text-ink-soft hover:text-ink hover:bg-brand-100/50'
                        )}
                      >
                        <Icon className="w-4 h-4" />
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                })}
                <div className="pt-2 border-t border-line/70 flex items-center justify-between px-3">
                  <span className="text-xs font-semibold text-ink-faint uppercase tracking-wide">
                    {theme === 'dark' ? 'Dark mode' : 'Light mode'}
                  </span>
                  {themeButton}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main content */}
      <main className="pt-16 flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-24">
        <div className="h-1.5 bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500" />
        <div className="border-t border-line bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <Link to="/" className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                    <TrendingUp className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-lg font-bold font-display">
                    Wealth<span className="text-brand-500">vo</span>
                  </span>
                </Link>
                <p className="text-ink-faint text-sm mt-3 max-w-xs">
                  The free roadmap we wish existed when we started. No gurus. No fluff. Just real paths to wealth.
                </p>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {navigation.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-sm text-ink-soft hover:text-brand-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-ink-faint text-xs">Built in public — every experiment is real.</p>
              <p className="text-ink-faint text-xs">© {new Date().getFullYear()} Wealthvo</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
