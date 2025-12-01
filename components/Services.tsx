import React from 'react';
import { TECH_STACK } from '../constants';
import { Target, TrendingUp, PenTool, BarChart3, Globe, Video } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const ICONS = [Target, PenTool, Video, TrendingUp, Globe, BarChart3];

export const Services: React.FC = () => {
  const { t, dir } = useLanguage();
  return (
    <section id="services" className="py-24 bg-slate-900 border-t border-slate-800" dir={dir}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Skills Progress */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-8">{t.services.platformTitle}</h2>
            <div className="space-y-6">
              {TECH_STACK.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-indigo-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-2">{t.services.whyHireTitle}</h3>
              <p className="text-slate-300">
                {t.services.whyHireDesc}
              </p>
            </div>
          </div>

          {/* Right: Service Grid */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-8">{t.services.title}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {t.services.cards.map((card, idx) => {
                const Icon = ICONS[idx] || Target;
                return (
                  <div key={idx} className="p-6 bg-slate-950 border border-slate-800 rounded-xl hover:bg-slate-800 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};