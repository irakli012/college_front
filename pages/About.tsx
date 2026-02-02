
import React from 'react';
import { TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-[1200px] mx-auto px-6 py-10">
      {/* Hero Section */}
      <section className="mb-16">
        <div 
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 relative overflow-hidden group shadow-xl" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&q=80&w=1200")' 
          }}
        >
          <div className="flex flex-col gap-4 text-center z-10 max-w-3xl">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-6xl">
              Empowering Minds, Shaping Futures
            </h1>
            <h2 className="text-white/90 text-base font-medium leading-relaxed sm:text-lg">
              Since 1982, College Ilia has been at the forefront of multi-disciplinary excellence, fostering innovation and a global perspective for every student.
            </h2>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center items-center">
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest">Our Foundation</h2>
            <h3 className="text-[#111318] dark:text-white text-4xl font-bold leading-tight max-w-[720px]">
              Mission & Vision
            </h3>
            <p className="text-[#616f89] dark:text-[#9ea7b8] text-lg font-normal leading-relaxed max-w-[720px]">
              At Ilia, we don't just teach courses; we nurture leaders and problem-solvers ready to tackle the challenges of a rapidly changing world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6 rounded-xl border border-[#dbdfe6] dark:border-[#2a303c] bg-white dark:bg-[#1c2331] p-8 flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">lightbulb</span>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-[#111318] dark:text-white text-2xl font-bold">Our Mission</h4>
                <p className="text-[#616f89] dark:text-[#9ea7b8] text-base leading-relaxed">
                  To provide a transformative educational experience through interdisciplinary research, innovative teaching methods, and a commitment to academic integrity.
                </p>
              </div>
            </div>
            <div className="flex gap-6 rounded-xl border border-[#dbdfe6] dark:border-[#2a303c] bg-white dark:bg-[#1c2331] p-8 flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">visibility</span>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-[#111318] dark:text-white text-2xl font-bold">Our Vision</h4>
                <p className="text-[#616f89] dark:text-[#9ea7b8] text-base leading-relaxed">
                  To be recognized globally as a center of intellectual discovery that inspires students to achieve their highest potential and lead with purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Journey */}
      <section className="bg-white dark:bg-[#111318] py-16 -mx-6 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              className="rounded-xl shadow-2xl object-cover h-[500px] w-full" 
              src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800" 
              alt="Campus History"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg hidden md:block">
              <p className="text-4xl font-bold">40+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight">Our Journey Through Time</h2>
            <p className="text-[#616f89] dark:text-[#9ea7b8] text-lg leading-relaxed">
              Founded in 1982 by visionaries who believed in breaking down the silos of traditional education, College Ilia began as a single-building campus.
            </p>
            <div className="flex flex-col gap-8 mt-4">
              {[
                { year: '1982', title: 'Foundation', desc: 'The college opens with 300 students and 5 departments.' },
                { year: '2005', title: 'Innovation Hub', desc: 'Inauguration of the state-of-the-art Research & Development Center.' },
                { year: '2023', title: 'Global Reach', desc: 'Ranked in the top 5% of global multi-disciplinary institutions.' }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-none w-12 text-primary font-bold text-lg">{step.year}</div>
                  <div>
                    <h5 className="font-bold dark:text-white">{step.title}</h5>
                    <p className="text-sm text-[#616f89] dark:text-[#9ea7b8]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Administration */}
      <section className="py-20">
        <div className="flex flex-col gap-10">
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="text-primary text-sm font-bold uppercase tracking-widest">Leadership</h2>
              <h3 className="text-[#111318] dark:text-white text-3xl font-bold">Administration Team</h3>
            </div>
            <a className="text-primary font-bold flex items-center gap-2 hover:underline" href="#">
              Meet all faculty <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div key={member.id} className="bg-white dark:bg-[#1c2331] rounded-xl overflow-hidden border border-[#dbdfe6] dark:border-[#2a303c] shadow-sm group hover:shadow-lg transition-all">
                <div className="aspect-square overflow-hidden bg-gray-200">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={member.image} alt={member.name}/>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold dark:text-white">{member.name}</h4>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-[#616f89] dark:text-[#9ea7b8] text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
