import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';
import { EXPERIENCE, type Experience as Exp } from '../../constants/data';
import SectionHeading from '../ui/SectionHeading';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative section-pad py-24 sm:py-32">
      <SectionHeading
        eyebrow="Experience"
        title={
          <>
            My <span className="gradient-text">journey</span> so far
          </>
        }
        subtitle="Building products across fitness, enterprise tooling, and AI — each role sharpening a different edge."
      />

      <div className="relative mx-auto mt-16 max-w-4xl">
        {/* vertical line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-accent-400/60 via-white/15 to-transparent" />

        <div className="space-y-10 sm:space-y-14">
          {EXPERIENCE.map((exp, i) => (
            <TimelineItem key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ exp, index }: { exp: Exp; index: number }) {
  const left = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className={`relative flex items-start sm:items-center ${
        left ? 'sm:flex-row' : 'sm:flex-row-reverse'
      }`}
    >
      {/* node */}
      <div className="absolute left-4 sm:left-1/2 z-10 -translate-x-1/2">
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="grid h-8 w-8 place-items-center rounded-full bg-ink-800 border-2 border-accent-400/60 shadow-[0_0_18px_rgba(34,211,238,0.4)]"
        >
          <Briefcase className="h-4 w-4 text-accent-300" />
        </motion.span>
      </div>

      {/* spacer for desktop alternating layout */}
      <div className="hidden sm:block sm:w-1/2" />

      {/* card */}
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        className={`ml-12 sm:ml-0 sm:w-1/2 ${
          left ? 'sm:pr-10' : 'sm:pl-10'
        }`}
      >
        <div className="glass rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-accent-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
          <span className="font-mono text-xs text-accent-300/80">{exp.period}</span>
          <h3 className="mt-1 text-base sm:text-lg font-semibold">{exp.role}</h3>
          <p className="text-sm text-accent-200/90">{exp.company}</p>
          <p className="mt-2 text-xs sm:text-sm text-white/55 leading-relaxed">
            {exp.description}
          </p>

          <ul className="mt-3 space-y-1.5">
            {exp.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs text-white/60">
                <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-300" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {exp.stack.map((t) => (
              <span
                key={t}
                className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 font-mono text-[10px] text-white/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
