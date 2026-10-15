import React from "react";
import { Search, Mail } from "lucide-react";

const ITEMS = [
  {
    icon: Search,
    title: "DeepSearch",
    desc: "Discover talent beyond your existing applicant pool",
    stat: "1.2B+",
    statLabel: "candidates",
    image: "/why/deepsearch.jpg",
  },
  {
    icon: Mail,
    title: "Invite via Email",
    desc: "Reach multiple candidates in one click.",
    image: "/why/invite-email.jpg",
  },
];

export const IspSolutionsGrid: React.FC = () => {
  return (
    <section id="solutions" className="relative py-20 sm:py-28 bg-white border-b border-slate-200 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[360px] bg-gradient-to-b from-[#7076F2]/12 to-transparent blur-3xl pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#7076F2]">
            Candidate Sourcing
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-[#110b2d] tracking-tight mt-3">
            No applicants yet?{" "}
            <span className="text-[#5a60e0]">Bring the right people in</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4">
            Source candidates from a large talent pool &ndash; or invite an
            existing list in one go.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6 items-start">
          {ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[1.75rem] overflow-hidden bg-[#14173d] shadow-xl shadow-[#14173d]/20"
              >
                <div className="flex items-start gap-4 p-6 sm:p-7">
                  <div className="w-12 h-12 rounded-xl bg-[#7076F2] flex items-center justify-center text-white shrink-0">
                    <Icon className="w-[22px] h-[22px]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading font-extrabold text-xl text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>

                  {item.stat && (
                    <div className="shrink-0 border-l border-white/15 pl-5 text-right">
                      <div className="font-heading font-extrabold text-2xl leading-none text-[#8b90f5]">
                        {item.stat}
                      </div>
                      <div className="text-[11px] text-white/50 mt-1">
                        {item.statLabel}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-2.5 pt-0">
                  <img
                    src={item.image}
                    alt={`${item.title} screen`}
                    loading="lazy"
                    decoding="async"
                    className="block w-full h-auto rounded-[1.25rem] bg-white"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};