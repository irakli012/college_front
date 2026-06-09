
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NEWS } from '../constants';
import Seo from '../components/Seo';

const NewsDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const newsItem = NEWS.find(item => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!newsItem) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold dark:text-white">{t('news.notFound')}</h2>
        <Link to="/news" className="text-primary font-bold">{t('news.backToNews')}</Link>
      </div>
    );
  }

  const title = t(`news.items.${newsItem.id}.title`);
  const description = t(`news.items.${newsItem.id}.description`);
  const category = t(`news.items.${newsItem.id}.category`);
  const date = t(`news.items.${newsItem.id}.date`);

  return (
    <div className="animate-fade-in max-w-[900px] mx-auto px-6 py-8">
      <Seo
        title={title}
        description={description}
        image={newsItem.image}
        type="article"
      />
      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <Link className="text-[#616f89] dark:text-gray-400 text-sm font-medium flex items-center gap-1 hover:text-primary transition-colors" to="/">
          <span className="material-symbols-outlined text-sm">home</span> {t('nav.home')}
        </Link>
        <span className="text-[#616f89] dark:text-gray-500 text-sm font-medium">/</span>
        <Link className="text-[#616f89] dark:text-gray-400 text-sm font-medium hover:text-primary transition-colors" to="/news">
          {t('nav.news')}
        </Link>
        <span className="text-[#616f89] dark:text-gray-500 text-sm font-medium">/</span>
        <span className="text-[#111318] dark:text-white text-sm font-medium truncate max-w-[200px]">{title}</span>
      </div>

      <article className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className={`text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${newsItem.category === 'Achievement' ? 'bg-primary' : newsItem.category === 'Event' ? 'bg-orange-500' : 'bg-purple-600'
              }`}>
              {category}
            </span>
            <div className="flex items-center gap-2 text-[#616f89] dark:text-gray-400 text-xs font-semibold">
              <span className="material-symbols-outlined text-sm">calendar_today</span>
              {date}
              {newsItem.readTime && <span className="mx-1">• {newsItem.readTime}</span>}
            </div>
          </div>
          <h1 className="text-[#111318] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
            {title}
          </h1>
        </div>

        {newsItem.image ? (
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-[#f0f2f4] dark:border-gray-800">
            <img
              src={newsItem.image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className={`w-full h-48 md:h-64 rounded-2xl flex flex-col items-center justify-center border border-[#f0f2f4] dark:border-gray-800 ${newsItem.category === 'Achievement' ? 'bg-blue-50 dark:bg-blue-900/10 text-primary' :
            newsItem.category === 'Event' ? 'bg-orange-50 dark:bg-orange-900/10 text-orange-500' :
              'bg-purple-50 dark:bg-purple-900/10 text-purple-600'
            }`}>
            <span className="material-symbols-outlined text-7xl md:text-8xl opacity-80">
              {newsItem.category === 'Achievement' ? 'emoji_events' : newsItem.category === 'Event' ? 'event' : 'article'}
            </span>
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-[#111318] dark:text-gray-200 text-xl leading-relaxed whitespace-pre-wrap">
            {description}
          </p>
        </div>

        {newsItem.images && newsItem.images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {newsItem.images.map((img, idx) => (
              <div key={idx} className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-[#f0f2f4] dark:border-gray-800">
                <img src={img} alt={`${title} image ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-primary font-bold hover:translate-x-[-4px] transition-transform"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            {t('news.back')}
          </button>

          <div className="flex gap-4">
            <button className="p-2 rounded-full border border-[#f0f2f4] dark:border-gray-800 text-[#616f89] dark:hover:text-white hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-xl">share</span>
            </button>
            <button className="p-2 rounded-full border border-[#f0f2f4] dark:border-gray-800 text-[#616f89] dark:hover:text-white hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-xl">bookmark</span>
            </button>
          </div>
        </div>
      </article>

      {/* Suggested News */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold dark:text-white mb-8">{t('news.relatedNews')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...NEWS]
            .filter(item => item.slug !== slug)
            .sort((a, b) => b.datetime.localeCompare(a.datetime))
            .slice(0, 2)
            .map(item => (
              <Link key={item.id} to={`/news/${item.slug}`} className="group h-full">
                <div className="flex flex-col h-full bg-white dark:bg-gray-900 border border-[#f0f2f4] dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-md transition-all">
                  {item.image ? (
                    <div className="h-40 overflow-hidden">
                      <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
                    </div>
                  ) : (
                    <div className={`h-40 flex flex-col items-center justify-center border-b border-[#f0f2f4] dark:border-gray-800 transition-colors duration-500 ${item.category === 'Achievement' ? 'bg-blue-50 dark:bg-blue-900/10 text-primary group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20' :
                      item.category === 'Event' ? 'bg-orange-50 dark:bg-orange-900/10 text-orange-500 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/20' :
                        'bg-purple-50 dark:bg-purple-900/10 text-purple-600 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/20'
                      }`}>
                      <span className="material-symbols-outlined text-5xl opacity-80 transition-transform duration-500 group-hover:scale-110">
                        {item.category === 'Achievement' ? 'emoji_events' : item.category === 'Event' ? 'event' : 'article'}
                      </span>
                    </div>
                  )}
                  <div className="p-4 flex flex-col flex-1">
                    <h4 className="font-bold dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                      {t(`news.items.${item.id}.title`)}
                    </h4>
                    <p className="text-sm text-[#616f89] mt-2 line-clamp-2">{t(`news.items.${item.id}.description`)}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
