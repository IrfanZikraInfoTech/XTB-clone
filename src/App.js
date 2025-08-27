import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InvestYourWay from './components/InvestYourWay';
import InvestmentPlans from './components/InvestmentPlans';
import LessCosts from './components/LessCosts';
import TrustSection from './components/TrustSection';
import MobileAppSection from './components/MobileAppSection';
import TradingInstruments from './components/TradingInstruments';
import EducationSection from './components/EducationSection';
import SupportSection from './components/SupportSection';
import ClientSection from './components/ClientSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FloatingChatButton from './components/FloatingChatButton';

function App() {
  return (
    <div className="App">
      <div className="font-sans text-gray-900 bg-white">
        <Header />
        <HeroSection />
        <InvestYourWay />
        <InvestmentPlans />
        <LessCosts />
        <TrustSection />
        <MobileAppSection />
        <TradingInstruments />
        <EducationSection />
        <SupportSection />
        <FAQSection />
        <ClientSection />
        <Footer />
        <FloatingChatButton />
      </div>
    </div>
  );
}
export default App;
