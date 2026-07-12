import {useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS, type Skill } from '../../constants/data';
import SectionHeading from '../ui/SectionHeading';
import { cn } from '../../utils/cn';


const CATEGORIES = ['All', 'Frontend', 'Backend', 'Database', 'DevOps'] as const;

export default function Skills() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>('All');

  const filtered =
    filter === 'All' ? SKILLS : SKILLS.filter((s) => s.category === filter);

  return (
    <section id="skills" className="relative section-pad py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-[0.4] mask-fade-b" />
      <SectionHeading
        eyebrow="Skills & Stack"
        title={
          <>
            Technologies I <span className="gradient-text">command</span>
          </>
        }
        subtitle="A versatile toolkit honed across full-stack product development — from immersive 3D frontends to resilient backend systems."
      />

      {/* category filters */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              'rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-all',
              filter === cat
                ? 'bg-gradient-to-r from-accent-300 to-neon-blue text-ink-900'
                : 'glass text-white/70 hover:text-white'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* skill cards grid */}
      <motion.div
        layout
        className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
      >
        {filtered.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </motion.div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 5) * 0.06 }}
      whileHover={{ scale: 1.08, y: -6 }}
      className="group glass relative overflow-hidden rounded-2xl p-4 text-center"
      style={{ ['--glow' as string]: skill.color }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(140px circle at 50% 0%, ${skill.color}33, transparent 70%)`,
        }}
      />
      <div
        className="relative mx-auto mb-3 grid h-12 w-12 place-items-center rounded-xl transition-transform duration-500 group-hover:rotate-[18deg] group-hover:scale-110"
        style={{
          background: `${skill.color}1a`,
          border: `1px solid ${skill.color}40`,
        }}
      >
        <span
          className="text-base font-bold"
          style={{ color: skill.color }}
        >
          {skill.name.charAt(0)}
        </span>
      </div>
      <h4 className="relative text-xs sm:text-sm font-semibold">{skill.name}</h4>
      <div className="relative mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + (index % 5) * 0.06, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)` }}
        />
      </div>
      <span className="relative mt-1.5 block font-mono text-[10px] text-white/40">
        {skill.level}%
      </span>
    </motion.div>
  );
}
