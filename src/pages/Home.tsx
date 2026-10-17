import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { paths } from '../data/paths'
import { milestones } from '../data/milestones'
import { ArrowRight, Sparkles, Map, Compass, Clock, Wallet } from 'lucide-react'
import { accent } from '../lib/colors'
import { cn } from '../lib/cn'
import { isStaticRender } from '../lib/isStatic'
import CountUp from '../components/CountUp'
import Reveal from '../components/Reveal'

const stats = [
  { icon: Compass, label: 'Income paths', value: 8, suffix: '' },
  { icon: Map, label: 'Step-by-step level guides', value: 16, suffix: '' },
  { icon: Sparkles, label: 'Milestones from $0 to wealth', value: 5, suffix: '' },
  { icon: Wallet, label: 'Needed to start', value: 0, prefix: '$' },
]

const beginnerPaths = paths.filter(p => p.difficulty === 'beginner').slice(0, 4)

const floatChips = [
  { emoji: '🧹', className: 'top-[12%] left-[6%]', rotate: '-8deg', delay: '0s' },
  { emoji: '💻', className: 'top-[18%] right-[8%]', rotate: '6deg', delay: '1.2s' },
  { emoji: '📦', className: 'bottom-[16%] left-[12%]', rotate: '5deg', delay: '0.6s' },
  { emoji: '🎬', className: 'bottom-[10%] right-[14%]', rotate: '-6deg', delay: '1.8s' },
]

