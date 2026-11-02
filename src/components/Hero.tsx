import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Facebook, Github, Phone, ArrowDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenContactModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContactModal }) => {
  const { profile, heroStats } = PORTFOLIO_DATA;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about" className="relative pt-6 pb-14 md:pt-12 md:pb-20 border-b border-neutral-200/80 dark:border-neutral-800/60 overflow-hidden transition-colors duration-200">
      {/* Subtle atmospheric ambient glow behind the photo */}
      <div className="absolute top-1/3 right-0 lg:right-12 -z-10 h-[560px] w-[560px] rounded-full bg-gradient-to-tr from-pink-500/15 via-rose-500/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 -z-10 h-72 w-72 rounded-full bg-pink-500/5 dark:bg-pink-900/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Main 2-Column Split: Minimalist Typography on Left, Prominent Borderless Portrait on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Minimalist, clean copy (inspired by Joe Greyson portfolio style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-4 lg:pt-0"
          >
            {/* Clean, quiet kicker */}
            <div className="text-xs font-semibold uppercase tracking-wider text-pink-600 dark:text-pink-400 mb-3">
              IT Specialist &amp; Systems Engineer
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
              Hi, I’m <span className="text-pink-600 dark:text-pink-500">{profile.displayName}</span>
            </h1>

            {/* Role / Subtitle */}
            <p className="mt-2.5 text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
              {profile.role}
            </p>

            {/* Simple, Non-Technical Pitch */}
            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
              {profile.simplePitch || "I keep everyday business technology running smoothly — from retail cashier POS systems and office networks to hardware maintenance and practical software."}
            </p>

            {/* Primary Action Buttons & Socials */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-pink-600 rounded-xl hover:bg-pink-500 active:scale-95 transition-all shadow-md shadow-pink-600/25 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>

              <a
                href="#accomplishments"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all cursor-pointer shadow-sm"
              >
                <span>View Accomplishments</span>
                <ArrowDown className="w-4 h-4 text-neutral-500" />
              </a>

              {/* Social links */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  href={profile.facebook || "https://www.facebook.com/ElyBoombilya"}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-neutral-600 dark:text-neutral-300 hover:text-pink-600 dark:hover:text-pink-400 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-pink-500/40 transition-colors shadow-sm"
                  aria-label="Facebook Profile"
                  title="Facebook Profile"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={profile.github || "https://github.com/MaikuSliver"}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-neutral-600 dark:text-neutral-300 hover:text-pink-600 dark:hover:text-pink-400 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-pink-500/40 transition-colors shadow-sm"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Clean, quiet metadata line (Non-redundant, elegant contact info) */}
            <div className="mt-8 pt-5 border-t border-neutral-200 dark:border-neutral-800/80 flex flex-wrap items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
              <span className="flex items-center gap-1.5 font-medium text-neutral-700 dark:text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
                {profile.location}
              </span>
              <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
              <a
                href={`tel:${profile.phone || '09610222593'}`}
                className="flex items-center gap-1 font-mono text-neutral-700 dark:text-neutral-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                title="Direct Phone"
              >
                <Phone className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
                <span>{profile.phoneFormatted || '0961 022 2593'}</span>
              </a>
              <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="text-neutral-700 dark:text-neutral-300">
                {profile.email}
              </span>
            </div>
          </motion.div>

          {/* Right Column: Big, Borderless Profile Picture as the dominant visual highlight (based on reference photo) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end items-end order-1 lg:order-2 relative"
          >
            {/* Soft subtle glow under/behind the cutout */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center lg:justify-end pointer-events-none">
              <div className="w-[420px] sm:w-[540px] lg:w-[680px] xl:w-[780px] h-[420px] sm:h-[540px] lg:h-[680px] xl:h-[780px] rounded-full bg-gradient-to-t from-pink-500/25 via-pink-400/15 to-transparent blur-3xl" />
            </div>

            {/* Profile Picture: Noticeably bigger, completely borderless, transparent background */}
            <div className="relative w-full max-w-[460px] sm:max-w-[540px] lg:max-w-[660px] xl:max-w-[760px] flex justify-center lg:justify-end items-end">
              <img
                src={profile.avatar}
                alt={profile.fullName}
                referrerPolicy="no-referrer"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-auto max-h-[560px] sm:max-h-[660px] lg:max-h-[780px] xl:max-h-[860px] object-contain object-bottom select-none transition-all duration-500 scale-105 sm:scale-110 lg:scale-120 origin-bottom ${
                  imageLoaded ? 'opacity-100' : 'opacity-80'
                } filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_25px_45px_rgba(236,72,153,0.18)]`}
              />
            </div>
          </motion.div>

        </div>

        {/* Quantified Accomplishments Strip */}
        <div className="mt-14 pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-neutral-200 dark:border-neutral-800/80">
          {heroStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + idx * 0.06 }}
              className="flex flex-col p-4 rounded-xl bg-white/70 dark:bg-neutral-900/50 border border-neutral-200/70 dark:border-neutral-800/70 shadow-sm"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight font-mono tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-pink-600 dark:text-pink-400 mt-0.5 font-medium">
                {stat.unit}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
