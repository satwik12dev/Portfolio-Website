import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Award,
  X,
  BadgeCheck,
  Hash,
  Copy,
  Check,
  ExternalLink,
  Download,
  Eye,
  ArrowUpRight,
} from 'lucide-react';
import {
  CERTIFICATIONS,
  type Certification,
} from '../../constants/data';
import SectionHeading from '../ui/SectionHeading';
import { cn } from '../../utils/cn';

const CATEGORIES = [
  'All',
  'Cloud & DevOps',
  'Backend & Core',
  'AI & ML',
  'Professional',
] as const;

export default function Certifications() {
  const [active, setActive] = useState<Certification | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState(false);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const filteredCerts =
    selectedCategory === 'All'
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((c) => c.category === selectedCategory);

  const handleCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <section id="certifications" className="relative section-pad py-24 sm:py-32 overflow-hidden">
      {/* Dynamic Background Spotlights */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-cyan-500/8 dark:bg-accent-400/8 blur-[180px]" />
        <div className="absolute top-1/3 -right-48 h-96 w-96 rounded-full bg-purple-500/10 blur-[140px]" />
        <div className="absolute bottom-1/4 -left-48 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Credentials & Badges"
          title={
            <>
              Verified <span className="gradient-text">Certifications</span>
            </>
          }
          subtitle="Continuous learning, architectural proficiency, and industry-validated credentials."
        />

        {/* Telemetry Summary Strip */}
        <div className="mx-auto mt-10 max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Verified Credentials', val: `${CERTIFICATIONS.length}`, highlight: 'text-cyan-600 dark:text-accent-300' },
            { label: 'Global Issuers', val: 'AWS, IBM, Accenture', highlight: 'text-slate-900 dark:text-white' },
            { label: 'Core Domains', val: 'Cloud, AI, Backend', highlight: 'text-slate-900 dark:text-white' },
            { label: 'Verification Status', val: '100% Authenticated', highlight: 'text-emerald-600 dark:text-emerald-400' },
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

        {/* Category Filter Pills */}
        <div className="mt-8 flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 sm:py-0 w-full flex-nowrap sm:flex-wrap justify-start sm:justify-center">
          {CATEGORIES.map((cat) => {
            const count =
              cat === 'All'
                ? CERTIFICATIONS.length
                : CERTIFICATIONS.filter((c) => c.category === cat).length;
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

        {/* Certifications Showcase Bento Grid */}
        <motion.div
          layout
          className="mx-auto mt-8 sm:mt-10 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <CertificateCard
                key={cert.credentialId}
                cert={cert}
                hasImgError={!!imgErrors[cert.credentialId]}
                onImgError={() =>
                  setImgErrors((prev) => ({ ...prev, [cert.credentialId]: true }))
                }
                onClick={() => setActive(cert)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* CERTIFICATION DETAILS & IMAGE MODAL                                       */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 dark:bg-black/85 backdrop-blur-md p-3.5 sm:p-6 overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-2xl sm:rounded-3xl bg-white dark:bg-[#070913] border border-slate-200 dark:border-white/15 p-4 sm:p-6 shadow-2xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.85)] max-h-[90dvh] overflow-y-auto"
            >
              {/* Glowing Top Ambient */}
              <div
                className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full opacity-20 dark:opacity-30 blur-3xl"
                style={{ background: active.color }}
              />

              {/* Modal Header */}
              <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border shadow-sm"
                    style={{
                      background: `${active.color}18`,
                      borderColor: `${active.color}40`,
                    }}
                  >
                    <Award className="h-5 w-5" style={{ color: active.color }} />
                  </span>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        {active.title}
                      </h3>
                    </div>
                    <p className="text-xs font-mono text-slate-500 dark:text-white/50">
                      {active.issuer} • {active.date}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActive(null)}
                  className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/15 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Certificate Image Frame */}
              {active.image && !imgErrors[active.credentialId] ? (
                <div className="mt-3.5 relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 dark:bg-black/80 flex items-center justify-center p-1.5 shadow-inner">
                  <img
                    src={active.image}
                    alt={`${active.title} Certificate`}
                    onError={() =>
                      setImgErrors((prev) => ({ ...prev, [active.credentialId]: true }))
                    }
                    className="w-full h-auto max-h-[48vh] sm:max-h-[54vh] object-contain rounded-xl"
                  />
                </div>
              ) : (
                <div className="mt-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 p-4 space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono border-b border-slate-200 dark:border-white/10 pb-2">
                    <span className="text-slate-500 dark:text-white/50">Issuer</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{active.issuer}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono border-b border-slate-200 dark:border-white/10 pb-2">
                    <span className="text-slate-500 dark:text-white/50">Issue Date</span>
                    <span className="text-slate-700 dark:text-white/80">{active.date}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-white/70 leading-relaxed font-normal">
                    {active.description}
                  </p>
                </div>
              )}

              {/* Modal Footer Controls */}
              <div className="mt-3.5 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleCopy(active.credentialId)}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-700 dark:text-white/70 hover:text-cyan-600 dark:hover:text-accent-300 transition-colors font-medium"
                  title="Click to copy credential ID"
                >
                  <Hash className="h-3 w-3 text-cyan-600 dark:text-accent-400" />
                  <span>{active.credentialId}</span>
                  {copiedId ? (
                    <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400 ml-1" />
                  ) : (
                    <Copy className="h-3 w-3 opacity-40 hover:opacity-100 ml-1" />
                  )}
                </button>

                <div className="flex items-center gap-2 ml-auto">
                  {active.image && !imgErrors[active.credentialId] && (
                    <>
                      <a
                        href={active.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/15 border border-slate-200 dark:border-white/15 px-3 py-1.5 text-xs font-mono text-slate-800 dark:text-white transition-all font-semibold"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Full View</span>
                      </a>
                      <a
                        href={active.image}
                        download={`${active.title.replace(/\s+/g, '_')}_Certificate.png`}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/20 dark:bg-accent-400/20 border border-cyan-500/40 dark:border-accent-400/40 px-3 py-1.5 text-xs font-mono font-semibold text-cyan-700 dark:text-accent-200 hover:bg-cyan-500/30 transition-all"
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span>Download</span>
                      </a>
                    </>
                  )}
                  <button
                    onClick={() => setActive(null)}
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

function CertificateCard({
  cert,
  hasImgError,
  onImgError,
  onClick,
}: {
  cert: Certification;
  hasImgError: boolean;
  onImgError: () => void;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLButtonElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.button
      ref={cardRef}
      layout
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/80 dark:bg-white/[0.02] border border-slate-200/90 dark:border-white/10 text-left backdrop-blur-xl transition-all duration-300 hover:bg-white dark:hover:bg-white/[0.04] hover:border-cyan-500/40 dark:hover:border-accent-400/40 shadow-sm shadow-slate-200/50 hover:shadow-xl dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
    >
      {/* Interactive Flashlight Glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-30 dark:opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, ${cert.color}40, transparent 80%)`,
          }}
        />
      )}

      {/* Top Accent Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)`,
        }}
      />

      {/* Certificate Image Frame */}
      <div className="relative w-full h-44 bg-slate-900 dark:bg-black/70 overflow-hidden border-b border-slate-200 dark:border-white/10 flex items-center justify-center p-2.5">
        {cert.image && !hasImgError ? (
          <img
            src={cert.image}
            alt={`${cert.title} preview`}
            onError={onImgError}
            className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 text-white/40">
            <Award className="h-10 w-10" style={{ color: cert.color }} />
            <span className="text-[11px] font-mono">{cert.issuer}</span>
          </div>
        )}

        {/* Hover Overlay with Action Button */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <span className="inline-flex items-center gap-1.5 rounded-xl bg-black/85 border border-white/25 px-3.5 py-1.5 text-xs font-mono font-semibold text-cyan-300 dark:text-accent-300 shadow-xl">
            <Eye className="h-3.5 w-3.5" />
            <span>Full View</span>
          </span>
        </div>

        {/* Verified Chip */}
        <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-black/80 border border-emerald-500/30 px-2 py-0.5 rounded-md backdrop-blur-md">
          <BadgeCheck className="h-3 w-3 text-emerald-400" />
          Verified
        </span>

        {/* Issuer Mini Chip on Top Left */}
        <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 text-[10px] font-mono text-white/90 bg-black/80 border border-white/15 px-2 py-0.5 rounded-md backdrop-blur-md font-medium">
          {cert.issuer}
        </span>
      </div>

      {/* Card Info Area */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug group-hover:text-cyan-700 dark:group-hover:text-accent-200 transition-colors line-clamp-2">
            {cert.title}
          </h3>

          {/* Validated Skill Badges Preview */}
          {cert.skills && cert.skills.length > 0 && (
            <div className="mt-2.5 flex flex-wrap gap-1">
              {cert.skills.slice(0, 2).map((sk) => (
                <span
                  key={sk}
                  className="rounded-md bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 px-1.5 py-0.5 text-[10px] font-mono text-slate-600 dark:text-white/60 font-medium"
                >
                  {sk}
                </span>
              ))}
              {cert.skills.length > 2 && (
                <span className="rounded-md bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 px-1 py-0.5 text-[10px] font-mono text-slate-400 dark:text-white/35">
                  +{cert.skills.length - 2}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="mt-4 pt-2.5 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between text-xs font-mono">
          <span className="text-slate-500 dark:text-white/40 text-[11px]">{cert.date}</span>
          <span className="text-cyan-600 dark:text-accent-300/80 group-hover:text-cyan-700 dark:group-hover:text-accent-300 text-[11px] font-semibold inline-flex items-center gap-1 transition-colors">
            Inspect <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}