export default function Home() {
  return (
    <div>
      {/* ================= Hero ================= */}
      <section className="relative overflow-hidden bg-dots">
        {/* colorful blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-orange-300/40 blur-3xl animate-blob" />
        <div
          className="pointer-events-none absolute top-10 -right-28 w-[28rem] h-[28rem] bg-violet-300/35 blur-3xl animate-blob"
          style={{ animationDelay: '-5s' }}
        />
        <div
          className="pointer-events-none absolute -bottom-32 left-1/3 w-96 h-96 bg-cyan-200/40 blur-3xl animate-blob"
          style={{ animationDelay: '-9s' }}
        />

        {/* floating emoji chips */}
        {floatChips.map(chip => (
          <div
            key={chip.emoji}
            aria-hidden
            className={cn('hidden lg:flex absolute items-center justify-center w-14 h-14 rounded-2xl bg-cream/90 border border-line shadow-soft text-2xl animate-float', chip.className)}
            style={{ ['--float-rotate' as string]: chip.rotate, animationDelay: chip.delay }}
          >
            {chip.emoji}
          </div>
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <motion.div
            initial={isStaticRender ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream border border-brand-200 text-brand-600 dark:border-brand-500/30 dark:text-brand-400 text-sm font-medium mb-8 shadow-soft"
          >
            <Sparkles className="w-4 h-4" />
            <span>Free forever. No gurus. No fluff.</span>
          </motion.div>

          <motion.h1
            initial={isStaticRender ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 text-balance"
          >
            Turn <span className="text-brand-500">$0</span> into a real income,{' '}
            <span className="bg-gradient-to-r from-brand-500 via-pink-500 to-violet-500 bg-clip-text text-transparent animate-gradient-pan">
              one level at a time
            </span>
          </motion.h1>

          <motion.p
            initial={isStaticRender ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-ink-soft max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A free, honest roadmap for building wealth from zero — with real paths, step-by-step
            guides that show you <em className="text-ink not-italic font-semibold">how</em> to level up,
            and live experiments instead of guru screenshots.
          </motion.p>

          <motion.div
            initial={isStaticRender ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/roadmap"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold rounded-2xl shadow-[0_10px_30px_-8px_rgb(249_94_51/0.55)] transition-all duration-200 flex items-center justify-center gap-2 group hover:-translate-y-0.5"
            >
              Start the Roadmap
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/paths"
              className="w-full sm:w-auto px-8 py-3.5 bg-cream border border-line hover:border-brand-300 text-ink font-medium rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft"
            >
              Explore all 8 paths
            </Link>
          </motion.div>
        </div>

        {/* marquee */}
        <div className="relative border-y border-line bg-cream/80 py-4 overflow-hidden">
          <div className="flex w-max animate-marquee gap-3">
            {[...paths, ...paths].map((p, i) => (
              <Link
                key={`${p.id}-${i}`}
                to={`/path/${p.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-paper border border-line text-sm font-medium text-ink-soft hover:text-ink hover:border-brand-300 whitespace-nowrap transition-colors"
              >
                <span>{p.icon}</span>
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= Stats ================= */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-14">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="bg-cream border border-line rounded-3xl p-6 text-center shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
                <stat.icon className="w-6 h-6 text-brand-500 mx-auto mb-3" />
                <div className="font-display text-4xl font-bold text-ink mb-1 font-mono">
                  <CountUp to={stat.value} prefix={stat.prefix ?? ''} suffix={stat.suffix ?? ''} />
                </div>
                <div className="text-sm text-ink-faint">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </section>

        {/* ================= How it works ================= */}
        <section className="py-14">
          <Reveal>
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight mb-2">How Wealthvo works</h2>
                <p className="text-ink-soft max-w-xl">
                  Five milestones. Eight paths. Every path walks through the same journey — but each
                  one climbs it differently. Here's the shape of the climb.
                </p>
              </div>
              <Link to="/roadmap" className="text-brand-600 hover:text-brand-700 font-medium text-sm inline-flex items-center gap-1.5 group">
                See the full roadmap <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-4">
            {milestones.map((m, i) => {
              const a = accent(m.accent)
              return (
                <Reveal key={m.id} delay={i * 0.1}>
                  <Link
                    to={`/roadmap#${m.id}`}
                    className={cn(
                      'block h-full bg-cream border border-line rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift group relative overflow-hidden',
                      a.glow
                    )}
                  >
                    <div className={cn('absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r', a.gradient)} />
                    <div className={cn('w-10 h-10 rounded-2xl flex items-center justify-center text-lg mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300', a.soft)}>
                      {m.icon}
                    </div>
                    <div className="font-mono text-xs font-semibold text-ink-faint mb-1">LEVEL {m.order}</div>
                    <div className="font-display font-bold text-lg mb-0.5">{m.range}</div>
                    <div className={cn('font-semibold text-sm mb-2', a.text)}>{m.title}</div>
                    <p className="text-xs text-ink-faint leading-relaxed line-clamp-3">{m.tagline}</p>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </section>

        {/* ================= First path picks (rows, not the grid from /paths) ================= */}
        <section className="py-14">
          <Reveal>
            <div className="mb-8">
              <h2 className="font-display text-3xl font-bold tracking-tight mb-2">Start with a beginner path</h2>
              <p className="text-ink-soft max-w-xl">
                Zero dollars and zero experience? These four get you to your first $100 fastest.
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {beginnerPaths.map((path, i) => {
              const a = accent(path.color)
              return (
                <Reveal key={path.id} delay={i * 0.06}>
                  <Link
                    to={`/path/${path.id}`}
                    className={cn(
                      'group flex flex-col sm:flex-row sm:items-center gap-5 bg-cream border border-line rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift',
                      a.glow
                    )}
                  >
                    <div className={cn('flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300', a.soft)}>
                      {path.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-lg mb-1 group-hover:text-brand-600 transition-colors">
                        {path.title}
                      </h3>
                      <p className="text-sm text-ink-soft line-clamp-2">{path.description}</p>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="hidden md:block text-center">
                        <div className="text-ink-faint text-xs mb-0.5 flex items-center gap-1 justify-center"><Wallet className="w-3 h-3" /> Cost</div>
                        <div className="font-mono font-semibold">{path.startupCost}</div>
                      </div>
                      <div className="hidden lg:block text-center">
                        <div className="text-ink-faint text-xs mb-0.5 flex items-center gap-1 justify-center"><Clock className="w-3 h-3" /> Timeline</div>
                        <div className="font-semibold text-xs max-w-[180px]">{path.realisticTimeline}</div>
                      </div>
                      <div className={cn('flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r flex items-center justify-center text-white group-hover:translate-x-1 transition-transform', a.gradient)}>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-14 pb-4">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-ink text-cream px-8 py-16 md:py-20 text-center bg-dots-light">
              <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-brand-500/30 blur-3xl animate-blob" />
              <div className="pointer-events-none absolute -bottom-24 -right-16 w-80 h-80 bg-violet-500/30 blur-3xl animate-blob" style={{ animationDelay: '-6s' }} />
              <h2 className="relative font-display text-3xl md:text-4xl font-bold mb-4 text-balance">
                Your first $100 is closer than you think.
              </h2>
              <p className="relative text-cream/70 mb-8 max-w-lg mx-auto">
                The roadmap takes about 10 minutes to read. The first level takes a week to beat.
                Start tonight.
              </p>
              <Link
                to="/roadmap"
                className="relative inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-brand-400 to-brand-600 text-white font-semibold rounded-2xl shadow-[0_10px_30px_-8px_rgb(249_94_51/0.6)] transition-all duration-200 hover:-translate-y-0.5 group"
              >
                View the full Roadmap
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  )
}
