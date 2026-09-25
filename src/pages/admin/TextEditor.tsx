import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import i18n from '../../i18n';
import { supabase } from '../../lib/supabase';
import { DEFAULT_TEXTS, LANGS, Lang, TextOverride, fetchOverrides, flattenTexts, loadOverrides } from '../../lib/translations';
import { humanize, sectionLabel } from './sections';
import HistoryView from './HistoryView';

const LOGO = 'https://college-website-assets.s3.eu-north-1.amazonaws.com/college+pics/CollegeNewWebsiteMandatory/collegeLogo_1_30.png';
const LANG_LABEL: Record<Lang, string> = { ka: 'ქართული', en: 'English' };
const SEARCH_LIMIT = 100;

type Texts = Record<Lang, string>;

interface Entry {
  key: string;
  section: string;
  group: string; // path between the section and the text, e.g. 'items.15'
  label: string;
  defaults: Texts;
}

// Every editable text, built once from the texts that ship with the site.
const ENTRIES: Entry[] = (() => {
  const flat = { ka: flattenTexts(DEFAULT_TEXTS.ka), en: flattenTexts(DEFAULT_TEXTS.en) };
  return Object.keys(flat.en).map((key) => {
    const parts = key.split('.');
    const inSection = parts.length > 1;
    const rest = inSection ? parts.slice(1) : parts;
    return {
      key,
      section: inSection ? parts[0] : '_general',
      group: rest.slice(0, -1).join('.'),
      label: rest[rest.length - 1],
      defaults: { ka: flat.ka[key] ?? '', en: flat.en[key] ?? '' }
    };
  });
})();

const SECTIONS = [...new Set(ENTRIES.map((e) => e.section))];
const ENTRY_BY_KEY = new Map(ENTRIES.map((e) => [e.key, e]));

// Split big sections into parts shown one at a time: 'programs' -> each program,
// 'news' -> each news item ('items.15'), 'about' -> 'team', 'highlights', ...
// A part goes one level deeper while it is large and its children are numbered.
const PAGE_TEXTS = ''; // texts that sit directly in the section
const SUBSECTION_OF = new Map<string, string>();
for (const section of SECTIONS) {
  const entries = ENTRIES.filter((e) => e.section === section);
  const counts = new Map<string, number>();
  for (const e of entries) {
    const rest = e.group ? e.group.split('.') : [];
    for (let d = 1; d <= rest.length; d++) {
      const prefix = rest.slice(0, d).join('.');
      counts.set(prefix, (counts.get(prefix) ?? 0) + 1);
    }
  }
  for (const e of entries) {
    const rest = e.group ? e.group.split('.') : [];
    let depth = Math.min(1, rest.length);
    while (depth < rest.length && (counts.get(rest.slice(0, depth).join('.')) ?? 0) > 30 && /^\d+$/.test(rest[depth])) depth++;
    SUBSECTION_OF.set(e.key, rest.slice(0, depth).join('.'));
  }
}

const SUBSECTIONS: Record<string, string[]> = Object.fromEntries(
  SECTIONS.map((section) => {
    const subs = [...new Set(ENTRIES.filter((e) => e.section === section).map((e) => SUBSECTION_OF.get(e.key)!))];
    const numbered = subs.filter((s) => /\.\d+$|^\d+$/.test(s));
    // Numbered parts (news items) newest first; everything else in file order.
    if (numbered.length > 1) {
      const lastNum = (s: string) => Number(s.split('.').pop());
      numbered.sort((a, b) => lastNum(b) - lastNum(a));
      return [section, [...subs.filter((s) => !numbered.includes(s)), ...numbered]];
    }
    return [section, subs];
  })
);

const hasParts = (section: string) => SUBSECTIONS[section].length > 1;

const AutoTextarea: React.FC<{ value: string; onChange: (v: string) => void; dirty: boolean; lang: Lang }> = ({ value, onChange, dirty, lang }) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight + 2}px`;
  }, [value]);
  return (
    <textarea
      ref={ref}
      lang={lang}
      rows={1}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full resize-none overflow-hidden px-3 py-2 rounded-lg text-sm leading-relaxed bg-[#f6f6f8] dark:bg-[#111625] dark:text-white border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
        dirty ? 'border-amber-400 dark:border-amber-500' : 'border-transparent'
      }`}
    />
  );
};

