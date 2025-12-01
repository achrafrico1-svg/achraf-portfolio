import React, { useState } from 'react';
import { Zap, Loader2, Copy, Check, Sparkles } from 'lucide-react';
import { generateMarketingHooks } from '../services/geminiService';
import { useLanguage } from '../LanguageContext';
import { HookParams } from '../types';

export const HookGenerator: React.FC = () => {
  const { t, language, dir } = useLanguage();
  
  const [formData, setFormData] = useState<HookParams>({
    product: '',
    audience: '',
    painPoints: '',
    desiredResult: '',
    usp: ''
  });

  const [hooks, setHooks] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.product || !formData.audience) return;

    setIsLoading(true);
    setHooks([]);
    
    const results = await generateMarketingHooks(formData, language);
    setHooks(results);
    setIsLoading(false);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 h-full flex flex-col" dir={dir}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400">
          <Sparkles size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{t.tools.hookTitle}</h3>
          <p className="text-sm text-slate-400">{t.tools.hookDesc}</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 h-full">
          {/* Form Side */}
          <form onSubmit={handleGenerate} className="flex-1 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="text-xs font-medium text-slate-400 mb-1 block">{t.tools.inputs.product}</label>
                    <input 
                        type="text" 
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                </div>
                <div>
                    <label className="text-xs font-medium text-slate-400 mb-1 block">{t.tools.inputs.audience}</label>
                    <input 
                        type="text" 
                        name="audience"
                        value={formData.audience}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                </div>
            </div>

            <div>
                <label className="text-xs font-medium text-slate-400 mb-1 block">{t.tools.inputs.pain}</label>
                <input 
                    type="text" 
                    name="painPoints"
                    value={formData.painPoints}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
            </div>
            
            <div>
                <label className="text-xs font-medium text-slate-400 mb-1 block">{t.tools.inputs.result}</label>
                <input 
                    type="text" 
                    name="desiredResult"
                    value={formData.desiredResult}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
            </div>

            <div>
                <label className="text-xs font-medium text-slate-400 mb-1 block">{t.tools.inputs.usp}</label>
                <input 
                    type="text" 
                    name="usp"
                    value={formData.usp}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
            </div>

            <button 
              type="submit" 
              disabled={isLoading || !formData.product}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-indigo-500/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
            >
              {isLoading ? <Loader2 className="animate-spin" size={20} /> : (
                  <>
                    <Zap size={20} />
                    {t.tools.generate}
                  </>
              )}
            </button>
          </form>

          {/* Results Side */}
          <div className="flex-1 bg-slate-950 rounded-xl border border-slate-800 p-4 overflow-y-auto max-h-[400px] custom-scrollbar">
            {hooks.length === 0 && !isLoading ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-600 space-y-4">
                    <Zap size={40} className="opacity-20" />
                    <p className="text-sm italic text-center max-w-xs">
                        {language === 'ar' ? 'أدخل تفاصيل منتجك وسأقوم بصياغة 5 خطافات إعلانية قوية.' : 'Enter your product details and I will craft 5 sales-driven ad hooks.'}
                    </p>
                </div>
            ) : (
                <div className="space-y-3">
                    {hooks.map((hook, idx) => (
                    <div key={idx} className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors flex justify-between items-start gap-3 group">
                        <p className="text-slate-200 text-sm leading-relaxed font-medium">{hook}</p>
                        <button 
                        onClick={() => copyToClipboard(hook, idx)}
                        className="text-slate-500 hover:text-white transition-colors p-1"
                        title="Copy"
                        >
                        {copiedIndex === idx ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                        </button>
                    </div>
                    ))}
                </div>
            )}
          </div>
      </div>
    </div>
  );
};