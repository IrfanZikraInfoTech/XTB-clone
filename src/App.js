import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
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
import ContactUs from './components/ContactUs';
import Ambassador from './components/Ambassador';
import Company from './components/Company';

function HomePage() {
  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/ambassador" element={<Ambassador />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
