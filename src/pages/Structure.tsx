
import React from 'react';
import { useTranslation } from 'react-i18next';

const Structure: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="animate-fade-in max-w-[1200px] mx-auto px-6 py-10">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-[#111318] dark:text-white text-3xl sm:text-4xl font-bold mb-2">
                    {t('structurePage.title')}
                </h1>
                <p className="text-[#616f89] dark:text-[#9ea7b8] text-base">
                    {t('structurePage.subtitle')}
                </p>
                <div className="mt-4 h-1 w-16 bg-primary rounded-full" />
            </div>

            {/* Embedded Google Slides */}
            <div className="rounded-2xl overflow-hidden border border-[#dbdfe6] dark:border-[#2a303c] shadow-lg bg-white dark:bg-[#1c2331]">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                        src="https://docs.google.com/presentation/d/1Fasy_moOl61BL6RxNA9F81d-yymjYQ0R/embed?start=false&loop=false&delayms=3000"
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                        title={t('structurePage.title')}
                    />
                </div>
            </div>

            {/* Open in new tab link */}
            <div className="mt-6 flex justify-center">
                <a
                    href="https://docs.google.com/presentation/d/1Fasy_moOl61BL6RxNA9F81d-yymjYQ0R/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                    {t('structurePage.openInDrive')}
                </a>
            </div>
        </div>
    );
};

export default Structure;
