import { resources } from '../data/resources'
import { Code, Gift, Newspaper, BookOpen, Users, ExternalLink } from 'lucide-react'
import { cn } from '../lib/cn'
import Reveal from '../components/Reveal'

const typeConfig = {
  tool: { icon: Code, classes: 'bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400' },
  platform: { icon: Gift, classes: 'bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400' },
  course: { icon: BookOpen, classes: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400' },
  book: { icon: BookOpen, classes: 'bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400' },
  community: { icon: Users, classes: 'bg-pink-100 text-pink-600 dark:bg-pink-500/15 dark:text-pink-400' },
  newsletter: { icon: Newspaper, classes: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-400' },
}

const costConfig = {
  free: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  paid: 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300',
  freemium: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
}

export default function Resources() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
          The toolbox
        </h1>
        <p className="text-lg text-ink-soft max-w-2xl">
          Every tool, platform, and learning resource we actually recommend. Free first —
          because the best way to build wealth isn't to buy your way in.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {resources.map((res, i) => {
          const config = typeConfig[res.type] ?? typeConfig.tool
          const Icon = config.icon
          return (
            <Reveal key={res.id} delay={(i % 3) * 0.06}>
              <a
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full flex flex-col bg-cream border border-line rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift hover:border-brand-200 dark:hover:border-brand-500/30"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={cn('w-11 h-11 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300', config.classes)}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={cn('px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wide', costConfig[res.cost])}>
                    {res.cost}
                  </span>
                </div>
                <h3 className="font-display font-bold mb-1.5 group-hover:text-brand-600 transition-colors">
                  {res.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed mb-4 flex-1">{res.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {res.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-paper border border-line rounded-md text-ink-faint text-[11px] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ExternalLink className="w-4 h-4 text-ink-faint group-hover:text-brand-500 transition-colors flex-shrink-0" />
                </div>
              </a>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
