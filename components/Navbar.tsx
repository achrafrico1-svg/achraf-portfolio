import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
      }`}
      dir={dir}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold text-white tracking-tight">
          AN<span className="text-indigo-500">.</span>
        </a>

        {/* Actions (Language + Hire) - Visible on all screens */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors px-3 py-1 rounded-full border border-slate-700 hover:border-slate-500"
            title={language === 'en' ? "Switch to Arabic" : "Switch to English"}
          >
            <Globe size={16} />
            <span className={`text-sm font-bold ${language === 'en' ? 'font-arabic' : ''} pt-0.5 hidden sm:inline`}>
              {language === 'en' ? 'العربية' : 'English'}
            </span>
            {/* Show short code on very small screens if needed, or just icon, but user asked for name. Keeping name hidden on very small screens might be better or just let it wrap? Let's keep it consistent with request "write Arabic". */}
            <span className={`text-sm font-bold ${language === 'en' ? 'font-arabic' : ''} pt-0.5 sm:hidden`}>
              {language === 'en' ? 'عربي' : 'En'}
            </span>
          </button>

          <a 
            href="https://wa.me/33753615863"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-white text-slate-900 rounded-lg font-bold hover:bg-indigo-50 transition-colors text-sm"
          >
            {t.nav.hire}
          </a>
        </div>
      </div>
    </nav>
  );
};