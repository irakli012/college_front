
import React from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';

const ProgramsCatalog: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in max-w-[1280px] mx-auto px-4 sm:px-10 py-10">
      <Seo title={t('nav.programsCatalog')} />
      <div className="flex flex-col gap-6 mb-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-[#111318] dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-tight">
            {t('nav.programsCatalog')}
          </h1>
          <p className="text-[#616f89] dark:text-gray-400 text-lg font-normal max-w-2xl leading-relaxed">
            {t('programsCatalog.subtitle')}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4 block">menu_book</span>
          <p className="text-gray-500 dark:text-gray-400 text-lg">{t('programsCatalog.comingSoon')}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgramsCatalog;
