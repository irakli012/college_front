import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PROGRAMS } from '../constants';

const Register: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration Data:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="animate-fade-in flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
        <div className="size-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-5xl">check_circle</span>
        </div>
        <h1 className="text-3xl font-black mb-4 dark:text-white">{t('register.successTitle')}</h1>
        <p className="text-[#616f89] dark:text-gray-400 max-w-md mx-auto mb-8">
          {t('register.successMessage')}
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
        >
          {t('register.backToForm')}
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in max-w-[1200px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Info */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl sm:text-5xl font-black text-[#111318] dark:text-white leading-tight tracking-tight">
              {t('register.title')}
            </h1>
            <p className="text-[#616f89] dark:text-gray-400 text-lg leading-relaxed">
              {t('register.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: 'verified_user', title: t('register.perks.accredited'), desc: t('register.perks.accreditedDesc') },
              { icon: 'groups', title: t('register.perks.support'), desc: t('register.perks.supportDesc') },
              { icon: 'clinical_notes', title: t('register.perks.flexible'), desc: t('register.perks.flexibleDesc') },
              { icon: 'currency_exchange', title: t('register.perks.scholarship'), desc: t('register.perks.scholarshipDesc') }
            ].map((perk, idx) => (
              <div key={idx} className="flex flex-col gap-3 p-5 rounded-2xl bg-white dark:bg-[#1a2133] border border-[#f0f2f4] dark:border-[#2a303c] shadow-sm">
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">{perk.icon}</span>
                </div>
                <h3 className="font-bold dark:text-white">{perk.title}</h3>
                <p className="text-xs text-[#616f89] dark:text-gray-400 leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white dark:bg-[#1a2133] rounded-[2.5rem] border border-[#f0f2f4] dark:border-[#2a303c] p-8 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold dark:text-white">{t('register.form.firstName')}</label>
                <input 
                  required
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl bg-[#f6f6f8] dark:bg-[#2a303c] border-none focus:ring-2 focus:ring-primary dark:text-white outline-none transition-all"
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold dark:text-white">{t('register.form.lastName')}</label>
                <input 
                  required
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl bg-[#f6f6f8] dark:bg-[#2a303c] border-none focus:ring-2 focus:ring-primary dark:text-white outline-none transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold dark:text-white">{t('register.form.email')}</label>
              <input 
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3.5 rounded-xl bg-[#f6f6f8] dark:bg-[#2a303c] border-none focus:ring-2 focus:ring-primary dark:text-white outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold dark:text-white">{t('register.form.phone')}</label>
              <input 
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-3.5 rounded-xl bg-[#f6f6f8] dark:bg-[#2a303c] border-none focus:ring-2 focus:ring-primary dark:text-white outline-none transition-all"
                placeholder="+995 555 123 456"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold dark:text-white">{t('register.form.program')}</label>
              <select 
                required
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full px-5 py-3.5 rounded-xl bg-[#f6f6f8] dark:bg-[#2a303c] border-none focus:ring-2 focus:ring-primary dark:text-white outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>{t('register.form.selectProgram')}</option>
                {PROGRAMS.map(prog => (
                  <option key={prog.id} value={prog.slug}>
                    {t(`programs.${prog.slug}.title`)}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold dark:text-white">{t('register.form.message')}</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-5 py-3.5 rounded-xl bg-[#f6f6f8] dark:bg-[#2a303c] border-none focus:ring-2 focus:ring-primary dark:text-white outline-none transition-all resize-none"
                placeholder={t('register.form.messagePlaceholder')}
              />
            </div>

            <button 
              type="submit"
              className="mt-4 bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
            >
              {t('register.submitButton')}
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            <p className="text-center text-[10px] text-[#616f89] dark:text-gray-400 mt-2">
              {t('register.disclaimer')}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
