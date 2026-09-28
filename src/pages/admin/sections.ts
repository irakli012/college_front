// Friendly names for the top-level groups of texts in src/locales/*.json.
// Groups missing here still show up, labelled by their key.
export const SECTION_LABELS: Record<string, string> = {
  _general: 'General',
  nav: 'Navigation menu',
  home: 'Home page',
  about: 'About page',
  missionPage: 'Mission & values',
  structurePage: 'Structure',
  authorizationPage: 'Authorization',
  partnersPage: 'Partners',
  documentsPage: 'Documents',
  strategic: 'Strategic documents',
  programsPage: 'Programs page',
  programs: 'Program details',
  programDetail: 'Program page labels',
  programsCatalog: 'Programs catalog',
  international: 'International relations',
  news: 'News',
  gallery: 'Gallery',
  library: 'Library',
  register: 'Registration form',
  contact: 'Contact',
  footer: 'Footer',
  search: 'Search'
};

export const sectionLabel = (section: string) => SECTION_LABELS[section] ?? humanize(section);

/** 'heroTitle' -> 'Hero title', 'curriculumItems.0' -> 'Curriculum items #1' */
export function humanize(path: string): string {
  return path
    .split('.')
    .map((part) => {
      if (/^\d+$/.test(part)) return `#${Number(part) + 1}`;
      const words = part.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[-_]/g, ' ').toLowerCase();
      return words.charAt(0).toUpperCase() + words.slice(1);
    })
    .join(' › ');
}
