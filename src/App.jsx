import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WeddingsSection from './components/WeddingsSection';
import Services from './components/Services';
import CorporateEventsSection from './components/CorporateEventsSection';
import SocialCelebrationsSection from './components/SocialCelebrationsSection';
import BrandLaunchSection from './components/BrandLaunchSection';
import ConsultationSection from './components/ConsultationSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans text-[#1d395e] overflow-x-hidden">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
        <div id="services">
        <Services />
      </div>
      <div id="weddings">
        <WeddingsSection />
      </div>
      <div id="corporate">
        <CorporateEventsSection />
      </div>
      <div id="social">
        <SocialCelebrationsSection />
      </div>
      <div id="launches">
        <BrandLaunchSection />
      </div>
      <ConsultationSection />
      <Footer />
    </div>
  );
};


export default App;