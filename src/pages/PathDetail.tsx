import { useParams, Link } from 'react-router-dom'
import { paths, type Level } from '../data/paths'
import { getMilestoneById } from '../data/milestones'
import { ArrowRight, Clock, Wallet, Target, UserCheck, ExternalLink, Footprints } from 'lucide-react'
import { accent } from '../lib/colors'
import { cn } from '../lib/cn'
import Reveal from '../components/Reveal'

const difficultyStyles: Record<string, string> = {
  beginner: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400',
  intermediate: 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
  advanced: 'bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-400',
}

export default function PathDetail() {
  const { pathId } = useParams()
  const path = paths.find(p => p.id === pathId)

  if (!path) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="text-5xl mb-4">🧭</div>
        <h1 className="font-display text-2xl font-bold mb-4">Path not found</h1>
        <Link to="/paths" className="text-brand-600 hover:underline font-medium">
          Back to all paths
        </Link>
      </div>
    )
  }

  const a = accent(path.color)

  return (
    <div>
      {/* Colored hero */}
      <div className={cn('relative overflow-hidden bg-gradient-to-br text-white', a.gradient)}>
        <div className="absolute inset-0 bg-dots-light opacity-60" />
        <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/15 blur-2xl animate-blob" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <Link to="/paths" className="inline-flex items-center gap-2 text-white/85 hover:text-white text-sm font-medium mb-8 transition-colors">
            ← All paths
          </Link>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur flex items-center justify-center text-4xl shadow-lift animate-float">
              {path.icon}
            </div>
            <div className="flex-1">
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-3">
                {path.title}
              </h1>
              <p className="text-white/90 text-lg max-w-2xl leading-relaxed">{path.description}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3.5 py-2 rounded-xl bg-white/15 backdrop-blur text-sm font-medium flex items-center gap-2">
              <Wallet className="w-4 h-4" /> {path.startupCost} to start
            </span>
            <span className="px-3.5 py-2 rounded-xl bg-white/15 backdrop-blur text-sm font-medium flex items-center gap-2">
              <Clock className="w-4 h-4" /> {path.realisticTimeline}
            </span>
            <span className={cn('px-3.5 py-2 rounded-xl text-sm font-semibold capitalize', difficultyStyles[path.difficulty])}>
              {path.difficulty}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Who it's for */}
        <Reveal>
          <div className={cn('rounded-3xl border p-6 mb-14 flex items-start gap-4', a.border, a.soft)}>
            <div className={cn('flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center', a.tile)}>
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold mb-1">Who this path is for</h2>
              <p className="text-ink-soft leading-relaxed">{path.whoItsFor}</p>
            </div>
          </div>
        </Reveal>

        {/* Setup guide banner */}
        <Reveal>
          <div className="rounded-3xl p-6 mb-8 flex flex-col sm:flex-row sm:items-center gap-4 justify-between bg-ink text-cream">
            <div>
              <h2 className="font-display font-bold mb-1 flex items-center gap-2">
                <Footprints className="w-5 h-5 text-brand-400" />
                Never done this before?
              </h2>
              <p className="text-cream/70 text-sm leading-relaxed max-w-lg">
                The setup guide walks your actual day one: what to sign up for, what to type, and a
                copy-paste plan for week one. Plain language, no experience needed.
              </p>
            </div>
            <Link
              to={`/start/${path.id}`}
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold hover:-translate-y-0.5 transition-all"
            >
              Open the setup guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        {/* Level ladder */}
        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-3">
            The levels
          </h2>
          <p className="text-ink-soft mb-10 max-w-2xl">
            Work through them in order — each one ends with a checklist of signals that you're
            ready for the next. Don't skip; the levels build on each other.
          </p>
        </Reveal>

        <div className="relative space-y-6 mb-16">
          {path.levels.map((level: Level, i: number) => {
            const milestone = getMilestoneById(level.milestoneId)
            const ma = accent(milestone?.accent ?? path.color)
            return (
              <Reveal key={level.id} delay={i * 0.08}>
                <Link
                  to={`/level/${level.id}`}
                  className={cn(
                    'group relative block bg-cream border border-line rounded-3xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift',
                    a.glow
                  )}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-5">
                    <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-2 md:w-24 flex-shrink-0">
                      <div className={cn('w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white font-bold font-mono text-lg shadow-soft group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300', a.gradient)}>
                        {i + 1}
                      </div>
                      {milestone && (
                        <span className={cn('text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-md', ma.soft, ma.text)}>
                          {milestone.range}
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-xl font-bold mb-1 group-hover:text-brand-600 transition-colors">
                        {level.title}
                      </h3>
                      <p className="text-sm text-ink-soft mb-3 leading-relaxed">{level.description}</p>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-ink-faint">
                        <span className="flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5" /> {level.goal}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" /> {level.timeToReach}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Wallet className="w-3.5 h-3.5" /> {level.startupCost}
                        </span>
                      </div>
                    </div>

                    <div className={cn('flex-shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-r flex items-center justify-center text-white group-hover:translate-x-1 transition-transform duration-300', a.gradient)}>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>

        {/* Resources */}
        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-6">
            Tools & platforms for this path
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {path.resources.map((res, i) => (
            <Reveal key={res.name} delay={i * 0.05}>
              <a
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'group flex items-center justify-between gap-3 bg-cream border border-line rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift',
                  a.glow
                )}
              >
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wide text-ink-faint mb-1">{res.type}</div>
                  <div className="font-semibold group-hover:text-brand-600 transition-colors">{res.name}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-ink-faint group-hover:text-brand-500 transition-colors" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
