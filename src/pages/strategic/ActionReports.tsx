
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface DocItem {
    titleKey: string;
    embedUrl: string;
    openUrl: string;
}

const ActionReports: React.FC = () => {
    const { t } = useTranslation();
    const [activeDoc, setActiveDoc] = useState<number>(0);

    const documents: DocItem[] = [
        {
            titleKey: 'strategic.actionReports.doc1',
            embedUrl:
                'https://docs.google.com/document/d/1retJpYdbbb3TR4SfsxkKh5RnIxYkb5ZB/preview',
            openUrl:
                'https://docs.google.com/document/d/1retJpYdbbb3TR4SfsxkKh5RnIxYkb5ZB/edit',
        },
        {
            titleKey: 'strategic.actionReports.doc2',
            embedUrl:
                'https://docs.google.com/document/d/1y9JPN9KMe09GrMVb3oE9AJ2AeNjCo1d7/preview',
            openUrl:
                'https://docs.google.com/document/d/1y9JPN9KMe09GrMVb3oE9AJ2AeNjCo1d7/edit#heading=h.uwl4ed42f855',
        },
    ];

    return (
        <div className="animate-fade-in max-w-[1200px] mx-auto px-6 py-10">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">assignment_turned_in</span>
                    </div>
                    <h1 className="text-[#111318] dark:text-white text-2xl sm:text-4xl font-bold">
                        {t('strategic.actionReports.title')}
                    </h1>
                </div>
                <p className="text-[#616f89] dark:text-[#9ea7b8] text-base pl-14">
                    {t('strategic.actionReports.subtitle')}
                </p>
                <div className="mt-4 h-1 w-16 bg-primary rounded-full ml-14" />
            </div>

            {/* Tab selector */}
            <div className="flex gap-3 mb-6 flex-wrap">
                {documents.map((doc, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveDoc(idx)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all border ${activeDoc === idx
                                ? 'bg-primary text-white border-primary shadow-sm'
                                : 'bg-white dark:bg-[#1c2331] text-[#616f89] dark:text-[#9ea7b8] border-[#dbdfe6] dark:border-[#2a303c] hover:border-primary/40'
                            }`}
                    >
                        <span className="material-symbols-outlined text-base">description</span>
                        {t(doc.titleKey)}
                    </button>
                ))}
            </div>

            {/* Active embed */}
            {documents.map((doc, idx) => (
                <div key={idx} className={idx === activeDoc ? 'block' : 'hidden'}>
                    <div className="rounded-2xl overflow-hidden border border-[#dbdfe6] dark:border-[#2a303c] shadow-lg bg-white dark:bg-[#1c2331]">
                        <iframe
                            src={doc.embedUrl}
                            className="w-full"
                            style={{ height: '700px' }}
                            frameBorder="0"
                            title={t(doc.titleKey)}
                        />
                    </div>
                    <div className="mt-5 flex justify-center">
                        <a
                            href={doc.openUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                        >
                            <span className="material-symbols-outlined text-base">open_in_new</span>
                            {t('strategic.openInDrive')}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ActionReports;
