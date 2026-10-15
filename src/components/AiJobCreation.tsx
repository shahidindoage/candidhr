import React from "react";
import { ListChecks, Sparkles, Users } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: ListChecks,
    title: "7 guided steps",
    desc: "A short, structured flow from role title to a live job.",
  },
  {
    icon: Sparkles,
    title: "AI generated job description",
    desc: "Drafted from your inputs and ready for you to edit.",
  },
  {
    icon: Users,
    title: "Skills & experience recommendations",
    desc: "Suggested skills and experience levels for every role.",
  },
];

export const AiJobCreation: React.FC = () => {
  return (
    <section id="job-creation" className="relative py-20 sm:py-28 bg-[#F8F9FB] overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[360px] bg-gradient-to-b from-[#7076F2]/12 to-transparent blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#7076F2]">
            AI Job Creation
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-[2.6rem] lg:text-[2.85rem] text-[#110b2d] tracking-tight mt-3">
            Create a job.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#7076F2] to-[#ba83ec]">
              In minutes.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4">
            Rapidly turns a few inputs into a complete, editable job draft.
          </p>
        </div>

      
        <div className="mt-6 rounded-[1.75rem]">
          <img
            src="/why/6.jpg"
            alt="AI-assisted job creation and candidate screening"
            loading="lazy"
            decoding="async"
            className="block w-full h-auto rounded-[1.25rem] "
          />
        </div>
      </div>
    </section>
  );
};