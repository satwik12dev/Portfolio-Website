import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Menu,
  X,
  Hexagon,
  Home,
  User,
  Cpu,
  Briefcase,
  FolderGit2,
  Award,
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  Sparkles,
  Download,
  Send,
  Code2,
} from 'lucide-react';
import { NAV_ITEMS, PROFILE, ABOUT_STATS } from '../constants/data';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { cn } from '../utils/cn';

// Icon map for navigation items
const NAV_ICONS: Record<string, typeof Home> = {
  home: Home,
  about: User,
  skills: Cpu,
  experience: Briefcase,
  projects: FolderGit2,
  certifications: Award,
  contact: Mail,
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(NAV_ITEMS.map((n) => n.id));

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent py-4 sm:py-5 transition-all duration-300 pointer-events-none [&>*]:pointer-events-auto"
    >
      <nav className="section-pad flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => go('home')}
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Go to top"
        >
          <div className="relative">
            <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/15 to-purple-500/20 dark:from-accent-400/20 dark:via-neon-blue/15 dark:to-neon-purple/20 border border-slate-300/80 dark:border-white/15 backdrop-blur-md shadow-sm dark:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-500/50 dark:group-hover:border-accent-400/50 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]">
              <Hexagon className="h-5 w-5 text-cyan-600 dark:text-accent-300 transition-transform duration-700 ease-out group-hover:rotate-180" />
              <Code2 className="absolute h-3 w-3 text-slate-800 dark:text-white transition-transform group-hover:scale-110" />
            </span>
            <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 border border-white dark:border-ink-900" />
            </span>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white transition-colors group-hover:text-cyan-600 dark:group-hover:text-accent-200">
              {PROFILE.name.split(' ')[0]}
              <span className="gradient-text font-black">.dev</span>
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase font-mono tracking-widest text-cyan-600 dark:text-accent-300/80 -mt-0.5 font-semibold">
              Full-Stack Eng
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-1 rounded-full bg-white/80 dark:bg-white/[0.04] backdrop-blur-2xl border border-slate-200/90 dark:border-white/10 px-2.5 py-1.5 shadow-sm shadow-slate-200/60 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
          {NAV_ITEMS.map((item) => {
            const Icon = NAV_ICONS[item.id] || Sparkles;
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className={cn(
                    'relative flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs xl:text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'text-white dark:text-ink-900 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/[0.05]'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-accent-300 dark:via-accent-400 dark:to-neon-blue shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <Icon className={cn('relative z-10 h-3.5 w-3.5', isActive ? 'text-white dark:text-ink-900' : 'text-cyan-600 dark:text-accent-400/80')} />
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Desktop Right CTA Area */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Quick social mini buttons */}
          <div className="flex items-center gap-1.5 border-r border-slate-200 dark:border-white/10 pr-2.5">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/70 hover:text-cyan-600 dark:hover:text-accent-300 hover:border-cyan-400/40 dark:hover:border-accent-400/40 hover:bg-slate-200 dark:hover:bg-white/[0.08] transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/70 hover:text-cyan-600 dark:hover:text-accent-300 hover:border-cyan-400/40 dark:hover:border-accent-400/40 hover:bg-slate-200 dark:hover:bg-white/[0.08] transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          {/* Download Resume Button */}
          <a
            href={PROFILE.resumeUrl || '/Resume.pdf'}
            download="Satwik_Saxena_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 dark:border-accent-400/30 bg-white/80 dark:bg-white/[0.04] px-3.5 py-2 text-xs xl:text-sm font-medium text-slate-800 dark:text-white backdrop-blur-md shadow-sm dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-300 hover:border-cyan-500/60 dark:hover:border-accent-400/60 hover:bg-cyan-500/10 dark:hover:bg-accent-400/10 hover:text-cyan-600 dark:hover:text-accent-200 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] active:scale-95"
            aria-label="Download Resume"
          >
            <Download className="h-3.5 w-3.5 text-cyan-600 dark:text-accent-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-cyan-700 dark:group-hover:text-accent-300" />
            <span>Resume</span>
          </a>

          {/* Let's Talk CTA */}
          <button
            onClick={() => go('contact')}
            className="group relative inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs xl:text-sm font-semibold text-white dark:text-ink-900 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-accent-300 dark:to-neon-blue shadow-md dark:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.6)] hover:scale-[1.03] active:scale-95"
          >
            <span>Let's Talk</span>
            <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={PROFILE.resumeUrl || '/Resume.pdf'}
            download="Satwik_Saxena_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-cyan-500/10 dark:bg-accent-400/10 border border-cyan-500/30 dark:border-accent-400/30 px-2.5 py-1.5 text-xs font-medium text-cyan-700 dark:text-accent-300 hover:bg-cyan-500/20 dark:hover:bg-accent-400/20 transition"
            aria-label="Download Resume"
          >
            <Download className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Resume</span>
          </a>

          <button
            className="grid h-10 w-10 place-items-center rounded-xl bg-white/80 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white backdrop-blur-md shadow-sm transition-all active:scale-90 hover:border-cyan-500/40 dark:hover:border-accent-400/40 hover:bg-slate-100 dark:hover:bg-white/10"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5 text-cyan-600 dark:text-accent-300" /> : <Menu className="h-5 w-5 text-slate-800 dark:text-white" />}
          </button>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* MOBILE MENU SIDEBAR (DRAWER) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 dark:bg-black/80 backdrop-blur-md lg:hidden"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 30,
              }}
              className="fixed top-0 right-0 z-50 h-[100dvh] w-[88vw] max-w-xs sm:max-w-sm flex flex-col justify-between border-l border-slate-200 dark:border-white/15 bg-white/95 dark:bg-[#060814]/95 text-slate-900 dark:text-white backdrop-blur-3xl shadow-2xl dark:shadow-[0_0_80px_rgba(0,0,0,0.8)] lg:hidden overflow-hidden pb-safe"
            >
              {/* Glowing Background Ambient Orbs */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />
                <div className="absolute top-1/2 -left-24 h-60 w-60 rounded-full bg-blue-500/15 dark:bg-neon-blue/15 blur-3xl" />
                <div className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl" />
              </div>

              {/* Top Header */}
              <div className="relative z-10 border-b border-slate-200 dark:border-white/10 p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 dark:from-accent-400 dark:via-neon-blue dark:to-neon-purple p-[1.5px] shadow-md dark:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                      <div className="grid h-full w-full place-items-center rounded-2xl bg-white dark:bg-ink-900 font-bold text-lg text-cyan-600 dark:text-accent-300">
                        SS
                      </div>
                      <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#060814]" />
                      </span>
                    </div>

                    <div>
                      <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
                        {PROFILE.name}
                      </h2>
                      <p className="text-xs font-mono text-cyan-600 dark:text-accent-300/90 font-medium">
                        Full-Stack & Backend Dev
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setOpen(false)}
                      className="grid h-9 w-9 place-items-center rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/15 transition-all active:scale-95"
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Status chip */}
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open for Internships & Projects
                </div>
              </div>

              {/* Navigation Menu Links */}
              <div className="relative z-10 flex-1 px-4 py-5 overflow-y-auto space-y-1.5">
                <div className="px-2 pb-2 text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-white/40 font-semibold">
                  Navigation
                </div>

                {NAV_ITEMS.map((item, index) => {
                  const Icon = NAV_ICONS[item.id] || Sparkles;
                  const isActive = activeId === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => go(item.id)}
                      className={cn(
                        'group relative flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-transparent dark:from-accent-400/20 dark:via-neon-blue/20 dark:to-transparent text-cyan-800 dark:text-white border border-cyan-500/30 dark:border-accent-400/30 shadow-sm dark:shadow-[0_0_20px_rgba(34,211,238,0.15)] font-semibold'
                          : 'text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] border border-transparent'
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            'grid h-8 w-8 place-items-center rounded-lg transition-colors',
                            isActive
                              ? 'bg-cyan-500/20 text-cyan-700 dark:bg-accent-400/25 dark:text-accent-200 shadow-sm'
                              : 'bg-slate-100 text-slate-500 group-hover:text-cyan-600 group-hover:bg-slate-200 dark:bg-white/[0.05] dark:text-white/60 dark:group-hover:text-accent-300 dark:group-hover:bg-white/10'
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>

                      {isActive ? (
                        <div className="h-2 w-2 rounded-full bg-cyan-600 dark:bg-accent-400 shadow-[0_0_8px_#06b6d4]" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4 text-slate-300 dark:text-white/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-slate-600 dark:group-hover:text-white/70" />
                      )}
                    </motion.button>
                  );
                })}

                {/* Quick stats miniature block in sidebar */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 p-2.5 text-center">
                      <div className="text-xs font-bold text-cyan-600 dark:text-accent-300">{ABOUT_STATS[0]?.value}+</div>
                      <div className="text-[10px] text-slate-500 dark:text-white/50">Projects</div>
                    </div>
                    <div className="rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 p-2.5 text-center">
                      <div className="text-xs font-bold text-cyan-600 dark:text-accent-300">{ABOUT_STATS[3]?.value}+</div>
                      <div className="text-[10px] text-slate-500 dark:text-white/50">APIs</div>
                    </div>
                    <div className="rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 p-2.5 text-center">
                      <div className="text-xs font-bold text-cyan-600 dark:text-accent-300">9.18</div>
                      <div className="text-[10px] text-slate-500 dark:text-white/50">CGPA</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Footer & Socials */}
              <div className="relative z-10 border-t border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-black/40 p-5 space-y-4">
                {/* CTA Action */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => go('contact')}
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-accent-300 dark:to-neon-blue py-2.5 px-3 text-xs font-bold text-white dark:text-ink-900 shadow-md dark:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition active:scale-95"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Let's Talk</span>
                  </button>

                  <a
                    href={PROFILE.resumeUrl || '/Resume.pdf'}
                    download="Satwik_Saxena_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-white dark:bg-white/[0.06] border border-slate-200 dark:border-white/15 py-2.5 px-3 text-xs font-medium text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 hover:border-cyan-500/40 dark:hover:border-accent-400/40 transition active:scale-95 shadow-sm"
                  >
                    <Download className="h-3.5 w-3.5 text-cyan-600 dark:text-accent-300" />
                    <span>Resume</span>
                  </a>
                </div>

                {/* Social links row */}
                <div className="flex items-center justify-center gap-3 pt-1">
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-9 w-9 place-items-center rounded-xl bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white/70 hover:text-cyan-600 dark:hover:text-accent-300 hover:border-cyan-500/40 dark:hover:border-accent-400/40 hover:bg-slate-100 dark:hover:bg-white/10 transition shadow-sm"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>

                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-9 w-9 place-items-center rounded-xl bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white/70 hover:text-cyan-600 dark:hover:text-accent-300 hover:border-cyan-500/40 dark:hover:border-accent-400/40 hover:bg-slate-100 dark:hover:bg-white/10 transition shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>

                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="grid h-9 w-9 place-items-center rounded-xl bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white/70 hover:text-cyan-600 dark:hover:text-accent-300 hover:border-cyan-500/40 dark:hover:border-accent-400/40 hover:bg-slate-100 dark:hover:bg-white/10 transition shadow-sm"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>

                <p className="text-center text-[10px] text-slate-400 dark:text-white/40">
                  © 2026 Satwik Saxena • Built with Passion
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
