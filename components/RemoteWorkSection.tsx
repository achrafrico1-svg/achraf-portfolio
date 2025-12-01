
import React from 'react';
import { Wifi, CheckCircle, Clock, CalendarCheck, Zap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const RemoteWorkSection: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <section className="py-24 bg-slate-900 border-y border-slate-800" dir={dir}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 font-medium text-sm">
             <Wifi size={16} />
             <span>Remote Ready</span>
           </div>
           <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
             {t.remoteWork.title}
           </h2>
           <p className="text-lg text-slate-400">
             {t.remoteWork.description}
           </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Tools Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
                {t.remoteWork.tools.map((group: any, idx: number) => (
                    <div key={idx} className={`bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all ${idx === 2 ? 'sm:col-span-2' : ''}`}>
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                            {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((tool: string) => (
                                <span key={tool} className="px-3 py-1.5 bg-slate-900 text-slate-300 rounded-lg text-sm border border-slate-800">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Performance Dashboard Visualization */}
            <div className="bg-slate-950 rounded-3xl p-8 border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
                
                <h3 className="text-white font-bold mb-8 flex items-center gap-2">
                    <Zap size={20} className="text-yellow-400" />
                    Performance Dashboard
                </h3>

                <div className="space-y-8">
                    {t.remoteWork.stats.map((stat: any, idx: number) => (
                        <div key={idx}>
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-slate-400 text-sm font-medium flex items-center gap-2">
                                    {idx === 0 ? <Clock size={16} /> : idx === 1 ? <CheckCircle size={16} /> : <CalendarCheck size={16} />}
                                    {stat.label}
                                </span>
                                <span className="text-white font-bold">{stat.value}</span>
                            </div>
                            <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full relative"
                                    style={{ width: `${stat.percent}%` }}
                                >
                                    <div className="absolute top-0 left-0 w-full h-full bg-white/20 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
                    <span>Last 30 Days Activity</span>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-8 h-1 bg-green-500/20 rounded-full"></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
