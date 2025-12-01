

import React from 'react';
import { ShoppingBag, TrendingUp, Video, Layers, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const EcommerceSection: React.FC = () => {
  const { t, dir } = useLanguage();
  
  const icons = [Video, Layers, TrendingUp];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800" dir={dir}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-medium text-sm">
              B2C & D2C Growth
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white leading-tight">
              {t.ecommerce.title}
            </h2>
            
            <p className="text-xl text-purple-200 font-medium">
              {t.ecommerce.subtitle}
            </p>
            
            <p className="text-slate-400 leading-relaxed text-lg">
              {t.ecommerce.description}
            </p>

            <div className="space-y-6">
              {t.ecommerce.features.map((feature, idx) => {
                const Icon = icons[idx] || ShoppingBag;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{feature.title}</h4>
                      <p className="text-slate-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Side - Abstract Representation of a Funnel/Growth */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-square md:aspect-[4/3] bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-2xl overflow-hidden group">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/30 transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-indigo-500/30 transition-all duration-700"></div>

                {/* Grid Visual */}
                <div className="relative z-10 h-full flex flex-col justify-between space-y-4">
                    {/* Top Stat Card */}
                    <div className="bg-slate-800/80 backdrop-blur-md p-4 rounded-xl border border-slate-700 transform hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-400 text-sm">Monthly Revenue</span>
                            <span className="text-green-400 text-xs font-bold">+124%</span>
                        </div>
                        <div className="flex items-end gap-2">
                            <span className="text-2xl font-bold text-white">$124,500</span>
                            <div className="flex gap-1 h-6 items-end">
                                <div className="w-1 bg-purple-500/50 h-[40%]"></div>
                                <div className="w-1 bg-purple-500/70 h-[60%]"></div>
                                <div className="w-1 bg-purple-500 h-[80%]"></div>
                                <div className="w-1 bg-green-500 h-[100%] shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Funnel Visualization */}
                    <div className="flex-1 flex items-center justify-center py-4">
                        <div className="relative w-full max-w-[280px]">
                            <div className="w-full h-12 bg-indigo-900/40 rounded-lg mb-2 flex items-center justify-between px-4 border border-indigo-500/20">
                                <span className="text-xs text-indigo-300">Impressions</span>
                                <span className="text-xs font-mono text-white">1.2M</span>
                            </div>
                            <div className="w-[80%] mx-auto h-12 bg-purple-900/40 rounded-lg mb-2 flex items-center justify-between px-4 border border-purple-500/20">
                                <span className="text-xs text-purple-300">Traffic</span>
                                <span className="text-xs font-mono text-white">45k</span>
                            </div>
                            <div className="w-[60%] mx-auto h-12 bg-purple-600/40 rounded-lg mb-2 flex items-center justify-between px-4 border border-purple-500/40 shadow-[0_0_15px_rgba(147,51,234,0.1)]">
                                <span className="text-xs text-purple-200">Add to Cart</span>
                                <span className="text-xs font-mono text-white">3.8k</span>
                            </div>
                            <div className="w-[40%] mx-auto h-12 bg-green-600/40 rounded-lg flex items-center justify-between px-4 border border-green-500/40 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                <span className="text-xs text-green-200">Purchases</span>
                                <span className="text-xs font-mono text-white">1.1k</span>
                            </div>
                        </div>
                    </div>

                     {/* Bottom Platform Icons */}
                     <div className="flex justify-center gap-4 opacity-70">
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"><span className="text-xs text-blue-400 font-bold">f</span></div>
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"><span className="text-xs text-pink-400 font-bold">IG</span></div>
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"><span className="text-xs text-black bg-white rounded-full w-4 h-4 flex items-center justify-center leading-none pb-0.5">t</span></div>
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700"><span className="text-xs text-yellow-400 font-bold">👻</span></div>
                     </div>
                </div>
            </div>
          </div>
        </div>

        {/* CTA Button moved here */}
        <div className="mt-12 text-center">
            <a 
            href="https://wa.me/33753615863"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500 transition-colors shadow-lg shadow-purple-500/20"
            >
            {t.ecommerce.cta}
            <ArrowRight size={20} className={dir === 'rtl' ? 'rotate-180' : ''} />
            </a>
        </div>
      </div>
    </section>
  );
};