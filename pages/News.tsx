
import React from 'react';
import { NEWS } from '../constants';

const News: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-[1200px] mx-auto px-6 py-8 flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-2">
        <a className="text-[#616f89] dark:text-gray-400 text-sm font-medium flex items-center gap-1 hover:text-primary" href="#">
          <span className="material-symbols-outlined text-sm">home</span> Home
        </a>
        <span className="text-[#616f89] dark:text-gray-500 text-sm font-medium">/</span>
        <span className="text-[#111318] dark:text-white text-sm font-medium">News & Updates</span>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-[#111318] dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]">College News & Updates</h1>
        <p className="text-[#616f89] dark:text-gray-400 text-lg font-normal leading-normal max-w-2xl">
          Stay informed with the latest announcements, achievements, and events from across our campus community.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 p-2 rounded-xl shadow-sm border border-[#f0f2f4] dark:border-gray-800 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4 px-4 py-2">
          <div className="flex-1">
            <div className="flex w-full items-stretch rounded-lg h-12 bg-[#f0f2f4] dark:bg-gray-800">
              <div className="text-[#616f89] dark:text-gray-400 flex items-center justify-center pl-4">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input 
                className="w-full bg-transparent border-none text-[#111318] dark:text-white focus:ring-0 px-4 placeholder:text-[#616f89]" 
                placeholder="Search for news, events, or announcements..." 
              />
            </div>
          </div>
          <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all">Search</button>
        </div>
      </div>

      <div className="masonry-grid mt-4">
        {NEWS.map((item) => (
          <div key={item.id} className="masonry-item">
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-[#f0f2f4] dark:border-gray-800 group cursor-pointer hover:shadow-xl transition-all">
              {item.image && (
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                    style={{ backgroundImage: `url("${item.image}")` }}
                  ></div>
                  <div className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                    item.category === 'Achievement' ? 'bg-primary' : item.category === 'Event' ? 'bg-orange-500' : 'bg-purple-600'
                  }`}>
                    {item.category}
                  </div>
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#616f89] dark:text-gray-400 text-xs font-semibold mb-3">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  {item.date}
                  {item.readTime && <span className="mx-1">• {item.readTime}</span>}
                </div>
                <h3 className="text-xl font-bold text-[#111318] dark:text-white mb-3 leading-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#616f89] dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center text-primary font-bold text-sm">
                  Read More <span className="material-symbols-outlined ml-1 text-base">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center py-10">
        <button className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-900 border border-[#f0f2f4] dark:border-gray-800 rounded-lg text-primary font-bold hover:bg-[#f0f2f4] dark:hover:bg-gray-800 transition-all">
          Load More Updates <span className="material-symbols-outlined">expand_more</span>
        </button>
      </div>
    </div>
  );
};

export default News;
