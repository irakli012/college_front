
import React from 'react';
import { GALLERY } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-[1200px] mx-auto px-6 py-10">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-black mb-4">Campus Gallery</h1>
        <p className="text-gray-600 dark:text-gray-400">Glimpses into student life, state-of-the-art facilities, and historic moments at College Ilia.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY.map((item) => (
          <div key={item.id} className="group relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src={item.image} 
              alt={item.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary-light text-xs font-bold uppercase tracking-widest text-white/70">{item.category}</span>
              <h3 className="text-white text-xl font-bold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
