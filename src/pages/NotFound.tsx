import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-16 gap-4">
      <Helmet>
        <title>{t('notFound.title')}</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <span className="material-symbols-outlined text-6xl text-primary">explore_off</span>
      <h1 className="text-3xl font-black dark:text-white">{t('notFound.title')}</h1>
      <p className="text-[#616f89] dark:text-[#9ea7b8] max-w-md">{t('notFound.text')}</p>
      <div className="flex flex-wrap gap-3 justify-center mt-2">
        <Link to="/" className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
          {t('notFound.home')}
        </Link>
        <Link to="/news" className="px-6 py-3 rounded-lg font-bold border border-[#dbdfe6] dark:border-[#2a303c] dark:text-white hover:border-primary transition-colors">
          {t('nav.news')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
