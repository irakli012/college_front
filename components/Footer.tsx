
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-white dark:bg-[#111318] border-t border-[#f0f2f4] dark:border-[#2a303c] py-12">
      <div className="max-w-[1200px] mx-auto w-full px-6 flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-2xl font-bold">school</span>
            <h2 className="text-xl font-bold text-[#111318] dark:text-white">{t('collegeName')}</h2>
          </div>
          <p className="text-[#616f89] dark:text-[#9ea7b8] text-sm">
            {t('footer.description')}
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <h5 className="font-bold dark:text-white text-sm">{t('footer.quickLinks')}</h5>
            <ul className="flex flex-col gap-2 text-sm text-[#616f89] dark:text-[#9ea7b8]">
              <li><Link className="hover:text-primary" to="/programs">{t('nav.programs')}</Link></li>
              <li><a className="hover:text-primary" href="#">Admissions</a></li>
              <li><a className="hover:text-primary" href="#">Campus Life</a></li>
              <li><a className="hover:text-primary" href="#">Alumni</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold dark:text-white text-sm">{t('footer.resources')}</h5>
            <ul className="flex flex-col gap-2 text-sm text-[#616f89] dark:text-[#9ea7b8]">
              <li><a className="hover:text-primary" href="#">Student Portal</a></li>
              <li><Link className="hover:text-primary" to="/library">Library</Link></li>
              <li><a className="hover:text-primary" href="#">Career Center</a></li>
              <li><a className="hover:text-primary" href="#">Safety</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold dark:text-white text-sm">{t('footer.support')}</h5>
            <ul className="flex flex-col gap-2 text-sm text-[#616f89] dark:text-[#9ea7b8]">
              <li><Link className="hover:text-primary" to="/contact">{t('contact.title')}</Link></li>
              <li><a className="hover:text-primary" href="#">Help Desk</a></li>
              <li><a className="hover:text-primary" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto w-full px-6 pt-12 mt-12 border-t border-[#f0f2f4] dark:border-[#2a303c] text-center text-[#616f89] dark:text-[#9ea7b8] text-xs">
        © 2024 {t('footer.allRightsReserved')}
      </div>
    </footer>
  );
};

export default Footer;
