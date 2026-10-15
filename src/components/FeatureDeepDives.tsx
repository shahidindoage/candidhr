import React, { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from 'framer-motion';

interface SectionStory {
  id: string;
  tabLabel: string;
  tabNumber: string;
  alt: string;
  images: string[];
}

const STORIES: SectionStory[] = [
  {
    id: 'integrations',
    tabNumber: '01',
    tabLabel: 'Login & Dashboard',
    alt: 'Recruitment professional reviewing candidate matches',
    images: [
      '/why/1.jpg',
    ],
  },
  {
    id: 'smarter-management',
    tabNumber: '02',
    tabLabel: 'Create a Job',
    alt: 'Recruitment team using AI-powered candidate screening',
    images: [
      '/why/2.jpg',
      '/why/3.jpg',
    ],
  },
  {
    id: 'who-we-are',
    tabNumber: '03',
    tabLabel: 'Automate',
    alt: 'Recruiter reviewing an interview assessment',
    images: [
      '/why/4.jpg',
    ],
  },
    {
    id: 'who-we-are',
    tabNumber: '03',
    tabLabel: 'Evaluate',
    alt: 'Recruiter reviewing an interview assessment',
    images: [
      '/why/5.jpg',
    ],
  },
];

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <span className="relative inline-block mr-[0.25em]">
      <motion.span style={{ opacity }} className="text-white font-normal">
        {children}
      </motion.span>
    </span>
  );
};

export const FeatureDeepDives: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const activeStory = STORIES[activeStoryIndex];

  const headlineText =
    "From login to a job that runs itself.";
  const words = headlineText.split(" ");

  const headlineRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: headlineRef,
    offset: ["start 80%", "end 45%"],
  });

  return (
    <section id="features" className="py-20 sm:py-28 bg-[#110b2d] border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 sm:mb-14">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-white/80">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#7076F2] to-[#ba83ec]">
                  Platform
                </span>{" "}
                Walkthrough
              </div>

              <h2
                ref={headlineRef}
                className="text-2xl sm:text-4xl md:text-[2.6rem] lg:text-[2.85rem] font-normal tracking-tight leading-[1.2] max-w-4xl select-none mt-3"
              >
                {words.map((word, i) => {
                  const start = i / words.length;
                  const end = start + 1 / words.length;

                  return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                      {word}
                    </Word>
                  );
                })}
              </h2>
            </div>

            <div className="shrink-0">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <span className="flex items-center -space-x-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#7076F2] border border-white/30 flex items-center justify-center text-[10px]">
                    ⚡
                  </span>
                  <span className="w-5 h-5 rounded-full bg-white border border-white/30 flex items-center justify-center text-[10px] text-[#110b2d]">
                    ✦
                  </span>
                </span>
                <span className="text-xs font-semibold text-white">
                  420+ Applications Processed
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-white/50 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
            {STORIES.map((story, idx) => {
              const isActive = activeStoryIndex === idx;

              return (
                <button
                  key={story.id}
                  onClick={() => setActiveStoryIndex(idx)}
                  className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer select-none whitespace-nowrap ${
                    isActive
                      ? 'text-[#110b2d]'
                      : 'bg-white/5 text-white/65 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-white rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{story.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className={`grid items-start gap-3 sm:gap-4 ${
              activeStory.images.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
            }`}
          >
            {activeStory.images.map((src) => (
              <div
                key={src}
                className="rounded-[2rem] overflow-hidden bg-white/[0.04] border border-white/10"
              >
                <img
                  src={src}
                  alt={activeStory.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="block w-full h-auto"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};