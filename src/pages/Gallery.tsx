
import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { GALLERY } from '../constants';
import Seo from '../components/Seo';

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback((delta: number) => {
    setOpenIndex((i) => (i === null ? i : (i + delta + GALLERY.length) % GALLERY.length));
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'unset';
    };
  }, [openIndex, close, step]);

  return (
    <div className="animate-fade-in max-w-[1200px] mx-auto px-6 py-10">
      <Seo title={t('nav.gallery')} description={t('gallery.subtitle')} />
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-black mb-4">{t('gallery.title')}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t('gallery.subtitle')}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {GALLERY.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setOpenIndex(idx)}
            className="group relative rounded-xl overflow-hidden aspect-[4/3] shadow-md bg-gray-200 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={t('gallery.photoAlt', { n: idx + 1 })}
          >
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={item.thumb}
              alt={t('gallery.photoAlt', { n: idx + 1 })}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity">zoom_in</span>
            </div>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={GALLERY[openIndex].image}
            alt={t('gallery.photoAlt', { n: openIndex + 1 })}
            className="max-h-[90vh] max-w-full rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={close}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label={t('gallery.close')}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label={t('gallery.previous')}
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); step(1); }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label={t('gallery.next')}
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium">
            {openIndex + 1} / {GALLERY.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
