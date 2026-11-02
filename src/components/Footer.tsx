import React from 'react';
import { Github, Facebook, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContactModal }) => {
  const { profile } = PORTFOLIO_DATA;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-950 py-10 text-neutral-600 dark:text-neutral-400 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-neutral-200/80 dark:border-neutral-800/60">
          <div>
            <div className="text-base font-bold text-neutral-900 dark:text-white tracking-tight">
              {profile.fullName}
            </div>
            <div className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 flex flex-wrap items-center gap-2">
              <span>{profile.title}</span>
              <span aria-hidden="true">·</span>
              <a
                href={`tel:${profile.phone || '09610222593'}`}
                className="hover:text-pink-600 dark:hover:text-pink-400 font-mono transition-colors"
              >
                {profile.phoneFormatted || '0961 022 2593'}
              </a>
              <span aria-hidden="true">·</span>
              <span>{profile.location}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-neutral-600 dark:text-neutral-300">
            <a href="#about" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
              Experience
            </a>
            <a href="#accomplishments" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
              Accomplishments
            </a>
            <a href="#certifications" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
              Certifications
            </a>
            <button
              onClick={onOpenContactModal}
              className="text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors cursor-pointer font-semibold"
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {currentYear} {profile.fullName}. All rights reserved.
          </div>

          <div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400">
            <a
              href={profile.github || "https://github.com/MaikuSliver"}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 hover:text-neutral-950 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.facebook || "https://www.facebook.com/ElyBoombilya"}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 hover:text-neutral-950 dark:hover:text-white transition-colors"
              aria-label="Facebook Profile"
              title="Facebook Profile"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenContactModal}
              className="p-1.5 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
