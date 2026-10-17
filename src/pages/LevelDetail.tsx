import { useParams, Link } from 'react-router-dom'
import { getLevelContext } from '../data/paths'
import { getMilestoneById } from '../data/milestones'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  Wallet,
  Target,
  Sparkles,
  ExternalLink,
} from 'lucide-react'
import { accent } from '../lib/colors'
import { cn } from '../lib/cn'
import Reveal from '../components/Reveal'

export default function LevelDetail() {
  const { levelId } = useParams()
  const ctx = getLevelContext(levelId || '')

  if (!ctx) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="text-5xl mb-4">🗺️</div>
        <h1 className="font-display text-2xl font-bold mb-4">Level not found</h1>
        <Link to="/roadmap" className="text-brand-600 hover:underline font-medium">
          Back to the roadmap
        </Link>
      </div>
    )
  }

  const { path, level, index, prev, next } = ctx
  const a = accent(path.color)
  const milestone = getMilestoneById(level.milestoneId)

  return (
    <div>
      {/* Hero */}
      <div className={cn('relative overflow-hidden bg-gradient-to-br text-white', a.gradient)}>
        <div className="absolute inset-0 bg-dots-light opacity-60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex items-center gap-2 text-sm text-white/85 mb-8 flex-wrap">
            <Link to="/paths" className="hover:text-white transition-colors">Paths</Link>
            <span>/</span>
            <Link to={`/path/${path.id}`} className="hover:text-white transition-colors flex items-center gap-1.5">
              {path.icon} {path.title}
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Level {index + 1}</span>
          </div>

          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur text-xs font-bold uppercase tracking-wide">
              Level {index + 1} of {path.levels.length}
            </span>
            {milestone && (
              <Link
                to={`/roadmap#${milestone.id}`}
                className="px-3 py-1.5 rounded-lg bg-ink/25 backdrop-blur text-xs font-semibold hover:bg-ink/40 transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3 h-3" /> Milestone: {milestone.range}
              </Link>
            )}
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {level.title}
          </h1>
          <p className="text-white/90 text-lg leading-relaxed max-w-2xl">{level.description}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Meta */}
        <Reveal>
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <div className={cn('rounded-2xl border p-5', a.border, a.soft)}>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-faint mb-2">
                <Target className={cn('w-3.5 h-3.5', a.text)} /> Goal
              </div>
              <div className="font-medium text-sm leading-relaxed">{level.goal}</div>
            </div>
            <div className={cn('rounded-2xl border p-5', a.border, a.soft)}>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-faint mb-2">
                <Clock className={cn('w-3.5 h-3.5', a.text)} /> Time to reach
              </div>
              <div className="font-medium text-sm">{level.timeToReach}</div>
            </div>
            <div className={cn('rounded-2xl border p-5', a.border, a.soft)}>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-faint mb-2">
                <Wallet className={cn('w-3.5 h-3.5', a.text)} /> Startup cost
              </div>
              <div className="font-medium text-sm font-mono">{level.startupCost}</div>
            </div>
          </div>
        </Reveal>

        {/* How to do it */}
        <Reveal>
          <h2 className="font-display text-2xl font-bold mb-2">How to do it</h2>
          <p className="text-ink-soft mb-8">
            Not a checklist — the actual moves, in order. Each one is small enough to finish in a day or a weekend.
          </p>
        </Reveal>
        <ol className="space-y-5 mb-14">
          {level.howToWin.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05}>
              <li className="flex gap-5 bg-cream border border-line rounded-3xl p-6 hover:shadow-soft transition-shadow">
                <span className={cn('flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-sm', a.tile)}>
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display font-bold mb-1.5">{step.title}</h3>
                  <p className="text-ink-soft leading-relaxed text-[15px]">{step.detail}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        {/* Ready to level up */}
        <Reveal>
          <div className="rounded-3xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 p-7 mb-8">
            <h2 className="font-display text-xl font-bold mb-2 flex items-center gap-2.5 text-emerald-800 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              You're ready to level up when…
            </h2>
            <p className="text-sm text-emerald-900/70 dark:text-emerald-300/70 mb-5">
              The whole point of a level is knowing when you've beaten it. Check these honestly —
              if they're not true yet, keep grinding this level.
            </p>
            <ul className="space-y-3">
              {level.readyToLevelUp.map(signal => (
                <li key={signal} className="flex items-start gap-3 text-sm text-ink leading-relaxed">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  {signal}
                </li>
              ))}
            </ul>
            {next && (
              <Link
                to={`/level/${next.id}`}
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-colors group"
              >
                Next level: {next.title}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </Reveal>

        {/* What NOT to do */}
        <Reveal>
          <div className="rounded-3xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 p-7 mb-14">
            <h2 className="font-display text-xl font-bold mb-2 flex items-center gap-2.5 text-rose-800 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              What NOT to do at this level
            </h2>
            <p className="text-sm text-rose-900/70 dark:text-rose-300/70 mb-6">
              These are the traps that keep people stuck. Every one of them feels reasonable in the moment.
            </p>
            <div className="space-y-4">
              {level.traps.map(trap => (
                <div key={trap.mistake} className="bg-cream rounded-2xl border border-rose-100 dark:border-rose-500/20 p-5">
                  <div className="font-semibold text-sm text-rose-800 dark:text-rose-300 mb-1.5 flex items-center gap-2">
                    <XCircle className="w-4 h-4 flex-shrink-0" />
                    {trap.mistake}
                  </div>
                  <p className="text-sm text-ink-soft leading-relaxed pl-6">{trap.why}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Skills */}
        <Reveal>
          <div className="mb-14">
            <h2 className="font-display text-xl font-bold mb-4">Skills you'll sharpen</h2>
            <div className="flex flex-wrap gap-2">
              {level.keySkills.map(skill => (
                <span key={skill} className={cn('px-4 py-2 rounded-xl text-sm font-medium border', a.border, a.soft, a.text)}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Resources */}
        {level.resources.length > 0 && (
          <Reveal>
            <div className="mb-14">
              <h2 className="font-display text-xl font-bold mb-4">Tools for this level</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {level.resources.map(res => {
                  const body = (
                    <>
                      <div className="font-semibold text-sm group-hover:text-brand-600 transition-colors">{res.name}</div>
                      {res.note && <div className="text-xs text-ink-faint mt-0.5">{res.note}</div>}
                    </>
                  )
                  return res.url ? (
                    <a
                      key={res.name}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn('group bg-cream border border-line rounded-2xl p-4 flex items-center justify-between gap-3 transition-all hover:-translate-y-0.5 hover:shadow-soft', a.border)}
                    >
                      <div>{body}</div>
                      <ExternalLink className="w-4 h-4 text-ink-faint group-hover:text-brand-500 transition-colors flex-shrink-0" />
                    </a>
                  ) : (
                    <div key={res.name} className="bg-cream border border-line rounded-2xl p-4">{body}</div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        )}

        {/* Prev / next */}
        <Reveal>
          <div className="flex flex-col sm:flex-row gap-3 pt-8 border-t border-line">
            {prev ? (
              <Link
                to={`/level/${prev.id}`}
                className="flex-1 group bg-cream border border-line rounded-2xl p-5 hover:shadow-soft transition-all flex items-center gap-3"
              >
                <ArrowLeft className="w-4 h-4 text-ink-faint group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-xs text-ink-faint font-semibold uppercase tracking-wide">Previous level</div>
                  <div className="font-semibold text-sm">{prev.title}</div>
                </div>
              </Link>
            ) : (
              <Link
                to={`/path/${path.id}`}
                className="flex-1 group bg-cream border border-line rounded-2xl p-5 hover:shadow-soft transition-all flex items-center gap-3"
              >
                <ArrowLeft className="w-4 h-4 text-ink-faint group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-xs text-ink-faint font-semibold uppercase tracking-wide">All levels</div>
                  <div className="font-semibold text-sm">{path.icon} {path.title}</div>
                </div>
              </Link>
            )}
            {next ? (
              <Link
                to={`/level/${next.id}`}
                className="flex-1 group bg-cream border border-line rounded-2xl p-5 hover:shadow-soft transition-all text-right flex items-center justify-end gap-3"
              >
                <div>
                  <div className="text-xs text-ink-faint font-semibold uppercase tracking-wide">Next level</div>
                  <div className="font-semibold text-sm">{next.title}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-ink-faint group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <Link
                to={`/roadmap#${level.milestoneId}`}
                className="flex-1 group bg-ink text-cream rounded-2xl p-5 hover:bg-brand-600 transition-colors text-right flex items-center justify-end gap-3"
              >
                <div>
                  <div className="text-xs text-cream/60 font-semibold uppercase tracking-wide">You beat this path</div>
                  <div className="font-semibold text-sm">Continue the roadmap →</div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  )
}
