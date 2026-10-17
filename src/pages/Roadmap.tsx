import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import { milestones } from '../data/milestones'
import { getPathById } from '../data/paths'
import { ArrowRight, CheckCircle2, XCircle, Clock, Map as MapIcon } from 'lucide-react'
import { accent } from '../lib/colors'
import { cn } from '../lib/cn'
import Reveal from '../components/Reveal'

export default function Roadmap() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.75', 'end 0.6'],
  })
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <Reveal>
        <div className="max-w-2xl mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6">
            <MapIcon className="w-4 h-4" />
            The long game
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            The Money Roadmap — how you actually level up
          </h1>
          <p className="text-lg text-ink-soft leading-relaxed">
            Every path climbs the same five milestones. This page is the honest version of that
            climb: what each level is really about, <strong className="text-ink font-semibold">how</strong> you
            get through it, how you know you're ready for the next one, and the mistakes that keep
            people stuck.
          </p>
        </div>
      </Reveal>

      {/* Milestone timeline */}
      <div ref={timelineRef} className="relative mt-16">
        {/* the line that draws itself as you scroll */}
        <div className="absolute left-[22px] md:left-1/2 top-2 bottom-2 w-1 bg-line rounded-full overflow-hidden md:-translate-x-1/2">
          <motion.div
            className="absolute inset-0 origin-top bg-gradient-to-b from-orange-400 via-cyan-400 to-violet-500 rounded-full"
            style={{ scaleY: lineScale }}
          />
        </div>

        <div className="space-y-14 md:space-y-20">
          {milestones.map((m) => {
            const a = accent(m.accent)
            const leftSide = m.order % 2 === 1
            return (
              <div key={m.id} id={m.id} className="relative scroll-mt-24">
                {/* node */}
                <div
                  className={cn(
                    'absolute left-[22px] md:left-1/2 top-6 -translate-x-1/2 z-10 w-11 h-11 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white text-lg shadow-lift',
                    a.gradient
                  )}
                >
                  {m.icon}
                </div>

                <div
                  className={cn(
                    'pl-16 md:pl-0 md:w-[calc(50%-3rem)]',
                    leftSide ? 'md:mr-auto' : 'md:ml-auto'
                  )}
                >
                  <Reveal>
                    <article className={cn('group bg-cream border border-line rounded-3xl overflow-hidden shadow-soft hover:shadow-lift transition-shadow duration-300', a.glow)}>
                      {/* colored header band */}
                      <div className={cn('bg-gradient-to-r px-7 py-6 text-white', a.gradient)}>
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="text-xs font-bold tracking-widest uppercase opacity-80">
                              Milestone {m.order}
                            </div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold mt-1">
                              {m.range}
                            </h2>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold">{m.title}</div>
                            <div className="text-xs opacity-80 flex items-center gap-1 justify-end mt-1">
                              <Clock className="w-3 h-3" /> {m.timeToReach}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-7">
                        <p className="text-ink-soft leading-relaxed mb-8">{m.intro}</p>

                        {/* How you get there */}
                        <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                          <span className={cn('w-7 h-7 rounded-lg flex items-center justify-center', a.tile)}>
                            <span className="text-xs font-bold font-mono">{m.order}</span>
                          </span>
                          How you get there
                        </h3>
                        <ol className="space-y-4 mb-8">
                          {m.howToGetThere.map((step, i) => (
                            <li key={step.title} className="flex gap-4">
                              <span className={cn('flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono', a.soft, a.text)}>
                                {i + 1}
                              </span>
                              <div>
                                <div className="font-semibold text-sm mb-1">{step.title}</div>
                                <p className="text-sm text-ink-soft leading-relaxed">{step.detail}</p>
                              </div>
                            </li>
                          ))}
                        </ol>

                        <div className="grid sm:grid-cols-2 gap-6">
                          {/* Ready to level up */}
                          <div className={cn('rounded-2xl p-5 border', a.border, a.soft)}>
                            <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
                              <CheckCircle2 className={cn('w-4 h-4', a.text)} />
                              You're ready to level up when…
                            </h4>
                            <ul className="space-y-2">
                              {m.signsYoureReady.map(s => (
                                <li key={s} className="text-xs text-ink-soft leading-relaxed flex gap-2">
                                  <span className={cn('mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0', a.dot)} />
                                  {s}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* What NOT to do */}
                          <div className="rounded-2xl p-5 bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20">
                            <h4 className="font-bold text-sm mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                              <XCircle className="w-4 h-4" />
                              What NOT to do here
                            </h4>
                            <ul className="space-y-2.5">
                              {m.whatNotToDo.map(t => (
                                <li key={t.mistake}>
                                  <div className="text-xs font-semibold text-rose-800 dark:text-rose-300">{t.mistake}</div>
                                  <p className="text-xs text-ink-soft leading-relaxed mt-0.5">{t.why}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* relevant paths */}
                        <div className="mt-7 pt-5 border-t border-line flex flex-wrap items-center gap-2">
                          <span className="text-xs font-semibold text-ink-faint mr-1">Paths that climb this level:</span>
                          {m.pathIds.map(id => {
                            const p = getPathById(id)
                            if (!p) return null
                            return (
                              <Link
                                key={id}
                                to={`/path/${id}`}
                                className={cn(
                                  'px-3 py-1.5 rounded-full border text-xs font-medium transition-all hover:-translate-y-0.5',
                                  a.border,
                                  'bg-cream hover:shadow-soft'
                                )}
                              >
                                {p.icon} {p.title}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Outro */}
      <Reveal>
        <div className="mt-20 text-center max-w-xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-3">Now pick your vehicle</h2>
          <p className="text-ink-soft mb-6">
            The milestones are the climb. The paths are how you climb it — each with its own
            step-by-step level guides.
          </p>
          <Link
            to="/paths"
            className="inline-flex items-center gap-2 px-7 py-3 bg-ink text-cream font-semibold rounded-2xl hover:bg-brand-600 transition-colors group"
          >
            Explore all 8 paths <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Reveal>
    </div>
  )
}
