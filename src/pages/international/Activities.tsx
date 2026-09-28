import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { INTERNATIONAL_ACTIVITY_NEWS, INTERNATIONAL_PROJECTS, NEWS } from '../../constants';
import Seo from '../../components/Seo';
import PageHeader from '../../components/PageHeader';

const MAX_THUMBS = 4;

const Activities: React.FC = () => {
  const { t } = useTranslation();

  const activities = INTERNATIONAL_ACTIVITY_NEWS
    .map((slug) => NEWS.find((n) => n.slug === slug))
    .filter((n): n is (typeof NEWS)[number] => Boolean(n))
    .sort((a, b) => b.datetime.localeCompare(a.datetime));

  return (
    <div className="animate-fade-in max-w-[1100px] mx-auto px-6 py-10">
      <Seo title={t('nav.activities')} description={t('international.activities.subtitle')} />
      <PageHeader icon="photo_camera" title={t('nav.activities')} subtitle={t('international.activities.subtitle')} />

      <div className="flex flex-col gap-8">
        {activities.map((item) => {
          const photos = [item.image, ...(item.images ?? [])].filter(Boolean) as string[];
          const project = INTERNATIONAL_PROJECTS.find((p) => p.news.includes(item.slug));
          const description = t(`news.items.${item.id}.description`);
          return (
            <article
              key={item.slug}
              className="grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] bg-white dark:bg-[#1c2331] rounded-2xl border border-[#dbdfe6] dark:border-[#2a303c] shadow-sm overflow-hidden"
            >
              <Link to={`/news/${item.slug}`} className="relative block bg-gray-100 dark:bg-[#111625] aspect-[4/3] md:aspect-auto md:min-h-[280px] overflow-hidden group">
                {photos[0] && (
                  <img
                    src={photos[0]}
                    alt={t(`news.items.${item.id}.title`)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
              </Link>

              <div className="flex flex-col gap-3 p-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#616f89] dark:text-[#9ea7b8]">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  {t(`news.items.${item.id}.date`)}
                </div>
                <h2 className="text-xl font-bold text-[#111318] dark:text-white leading-snug">
                  <Link to={`/news/${item.slug}`} className="hover:text-primary transition-colors">
                    {t(`news.items.${item.id}.title`)}
                  </Link>
                </h2>
                <p className="text-sm text-[#616f89] dark:text-[#9ea7b8] leading-relaxed line-clamp-4 whitespace-pre-line">{description}</p>

                {photos.length > 1 && (
                  <div className="grid grid-cols-4 gap-2 mt-1">
                    {photos.slice(1, MAX_THUMBS + 1).map((src, idx) => (
                      <Link key={src} to={`/news/${item.slug}`} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-[#111625]">
                        <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                        {idx === MAX_THUMBS - 1 && photos.length > MAX_THUMBS + 1 && (
                          <span className="absolute inset-0 bg-black/55 text-white text-sm font-bold flex items-center justify-center">
                            +{photos.length - MAX_THUMBS - 1}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-auto pt-2">
                  <Link to={`/news/${item.slug}`} className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline">
                    {t('international.activities.readMore')}
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                  {project && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#616f89] dark:text-[#9ea7b8] hover:text-primary"
                    >
                      <span className="material-symbols-outlined text-base">open_in_new</span>
                      {t(`international.projects.items.${project.id}.name`)}
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
