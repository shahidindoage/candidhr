import React, { useState } from 'react';
import { 
  Layers, 
  CreditCard, 
  Users, 
  Ticket, 
  Cpu, 
  MapPin, 
  ArrowRight,
  Check
} from 'lucide-react';

interface WhyNetzurProps {
  onOpenDemo?: () => void;
}

interface WhyCardData {
  id: string;
  category: string;
  title: string;
  metric: string;
  metricLabel: string;
  teaser: string;
  icon: React.ElementType;
  bgImage: string;
  specDetails: {
    subtitle: string;
    points: string[];
  };
}

const WHY_CARDS: WhyCardData[] = [
  {
    id: 'operations',
    category: 'AI SOURCING',
    title: 'Source the Right Candidates',
    metric: '3B',
    metricLabel: 'Talent Pool',
    teaser: 'Reach beyond applicants with access to a worldwide talent pool and invite the candidates who best match each job.',
    icon: Layers,
    bgImage: 'https://res.cloudinary.com/dx6zonqrt/image/upload/v1791897884/pexels-tima-miroshnichenko-5439152_srnqbt.jpg',
    specDetails: {
      subtitle: 'AI-Powered Candidate Sourcing',
      points: [
        'Create a job in seconds with an AI-written job description',
        'Invite best-matched candidates from a worldwide talent pool',
        'Search for profiles using Deep Search in plain language',
      ],
    },
  },
  {
    id: 'billing',
    category: 'RESUME SCREENING',
    title: 'Find the Matches. Skip the Noise.',
    metric: 'AI',
    metricLabel: 'Job Matching',
    teaser: 'Evaluate every resume against job requirements, rank candidates by fit, and see the reasons behind every match.',
    icon: CreditCard,
    bgImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    specDetails: {
      subtitle: 'Resume Screening & Ranking',
      points: [
        'Compare resumes against skills, experience and job criteria',
        'See which requirements each candidate meets',
        'Spot potential gaps before the interview',
      ],
    },
  },
  {
    id: 'crm',
    category: 'ASSESSMENTS',
    title: 'Test What a Resume Can’t Prove',
    metric: '24/7',
    metricLabel: 'Flexible Completion',
    teaser: 'Send role-relevant assessments candidates can complete on their own schedule, with results scored automatically.',
    icon: Users,
    bgImage: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80',
    specDetails: {
      subtitle: 'Role-Relevant Candidate Assessments',
      points: [
        'Technical, coding, aptitude and domain assessments',
        'Communication tests to assess candidate skills',
        'AI proctoring available for assessments',
      ],
    },
  },
  {
    id: 'ticketing',
    category: 'VIDEO INTERVIEWS',
    title: 'The First Round, Before Your Calendar',
    metric: '24×7',
    metricLabel: 'Automated Interviews',
    teaser: 'Automated video interviews let candidates respond on their schedule while CandidHR.ai transcribes and analyses their answers.',
    icon: Ticket,
    bgImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    specDetails: {
      subtitle: 'Automated Video Interviewing',
      points: [
        'Ask introductory and role-specific questions',
        'Transcribe and analyse candidate answers',
        'Review interview scores and AI recommendations',
      ],
    },
  },
  {
    id: 'acs',
    category: 'CANDIDATE RANKING',
    title: 'Know Who Deserves the Next Conversation',
    metric: '360°',
    metricLabel: 'Candidate View',
    teaser: 'Bring job match, assessment and video interview signals together in one prioritised shortlist with evidence behind the ranking.',
    icon: Cpu,
    bgImage: 'https://res.cloudinary.com/dx6zonqrt/image/upload/v1791897768/pexels-august-de-richelieu-4427923_op2tev.jpg',
    specDetails: {
      subtitle: 'One Ranked Candidate View',
      points: [
        'Combine resume and job-match results',
        'Include assessment and coding scores',
        'Use video interview analysis to inform decisions',
      ],
    },
  },
  {
    id: 'map',
    category: 'DEEP SEARCH',
    title: 'Describe the Person. Find the Profiles.',
    metric: '3B',
    metricLabel: 'Worldwide Talent Pool',
    teaser: 'Search a worldwide talent pool in plain language to discover candidates who match the person and skills you need.',
    icon: MapPin,
    bgImage: 'https://res.cloudinary.com/dx6zonqrt/image/upload/v1791897533/pexels-ekaterina-bolovtsova-6077055_fyqgrx.jpg',
    specDetails: {
      subtitle: 'Natural-Language Candidate Search',
      points: [
        'Describe the experience and skills you need',
        'Discover relevant candidate profiles',
        'Invite the best matches directly to a job',
      ],
    },
  },
];

export const WhyNetzur: React.FC<WhyNetzurProps> = ({ onOpenDemo }) => {
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  const toggleFlip = (id: string) => {
    setFlippedCardId(prev => (prev === id ? null : id));
  };

  const marqueeCards = [...WHY_CARDS, ...WHY_CARDS];

  return (
    <section 
      id="why-netzur" 
      className="py-16 sm:py-10 bg-white border-b border-slate-200 overflow-hidden relative select-none"
    >
      {/* Infinite Marquee Container */}
      <div className="animate-marquee flex items-center gap-6 sm:gap-8 py-10">
        {marqueeCards.map((card, index) => {
          const Icon = card.icon;
          const isFlipped = flippedCardId === `${card.id}-${index}`;
          const isElevated = index % 2 === 1;

          return (
            <div
              key={`${card.id}-${index}`}
              className={`card-perspective w-[280px] sm:w-[320px] md:w-[340px] h-[480px] shrink-0 transition-transform duration-500 ${
                isElevated ? '-translate-y-6' : 'translate-y-2'
              }`}
              onMouseEnter={() => setFlippedCardId(`${card.id}-${index}`)}
              onMouseLeave={() => setFlippedCardId(null)}
              onClick={() => toggleFlip(`${card.id}-${index}`)}
            >
              <div 
                className={`card-preserve-3d relative w-full h-full rounded-3xl transition-transform duration-700 cursor-pointer shadow-lg hover:shadow-2xl ${
                  isFlipped ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                {/* FRONT OF CARD */}
                <div className="card-backface-hidden absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-100 flex flex-col justify-end p-6 sm:p-8">
                  <img
                    src={card.bgImage}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  <div className="relative z-10">
                    <span className="text-[11px] font-mono font-bold text-orange-400 tracking-widest uppercase mb-1 block">
                      {card.category}
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* BACK OF CARD */}
                <div 
                  className="card-backface-hidden [transform:rotateY(180deg)] absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#1E2532] to-[#121620] border-2 border-orange-500/50 p-6 sm:p-8 flex flex-col justify-between text-white"
                >
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#F13B0A]/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest text-orange-400 bg-orange-950/60 border border-orange-500/30 uppercase">
                        FEATURE OVERVIEW
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-orange-400">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="font-heading font-bold text-xl text-white leading-snug">
                      {card.title}
                    </h4>
                    <p className="text-xs font-mono text-orange-200/90 mt-1.5">
                      {card.specDetails.subtitle}
                    </p>

                    <div className="mt-6 space-y-3.5">
                      {card.specDetails.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                          <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-emerald-400 stroke-[3]" />
                          </div>
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-white/10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenDemo?.();
                      }}
                      className="w-full py-3 px-4 rounded-xl bg-[#F13B0A] hover:bg-[#D93206] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
                    >
                      <span>Explore Interactive Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};