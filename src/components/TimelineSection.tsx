import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, UserCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const TimelineSection: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-neutral-200/80 dark:border-neutral-800/60 bg-white dark:bg-neutral-950 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-pink-600 dark:text-pink-400 uppercase mb-2">
            <Briefcase className="w-4 h-4" />
            <span>Employment &amp; Hands-on History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Work Experience
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Real-world track record managing retail store technology, supporting business operations, and delivering municipal IT services.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((item, idx) => (
            <motion.div
              key={item.period + item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40 p-6 sm:p-8 shadow-sm hover:border-pink-500/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{item.role}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-pink-600 dark:text-pink-400 font-medium mt-1">
                    <span>{item.company}</span>
                    <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>
                    <span className="text-neutral-600 dark:text-neutral-400 text-xs flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
                      {item.location}
                    </span>
                    {item.supervisor && (
                      <>
                        <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>
                        <span className="text-neutral-500 text-xs flex items-center gap-1">
                          <UserCheck className="w-3 h-3 text-pink-600 dark:text-pink-400" />
                          Supervisor: {item.supervisor}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5 shrink-0 mt-2 md:mt-0">
                  <Calendar className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-4 leading-relaxed font-normal">
                {item.summary}
              </p>

              {/* Single Non-Redundant Highlights List */}
              <div className="mt-5 space-y-2.5">
                <div className="text-xs font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-2">
                  Key Responsibilities &amp; Impact
                </div>
                {item.highlights.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 dark:text-pink-400 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Skills applied */}
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mr-1">Applied:</span>
                {item.skillsApplied.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
