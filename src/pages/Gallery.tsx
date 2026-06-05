
import React from 'react';
import { useTranslation } from 'react-i18next';
import { GALLERY } from '../constants';
import Seo from '../components/Seo';

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="animate-fade-in max-w-[1200px] mx-auto px-6 py-10">
      <Seo title={t('nav.gallery')} description={t('gallery.subtitle')} />
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-black mb-4">{t('gallery.title')}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t('gallery.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY.map((item) => (
          <div key={item.id} className="group relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src={item.image} 
              alt={t(`gallery.items.${item.id}.title`)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary-light text-xs font-bold uppercase tracking-widest text-white/70">{t(`gallery.items.${item.id}.category`)}</span>
              <h3 className="text-white text-xl font-bold">{t(`gallery.items.${item.id}.title`)}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
