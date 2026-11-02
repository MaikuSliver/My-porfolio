import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, CheckCircle2, FileCheck, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Card3DTilt } from './Card3DTilt';

export const CertificationsSection: React.FC = () => {
  const { certifications, education } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-20 md:py-28 border-b border-neutral-200/80 dark:border-neutral-800/60 bg-white dark:bg-neutral-950 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-pink-600 dark:text-pink-400 uppercase mb-2">
              <Award className="w-4 h-4" />
              <span>Verified Qualifications &amp; Licensing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Certifications &amp; Credentials
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-xl text-sm sm:text-base leading-relaxed">
              Official national civil service professional eligibility, international ICT competency assessments, and industry cybersecurity certifications.
            </p>
          </div>
        </div>

        {/* Certifications Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <Card3DTilt
              key={cert.id}
              maxTilt={6}
              spotlightColor="rgba(236, 72, 153, 0.1)"
              className="h-full rounded-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40 p-6 flex flex-col justify-between hover:border-pink-500/30 hover:bg-white dark:hover:bg-neutral-900/70 transition-all shadow-sm h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono font-semibold text-pink-700 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-900/40 px-2.5 py-1 rounded">
                      {cert.badgeType}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-medium text-pink-600 dark:text-pink-300 mt-1">
                    {cert.issuer}
                  </div>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between text-xs">
                  {cert.score ? (
                    <span className="font-mono font-bold text-neutral-900 dark:text-white tabular-nums">
                      {cert.score}
                    </span>
                  ) : (
                    <span className="text-neutral-500 font-mono text-[11px]">
                      Verified
                    </span>
                  )}

                  {cert.credentialId && (
                    <span className="text-[11px] font-mono text-neutral-500 truncate max-w-[150px]">
                      {cert.credentialId}
                    </span>
                  )}
                </div>
              </motion.div>
            </Card3DTilt>
          ))}
        </div>

        {/* Education Highlight Card */}
        <div className="mt-12 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/50 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-pink-600 dark:text-pink-400 mb-1">
                Academic Background
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                {education[0].degree}
              </h3>
              <div className="text-sm text-neutral-600 dark:text-neutral-300 mt-0.5">
                {education[0].institution} · {education[0].location}
              </div>
            </div>

            <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 shrink-0">
              {education[0].period}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
            {education[0].highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-pink-600 dark:text-pink-400 mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
