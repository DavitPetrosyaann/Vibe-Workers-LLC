import React from 'react';
import { PROMPT_REGULATIONS } from '../constants';
import { Icons } from './Icons';

export const PromptRegulations: React.FC = () => {
  return (
    <section id="regulations" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
          <div className="flex-1">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Secret Sauce</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Strict Prompt Regulations
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl">
              This is how we guarantee quality and security. We don't just chat with AI; we program its behavior through rigorous protocols.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-brand-100 rounded-full flex items-center justify-center">
              <Icons.TerminalSquare size={40} className="text-brand-600" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROMPT_REGULATIONS.map((reg, index) => {
            const IconComponent = Icons[reg.icon as keyof typeof Icons];
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors duration-300">
                  <IconComponent size={28} className="text-brand-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{reg.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {reg.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual representation of the process */}
        <div className="mt-16 bg-brand-900 rounded-3xl p-8 overflow-hidden relative">
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white flex-1">
                <h4 className="text-2xl font-bold mb-2">The Vibe Worker Pipeline</h4>
                <p className="text-brand-200">From raw requirements to production-ready code.</p>
              </div>
              <div className="flex-1 w-full flex items-center justify-between text-brand-300 font-mono text-sm">
                 <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center border border-brand-600 text-white"><Icons.FileText size={20}/></div>
                    <span>Spec Kit</span>
                 </div>
                 <div className="flex-1 h-px bg-brand-700 mx-4 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-brand-500 rotate-45"></div>
                 </div>
                 <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center border border-brand-600 text-white"><Icons.BrainCircuit size={20}/></div>
                    <span>AI Gen</span>
                 </div>
                 <div className="flex-1 h-px bg-brand-700 mx-4 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-brand-500 rotate-45"></div>
                 </div>
                 <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center border border-brand-400 text-white shadow-[0_0_15px_rgba(14,165,233,0.5)]"><Icons.Activity size={20}/></div>
                    <span className="text-white font-bold">Monitor</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
