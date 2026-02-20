
import React from 'react';
import { useTranslation } from 'react-i18next';

interface DrivePageProps {
    titleKey: string;
    subtitleKey: string;
    driveUrl?: string;
    embedUrl?: string;
    icon?: string;
}

const DrivePage: React.FC<DrivePageProps> = ({ titleKey, subtitleKey, driveUrl, embedUrl, icon = 'description' }) => {
    const { t } = useTranslation();

    const isPlaceholder = !driveUrl && !embedUrl;

    return (
        <div className="animate-fade-in max-w-[1200px] mx-auto px-6 py-10">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <h1 className="text-[#111318] dark:text-white text-2xl sm:text-4xl font-bold">
                        {t(titleKey)}
                    </h1>
                </div>
                <p className="text-[#616f89] dark:text-[#9ea7b8] text-base pl-14">
                    {t(subtitleKey)}
                </p>
                <div className="mt-4 h-1 w-16 bg-primary rounded-full ml-14" />
            </div>

            {isPlaceholder ? (
                /* Placeholder state */
                <div className="flex flex-col items-center justify-center gap-5 p-16 rounded-2xl border-2 border-dashed border-[#dbdfe6] dark:border-[#2a303c] bg-[#f8f9fb] dark:bg-[#1c2331]/50">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-3xl">folder_open</span>
                    </div>
                    <div className="text-center max-w-md">
                        <h3 className="text-[#111318] dark:text-white text-lg font-bold mb-2">
                            {t('strategic.comingSoon')}
                        </h3>
                        <p className="text-[#616f89] dark:text-[#9ea7b8] text-sm leading-relaxed">
                            {t('strategic.comingSoonDesc')}
                        </p>
                    </div>
                </div>
            ) : (
                <>
                    {/* Drive embed */}
                    <div className="rounded-2xl overflow-hidden border border-[#dbdfe6] dark:border-[#2a303c] shadow-lg bg-white dark:bg-[#1c2331]">
                        <iframe
                            src={embedUrl}
                            className="w-full"
                            style={{ height: '700px' }}
                            frameBorder="0"
                            title={t(titleKey)}
                        />
                    </div>
                    {driveUrl && (
                        <div className="mt-6 flex justify-center">
                            <a
                                href={driveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                            >
                                <span className="material-symbols-outlined text-base">open_in_new</span>
                                {t('strategic.openInDrive')}
                            </a>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default DrivePage;
