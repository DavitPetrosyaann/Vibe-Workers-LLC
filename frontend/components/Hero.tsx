import React from 'react';
import { Icons } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section id="vision" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-950 pt-20">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-800/30 blur-3xl"></div>
        <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-600/20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-800/50 border border-brand-700 text-brand-200 text-sm font-medium mb-8">
            <Icons.Rocket size={16} />
            <span>Pioneering the AI Workforce</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            We Found the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
              Golden Average
            </span> <br/>
            of AI Usage.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Vibe Workers is a specialized team of vibe coders, AI media creators, and prompt engineers. We deliver web pages, apps, and projects faster, with higher quality, and at an affordable price.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a href="#regulations" className="w-full sm:w-auto px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white rounded-full font-semibold transition-all shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2">
              See Our Methodology
              <Icons.ChevronRight size={20} />
            </a>
            <a href="#dilemma" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-600 hover:border-slate-400 text-white rounded-full font-semibold transition-all flex items-center justify-center">
              The AI Dilemma
            </a>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
          <div className="aspect-square rounded-2xl overflow-hidden border border-brand-800 shadow-2xl relative group">
            <div className="absolute inset-0 bg-brand-900/50 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src="https://picsum.photos/seed/vibeworkershero/800/800" 
              alt="AI Collaboration" 
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
            />
            {/* Overlay UI Elements to simulate "Vibe Coding" */}
            <div className="absolute bottom-6 left-6 right-6 bg-brand-950/80 backdrop-blur-md border border-brand-800 p-4 rounded-xl z-20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-mono text-sm text-brand-300">
                <span className="text-brand-500">~</span> prompt --execute "build_architecture"
                <br/>
                <span className="text-green-400">✓</span> Spec Kit loaded.
                <br/>
                <span className="text-green-400">✓</span> Tasks broken down.
                <br/>
                <span className="text-slate-400 animate-pulse">Generating UI components...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
