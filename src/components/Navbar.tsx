import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Accomplishments', href: '#accomplishments' },
    { label: 'Certifications', href: '#certifications' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/85 dark:bg-neutral-950/85 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3.5">
        {/* Zone 1: Brand title */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-white whitespace-nowrap shrink-0 transition-colors"
        >
          Mike Angel<span className="text-pink-600 dark:text-pink-400">.</span>
        </a>

        {/* Zone 2: Clean, single-line text nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600 dark:text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-neutral-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Theme Toggle & Primary Contact Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <ThemeToggle />

          <button
            onClick={onOpenContactModal}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-500 transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl px-6 py-6 shadow-xl"
          >
            <nav className="flex flex-col gap-4 text-base font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-neutral-700 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-neutral-200 dark:border-neutral-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContactModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-pink-600 rounded-xl hover:bg-pink-500 transition-colors shadow-sm cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get in Touch</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
