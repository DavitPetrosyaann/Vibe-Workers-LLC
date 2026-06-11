import React from 'react';
import { Icons } from './Icons';

export const WhyUs: React.FC = () => {
  return (
    <section id="niche" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Niche</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            The Golden Average
          </h3>
          <p className="text-lg text-slate-600">
            We don't just sell AI; we sell the <strong className="text-brand-900">results</strong> of perfectly managed AI. By combining human "vibe coders" with AI heavy-lifting, we hit the sweet spot of modern development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Faster Time-to-Market",
              desc: "Weeks become days. Our AI tools handle the boilerplate and repetitive tasks, while our vibe coders focus on logic and architecture.",
              icon: "Clock",
              color: "text-blue-500",
              bg: "bg-blue-50"
            },
            {
              title: "Higher Quality",
              desc: "Through our strict prompt regulations and multi-level monitoring, we eliminate hallucinations and ensure enterprise-grade security.",
              icon: "TrendingUp",
              color: "text-brand-500",
              bg: "bg-brand-50"
            },
            {
              title: "Affordable Pricing",
              desc: "Because we require fewer human hours for the same output, we pass the cost savings directly to our clients and partners.",
              icon: "DollarSign",
              color: "text-emerald-500",
              bg: "bg-emerald-50"
            }
          ].map((feature, idx) => {
            const IconComponent = Icons[feature.icon as keyof typeof Icons];
            return (
              <div key={idx} className="text-center p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-20 h-20 mx-auto rounded-full ${feature.bg} flex items-center justify-center mb-6`}>
                  <IconComponent size={36} className={feature.color} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
