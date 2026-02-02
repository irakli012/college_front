
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#101622] border-t border-[#f0f2f4] dark:border-[#2a303c] pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h2 className="text-lg font-bold">College Ilia</h2>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">Dedicated to excellence in education for over 40 years. Accredited globally for multi-disciplinary studies.</p>
          <div className="flex gap-3 mt-2">
            <span className="material-symbols-outlined text-gray-400 hover:text-primary cursor-pointer">public</span>
            <span className="material-symbols-outlined text-gray-400 hover:text-primary cursor-pointer">share</span>
            <span className="material-symbols-outlined text-gray-400 hover:text-primary cursor-pointer">alternate_email</span>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6">Quick Navigation</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-600 dark:text-gray-400">
            <li><a className="hover:text-primary" href="#/programs">Degree Programs</a></li>
            <li><a className="hover:text-primary" href="#/about">Admissions Office</a></li>
            <li><a className="hover:text-primary" href="#/about">Financial Aid</a></li>
            <li><a className="hover:text-primary" href="#/gallery">Campus Life</a></li>
            <li><a className="hover:text-primary" href="#/library">Research Facilities</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Student Resources</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-600 dark:text-gray-400">
            <li><a className="hover:text-primary" href="#/library">Library Catalog</a></li>
            <li><a className="hover:text-primary" href="#/library">Career Services</a></li>
            <li><a className="hover:text-primary" href="#/about">Online Portal</a></li>
            <li><a className="hover:text-primary" href="#/about">Health & Wellness</a></li>
            <li><a className="hover:text-primary" href="#/about">IT Support</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Contact Us</h4>
          <div className="flex flex-col gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[20px]">location_on</span>
              <span>123 Academy Blvd, <br/>University District, GA 30303</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>+1 (555) 0123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px]">mail</span>
              <span>info@collegeilia.edu</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 border-t border-[#f0f2f4] dark:border-[#2a303c] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 uppercase tracking-widest">
        <p>© 2024 College Ilia. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-primary transition-colors" href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
