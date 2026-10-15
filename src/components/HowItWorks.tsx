import React, { useEffect, useState } from "react";

type Actor = "team" | "ai";

interface Step {
  actor: Actor;
  title: string;
  text: string;
  outcome?: string;
  note?: string;
  premium?: boolean;
}

const STEPS: Step[] = [
  {
    actor: "team",
    title: "Create the job",
    text: "Add a title, location and the key skills that matter.",
  },
  {
    actor: "ai",
    title: "AI writes the JD",
    text: "A full job description, drafted from what you entered and ready for your review.",
    outcome: "Live in seconds",
  },
  {
    actor: "ai",
    title: "Source",
    text: "Auto-invite from a 3B pool of job portals, or upload the resumes you already have.",
    outcome: "Pipeline filled",
    note: "Candidates are invited, or apply on their own.",
  },
  {
    actor: "ai",
    title: "Screen",
    text: "Every resume matched against the job, with the reasons shown.",
    outcome: "Match score",
    note: "Candidates answer red-flag questions and send an intro video.",
  },
  {
    actor: "ai",
    title: "Assess",
    text: "Skills, aptitude, domain and AI coding tests, scored automatically.",
    outcome: "Skill score",
    note: "Tests are AI-proctored and taken at the candidate's convenience.",
  },
  {
    actor: "ai",
    title: "Interview",
    text: "AI video interviews with a written recommendation and full transcript.",
    outcome: "Interview score",
    note: "Candidates book a slot that suits them.",
  },
  {
    actor: "ai",
    title: "Rank",
    text: "One shortlist, combining every signal behind the score.",
    outcome: "Shortlist ready",
    note: "Candidates stay updated by email and WhatsApp.",
    premium: true,
  },
  {
    actor: "team",
    title: "Decide",
    text: "Interview the top picks and hire.",
  },
];

const ACTOR_META: Record<Actor, { label: string; dot: string }> = {
  team: { label: "Your team", dot: "bg-[#110b2d]" },
  ai: { label: "CandidHR.ai", dot: "bg-[#7076F2]" },
};

const TOTAL = STEPS.length;

export const HowItWorks: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % TOTAL);
    }, 4500);

    return () => clearInterval(id);
  }, [paused]);

  const step = STEPS[index];
  const meta = ACTOR_META[step.actor];

  return (
    <section
      id="how-it-works"
      className="relative py-14 sm:py-20 bg-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="text-xs font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-[#7076F2] to-[#ba83ece8]">
            How it all works together
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#110b2d] tracking-tight mt-3">
            Who does what, from job created to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#7076F2] to-[#ba83ec]">
              hire
            </span>
          </h2>
        </div>

        <div className="relative h-[3px] mx-8 sm:mx-16">
          <div className="absolute inset-0 rounded-full bg-slate-200" />
          <div
            className="absolute inset-0 rounded-full origin-left bg-gradient-to-r from-[#7076F2] via-[#ba83ec] to-[#F13B0A] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `scaleX(${index / (TOTAL - 1)})` }}
          />

          {STEPS.map((item, idx) => (
            <button
              key={item.title}
              onClick={() => setIndex(idx)}
              aria-label={`Show ${item.title}`}
              aria-current={idx === index}
              style={{ left: `${(idx / (TOTAL - 1)) * 100}%` }}
              className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 cursor-pointer ${
                idx === index
                  ? "scale-125 border-[#7076F2] bg-white shadow-[0_0_0_5px_rgba(112,118,242,0.15)]"
                  : idx < index
                  ? "border-[#ba83ec] bg-[#ba83ec]"
                  : "border-slate-300 bg-white"
              }`}
            />
          ))}
        </div>

        <div className="mt-6 min-h-[230px] sm:min-h-[200px] flex items-center">
          <div key={step.title} className="w-full text-center animate-step-in">
          

           

            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#110b2d] tracking-tight mt-1">
              {step.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-2.5 max-w-xl mx-auto">
              {step.text}
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {step.outcome && (
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                  {step.outcome}
                </span>
              )}
              {step.note && (
                <span className="text-[13px] text-slate-400 max-w-sm">
                  {step.note}
                  {step.premium && (
                    <span className="text-[#F13B0A]"> &#9733; Premium</span>
                  )}
                </span>
              )}
            </div>
          </div>
        </div>

       

       
      </div>
    </section>
  );
};