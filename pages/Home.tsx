
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PROGRAMS } from '../constants';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="mt-8">
        <div className="relative overflow-hidden rounded-xl h-[500px] sm:h-[520px]">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1600")'
            }}
          ></div>
          <div className="absolute inset-0 flex flex-col items-start justify-end p-6 sm:p-16">
            <div className="max-w-2xl">
              <h1 className="text-white text-3xl sm:text-6xl font-black leading-[1.1] mb-4 whitespace-pre-line">
                {t('home.heroTitle')}
              </h1>
              <p className="text-white/90 text-lg sm:text-xl font-normal mb-8 leading-relaxed">
                {t('home.heroSubtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/programs" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center gap-2">
                  {t('home.explorePrograms')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-8 py-4 rounded-lg font-bold transition-all">
                  Virtual Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="mt-12">
        <div className="flex items-center justify-between px-2 mb-6">
          <h2 className="text-2xl font-bold tracking-tight">{t('home.resources')}</h2>
          <Link to="/about" className="text-primary text-sm font-semibold hover:underline">View All Portal Links</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: 'person', label: 'Student Portal', link: '#', isExternal: true },
            { icon: 'school', label: 'Admissions', link: '/register', isExternal: false },
            { icon: 'calendar_today', label: 'Academic Calendar', link: '#', isExternal: true },
            { icon: 'map', label: 'Campus Map', link: '/contact', isExternal: false }
          ].map((item, idx) => (
            item.isExternal ? (
              <a key={idx} href={item.link} className="group flex items-center gap-4 p-5 rounded-xl border border-[#dbdfe6] dark:border-[#2a303c] bg-white dark:bg-[#1e2433] hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="bg-primary/10 text-primary p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="font-bold text-[#111318] dark:text-white">{item.label}</h3>
              </a>
            ) : (
              <Link key={idx} to={item.link} className="group flex items-center gap-4 p-5 rounded-xl border border-[#dbdfe6] dark:border-[#2a303c] bg-white dark:bg-[#1e2433] hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="bg-primary/10 text-primary p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="font-bold text-[#111318] dark:text-white">{item.label}</h3>
              </Link>
            )
          ))}
        </div>
      </section>

      {/* Main Programs Highlights */}
      <section className="mt-20 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">{t('home.ourMainPrograms')}</h2>
              <p className="text-[#616f89] dark:text-gray-400 text-lg">{t('home.programsDescription')}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-2">
                <button 
                  onClick={() => scroll('left')}
                  className="w-12 h-12 rounded-full border border-[#dbdfe6] dark:border-[#2a303c] flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="w-12 h-12 rounded-full border border-[#dbdfe6] dark:border-[#2a303c] flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
              <Link to="/programs" className="group flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all ml-2">
                {t('programsPage.viewAll')}
                <span className="material-symbols-outlined transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar px-4 sm:px-6 lg:px-8 scroll-smooth"
        >
          {PROGRAMS.map((prog) => (
            <div key={prog.id} className="flex-none w-[300px] sm:w-[350px] snap-start">
              <div className="flex flex-col h-full rounded-[2rem] overflow-hidden bg-white dark:bg-[#1e2433] border border-[#dbdfe6] dark:border-[#2a303c] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(19,91,236,0.15)] group relative">
                <div 
                  className="h-64 bg-cover bg-center relative transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url("${prog.image}")` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 left-6 bg-white/90 dark:bg-black/40 backdrop-blur-xl px-4 py-1.5 rounded-full flex items-center gap-2 border border-white/20">
                    <span className="material-symbols-outlined text-primary text-sm font-bold">{prog.icon}</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.1em] dark:text-white">{t(`programsPage.faculties.${prog.category}`)}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col grow relative">
                  <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors line-clamp-1 tracking-tight">
                    {t(`programs.${prog.slug}.title`)}
                  </h3>
                  <p className="text-sm text-[#616f89] dark:text-gray-400 mb-8 leading-relaxed line-clamp-3 font-medium">
                    {t(`programs.${prog.slug}.description`)}
                  </p>
                  <div className="mt-auto">
                    <Link to={`/programs/${prog.slug}`} className="group/btn relative flex items-center justify-between w-full p-1.5 rounded-full bg-[#f0f2f4] dark:bg-[#2a303c] overflow-hidden transition-all duration-300 hover:bg-primary">
                      <span className="pl-6 text-[#111318] dark:text-white font-bold text-sm transition-colors group-hover/btn:text-white">
                        {t('home.learnMore')}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-[#111318] flex items-center justify-center transition-all duration-300 group-hover/btn:bg-white/20 group-hover/btn:rotate-[-45deg]">
                        <span className="material-symbols-outlined text-primary group-hover/btn:text-white">arrow_forward</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Filler to allow the last card to be centered or spaced better on large screens */}
          <div className="flex-none w-1 md:w-20" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 mb-20">
        <div className="bg-primary rounded-[2.5rem] p-8 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 size-[400px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 size-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-white text-center lg:text-left relative z-10 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight leading-tight">{t('home.readyToStart')}</h2>
            <p className="text-white/80 text-lg sm:text-xl font-medium">{t('home.newsletterSubtitle')}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4 relative z-10">
            <Link to="/register" className="bg-white text-primary font-black px-10 py-5 rounded-2xl hover:bg-gray-100 transition-all text-center shadow-xl shadow-black/10 active:scale-95">
              {t('home.applyNow')}
            </Link>
            <Link to="/about" className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-black px-10 py-5 rounded-2xl hover:bg-white/20 transition-all text-center active:scale-95">
              {t('nav.about')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
