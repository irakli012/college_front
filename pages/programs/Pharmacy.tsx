import React from 'react';
import { Link } from 'react-router-dom';

const Pharmacy: React.FC = () => {
  return (
    <div className="animate-fade-in -mx-4 sm:-mx-6 lg:-mx-8">
      <div className="max-w-[1200px] mx-auto w-full px-6 pt-6">
        <div className="flex flex-wrap gap-2 py-4">
          <Link className="text-[#616f89] dark:text-[#9ea7b8] text-sm font-medium leading-normal hover:text-primary transition-colors" to="/">Home</Link>
          <span className="text-[#616f89] dark:text-[#9ea7b8] text-sm font-medium leading-normal">/</span>
          <Link className="text-[#616f89] dark:text-[#9ea7b8] text-sm font-medium leading-normal hover:text-primary transition-colors" to="/programs">Programs</Link>
          <span className="text-[#616f89] dark:text-[#9ea7b8] text-sm font-medium leading-normal">/</span>
          <span className="text-[#111318] dark:text-white text-sm font-bold leading-normal">Pharmacy</span>
        </div>
      </div>
      
      <section className="max-w-[1200px] mx-auto w-full px-6 mb-12">
        <div className="@container">
          <div className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end p-10 relative overflow-hidden shadow-xl" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%), url("https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=1600")' }}>
            <div className="z-10">
              <span className="bg-primary px-3 py-1 rounded text-xs font-bold text-white uppercase tracking-wider mb-4 inline-block">Department of Health Sciences</span>
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl mb-4">
                B.Sc. Pharmacy
              </h1>
              <p className="text-white/90 text-lg font-medium leading-relaxed max-w-2xl">
                Advance your career in pharmaceutical sciences, clinical research, and drug development in our state-of-the-art medical labs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto w-full px-6 flex flex-col lg:flex-row gap-12 pb-20">
        <div className="flex-1 flex flex-col gap-16">
          <section className="flex flex-col gap-6" id="overview">
            <h2 className="text-[#111318] dark:text-white text-3xl font-bold border-l-4 border-primary pl-4">Program Overview</h2>
            <p className="text-[#616f89] dark:text-[#9ea7b8] text-lg leading-relaxed">
              Our Pharmacy program provides a comprehensive foundation in the chemical, biological, and clinical sciences that underpin modern pharmaceutical practice. We prepare students to become healthcare leaders who ensure the safe and effective use of medications.
            </p>
            <p className="text-[#616f89] dark:text-[#9ea7b8] text-lg leading-relaxed">
              Through a blend of rigorous classroom instruction and clinical rotations, students gain hands-on experience in community pharmacies, hospitals, and research laboratories, developing the expertise needed for a rewarding career in healthcare.
            </p>
          </section>

          <section className="flex flex-col gap-8" id="curriculum">
            <h2 className="text-[#111318] dark:text-white text-3xl font-bold border-l-4 border-primary pl-4">Core Curriculum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: 'science', title: 'Pharmacology', text: 'Study of drug action on biological systems and therapeutic uses.' },
                { icon: 'biotech', title: 'Medicinal Chemistry', text: 'Design and synthesis of new drug molecules and structures.' },
                { icon: 'medical_services', title: 'Clinical Practice', text: 'Patient care, medication therapy management, and counseling.' },
                { icon: 'experiment', title: 'Pharmaceutics', text: 'Drug formulation, delivery systems, and manufacturing processes.' },
                { icon: 'analytics', title: 'Pharmacokinetics', text: 'Mathematical modeling of drug absorption and distribution.' },
                { icon: 'vaccines', title: 'Biopharmaceuticals', text: 'Development of vaccines and protein-based therapeutic agents.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 rounded-xl border border-[#dbdfe6] dark:border-[#2a303c] bg-white dark:bg-[#1c2331] hover:shadow-md transition-shadow">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  <div>
                    <h4 className="font-bold dark:text-white">{item.title}</h4>
                    <p className="text-sm text-[#616f89] dark:text-[#9ea7b8]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-6" id="careers">
            <h2 className="text-[#111318] dark:text-white text-3xl font-bold border-l-4 border-primary pl-4">Career Opportunities</h2>
            <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-xl border border-primary/20">
              <p className="text-[#111318] dark:text-white mb-6">Graduates of our Pharmacy program are essential members of the healthcare ecosystem, finding roles in clinical, industrial, and regulatory settings. 98% of our graduates pass the licensure exam on their first attempt.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2">
                {['Clinical Pharmacist', 'Research Scientist', 'Quality Control Manager', 'Regulatory Affairs Agent', 'Hospital Pharmacy Dir.', 'Drug Safety Expert'].map((role, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-medium text-[#111318] dark:text-white">
                    <span className="material-symbols-outlined text-primary scale-75">check_circle</span> {role}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <aside className="lg:w-80 flex-none">
          <div className="sticky top-24 flex flex-col gap-6">
            <div className="bg-white dark:bg-[#1c2331] rounded-xl border border-[#dbdfe6] dark:border-[#2a303c] shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6 dark:text-white">Quick Facts</h3>
              <div className="flex flex-col gap-5">
                {[
                  { icon: 'schedule', label: 'Duration', value: '4 Years (Full-time)' },
                  { icon: 'credit_card', label: 'Credits', value: '135 Credit Hours' },
                  { icon: 'calendar_today', label: 'Next Start Date', value: 'September 10, 2024' },
                  { icon: 'attach_money', label: 'Tuition', value: '$13,800 / Semester' }
                ].map((fact, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">{fact.icon}</span>
                    <div>
                      <p className="text-xs text-[#616f89] dark:text-[#9ea7b8] font-medium">{fact.label}</p>
                      <p className="font-bold dark:text-white">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <button className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-md">
                  Apply Now
                </button>
                <button className="w-full bg-transparent border border-[#dbdfe6] dark:border-[#2a303c] dark:text-white py-4 rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="bg-[#111318] dark:bg-primary p-6 rounded-xl text-white shadow-lg">
              <h4 className="font-bold mb-2">Have Questions?</h4>
              <p className="text-sm opacity-80 mb-4">Connect with our health sciences admissions team.</p>
              <a className="inline-flex items-center gap-2 text-sm font-bold hover:underline" href="#">
                Speak with an Advisor <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Pharmacy;
