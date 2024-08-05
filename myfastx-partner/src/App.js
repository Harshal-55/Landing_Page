import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <BenefitsSection />
    </div>
  );
}

export default App;
