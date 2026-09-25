import React from 'react';
import { useTranslation } from 'react-i18next';
import { DOCUMENTS } from '../constants';
import Seo from '../components/Seo';

const Documents: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in max-w-[1200px] mx-auto px-6 py-10">
      <Seo title={t('documentsPage.title')} description={t('documentsPage.subtitle')} />

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">folder_copy</span>
          </div>
          <h1 className="text-[#111318] dark:text-white text-2xl sm:text-4xl font-bold">
            {t('documentsPage.title')}
          </h1>
        </div>
        <p className="text-[#616f89] dark:text-[#9ea7b8] text-base pl-14">
          {t('documentsPage.subtitle')}
        </p>
        <div className="mt-4 h-1 w-16 bg-primary rounded-full ml-14" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DOCUMENTS.map((doc) => (
          <a
            key={doc.id}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 rounded-xl border border-[#dbdfe6] dark:border-[#2a303c] bg-white dark:bg-[#1c2331] shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
          >
            <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">{doc.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-[#111318] dark:text-white leading-snug group-hover:text-primary transition-colors">
                {t(`documentsPage.items.${doc.id}`)}
              </h3>
              <p className="text-xs text-[#616f89] dark:text-[#9ea7b8] mt-1">
                {doc.kind === 'folder' ? t('documentsPage.folder') : t('documentsPage.document')}
              </p>
            </div>
            <span className="material-symbols-outlined text-[#616f89] group-hover:text-primary transition-colors shrink-0">open_in_new</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Documents;
