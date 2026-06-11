import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { PromptRegulations } from './components/PromptRegulations';
import { WhyUs } from './components/WhyUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemSolution />
        <PromptRegulations />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
