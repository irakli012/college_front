
import React from 'react';
import { useTranslation } from 'react-i18next';

const Partners: React.FC = () => {
    const { t } = useTranslation();

    // Partner placeholder data - replace src with actual logo URLs
    const partners = [
        { id: 1, name: 'პარტნიორი 1', logo: null },
        { id: 2, name: 'პარტნიორი 2', logo: null },
        { id: 3, name: 'პარტნიორი 3', logo: null },
        { id: 4, name: 'პარტნიორი 4', logo: null },
        { id: 5, name: 'პარტნიორი 5', logo: null },
        { id: 6, name: 'პარტნიორი 6', logo: null },
        { id: 7, name: 'პარტნიორი 7', logo: null },
        { id: 8, name: 'პარტნიორი 8', logo: null },
    ];

    return (
        <div className="animate-fade-in max-w-[1200px] mx-auto px-6 py-10">
            {/* Hero section */}
            <section className="mb-14">
                <div
                    className="flex min-h-[280px] flex-col gap-5 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 relative overflow-hidden shadow-xl"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.72) 100%), url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200")',
                    }}
                >
                    <div className="flex flex-col gap-3 text-center z-10 max-w-2xl">
                        <h1 className="text-white text-3xl sm:text-5xl font-black leading-tight">
                            {t('partnersPage.heroTitle')}
                        </h1>
                        <p className="text-white/85 text-base sm:text-lg font-medium">
                            {t('partnersPage.heroSubtitle')}
                        </p>
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
                    {partners.map((partner) => (
                        <div
                            key={partner.id}
                            className="group flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-[#dbdfe6] dark:border-[#2a303c] bg-white dark:bg-[#1c2331] shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                        >
                            {partner.logo ? (
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-16 object-contain grayscale group-hover:grayscale-0 transition-all"
                                />
                            ) : (
                                <div className="w-full h-16 flex items-center justify-center bg-[#f0f2f4] dark:bg-[#2a303c] rounded-lg">
                                    <span className="material-symbols-outlined text-3xl text-[#616f89] dark:text-[#9ea7b8]">business</span>
                                </div>
                            )}
                            <p className="text-xs font-medium text-[#616f89] dark:text-[#9ea7b8] text-center">
                                {partner.name}
                            </p>
                        </div>
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
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                        {t('partnersPage.ctaButton')}
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Partners;
