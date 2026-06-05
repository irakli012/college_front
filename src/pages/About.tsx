
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TeamMember } from '../types';
import Seo from '../components/Seo';

const About: React.FC = () => {
  const { t } = useTranslation();
  const teamData = t('about.team', { returnObjects: true }) as Record<string, TeamMember>;
  const team = Object.entries(teamData).map(([id, member]) => ({ ...member, id }));

  return (
    <div className="animate-fade-in max-w-[1200px] mx-auto px-6 py-10">
      <Seo title={t('nav.aboutUs')} description={t('about.heroSubtitle')} />

      {/* Hero Banner */}
      <section className="mb-14">
        <div
          className="flex min-h-[420px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 relative overflow-hidden shadow-xl"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&q=80&w=1200")',
          }}
        >
          <div className="flex flex-col gap-4 text-center z-10 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest rounded-full border border-white/25 w-fit mx-auto">
              {t('about.universityStatus')}
            </span>
            <h1 className="text-white text-3xl sm:text-5xl font-black leading-tight tracking-[-0.02em]">
              {t('collegeName')}
            </h1>
            <p className="text-white/85 text-base sm:text-lg font-medium leading-relaxed">
              {t('about.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: History text */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">
                {t('about.historyLabel')}
              </h2>
              <h3 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight mb-4">
                {t('about.journeyTitle')}
              </h3>
              <div className="space-y-4 text-[#616f89] dark:text-[#9ea7b8] text-base leading-relaxed">
                <p>{t('about.historyP1')}</p>
              </div>
            </div>
          </div>

          {/* Right: image with year badge */}
          <div className="relative">
            <img
              className="rounded-xl shadow-2xl object-cover h-[300px] sm:h-[440px] w-full"
              src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800"
              alt="College Ilia campus"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg hidden md:block">
              <p className="text-4xl font-bold">25+</p>
              <p className="text-sm">{t('about.yearsExcellence')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reputation Section */}
      <section className="mb-14">
        <div className="bg-white dark:bg-[#1c2331] rounded-2xl border border-[#dbdfe6] dark:border-[#2a303c] p-8 sm:p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-2xl">school</span>
            </div>
            <h3 className="text-[#111318] dark:text-white text-2xl font-bold">{t('about.reputationTitle')}</h3>
          </div>

          <p className="text-[#616f89] dark:text-[#9ea7b8] text-base leading-relaxed mb-8">
            {t('about.reputationDesc')}
          </p>

          {/* Bullet highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: 'menu_book', key: 'highlight1' },
              { icon: 'science', key: 'highlight2' },
              { icon: 'handshake', key: 'highlight3' },
              { icon: 'history_edu', key: 'highlight4' },
            ].map(({ icon, key }) => (
              <div
                key={key}
                className="flex items-center gap-3 p-4 rounded-lg bg-[#f8f9fb] dark:bg-[#2a303c]/60 border border-[#dbdfe6] dark:border-[#2a303c]"
              >
                <div className="bg-primary/10 w-9 h-9 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-lg">{icon}</span>
                </div>
                <span className="text-sm font-medium text-[#111318] dark:text-white leading-snug">
                  {t(`about.highlights.${key}`)}
                </span>
              </div>
            ))}
          </div>

          <p className="text-[#616f89] dark:text-[#9ea7b8] text-base leading-relaxed">
            {t('about.reputationP2')}
          </p>
        </div>
      </section>

      {/* Admin Team */}
      <section className="py-12 sm:py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-primary text-sm font-bold uppercase tracking-widest">{t('about.leadership')}</h2>
              <h3 className="text-[#111318] dark:text-white text-3xl font-bold">{t('about.adminTeam')}</h3>
            </div>
            <Link to="/teachers" className="text-primary font-bold flex items-center gap-2 hover:underline self-start sm:self-auto">
              {t('about.meetFaculty')} <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.id} className="bg-white dark:bg-[#1c2331] rounded-xl overflow-hidden border border-[#dbdfe6] dark:border-[#2a303c] shadow-sm group hover:shadow-lg transition-all">
                <div className="aspect-square overflow-hidden bg-gray-200">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={member.image} alt={member.name} />
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

      {/* Facebook CTA */}
      <section className="pb-12">
        <div className="text-center rounded-2xl bg-gradient-to-br from-[#1877F2]/10 to-primary/5 border border-[#1877F2]/20 p-10">
          <div className="w-16 h-16 rounded-full bg-[#1877F2] flex items-center justify-center mx-auto mb-4">
            {/* Facebook icon SVG */}
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
          <h3 className="text-[#111318] dark:text-white text-2xl font-bold mb-2">{t('about.fbTitle')}</h3>
          <p className="text-[#616f89] dark:text-[#9ea7b8] text-base mb-6 max-w-md mx-auto">
            {t('about.fbDesc')}
          </p>
          <a
            href="https://www.facebook.com/people/%E1%83%98%E1%83%9A%E1%83%98%E1%83%90-%E1%83%AD%E1%83%90%E1%83%95%E1%83%AD%E1%83%90%E1%83%95%E1%83%90%E1%83%AB%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%96%E1%83%9D%E1%83%92%E1%83%90%E1%83%93%E1%83%9D%E1%83%94%E1%83%91%E1%83%A0%E1%83%98%E1%83%95%E1%83%98-%E1%83%99%E1%83%9D%E1%83%9A%E1%83%94%E1%83%AF%E1%83%98/100077892887379/?locale=ka_GE#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-lg font-semibold text-sm hover:bg-[#1664d8] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            {t('about.fbButton')}
          </a>
        </div>
      </section>

    </div>
  );
};

export default About;
