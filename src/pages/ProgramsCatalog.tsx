
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import { PROGRAM_CATALOGS } from '../constants';

const ProgramsCatalog: React.FC = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const catalog = PROGRAM_CATALOGS[active];

  return (
    <div className="animate-fade-in max-w-[1200px] mx-auto px-6 py-10">
      <Seo title={t('nav.programsCatalog')} description={t('programsCatalog.subtitle')} />

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined">menu_book</span>
          </div>
          <h1 className="text-[#111318] dark:text-white text-2xl sm:text-4xl font-bold">
            {t('nav.programsCatalog')}
          </h1>
        </div>
        <p className="text-[#616f89] dark:text-[#9ea7b8] text-base pl-14">
          {t('programsCatalog.subtitle')}
        </p>
        <div className="mt-4 h-1 w-16 bg-primary rounded-full ml-14" />
      </div>

      {/* Year tabs */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {PROGRAM_CATALOGS.map((c, idx) => (
          <button
            key={c.year}
            onClick={() => setActive(idx)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all border ${
              active === idx
                ? 'bg-primary text-white border-primary shadow-sm'
                : 'bg-white dark:bg-[#1c2331] text-[#616f89] dark:text-[#9ea7b8] border-[#dbdfe6] dark:border-[#2a303c] hover:border-primary/40'
            }`}
          >
            <span className="material-symbols-outlined text-base">picture_as_pdf</span>
            {t('programsCatalog.catalogTitle', { year: c.year })}
          </button>
        ))}
      </div>

      {/* Preview of the selected catalog */}
      <div className="rounded-2xl overflow-hidden border border-[#dbdfe6] dark:border-[#2a303c] shadow-lg bg-white dark:bg-[#1c2331]">
        <iframe
          key={catalog.fileId}
          src={`https://drive.google.com/file/d/${catalog.fileId}/preview`}
          className="w-full"
          style={{ height: '750px' }}
          title={t('programsCatalog.catalogTitle', { year: catalog.year })}
          allow="autoplay"
        />
      </div>
      <div className="mt-5 flex justify-center">
        <a
          href={`https://drive.google.com/file/d/${catalog.fileId}/view?usp=sharing`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          <span className="material-symbols-outlined text-base">open_in_new</span>
          {t('strategic.openInDrive')}
        </a>
      </div>
    </div>
  );
};

export default ProgramsCatalog;
