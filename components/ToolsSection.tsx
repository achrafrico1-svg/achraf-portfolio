
import React from 'react';
import { HookGenerator } from './HookGenerator';
import { ExpertChatSection } from './ExpertChatSection';
import { ProfitCalculator } from './ProfitCalculator';
import { useLanguage } from '../LanguageContext';
import { Sparkles, Calculator, Bot, ArrowDown } from 'lucide-react';

export const ToolsSection: React.FC = () => {
  const { t, dir } = useLanguage();
  
  const ICONS = [Sparkles, Calculator, Bot];

  return (
    <section id="tools" className="py-24 bg-slate-950 relative overflow-hidden" dir={dir}>
        {/* Background blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl -z-10">
            <div className="absolute top-0 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-green-500/30 bg-green-500/10 text-green-300 font-medium text-sm">
             100% Free Resources
          </div>
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white mb-6">{t.tools.title}</h2>
          <p className="text-slate-400 text-lg">{t.tools.sectionDesc}</p>
        </div>

        {/* Educational Content / Explanations */}
        <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">{t.tools.sectionTitle}</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {t.tools.explanations.map((item, idx) => {
                    const Icon = ICONS[idx];
                    return (
                        <div key={idx} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 group text-center md:text-start">
                             <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                                <Icon size={28} />
                             </div>
                             <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                             <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>

        {/* Divider / Call to Action to scroll */}
        <div className="flex items-center justify-center gap-4 mb-16 opacity-60">
            <div className="h-px bg-slate-800 w-24"></div>
            <span className="text-slate-500 text-sm font-medium uppercase tracking-widest flex items-center gap-2">
                {t.tools.tryIt}
                <ArrowDown size={14} className="animate-bounce" />
            </span>
            <div className="h-px bg-slate-800 w-24"></div>
        </div>

        {/* The Actual Tools */}
        <div className="space-y-12 max-w-6xl mx-auto">
            {/* Top Row: Calculator & Chat */}
            <div className="grid lg:grid-cols-2 gap-8">
                <ProfitCalculator />
                <ExpertChatSection />
            </div>

            {/* Bottom Row: Full Width Hook Generator */}
            <div className="w-full">
                <HookGenerator />
            </div>
        </div>
      </div>
    </section>
  );
};
