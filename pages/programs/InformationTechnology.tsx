import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const InformationTechnology: React.FC = () => {
  const { t } = useTranslation();
  const slug = 'information-technology';

  return (
    <div className="animate-fade-in -mx-4 sm:-mx-6 lg:-mx-8">
      <div className="max-w-[1200px] mx-auto w-full px-6 pt-6">
        <div className="flex flex-wrap gap-2 py-4">
          <Link className="text-[#616f89] dark:text-[#9ea7b8] text-sm font-medium leading-normal hover:text-primary transition-colors" to="/">{t('nav.home')}</Link>
          <span className="text-[#616f89] dark:text-[#9ea7b8] text-sm font-medium leading-normal">/</span>
          <Link className="text-[#616f89] dark:text-[#9ea7b8] text-sm font-medium leading-normal hover:text-primary transition-colors" to="/programs">{t('nav.programs')}</Link>
          <span className="text-[#616f89] dark:text-[#9ea7b8] text-sm font-medium leading-normal">/</span>
          <span className="text-[#111318] dark:text-white text-sm font-bold leading-normal">{t(`programs.${slug}.title`)}</span>
        </div>
      </div>
      
      <section className="max-w-[1200px] mx-auto w-full px-6 mb-12">
        <div className="@container">
          <div className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end p-10 relative overflow-hidden shadow-xl" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%), url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600")' }}>
            <div className="z-10">
              <span className="bg-primary px-3 py-1 rounded text-xs font-bold text-white uppercase tracking-wider mb-4 inline-block">{t('programDetail.departments.it')}</span>
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl mb-4">
                {t(`programs.${slug}.degree`)}
              </h1>
              <p className="text-white/90 text-lg font-medium leading-relaxed max-w-2xl">
                {t(`programs.${slug}.subtitle`)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto w-full px-6 flex flex-col lg:flex-row gap-12 pb-20">
        <div className="flex-1 flex flex-col gap-16">
          <section className="flex flex-col gap-6" id="overview">
            <h2 className="text-[#111318] dark:text-white text-3xl font-bold border-l-4 border-primary pl-4">{t('programDetail.overview')}</h2>
            <p className="text-[#616f89] dark:text-[#9ea7b8] text-lg leading-relaxed">
              {t(`programs.${slug}.overview1`)}
            </p>
            <p className="text-[#616f89] dark:text-[#9ea7b8] text-lg leading-relaxed">
              {t(`programs.${slug}.overview2`)}
            </p>
          </section>

          <section className="flex flex-col gap-8" id="curriculum">
            <h2 className="text-[#111318] dark:text-white text-3xl font-bold border-l-4 border-primary pl-4">{t('programDetail.curriculum')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(t(`programs.${slug}.curriculumItems`, { returnObjects: true }) as any[]).map((item, idx) => {
                const icons = ['code', 'lan', 'psychology', 'security', 'database', 'terminal'];
                return (
                  <div key={idx} className="flex items-start gap-4 p-5 rounded-xl border border-[#dbdfe6] dark:border-[#2a303c] bg-white dark:bg-[#1c2331] hover:shadow-md transition-shadow">
                    <span className="material-symbols-outlined text-primary">{icons[idx]}</span>
                    <div>
                      <h4 className="font-bold dark:text-white">{item.title}</h4>
                      <p className="text-sm text-[#616f89] dark:text-[#9ea7b8]">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="flex flex-col gap-6" id="careers">
            <h2 className="text-[#111318] dark:text-white text-3xl font-bold border-l-4 border-primary pl-4">{t('programDetail.careers')}</h2>
            <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-xl border border-primary/20">
              <p className="text-[#111318] dark:text-white mb-6">{t(`programs.${slug}.careerText`)}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2">
                {(t(`programs.${slug}.roles`, { returnObjects: true }) as string[]).map((role, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-medium text-[#111318] dark:text-white">
                    <span className="material-symbols-outlined text-primary scale-75">check_circle</span> {role}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-8" id="faculty">
            <h2 className="text-[#111318] dark:text-white text-3xl font-bold border-l-4 border-primary pl-4">{t('programDetail.facultySpotlight')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4 p-4 bg-white dark:bg-[#1c2331] rounded-xl border border-[#dbdfe6] dark:border-[#2a303c] items-center">
                <img alt="Dr. Robert Chen" className="w-20 h-20 rounded-full object-cover shadow-md" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"/>
                <div>
                  <h4 className="font-bold dark:text-white">{t('about.team.4.name')}</h4>
                  <p className="text-xs text-primary font-bold uppercase mb-1">Expert in AI & ML</p>
                  <p className="text-xs text-[#616f89] dark:text-[#9ea7b8]">Published 40+ papers on neural network optimization.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-white dark:bg-[#1c2331] rounded-xl border border-[#dbdfe6] dark:border-[#2a303c] items-center">
                <img alt="Prof. Marcus Sterling" className="w-20 h-20 rounded-full object-cover shadow-md" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"/>
                <div>
                  <h4 className="font-bold dark:text-white">{t('about.team.2.name')}</h4>
                  <p className="text-xs text-primary font-bold uppercase mb-1">Cybersecurity Specialist</p>
                  <p className="text-xs text-[#616f89] dark:text-[#9ea7b8]">Former lead security consultant for Fortune 500 companies.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside className="lg:w-80 flex-none">
          <div className="sticky top-24 flex flex-col gap-6">
            <div className="bg-white dark:bg-[#1c2331] rounded-xl border border-[#dbdfe6] dark:border-[#2a303c] shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6 dark:text-white">{t('programDetail.quickFacts')}</h3>
              <div className="flex flex-col gap-5">
                {[
                  { icon: 'schedule', label: t('programDetail.facts.duration'), value: t(`programs.${slug}.quickFacts.duration`) },
                  { icon: 'credit_card', label: t('programDetail.facts.credits'), value: t(`programs.${slug}.quickFacts.credits`) },
                  { icon: 'calendar_today', label: t('programDetail.facts.startDate'), value: t(`programs.${slug}.quickFacts.startDate`) },
                  { icon: 'attach_money', label: t('programDetail.facts.tuition'), value: t(`programs.${slug}.quickFacts.tuition`) }
                ].map((fact, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">{fact.icon}</span>
                    <div>
                      <p className="text-xs text-[#616f89] dark:text-[#9ea7b8] font-medium">{fact.label}</p>
                      <p className="font-bold dark:text-white">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <button className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-md">
                  {t('programDetail.applyNow')}
                </button>
                <button className="w-full bg-transparent border border-[#dbdfe6] dark:border-[#2a303c] dark:text-white py-4 rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                  {t('programDetail.downloadBrochure')}
                </button>
              </div>
            </div>
            <div className="bg-[#111318] dark:bg-primary p-6 rounded-xl text-white shadow-lg">
              <h4 className="font-bold mb-2">{t('programDetail.questions.title')}</h4>
              <p className="text-sm opacity-80 mb-4">{t('programDetail.questions.subtitle')}</p>
              <a className="inline-flex items-center gap-2 text-sm font-bold hover:underline" href="#">
                {t('programDetail.questions.link')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default InformationTechnology;
