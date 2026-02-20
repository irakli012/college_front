
import React from 'react';
import { useTranslation } from 'react-i18next';

const MissionValues: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in max-w-[1200px] mx-auto px-6 py-10">
      {/* Hero Banner */}
      <section className="mb-14">
        <div
          className="flex min-h-[320px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 relative overflow-hidden shadow-xl"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.72) 100%), url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200")',
          }}
        >
          <div className="flex flex-col gap-3 text-center z-10 max-w-3xl">
            <h1 className="text-white text-3xl sm:text-5xl font-black leading-tight tracking-[-0.02em]">
              {t('missionPage.heroTitle')}
            </h1>
            <p className="text-white/85 text-base sm:text-lg font-medium leading-relaxed">
              {t('missionPage.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mb-10">
        <div className="bg-white dark:bg-[#1c2331] rounded-2xl border border-[#dbdfe6] dark:border-[#2a303c] p-8 sm:p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-3xl">lightbulb</span>
            </div>
            <h2 className="text-[#111318] dark:text-white text-2xl sm:text-3xl font-bold">
              {t('missionPage.missionTitle')}
            </h2>
          </div>
          <div className="space-y-4 text-[#616f89] dark:text-[#9ea7b8] text-base leading-relaxed">
            <p>{t('missionPage.missionP1')}</p>
            <p>{t('missionPage.missionP2')}</p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="mb-10">
        <div className="bg-white dark:bg-[#1c2331] rounded-2xl border border-[#dbdfe6] dark:border-[#2a303c] p-8 sm:p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-3xl">visibility</span>
            </div>
            <h2 className="text-[#111318] dark:text-white text-2xl sm:text-3xl font-bold">
              {t('missionPage.visionTitle')}
            </h2>
          </div>
          <div className="space-y-4 text-[#616f89] dark:text-[#9ea7b8] text-base leading-relaxed">
            <p>{t('missionPage.visionP1')}</p>
            <p>{t('missionPage.visionP2')}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="bg-white dark:bg-[#1c2331] rounded-2xl border border-[#dbdfe6] dark:border-[#2a303c] p-8 sm:p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-3xl">diamond</span>
            </div>
            <h2 className="text-[#111318] dark:text-white text-2xl sm:text-3xl font-bold">
              {t('missionPage.valuesTitle')}
            </h2>
          </div>
          <p className="text-[#616f89] dark:text-[#9ea7b8] text-base leading-relaxed mb-8">
            {t('missionPage.valuesIntro')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: 'groups', key: 'teamwork' },
              { icon: 'verified', key: 'professionalism' },
              { icon: 'favorite', key: 'dedication' },
              { icon: 'rocket_launch', key: 'innovation' },
              { icon: 'balance', key: 'equality' },
            ].map(({ icon, key }) => (
              <div
                key={key}
                className="flex gap-4 items-start p-5 rounded-xl bg-[#f8f9fb] dark:bg-[#2a303c]/60 border border-[#dbdfe6] dark:border-[#2a303c]"
              >
                <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-xl">{icon}</span>
                </div>
                <p className="text-sm text-[#111318] dark:text-white font-medium leading-relaxed">
                  {t(`missionPage.valuesList.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionValues;
