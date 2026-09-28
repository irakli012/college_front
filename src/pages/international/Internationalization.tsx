import React from 'react';
import { useTranslation } from 'react-i18next';
import { SITE_IMAGES } from '../../constants';
import Seo from '../../components/Seo';

const PARAGRAPHS = ['p1', 'p2', 'p3', 'p4'];

const Internationalization: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in max-w-[1000px] mx-auto px-6 py-10">
      <Seo title={t('nav.internationalization')} description={t('international.internationalization.p1')} />

      <section
        className="flex min-h-[260px] flex-col items-center justify-center gap-3 rounded-xl bg-cover bg-center p-8 text-center shadow-xl mb-10"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.7) 100%), url("${SITE_IMAGES.flags}")` }}
      >
        <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest rounded-full border border-white/25">
          {t('nav.international')}
        </span>
        <h1 className="text-white text-3xl sm:text-5xl font-black leading-tight">{t('nav.internationalization')}</h1>
      </section>

      <div className="bg-white dark:bg-[#1c2331] rounded-2xl border border-[#dbdfe6] dark:border-[#2a303c] p-8 sm:p-10 shadow-sm flex flex-col gap-5">
        {PARAGRAPHS.map((key, idx) => (
          <p
            key={key}
            className={`leading-relaxed ${idx === 0 ? 'text-lg font-medium text-[#111318] dark:text-white' : 'text-base text-[#616f89] dark:text-[#9ea7b8]'}`}
          >
            {t(`international.internationalization.${key}`)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Internationalization;
