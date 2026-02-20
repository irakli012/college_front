
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isStrategicOpen, setIsStrategicOpen] = useState(false);
  const [isMobileLearnOpen, setIsMobileLearnOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileStrategicOpen, setIsMobileStrategicOpen] = useState(false);
  const learnRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;
  const isLearnActive = () =>
    ['/programs', '/programs-catalog', '/teachers'].some((p) => location.pathname.startsWith(p));
  const isAboutActive = () =>
    ['/about', '/about/mission', '/about/structure', '/about/authorization', '/about/partners', '/about/strategic'].some(
      (p) => location.pathname.startsWith(p)
    );

  useEffect(() => {
    setIsMenuOpen(false);
    setIsLearnOpen(false);
    setIsAboutOpen(false);
    setIsStrategicOpen(false);
    setIsMobileLearnOpen(false);
    setIsMobileAboutOpen(false);
    setIsMobileStrategicOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (learnRef.current && !learnRef.current.contains(e.target as Node)) {
        setIsLearnOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setIsAboutOpen(false);
        setIsStrategicOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'ka' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const strategicItems = [
    { to: '/about/strategic/action-plans', labelKey: 'nav.strategic.actionPlans', icon: 'task_alt' },
    { to: '/about/strategic/action-reports', labelKey: 'nav.strategic.actionReports', icon: 'assignment_turned_in' },
    { to: '/about/strategic/financial', labelKey: 'nav.strategic.financialIndicators', icon: 'monitoring' },
    { to: '/about/strategic/plan', labelKey: 'nav.strategic.strategicPlan', icon: 'rocket_launch' },
  ];

  const aboutItems = [
    { to: '/about', labelKey: 'nav.aboutUs', icon: 'info' },
    { to: '/about/mission', labelKey: 'nav.mission', icon: 'lightbulb' },
    { to: '/about/structure', labelKey: 'nav.structure', icon: 'account_tree' },
    { to: '/about/authorization', labelKey: 'nav.authorization', icon: 'verified_user' },
    { to: '/about/partners', labelKey: 'nav.partners', icon: 'handshake' },
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] dark:border-b-[#2a303c] bg-white dark:bg-[#111318] px-4 md:px-10 py-3 sticky top-0 z-50">
      <div className="flex items-center gap-4 lg:gap-8">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex md:hidden items-center justify-center p-2 text-[#111318] dark:text-white"
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        <Link to="/" className="flex items-center gap-2 lg:gap-4 text-[#111318] dark:text-white">
          <span className="material-symbols-outlined text-primary text-3xl">school</span>
          <h2 className="text-base lg:text-lg font-bold leading-tight tracking-[-0.015em]">{t('collegeName')}</h2>
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-9">
          <Link to="/" className={`text-sm leading-normal transition-colors ${isActive('/') ? 'text-primary font-semibold' : 'font-medium hover:text-primary'}`}>
            {t('nav.home')}
          </Link>

          {/* About Dropdown */}
          <div ref={aboutRef} className="relative">
            <button
              onClick={() => { setIsAboutOpen(!isAboutOpen); setIsStrategicOpen(false); }}
              className={`flex items-center gap-1 text-sm leading-normal transition-colors ${isAboutActive() ? 'text-primary font-semibold' : 'font-medium hover:text-primary'}`}
            >
              {t('nav.about')}
              <span className={`material-symbols-outlined text-base transition-transform ${isAboutOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            {isAboutOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 lg:w-96 bg-white dark:bg-[#1a1f2e] rounded-lg shadow-xl border border-[#f0f2f4] dark:border-[#2a303c] py-2 z-50">
                {aboutItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors whitespace-normal ${isActive(item.to) ? 'text-primary bg-primary/5 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2a303c]'}`}
                  >
                    <span className="material-symbols-outlined text-lg shrink-0">{item.icon}</span>
                    <span className="flex-1">{t(item.labelKey)}</span>
                  </Link>
                ))}

                {/* Strategic sub-dropdown */}
                <div className="relative">
                  <button
                    onClick={(e) => { e.stopPropagation(); setIsStrategicOpen(!isStrategicOpen); }}
                    className={`flex items-center justify-between w-full px-4 py-3 text-sm transition-colors ${location.pathname.startsWith('/about/strategic') ? 'text-primary bg-primary/5 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2a303c]'}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-lg shrink-0">trending_up</span>
                      <span>{t('nav.strategicLabel')}</span>
                    </span>
                    <span className={`material-symbols-outlined text-base transition-transform ${isStrategicOpen ? 'rotate-90' : ''}`}>chevron_right</span>
                  </button>
                  {isStrategicOpen && (
                    <div className="bg-[#f8f9fb] dark:bg-[#111625] border-t border-[#f0f2f4] dark:border-[#2a303c]">
                      {strategicItems.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className={`flex items-center gap-3 px-6 py-2.5 text-sm transition-colors whitespace-normal ${isActive(item.to) ? 'text-primary font-semibold' : 'text-gray-600 dark:text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-[#2a303c]'}`}
                        >
                          <span className="material-symbols-outlined text-base shrink-0">{item.icon}</span>
                          <span className="flex-1">{t(item.labelKey)}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Learn Dropdown */}
          <div ref={learnRef} className="relative">
            <button
              onClick={() => setIsLearnOpen(!isLearnOpen)}
              className={`flex items-center gap-1 text-sm leading-normal transition-colors ${isLearnActive() ? 'text-primary font-semibold' : 'font-medium hover:text-primary'}`}
            >
              {t('nav.learn')}
              <span className={`material-symbols-outlined text-base transition-transform ${isLearnOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            {isLearnOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 lg:w-96 bg-white dark:bg-[#1a1f2e] rounded-lg shadow-xl border border-[#f0f2f4] dark:border-[#2a303c] py-2 z-50">
                <Link to="/programs" className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors whitespace-normal ${isActive('/programs') ? 'text-primary bg-primary/5 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2a303c]'}`}>
                  <span className="material-symbols-outlined text-lg shrink-0">list_alt</span>
                  <span className="flex-1">{t('nav.programs')}</span>
                </Link>
                <Link to="/programs-catalog" className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors whitespace-normal ${isActive('/programs-catalog') ? 'text-primary bg-primary/5 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2a303c]'}`}>
                  <span className="material-symbols-outlined text-lg shrink-0">menu_book</span>
                  <span className="flex-1">{t('nav.programsCatalog')}</span>
                </Link>
                <Link to="/teachers" className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors whitespace-normal ${isActive('/teachers') ? 'text-primary bg-primary/5 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2a303c]'}`}>
                  <span className="material-symbols-outlined text-lg shrink-0">groups</span>
                  <span className="flex-1">{t('nav.teachers')}</span>
                </Link>
              </div>
            )}
          </div>

          <Link to="/news" className={`text-sm leading-normal transition-colors ${isActive('/news') ? 'text-primary font-semibold' : 'font-medium hover:text-primary'}`}>{t('nav.news')}</Link>
          <Link to="/gallery" className={`text-sm leading-normal transition-colors ${isActive('/gallery') ? 'text-primary font-semibold' : 'font-medium hover:text-primary'}`}>{t('nav.gallery')}</Link>
          <Link to="/library" className={`text-sm leading-normal transition-colors ${isActive('/library') ? 'text-primary font-semibold' : 'font-medium hover:text-primary'}`}>{t('nav.library')}</Link>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`absolute left-0 top-0 h-full w-[300px] bg-white dark:bg-[#111318] shadow-2xl transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-[#f0f2f4] dark:border-[#2a303c]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl">school</span>
                <span className="font-bold dark:text-white">{t('collegeName')}</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 dark:text-white">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <nav className="flex flex-col p-4 gap-1 overflow-y-auto flex-1">
              <Link
                to="/"
                className={`flex items-center gap-3 p-3 rounded-lg transition-all ${isActive('/') ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              >
                <span className="material-symbols-outlined text-xl shrink-0">home</span>
                <span className="font-medium text-sm flex-1 min-w-0">{t('nav.home')}</span>
              </Link>

              {/* Mobile About Collapsible */}
              <button
                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                className={`flex items-center justify-between w-full p-3 rounded-lg transition-all ${isAboutActive() ? 'bg-primary/10 text-primary' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <span className="material-symbols-outlined text-xl shrink-0">info</span>
                  <span className="font-medium text-sm flex-1 min-w-0 text-left break-words leading-snug">{t('nav.about')}</span>
                </div>
                <span className={`material-symbols-outlined text-xl shrink-0 ml-2 transition-transform ${isMobileAboutOpen ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              {isMobileAboutOpen && (
                <div className="flex flex-col gap-0.5 ml-3 pl-3 border-l-2 border-gray-200 dark:border-gray-700">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`flex items-start gap-2 px-2 py-2.5 rounded-lg transition-all text-sm ${isActive(item.to) ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                    >
                      <span className="material-symbols-outlined text-base shrink-0 mt-0.5">{item.icon}</span>
                      <span className="font-medium flex-1 min-w-0 break-words leading-snug">{t(item.labelKey)}</span>
                    </Link>
                  ))}

                  {/* Strategic sub-collapsible */}
                  <button
                    onClick={() => setIsMobileStrategicOpen(!isMobileStrategicOpen)}
                    className={`flex items-center justify-between w-full px-2 py-2.5 rounded-lg transition-all text-sm ${location.pathname.startsWith('/about/strategic') ? 'bg-primary/10 text-primary' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                  >
                    <div className="flex items-start gap-2 min-w-0 flex-1">
                      <span className="material-symbols-outlined text-base shrink-0 mt-0.5">trending_up</span>
                      <span className="font-medium flex-1 min-w-0 break-words leading-snug text-left">{t('nav.strategicLabel')}</span>
                    </div>
                    <span className={`material-symbols-outlined text-base shrink-0 ml-2 transition-transform ${isMobileStrategicOpen ? 'rotate-180' : ''}`}>expand_more</span>
                  </button>
                  {isMobileStrategicOpen && (
                    <div className="flex flex-col gap-0.5 ml-3 pl-3 border-l-2 border-gray-100 dark:border-gray-800">
                      {strategicItems.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className={`flex items-start gap-2 px-2 py-2 rounded-lg transition-all text-xs ${isActive(item.to) ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                        >
                          <span className="material-symbols-outlined text-sm shrink-0 mt-0.5">{item.icon}</span>
                          <span className="font-medium flex-1 min-w-0 break-words leading-snug">{t(item.labelKey)}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Mobile Learn Collapsible */}
              <button
                onClick={() => setIsMobileLearnOpen(!isMobileLearnOpen)}
                className={`flex items-center justify-between w-full p-3 rounded-lg transition-all ${isLearnActive() ? 'bg-primary/10 text-primary' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <span className="material-symbols-outlined text-xl shrink-0">school</span>
                  <span className="font-medium text-sm flex-1 min-w-0 text-left break-words leading-snug">{t('nav.learn')}</span>
                </div>
                <span className={`material-symbols-outlined text-xl shrink-0 ml-2 transition-transform ${isMobileLearnOpen ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              {isMobileLearnOpen && (
                <div className="flex flex-col gap-0.5 ml-3 pl-3 border-l-2 border-gray-200 dark:border-gray-700">
                  {[
                    { to: '/programs', label: t('nav.programs'), icon: 'list_alt' },
                    { to: '/programs-catalog', label: t('nav.programsCatalog'), icon: 'menu_book' },
                    { to: '/teachers', label: t('nav.teachers'), icon: 'groups' },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`flex items-start gap-2 px-2 py-2.5 rounded-lg transition-all text-sm ${isActive(item.to) ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                    >
                      <span className="material-symbols-outlined text-base shrink-0 mt-0.5">{item.icon}</span>
                      <span className="font-medium flex-1 min-w-0 break-words leading-snug">{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}

              {[
                { to: '/news', label: t('nav.news'), icon: 'newspaper' },
                { to: '/gallery', label: t('nav.gallery'), icon: 'photo_library' },
                { to: '/library', label: t('nav.library'), icon: 'menu_book' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all ${isActive(item.to) ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                >
                  <span className="material-symbols-outlined text-xl shrink-0">{item.icon}</span>
                  <span className="font-medium text-sm flex-1 min-w-0 break-words leading-snug">{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="p-6 border-t border-[#f0f2f4] dark:border-[#2a303c] flex flex-col gap-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-between w-full p-3 rounded-lg bg-gray-100 dark:bg-[#2a303c]"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">language</span>
                  <span className="text-sm font-medium dark:text-white">{i18n.language === 'en' ? 'English' : 'ქართული'}</span>
                </div>
                <span className="text-xs font-bold text-primary">{i18n.language === 'en' ? 'KA' : 'EN'}</span>
              </button>

              <button
                onClick={toggleTheme}
                className="flex items-center justify-between w-full p-3 rounded-lg bg-gray-100 dark:bg-[#2a303c]"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">{isDark ? 'light_mode' : 'dark_mode'}</span>
                  <span className="text-sm font-medium dark:text-white">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 justify-end gap-2 lg:gap-4 items-center">
        <label className="hidden lg:flex flex-col min-w-40 h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden">
            <div className="text-[#616f89] flex border-none bg-[#f0f2f4] dark:bg-[#2a303c] items-center justify-center pl-4">
              <span className="material-symbols-outlined text-xl">search</span>
            </div>
            <input className="form-input flex w-full min-w-0 flex-1 border-none bg-[#f0f2f4] dark:bg-[#2a303c] focus:ring-0 text-[#111318] dark:text-white placeholder:text-[#616f89] px-2 text-base font-normal leading-normal" placeholder="Search Programs" />
          </div>
        </label>

        <button
          onClick={toggleLanguage}
          className="hidden md:flex items-center justify-center px-3 h-10 rounded-lg bg-[#f0f2f4] dark:bg-[#2a303c] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-[#111318] dark:text-gray-300 text-xs font-bold uppercase"
        >
          {i18n.language === 'en' ? 'KA' : 'EN'}
        </button>

        <button
          onClick={toggleTheme}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg bg-[#f0f2f4] dark:bg-[#2a303c] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
          aria-label="Toggle dark mode"
        >
          <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
        </button>

        <Link to="/register" className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-xs lg:text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all">
          {t('home.applyNow')}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
