import { Link } from 'react-router-dom'
import { paths, getPathById } from '../data/paths'
import { setupGuides } from '../data/setup'
import { ArrowRight, Footprints, Timer } from 'lucide-react'
import { accent } from '../lib/colors'
import { cn } from '../lib/cn'
import Reveal from '../components/Reveal'

export default function Start() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-6">
          <Footprints className="w-4 h-4" />
          Zero experience needed
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Start here — day one, click by click
        </h1>
        <p className="text-lg text-ink-soft max-w-2xl">
          These guides are for your actual first day: what to sign up for, what to type, what to
          post. Plain language, copy-paste templates, and a day-by-day plan for week one. No
          experience, no money down.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {setupGuides.map((guide, i) => {
          const path = getPathById(guide.pathId)
          if (!path) return null
          const a = accent(path.color)
          return (
            <Reveal key={guide.pathId} delay={i * 0.05}>
              <Link
                to={`/start/${guide.pathId}`}
                className={cn(
                  'group relative h-full flex flex-col bg-cream border border-line rounded-3xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift',
                  a.glow
                )}
              >
                <div className={cn('absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r', a.gradient)} />
                <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300', a.soft)}>
                  {path.icon}
                </div>
                <h2 className="font-display text-lg font-bold mb-2 group-hover:text-brand-600 transition-colors">
                  {path.title}
                </h2>
                <p className="text-sm text-ink-soft leading-relaxed mb-5 flex-1">
                  {guide.plainIntro}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-paper border border-line text-[11px] font-bold text-ink-soft">
                    <Timer className="w-3 h-3" />
                    {guide.timeToFirstDollar}
                  </span>
                  <span className={cn('flex items-center gap-1.5 text-sm font-semibold', a.text)}>
                    Open guide
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )
        })}
      </div>

      <Reveal>
        <div className="mt-12 rounded-3xl bg-cream border border-line p-6 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
          <p className="text-ink-soft max-w-xl">
            <strong className="text-ink font-semibold">Not sure which one?</strong> Beginner rule
            of thumb: need cash fast and like working with people → Local Services. Prefer a
            screen and zero dollars → Online Gigs. The guides keep it honest either way.
          </p>
          <Link
            to="/paths"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-cream rounded-xl text-sm font-semibold hover:bg-brand-600 transition-colors"
          >
            Compare all 8 paths <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Reveal>
    </div>
  )
}
