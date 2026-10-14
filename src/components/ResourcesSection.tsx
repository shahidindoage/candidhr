import React from 'react';
import { mockResources } from '../data/mockData';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

interface ResourcesSectionProps {
  onOpenDemo: () => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({ onOpenDemo }) => {
  const featured = mockResources[0];
  const sideArticles = mockResources.slice(1, 4);

  return (
    <section id="resources" className="py-24 bg-[#F8F9FB] border-b border-[#E2E6EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#F13B0A]">
              TELECOM ENGINEERING & BSS INSIGHTS
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#353F4F] tracking-tight mt-1">
              Explore Netzur’s Latest Resources
            </h2>
          </div>
          <button
            onClick={onOpenDemo}
            className="text-xs font-bold text-[#F13B0A] hover:underline flex items-center gap-1.5 self-start sm:self-auto"
          >
            View All Documentation & Guides <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Resources Grid (Featured story on left, 3 cards on right matching reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Featured Large Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E2E6EA] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img 
                src={featured.image} 
                alt={featured.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#353F4F] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                {featured.category}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 text-xs text-[#667085]">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#F13B0A]" /> {featured.readTime}
                </span>
                <span>•</span>
                <span>Peer-Reviewed Telecom Architecture</span>
              </div>

              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#353F4F] leading-snug">
                {featured.title}
              </h3>

              <p className="text-sm text-[#667085] leading-relaxed">
                {featured.summary}
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#F13B0A] hover:text-[#D73307] transition-colors"
                >
                  Read Whitepaper <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 3 Sidebar Article Cards */}
          <div className="lg:col-span-5 space-y-4">
            {sideArticles.map((article) => (
              <div 
                key={article.id}
                onClick={onOpenDemo}
                className="bg-white rounded-xl border border-[#E2E6EA] p-4 sm:p-5 hover:border-[#D0D5DD] hover:shadow-sm transition-all flex gap-4 cursor-pointer group"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex flex-col justify-between py-0.5">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F13B0A]">
                      {article.category}
                    </span>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-[#353F4F] group-hover:text-[#F13B0A] transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h4>
                  </div>

                  <div className="text-[11px] text-[#667085] flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3" /> {article.readTime}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
