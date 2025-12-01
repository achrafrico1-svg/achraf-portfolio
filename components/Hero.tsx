import React from 'react';
import { ArrowRight, Download, Linkedin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Hero: React.FC = () => {
  const { t, dir } = useLanguage();
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden" dir={dir}>
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm text-indigo-300 font-medium text-sm">
            {t.profile.status}
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight">
            {t.hero.titlePrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">{t.hero.titleHighlight}</span> {t.hero.titleSuffix}
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            {t.hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/33753615863"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2 group"
            >
              {t.profile.resumeText}
              <ArrowRight size={20} className={`transition-transform ${dir === 'rtl' ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
            </a>
            <a 
              href={t.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800/50 text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Linkedin size={20} />
              {t.profile.linkedInText}
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          {/* Abstract visual representation of dashboard/analytics */}
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl opacity-20 rotate-6"></div>
            <div className="absolute inset-0 bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
                {/* Mock Dashboard UI */}
                <div className="h-full flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-6">
                        <div className="h-3 w-24 bg-slate-700 rounded-full"></div>
                        <div className="h-8 w-8 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400">
                             <Download size={16}/>
                        </div>
                    </div>
                    <div className="space-y-6">
                         {/* Chart Bars */}
                         <div className="flex items-end justify-between h-48 gap-2">
                            {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                                <div key={i} style={{height: `${h}%`}} className="w-full bg-indigo-500/80 rounded-t-lg hover:bg-indigo-400 transition-colors duration-500"></div>
                            ))}
                         </div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                            <div className="text-slate-400 text-sm mb-1">Total Revenue</div>
                            <div className="text-2xl font-bold text-white">$452,000</div>
                            <div className="text-green-400 text-xs mt-1">↑ 24%</div>
                        </div>
                        <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                            <div className="text-slate-400 text-sm mb-1">ROAS</div>
                            <div className="text-2xl font-bold text-white">13.2X</div>
                            <div className="text-green-400 text-xs mt-1">↑ Top 1%</div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Floating Badge */}
            <div className={`absolute -bottom-6 ${dir === 'rtl' ? '-right-6' : '-left-6'} bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl flex items-center gap-4`}>
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                    <div className="text-sm text-slate-400">Campaign Status</div>
                    <div className="font-bold text-white">Active & Converting</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};