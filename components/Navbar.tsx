
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Initialize theme from localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Apply theme class to document element
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
          <h2 className="text-base lg:text-lg font-bold leading-tight tracking-[-0.015em]">Ilia College</h2>
        </Link>
        <nav className="hidden md:flex items-center gap-4 lg:gap-9">
          <Link to="/" className={`text-sm leading-normal transition-colors ${isActive('/') ? 'text-primary font-semibold' : 'font-medium hover:text-primary'}`}>{t('nav.home')}</Link>
          <Link to="/about" className={`text-sm leading-normal transition-colors ${isActive('/about') ? 'text-primary font-semibold' : 'font-medium hover:text-primary'}`}>{t('nav.about')}</Link>
          <Link to="/programs" className={`text-sm leading-normal transition-colors ${isActive('/programs') ? 'text-primary font-semibold' : 'font-medium hover:text-primary'}`}>{t('nav.programs')}</Link>
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
          className={`absolute left-0 top-0 h-full w-[280px] bg-white dark:bg-[#111318] shadow-2xl transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-[#f0f2f4] dark:border-[#2a303c]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl">school</span>
                <span className="font-bold dark:text-white">Ilia College</span>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 dark:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <nav className="flex flex-col p-4 gap-2">
              {[
                { to: '/', label: t('nav.home'), icon: 'home' },
                { to: '/about', label: t('nav.about'), icon: 'info' },
                { to: '/programs', label: t('nav.programs'), icon: 'list_alt' },
                { to: '/news', label: t('nav.news'), icon: 'newspaper' },
                { to: '/gallery', label: t('nav.gallery'), icon: 'photo_library' },
                { to: '/library', label: t('nav.library'), icon: 'menu_book' }
              ].map((item) => (
                <Link 
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-4 p-3 rounded-lg transition-all ${isActive(item.to) ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                >
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  <span className="font-medium text-sm">{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-auto p-6 border-t border-[#f0f2f4] dark:border-[#2a303c] flex flex-col gap-4">
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
          <span className="material-symbols-outlined">
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-xs lg:text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all">
          {t('home.applyNow')}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
