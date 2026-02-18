
import React from 'react';
import { BOOKS } from '../constants';

const Library: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-[1440px] mx-auto w-full flex flex-col md:flex-row gap-6 p-4 md:p-10">
      <aside className="w-full md:w-72 flex-shrink-0 space-y-8">
        <div className="flex flex-col gap-6 bg-white dark:bg-[#1a2133] p-6 rounded-xl shadow-sm">
          <div>
            <h1 className="text-base font-bold text-primary mb-1">Program Categories</h1>
            <p className="text-[#616f89] text-xs">Browse resources by department</p>
          </div>
          <div className="flex flex-col gap-1">
            {[
              { icon: 'monitor', label: 'IT & Computer Science' },
              { icon: 'medical_services', label: 'Pharmaceutical Sciences', active: true },
              { icon: 'business_center', label: 'Business Administration' },
              { icon: 'ecg_heart', label: 'Nursing' },
              { icon: 'auto_stories', label: 'General Education' }
            ].map((cat, idx) => (
              <a 
                key={idx}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  cat.active 
                    ? 'bg-primary/10 text-primary border border-primary/20' 
                    : 'hover:bg-[#f0f2f4] dark:hover:bg-slate-800'
                }`} 
                href="#"
              >
                <span className="material-symbols-outlined text-xl">{cat.icon}</span>
                <p className="text-sm font-medium">{cat.label}</p>
              </a>
            ))}
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col gap-6">
        <div className="flex items-center gap-2 px-1">
          <a className="text-[#616f89] text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
          <span className="material-symbols-outlined text-base text-[#616f89]">chevron_right</span>
          <span className="text-primary text-sm font-semibold">Digital Library</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-1">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black leading-tight tracking-tight mb-2">Academic Resources</h1>
            <p className="text-[#616f89] text-base">Access thousands of textbooks, clinical journals, and pharmacology papers curated for our researchers.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="relative block w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#616f89]">
                <span className="material-symbols-outlined">search</span>
              </span>
              <input className="w-full h-12 pl-12 pr-4 rounded-xl border-none bg-white dark:bg-[#1a2133] shadow-sm text-base focus:ring-2 focus:ring-primary placeholder:text-[#616f89]" placeholder="Search by title, author, or ISBN..." type="text"/>
            </label>
          </div>
          <div className="flex gap-2">
            <select className="h-12 px-4 rounded-xl border-none bg-white dark:bg-[#1a2133] shadow-sm text-sm font-medium focus:ring-2 focus:ring-primary">
              <option>Sort by: Newest</option>
              <option>Most Popular</option>
              <option>Alphabetical</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {BOOKS.map((book) => (
            <div key={book.id} className="group bg-white dark:bg-[#1a2133] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary/20 flex flex-col">
              <div className="aspect-[2/3] relative overflow-hidden bg-slate-100">
                <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src={book.image} alt={book.title}/>
                {book.badge && (
                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                    {book.badge}
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-auto">
                  <span className="text-xs font-bold text-primary uppercase">{book.category}</span>
                  <h3 className="text-lg font-bold mt-1 line-clamp-2 leading-tight">{book.title}</h3>
                  <p className="text-sm text-[#616f89] mt-1">{book.author}</p>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 h-10 px-3 bg-primary text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-colors">
                    <span className="material-symbols-outlined text-sm">menu_book</span> Read Online
                  </button>
                  <button className="flex items-center justify-center gap-2 h-10 px-3 bg-background-light dark:bg-slate-800 text-[#111318] dark:text-white text-xs font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <span className="material-symbols-outlined text-sm">download</span> PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Library;
