import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  CheckCircle2,
  Layers,
  ChevronLeft,
  ChevronRight,
  Camera,
  Maximize2,
  Minimize2,
  Info
} from 'lucide-react';
import { Accomplishment } from '../data/portfolioData';

interface ProjectModalProps {
  project: Accomplishment | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // Reset slide index whenever project changes
  useEffect(() => {
    setActiveSlide(0);
    setIsFullscreen(false);
  }, [project]);

  const gallery = project?.gallery || [];
  const hasGallery = gallery.length > 1;

  // Keyboard navigation for carousel & modal close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      } else if (hasGallery && !e.repeat) {
        if (e.key === 'ArrowLeft') {
          setActiveSlide((prev) => (prev - 1 + gallery.length) % gallery.length);
        } else if (e.key === 'ArrowRight') {
          setActiveSlide((prev) => (prev + 1) % gallery.length);
        }
      }
    };

    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose, hasGallery, gallery.length, isFullscreen]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailsRef.current) {
      const activeThumb = thumbnailsRef.current.children[activeSlide] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [activeSlide]);

  if (!project) return null;

  const currentPhoto = hasGallery ? gallery[activeSlide] : null;
  const displayImage = currentPhoto ? currentPhoto.url : project.image;
  const displayTitle = currentPhoto ? currentPhoto.title : project.title;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
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
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl z-10 text-neutral-900 dark:text-neutral-100 transition-colors"
        >
          {/* Main Visual Header / Carousel */}
          <div className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden bg-neutral-950 select-none">
            <AnimatePresence mode="wait">
              <motion.img
                key={displayImage}
                src={displayImage}
                alt={displayTitle}
                referrerPolicy="no-referrer"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.2 }}
                transition={{ duration: 0.2 }}
                className="h-full w-full object-cover sm:object-contain bg-black"
              />
            </AnimatePresence>

            {/* Gradient shadow for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 pointer-events-none" />

            {/* Top Toolbar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
              <div className="flex items-center gap-2">
                <div className="text-xs font-semibold text-pink-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-md">
                  {project.category}
                </div>
                {hasGallery && (
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-md">
                    <Camera className="w-3.5 h-3.5 text-pink-400" />
                    <span>Photo {activeSlide + 1} of {gallery.length}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                {/* Fullscreen / Lightbox trigger */}
                <button
                  type="button"
                  onClick={() => setIsFullscreen(true)}
                  className="rounded-full bg-black/60 hover:bg-black/80 p-2 text-white/90 hover:text-white backdrop-blur-sm transition-transform hover:scale-110 cursor-pointer border border-white/20 shadow-sm"
                  aria-label="View photo fullscreen"
                  title="Expand photo"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full bg-black/60 hover:bg-black/80 p-2 text-white/90 hover:text-white backdrop-blur-sm transition-transform hover:scale-110 cursor-pointer border border-white/20 shadow-sm"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Slide Navigation Arrows */}
            {hasGallery && (
              <>
                <button
                  type="button"
                  onClick={() => setActiveSlide((prev) => (prev - 1 + gallery.length) % gallery.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/70 hover:bg-black/90 text-white p-2.5 backdrop-blur-md border border-white/30 shadow-xl transition-transform hover:scale-110 active:scale-95"
                  aria-label="Previous photo (Left arrow key)"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSlide((prev) => (prev + 1) % gallery.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/70 hover:bg-black/90 text-white p-2.5 backdrop-blur-md border border-white/30 shadow-xl transition-transform hover:scale-110 active:scale-95"
                  aria-label="Next photo (Right arrow key)"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Overlaid Title & Caption on image */}
            <div className="absolute bottom-3 left-4 right-4 sm:left-6 sm:right-6 z-10">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-md">
                {currentPhoto ? currentPhoto.title : project.title}
              </h2>
              {currentPhoto && (
                <p className="mt-1 text-xs sm:text-sm text-neutral-200 line-clamp-2 drop-shadow-md">
                  {currentPhoto.caption}
                </p>
              )}
            </div>
          </div>

          {/* Interactive Thumbnail Filmstrip for Gallery */}
          {hasGallery && (
            <div className="bg-neutral-950 px-4 py-3 border-b border-neutral-800">
              <div className="flex items-center justify-between text-[11px] text-neutral-400 font-medium mb-2">
                <span className="flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-pink-400" />
                  <span>
                    {project.category === 'Government & Licensing'
                      ? 'Official Documents & Verification Photos'
                      : 'Real On-Site Workplace Photos'}{' '}
                    ({gallery.length})
                  </span>
                </span>
                <span className="text-neutral-500 font-mono">Use ← → keys to browse</span>
              </div>
              <div
                ref={thumbnailsRef}
                className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-neutral-700"
              >
                {gallery.map((img, idx) => (
                  <button
                    key={img.url + idx}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`relative shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      idx === activeSlide
                        ? 'border-pink-500 ring-2 ring-pink-500/40 scale-105 opacity-100'
                        : 'border-transparent opacity-60 hover:opacity-100 hover:border-neutral-500'
                    }`}
                    title={img.title}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      referrerPolicy="no-referrer"
                      className="w-16 h-12 sm:w-20 sm:h-14 object-cover"
                    />
                    <span className="absolute bottom-0.5 right-1 text-[9px] font-bold text-white bg-black/70 px-1 rounded font-mono">
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Overview & Key Metrics */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Project Overview
                </span>
                {project.date && (
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    {project.date}
                  </span>
                )}
              </div>
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
                Technologies, Hardware &amp; Protocols
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
                type="button"
                onClick={onClose}
                className="px-5 py-2 text-xs font-semibold rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>

        {/* Fullscreen Lightbox Modal */}
        {isFullscreen && hasGallery && (
          <div className="fixed inset-0 z-[60] bg-black/95 flex flex-col justify-between p-4 backdrop-blur-xl">
            <div className="flex items-center justify-between text-white pb-2 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-pink-400">
                  {gallery[activeSlide].title}
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  ({activeSlide + 1} of {gallery.length})
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="rounded-full bg-white/10 hover:bg-white/20 p-2 text-white transition-colors"
                aria-label="Exit fullscreen"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>

            <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4">
              <img
                src={gallery[activeSlide].url}
                alt={gallery[activeSlide].title}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              />

              <button
                type="button"
                onClick={() => setActiveSlide((prev) => (prev - 1 + gallery.length) % gallery.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/70 hover:bg-black/90 p-3 text-white border border-white/20 transition-transform hover:scale-110"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={() => setActiveSlide((prev) => (prev + 1) % gallery.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/70 hover:bg-black/90 p-3 text-white border border-white/20 transition-transform hover:scale-110"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="text-center text-xs text-neutral-300 max-w-2xl mx-auto pb-2">
              <p>{gallery[activeSlide].caption}</p>
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};
