import React, { useCallback, useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { DEFAULT_TEXTS, LANGS, Lang, flattenTexts } from '../../lib/translations';
import { humanize, sectionLabel } from './sections';

const PAGE_SIZE = 50;
const LANG_LABEL: Record<Lang, string> = { ka: 'ქართული', en: 'English' };
const DEFAULTS: Record<Lang, Record<string, string>> = { ka: flattenTexts(DEFAULT_TEXTS.ka), en: flattenTexts(DEFAULT_TEXTS.en) };

interface HistoryRow {
  id: number;
  key: string;
  old_ka: string | null;
  new_ka: string | null;
  old_en: string | null;
  new_en: string | null;
  changed_by_email: string | null;
  changed_at: string;
}

const formatTime = (iso: string) =>
  new Date(iso).toLocaleString(undefined, { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

const describeKey = (key: string) => {
  const [section, ...rest] = key.split('.');
  return rest.length ? `${sectionLabel(section)} › ${humanize(rest.join('.'))}` : sectionLabel('_general');
};

const HistoryView: React.FC<{ onOpenText: (key: string) => void }> = ({ onOpenText }) => {
  const [rows, setRows] = useState<HistoryRow[]>([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState('');

  const load = useCallback(async (from: number, search: string) => {
    if (!supabase) return;
    setLoading(true);
    let request = supabase
      .from('translation_history')
      .select('id, key, old_ka, new_ka, old_en, new_en, changed_by_email, changed_at')
      .order('changed_at', { ascending: false })
      .range(from, from + PAGE_SIZE - 1);
    const s = search.trim().replace(/[%,()]/g, '');
    if (s) request = request.or(`key.ilike.%${s}%,changed_by_email.ilike.%${s}%,new_ka.ilike.%${s}%,new_en.ilike.%${s}%`);
    const { data, error } = await request;
    if (error) {
      setError(error.message);
    } else {
      setError('');
      setRows((prev) => (from === 0 ? data : [...prev, ...data]));
      setHasMore(data.length === PAGE_SIZE);
    }
    setLoading(false);
  }, []);

  // Debounced reload when the filter changes
  useEffect(() => {
    const id = window.setTimeout(() => load(0, filter), 300);
    return () => window.clearTimeout(id);
  }, [filter, load]);

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-black">Change history</h2>
          <p className="text-sm text-[#616f89] dark:text-[#9ea7b8]">Every text change made in this panel, newest first.</p>
        </div>
        <label className="flex items-center gap-2 h-11 px-3 rounded-xl bg-white dark:bg-[#1a2133] border border-[#f0f2f4] dark:border-[#2a303c] focus-within:ring-2 focus-within:ring-primary sm:w-80">
          <span className="material-symbols-outlined text-[#616f89]">filter_list</span>
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter by text, key or person…"
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm p-0"
          />
        </label>
      </div>

      {error && <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-sm">Could not load the history: {error}</div>}

      {!loading && rows.length === 0 && !error && (
        <div className="text-center py-20 text-[#616f89] dark:text-[#9ea7b8]">
          <span className="material-symbols-outlined text-5xl mb-2 block">history</span>
          {filter ? 'No changes match this filter.' : 'No changes yet.'}
        </div>
      )}

      {rows.map((row) => {
        const restored = row.new_ka === null && row.new_en === null;
        const changedLangs = LANGS.filter((l) => row[`old_${l}`] !== row[`new_${l}`]);
        return (
          <div key={row.id} className="bg-white dark:bg-[#1a2133] rounded-xl border border-[#f0f2f4] dark:border-[#2a303c] p-4 flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="font-semibold">{row.changed_by_email ?? 'Unknown user'}</span>
              <span className="text-[#616f89] dark:text-[#9ea7b8]">{formatTime(row.changed_at)}</span>
              {restored && (
                <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-gray-100 dark:bg-[#2a303c] text-[#616f89] dark:text-[#9ea7b8]">Restored original</span>
              )}
              <button
                onClick={() => onOpenText(row.key)}
                className="ml-auto flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                title="Open this text in the editor"
              >
                {describeKey(row.key)} <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            {changedLangs.map((lang) => {
              const before = row[`old_${lang}`] ?? DEFAULTS[lang][row.key] ?? '';
              const after = row[`new_${lang}`] ?? DEFAULTS[lang][row.key] ?? '';
              return (
                <div key={lang} className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wide text-[#616f89] dark:text-[#9ea7b8]">{LANG_LABEL[lang]}</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="px-3 py-2 rounded-lg bg-red-50 dark:bg-red-900/15 text-red-900 dark:text-red-200 whitespace-pre-wrap break-words">
                      <span className="block text-[10px] font-bold uppercase opacity-60 mb-0.5">Before{row[`old_${lang}`] === null ? ' (original)' : ''}</span>
                      {before || <em className="opacity-60">(empty)</em>}
                    </div>
                    <div className="px-3 py-2 rounded-lg bg-green-50 dark:bg-green-900/15 text-green-900 dark:text-green-200 whitespace-pre-wrap break-words">
                      <span className="block text-[10px] font-bold uppercase opacity-60 mb-0.5">After{row[`new_${lang}`] === null ? ' (original)' : ''}</span>
                      {after || <em className="opacity-60">(empty)</em>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}

      {loading && (
        <div className="flex justify-center py-8">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      )}
      {hasMore && !loading && (
        <button
          onClick={() => load(rows.length, filter)}
          className="self-center px-6 h-11 rounded-xl text-sm font-semibold bg-white dark:bg-[#1a2133] border border-[#f0f2f4] dark:border-[#2a303c] hover:border-primary transition-colors"
        >
          Load older changes
        </button>
      )}
    </div>
  );
};

export default HistoryView;
