// Search for the admin text editor: exact matches first, then close matches
// that forgive small typos (a missing, extra or wrong letter in a word).

const tokenize = (s: string) => s.toLowerCase().split(/[^\p{L}\p{N}]+/u).filter(Boolean);

/** Levenshtein distance, giving up early once it exceeds `max`. */
function editDistance(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      rowMin = Math.min(rowMin, cur[j]);
    }
    if (rowMin > max) return max + 1;
    prev = cur;
  }
  return prev[b.length];
}

function wordMatches(query: string, words: string[]): boolean {
  const typos = query.length >= 9 ? 2 : query.length >= 4 ? 1 : 0;
  return words.some((word) => {
    if (word.includes(query)) return true;
    if (!typos) return false;
    // Whole word, or the start of a longer word (for half-typed words)
    return [word, word.slice(0, query.length), word.slice(0, query.length + 1)].some(
      (candidate) => editDistance(query, candidate, typos) <= typos
    );
  });
}

export type MatchKind = 'exact' | 'close' | null;

/** How well `query` matches any of `texts`. */
export function matchText(query: string, texts: string[]): MatchKind {
  const q = query.trim().toLowerCase();
  if (!q) return null;
  if (texts.some((t) => t.toLowerCase().includes(q))) return 'exact';
  const queryWords = tokenize(q);
  if (!queryWords.length) return null;
  const words = texts.flatMap(tokenize);
  return queryWords.every((w) => wordMatches(w, words)) ? 'close' : null;
}
