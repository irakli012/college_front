import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { INTERNATIONAL_PROJECTS, NEWS } from '../../constants';
import Seo from '../../components/Seo';
import PageHeader from '../../components/PageHeader';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in max-w-[1200px] mx-auto px-6 py-10">
      <Seo title={t('nav.projects')} description={t('international.projects.subtitle')} />
      <PageHeader icon="handshake" title={t('nav.projects')} subtitle={t('international.projects.subtitle')} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INTERNATIONAL_PROJECTS.map((project) => {
          const base = `international.projects.items.${project.id}`;
          const related = project.news.map((slug) => NEWS.find((n) => n.slug === slug)).filter(Boolean);
          return (
            <article
              key={project.id}
              className="flex flex-col bg-white dark:bg-[#1c2331] rounded-2xl border border-[#dbdfe6] dark:border-[#2a303c] shadow-sm overflow-hidden"
            >
              {/* White tile so logos look right in dark mode too */}
              <div className="h-40 bg-white flex items-center justify-center p-6 border-b border-[#f0f2f4] dark:border-[#2a303c]">
                {project.logo ? (
                  <img src={project.logo} alt={t(`${base}.name`)} className="max-h-full max-w-full object-contain" loading="lazy" />
                ) : (
                  // Icons are 24px boxes by default (see index.css), so size this one explicitly
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 72, width: 72, height: 72 }}>public</span>
                )}
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <h2 className="text-lg font-bold text-[#111318] dark:text-white leading-snug">{t(`${base}.name`)}</h2>
                <p className="text-sm text-[#616f89] dark:text-[#9ea7b8] leading-relaxed flex-1">{t(`${base}.description`)}</p>

                {related.length > 0 && (
                  <div className="flex flex-col gap-1.5 pt-3 border-t border-[#f0f2f4] dark:border-[#2a303c]">
                    <span className="text-[11px] font-bold uppercase tracking-wide text-[#616f89] dark:text-[#9ea7b8]">
                      {t('international.projects.relatedNews')}
                    </span>
                    {related.map((item) => (
                      <Link key={item!.slug} to={`/news/${item!.slug}`} className="text-sm text-primary hover:underline leading-snug">
                        {t(`news.items.${item!.id}.title`)}
                      </Link>
                    ))}
                  </div>
                )}

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  <span className="material-symbols-outlined text-base">open_in_new</span>
                  {t('international.projects.website')}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
