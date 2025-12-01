import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Experience: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-slate-950" dir={dir}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">{t.nav.experience}</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 transform -translate-x-1/2 rtl:right-4 rtl:lg:right-1/2 rtl:translate-x-1/2"></div>

          {t.experience.map((exp, index) => (
            <div key={index} className={`relative flex flex-col lg:flex-row gap-8 items-start ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-slate-950 transform -translate-x-1/2 rtl:right-4 rtl:lg:right-1/2 rtl:translate-x-1/2 mt-6 z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>

              {/* Content Card */}
              <div className={`w-full lg:w-[calc(50%-2rem)] ${dir === 'ltr' ? 'pl-12 lg:pl-0' : 'pr-12 lg:pr-0'} ${index % 2 === 0 ? (dir === 'ltr' ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left') : (dir === 'ltr' ? 'lg:pl-8 lg:text-left' : 'lg:pr-8 lg:text-right')}`}>
                <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 shadow-lg group">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                  <div className={`text-indigo-300 font-medium mb-4 flex items-center gap-2 ${index % 2 === 0 ? (dir === 'ltr' ? 'lg:justify-end' : 'lg:justify-start') : (dir === 'ltr' ? 'justify-start' : 'lg:justify-end')}`}>
                    <Briefcase size={16} />
                    {exp.company}
                  </div>
                  
                  <div className={`flex flex-wrap gap-4 text-sm text-slate-400 mb-6 ${index % 2 === 0 ? (dir === 'ltr' ? 'lg:justify-end' : 'lg:justify-start') : (dir === 'ltr' ? 'justify-start' : 'lg:justify-end')}`}>
                    <span className="flex items-center gap-1"><Calendar size={14}/> {exp.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={14}/> {exp.location}</span>
                  </div>

                  <div className="text-slate-300 leading-relaxed mb-6 whitespace-pre-line">
                    {exp.description}
                  </div>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? (dir === 'ltr' ? 'lg:justify-end' : 'lg:justify-start') : (dir === 'ltr' ? 'justify-start' : 'lg:justify-end')}`}>
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-slate-800 text-indigo-200 text-xs rounded-full border border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Empty Spacer for alternating layout */}
              <div className="hidden lg:block w-[calc(50%-2rem)]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};