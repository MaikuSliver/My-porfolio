import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Award, ChevronLeft, ChevronRight, Camera, Images, Video, Play } from 'lucide-react';
import { PORTFOLIO_DATA, Accomplishment } from '../data/portfolioData';
import { Card3DTilt } from './Card3DTilt';
import { playClickSound, playSlideSound } from '../utils/soundEffects';

interface ProjectsSectionProps {
  onSelectProject: (project: Accomplishment) => void;
}

const ProjectCard: React.FC<{
  item: Accomplishment;
  idx: number;
  onSelect: () => void;
}> = ({ item, idx, onSelect }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const gallery = item.gallery || [];
  const hasGallery = gallery.length > 1;

  const currentImage = hasGallery ? gallery[activeSlide].url : item.image;
  const currentTitle = hasGallery ? gallery[activeSlide].title : item.title;
  const isCurrentVideo = Boolean((hasGallery && (gallery[activeSlide]?.isVideo || currentImage.endsWith('.mp4'))) || currentImage.endsWith('.mp4'));

  // Automatically slide every 5 seconds across all images and videos
  React.useEffect(() => {
    if (!hasGallery) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % gallery.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [hasGallery, gallery.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSlideSound();
    setActiveSlide((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSlideSound();
    setActiveSlide((prev) => (prev + 1) % gallery.length);
  };

  const handleCardClick = () => {
    playClickSound();
    onSelect();
  };

  return (
    <Card3DTilt
      maxTilt={5}
      spotlightColor="rgba(236, 72, 153, 0.12)"
      className="h-full rounded-2xl"
      onClick={handleCardClick}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: idx * 0.08 }}
        className="group cursor-pointer rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/60 hover:bg-white dark:hover:bg-neutral-900/90 transition-all duration-300 hover:border-pink-500/40 shadow-sm hover:shadow-md overflow-hidden flex flex-col justify-between h-full"
      >
      <div>
        {/* Media Container with Carousel Support */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950 select-none">
          <AnimatePresence mode="wait">
            {isCurrentVideo ? (
              <motion.video
                key={currentImage}
                src={currentImage}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <motion.img
                key={currentImage}
                src={currentImage}
                alt={currentTitle}
                referrerPolicy="no-referrer"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.3 }}
                transition={{ duration: 0.25 }}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
          </AnimatePresence>

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none" />

          {/* Top Bar Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
            <div className="text-[11px] font-medium text-pink-700 dark:text-pink-300 bg-white/95 dark:bg-neutral-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm pointer-events-auto">
              {item.category}
            </div>

            <div className="flex items-center gap-1.5 pointer-events-auto">
              {hasGallery && (
                <div className="flex items-center gap-1 text-[11px] font-semibold text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20 shadow-sm">
                  {isCurrentVideo ? (
                    <Video className="w-3 h-3 text-pink-400" />
                  ) : (
                    <Camera className="w-3 h-3 text-pink-400" />
                  )}
                  <span>{activeSlide + 1} / {gallery.length}</span>
                </div>
              )}
              <div className="rounded-full bg-white/95 dark:bg-neutral-950/85 p-1.5 text-neutral-700 dark:text-neutral-300 group-hover:text-pink-600 dark:group-hover:text-pink-400 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 transition-colors shadow-sm">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Slide Navigation Controls */}
          {hasGallery && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous slide photo"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/65 hover:bg-black/90 text-white/90 hover:text-white p-2 backdrop-blur-md border border-white/25 shadow-lg transition-transform hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next slide photo"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/65 hover:bg-black/90 text-white/90 hover:text-white p-2 backdrop-blur-md border border-white/25 shadow-lg transition-transform hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Bottom Photo Title and Indicator Dots */}
              <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-col gap-1.5 pointer-events-none">
                <div className="bg-neutral-950/85 backdrop-blur-md px-3 py-2 rounded-xl border border-white/15 shadow-lg">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <span className="text-[10px] font-bold text-pink-400 uppercase tracking-wider">
                      {gallery[activeSlide].subhead || `Photo ${activeSlide + 1}`}
                    </span>
                    <span className="text-[9px] font-mono text-white/70">
                      {activeSlide + 1} / {gallery.length}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-white line-clamp-1 drop-shadow-sm">
                    {gallery[activeSlide].title}
                  </p>
                  <p className="text-[11px] text-neutral-300 line-clamp-1 leading-tight mt-0.5">
                    {gallery[activeSlide].caption}
                  </p>
                </div>

                <div className="flex items-center gap-1 overflow-hidden pointer-events-auto">
                  {gallery.slice(0, 16).map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSlide(dotIdx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                        dotIdx === activeSlide
                          ? 'w-5 bg-pink-500'
                          : 'w-1.5 bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Jump to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
            <span>{item.institution}</span>
            {hasGallery && (
              <span className="flex items-center gap-1 text-[11px] font-medium text-pink-600 dark:text-pink-400">
                <Images className="w-3 h-3" />
                <span>
                  {gallery.some((g) => g.isVideo || g.url.endsWith('.mp4'))
                    ? `${gallery.length} Photos & Video`
                    : `${gallery.length} Real Photos`}
                </span>
              </span>
            )}
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
          {hasGallery ? 'View Gallery & Details →' : 'Read More →'}
        </span>
      </div>
    </motion.div>
  </Card3DTilt>
  );
};

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
            <ProjectCard
              key={item.id}
              item={item}
              idx={idx}
              onSelect={() => onSelectProject(item)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
