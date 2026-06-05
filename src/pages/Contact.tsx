import React from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: 'phone',
      title: t('contact.phone'),
      value: '+995 595 944 244',
      href: 'tel:+995595944244'
    },
    {
      icon: 'mail',
      title: t('contact.email'),
      value: 'iliasagarejo@gmail.com',
      href: 'mailto:iliasagarejo@gmail.com'
    },
    {
      icon: 'location_on',
      title: t('contact.address'),
      value: t('contact.addressDetails'),
      href: 'https://maps.app.goo.gl/WMhHwtP8gHVUXDgq6'
    },
    {
      icon: 'schedule',
      title: t('contact.hours'),
      value: t('contact.hoursDetails')
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-900">
      <Seo title={t('contact.title')} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-4 transition-all hover:border-primary/50">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">{info.icon}</span>
                </div>
                <div>
                  {info.href ? (
                    <a href={info.href} className="text-lg font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors" target={info.icon === 'location_on' ? "_blank" : undefined} rel={info.icon === 'location_on' ? "noopener noreferrer" : undefined}>
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg font-bold text-slate-900 dark:text-white">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="lg:col-span-2 h-[500px] bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
            <iframe 
              src="https://www.google.com/maps?q=საგარეჯო,ლეონიძის33ა&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
