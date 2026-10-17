/**
 * One accent color per path / milestone so the site feels alive instead of
 * one neon accent repeated everywhere. Each key maps to Tailwind utility
 * classes (built-in ramps) for text, tile backgrounds, borders and gradients.
 * Every token carries a dark: variant so the whole palette follows the theme.
 */

export interface AccentStyle {
  /** Solid text color, e.g. for headings on tinted backgrounds */
  text: string
  /** Strong background for icon tiles / badges */
  tile: string
  /** Soft page-tint background */
  soft: string
  /** Border color on hover / emphasis */
  border: string
  /** Two-stop gradient for chips, buttons and artwork */
  gradient: string
  /** Dot / bullet marker */
  dot: string
  /** Hover shadow tinted in the accent color */
  glow: string
}

export const accents: Record<string, AccentStyle> = {
  orange: {
    text: 'text-orange-600 dark:text-orange-400',
    tile: 'bg-orange-500 text-white',
    soft: 'bg-orange-50 dark:bg-orange-500/10',
    border: 'border-orange-200 dark:border-orange-500/20',
    gradient: 'from-orange-400 to-amber-500',
    dot: 'bg-orange-500',
    glow: 'hover:shadow-[0_18px_40px_-12px_rgb(249_115_22/0.45)]',
  },
  violet: {
    text: 'text-violet-600 dark:text-violet-400',
    tile: 'bg-violet-500 text-white',
    soft: 'bg-violet-50 dark:bg-violet-500/10',
    border: 'border-violet-200 dark:border-violet-500/20',
    gradient: 'from-violet-500 to-purple-500',
    dot: 'bg-violet-500',
    glow: 'hover:shadow-[0_18px_40px_-12px_rgb(139_92_246/0.45)]',
  },
  cyan: {
    text: 'text-cyan-600 dark:text-cyan-400',
    tile: 'bg-cyan-500 text-white',
    soft: 'bg-cyan-50 dark:bg-cyan-500/10',
    border: 'border-cyan-200 dark:border-cyan-500/20',
    gradient: 'from-cyan-400 to-sky-500',
    dot: 'bg-cyan-500',
    glow: 'hover:shadow-[0_18px_40px_-12px_rgb(6_182_212/0.45)]',
  },
  emerald: {
    text: 'text-emerald-600 dark:text-emerald-400',
    tile: 'bg-emerald-500 text-white',
    soft: 'bg-emerald-50 dark:bg-emerald-500/10',
    border: 'border-emerald-200 dark:border-emerald-500/20',
    gradient: 'from-emerald-400 to-teal-500',
    dot: 'bg-emerald-500',
    glow: 'hover:shadow-[0_18px_40px_-12px_rgb(16_185_129/0.45)]',
  },
  pink: {
    text: 'text-pink-600 dark:text-pink-400',
    tile: 'bg-pink-500 text-white',
    soft: 'bg-pink-50 dark:bg-pink-500/10',
    border: 'border-pink-200 dark:border-pink-500/20',
    gradient: 'from-pink-400 to-rose-500',
    dot: 'bg-pink-500',
    glow: 'hover:shadow-[0_18px_40px_-12px_rgb(236_72_153/0.4)]',
  },
  amber: {
    text: 'text-amber-600 dark:text-amber-400',
    tile: 'bg-amber-500 text-white',
    soft: 'bg-amber-50 dark:bg-amber-500/10',
    border: 'border-amber-200 dark:border-amber-500/20',
    gradient: 'from-amber-400 to-yellow-500',
    dot: 'bg-amber-500',
    glow: 'hover:shadow-[0_18px_40px_-12px_rgb(245_158_11/0.45)]',
  },
  rose: {
    text: 'text-rose-600 dark:text-rose-400',
    tile: 'bg-rose-500 text-white',
    soft: 'bg-rose-50 dark:bg-rose-500/10',
    border: 'border-rose-200 dark:border-rose-500/20',
    gradient: 'from-rose-400 to-red-500',
    dot: 'bg-rose-500',
    glow: 'hover:shadow-[0_18px_40px_-12px_rgb(244_63_94/0.4)]',
  },
  blue: {
    text: 'text-blue-600 dark:text-blue-400',
    tile: 'bg-blue-500 text-white',
    soft: 'bg-blue-50 dark:bg-blue-500/10',
    border: 'border-blue-200 dark:border-blue-500/20',
    gradient: 'from-blue-400 to-indigo-500',
    dot: 'bg-blue-500',
    glow: 'hover:shadow-[0_18px_40px_-12px_rgb(59_130_246/0.45)]',
  },
}

export type AccentKey = keyof typeof accents

export const accent = (key: string): AccentStyle => accents[key] ?? accents.orange
