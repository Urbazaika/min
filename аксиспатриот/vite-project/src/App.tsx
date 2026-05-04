import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutTheProject from './components/AboutTheProject/AboutTheProject'; // 
import Concept from './components/Concept/Concept';
import './App.css';
import EveningFront from './components/EveningFront/EveningFront';
import Teracca from './components/Teracca/teracca';



const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutTheProject />
      <Concept />
      <EveningFront />
      <Teracca />
    </>
  );
};

export default App;