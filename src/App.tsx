import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { TimelineSection } from './components/TimelineSection';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { Accomplishment } from './data/portfolioData';
import { Mail, Sparkles } from 'lucide-react';
import { playClickSound } from './utils/soundEffects';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Accomplishment | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans selection:bg-pink-600 selection:text-white transition-colors duration-200">
      {/* Clean Navigation Bar */}
      <Navbar
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      <main>
        {/* Personal Introduction & Interactive Network Canvas */}
        <Hero
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />

        {/* Practical IT Skills with Live Filter & Search */}
        <SkillsSection />

        {/* Work Experience & Employment History */}
        <TimelineSection />

        {/* Key Accomplishments with 3D Tilt & Multi-Media Carousels */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Certifications, Licenses & Education with 3D Tilt */}
        <CertificationsSection />

        {/* Minimalist Editorial Contact Banner */}
        <section className="py-20 bg-gradient-to-b from-white to-pink-50/60 dark:from-neutral-950 dark:to-neutral-900 border-b border-neutral-200 dark:border-neutral-800/80 transition-colors duration-200">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-pink-600 dark:text-pink-400 uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Let&apos;s Connect</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
              Looking for a dependable IT Specialist?
            </h2>
            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto leading-relaxed">
              Whether you need someone to set up and manage retail cashier systems, build dependable office networks, or fix daily computer issues, I am ready to help.
            </p>
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => {
                  playClickSound();
                  setIsContactModalOpen(true);
                }}
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-pink-600 rounded-xl hover:bg-pink-500 active:scale-95 transition-all shadow-lg shadow-pink-600/25 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch (Direct to Gmail)</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Minimalist Footer */}
      <Footer
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
