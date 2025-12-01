import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Stats: React.FC = () => {
  const { t, dir } = useLanguage();
  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800" dir={dir}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {t.metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {metric.value}
              </div>
              <div className="text-indigo-200 font-medium mb-1">
                {metric.label}
              </div>
              <div className="text-slate-500 text-sm">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};