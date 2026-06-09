
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { NEWS } from '../constants';

const News: React.FC = () => {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const sortedNews = [...NEWS].sort((a, b) => b.datetime.localeCompare(a.datetime));
  const displayedNews = sortedNews.slice(0, visibleCount);
  const hasMore = visibleCount < sortedNews.length;

  return (
    <div className="animate-fade-in max-w-[1200px] mx-auto px-6 py-8 flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-2">
        <Link className="text-[#616f89] dark:text-gray-400 text-sm font-medium flex items-center gap-1 hover:text-primary" to="/">
          <span className="material-symbols-outlined text-sm">home</span> {t('nav.home')}
        </Link>
        <span className="text-[#616f89] dark:text-gray-500 text-sm font-medium">/</span>
        <span className="text-[#111318] dark:text-white text-sm font-medium">{t('nav.news')}</span>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-[#111318] dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]">{t('news.title')}</h1>
        <p className="text-[#616f89] dark:text-gray-400 text-lg font-normal leading-normal max-w-2xl">
          {t('news.subtitle')}
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 p-2 rounded-xl shadow-sm border border-[#f0f2f4] dark:border-gray-800 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4 px-4 py-2">
          <div className="flex-1">
            <div className="flex w-full items-stretch rounded-lg h-12 bg-[#f0f2f4] dark:bg-gray-800">
              <div className="text-[#616f89] dark:text-gray-400 flex items-center justify-center pl-4">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="w-full bg-transparent border-none text-[#111318] dark:text-white focus:ring-0 px-4 placeholder:text-[#616f89]"
                placeholder={t('news.searchPlaceholder')}
              />
            </div>
          </div>
          <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all">{t('news.searchButton')}</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {displayedNews.map((item) => (
          <Link key={item.id} to={`/news/${item.slug}`} className="flex flex-col h-full">
            <div className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-[#f0f2f4] dark:border-gray-800 group cursor-pointer hover:shadow-xl transition-all">
              {item.image ? (
                <div className="relative h-64 overflow-hidden shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url("${item.image}")` }}
                  ></div>
                  <div className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${item.category === 'Achievement' ? 'bg-primary' : item.category === 'Event' ? 'bg-orange-500' : 'bg-purple-600'
                    }`}>
                    {t(`news.items.${item.id}.category`)}
                  </div>
                </div>
              ) : (
                <div className={`relative h-48 flex flex-col items-center justify-center shrink-0 border-b border-[#f0f2f4] dark:border-gray-800 transition-colors duration-500 ${
                  item.category === 'Achievement' ? 'bg-blue-50 dark:bg-blue-900/10 text-primary group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20' : 
                  item.category === 'Event' ? 'bg-orange-50 dark:bg-orange-900/10 text-orange-500 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/20' : 
                  'bg-purple-50 dark:bg-purple-900/10 text-purple-600 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/20'
                }`}>
                  <span className="material-symbols-outlined text-6xl opacity-80 transition-transform duration-500 group-hover:scale-110">
                    {item.category === 'Achievement' ? 'emoji_events' : item.category === 'Event' ? 'event' : 'article'}
                  </span>
                  <div className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                    item.category === 'Achievement' ? 'bg-primary' : 
                    item.category === 'Event' ? 'bg-orange-500' : 
                    'bg-purple-600'
                  }`}>
                    {t(`news.items.${item.id}.category`)}
                  </div>
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[#616f89] dark:text-gray-400 text-xs font-semibold mb-3">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  {t(`news.items.${item.id}.date`)}
                  {item.readTime && <span className="mx-1">• {item.readTime}</span>}
                </div>
                <h3 className="text-xl font-bold text-[#111318] dark:text-white mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {t(`news.items.${item.id}.title`)}
                </h3>
                <p className="line-clamp-3 text-[#616f89] dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {t(`news.items.${item.id}.description`)}
                </p>
                <div className="flex items-center text-primary font-bold text-sm mt-auto">
                  {t('news.readMore')} <span className="material-symbols-outlined ml-1 text-base">arrow_forward</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center py-10">
          <button
            onClick={handleLoadMore}
            className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-900 border border-[#f0f2f4] dark:border-gray-800 rounded-lg text-primary font-bold hover:bg-[#f0f2f4] dark:hover:bg-gray-800 transition-all"
          >
            {t('news.loadMore')} <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default News;
