
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { B2BSection } from './components/B2BSection';
import { EcommerceSection } from './components/EcommerceSection';
import { RemoteWorkSection } from './components/RemoteWorkSection';
import { Contact } from './components/Contact';
import { AIChatbot } from './components/AIChatbot';
import { ToolsSection } from './components/ToolsSection';
import { LanguageProvider } from './LanguageContext';

function AppContent() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <EcommerceSection />
        <B2BSection />
        <ToolsSection />
        <Experience />
        <RemoteWorkSection />
        <Contact />
      </main>
      <AIChatbot />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
