import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Headphones, Check } from 'lucide-react';

interface CtaBannerProps {
  onOpenDemo: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#353F4F] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-slate-700">
          
          {/* Subtle network lines */}
          <div className="absolute inset-0 opacity-5 pointer-events-none subtle-grid" />
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-[#F13B0A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#F13B0A]" />
              Enterprise Onboarding & 48-Hour Migration
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Ready to Modernize Your ISP Billing & Operations?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Join over 420 broadband and telecom operators saving thousands of hours, accelerating cashflow, and providing seamless subscriber connectivity.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#F13B0A] text-white font-bold text-base hover:bg-[#D73307] active:scale-[0.99] transition-all cursor-pointer shadow-lg shadow-orange-950/20"
              >
                Schedule Guided Platform Demo
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-base hover:bg-slate-700 transition-all cursor-pointer"
              >
                Explore Sandbox Tenant
              </button>
            </div>

            {/* Enterprise Guarantees */}
            <div className="pt-6 border-t border-slate-700/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F13B0A]" />
                <span>Zero-risk trial on sandbox</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F13B0A]" />
                <span>Custom RADIUS / OLT validation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F13B0A]" />
                <span>24/7 Tier-3 telecom support</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
