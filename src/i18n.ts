import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ka from './locales/ka.json';
import { loadOverrides } from './lib/translations';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Copies: i18next merges admin-panel edits into these objects, and the
    // imported originals must stay untouched (the admin panel compares against them)
    resources: {
      en: { translation: structuredClone(en) },
      ka: { translation: structuredClone(ka) }
    },
    fallbackLng: 'en',
    load: 'languageOnly',
    interpolation: {
      escapeValue: false
    },
    // Re-render when texts edited in the admin panel arrive from Supabase
    react: {
      bindI18nStore: 'added'
    }
  });

loadOverrides(i18n);

export default i18n;
