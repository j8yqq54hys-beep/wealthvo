import { createClient, type SupabaseClient } from '@supabase/supabase-js'

/**
 * The community goes live as soon as two env vars exist at build time:
 *   VITE_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
 *   VITE_SUPABASE_ANON_KEY=your-anon-public-key
 * Without them the feed runs in local beta mode (per-browser storage).
 * The anon key is public by design — row-level security policies in
 * supabase/schema.sql control what it can do.
 */

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

export const isSupabaseConfigured = Boolean(url && anonKey)

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url as string, anonKey as string)
  : null
