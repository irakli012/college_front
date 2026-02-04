
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  const { t } = useTranslation();
  const faculties = ['All Faculties', 'Health Sciences', 'Technology', 'Veterinary Arts', 'Education', 'Business'];
  const [activeTab, setActiveTab] = useState('All Faculties');

  const filteredPrograms = activeTab === 'All Faculties' 
    ? PROGRAMS 
    : PROGRAMS.filter(p => p.category === activeTab);

  return (
    <div className="animate-fade-in max-w-[1280px] mx-auto px-4 sm:px-10 py-10">
      <div className="flex flex-col gap-6 mb-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-[#111318] dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-tight">
            {t('programsPage.title')}
          </h1>
          <p className="text-[#616f89] dark:text-gray-400 text-lg font-normal max-w-2xl leading-relaxed">
            {t('programsPage.subtitle')}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 mb-12">
        <div className="w-full">
          <label className="flex flex-col w-full">
            <div className="flex w-full items-stretch rounded-xl h-14 bg-white dark:bg-gray-900 border border-[#f0f2f4] dark:border-gray-800 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
              <div className="text-[#616f89] flex items-center justify-center pl-4">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input 
                className="w-full bg-transparent border-none text-[#111318] dark:text-white focus:outline-0 focus:ring-0 placeholder:text-[#616f89] px-4 text-base font-normal" 
                placeholder={t('programsPage.searchPlaceholder')}
              />
            </div>
          </label>
        </div>

        <div className="flex gap-3 flex-wrap items-center">
          {faculties.map((fac) => (
            <button 
              key={fac}
              onClick={() => setActiveTab(fac)}
              className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 transition-all shadow-sm ${
                activeTab === fac 
                  ? 'bg-primary text-white font-semibold' 
                  : 'bg-[#f0f2f4] dark:bg-gray-800 text-[#111318] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <p className="text-sm leading-normal">{t(`programsPage.faculties.${fac}`)}</p>
              {fac !== 'All Faculties' && <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {filteredPrograms.map((prog) => (
          <div key={prog.id} className="group flex flex-col bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-[#f0f2f4] dark:border-gray-800 hover:shadow-xl transition-all duration-300">
            <div 
              className="relative w-full aspect-[16/10] bg-center bg-no-repeat bg-cover" 
              style={{ backgroundImage: `url("${prog.image}")` }}
            >
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-lg text-primary">
                <span className="material-symbols-outlined">{prog.icon}</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                {t(`programs.${prog.slug}.title`)}
              </h3>
              <p className="mt-3 text-[#616f89] dark:text-gray-400 text-sm font-normal leading-relaxed flex-1 line-clamp-3">
                {t(`programs.${prog.slug}.description`)}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {t(`programsPage.faculties.${prog.category}`)}
                </span>
                <Link to={`/programs/${prog.slug}`} className="text-primary text-sm font-bold flex items-center gap-1 hover:underline group cursor-pointer whitespace-nowrap shrink-0">
                  {t('programDetail.learnMore')}
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-4">
        <button className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-[#f0f2f4] dark:border-gray-800 text-[#111318] dark:text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm">
          {t('programsPage.viewAll')}
          <span className="material-symbols-outlined">expand_more</span>
        </button>
        <p className="text-[#616f89] dark:text-gray-400 text-sm">
          {t('programsPage.showing', { count: filteredPrograms.length })}
        </p>
      </div>
    </div>
  );
};

export default Programs;
