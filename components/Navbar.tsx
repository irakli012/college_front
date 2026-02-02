
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-[#f0f2f4] dark:border-[#2a303c] bg-white/95 dark:bg-[#101622]/95 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6 py-3 flex items-center justify-between gap-8">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="text-primary text-3xl">
              <span className="material-symbols-outlined text-4xl">school</span>
            </div>
            <h2 className="text-[#111318] dark:text-white text-xl font-bold leading-tight tracking-tight">College Ilia</h2>
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-primary' : 'text-[#111318] dark:text-gray-300 hover:text-primary'}`}>Home</Link>
            <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'text-[#111318] dark:text-gray-300 hover:text-primary'}`}>About Us</Link>
            <Link to="/programs" className={`text-sm font-medium transition-colors ${isActive('/programs') ? 'text-primary' : 'text-[#111318] dark:text-gray-300 hover:text-primary'}`}>Programs</Link>
            <Link to="/news" className={`text-sm font-medium transition-colors ${isActive('/news') ? 'text-primary' : 'text-[#111318] dark:text-gray-300 hover:text-primary'}`}>News</Link>
            <Link to="/gallery" className={`text-sm font-medium transition-colors ${isActive('/gallery') ? 'text-primary' : 'text-[#111318] dark:text-gray-300 hover:text-primary'}`}>Gallery</Link>
            <Link to="/library" className={`text-sm font-medium transition-colors ${isActive('/library') ? 'text-primary' : 'text-[#111318] dark:text-gray-300 hover:text-primary'}`}>Library</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-stretch bg-[#f0f2f4] dark:bg-[#1e2433] rounded-lg h-10 overflow-hidden border border-transparent focus-within:border-primary">
            <div className="flex items-center justify-center pl-3 text-gray-500">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input className="w-full bg-transparent border-none text-sm focus:ring-0 px-2 placeholder:text-gray-500 dark:text-white" placeholder="Search resources..." type="text"/>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#f0f2f4] dark:bg-[#1e2433] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold tracking-tight transition-all">
            Apply Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