const TextEditor: React.FC<{ session: Session }> = ({ session }) => {
  const [overrides, setOverrides] = useState<Record<string, TextOverride>>({});
  const [drafts, setDrafts] = useState<Record<string, Texts>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [section, setSection] = useState(SECTIONS[0]);
  const [part, setPart] = useState(SUBSECTIONS[SECTIONS[0]][0]);
  const [query, setQuery] = useState('');

  const [view, setView] = useState<'texts' | 'history'>('texts');

  const openSection = (s: string, p = SUBSECTIONS[s][0]) => {
    setSection(s);
    setPart(p);
    setQuery('');
    setView('texts');
    window.scrollTo(0, 0);
  };

  // From the history: show the part that contains this text
  const openText = (key: string) => {
    const entry = ENTRY_BY_KEY.get(key);
    if (entry) openSection(entry.section, SUBSECTION_OF.get(key));
  };
  const [editedOnly, setEditedOnly] = useState(false);
  const [toast, setToast] = useState<{ type: 'ok' | 'error'; text: string } | null>(null);

  const showToast = useCallback((type: 'ok' | 'error', text: string) => {
    setToast({ type, text });
    window.setTimeout(() => setToast(null), 4000);
  }, []);

  const reload = useCallback(async () => {
    const rows = await fetchOverrides();
    setOverrides(Object.fromEntries(rows.map((r) => [r.key, r])));
  }, []);

  useEffect(() => {
    reload()
      .catch((err) => showToast('error', `Could not load texts: ${err.message}`))
      .finally(() => setLoading(false));
  }, [reload, showToast]);

  const saved = useCallback(
    (entry: Entry, lang: Lang) => overrides[entry.key]?.[lang] ?? entry.defaults[lang],
    [overrides]
  );
  const current = (entry: Entry, lang: Lang) => drafts[entry.key]?.[lang] ?? saved(entry, lang);
  const isEdited = (entry: Entry) => LANGS.some((l) => saved(entry, l) !== entry.defaults[l]);
  const isDirty = (entry: Entry, lang?: Lang) =>
    (lang ? [lang] : LANGS).some((l) => drafts[entry.key] !== undefined && drafts[entry.key][l] !== saved(entry, l));

  const dirtyEntries = useMemo(
    () => Object.keys(drafts).map((k) => ENTRY_BY_KEY.get(k)!).filter((e) => LANGS.some((l) => drafts[e.key][l] !== saved(e, l))),
    [drafts, saved]
  );

  const setText = (entry: Entry, lang: Lang, value: string) => {
    setDrafts((prev) => {
      const base = prev[entry.key] ?? { ka: saved(entry, 'ka'), en: saved(entry, 'en') };
      const next = { ...prev, [entry.key]: { ...base, [lang]: value } };
      if (LANGS.every((l) => next[entry.key][l] === saved(entry, l))) delete next[entry.key];
      return next;
    });
  };

  const restoreOriginal = (entry: Entry) => {
    setDrafts((prev) => {
      const next = { ...prev, [entry.key]: { ...entry.defaults } };
      if (LANGS.every((l) => entry.defaults[l] === saved(entry, l))) delete next[entry.key];
      return next;
    });
  };

  const save = useCallback(async () => {
    if (!supabase || dirtyEntries.length === 0 || saving) return;
    setSaving(true);
    const upserts: TextOverride[] = [];
    const deletes: string[] = [];
    for (const entry of dirtyEntries) {
      const draft = drafts[entry.key];
      // Texts equal to the built-in version are stored as null (= use the default).
      const row: TextOverride = {
        key: entry.key,
        ka: draft.ka === entry.defaults.ka ? null : draft.ka,
        en: draft.en === entry.defaults.en ? null : draft.en
      };
      if (row.ka === null && row.en === null) deletes.push(entry.key);
      else upserts.push(row);
    }
    try {
      if (upserts.length) {
        const { error } = await supabase.from('translation_overrides').upsert(upserts);
        if (error) throw error;
      }
      if (deletes.length) {
        const { error } = await supabase.from('translation_overrides').delete().in('key', deletes);
        if (error) throw error;
      }
      await reload();
      setDrafts({});
      loadOverrides(i18n); // update the live site texts in this browser too
      showToast('ok', `Saved ${dirtyEntries.length} ${dirtyEntries.length === 1 ? 'text' : 'texts'}. The website is updated.`);
    } catch (err: any) {
      showToast('error', `Could not save: ${err.message ?? err}`);
    } finally {
      setSaving(false);
    }
  }, [dirtyEntries, drafts, reload, saving, showToast]);

  // Warn before leaving with unsaved changes; Ctrl/Cmd+S saves.
  useEffect(() => {
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      if (dirtyEntries.length) e.preventDefault();
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
        e.preventDefault();
        save();
      }
    };
    window.addEventListener('beforeunload', onBeforeUnload);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
      window.removeEventListener('keydown', onKey);
    };
  }, [dirtyEntries.length, save]);

  const q = query.trim().toLowerCase();
  const visible = useMemo(() => {
    let list = q
      ? ENTRIES.filter((e) => e.key.toLowerCase().includes(q) || LANGS.some((l) => current(e, l).toLowerCase().includes(q)))
      : ENTRIES.filter((e) => e.section === section && (!hasParts(section) || SUBSECTION_OF.get(e.key) === part));
    if (editedOnly) list = list.filter((e) => isEdited(e) || isDirty(e));
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, section, part, editedOnly, overrides, drafts]);

  const partLabel = (s: string, p: string) => {
    if (p === PAGE_TEXTS) return 'Page texts';
    const titleEntry = ENTRY_BY_KEY.get(`${s}.${p}.title`);
    const title = titleEntry ? current(titleEntry, 'ka') : '';
    const last = p.split('.').pop()!;
    if (/^\d+$/.test(last)) return title ? `#${last} · ${title}` : `#${last}`;
    return title || humanize(p);
  };

  const shown = q ? visible.slice(0, SEARCH_LIMIT) : visible;

  // Group consecutive entries so related texts (e.g. one news item) sit together.
  const groups = useMemo(() => {
    const out: { id: string; title: string; entries: Entry[] }[] = [];
    for (const entry of shown) {
      const id = `${entry.section}|${entry.group}`;
      let group = out[out.length - 1];
      if (!group || group.id !== id) {
        // Inside a selected part, show group names relative to it (the heading already names the part).
        const inPart = !q && hasParts(entry.section) && part !== PAGE_TEXTS && entry.group.startsWith(part);
        const relative = inPart ? entry.group.slice(part.length).replace(/^\./, '') : entry.group;
        const name = [q ? sectionLabel(entry.section) : '', relative ? humanize(relative) : ''].filter(Boolean).join(' › ');
        const titleEntry = relative ? ENTRY_BY_KEY.get(`${entry.section}.${entry.group}.title`) : undefined;
        const titleText = titleEntry ? current(titleEntry, 'ka') : '';
        group = { id, title: titleText && name ? `${name} — ${titleText}` : name, entries: [] };
        out.push(group);
      }
      group.entries.push(entry);
    }
    return out;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shown, q, part, overrides, drafts]);

  const sectionStats = useMemo(() => {
    const stats: Record<string, { total: number; edited: number; dirty: number }> = {};
    for (const e of ENTRIES) {
      const s = (stats[e.section] ??= { total: 0, edited: 0, dirty: 0 });
      s.total++;
      if (isEdited(e)) s.edited++;
      if (isDirty(e)) s.dirty++;
    }
    return stats;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overrides, drafts]);

  const dirtyParts = new Set(dirtyEntries.map((e) => `${e.section}|${SUBSECTION_OF.get(e.key)}`));

  const signOut = async () => {
    if (dirtyEntries.length && !window.confirm('You have unsaved changes. Sign out anyway?')) return;
    await supabase?.auth.signOut();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-[#111318] dark:text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between gap-4 px-4 md:px-6 py-3 bg-white dark:bg-[#111318] border-b border-[#f0f2f4] dark:border-[#2a303c]">
        <div className="flex items-center gap-3 min-w-0">
          <img src={LOGO} alt="" className="h-9 w-auto rounded" />
          <div className="min-w-0">
            <h1 className="font-bold leading-tight">Content Manager</h1>
            <p className="text-xs text-[#616f89] dark:text-[#9ea7b8] truncate">{session.user.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => { setView(view === 'history' ? 'texts' : 'history'); window.scrollTo(0, 0); }}
            className={`flex items-center gap-1.5 px-3 h-9 rounded-lg text-sm font-semibold transition-colors ${
              view === 'history' ? 'bg-primary text-white' : 'bg-[#f0f2f4] dark:bg-[#2a303c] hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <span className="material-symbols-outlined text-base">history</span>
            <span className="hidden sm:inline">History</span>
          </button>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 h-9 rounded-lg text-sm font-semibold bg-[#f0f2f4] dark:bg-[#2a303c] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="material-symbols-outlined text-base">open_in_new</span> View site
          </a>
          <button
            onClick={signOut}
            className="flex items-center gap-1.5 px-3 h-9 rounded-lg text-sm font-semibold bg-[#f0f2f4] dark:bg-[#2a303c] hover:text-red-500 transition-colors"
          >
            <span className="material-symbols-outlined text-base">logout</span> Sign out
          </button>
        </div>
      </header>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-72 shrink-0 border-r border-[#f0f2f4] dark:border-[#2a303c] bg-white dark:bg-[#111318] sticky top-[61px] h-[calc(100vh-61px)]">
          <nav className="flex-1 overflow-y-auto p-3 flex flex-col gap-0.5">
            {SECTIONS.map((s) => {
              const st = sectionStats[s];
              const active = view === 'texts' && !q && s === section;
              return (
                <React.Fragment key={s}>
                  <button
                    onClick={() => openSection(s)}
                    className={`flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-sm text-left transition-colors ${
                      active ? 'bg-primary text-white font-semibold' : 'hover:bg-gray-100 dark:hover:bg-[#1a2133]'
                    }`}
                  >
                    <span className="truncate">{sectionLabel(s)}</span>
                    <span className="flex items-center gap-1.5 shrink-0">
                      {st.dirty > 0 && <span className="size-2 rounded-full bg-amber-400" title="Unsaved changes" />}
                      {st.edited > 0 && (
                        <span className={`text-[10px] font-bold px-1.5 rounded ${active ? 'bg-white/20' : 'bg-primary/10 text-primary'}`} title="Edited texts">
                          {st.edited}
                        </span>
                      )}
                      <span className={`text-xs ${active ? 'text-white/70' : 'text-[#616f89]'}`}>{st.total}</span>
                    </span>
                  </button>
                  {active && hasParts(s) && (
                    <div className="flex flex-col gap-0.5 ml-3 pl-2 my-1 border-l-2 border-primary/30">
                      {SUBSECTIONS[s].map((p) => (
                        <button
                          key={p}
                          onClick={() => openSection(s, p)}
                          className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-xs text-left transition-colors ${
                            p === part ? 'bg-primary/10 text-primary font-semibold' : 'text-[#616f89] dark:text-[#9ea7b8] hover:bg-gray-100 dark:hover:bg-[#1a2133]'
                          }`}
                        >
                          <span className="line-clamp-2 flex-1">{partLabel(s, p)}</span>
                          {dirtyParts.has(`${s}|${p}`) && <span className="size-1.5 rounded-full bg-amber-400 shrink-0" />}
                        </button>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0 px-4 md:px-8 py-6 pb-28">
          {view === 'history' ? (
            <HistoryView onOpenText={openText} />
          ) : (
          <div className="max-w-5xl mx-auto flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={section}
                onChange={(e) => openSection(e.target.value)}
                className="md:hidden h-11 px-3 rounded-xl bg-white dark:bg-[#1a2133] border border-[#f0f2f4] dark:border-[#2a303c] text-sm"
              >
                {SECTIONS.map((s) => <option key={s} value={s}>{sectionLabel(s)}</option>)}
              </select>
              {hasParts(section) && (
                <select
                  value={part}
                  onChange={(e) => openSection(section, e.target.value)}
                  className="md:hidden h-11 px-3 rounded-xl bg-white dark:bg-[#1a2133] border border-[#f0f2f4] dark:border-[#2a303c] text-sm"
                >
                  {SUBSECTIONS[section].map((p) => <option key={p} value={p}>{partLabel(section, p)}</option>)}
                </select>
              )}
              <label className="flex-1 flex items-center gap-2 h-11 px-3 rounded-xl bg-white dark:bg-[#1a2133] border border-[#f0f2f4] dark:border-[#2a303c] focus-within:ring-2 focus-within:ring-primary">
                <span className="material-symbols-outlined text-[#616f89]">search</span>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search all texts in Georgian or English…"
                  className="flex-1 bg-transparent border-none focus:ring-0 text-sm p-0"
                />
                {query && (
                  <button onClick={() => setQuery('')} className="text-[#616f89] hover:text-primary" aria-label="Clear search">
                    <span className="material-symbols-outlined text-lg">close</span>
                  </button>
                )}
              </label>
              <label className="flex items-center gap-2 px-3 h-11 rounded-xl bg-white dark:bg-[#1a2133] border border-[#f0f2f4] dark:border-[#2a303c] text-sm cursor-pointer select-none">
                <input type="checkbox" checked={editedOnly} onChange={(e) => setEditedOnly(e.target.checked)} className="rounded text-primary focus:ring-primary" />
                Edited only
              </label>
            </div>

            <div className="flex items-baseline justify-between gap-4">
              <div className="min-w-0">
                {!q && hasParts(section) && (
                  <p className="text-xs font-bold uppercase tracking-wide text-primary mb-1">{sectionLabel(section)}</p>
                )}
                <h2 className="text-2xl font-black">
                  {q ? 'Search results' : hasParts(section) ? partLabel(section, part) : sectionLabel(section)}
                </h2>
              </div>
              <p className="text-sm text-[#616f89] dark:text-[#9ea7b8]">
                {q && visible.length > SEARCH_LIMIT ? `First ${SEARCH_LIMIT} of ${visible.length}` : `${visible.length} texts`}
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
              </div>
            ) : shown.length === 0 ? (
              <div className="text-center py-20 text-[#616f89] dark:text-[#9ea7b8]">
                <span className="material-symbols-outlined text-5xl mb-2 block">search_off</span>
                Nothing found.
              </div>
            ) : (
              groups.map((group) => (
                <section key={group.id} className="flex flex-col gap-3">
                  {group.title && (
                    <h3 className="text-sm font-bold text-primary mt-3 line-clamp-1">{group.title}</h3>
                  )}
                  {group.entries.map((entry) => {
                    const edited = isEdited(entry);
                    const dirty = isDirty(entry);
                    const differsFromDefault = LANGS.some((l) => current(entry, l) !== entry.defaults[l]);
                    return (
                      <div
                        key={entry.key}
                        className="bg-white dark:bg-[#1a2133] rounded-xl border border-[#f0f2f4] dark:border-[#2a303c] p-4 flex flex-col gap-3"
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-semibold text-sm">{humanize(entry.label)}</span>
                          <code className="text-[11px] text-[#616f89] dark:text-[#9ea7b8] bg-[#f6f6f8] dark:bg-[#111625] px-1.5 py-0.5 rounded">{entry.key}</code>
                          {dirty && <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">Unsaved</span>}
                          {edited && !dirty && <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-primary/10 text-primary">Edited</span>}
                          {differsFromDefault && (
                            <button
                              onClick={() => restoreOriginal(entry)}
                              className="ml-auto flex items-center gap-1 text-xs font-semibold text-[#616f89] hover:text-primary"
                              title="Put back the text that ships with the website"
                            >
                              <span className="material-symbols-outlined text-sm">history</span> Restore original
                            </button>
                          )}
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                          {LANGS.map((lang) => (
                            <div key={lang} className="flex flex-col gap-1">
                              <span className="text-[11px] font-bold uppercase tracking-wide text-[#616f89] dark:text-[#9ea7b8]">{LANG_LABEL[lang]}</span>
                              <AutoTextarea
                                lang={lang}
                                value={current(entry, lang)}
                                onChange={(v) => setText(entry, lang, v)}
                                dirty={isDirty(entry, lang)}
                              />
                              {current(entry, lang) !== entry.defaults[lang] && (
                                <p className="text-[11px] text-[#616f89] dark:text-[#9ea7b8] line-clamp-2" title={entry.defaults[lang]}>
                                  Original: {entry.defaults[lang] || '(empty)'}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </section>
              ))
            )}
          </div>
          )}
        </main>
      </div>

      {/* Save bar */}
      {dirtyEntries.length > 0 && (
        <div className="fixed bottom-0 inset-x-0 z-40 flex justify-center p-4 pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-4 pl-5 pr-2 py-2 rounded-2xl bg-[#111318] text-white shadow-2xl border border-white/10">
            <span className="text-sm font-medium">
              {dirtyEntries.length} unsaved {dirtyEntries.length === 1 ? 'change' : 'changes'}
            </span>
            <button
              onClick={() => setDrafts({})}
              disabled={saving}
              className="px-4 h-10 rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Discard
            </button>
            <button
              onClick={save}
              disabled={saving}
              className="px-5 h-10 rounded-xl text-sm font-bold bg-primary hover:bg-primary/90 transition-colors flex items-center gap-2 disabled:opacity-60"
            >
              {saving ? <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <span className="material-symbols-outlined text-base">save</span>}
              Save changes
            </button>
          </div>
        </div>
      )}

      {toast && (
        <div
          role="status"
          className={`fixed top-20 right-4 z-50 max-w-sm px-4 py-3 rounded-xl shadow-xl text-sm font-medium ${
            toast.type === 'ok' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
          }`}
        >
          {toast.text}
        </div>
      )}
    </div>
  );
};

export default TextEditor;
