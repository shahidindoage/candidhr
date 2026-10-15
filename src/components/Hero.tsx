import React, { useState, useEffect, useRef } from "react";
import { ArrowRight,Building2 } from "lucide-react";

interface HeroProps {
  onOpenDemo: () => void;
}

const HERO_TILT_DEG = 18;
const HERO_PERSPECTIVE = 1800;
const HERO_TILT_LIFT = 22;
const HERO_BOTTOM_PAD = "calc(22px + 3vh)";
const STRAIGHTEN_SCROLL_RATIO = 0.7;

const ROTATING_WORDS = [
  "Your Interview Time!",
  "A First Interview!",
  "A Place on Your Shortlist!",
  "Your Team’s Attention!",
  "The Next Conversation!",
  "A Closer Look!",
];

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  // Background Canvas Ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const tiltRef = useRef<HTMLDivElement | null>(null);

  // Scroll-linked 3D straighten: the hero starts leaning back and eases flat.
  useEffect(() => {
    const section = sectionRef.current;
    const tiltLayer = tiltRef.current;
    if (!section || !tiltLayer) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const apply = (progress: number) => {
      const eased = 1 - Math.pow(1 - progress, 3);
      const lean = reduceMotion ? 0 : 1 - eased;
      if (reduceMotion) {
        tiltLayer.style.transform = "none";
        return;
      }
      const tilt = HERO_TILT_DEG * lean;
      const lift = HERO_TILT_LIFT * lean;
      tiltLayer.style.transform = `translateY(${lift}px) perspective(${HERO_PERSPECTIVE}px) rotateX(${tilt}deg)`;
    };

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const range = (window.innerHeight || 1) * STRAIGHTEN_SCROLL_RATIO;
      apply(Math.min(Math.max(-rect.top / range, 0), 1));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

const brandLogos = [
  { name: 'Lumiverse Solutions', icon: 'building-2' },
  { name: 'Panchsheel Filters', icon: 'building-2' },
  { name: 'Forech India', icon: 'building-2' },
  { name: 'Padmini Industries', icon: 'building-2' },
  { name: 'Wings Biotech', icon: 'building-2' },
  { name: 'QubeHealth Pay', icon: 'building-2' },
  { name: 'Vikas Group', icon: 'building-2' },
  { name: 'Monitra Healthcare', icon: 'building-2' },
];

  // Initial delay reveal
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, 600);

    return () => clearTimeout(startTimer);
  }, []);

  // Rotating words cycle
  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setIsChanging(true);

      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsChanging(false);
      }, 480);
    }, 2800);

    return () => clearInterval(interval);
  }, [hasStarted]);

  // Interactive Background Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const sectionElement = document.getElementById("hero-section");
    if (sectionElement) {
      sectionElement.addEventListener("mousemove", handleMouseMove);
      sectionElement.addEventListener("mouseleave", handleMouseLeave);
    }

    const particleCount = Math.floor(Math.min(width, 1200) / 18);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      color: string;
    }> = [];

    const colors = ["#F13B0A", "#111827", "#94A3B8", "#F97316"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.2 + 1,
        baseAlpha: Math.random() * 0.35 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let waveOffset = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      waveOffset += 0.008;

      ctx.beginPath();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = "rgba(241, 59, 10, 0.04)";

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 30) {
          const y =
            Math.sin(x * 0.003 + waveOffset + i) * 25 +
            Math.cos(x * 0.001 + waveOffset) * 15 +
            height * (0.35 + i * 0.15);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 180;

        let alpha = p.baseAlpha;

        if (dist < maxDist) {
          const factor = 1 - dist / maxDist;
          p.x -= (dx / dist) * factor * 1.5;
          p.y -= (dy / dist) * factor * 1.5;
          alpha = Math.min(1, p.baseAlpha + factor * 0.6);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ndx = p.x - p2.x;
          const ndy = p.y - p2.y;
          const nDist = Math.sqrt(ndx * ndx + ndy * ndy);

          if (nDist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "#F13B0A";
            ctx.globalAlpha = (1 - nDist / 110) * 0.12 * alpha;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (sectionElement) {
        sectionElement.removeEventListener("mousemove", handleMouseMove);
        sectionElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const handleNextWord = () => {
    if (isChanging) return;
    setIsChanging(true);
    setTimeout(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
      setIsChanging(false);
    }, 480);
  };

  return (
    <section
      id="hero-section"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#110b2d] isolate"
    >
      <div
        ref={tiltRef}
        className="relative min-h-screen flex flex-col justify-between will-change-transform"
        style={{ transformOrigin: "50% 50%", paddingBottom: HERO_BOTTOM_PAD }}
      >
        <video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setIsVideoReady(true)}
          aria-hidden="true"
        >
          <source
            src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/CandidHR/download%20(9).mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-[#110b2d]/72" />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60 transition-opacity duration-1000"
        />

        {/* Centered Main Content */}
      {/* <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center py-10 sm:py-16">
        <h1 
          className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-[4.65rem] text-slate-900 tracking-tight leading-[1.12] max-w-4xl mx-auto mb-6"
          aria-label="Find the candidates who deserve your interview time."
        >
          <span className="block mb-1 sm:mb-2">Find the Candidates</span>
          <span className="block">
            <span>Who Deserve </span>
            <span 
              onClick={handleNextWord}
              title="Click to switch word"
              className="inline-block overflow-hidden align-bottom cursor-pointer select-none"
            >
              {hasStarted ? (
                <span
                  key={`${wordIndex}-${isChanging ? 'out' : 'in'}`}
                  className={`${
                    isChanging ? 'animate-word-out' : 'animate-word-in'
                  } text-[#F13B0A] hover:opacity-90 transition-opacity relative`}
                >
                  {ROTATING_WORDS[wordIndex]}
                </span>
              ) : (
                <span className="opacity-0 inline-block">
                  {ROTATING_WORDS[0]}
                </span>
              )}
            </span>
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed mb-10 font-normal backdrop-blur-[2px] bg-white/30 rounded-lg py-1 px-2">
          CandidHR.ai sources, screens, assesses and interviews candidates before your team spends time on the first round — so recruiters can focus on the people worth talking to.
        </p>

        <div>
          <button
            
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#111827] hover:bg-black text-white text-base font-semibold tracking-wide shadow-md hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group backdrop-blur-xs"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div> */}

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center py-10 sm:py-16">
        <h1
          className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-[4.65rem] text-white tracking-tight leading-[1.12] max-w-4xl mx-auto mb-6"
          aria-label="Find the candidates who deserve your interview time."
        >
          <span className="block mb-1 sm:mb-2">Find the Candidates</span>
          <span className="block">
            <span>Who Deserve </span>
            <span
              onClick={handleNextWord}
              title="Click to switch word"
              className="inline-block overflow-hidden align-bottom cursor-pointer select-none"
            >
              {hasStarted ? (
                <span
                  key={`${wordIndex}-${isChanging ? "out" : "in"}`}
                  className={`${
                    isChanging ? "animate-word-out" : "animate-word-in"
                  } text-transparent bg-clip-text bg-gradient-to-br from-[#7076F2] to-[#ba83ece8] hover:opacity-90 transition-opacity relative`}
                >
                  {ROTATING_WORDS[wordIndex]}
                </span>
              ) : (
                <span className="opacity-0 inline-block">
                  {ROTATING_WORDS[0]}
                </span>
              )}
            </span>
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed mb-10 font-normal backdrop-blur-[2px] py-1 px-2">
          CandidHR.ai sources, screens, assesses and interviews candidates
          before your team spends time on the first round - so recruiters can
          focus on the people worth talking to.
        </p>

        <div>
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-white hover:bg-white/90 text-[#110b2d] text-base font-semibold tracking-wide shadow-lg shadow-black/30 hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group backdrop-blur-xs"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4 text-[#110b2d]/60 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>

      
      </div>
    </section>
  );
};