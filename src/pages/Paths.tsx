import { Link } from 'react-router-dom'
import { paths } from '../data/paths'
import { ArrowRight, Clock, Wallet } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { accent } from '../lib/colors'
import { isStaticRender } from '../lib/isStatic'
import { cn } from '../lib/cn'

const difficulties = [
  { key: 'all', label: 'All levels' },
  { key: 'beginner', label: 'Beginner' },
  { key: 'intermediate', label: 'Intermediate' },
  { key: 'advanced', label: 'Advanced' },
]

const difficultyStyles: Record<string, string> = {
  beginner: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20',
  intermediate: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20',
  advanced: 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-500/10 dark:text-violet-400 dark:border-violet-500/20',
}

export default function Paths() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? paths : paths.filter(p => p.difficulty === filter)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Pick your path
        </h1>
        <p className="text-lg text-ink-soft max-w-2xl">
          Eight different routes to income. Each one is a ladder of levels with exact steps —
          not a to-do list, but a <em className="not-italic font-semibold text-ink">how-to guide</em>.
          Pick the one that fits your skills, budget, and appetite.
        </p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-10 flex-wrap">
        {difficulties.map(d => {
          const active = filter === d.key
          return (
            <button
              key={d.key}
              onClick={() => setFilter(d.key)}
              className={cn(
                'relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200',
                active ? 'text-white' : 'bg-cream border border-line text-ink-soft hover:text-ink hover:border-brand-300'
              )}
            >
              {active && (
                <motion.span
                  layoutId="difficulty-pill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600"
                  transition={{ type: 'spring', bounce: 0.25, duration: 0.55 }}
                />
              )}
              <span className="relative z-10">{d.label}</span>
            </button>
          )
        })}
      </div>

      {/* Paths grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map(path => {
            const a = accent(path.color)
            return (
              <motion.div
                key={path.id}
                layout
                initial={isStaticRender ? false : { opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -12 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={`/path/${path.id}`}
                  className={cn(
                    'group relative h-full flex flex-col bg-cream border border-line rounded-3xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift',
                    a.glow
                  )}
                >
                  <div className={cn('absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r opacity-70 group-hover:opacity-100 transition-opacity', a.gradient)} />

                  <div className="flex items-start justify-between mb-4">
                    <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300', a.soft)}>
                      {path.icon}
                    </div>
                    <span className={cn('px-2.5 py-1 rounded-lg text-xs font-semibold capitalize border', difficultyStyles[path.difficulty])}>
                      {path.difficulty}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold mb-2 group-hover:text-brand-600 transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed mb-5 line-clamp-2">{path.description}</p>

                  <div className="mt-auto space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-xs text-ink-faint">
                      <Wallet className="w-3.5 h-3.5" />
                      <span className="font-mono font-semibold text-ink-soft">{path.startupCost}</span> to start
                    </div>
                    <div className="flex items-center gap-2 text-xs text-ink-faint">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="font-medium text-ink-soft">{path.realisticTimeline}</span>
                    </div>
                  </div>

                  <div className={cn('flex items-center gap-2 text-sm font-semibold', a.text)}>
                    {path.levels.length} level guides
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
