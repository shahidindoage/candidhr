import React, { useState } from "react";

const STEPS = [
  {
    title: "Applicant profile",
    desc: "Resume, social profiles, introduction video and key details, with every stage's status on top.",
    image: "/why/7.jpg",
  },
  {
    title: "Weighted score and skill match",
    desc: "See how each candidate scored per section and which required skills they match.",
    image: "/why/8.jpg",
  },
  {
    title: "AI-proctored assessments",
    desc: "Scores, question analysis, a proctoring recording and answer tracking.",
    image: "/why/9.jpg",
  },
  {
    title: "Automated video interview",
    desc: "Match every response, with the question and time stamps beside it.",
    image: "/why/10.jpg",
  },
];

export const CandidateEvaluation: React.FC = () => {
  const [active, setActive] = useState(0);
  const current = STEPS[active];

  return (
    <section id="evaluation" className="relative py-20 sm:py-28 bg-white border-b border-slate-200 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[360px] bg-gradient-to-b from-[#7076F2]/12 to-transparent blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#7076F2]">
            End-to-end hiring workflow
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-[2.6rem] lg:text-[2.85rem] text-[#110b2d] tracking-tight mt-3">
            Every step,{" "}
            <span className="text-[#5a60e0]">in one place</span>
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-1.5">
            {STEPS.map((step, idx) => {
              const isActive = idx === active;

              return (
                <button
                  key={step.title}
                  onMouseEnter={() => setActive(idx)}
                  onFocus={() => setActive(idx)}
                  onClick={() => setActive(idx)}
                  aria-current={isActive}
                  className={`w-full text-left rounded-2xl border px-5 py-5 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-[#7076F2] bg-[#F8F9FB] shadow-sm"
                      : "border-slate-200/70 hover:border-slate-300 hover:bg-[#F8F9FB]/60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs transition-colors ${
                        isActive ? "text-[#7076F2]" : "text-slate-300"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className={`font-heading font-bold text-lg leading-snug transition-colors ${
                        isActive ? "text-[#110b2d]" : "text-slate-500"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm text-slate-600 leading-relaxed sm:pl-9 pt-2.5">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <div
              key={active}
              className="rounded-[1.75rem] p-3 animate-step-in overflow-hidden"
            >
              <img
                src={current.image}
                alt={`${current.title} screen`}
                loading="lazy"
                decoding="async"
                className="block w-full h-auto border border-gray-200 rounded-4xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};