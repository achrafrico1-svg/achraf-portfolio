import React from 'react';
import { Factory, Briefcase, Cpu, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const B2BSection: React.FC = () => {
  const { t, dir } = useLanguage();
  
  const icons = [Factory, Briefcase, Cpu];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800" dir={dir}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-medium text-sm">
            B2B & Lead Generation
          </div>
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white mb-6">
            {t.b2b.title}
          </h2>
          <p className="text-xl text-indigo-200 mb-6 font-medium">
             {t.b2b.subtitle}
          </p>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {t.b2b.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.b2b.industries.map((industry, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-300 group text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-lg">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {industry.desc}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
             <a 
              href="https://wa.me/33753615863"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition-colors"
            >
              {t.b2b.cta}
              <ArrowRight size={20} className={dir === 'rtl' ? 'rotate-180' : ''} />
            </a>
        </div>
      </div>
    </section>
  );
};