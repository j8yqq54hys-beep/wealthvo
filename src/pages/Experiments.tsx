import { experiments } from '../data/experiments'
import { CheckCircle, XCircle, Clock, DollarSign, CalendarDays, Lightbulb } from 'lucide-react'
import { cn } from '../lib/cn'
import Reveal from '../components/Reveal'

const statusConfig = {
  success: {
    icon: CheckCircle,
    badge: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/20',
    bar: 'bg-gradient-to-b from-emerald-400 to-emerald-500',
    label: 'Worked',
  },
  failed: {
    icon: XCircle,
    badge: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-500/15 dark:text-rose-300 dark:border-rose-500/20',
    bar: 'bg-gradient-to-b from-rose-400 to-rose-500',
    label: 'Failed',
  },
  'in-progress': {
    icon: Clock,
    badge: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/20',
    bar: 'bg-gradient-to-b from-amber-400 to-amber-500',
    label: 'In progress',
  },
  pending: {
    icon: Clock,
    badge: 'bg-paper text-ink-soft border-line',
    bar: 'bg-gradient-to-b from-ink-faint to-ink-faint',
    label: 'Pending',
  },
}

export default function Experiments() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-6">
          <DollarSign className="w-4 h-4" />
          Built in public
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Live experiments
        </h1>
        <p className="text-lg text-ink-soft max-w-2xl">
          We run the plays in the roadmap ourselves and publish what happens — the money, the
          mistakes, the whole thing. Real numbers or it didn't happen.
        </p>
      </div>

      <div className="relative">
        {/* timeline line */}
        <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-line rounded-full hidden sm:block" />

        <div className="space-y-8">
          {experiments.map((exp, i) => {
            const config = statusConfig[exp.status]
            const StatusIcon = config.icon
            return (
              <Reveal key={exp.id} delay={i * 0.06}>
                <article className="relative sm:pl-20">
                  {/* node */}
                  <div className={cn('hidden sm:flex absolute left-0 top-6 w-14 h-14 rounded-2xl items-center justify-center text-white shadow-lift', config.bar)}>
                    <StatusIcon className="w-6 h-6" />
                  </div>

                  <div className="bg-cream border border-line rounded-3xl overflow-hidden hover:shadow-lift transition-shadow duration-300">
                    <div className={cn('h-1.5', config.bar)} />
                    <div className="p-6 md:p-7">
                      <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                        <div>
                          <h2 className="font-display text-xl font-bold mb-2">{exp.title}</h2>
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border', config.badge)}>
                              <StatusIcon className="w-3 h-3" />
                              {config.label}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs text-ink-faint">
                              <CalendarDays className="w-3.5 h-3.5" />
                              {new Date(exp.date + 'T00:00:00').toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </span>
                          </div>
                        </div>
                        {exp.income > 0 && (
                          <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-display font-bold text-xl font-mono">
                            <DollarSign className="w-5 h-5" />
                            {exp.income.toLocaleString()}
                          </div>
                        )}
                      </div>

                      <p className="text-ink-soft text-sm leading-relaxed mb-5">{exp.description}</p>

                      <div className="grid sm:grid-cols-2 gap-3 mb-5">
                        <div className="bg-paper rounded-2xl p-4 border border-line">
                          <div className="text-xs font-bold uppercase tracking-wide text-ink-faint mb-1.5">What we did</div>
                          <div className="text-sm leading-relaxed">{exp.whatIDid}</div>
                        </div>
                        <div className="bg-paper rounded-2xl p-4 border border-line">
                          <div className="text-xs font-bold uppercase tracking-wide text-ink-faint mb-1.5">Results</div>
                          <div className="text-sm leading-relaxed">{exp.results}</div>
                        </div>
                      </div>

                      {exp.lessons.length > 0 && (
                        <div className="rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 p-4">
                          <div className="text-xs font-bold uppercase tracking-wide text-amber-700 dark:text-amber-300 mb-2 flex items-center gap-1.5">
                            <Lightbulb className="w-3.5 h-3.5" /> Lessons
                          </div>
                          <ul className="space-y-1.5">
                            {exp.lessons.map(lesson => (
                              <li key={lesson} className="text-sm text-ink-soft flex items-start gap-2">
                                <span className="text-amber-500 mt-0.5">→</span>
                                {lesson}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </div>
  )
}
