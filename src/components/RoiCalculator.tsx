import React, { useState } from 'react';
import { Sliders, DollarSign, Clock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDemo: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemo }) => {
  const [subscriberCount, setSubscriberCount] = useState<number>(18500);
  const [arpu, setArpu] = useState<number>(68);

  // Derived telecom ROI figures
  const monthlyRevenue = subscriberCount * arpu;
  // Avg 3.4% unbilled revenue leakage recovered via automated RADIUS billing sync & dunning
  const leakageRecoveredYearly = Math.round(monthlyRevenue * 0.034 * 12);
  // Helpdesk dispute hours saved (approx 1 hour per 80 subscribers per month)
  const helpdeskHoursSaved = Math.round(subscriberCount / 75);
  // Autopay on-time collection lift (from 84% industry avg to 99.2%)
  const cashflowAccelerated = Math.round(monthlyRevenue * 0.152);

  return (
    <section id="calculator" className="py-24 bg-white border-b border-[#E2E6EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#F13B0A]">
            BUSINESS IMPACT & ROI CALCULATOR
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#353F4F] tracking-tight">
            Calculate Your ISP’s Revenue Recovery
          </h2>
          <p className="text-base sm:text-lg text-[#667085]">
            See how much unbilled bandwidth, manual helpdesk time, and failed invoice payments you eliminate with Netzur.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="bg-[#F8F9FB] rounded-2xl border border-[#E2E6EA] p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-8">
            {/* Slider 1: Subscriber Count */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label htmlFor="subscribers-slider" className="text-sm font-bold text-[#353F4F]">
                  Active Broadband Subscribers:
                </label>
                <span className="font-heading font-extrabold text-xl text-[#353F4F] bg-white px-3 py-1 rounded-lg border border-[#E2E6EA]">
                  {subscriberCount.toLocaleString()}
                </span>
              </div>
              <input
                id="subscribers-slider"
                type="range"
                min="1000"
                max="100000"
                step="500"
                value={subscriberCount}
                onChange={(e) => setSubscriberCount(Number(e.target.value))}
                className="w-full h-2 bg-[#E2E6EA] rounded-lg appearance-none cursor-pointer accent-[#F13B0A]"
              />
              <div className="flex justify-between text-xs text-[#667085] font-mono">
                <span>1,000</span>
                <span>25,000</span>
                <span>50,000</span>
                <span>100,000+</span>
              </div>
            </div>

            {/* Slider 2: Average Revenue Per User (ARPU) */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label htmlFor="arpu-slider" className="text-sm font-bold text-[#353F4F]">
                  Average Monthly ARPU ($):
                </label>
                <span className="font-heading font-extrabold text-xl text-[#353F4F] bg-white px-3 py-1 rounded-lg border border-[#E2E6EA]">
                  ${arpu} / mo
                </span>
              </div>
              <input
                id="arpu-slider"
                type="range"
                min="35"
                max="200"
                step="1"
                value={arpu}
                onChange={(e) => setArpu(Number(e.target.value))}
                className="w-full h-2 bg-[#E2E6EA] rounded-lg appearance-none cursor-pointer accent-[#F13B0A]"
              />
              <div className="flex justify-between text-xs text-[#667085] font-mono">
                <span>$35 (Budget)</span>
                <span>$75 (Fiber Symmetrical)</span>
                <span>$150+ (Gigabit Enterprise)</span>
              </div>
            </div>

            {/* Base calculations summary */}
            <div className="p-4 bg-white rounded-xl border border-[#E2E6EA] text-xs space-y-1.5">
              <div className="flex justify-between text-[#667085]">
                <span>Estimated Monthly Gross Invoicing:</span>
                <span className="font-mono font-bold text-[#353F4F]">${monthlyRevenue.toLocaleString()} / mo</span>
              </div>
              <div className="flex justify-between text-[#667085]">
                <span>Average Billing Dispute Tickets Reduced:</span>
                <span className="font-mono font-bold text-emerald-600">82% Reduction</span>
              </div>
            </div>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-6 bg-[#353F4F] text-white p-7 sm:p-9 rounded-xl space-y-6 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#F13B0A]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-slate-700 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                Projected Annual Impact
              </span>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-500/20 px-2.5 py-0.5 rounded">
                Payback &lt; 45 Days
              </span>
            </div>

            {/* Primary Stat */}
            <div>
              <div className="text-xs text-slate-300">Recovered Revenue Leakage (Annual)</div>
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-[#F13B0A] mt-1 tracking-tight">
                ${leakageRecoveredYearly.toLocaleString()}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Via automated RADIUS speed syncing, zero grace period abuse & smart auto-dunning.
              </div>
            </div>

            {/* Sub Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-700/80">
              <div>
                <div className="text-xs text-slate-400">Helpdesk Hours Saved / Mo</div>
                <div className="text-2xl font-heading font-extrabold text-white mt-0.5">
                  {helpdeskHoursSaved} hrs
                </div>
                <div className="text-[11px] text-slate-400">Self-service billing portal</div>
              </div>

              <div>
                <div className="text-xs text-slate-400">Monthly Cashflow Accelerated</div>
                <div className="text-2xl font-heading font-extrabold text-emerald-400 mt-0.5">
                  ${cashflowAccelerated.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-400">99.4% on-time autopay</div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="w-full py-3.5 rounded-xl bg-[#F13B0A] text-white font-semibold text-sm hover:bg-[#D73307] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                Schedule Full Financial Audit & Demo
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
