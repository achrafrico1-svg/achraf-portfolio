import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Loader2, User } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, ChatSender } from '../types';
import { useLanguage } from '../LanguageContext';

export const ExpertChatSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: ChatSender.USER,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const reply = await sendMessageToGemini(userMsg.text, language);
    
    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: reply,
      sender: ChatSender.AI,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMsg]);
    setLoading(false);
  };

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col h-[500px]">
      <div className="bg-slate-800 p-4 border-b border-slate-700 flex items-center gap-3">
        <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
          <Bot size={20} />
        </div>
        <div>
          <h3 className="font-bold text-white text-sm">{t.tools.chatTitle}</h3>
          <p className="text-xs text-slate-400">{language === 'ar' ? 'مستشار التسويق الرقمي' : 'Digital Marketing Consultant'}</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/50" ref={scrollRef}>
        {messages.length === 0 && (
          <div className="text-center text-slate-500 mt-10">
            <Bot size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-sm">{t.tools.chatDesc}</p>
          </div>
        )}
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-3 ${msg.sender === ChatSender.USER ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === ChatSender.AI ? 'bg-purple-600' : 'bg-slate-700'}`}>
              {msg.sender === ChatSender.AI ? <Bot size={14} className="text-white" /> : <User size={14} className="text-slate-300" />}
            </div>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
              msg.sender === ChatSender.USER 
                ? 'bg-slate-800 text-white rounded-tr-none' 
                : 'bg-indigo-900/40 text-slate-200 border border-indigo-500/20 rounded-tl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-3">
             <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                <Bot size={14} className="text-white" />
             </div>
             <div className="bg-indigo-900/40 p-3 rounded-2xl rounded-tl-none border border-indigo-500/20">
                <Loader2 size={16} className="animate-spin text-indigo-400" />
             </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSend} className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.tools.chatPlaceholder}
          className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
        />
        <button 
          type="submit"
          disabled={loading || !input.trim()}
          className="bg-purple-600 text-white p-3 rounded-xl hover:bg-purple-700 transition-colors disabled:opacity-50"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};