
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TeamMember } from '../types';

const Teachers: React.FC = () => {
  const { t } = useTranslation();
  const teamData = t('about.team', { returnObjects: true }) as Record<string, TeamMember>;
  const team = Object.entries(teamData).map(([id, member]) => ({ ...member, id }));

  return (
    <div className="animate-fade-in max-w-[1280px] mx-auto px-4 sm:px-10 py-10">
      <div className="flex flex-col gap-6 mb-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-[#111318] dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-tight">
            {t('nav.teachers')}
          </h1>
          <p className="text-[#616f89] dark:text-gray-400 text-lg font-normal max-w-2xl leading-relaxed">
            {t('teachers.subtitle')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member) => (
          <div key={member.id} className="bg-white dark:bg-[#1c2331] rounded-xl overflow-hidden border border-[#dbdfe6] dark:border-[#2a303c] shadow-sm group hover:shadow-lg transition-all">
            <div className="aspect-square overflow-hidden bg-gray-200">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={member.image} alt={member.name} />
            </div>
            <div className="p-6">
              <h4 className="text-lg font-bold dark:text-white">{member.name}</h4>
              <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
              <p className="text-[#616f89] dark:text-[#9ea7b8] text-sm leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
