import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS, type Project } from '../../constants/data';
import SectionHeading from '../ui/SectionHeading';
import TiltCard from '../ui/TiltCard';

export default function Projects() {
  return (
    <section id="projects" className="relative section-pad py-24 sm:py-32">
      <SectionHeading
        eyebrow="Projects"
        title={
          <>
            Things I've <span className="gradient-text">built</span>
          </>
        }
        subtitle="A selection of products and experiments — each solving a real problem with thoughtful engineering."
      />

      <div className="mx-auto mt-16 grid max-w-6xl gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
    >
      <TiltCard
        className="group h-full overflow-hidden rounded-2xl glass"
        glowColor={`${project.accent}18`} // Reduced glow
        intensity={4} // Reduced tilt intensity
      >
        <div className="relative h-44 sm:h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/40 to-transparent" />

          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
            style={{
              background: `linear-gradient(to top, ${project.accent}10, transparent 70%)`,
            }}
          />
        </div>

        <div className="p-5">
          <h3 className="text-base sm:text-lg font-semibold transition-colors group-hover:text-accent-200">
            {project.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-white/55 leading-relaxed">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 font-mono text-[10px] text-white/60"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2.5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg glass px-3 py-1.5 text-xs font-medium text-white/80 transition-all hover:text-accent-200 hover:border-accent-400/20"
            >
              <Github className="h-3.5 w-3.5" />
              Code
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-ink-900 transition-all hover:scale-[1.02]"
              style={{ background: project.accent }}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}