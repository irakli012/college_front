import React from 'react';

// Title block used by the document-style pages: icon, title, subtitle and an accent bar.
const PageHeader: React.FC<{ icon: string; title: string; subtitle?: string }> = ({ icon, title, subtitle }) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-3">
      <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center text-primary shrink-0">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h1 className="text-[#111318] dark:text-white text-2xl sm:text-4xl font-bold">{title}</h1>
    </div>
    {subtitle && <p className="text-[#616f89] dark:text-[#9ea7b8] text-base pl-14">{subtitle}</p>}
    <div className="mt-4 h-1 w-16 bg-primary rounded-full ml-14" />
  </div>
);

export default PageHeader;
