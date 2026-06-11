import React from 'react';
import { AI_PROS_CONS } from '../constants';
import { Icons } from './Icons';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="dilemma" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">The Industry Challenge</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Facing the AI Trust Deficit
          </h3>
          <p className="text-lg text-slate-600">
            Many companies avoid AI due to a lack of trust in quality and security. But ignoring AI means falling behind. The solution isn't avoidance; it's <strong className="text-brand-900">mastery</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {AI_PROS_CONS.map((item, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-2xl border ${item.type === 'pro' ? 'bg-brand-50 border-brand-100' : 'bg-red-50 border-red-100'}`}
              >
                <div className="mb-4">
                  {item.type === 'pro' ? (
                    <Icons.CheckCircle2 className="text-brand-500" size={28} />
                  ) : (
                    <Icons.ShieldAlert className="text-red-500" size={28} />
                  )}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-950 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            
            <h4 className="text-2xl font-bold mb-6 relative z-10">Our Philosophy</h4>
            <p className="text-brand-100 mb-6 text-lg leading-relaxed relative z-10">
              AI should not be feared; it must be directed. We maximize productivity not by letting AI run wild, but through:
            </p>
            <ul className="space-y-4 relative z-10">
              {[
                "Correct, engineered prompting",
                "Rigorous work monitoring",
                "Strategic role distribution (Vibe Coders + AI)"
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-50">
                  <div className="w-6 h-6 rounded-full bg-brand-800 flex items-center justify-center flex-shrink-0">
                    <Icons.CheckCircle2 size={14} className="text-brand-300" />
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
