
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TeamMember } from '../types';

const About: React.FC = () => {
  const { t } = useTranslation();
  const teamData = t('about.team', { returnObjects: true }) as Record<string, TeamMember>;
  const team = Object.entries(teamData).map(([id, member]) => ({ ...member, id }));

  return (
    <div className="animate-fade-in max-w-[1200px] mx-auto px-6 py-10">
      {/* Hero Section */}
      <section className="mb-16">
        <div 
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 relative overflow-hidden group shadow-xl" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&q=80&w=1200")' 
          }}
        >
          <div className="flex flex-col gap-4 text-center z-10 max-w-3xl">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-6xl">
              {t('about.heroTitle')}
            </h1>
            <h2 className="text-white/90 text-base font-medium leading-relaxed sm:text-lg">
              {t('about.heroSubtitle')}
            </h2>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center items-center">
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest">{t('about.foundation')}</h2>
            <h3 className="text-[#111318] dark:text-white text-4xl font-bold leading-tight max-w-[720px]">
              {t('about.missionVision')}
            </h3>
            <p className="text-[#616f89] dark:text-[#9ea7b8] text-lg font-normal leading-relaxed max-w-[720px]">
              {t('about.missionSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6 rounded-xl border border-[#dbdfe6] dark:border-[#2a303c] bg-white dark:bg-[#1c2331] p-8 flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">lightbulb</span>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-[#111318] dark:text-white text-2xl font-bold">{t('about.missionTitle')}</h4>
                <p className="text-[#616f89] dark:text-[#9ea7b8] text-base leading-relaxed">
                  {t('about.missionDesc')}
                </p>
              </div>
            </div>
            <div className="flex gap-6 rounded-xl border border-[#dbdfe6] dark:border-[#2a303c] bg-white dark:bg-[#1c2331] p-8 flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">visibility</span>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-[#111318] dark:text-white text-2xl font-bold">{t('about.visionTitle')}</h4>
                <p className="text-[#616f89] dark:text-[#9ea7b8] text-base leading-relaxed">
                  {t('about.visionDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* New Values Section */}
          <div className="mt-8 rounded-xl border border-[#dbdfe6] dark:border-[#2a303c] bg-white dark:bg-[#1c2331] p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">diamond</span>
              </div>
              <h4 className="text-[#111318] dark:text-white text-2xl font-bold">{t('about.valuesTitle')}</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.keys(t('about.valuesList', { returnObjects: true })).map((key) => (
                <div key={key} className="flex flex-col gap-2 p-4 rounded-lg bg-[#f8f9fb] dark:bg-[#2a303c]/50">
                  <p className="text-sm text-[#111318] dark:text-white font-medium leading-relaxed">
                    {t(`about.valuesList.${key}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Journey */}
      <section className="bg-white dark:bg-[#111318] py-16 -mx-6 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              className="rounded-xl shadow-2xl object-cover h-[300px] sm:h-[500px] w-full" 
              src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800" 
              alt="Campus History"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg hidden md:block">
              <p className="text-4xl font-bold">25+</p>
              <p className="text-sm">{t('about.yearsExcellence')}</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight">{t('about.journeyTitle')}</h2>
            <p className="text-[#616f89] dark:text-[#9ea7b8] text-lg leading-relaxed">
              {t('about.journeyDesc')}
            </p>
            <div className="flex flex-col gap-8 mt-4">
              {[
                { icon: 'history_edu', title: t('about.history.foundation'), desc: t('about.history.foundationDesc') },
                { icon: 'track_changes', title: t('about.history.innovationHub'), desc: t('about.history.innovationDesc') },
                { icon: 'auto_graph', title: t('about.history.globalReach'), desc: t('about.history.globalDesc') }
              ].map((step, idx, arr) => (
                <div key={idx} className="flex gap-6 relative">
                  {idx !== arr.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-[-32px] w-[2px] bg-primary/10"></div>
                  )}
                  <div className="flex-none w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary z-10 border-4 border-white dark:border-[#111318]">
                    <span className="material-symbols-outlined text-xl">{step.icon}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="font-bold text-[#111318] dark:text-white text-lg">{step.title}</h5>
                    <p className="text-sm text-[#616f89] dark:text-[#9ea7b8] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Administration */}
      <section className="py-12 sm:py-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-primary text-sm font-bold uppercase tracking-widest">{t('about.leadership')}</h2>
              <h3 className="text-[#111318] dark:text-white text-3xl font-bold">{t('about.adminTeam')}</h3>
            </div>
            <a className="text-primary font-bold flex items-center gap-2 hover:underline self-start sm:self-auto" href="#">
              {t('about.meetFaculty')} <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.id} className="bg-white dark:bg-[#1c2331] rounded-xl overflow-hidden border border-[#dbdfe6] dark:border-[#2a303c] shadow-sm group hover:shadow-lg transition-all">
                <div className="aspect-square overflow-hidden bg-gray-200">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={member.image} alt={member.name}/>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold dark:text-white">{member.name}</h4>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-[#616f89] dark:text-[#9ea7b8] text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
