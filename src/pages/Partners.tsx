
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PARTNERS, SITE_IMAGES } from '../constants';
import Seo from '../components/Seo';

const Partners: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="animate-fade-in max-w-[1200px] mx-auto px-6 py-10">
            <Seo title={t('nav.partners')} description={t('partnersPage.sectionDesc')} />
            {/* Hero section */}
            <section className="mb-14">
                <div
                    className="flex min-h-[280px] flex-col gap-5 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 relative overflow-hidden shadow-xl"
                    style={{
                        backgroundImage:
                            `linear-gradient(rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.72) 100%), url("${SITE_IMAGES.building}")`,
                    }}
                >
                    <div className="flex flex-col gap-3 text-center z-10 max-w-2xl">
                        <h1 className="text-white text-3xl sm:text-5xl font-black leading-tight">
                            {t('partnersPage.heroTitle')}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Partners grid */}
            <section>
                <div className="flex flex-col gap-4 text-center items-center mb-12">
                    <h2 className="text-primary text-sm font-bold uppercase tracking-widest">
                        {t('partnersPage.sectionLabel')}
                    </h2>
                    <h3 className="text-[#111318] dark:text-white text-3xl font-bold">
                        {t('partnersPage.sectionTitle')}
                    </h3>
                    <p className="text-[#616f89] dark:text-[#9ea7b8] text-base max-w-xl">
                        {t('partnersPage.sectionDesc')}
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {PARTNERS.map((partner) => (
                        <a
                            key={partner.id}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-4 p-4 rounded-xl border border-[#dbdfe6] dark:border-[#2a303c] bg-white dark:bg-[#1c2331] shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                        >
                            {/* White tile so logos with white backgrounds look right in dark mode too */}
                            <div className="w-full h-24 flex items-center justify-center bg-white rounded-lg p-3">
                                <img
                                    src={partner.logo}
                                    alt={t(`partnersPage.items.${partner.id}`)}
                                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <p className="text-xs font-medium text-[#616f89] dark:text-[#9ea7b8] text-center leading-snug group-hover:text-primary transition-colors">
                                {t(`partnersPage.items.${partner.id}`)}
                            </p>
                        </a>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="mt-16 text-center">
                <div className="bg-primary/5 border border-primary/15 rounded-2xl p-10">
                    <span className="material-symbols-outlined text-4xl text-primary mb-4 block">handshake</span>
                    <h3 className="text-[#111318] dark:text-white text-2xl font-bold mb-3">
                        {t('partnersPage.ctaTitle')}
                    </h3>
                    <p className="text-[#616f89] dark:text-[#9ea7b8] text-base mb-6 max-w-md mx-auto">
                        {t('partnersPage.ctaDesc')}
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                        {t('partnersPage.ctaButton')}
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Partners;
