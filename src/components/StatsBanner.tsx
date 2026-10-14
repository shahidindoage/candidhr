import React from 'react';
import { clientLogos } from '../data/mockData';
import { ShieldCheck, Server, Globe2, CreditCard } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  return (
    <section className="bg-[#353F4F] text-white py-14 border-y border-[#262E3B] relative overflow-hidden">
      {/* Subtle grid pattern for enterprise tech feel */}
      <div className="absolute inset-0 opacity-5 pointer-events-none subtle-grid" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Metric Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-slate-700/60">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight">420</span>
              <span className="font-heading font-extrabold text-3xl text-[#F13B0A]">+</span>
            </div>
            <div className="text-sm font-semibold text-slate-300 mt-1">ISP Deployments</div>
            <div className="text-xs text-slate-400 mt-0.5">Fiber, WISP & Municipal</div>
          </div>

          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight">99.995</span>
              <span className="font-heading font-extrabold text-2xl text-[#F13B0A]">%</span>
            </div>
            <div className="text-sm font-semibold text-slate-300 mt-1">Core AAA Uptime</div>
            <div className="text-xs text-slate-400 mt-0.5">High-Availability Cloud SLA</div>
          </div>

          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight">4.8</span>
              <span className="font-heading font-extrabold text-3xl text-[#F13B0A]">M+</span>
            </div>
            <div className="text-sm font-semibold text-slate-300 mt-1">Subscribers Managed</div>
            <div className="text-xs text-slate-400 mt-0.5">Active Broadband Endpoints</div>
          </div>

          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight">$2.4</span>
              <span className="font-heading font-extrabold text-3xl text-[#F13B0A]">B+</span>
            </div>
            <div className="text-sm font-semibold text-slate-300 mt-1">Annual Recurring BSS</div>
            <div className="text-xs text-slate-400 mt-0.5">Processed without leakage</div>
          </div>
        </div>

        {/* Client Logos / Trust statement */}
        <div className="pt-10">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Leading Regional Telecoms and Internet Providers Powered by Netzur
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {clientLogos.map((client, idx) => (
              <div 
                key={idx}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-slate-600 transition-colors text-center"
              >
                <div className="text-sm font-bold tracking-tight text-slate-200">
                  {client.name}
                </div>
                <div className="text-[10px] text-slate-400 tracking-wide mt-0.5">
                  {client.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
