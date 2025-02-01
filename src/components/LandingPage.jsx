import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import CallToAction from './CallToAction';
import Footer from './Footer';

function LandingPage() {
  const navigate = useNavigate();

  const handleOpenLogin = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onGetStarted={handleOpenLogin} />
      <Hero onGetStarted={handleOpenLogin} />
      <Features />
      <Testimonials />
      <Pricing onChoosePlan={handleOpenLogin} />
      <CallToAction onGetStarted={handleOpenLogin} />
      <Footer />
    </div>
  );
}

export default LandingPage;
