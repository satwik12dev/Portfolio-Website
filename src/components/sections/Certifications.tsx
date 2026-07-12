import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, X, BadgeCheck, Calendar, Hash } from 'lucide-react';
import {
  CERTIFICATIONS,
  type Certification,
} from '../../constants/data';
import SectionHeading from '../ui/SectionHeading';

export default function Certifications() {
  const [active, setActive] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="relative section-pad py-24 sm:py-32">
      <SectionHeading
        eyebrow="Certifications"
        title={
          <>
            Verified <span className="gradient-text">credentials</span>
          </>
        }
        subtitle="Continuous learning backed by industry-recognized certifications."
      />

      <div className="mx-auto mt-16 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.button
            key={cert.title}
            onClick={() => setActive(cert)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="group glass relative overflow-hidden rounded-2xl p-5 text-left transition-colors hover:border-white/20"
          >
            <div
              className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
              style={{ background: cert.color }}
            />
            <span
              className="grid h-11 w-11 place-items-center rounded-xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
              style={{
                background: `${cert.color}1a`,
                border: `1px solid ${cert.color}40`,
              }}
            >
              <Award className="h-5 w-5" style={{ color: cert.color }} />
            </span>
            <h3 className="mt-3 text-sm font-semibold leading-snug">{cert.title}</h3>
            <p className="mt-1 text-xs text-white/55">{cert.issuer}</p>
            <p className="mt-2 font-mono text-[10px] text-white/35">{cert.date}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-[11px] text-accent-300/80 opacity-0 transition-opacity group-hover:opacity-100">
              View details →
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && <CertModal cert={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

function CertModal({
  cert,
  onClose,
}: {
  cert: Certification;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-900/80 backdrop-blur-md p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-3xl glass-strong p-6 sm:p-8"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-3xl"
          style={{ background: cert.color }}
        />

        <div className="flex items-center gap-3">
          <span
            className="grid h-14 w-14 place-items-center rounded-2xl"
            style={{
              background: `${cert.color}1a`,
              border: `1px solid ${cert.color}40`,
            }}
          >
            <BadgeCheck className="h-7 w-7" style={{ color: cert.color }} />
          </span>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              Certified
            </span>
            <h3 className="text-lg font-bold leading-tight">{cert.title}</h3>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Award className="h-4 w-4 text-accent-300" /> Issued by{' '}
            <span className="font-semibold text-white">{cert.issuer}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Calendar className="h-4 w-4 text-accent-300" /> {cert.date}
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Hash className="h-4 w-4 text-accent-300" />
            <span className="font-mono text-xs">{cert.credentialId}</span>
          </div>
        </div>

        <p className="mt-5 rounded-xl bg-white/5 p-4 text-sm text-white/60 leading-relaxed">
          {cert.description}
        </p>

        <div
          className="mt-6 h-1.5 w-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${cert.color}, transparent)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
