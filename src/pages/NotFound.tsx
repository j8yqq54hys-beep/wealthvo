import { Link } from 'react-router-dom'
import { Compass, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute top-10 -left-20 w-80 h-80 bg-orange-300/30 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-200/40 blur-3xl animate-blob" style={{ animationDelay: '-7s' }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
        <div className="text-7xl mb-6 animate-float">🧭</div>
        <h1 className="font-display text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-brand-500 via-pink-500 to-violet-500 bg-clip-text text-transparent animate-gradient-pan">
          404
        </h1>
        <p className="text-lg text-ink-soft mb-10 max-w-md mx-auto">
          This page doesn't exist — but your first $100 still can.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-7 py-3 bg-ink text-cream font-semibold rounded-2xl hover:bg-brand-600 transition-colors group"
        >
          <Compass className="w-4 h-4" />
          Back to the roadmap
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
