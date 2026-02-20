
import React from 'react';
import { useTranslation } from 'react-i18next';

const Authorization: React.FC = () => {
    const { t } = useTranslation();

    const FOLDER_ID = '1t9MMucjpTcY-Yk125fI69eNZifVgtcHT';
    const FOLDER_URL = `https://drive.google.com/drive/folders/${FOLDER_ID}`;
    const EMBED_URL = `https://drive.google.com/embeddedfolderview?id=${FOLDER_ID}#list`;

    return (
        <div className="animate-fade-in max-w-[1200px] mx-auto px-6 py-10">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-[#111318] dark:text-white text-3xl sm:text-4xl font-bold mb-2">
                    {t('authorizationPage.title')}
                </h1>
                <p className="text-[#616f89] dark:text-[#9ea7b8] text-base">
                    {t('authorizationPage.subtitle')}
                </p>
                <div className="mt-4 h-1 w-16 bg-primary rounded-full" />
            </div>

            {/* Info banner */}
            <div className="mb-6 flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                <span className="material-symbols-outlined text-primary mt-0.5">info</span>
                <p className="text-sm text-[#616f89] dark:text-[#9ea7b8] leading-relaxed">
                    {t('authorizationPage.infoNote')}
                </p>
            </div>

            {/* Embedded Google Drive Folder */}
            <div className="rounded-2xl overflow-hidden border border-[#dbdfe6] dark:border-[#2a303c] shadow-lg bg-white dark:bg-[#1c2331]">
                <iframe
                    src={EMBED_URL}
                    className="w-full"
                    style={{ height: '600px' }}
                    frameBorder="0"
                    title={t('authorizationPage.title')}
                />
            </div>

            {/* Open in Drive button */}
            <div className="mt-6 flex justify-center">
                <a
                    href={FOLDER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                    <span className="material-symbols-outlined text-base">folder_open</span>
                    {t('authorizationPage.openInDrive')}
                </a>
            </div>
        </div>
    );
};

export default Authorization;
