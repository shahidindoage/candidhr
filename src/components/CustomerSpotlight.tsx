import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CustomerSpotlightProps {
  onOpenDemo?: () => void;
}

const PORTALS = [
  "/portals/j1.png",
  "/portals/j2.png",
  "/portals/j3.png",
  "/portals/j4.png",
  "/portals/j5.png",
  "/portals/j6.png",
  "/portals/j7.png",
  "/portals/j8.png",
  "/portals/j9.png",
  "/portals/j10.png",
  "/portals/j11.png",
  "/portals/j12.png",
  "/portals/j13.png",
  "/portals/j14.png",
  "/portals/j15.png",
  "/portals/j16.png",
];

const COLUMN_OFFSETS = ["translate-y-6", "-translate-y-4", "translate-y-8", "-translate-y-2"];

const PAGE_SIZE = 8;

export const CustomerSpotlight: React.FC<CustomerSpotlightProps> = ({ onOpenDemo }) => {
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  const pageCount = Math.ceil(PORTALS.length / PAGE_SIZE);

  useEffect(() => {
    if (paused || pageCount < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = setInterval(() => {
      setPage((prev) => (prev + 1) % pageCount);
    }, 4500);

    return () => clearInterval(id);
  }, [paused, pageCount]);

  const visible = PORTALS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section id="results" className="bg-white text-slate-900 py-20 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Grid: Left Text | Right Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Text Content */}
          <div className="lg:col-span-5 space-y-5 text-left">
            {/* Eyebrow */}
            <div className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#7076F2] to-[#ba83ec]">
                Job Portal Integration
              </span>{" "}
              Powered by IIDBU
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Post once. Reach{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#7076F2] to-[#ba83ec]">
                1,000+ job boards.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-slate-600 font-normal leading-relaxed max-w-md pt-1">
              Publish a job from CandidHR.ai to job boards, aggregators and social
              channels in 40+ countries.
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

          {/* RIGHT SIDE: Staggered Portal Matrix */}
          <div
            className="lg:col-span-7 relative w-full flex flex-col items-end"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              key={page}
              className="grid grid-cols-4 gap-3 sm:gap-4 items-start w-full max-w-2xl animate-step-in"
            >
              {COLUMN_OFFSETS.map((offset, col) => (
                <div key={col} className={`flex flex-col gap-3.5 ${offset}`}>
                  {visible.slice(col * 2, col * 2 + 2).map((src, i) => {
                    const isLast = col === 3 && i === 1;

                    return (
                      <div
                        key={src}
                        className={`w-full rounded-2xl border border-slate-200/60 bg-white shadow-sm p-3 ${
                          isLast ? 'shadow-xl [perspective:800px]' : ''
                        }`}
                      >
                        <div
                          className={isLast ? '[transform:rotateY(-18deg)_rotateX(10deg)_scale(1.05)] transition-transform duration-300 hover:rotate-0' : ''}
                        >
                          <img
                            src={src}
                            alt="Supported job portal"
                            loading="lazy"
                            decoding="async"
                            className="block w-full h-auto"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

        
          </div>

        </div>

      </div>
    </section>
  );
};