import React, { useState } from 'react';
import { Calculator, HelpCircle, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const ProfitCalculator: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const [price, setPrice] = useState<string>('');
  const [cost, setCost] = useState<string>('');
  
  const [maxCPA, setMaxCPA] = useState<number | null>(null);
  const [minROAS, setMinROAS] = useState<number | null>(null);

  const calculate = () => {
    const p = parseFloat(price);
    const c = parseFloat(cost);

    if (!isNaN(p) && !isNaN(c)) {
      const margin = p - c;
      const cpa = margin; // Max CPA is the margin
      
      // Min ROI (Break-even ROAS) = Revenue / Margin
      // Example: Sell 100, Margin 60. Break even ROAS = 100/60 = 1.66
      const roas = margin > 0 ? (p / margin) : 0;

      setMaxCPA(cpa);
      setMinROAS(roas);
    } else {
        setMaxCPA(null);
        setMinROAS(null);
    }
  };

  // Recalculate whenever inputs change
  React.useEffect(() => {
    calculate();
  }, [price, cost]);

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 h-full flex flex-col" dir={dir}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
          <Calculator size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{t.tools.calculator.title}</h3>
          <p className="text-sm text-slate-400">{t.tools.calculator.subtitle}</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 flex-1">
        {/* Inputs & Results */}
        <div className="flex-1 space-y-6">
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t.tools.calculator.priceLabel}</label>
                    <div className="relative">
                        <DollarSign size={16} className={`absolute top-3.5 ${dir === 'rtl' ? 'right-3' : 'left-3'} text-slate-500`} />
                        <input 
                            type="number" 
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className={`w-full bg-slate-950 border border-slate-700 rounded-xl py-3 text-white focus:ring-2 focus:ring-green-500 focus:outline-none ${dir === 'rtl' ? 'pr-10' : 'pl-10'}`}
                            placeholder="100"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t.tools.calculator.costLabel}</label>
                    <div className="relative">
                        <DollarSign size={16} className={`absolute top-3.5 ${dir === 'rtl' ? 'right-3' : 'left-3'} text-slate-500`} />
                        <input 
                            type="number" 
                            value={cost}
                            onChange={(e) => setCost(e.target.value)}
                            className={`w-full bg-slate-950 border border-slate-700 rounded-xl py-3 text-white focus:ring-2 focus:ring-green-500 focus:outline-none ${dir === 'rtl' ? 'pr-10' : 'pl-10'}`}
                            placeholder="40"
                        />
                    </div>
                </div>
            </div>

            {/* Results Display */}
            <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl border ${maxCPA !== null && maxCPA > 0 ? 'bg-green-900/20 border-green-500/30' : 'bg-slate-800 border-slate-700'}`}>
                    <p className="text-xs text-slate-400 mb-1">{t.tools.calculator.maxCPA}</p>
                    <p className={`text-2xl font-bold ${maxCPA !== null && maxCPA > 0 ? 'text-green-400' : 'text-slate-500'}`}>
                        {maxCPA !== null ? `$${maxCPA.toFixed(2)}` : '--'}
                    </p>
                </div>
                <div className={`p-4 rounded-xl border ${minROAS !== null && minROAS > 0 ? 'bg-indigo-900/20 border-indigo-500/30' : 'bg-slate-800 border-slate-700'}`}>
                    <p className="text-xs text-slate-400 mb-1">{t.tools.calculator.minROAS}</p>
                    <p className={`text-2xl font-bold ${minROAS !== null && minROAS > 0 ? 'text-indigo-400' : 'text-slate-500'}`}>
                        {minROAS !== null ? `${minROAS.toFixed(2)}X` : '--'}
                    </p>
                </div>
            </div>
            
            {maxCPA !== null && maxCPA <= 0 && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-900/20 p-3 rounded-lg border border-red-500/20">
                    <AlertTriangle size={16} />
                    <span>Cost is higher than Price. You are losing money on every sale.</span>
                </div>
            )}
        </div>

        {/* Educational Content */}
        <div className="flex-1 bg-slate-800/50 rounded-xl p-5 border border-slate-800 text-sm leading-relaxed overflow-y-auto max-h-[400px] custom-scrollbar">
            <h4 className="flex items-center gap-2 font-bold text-white mb-4">
                <HelpCircle size={16} className="text-indigo-400" />
                {t.tools.calculator.explanationTitle}
            </h4>
            
            <div className="space-y-4 text-slate-300">
                <div>
                    <strong className="text-white block mb-1">{t.tools.calculator.whatIsCPA}</strong>
                    <p>{t.tools.calculator.cpaDesc}</p>
                </div>
                
                <div>
                    <strong className="text-white block mb-1">{t.tools.calculator.whatIsROI}</strong>
                    <p>{t.tools.calculator.roiDesc}</p>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                    <strong className="text-white block mb-2">{t.tools.calculator.exampleTitle}</strong>
                    <p className="italic text-slate-400">{t.tools.calculator.exampleText}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};