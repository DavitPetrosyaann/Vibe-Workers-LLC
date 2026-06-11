import React from 'react';
import { Icons } from './Icons';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'#ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-800 text-brand-300 mb-8">
          <Icons.Users size={32} />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Invest in the Future of Work
        </h2>
        <p className="text-xl text-brand-200 mb-10 max-w-2xl mx-auto">
          Vibe Workers LLC is scaling rapidly. We are looking for strategic partners and investors who understand that AI is not a threat, but the ultimate lever for productivity.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-brand-950 hover:bg-brand-50 rounded-full font-bold text-lg transition-colors shadow-xl flex items-center justify-center gap-2">
            <Icons.Mail size={20} />
            Request Pitch Deck
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-brand-700 text-white hover:border-brand-500 rounded-full font-bold text-lg transition-colors flex items-center justify-center">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
};
