import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
}

const ROTATING_WORDS = [
  'Your Interview Time!',
  'A First Interview!',
  'A Place on Your Shortlist!',
  'Your Team’s Attention!',
  'The Next Conversation!',
  'A Closer Look!',
];

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Background Canvas Ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Customer names from the CandidHR.ai homepage
  const brandLogos: { name: string; icon?: string; isSvgImage?: boolean; src?: string }[] = [
    { name: 'Lumiverse Solutions', icon: '✦' },
    { name: 'Panchsheel Filters', icon: '◈' },
    { name: 'Forech India', icon: '◆' },
    { name: 'Padmini Industries', icon: '✧' },
    { name: 'Wings Biotech', icon: '∞' },
    { name: 'QubeHealth Pay', icon: '◿' },
    { name: 'Vikas Group', icon: '⬡' },
    { name: 'Monitra Healthcare', icon: '▲' },
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
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

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

    const sectionElement = document.getElementById('hero-section');
    if (sectionElement) {
      sectionElement.addEventListener('mousemove', handleMouseMove);
      sectionElement.addEventListener('mouseleave', handleMouseLeave);
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

    const colors = ['#F13B0A', '#111827', '#94A3B8', '#F97316'];

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
      ctx.strokeStyle = 'rgba(241, 59, 10, 0.04)';

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
          const factor = (1 - dist / maxDist);
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
            ctx.strokeStyle = '#F13B0A';
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
      window.removeEventListener('resize', handleResize);
      if (sectionElement) {
        sectionElement.removeEventListener('mousemove', handleMouseMove);
        sectionElement.removeEventListener('mouseleave', handleMouseLeave);
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
      className="relative overflow-hidden bg-white min-h-[calc(100vh-4.5rem)] sm:min-h-[calc(100vh-5rem)] flex flex-col justify-between border-b border-slate-100"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80 transition-opacity duration-1000"
      />

      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-orange-100/40 via-red-50/20 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Centered Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center py-10 sm:py-16">
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
      </div>

      {/* Customer strip */}
      <div className="relative z-10 w-full pb-8 sm:pb-12 pt-6 border-t border-slate-100/80 bg-white/60 backdrop-blur-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {brandLogos.map((logo, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-1.5 text-slate-600 font-semibold text-xs sm:text-sm tracking-tight select-none"
              >
                {logo.isSvgImage ? (
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-5 sm:h-6 w-auto grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain"
                  />
                ) : (
                  <>
                    {logo.icon && <span className="font-mono text-xs opacity-75">{logo.icon}</span>}
                    <span>{logo.name}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};