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
  Info,
  Play,
  Pause,
  Video,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';
import { Accomplishment } from '../data/portfolioData';
import { playClickSound, playSlideSound } from '../utils/soundEffects';

interface ProjectModalProps {
  project: Accomplishment | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [autoplayProgress, setAutoplayProgress] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // Reset slide index & controls whenever project changes
  useEffect(() => {
    setActiveSlide(0);
    setIsFullscreen(false);
    setIsAutoplay(true);
    setAutoplayProgress(0);
    setZoomLevel(1);
  }, [project]);

  const gallery = project?.gallery || [];
  const hasGallery = gallery.length > 1;

  // Autoplay slideshow timer (every 5 seconds)
  useEffect(() => {
    if (!isAutoplay || !hasGallery || isFullscreen) {
      setAutoplayProgress(0);
      return;
    }

    const duration = 5000; // 5000ms = 5 seconds per slide
    const interval = 50; // update progress every 50ms
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setAutoplayProgress((prev) => {
        if (prev >= 100) {
          playSlideSound();
          setActiveSlide((curr) => (curr + 1) % gallery.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isAutoplay, hasGallery, gallery.length, isFullscreen]);

  // Keyboard navigation for carousel & modal close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
          setZoomLevel(1);
        } else {
          onClose();
        }
      } else if (hasGallery && !e.repeat) {
        if (e.key === 'ArrowLeft') {
          playSlideSound();
          setActiveSlide((prev) => (prev - 1 + gallery.length) % gallery.length);
          setAutoplayProgress(0);
        } else if (e.key === 'ArrowRight') {
          playSlideSound();
          setActiveSlide((prev) => (prev + 1) % gallery.length);
          setAutoplayProgress(0);
        } else if (e.key === ' ' || e.code === 'Space') {
          e.preventDefault();
          setIsAutoplay((prev) => !prev);
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

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || !hasGallery) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      // Swiped left -> next
      if (diff > 0) {
        playSlideSound();
        setActiveSlide((prev) => (prev + 1) % gallery.length);
      } else {
        // Swiped right -> prev
        playSlideSound();
        setActiveSlide((prev) => (prev - 1 + gallery.length) % gallery.length);
      }
      setAutoplayProgress(0);
    }
    setTouchStartX(null);
  };

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
  const isCurrentVideo = Boolean(currentPhoto?.isVideo || displayImage.endsWith('.mp4'));

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
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative h-[360px] sm:h-[460px] md:h-[500px] w-full flex items-center justify-center overflow-hidden bg-neutral-950 select-none group"
          >
            <AnimatePresence mode="wait">
              {isCurrentVideo ? (
                <motion.video
                  key={displayImage}
                  src={displayImage}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.2 }}
                  transition={{ duration: 0.2 }}
                  className="h-full w-full object-contain bg-black"
                />
              ) : (
                <motion.img
                  key={displayImage}
                  src={displayImage}
                  alt={displayTitle}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.2 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                    playClickSound();
                    setIsFullscreen(true);
                  }}
                  className="h-full w-full object-contain bg-black cursor-zoom-in"
                  title="Click to view fullscreen & zoom"
                />
              )}
            </AnimatePresence>

            {/* Subtle top gradient only for toolbar contrast */}
            <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />

            {/* Top Toolbar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
              <div className="flex items-center gap-2">
                <div className="text-xs font-semibold text-pink-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-md">
                  {project.category}
                </div>
                {hasGallery && (
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-md">
                    {isCurrentVideo ? (
                      <Video className="w-3.5 h-3.5 text-pink-400" />
                    ) : (
                      <Camera className="w-3.5 h-3.5 text-pink-400" />
                    )}
                    <span>
                      {isCurrentVideo ? 'Video Demo' : 'Media'} {activeSlide + 1} of {gallery.length}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                {/* Autoplay Slideshow Toggle Button */}
                {hasGallery && (
                  <button
                    type="button"
                    onClick={() => {
                      playClickSound();
                      setIsAutoplay((prev) => !prev);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full backdrop-blur-md transition-all cursor-pointer border shadow-sm ${
                      isAutoplay
                        ? 'bg-pink-600 text-white border-pink-400 shadow-pink-600/30'
                        : 'bg-black/60 text-white/90 hover:text-white border-white/20 hover:bg-black/80'
                    }`}
                    title={isAutoplay ? 'Pause Slideshow (Space)' : 'Play Slideshow (Space)'}
                  >
                    {isAutoplay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span className="hidden sm:inline">{isAutoplay ? 'Pause' : 'Autoplay'}</span>
                  </button>
                )}

                {/* Fullscreen / Lightbox trigger */}
                <button
                  type="button"
                  onClick={() => {
                    playClickSound();
                    setIsFullscreen(true);
                  }}
                  className="rounded-full bg-black/60 hover:bg-black/80 p-2 text-white/90 hover:text-white backdrop-blur-sm transition-transform hover:scale-110 cursor-pointer border border-white/20 shadow-sm"
                  aria-label="View photo fullscreen"
                  title="Expand photo (Fullscreen)"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => {
                    playClickSound();
                    onClose();
                  }}
                  className="rounded-full bg-black/60 hover:bg-black/80 p-2 text-white/90 hover:text-white backdrop-blur-sm transition-transform hover:scale-110 cursor-pointer border border-white/20 shadow-sm"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Autoplay progress bar */}
            {isAutoplay && hasGallery && (
              <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20 z-20">
                <div
                  className="h-full bg-pink-500 transition-all duration-75 ease-linear"
                  style={{ width: `${autoplayProgress}%` }}
                />
              </div>
            )}

            {/* Slide Navigation Arrows */}
            {hasGallery && (
              <>
                <button
                  type="button"
                  onClick={() => {
                    playSlideSound();
                    setActiveSlide((prev) => (prev - 1 + gallery.length) % gallery.length);
                    setAutoplayProgress(0);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/70 hover:bg-black/90 text-white p-2.5 backdrop-blur-md border border-white/30 shadow-xl transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                  aria-label="Previous photo (Left arrow key)"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    playSlideSound();
                    setActiveSlide((prev) => (prev + 1) % gallery.length);
                    setAutoplayProgress(0);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/70 hover:bg-black/90 text-white p-2.5 backdrop-blur-md border border-white/30 shadow-xl transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                  aria-label="Next photo (Right arrow key)"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
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
                      : project.category === 'Software & AI'
                      ? 'Research Photos, Field Sampling & App Video Demo'
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
                {gallery.map((img, idx) => {
                  const isVid = Boolean(img.isVideo || img.url.endsWith('.mp4'));
                  return (
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
                      {isVid ? (
                        <div className="w-16 h-12 sm:w-20 sm:h-14 bg-neutral-900 flex items-center justify-center relative">
                          <video src={img.url} className="w-full h-full object-cover opacity-60" muted />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <Play className="w-4 h-4 text-white fill-white" />
                          </div>
                        </div>
                      ) : (
                        <img
                          src={img.url}
                          alt={img.title}
                          referrerPolicy="no-referrer"
                          className="w-16 h-12 sm:w-20 sm:h-14 object-cover"
                        />
                      )}
                      <span className="absolute bottom-0.5 right-1 text-[9px] font-bold text-white bg-black/70 px-1 rounded font-mono">
                        {idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Dedicated Media Information Banner (Moved below media so it never blocks images or videos) */}
          <div className="px-6 py-4 sm:px-8 sm:py-5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/90 dark:bg-neutral-900/70 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 bg-pink-500/10 dark:bg-pink-500/20 px-2.5 py-0.5 rounded-full border border-pink-500/25">
                  {isCurrentVideo ? 'Video Demo' : 'Media Asset'} {hasGallery && `${activeSlide + 1} of ${gallery.length}`}
                </span>
                {currentPhoto?.subhead && (
                  <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-300">
                    {currentPhoto.subhead}
                  </span>
                )}
              </div>

              {hasGallery && (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveSlide((prev) => (prev - 1 + gallery.length) % gallery.length)}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 hover:border-pink-500 text-neutral-700 dark:text-neutral-200 transition-colors cursor-pointer"
                  >
                    ← Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveSlide((prev) => (prev + 1) % gallery.length)}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-pink-600 hover:bg-pink-700 text-white transition-colors cursor-pointer"
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white leading-snug">
              {currentPhoto ? currentPhoto.title : project.title}
            </h2>
            {currentPhoto?.caption && (
              <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {currentPhoto.caption}
              </p>
            )}
          </div>

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
            <div className="flex items-center justify-between text-white pb-2 border-b border-white/10 gap-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 min-w-0">
                <span className="text-sm sm:text-base font-bold text-pink-400 truncate">
                  {gallery[activeSlide].title}
                </span>
                {gallery[activeSlide].subhead && (
                  <span className="text-xs text-neutral-300 font-medium hidden sm:inline truncate">
                    · {gallery[activeSlide].subhead}
                  </span>
                )}
                <span className="text-xs text-neutral-400 font-mono shrink-0">
                  ({activeSlide + 1} of {gallery.length})
                </span>
              </div>

              {/* Interactive Zoom Controls & Exit */}
              <div className="flex items-center gap-2 shrink-0">
                {!gallery[activeSlide].isVideo && !gallery[activeSlide].url.endsWith('.mp4') && (
                  <div className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-1">
                    <button
                      type="button"
                      onClick={() => setZoomLevel((prev) => Math.max(1, prev - 0.5))}
                      className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 cursor-pointer"
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="text-[11px] font-mono px-1 font-semibold text-pink-300">
                      {Math.round(zoomLevel * 100)}%
                    </span>
                    <button
                      type="button"
                      onClick={() => setZoomLevel((prev) => Math.min(3, prev + 0.5))}
                      className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 cursor-pointer"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    {zoomLevel > 1 && (
                      <button
                        type="button"
                        onClick={() => setZoomLevel(1)}
                        className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 cursor-pointer ml-1"
                        title="Reset Zoom"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => {
                    playClickSound();
                    setIsFullscreen(false);
                    setZoomLevel(1);
                  }}
                  className="rounded-full bg-white/10 hover:bg-white/20 p-2 text-white transition-colors cursor-pointer"
                  aria-label="Exit fullscreen"
                  title="Exit Fullscreen (Esc)"
                >
                  <Minimize2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative flex-1 flex items-center justify-center overflow-auto my-4">
              {gallery[activeSlide].isVideo || gallery[activeSlide].url.endsWith('.mp4') ? (
                <video
                  src={gallery[activeSlide].url}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                />
              ) : (
                <div className="relative max-h-full max-w-full flex items-center justify-center overflow-hidden">
                  <img
                    src={gallery[activeSlide].url}
                    alt={gallery[activeSlide].title}
                    referrerPolicy="no-referrer"
                    style={{
                      transform: `scale(${zoomLevel})`,
                      transition: 'transform 0.2s ease-out',
                    }}
                    className="max-h-full max-w-full object-contain rounded-lg shadow-2xl origin-center"
                  />
                </div>
              )}

              <button
                type="button"
                onClick={() => {
                  playSlideSound();
                  setActiveSlide((prev) => (prev - 1 + gallery.length) % gallery.length);
                  setZoomLevel(1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/70 hover:bg-black/90 p-3 text-white border border-white/20 transition-transform hover:scale-110 cursor-pointer z-10"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={() => {
                  playSlideSound();
                  setActiveSlide((prev) => (prev + 1) % gallery.length);
                  setZoomLevel(1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/70 hover:bg-black/90 p-3 text-white border border-white/20 transition-transform hover:scale-110 cursor-pointer z-10"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-neutral-900/90 border border-white/10 rounded-xl p-3 max-w-2xl mx-auto text-center text-xs sm:text-sm text-neutral-200">
              {gallery[activeSlide].subhead && (
                <div className="text-[11px] font-semibold text-pink-400 uppercase tracking-wider mb-1">
                  {gallery[activeSlide].subhead}
                </div>
              )}
              <p className="leading-relaxed">{gallery[activeSlide].caption}</p>
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};
