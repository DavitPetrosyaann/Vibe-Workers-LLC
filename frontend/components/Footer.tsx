import React from 'react';
import { COMPANY_NAME } from '../constants';
import { Icons } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-white">
          <Icons.BrainCircuit size={24} className="text-brand-500" />
          <span className="font-bold text-xl tracking-tight">{COMPANY_NAME}</span>
        </div>
        
        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </div>
        
        <div className="flex gap-4">
          <a href="#" className="text-slate-500 hover:text-brand-400 transition-colors">Privacy</a>
          <a href="#" className="text-slate-500 hover:text-brand-400 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};
