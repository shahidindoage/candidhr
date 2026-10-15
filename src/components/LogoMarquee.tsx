import React from "react";

const LOGOS = [
  "/logos/c1.png",
  "/logos/c2.png",
  "/logos/c3.png",
  "/logos/c4.png",
  "/logos/c5.png",
  "/logos/c6.png",
];

export const LogoMarquee: React.FC = () => {
  return (
    <section
      aria-label="Companies using CandidHR"
      className="relative bg-[#110b2d] border-t border-white/10 py-10 sm:py-12 overflow-hidden"
    >
      <p className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-7 sm:mb-9">
        Trusted by growing companies worldwide
      </p>

<div className="[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="animate-marquee items-center">
            {[0, 1, 2, 3].map((copy) => (
              <ul
                key={copy}
                className="flex shrink-0 items-center"
                aria-hidden={copy !== 0}
              >
                {LOGOS.map((src) => (
                  <li key={src} className="shrink-0 pr-12 sm:pr-16">
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-6 sm:h-6 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
    </section>
  );
};