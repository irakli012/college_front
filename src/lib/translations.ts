import type { i18n as I18n } from 'i18next';
import en from '../locales/en.json';
import ka from '../locales/ka.json';

const supabaseConfigured = Boolean(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY);

export type Lang = 'ka' | 'en';
export const LANGS: Lang[] = ['ka', 'en'];

// Built-in texts, shipped with the site. Edits in the admin panel override these.
export const DEFAULT_TEXTS: Record<Lang, Record<string, unknown>> = { ka, en };

export interface TextOverride {
  key: string;
  ka: string | null;
  en: string | null;
}

const CACHE_KEY = 'text_overrides_v1';

/** Flattens nested texts to { 'home.heroTitle': '...', 'programs.it.roles.0': '...' }. */
export function flattenTexts(obj: unknown, prefix = '', out: Record<string, string> = {}): Record<string, string> {
  if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) flattenTexts(v, prefix ? `${prefix}.${k}` : k, out);
  } else if (typeof obj === 'string') {
    out[prefix] = obj;
  }
  return out;
}

// Only replaces keys that exist in the built-in texts, so stale rows can't add junk.
function setExisting(target: Record<string, unknown>, key: string, value: string) {
  const parts = key.split('.');
  let node: any = target;
  for (const part of parts.slice(0, -1)) {
    if (!node || typeof node !== 'object' || !(part in node)) return;
    node = node[part];
  }
  const last = parts[parts.length - 1];
  if (node && typeof node === 'object' && typeof node[last] === 'string') node[last] = value;
}

export function applyOverrides(i18n: I18n, rows: TextOverride[]) {
  for (const lang of LANGS) {
    const merged = structuredClone(DEFAULT_TEXTS[lang]);
    for (const row of rows) {
      const value = row[lang];
      if (value != null) setExisting(merged, row.key, value);
    }
    i18n.addResourceBundle(lang, 'translation', merged, true, true);
  }
}

function readCache(): TextOverride[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeCache(rows: TextOverride[]) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(rows));
  } catch {
    // Storage unavailable (private mode etc.) - the site still works without the cache.
  }
}

export async function fetchOverrides(): Promise<TextOverride[]> {
  // Loaded on demand so the Supabase library isn't part of the first page load.
  const { supabase } = await import('./supabase');
  if (!supabase) return [];
  const { data, error } = await supabase.from('translation_overrides').select('key, ka, en');
  if (error) throw error;
  return data ?? [];
}

/** Applies cached edits immediately, then refreshes them from Supabase in the background. */
export function loadOverrides(i18n: I18n) {
  const cached = readCache();
  if (cached) applyOverrides(i18n, cached);
  if (!supabaseConfigured) return;
  fetchOverrides()
    .then((rows) => {
      applyOverrides(i18n, rows);
      writeCache(rows);
    })
    .catch((err) => console.warn('Could not load edited texts, using built-in ones.', err));
}
