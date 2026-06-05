import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { BOOKS } from '../constants';

const CATEGORIES = [
  { id: 'All', icon: 'auto_stories' },
  { id: 'Pharmacy', icon: 'medical_services' },
  { id: 'Early Childhood Education', icon: 'child_care' },
  { id: 'Information Technology', icon: 'monitor' },
  { id: 'Veterinary Medicine', icon: 'pets' },
  { id: 'Financial Services', icon: 'business_center' }
];

const Library: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('Newest');

  const filteredBooks = useMemo(() => {
    let result = [...BOOKS];
    
    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(book => book.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(book => {
        const translatedTitle = t(`library.books.${book.id}.title`, { defaultValue: book.title }).toLowerCase();
        const translatedAuthor = t(`library.books.${book.id}.author`, { defaultValue: book.author }).toLowerCase();
        const translatedCategory = t(`library.categories.${book.category}`, { defaultValue: book.category }).toLowerCase();
        return translatedTitle.includes(lowerQuery) || 
               translatedAuthor.includes(lowerQuery) ||
               translatedCategory.includes(lowerQuery);
      });
    }
    
    // Sort
    if (sortOrder === 'Alphabetical') {
      result.sort((a, b) => {
        const titleA = t(`library.books.${a.id}.title`, { defaultValue: a.title });
        const titleB = t(`library.books.${b.id}.title`, { defaultValue: b.title });
        return titleA.localeCompare(titleB);
      });
    } else {
      // Newest
      result.sort((a, b) => Number(b.id) - Number(a.id));
    }
    
    return result;
  }, [activeCategory, searchQuery, sortOrder, t]);

  return (
    <div className="animate-fade-in max-w-[1440px] mx-auto w-full flex flex-col md:flex-row gap-6 p-4 md:p-10">
      <aside className="w-full md:w-72 flex-shrink-0 space-y-8">
        <div className="flex flex-col gap-6 bg-white dark:bg-[#1a2133] p-6 rounded-xl shadow-sm border border-[#f0f2f4] dark:border-gray-800">
          <div>
            <h1 className="text-base font-bold text-primary mb-1">{t('library.categoriesTitle')}</h1>
            <p className="text-[#616f89] text-xs">{t('library.categoriesSubtitle')}</p>
          </div>
          <div className="flex flex-col gap-1">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center text-left w-full gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-primary/10 text-primary border border-primary/20' 
                    : 'text-[#616f89] dark:text-gray-300 hover:bg-[#f0f2f4] dark:hover:bg-slate-800 border border-transparent'
                }`} 
              >
                <span className="material-symbols-outlined text-xl">{cat.icon}</span>
                <p className="text-sm font-medium">{t(`library.categories.${cat.id}`)}</p>
              </button>
            ))}
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col gap-6">
        <div className="flex items-center gap-2 px-1">
          <a className="text-[#616f89] text-sm font-medium hover:text-primary transition-colors" href="/">{t('library.home')}</a>
          <span className="material-symbols-outlined text-base text-[#616f89]">chevron_right</span>
          <span className="text-primary text-sm font-semibold">{t('library.pageTitle')}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-1">
          <div className="max-w-2xl">
            <h1 className="text-[#111318] dark:text-white text-4xl font-black leading-tight tracking-tight mb-2">{t('library.heroTitle')}</h1>
            <p className="text-[#616f89] text-base">{t('library.heroSubtitle')}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="relative block w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#616f89]">
                <span className="material-symbols-outlined">search</span>
              </span>
              <input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-12 pr-4 rounded-xl border border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-[#1a2133] dark:text-white shadow-sm text-base focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-[#616f89] transition-all" 
                placeholder={t('library.searchPlaceholder')} 
                type="text"
              />
            </label>
          </div>
          <div className="flex gap-2">
            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="h-12 px-4 rounded-xl border border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-[#1a2133] dark:text-white shadow-sm text-sm font-medium focus:ring-2 focus:ring-primary outline-none transition-all cursor-pointer"
            >
              <option value="Newest">{t('library.sortByNewest')}</option>
              <option value="Alphabetical">{t('library.sortAlphabetical')}</option>
            </select>
          </div>
        </div>

        {filteredBooks.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 bg-white dark:bg-[#1a2133] rounded-xl border border-[#f0f2f4] dark:border-gray-800">
             <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4">search_off</span>
             <h3 className="text-xl font-bold text-[#111318] dark:text-white">{t('library.noResourcesTitle')}</h3>
             <p className="text-[#616f89] mt-2">{t('library.noResourcesSubtitle')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <div key={book.id} className="group bg-white dark:bg-[#1a2133] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#f0f2f4] dark:border-gray-800 hover:border-primary/50 flex flex-col">
                <div className="aspect-[2/3] relative overflow-hidden bg-slate-100 dark:bg-gray-800 border-b border-[#f0f2f4] dark:border-gray-800">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={book.image} alt={book.title}/>
                  {book.badge && (
                    <div className="absolute top-3 right-3 bg-white/95 dark:bg-black/90 backdrop-blur px-2.5 py-1 rounded shadow text-[10px] font-bold text-primary dark:text-white uppercase tracking-wider">
                      {t(`library.badges.${book.badge}`, { defaultValue: book.badge })}
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-auto">
                    <span className="text-xs font-bold text-primary uppercase tracking-wide">{t(`library.categories.${book.category}`, { defaultValue: book.category })}</span>
                    <h3 className="text-lg font-bold mt-1.5 text-[#111318] dark:text-white line-clamp-2 leading-tight group-hover:text-primary transition-colors">{t(`library.books.${book.id}.title`, { defaultValue: book.title })}</h3>
                    <p className="text-sm text-[#616f89] dark:text-gray-400 mt-1.5 line-clamp-1">{t(`library.books.${book.id}.author`, { defaultValue: book.author })}</p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <a 
                      href={book.viewUrl || '#'} 
                      target={book.viewUrl ? "_blank" : "_self"}
                      rel="noreferrer"
                      className={`flex items-center justify-center gap-2 h-10 px-3 text-white text-xs font-bold rounded-lg transition-colors ${
                        book.viewUrl ? 'bg-primary hover:bg-blue-700 shadow-sm hover:shadow' : 'bg-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">menu_book</span> {book.viewUrl ? t('library.openFolder') : t('library.comingSoon')}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Library;
