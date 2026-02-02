
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
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
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] dark:border-b-[#2a303c] bg-white dark:bg-[#111318] px-10 py-3 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-4 text-[#111318] dark:text-white">
          <div className="size-6 text-primary">
            <span className="material-symbols-outlined text-3xl">school</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">College Ilia</h2>
        </Link>
        <nav className="hidden md:flex items-center gap-9">
          <Link to="/" className={`text-sm leading-normal transition-colors ${isActive('/') ? 'text-primary font-semibold' : 'font-medium hover:text-primary'}`}>Home</Link>
          <Link to="/about" className={`text-sm leading-normal transition-colors ${isActive('/about') ? 'text-primary font-semibold' : 'font-medium hover:text-primary'}`}>About</Link>
          <Link to="/programs" className={`text-sm leading-normal transition-colors ${isActive('/programs') ? 'text-primary font-semibold' : 'font-medium hover:text-primary'}`}>Programs</Link>
          <Link to="/news" className={`text-sm leading-normal transition-colors ${isActive('/news') ? 'text-primary font-semibold' : 'font-medium hover:text-primary'}`}>News</Link>
          <Link to="/gallery" className={`text-sm leading-normal transition-colors ${isActive('/gallery') ? 'text-primary font-semibold' : 'font-medium hover:text-primary'}`}>Gallery</Link>
          <Link to="/library" className={`text-sm leading-normal transition-colors ${isActive('/library') ? 'text-primary font-semibold' : 'font-medium hover:text-primary'}`}>Library</Link>
        </nav>
      </div>
      <div className="flex flex-1 justify-end gap-4 items-center">
        <label className="hidden lg:flex flex-col min-w-40 h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden">
            <div className="text-[#616f89] flex border-none bg-[#f0f2f4] dark:bg-[#2a303c] items-center justify-center pl-4">
              <span className="material-symbols-outlined text-xl">search</span>
            </div>
            <input className="form-input flex w-full min-w-0 flex-1 border-none bg-[#f0f2f4] dark:bg-[#2a303c] focus:ring-0 text-[#111318] dark:text-white placeholder:text-[#616f89] px-2 text-base font-normal leading-normal" placeholder="Search Programs" />
          </div>
        </label>
        
        <button 
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#f0f2f4] dark:bg-[#2a303c] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
          aria-label="Toggle dark mode"
        >
          <span className="material-symbols-outlined">
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all">
          Apply Now
        </button>
      </div>
    </header>
  );
};

export default Navbar;
