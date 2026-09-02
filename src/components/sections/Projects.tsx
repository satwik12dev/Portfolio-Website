import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  CheckCircle2,
  ArrowUpRight,
  Code2,
  X,
  Star,
  ExternalLink,
} from 'lucide-react';
import { PROJECTS, type Project } from '../../constants/data';
import SectionHeading from '../ui/SectionHeading';
import { cn } from '../../utils/cn';

const CATEGORIES = [
  'All',
  'Full-Stack & Backend',
  'Java & Spring Boot',
  'AI & Gen-AI',
] as const;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative section-pad py-24 sm:py-32 overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 h-[500px] w-[500px] rounded-full bg-cyan-500/10 dark:bg-accent-400/8 blur-[180px]" />
        <div className="absolute bottom-1/3 -right-48 h-[500px] w-[500px] rounded-full bg-purple-500/10 dark:bg-purple-500/8 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Engineering"
          title={
            <>
              Things I've <span className="gradient-text">Engineered</span>
            </>
          }
          subtitle="Production-grade CRM backends, Generative AI applications, and distributed microservices."
        />

        {/* Telemetry Summary Bar */}
        <div className="mx-auto mt-10 max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Total Projects', val: `${PROJECTS.length}+ Systems`, highlight: 'text-cyan-600 dark:text-accent-300' },
            { label: 'Architecture Focus', val: 'Backend & Full-Stack', highlight: 'text-slate-900 dark:text-white' },
            { label: 'Core AI Frameworks', val: 'Gemini AI & CNN', highlight: 'text-slate-900 dark:text-white' },
            { label: 'Open-Source Code', val: '100% on GitHub', highlight: 'text-emerald-600 dark:text-emerald-400' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white/80 dark:bg-white/[0.02] border border-slate-200/90 dark:border-white/10 p-3.5 text-center backdrop-blur-md transition-all hover:bg-white dark:hover:bg-white/[0.04] shadow-sm"
            >
              <div className={cn('text-sm sm:text-base font-bold font-mono', item.highlight)}>
                {item.val}
              </div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-white/45 mt-0.5 truncate">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 sm:py-0 w-full flex-nowrap sm:flex-wrap justify-start sm:justify-center">
          {CATEGORIES.map((cat) => {
            const count =
              cat === 'All'
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'group relative flex items-center gap-2 rounded-xl px-3.5 sm:px-4 py-2 text-xs font-mono font-semibold transition-all duration-300 shrink-0',
                  isSelected
                    ? 'bg-cyan-500/15 text-cyan-800 dark:bg-accent-400/15 dark:text-accent-200 border border-cyan-500/50 dark:border-accent-400/50 shadow-sm dark:shadow-[0_0_20px_rgba(34,211,238,0.25)]'
                    : 'bg-white/80 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/[0.06] hover:border-slate-300 dark:hover:border-white/20'
                )}
              >
                <span>{cat}</span>
                <span
                  className={cn(
                    'rounded-md px-1.5 py-0.5 text-[10px] transition-colors',
                    isSelected
                      ? 'bg-cyan-500/20 text-cyan-900 dark:bg-accent-400/30 dark:text-accent-100 font-bold'
                      : 'bg-slate-200/80 text-slate-600 dark:bg-white/10 dark:text-white/40 group-hover:text-slate-900 dark:group-hover:text-white/60'
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="mx-auto mt-8 sm:mt-10 grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpenDetails={() => setActiveProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* PROJECT DETAILS MODAL                                                     */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 dark:bg-black/85 backdrop-blur-md p-3.5 sm:p-6 overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-2xl sm:rounded-3xl bg-white dark:bg-[#080a14] border border-slate-200 dark:border-white/15 p-4 sm:p-7 shadow-2xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.85)] max-h-[90dvh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute right-4 top-4 z-20 grid h-8 w-8 place-items-center rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/15 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Glowing Top Ambient */}
              <div
                className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-20 dark:opacity-30 blur-3xl"
                style={{ background: activeProject.accent }}
              />

              {/* Modal Header */}
              <div className="flex items-center gap-3.5 pr-8 pb-3.5 border-b border-slate-200 dark:border-white/10">
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border shadow-sm"
                  style={{
                    background: `${activeProject.accent}1a`,
                    borderColor: `${activeProject.accent}40`,
                  }}
                >
                  <Code2 className="h-5 w-5" style={{ color: activeProject.accent }} />
                </span>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-semibold text-cyan-700 dark:text-accent-300 bg-cyan-50 dark:bg-accent-400/10 border border-cyan-200 dark:border-accent-400/30 px-2 py-0.5 rounded">
                      {activeProject.category || 'Engineering Project'}
                    </span>
                    {activeProject.featured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 px-1.5 py-0.5 rounded">
                        <Star className="h-3 w-3 fill-amber-500 dark:fill-amber-400" />
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="mt-1 text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {activeProject.title}
                  </h3>
                </div>
              </div>

              {/* Image Preview */}
              <div className="mt-3.5 relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 dark:bg-black/80 h-44 sm:h-52 flex items-center justify-center">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                {activeProject.impact && (
                  <span className="absolute bottom-3 left-3 text-xs font-mono text-white bg-black/75 border border-white/15 px-2.5 py-1 rounded-lg backdrop-blur-md">
                    {activeProject.impact}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-3.5 text-xs sm:text-sm text-slate-600 dark:text-white/75 leading-relaxed">
                {activeProject.description}
              </p>

              {/* Highlights */}
              {activeProject.highlights && activeProject.highlights.length > 0 && (
                <div className="mt-3.5 space-y-1.5">
                  {activeProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-white/80 font-mono">
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-600 dark:text-accent-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Stack tags */}
              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {activeProject.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 px-2 py-0.5 text-xs font-mono text-slate-700 dark:text-white/75 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Modal Footer Actions */}
              <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between flex-wrap gap-2">
                <span className="text-[11px] font-mono text-slate-400 dark:text-white/40">
                  Engineering Project
                </span>

                <div className="flex items-center gap-2 flex-wrap">
                  {activeProject.demo && activeProject.demo !== '#' && (
                    <a
                      href={activeProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 dark:bg-accent-400/15 dark:hover:bg-accent-400/25 border border-cyan-500/30 dark:border-accent-400/30 px-3.5 py-1.5 text-xs font-mono font-semibold text-cyan-800 dark:text-accent-300 transition-all shadow-sm"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live Platform</span>
                    </a>
                  )}
                  {activeProject.github && activeProject.github !== '#' && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.08] hover:bg-slate-200 dark:hover:bg-white/15 border border-slate-200 dark:border-white/15 px-3.5 py-1.5 text-xs font-mono font-medium text-slate-800 dark:text-white transition-all shadow-sm"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>View GitHub Code</span>
                    </a>
                  )}
                  <button
                    onClick={() => setActiveProject(null)}
                    className="rounded-xl bg-cyan-600 hover:bg-cyan-500 dark:bg-accent-400 dark:hover:bg-accent-300 text-white dark:text-ink-950 px-4 py-1.5 text-xs font-bold transition-all shadow-sm"
                  >
                    Done
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

function ProjectCard({
  project,
  onOpenDetails,
}: {
  project: Project;
  onOpenDetails: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white/80 dark:bg-white/[0.02] border transition-all duration-300 backdrop-blur-xl hover:bg-white dark:hover:bg-white/[0.04] shadow-sm shadow-slate-200/50 dark:shadow-none hover:shadow-xl dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]",
        project.featured
          ? "border-cyan-500/40 dark:border-accent-400/35 hover:border-cyan-500/70 dark:hover:border-accent-400/60"
          : "border-slate-200/90 dark:border-white/10 hover:border-cyan-500/40 dark:hover:border-accent-400/40"
      )}
    >
      {/* Interactive Cursor Spotlight */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-30 dark:opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(260px circle at ${mousePos.x}px ${mousePos.y}px, ${project.accent}35, transparent 80%)`,
          }}
        />
      )}

      {/* Top Accent Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
        }}
      />

      {/* Card Top: Image Frame */}
      <div>
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900 dark:bg-black/60 border-b border-slate-200 dark:border-white/10">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent dark:from-black/80 dark:via-black/20 dark:to-transparent" />

          {/* Badges on Image */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-black/75 border border-white/15 text-white/90 backdrop-blur-md">
              {project.category}
            </span>

            {project.featured && (
              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-400/40 text-amber-300 backdrop-blur-md shadow-sm">
                <Star className="h-3 w-3 fill-amber-300" />
                Featured
              </span>
            )}
          </div>

          {/* Impact Metric Bar on Image Bottom */}
          {project.impact && (
            <div className="absolute bottom-2.5 left-3 right-3">
              <span className="text-[11px] font-mono text-cyan-300 dark:text-accent-300 bg-black/80 border border-cyan-400/30 dark:border-accent-400/25 px-2 py-0.5 rounded-md backdrop-blur-md">
                {project.impact}
              </span>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-5">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-cyan-700 dark:group-hover:text-accent-200 transition-colors">
            {project.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-white/60 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Stack Chips */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 px-2 py-0.5 font-mono text-[10px] text-slate-700 dark:text-white/70 font-medium"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="rounded-md bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 px-1.5 py-0.5 font-mono text-[10px] text-slate-500 dark:text-white/40">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-200/80 dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          {project.github && project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 px-2.5 py-1.5 text-xs font-mono text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white transition-all font-medium"
            >
              <Github className="h-3.5 w-3.5 text-cyan-600 dark:text-accent-400" />
              <span>GitHub</span>
            </a>
          )}
          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/10 dark:bg-accent-400/10 hover:bg-cyan-500/20 dark:hover:bg-accent-400/20 border border-cyan-500/30 dark:border-accent-400/30 px-2.5 py-1.5 text-xs font-mono text-cyan-700 dark:text-accent-300 transition-all font-medium"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Live</span>
            </a>
          )}
          {(!project.github || project.github === '#') && (!project.demo || project.demo === '#') && (
            <span className="text-[11px] font-mono text-slate-400 dark:text-white/40">Private System</span>
          )}
        </div>

        <button
          onClick={onOpenDetails}
          className="inline-flex items-center gap-1 text-xs font-mono text-cyan-600 dark:text-accent-300 hover:text-cyan-700 dark:hover:text-accent-200 transition-colors font-semibold"
        >
          <span>Inspect</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </motion.div>
  );
}