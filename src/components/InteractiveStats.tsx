import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CheckCircle2, Shield, Award, Sparkles } from 'lucide-react';

interface StatItemProps {
  label: string;
  value: string;
  unit: string;
  index: number;
}

const StatCounter: React.FC<StatItemProps> = ({ label, value, unit, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Parse the number if applicable
    const numericMatch = value.match(/([\d.]+)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(numericMatch[1]);
    const isFloat = value.includes('.');
    const suffix = value.replace(numericMatch[1], '');

    let start = 0;
    const duration = 1600; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = start + (targetNum - start) * easeOut;

      if (isFloat) {
        setDisplayValue(`${current.toFixed(2)}${suffix}`);
      } else {
        setDisplayValue(`${Math.round(current)}${suffix}`);
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value]);

  const icons = [
    <Shield key="0" className="w-4 h-4 text-pink-600 dark:text-pink-400" />,
    <CheckCircle2 key="1" className="w-4 h-4 text-rose-600 dark:text-rose-400" />,
    <Award key="2" className="w-4 h-4 text-fuchsia-600 dark:text-fuchsia-400" />,
    <Sparkles key="3" className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 backdrop-blur-md shadow-sm hover:border-pink-500/40 hover:shadow-md transition-all cursor-default"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          {label}
        </span>
        <div className="p-1.5 rounded-lg bg-pink-50 dark:bg-pink-950/40 border border-pink-200/50 dark:border-pink-900/40 group-hover:scale-110 transition-transform">
          {icons[index % icons.length]}
        </div>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white font-mono group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
          {displayValue}
        </span>
      </div>

      <div className="mt-1 text-xs text-neutral-600 dark:text-neutral-400 font-medium">
        {unit}
      </div>
    </motion.div>
  );
};

export const InteractiveStats: React.FC = () => {
  const { heroStats } = PORTFOLIO_DATA;

  return (
    <div className="mt-10 pt-8 border-t border-neutral-200/80 dark:border-neutral-800/60">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {heroStats.map((stat, idx) => (
          <StatCounter
            key={stat.label}
            label={stat.label}
            value={stat.value}
            unit={stat.unit}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
};
