import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CustomerSpotlightProps {
  onOpenDemo?: () => void;
}

export const CustomerSpotlight: React.FC<CustomerSpotlightProps> = ({ onOpenDemo }) => {
  return (
    <section id="results" className="bg-white text-slate-900 py-20 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Grid: Left Text | Right Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Text Content */}
          <div className="lg:col-span-5 space-y-5 text-left">
            {/* Tag */}
            <div>
              {/* <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium tracking-tight">
                Testimonials
              </span> */}
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              360 Interviews. 25 Qualified Candidates. <br />
              <span className="text-slate-400 font-normal">All in just 3 hours.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-slate-600 font-normal leading-relaxed max-w-md pt-1">
              A customer result shared by Amar Thakare, CEO & MD of Lumiverse Solutions — showing how CandidHR.ai helps teams move from applications to qualified candidates faster.
            </p>

            {/* Action Button */}
            <div className="pt-3">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-black hover:bg-slate-800 text-white font-medium text-xs tracking-wide transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Staggered Image Matrix */}
          <div className="lg:col-span-7 relative w-full flex justify-end">
            <div className="grid grid-cols-4 gap-3 sm:gap-4 items-center w-full max-w-2xl">
              
              {/* Column 1 */}
              <div className="flex flex-col gap-3.5 translate-y-6">
                <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" alt="CandidHR.ai customer and recruitment team" className="w-full h-full object-cover" />
                </div>
                <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" alt="CandidHR.ai customer and recruitment team" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-3.5 -translate-y-4">
                <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" alt="CandidHR.ai customer and recruitment team" className="w-full h-full object-cover" />
                </div>
                <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300" alt="CandidHR.ai customer and recruitment team" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-3.5 translate-y-8">
                <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300" alt="CandidHR.ai customer and recruitment team" className="w-full h-full object-cover" />
                </div>
                <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300" alt="CandidHR.ai customer and recruitment team" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Column 4 (With 3D Skewed Card) */}
              <div className="flex flex-col gap-3.5 -translate-y-2">
                <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=300" alt="CandidHR.ai customer and recruitment team" className="w-full h-full object-cover" />
                </div>
                
                {/* 3D Perspective Card */}
                <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 [perspective:800px]">
                  <div className="w-full h-full [transform:rotateY(-18deg)_rotateX(10deg)_scale(1.05)] transition-transform duration-300 hover:rotate-0">
                    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300" alt="CandidHR.ai customer and recruitment team" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};