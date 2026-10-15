import React, { useEffect, useState } from "react";

const FEATURES = [
  {
    title: "Job creation in seconds",
    description: "AI drafts the job description for you to review.",
  },
  {
    title: "AI resume screening",
    description: "Every candidate ranked against the job.",
  },
  {
    title: "Job description matching",
    description: "See which requirements each candidate meets.",
  },
  {
    title: "Bulk resume upload",
    description: "Screen the resumes you already have.",
  },
  {
    title: "Red-flag detection",
    description: "Surface deal-breakers before the first call.",
  },
  {
    title: "Introduction video",
    description: "Candidates introduce themselves on video.",
  },
  {
    title: "AI-proctored assessments",
    description: "Run assessments with AI proctoring on.",
  },
  {
    title: "Skills & aptitude tests",
    description: "Technical, aptitude and domain tests.",
  },
  {
    title: "AI video interviews",
    description: "First rounds on the candidate's schedule.",
  },
  {
    title: "Candidate communication",
    description: "Keep candidates informed at each step.",
  },
  {
    title: "Workflow automation",
    description: "Move candidates between stages automatically.",
  },
  {
    title: "Roles & permissions",
    description: "Control who on your team sees what.",
  },
];

const VISIBLE = 2;

const cardStyle = (offset: number) => {
  const side = Math.abs(offset);

  if (offset === 0) return "z-30 opacity-100 scale-100 translate-x-0 rotate-y-0";

  if (side === 1) {
    return offset > 0
      ? "z-20 opacity-55 scale-[0.9] translate-x-[86%] -rotate-y-[13deg]"
      : "z-20 opacity-55 scale-[0.9] -translate-x-[86%] rotate-y-[13deg]";
  }

  if (side === 2) {
    return offset > 0
      ? "z-10 opacity-20 scale-[0.8] translate-x-[158%] -rotate-y-[24deg]"
      : "z-10 opacity-20 scale-[0.8] -translate-x-[158%] rotate-y-[24deg]";
  }

  return "z-0 opacity-0 scale-[0.72] pointer-events-none";
};

const offsetFor = (index: number, activeIdx: number, total: number) => {
  const half = total / 2;
  let offset = index - activeIdx;

  if (offset > half) offset -= total;
  if (offset < -half) offset += total;

  return offset;
};

export const WhyNetzur: React.FC = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % FEATURES.length);
    }, 5000);

    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      id="why-netzur"
      className="relative py-20 sm:py-28 bg-[#F8F9FB] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
        <div className="text-xs font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-[#7076F2] to-[#ba83ece8]">
          Core Platform Features
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#110b2d] tracking-tight mt-2">
          Twelve capabilities, end to end
        </h2>
      </div>

      <div className="relative [perspective:1600px]">
        <div className="relative h-[330px] sm:h-[300px] max-w-5xl mx-auto px-4 sm:px-6">
          {FEATURES.map((feature, idx) => {
            const offset = offsetFor(idx, active, FEATURES.length);

            return (
              <button
                key={feature.title}
                onClick={() => setActive(idx)}
                aria-hidden={Math.abs(offset) > VISIBLE}
                tabIndex={Math.abs(offset) > VISIBLE ? -1 : 0}
                aria-label={feature.title}
                style={{ transitionDuration: "700ms" }}
                className={`absolute left-1/2 top-1/2 w-[min(86vw,480px)] h-full -ml-[min(43vw,240px)] -mt-[165px] sm:-mt-[150px] rounded-3xl bg-white border border-slate-200/80 shadow-2xl shadow-slate-900/10 p-8 sm:p-10 text-left flex flex-col justify-center cursor-pointer transition-[transform,opacity] ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] will-change-transform ${cardStyle(offset)}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-5 right-7 font-heading font-extrabold text-5xl leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#7076F2]/25 to-[#ba83ec]/10 select-none"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <h3 className="font-heading font-extrabold text-2xl sm:text-[1.75rem] text-[#110b2d] tracking-tight pr-14">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3 max-w-sm">
                  {feature.description}
                </p>

             
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};