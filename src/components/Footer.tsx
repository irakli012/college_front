
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { COLLEGE_CONTACT, COLLEGE_LOCATION } from '../constants';

const linkClass = 'hover:text-primary transition-colors';

const FooterColumn: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="flex flex-col gap-4">
    <h5 className="font-bold dark:text-white text-sm">{title}</h5>
    <ul className="flex flex-col gap-2.5 text-sm text-[#616f89] dark:text-[#9ea7b8]">{children}</ul>
  </div>
);

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-[#111318] border-t border-[#f0f2f4] dark:border-[#2a303c] py-12">
      <div className="max-w-[1200px] mx-auto w-full px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr]">
        {/* College */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={COLLEGE_CONTACT.logo} alt="" className="h-14 w-auto rounded-md shrink-0" />
            <span className="font-bold leading-tight text-[#111318] dark:text-white">{t('collegeName')}</span>
          </Link>
          <a
            href={COLLEGE_CONTACT.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-[#1664d8] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>

        <FooterColumn title={t('footer.quickLinks')}>
          <li><Link className={linkClass} to="/programs">{t('nav.programs')}</Link></li>
          <li><Link className={linkClass} to="/programs-catalog">{t('nav.programsCatalogShort')}</Link></li>
          <li><Link className={`${linkClass} font-semibold text-primary`} to="/register">{t('footer.register')}</Link></li>
          <li><Link className={linkClass} to="/news">{t('nav.news')}</Link></li>
          <li><Link className={linkClass} to="/gallery">{t('nav.gallery')}</Link></li>
        </FooterColumn>

        <FooterColumn title={t('footer.college')}>
          <li><Link className={linkClass} to="/about">{t('nav.aboutUs')}</Link></li>
          <li><Link className={linkClass} to="/about/documents">{t('nav.documents')}</Link></li>
          <li><Link className={linkClass} to="/about/authorization">{t('footer.authorization')}</Link></li>
          <li><Link className={linkClass} to="/about/partners">{t('nav.partners')}</Link></li>
          <li><Link className={linkClass} to="/library">{t('nav.library')}</Link></li>
        </FooterColumn>

        <FooterColumn title={t('contact.title')}>
          <li>
            <a className={`${linkClass} flex items-start gap-2`} href={COLLEGE_CONTACT.phoneHref}>
              <span className="material-symbols-outlined text-lg shrink-0">call</span>
              <span>{COLLEGE_CONTACT.phone}</span>
            </a>
          </li>
          <li>
            <a className={`${linkClass} flex items-start gap-2 break-all`} href={`mailto:${COLLEGE_CONTACT.email}`}>
              <span className="material-symbols-outlined text-lg shrink-0">mail</span>
              <span>{COLLEGE_CONTACT.email}</span>
            </a>
          </li>
          <li>
            <a className={`${linkClass} flex items-start gap-2`} href={COLLEGE_LOCATION.mapsUrl} target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-lg shrink-0">location_on</span>
              <span>{t('contact.addressDetails')}</span>
            </a>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-lg shrink-0">schedule</span>
            <span>{t('contact.hoursDetails')}</span>
          </li>
        </FooterColumn>
      </div>
      <div className="max-w-[1200px] mx-auto w-full px-6 pt-8 mt-10 border-t border-[#f0f2f4] dark:border-[#2a303c] text-center text-[#616f89] dark:text-[#9ea7b8] text-xs">
        © {new Date().getFullYear()} {t('footer.allRightsReserved')}
      </div>
    </footer>
  );
};

export default Footer;
