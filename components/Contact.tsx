import React from 'react';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
)

export const Contact: React.FC = () => {
  const { t, dir } = useLanguage();
  return (
    <footer id="contact" className="bg-slate-950 pt-24 pb-12 border-t border-slate-800" dir={dir}>
      <div className="container mx-auto px-6">
        
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden mb-24">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white mb-6">
              {t.contact.title}
            </h2>
            <p className="text-indigo-200 text-lg mb-8">
              {t.contact.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={`mailto:${t.profile.email}`} 
                className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-900 rounded-xl font-bold hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                {t.contact.emailBtn}
              </a>
              <a 
                href="https://wa.me/33753615863"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2"
              >
                <WhatsAppIcon />
                {t.contact.whatsappBtn}
              </a>
              <a 
                href={t.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer" 
                className="w-full sm:w-auto px-8 py-4 bg-indigo-800 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 border border-indigo-600"
              >
                <Linkedin size={20} />
                {t.contact.linkedinBtn}
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 border-b border-slate-800 pb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">{t.profile.name}</h3>
            <p className="text-slate-400 leading-relaxed">
              {t.profile.title} - {t.profile.tagline}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">{t.contact.infoTitle}</h4>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${t.profile.email}`} className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-3">
                  <Mail size={18} />
                  {t.profile.email}
                </a>
              </li>
              <li className="text-slate-400 flex items-center gap-3">
                <MapPin size={18} />
                {t.profile.location}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">{t.contact.langTitle}</h4>
            <div className="space-y-3">
              {t.profile.languages.map((lang: any) => (
                <div key={lang.name}>
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-slate-300 text-sm">{lang.name}</span>
                        <span className="text-slate-500 text-xs">{lang.level}</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                            className={`h-full rounded-full ${lang.percent > 80 ? 'bg-green-500' : lang.percent > 50 ? 'bg-indigo-500' : 'bg-slate-600'}`} 
                            style={{ width: `${lang.percent}%` }}
                        ></div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-slate-600 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} {t.profile.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            {t.contact.builtBy} <span className="text-indigo-500">⚡</span>
          </p>
        </div>
      </div>
    </footer>
  );
};