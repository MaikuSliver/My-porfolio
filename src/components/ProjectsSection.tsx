import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Award } from 'lucide-react';
import { PORTFOLIO_DATA, Accomplishment } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Accomplishment) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const { accomplishments } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Retail & Store IT',
    'Software & AI',
    'Government & Licensing',
    'Infrastructure & Support',
  ] as const;

  const filteredItems: Accomplishment[] = activeCategory === 'All'
    ? accomplishments
    : accomplishments.filter((p) => p.category === activeCategory);

  return (
    <section id="accomplishments" className="py-20 md:py-28 border-b border-neutral-200/80 dark:border-neutral-800/60 bg-white dark:bg-neutral-950 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-pink-600 dark:text-pink-400 uppercase mb-2">
              <Award className="w-4 h-4" />
              <span>Proven Industry &amp; Academic Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Key Accomplishments
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-xl text-sm sm:text-base leading-relaxed">
              Demonstrated results across commercial mall retail systems, national civil service professional eligibility, and practical AI research.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-x-auto max-w-full shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-pink-600 text-white shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accomplishment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => onSelectProject(item)}
              className="group cursor-pointer rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/60 hover:bg-white dark:hover:bg-neutral-900/90 transition-all duration-300 hover:border-pink-500/40 shadow-sm hover:shadow-md overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Media Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="text-[11px] font-medium text-pink-700 dark:text-pink-300 bg-white/90 dark:bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm">
                      {item.category}
                    </div>
                    <div className="rounded-full bg-white/90 dark:bg-neutral-950/80 p-1.5 text-neutral-700 dark:text-neutral-300 group-hover:text-pink-600 dark:group-hover:text-pink-400 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-colors shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="text-xs text-neutral-500 mb-1">
                    {item.institution}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
                    {item.tagline}
                  </p>

                  {/* Key Metrics */}
                  <div className="mt-4 grid grid-cols-2 gap-3 border-t border-neutral-200 dark:border-neutral-800/80 pt-4">
                    {item.metrics.slice(0, 2).map((metric) => (
                      <div key={metric.label}>
                        <span className="text-[11px] text-neutral-500 block">{metric.label}</span>
                        <span className="text-sm font-bold text-neutral-900 dark:text-neutral-200">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-neutral-200 dark:border-neutral-800/40 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                <div className="flex flex-wrap items-center gap-1.5 truncate">
                  {item.tags.slice(0, 3).map((tag, tagIdx) => (
                    <React.Fragment key={tag}>
                      {tagIdx > 0 && <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>}
                      <span className="text-neutral-600 dark:text-neutral-400 font-medium">{tag}</span>
                    </React.Fragment>
                  ))}
                </div>

                <span className="text-pink-600 dark:text-pink-400 font-semibold group-hover:underline whitespace-nowrap ml-3">
                  Read More &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
