import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Layers, Cpu, Award } from 'lucide-react';
import { Accomplishment } from '../data/portfolioData';

interface ProjectModalProps {
  project: Accomplishment | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl z-10 text-neutral-900 dark:text-neutral-100 transition-colors"
        >
          {/* Header Image Strip */}
          <div className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden bg-neutral-950">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full bg-black/60 p-2 text-white/90 hover:text-white hover:bg-black/80 backdrop-blur-sm transition-colors cursor-pointer border border-white/20"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Overlaid Header Info */}
            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex items-center gap-2 text-xs font-medium text-pink-400 mb-1">
                <span>{project.category}</span>
                {project.date && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-neutral-300 font-mono text-[11px]">{project.date}</span>
                  </>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Overview & Key Metrics */}
            <div>
              <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.overview}
              </p>

              {/* Quantified Metrics Strip */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-neutral-200 dark:border-neutral-800 py-4">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">{metric.label}</div>
                    <div className="text-lg sm:text-xl font-bold text-pink-600 dark:text-pink-400 font-mono tabular-nums mt-0.5">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Accomplishments & Technical Highlights */}
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-3">
                <Layers className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                <span>Contributions &amp; Operational Highlights</span>
              </div>
              <div className="space-y-2.5">
                {project.highlights.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 dark:text-pink-400 mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Unboxed Tags */}
            <div>
              <div className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-2">
                Technologies, Frameworks &amp; Protocols
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-700 dark:text-neutral-300">
                {project.techStack.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    {idx > 0 && <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>}
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">{tech}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <div className="text-xs text-neutral-500 font-mono">
                {project.institution || 'Verified Record'}
              </div>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
