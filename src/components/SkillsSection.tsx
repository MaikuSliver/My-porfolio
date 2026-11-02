import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ShoppingBag, Network, Cpu, ShieldCheck } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  const groupIcons = [
    <ShoppingBag className="w-5 h-5 text-pink-600 dark:text-pink-400" key="0" />,
    <Network className="w-5 h-5 text-rose-600 dark:text-rose-400" key="1" />,
    <Cpu className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" key="2" />,
    <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" key="3" />,
  ];

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-neutral-200/80 dark:border-neutral-800/60 bg-neutral-100/60 dark:bg-neutral-950 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-semibold tracking-wider text-pink-600 dark:text-pink-400 uppercase mb-2">
            What I Do &amp; Technical Skills
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Practical IT Strengths
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Everyday technology services delivered with high dependability — helping businesses operate cashier checkout systems, maintain fast office networks, and solve computer issues quickly.
          </p>
        </div>

        {/* 4-Column Grid of Competency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, groupIdx) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.08 }}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 flex flex-col justify-between shadow-sm hover:border-pink-500/40 transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                  <div className="p-2.5 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200/60 dark:border-pink-900/40">
                    {groupIcons[groupIdx % groupIcons.length]}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white leading-tight">
                      {group.group}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-5 leading-normal">
                  {group.description}
                </p>

                <div className="space-y-3.5">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex flex-col">
                      <div className="flex items-center justify-between text-xs font-medium">
                        <span className="text-neutral-900 dark:text-neutral-100 font-semibold">{item.name}</span>
                        <span className="text-pink-600 dark:text-pink-400 font-mono text-[10px] uppercase font-bold">{item.level}</span>
                      </div>
                      <p className="text-[12px] text-neutral-600 dark:text-neutral-400 mt-0.5 leading-snug">
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800/80 text-[11px] text-neutral-500 dark:text-neutral-400 font-medium flex items-center justify-between">
                <span>Field Tested</span>
                <span className="text-pink-600 dark:text-pink-400">✓ Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
