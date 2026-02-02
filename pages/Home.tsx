
import React from 'react';
import { Link } from 'react-router-dom';
import { PROGRAMS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="mt-8">
        <div className="relative overflow-hidden rounded-xl h-[520px]">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1600")'
            }}
          ></div>
          <div className="absolute inset-0 flex flex-col items-start justify-end p-8 sm:p-16">
            <div className="max-w-2xl">
              <h1 className="text-white text-4xl sm:text-6xl font-black leading-[1.1] mb-4">
                Empowering Futures,<br/>Building Excellence
              </h1>
              <p className="text-white/90 text-lg sm:text-xl font-normal mb-8 leading-relaxed">
                Join a diverse multi-disciplinary community dedicated to academic rigor and professional success in the heart of the city.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/programs" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center gap-2">
                  Explore Programs <span className="material-symbols-outlined text-sm">arrow_forward</span>
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
          <h2 className="text-2xl font-bold tracking-tight">Quick Links</h2>
          <Link to="/about" className="text-primary text-sm font-semibold hover:underline">View All Portal Links</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: 'person', label: 'Student Portal' },
            { icon: 'school', label: 'Admissions' },
            { icon: 'calendar_today', label: 'Academic Calendar' },
            { icon: 'map', label: 'Campus Map' }
          ].map((item, idx) => (
            <a key={idx} href="#" className="group flex items-center gap-4 p-5 rounded-xl border border-[#dbdfe6] dark:border-[#2a303c] bg-white dark:bg-[#1e2433] hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="bg-primary/10 text-primary p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3 className="font-bold text-[#111318] dark:text-white">{item.label}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* Main Programs Highlights */}
      <section className="mt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">Our Main Programs</h2>
          <p className="text-gray-600 dark:text-gray-400">Pioneering specialized education across multiple disciplines with state-of-the-art facilities and industry-leading faculty.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((prog) => (
            <div key={prog.id} className="flex flex-col rounded-xl overflow-hidden bg-white dark:bg-[#1e2433] border border-[#dbdfe6] dark:border-[#2a303c] group">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url("${prog.image}")` }}
              ></div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{prog.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-2">{prog.description}</p>
                <div className="mt-auto">
                  <Link to={`/programs/${prog.slug}`} className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 mb-20">
        <div className="bg-primary rounded-xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-2">Ready to start your journey?</h2>
            <p className="text-white/80">Get notified about upcoming enrollment dates and scholarships.</p>
          </div>
          <div className="flex w-full lg:w-auto gap-3">
            <input 
              className="flex-1 min-w-[280px] rounded-lg border-none px-4 py-3 focus:ring-2 focus:ring-white/50 text-gray-800" 
              placeholder="Enter your email" 
              type="email"
            />
            <button className="bg-white text-primary font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
