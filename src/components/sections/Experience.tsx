import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MapPin,
  ArrowRight,
  Terminal,
  Activity,
  Layers,
  CheckCircle2,
  Radio,
  Award,
  X,
  BadgeCheck,
  ExternalLink,
  Download,
} from 'lucide-react';
import { EXPERIENCE, type Experience as Exp } from '../../constants/data';
import SectionHeading from '../ui/SectionHeading';
import { cn } from '../../utils/cn';

export default function ExperienceSection() {
  const [activeStation, setActiveStation] = useState(0);
  const [activeCert, setActiveCert] = useState<Exp | null>(null);
  const currentExp = EXPERIENCE[activeStation] || EXPERIENCE[0];

  return (
    <section id="experience" className="relative section-pad py-24 sm:py-32 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/10 dark:bg-accent-400/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Career Roadmap"
          title={
            <>
              Career <span className="gradient-text">Milestones</span>
            </>
          }
          subtitle="Explore key engineering roles, backend systems, and AI workflows."
        />

        {/* ========================================================================= */}
        {/* CLEAN UNIFIED BENTO LAYOUT                                                */}
        {/* ========================================================================= */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ======================================================================= */}
          {/* LEFT RAIL: Career Milestones Selector (5 cols)                          */}
          {/* ======================================================================= */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="flex items-center justify-between px-2 pb-1 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-white/40">
              <span className="flex items-center gap-1.5 font-semibold">
                <Radio className="h-3.5 w-3.5 text-cyan-600 dark:text-accent-400 animate-pulse" />
                Milestone Route
              </span>
              <span>{EXPERIENCE.length} Roles</span>
            </div>

            <div className="relative rounded-2xl bg-white/80 dark:bg-white/[0.02] border border-slate-200/90 dark:border-white/10 p-3 sm:p-4 backdrop-blur-xl space-y-3 shadow-sm shadow-slate-200/50 dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              {/* Continuous Glowing Track Line */}
              <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-cyan-500 dark:from-accent-400 via-cyan-400/40 dark:via-accent-400/40 to-slate-200 dark:to-white/10" />

              {EXPERIENCE.map((exp, idx) => {
                const isActive = activeStation === idx;

                return (
                  <button
                    key={exp.company}
                    onClick={() => setActiveStation(idx)}
                    className={cn(
                      'group relative flex w-full items-start gap-4 rounded-xl p-3.5 transition-all duration-300 text-left',
                      isActive
                        ? 'bg-cyan-500/10 dark:bg-white/[0.08] border border-cyan-500/40 dark:border-accent-400/40 shadow-sm dark:shadow-[0_0_20px_rgba(34,211,238,0.15)]'
                        : 'bg-transparent border border-transparent hover:bg-slate-100/80 dark:hover:bg-white/[0.04] hover:border-slate-200 dark:hover:border-white/10'
                    )}
                  >
                    {/* Node Badge */}
                    <div className="relative z-10 shrink-0">
                      <div
                        className={cn(
                          'grid h-9 w-9 place-items-center rounded-xl font-mono text-xs font-bold border transition-all duration-300',
                          isActive
                            ? 'bg-cyan-500 text-white dark:bg-accent-400/20 border-cyan-500 dark:border-accent-400 dark:text-accent-300 scale-110 shadow-sm dark:shadow-[0_0_12px_rgba(34,211,238,0.3)]'
                            : 'bg-slate-100 dark:bg-ink-900 border-slate-200 dark:border-white/15 text-slate-600 dark:text-white/60 group-hover:text-slate-900 dark:group-hover:text-white group-hover:border-slate-300 dark:group-hover:border-white/30'
                        )}
                      >
                        0{idx + 1}
                      </div>
                    </div>

                    {/* Milestone Text Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span
                          className={cn(
                            'text-xs font-mono font-bold truncate transition-colors',
                            isActive ? 'text-cyan-700 dark:text-accent-300' : 'text-slate-900 dark:text-white/90'
                          )}
                        >
                          {exp.company}
                        </span>

                        <span
                          className={cn(
                            "text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border shrink-0 font-medium",
                            exp.isCurrent
                              ? "border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-bold"
                              : "border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] text-slate-500 dark:text-white/50"
                          )}
                        >
                          {exp.year || exp.period.split('–')[0]?.trim()}
                        </span>
                      </div>

                      <div className="text-xs text-slate-800 dark:text-white/90 font-medium truncate mt-0.5">
                        {exp.role}
                      </div>

                      <div className="text-[11px] text-slate-500 dark:text-white/45 truncate font-mono mt-0.5">
                        {exp.tag || exp.type}
                      </div>
                    </div>

                    {/* Active Arrow Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="active-station-arrow"
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        <ArrowRight className="h-4 w-4 text-cyan-600 dark:text-accent-400" />
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Status Footer */}
            <div className="rounded-xl bg-white/80 dark:bg-white/[0.02] border border-slate-200/90 dark:border-white/10 p-3 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-white/50 shadow-sm">
              <span className="flex items-center gap-2 font-medium">
                <Activity className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Status</span>
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Verified & Production</span>
            </div>
          </div>

          {/* ======================================================================= */}
          {/* RIGHT SCREEN: Clean Detail Console (7 cols)                             */}
          {/* ======================================================================= */}
          <div className="lg:col-span-7 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentExp.company}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative rounded-2xl bg-white/85 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 p-4 sm:p-6 md:p-8 backdrop-blur-2xl shadow-md shadow-slate-200/50 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                {/* Clean Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/60 dark:via-accent-400/60 to-transparent" />

                {/* Console Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-slate-200 dark:border-white/10">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg border border-cyan-500/30 dark:border-accent-400/30 bg-cyan-50 dark:bg-accent-400/10 text-cyan-700 dark:text-accent-300">
                        {currentExp.company}
                      </span>

                      {currentExp.tag && (
                        <span className="text-xs font-mono text-slate-500 dark:text-white/50 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 px-2.5 py-1 rounded-lg font-medium">
                          {currentExp.tag}
                        </span>
                      )}

                      {currentExp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 px-2.5 py-1 rounded-lg font-bold">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                          Current Role
                        </span>
                      )}

                      {/* View Certificate Button */}
                      {currentExp.certificateImage && (
                        <button
                          onClick={() => setActiveCert(currentExp)}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/40 dark:border-accent-400/40 bg-cyan-50 dark:bg-accent-400/10 px-2.5 py-1 text-xs font-mono font-semibold text-cyan-700 dark:text-accent-200 hover:bg-cyan-100 dark:hover:bg-accent-400/20 hover:border-cyan-500 transition-all active:scale-95 shadow-sm"
                        >
                          <Award className="h-3.5 w-3.5 text-cyan-600 dark:text-accent-300" />
                          <span>View Certificate</span>
                        </button>
                      )}
                    </div>

                    <h3 className="mt-2.5 text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {currentExp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-500 dark:text-white/50 shrink-0 gap-1 font-medium">
                    <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-slate-700 dark:text-white/80 self-start sm:self-auto">
                      <Calendar className="h-3.5 w-3.5 text-cyan-600 dark:text-accent-400" />
                      {currentExp.period}
                    </span>
                    {currentExp.location && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-white/40 self-start sm:self-auto">
                        <MapPin className="h-3 w-3" />
                        {currentExp.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* 3 Impact Gauges */}
                {currentExp.impactMetrics && currentExp.impactMetrics.length > 0 && (
                  <div className="mt-5 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-2.5">
                    {currentExp.impactMetrics.map((m, i) => (
                      <div
                        key={i}
                        className="rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/10 p-2 sm:p-3 text-center transition-all hover:bg-slate-100/80 dark:hover:bg-white/[0.05]"
                      >
                        <div className="text-sm sm:text-base md:text-lg font-bold font-mono text-cyan-600 dark:text-accent-300">
                          {m.value}
                        </div>
                        <div className="text-[9px] sm:text-[10px] font-mono text-slate-500 dark:text-white/50 truncate mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Architectural Overview */}
                <div className="mt-5 sm:mt-6">
                  <div className="text-xs font-mono text-slate-500 dark:text-white/40 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-semibold">
                    <Terminal className="h-3.5 w-3.5 text-cyan-600 dark:text-accent-400" />
                    <span>Role Overview</span>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-white/80 leading-relaxed font-normal">
                    {currentExp.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="mt-5 sm:mt-6 space-y-2">
                  <div className="text-xs font-mono text-slate-500 dark:text-white/40 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                    <Layers className="h-3.5 w-3.5 text-cyan-600 dark:text-accent-400" />
                    <span>Key Engineering Deliverables</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    {currentExp.highlights.map((h, hi) => (
                      <div
                        key={hi}
                        className="flex items-start gap-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/[0.06] p-2.5 sm:p-3 transition-colors hover:bg-slate-100/80 dark:hover:bg-white/[0.04] hover:border-slate-300 dark:hover:border-white/15"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-accent-400" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-white/85 leading-relaxed">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Blueprint & Controls */}
                <div className="mt-6 sm:mt-7 pt-4 sm:pt-5 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-mono text-slate-500 dark:text-white/40 mr-1 font-semibold">Stack:</span>
                    {currentExp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 px-2 sm:px-2.5 py-0.5 sm:py-1 font-mono text-[11px] sm:text-xs text-slate-700 dark:text-white/75 transition-all hover:border-cyan-500/40 dark:hover:border-accent-400/40 hover:bg-cyan-50 dark:hover:bg-white/[0.08] hover:text-cyan-700 dark:hover:text-white font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Switcher buttons */}
                  <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200/60 dark:border-white/5">
                    <button
                      onClick={() =>
                        setActiveStation((prev) =>
                          prev === 0 ? EXPERIENCE.length - 1 : prev - 1
                        )
                      }
                      className="flex-1 sm:flex-none text-center px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-white/70 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 transition font-medium active:scale-95"
                      aria-label="Previous Milestone"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() =>
                        setActiveStation((prev) =>
                          prev === EXPERIENCE.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="flex-1 sm:flex-none text-center px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-white/70 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 transition font-medium active:scale-95"
                      aria-label="Next Milestone"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* CERTIFICATE IMAGE & VERIFICATION MODAL                                    */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 dark:bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-[#080a14] border border-slate-200 dark:border-white/15 p-5 sm:p-6 shadow-2xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Glowing Top Ambient */}
              <div className="pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-cyan-500/15 dark:bg-accent-400/20 blur-3xl" />

              {/* Modal Header */}
              <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan-50 dark:bg-accent-400/15 border border-cyan-200 dark:border-accent-400/30 text-cyan-600 dark:text-accent-300">
                    <Award className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        {activeCert.company}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/25 px-1.5 py-0.5 rounded font-semibold">
                        <BadgeCheck className="h-3 w-3" />
                        Verified
                      </span>
                    </div>
                    <p className="text-xs font-mono text-slate-500 dark:text-white/50">{activeCert.role} • {activeCert.period}</p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveCert(null)}
                  className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/15 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Certificate Image Frame */}
              {activeCert.certificateImage && (
                <div className="mt-3.5 relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-black/70 flex items-center justify-center">
                  <img
                    src={activeCert.certificateImage}
                    alt={`${activeCert.company} Certificate`}
                    className="w-full h-auto max-h-[50vh] sm:max-h-[56vh] object-contain rounded-xl"
                  />
                </div>
              )}

              {/* Modal Footer Controls */}
              <div className="mt-3.5 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-slate-400 dark:text-white/40 hidden sm:inline-block">
                  ID: {activeCert.certificateId}
                </span>

                <div className="flex items-center gap-2 ml-auto">
                  <a
                    href={activeCert.certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/15 border border-slate-200 dark:border-white/15 px-3 py-1.5 text-xs font-mono text-slate-700 dark:text-white transition-all font-semibold"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Full View</span>
                  </a>
                  <a
                    href={activeCert.certificateImage}
                    download={`${activeCert.company}_Certificate.png`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/20 dark:bg-accent-400/20 border border-cyan-500/40 dark:border-accent-400/40 px-3 py-1.5 text-xs font-mono font-semibold text-cyan-700 dark:text-accent-200 hover:bg-cyan-500/30 transition-all"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </a>
                  <button
                    onClick={() => setActiveCert(null)}
                    className="rounded-lg bg-slate-100 dark:bg-white/[0.08] hover:bg-slate-200 dark:hover:bg-white/15 border border-slate-200 dark:border-white/15 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
