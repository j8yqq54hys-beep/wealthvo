import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getSetupGuide } from '../data/setup'
import { getPathById } from '../data/paths'
import {
  Check,
  Copy,
  CheckCircle2,
  XCircle,
  Timer,
  Footprints,
  ArrowRight,
  CalendarDays,
  Repeat2,
  ClipboardList,
  AlertTriangle,
} from 'lucide-react'
import { accent } from '../lib/colors'
import { cn } from '../lib/cn'
import Reveal from '../components/Reveal'

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard blocked — the text is selectable anyway */
    }
  }
  return (
    <button
      onClick={copy}
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors',
        copied
          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
          : 'bg-ink text-cream hover:bg-brand-600'
      )}
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}

export default function StartDetail() {
  const { pathId } = useParams()
  const guide = getSetupGuide(pathId || '')
  const path = getPathById(pathId || '')

  if (!guide || !path) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="text-5xl mb-4">🧭</div>
        <h1 className="font-display text-2xl font-bold mb-4">Guide not found</h1>
        <Link to="/start" className="text-brand-600 hover:underline font-medium">
          Back to all setup guides
        </Link>
      </div>
    )
  }

  const a = accent(path.color)
  const firstLevel = path.levels[0]

  return (
    <div>
      {/* Hero */}
      <div className={cn('relative overflow-hidden bg-gradient-to-br text-white', a.gradient)}>
        <div className="absolute inset-0 bg-dots-light opacity-60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex items-center gap-2 text-sm text-white/85 mb-8 flex-wrap">
            <Link to="/start" className="hover:text-white transition-colors">
              Setup guides
            </Link>
            <span>/</span>
            <span className="text-white font-medium">
              {path.icon} {path.title}
            </span>
          </div>

          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur text-xs font-bold uppercase tracking-wide inline-flex items-center gap-1.5">
              <Footprints className="w-3.5 h-3.5" /> Day-one setup guide
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-ink/25 backdrop-blur text-xs font-semibold inline-flex items-center gap-1.5">
              <Timer className="w-3.5 h-3.5" /> First dollar: {guide.timeToFirstDollar}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {path.title}, from zero
          </h1>
          <p className="text-white/90 text-lg leading-relaxed max-w-2xl">{guide.plainIntro}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* What you need */}
        <Reveal>
          <div className="mb-14">
            <h2 className="font-display text-2xl font-bold mb-2">What you need</h2>
            <p className="text-ink-soft mb-5">Everything here is free or borrowable. That's the point.</p>
            <div className="flex flex-wrap gap-2">
              {guide.need.map(item => (
                <span
                  key={item}
                  className={cn(
                    'px-4 py-2 rounded-xl text-sm font-medium border flex items-center gap-2',
                    a.border,
                    a.soft
                  )}
                >
                  <Check className={cn('w-4 h-4', a.text)} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Setup steps */}
        <Reveal>
          <h2 className="font-display text-2xl font-bold mb-2">Set it up (in order)</h2>
          <p className="text-ink-soft mb-8">
            Do these one at a time, top to bottom. Each step is small on purpose.
          </p>
        </Reveal>
        <ol className="space-y-5 mb-14">
          {guide.setup.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.04}>
              <li className="flex gap-5 bg-cream border border-line rounded-3xl p-6 hover:shadow-soft transition-shadow">
                <span
                  className={cn(
                    'flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-sm',
                    a.tile
                  )}
                >
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

        {/* First week */}
        <Reveal>
          <h2 className="font-display text-2xl font-bold mb-2 flex items-center gap-2.5">
            <CalendarDays className="w-6 h-6 text-brand-500" />
            Your first week, day by day
          </h2>
          <p className="text-ink-soft mb-8">
            Follow this like a checklist. If you miss a day, just continue — don't restart.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {guide.firstWeek.map((day, i) => (
            <Reveal key={day.day} delay={i * 0.04}>
              <div className="h-full bg-cream border border-line rounded-2xl p-5">
                <div className={cn('text-xs font-bold uppercase tracking-wide mb-2', a.text)}>
                  {day.day}
                </div>
                <p className="text-sm text-ink leading-relaxed">{day.action}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Routine */}
        <Reveal>
          <div className={cn('rounded-3xl border p-7 mb-14', a.border, a.soft)}>
            <h2 className="font-display text-xl font-bold mb-2 flex items-center gap-2.5">
              <Repeat2 className={cn('w-5 h-5', a.text)} />
              After week one: your routine
            </h2>
            <p className="text-sm text-ink-soft mb-5">
              The path only compounds if this rhythm becomes normal. It's less work than it looks.
            </p>
            <ul className="space-y-3">
              {guide.routine.map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink leading-relaxed">
                  <CheckCircle2 className={cn('w-4.5 h-4.5 flex-shrink-0 mt-0.5', a.text)} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Templates */}
        <Reveal>
          <h2 className="font-display text-2xl font-bold mb-2 flex items-center gap-2.5">
            <ClipboardList className="w-6 h-6 text-brand-500" />
            Copy-paste templates
          </h2>
          <p className="text-ink-soft mb-8">
            Steal these. Replace the [brackets] with your details and post it — done beats perfect.
          </p>
        </Reveal>
        <div className="space-y-5 mb-14">
          {guide.templates.map(t => (
            <Reveal key={t.label}>
              <div className="bg-cream border border-line rounded-3xl overflow-hidden">
                <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-line">
                  <div className="font-display font-bold text-sm">{t.label}</div>
                  <CopyButton text={t.body} />
                </div>
                <pre className="px-5 py-4 text-sm text-ink-soft leading-relaxed whitespace-pre-wrap font-mono">
                  {t.body}
                </pre>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Avoid */}
        <Reveal>
          <div className="rounded-3xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 p-7 mb-14">
            <h2 className="font-display text-xl font-bold mb-2 flex items-center gap-2.5 text-rose-800 dark:text-rose-300">
              <AlertTriangle className="w-5 h-5" />
              First-timer mistakes (and the fix)
            </h2>
            <p className="text-sm text-rose-900/70 dark:text-rose-300/70 mb-6">
              Every one of these feels reasonable in the moment. Every one of them costs you money
              or weeks.
            </p>
            <div className="space-y-4">
              {guide.avoid.map(item => (
                <div key={item.mistake} className="bg-cream rounded-2xl border border-rose-100 dark:border-rose-500/20 p-5">
                  <div className="font-semibold text-sm text-rose-800 dark:text-rose-300 mb-1.5 flex items-center gap-2">
                    <XCircle className="w-4 h-4 flex-shrink-0" />
                    {item.mistake}
                  </div>
                  <p className="text-sm text-ink-soft leading-relaxed pl-6">
                    <span className="font-semibold text-ink">Fix:</span> {item.fix}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Next: levels */}
        {firstLevel && (
          <Reveal>
            <div className={cn('rounded-3xl border p-7 text-center', a.border, a.soft)}>
              <h2 className="font-display text-xl font-bold mb-2">Setup done? You're at the starting line.</h2>
              <p className="text-sm text-ink-soft mb-6 max-w-md mx-auto">
                The full level guide takes over from here — strategy, pricing, and exactly how to
                know when you're ready to level up.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to={`/level/${firstLevel.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold rounded-xl shadow-[0_8px_20px_-6px_rgb(249_94_51/0.5)] hover:-translate-y-0.5 transition-all"
                >
                  Start Level 1: {firstLevel.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to={`/path/${path.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cream border border-line text-ink text-sm font-semibold rounded-xl hover:border-brand-300 transition-colors"
                >
                  All {path.title} levels
                </Link>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </div>
  )
}
