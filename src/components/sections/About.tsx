import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Sparkles,
  Code2,
  Server,
  Database,
  Bot,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { PROFILE, EDUCATION } from "../../constants/data";
import SectionHeading from "../ui/SectionHeading";
import AnimatedCounter from "../ui/AnimatedCounter";

const STATS = [
  { value: 8, suffix: "+", label: "Projects Completed", color: "text-cyan-600 dark:text-cyan-400" },
  { value: 100, suffix: "+", label: "REST APIs Built", color: "text-emerald-600 dark:text-emerald-400" },
  { value: 9.18, suffix: "", label: "B.Tech CSE CGPA", color: "text-purple-600 dark:text-purple-400" },
  { value: 7, suffix: "+", label: "Certifications", color: "text-blue-600 dark:text-blue-400" },
];

const DOMAINS = [
  {
    title: "Frontend Engineering",
    desc: "Developing fast, responsive, and accessible user interfaces using React.js, TypeScript, and Tailwind CSS.",
    icon: Code2,
    color: "text-cyan-600 dark:text-cyan-400",
    border: "hover:border-cyan-500/40 dark:hover:border-cyan-400/40",
  },
  {
    title: "Backend & REST APIs",
    desc: "Architecting secure, resilient REST APIs and microservices using Spring Boot, Java, and Node.js.",
    icon: Server,
    color: "text-emerald-600 dark:text-emerald-400",
    border: "hover:border-emerald-500/40 dark:hover:border-emerald-400/40",
  },
  {
    title: "Database Architecture",
    desc: "Designing optimized data schemas, indexing, and queries with PostgreSQL, MySQL, and MongoDB.",
    icon: Database,
    color: "text-blue-600 dark:text-blue-400",
    border: "hover:border-blue-500/40 dark:hover:border-blue-400/40",
  },
  {
    title: "AI & LLM Solutions",
    desc: "Integrating Generative AI, Google Gemini APIs, and intelligent workflow automation.",
    icon: Bot,
    color: "text-purple-600 dark:text-purple-400",
    border: "hover:border-purple-500/40 dark:hover:border-purple-400/40",
  },
];

const STRENGTHS = [
  "End-to-End Full-Stack Development",
  "High-Performance Spring Boot & Node APIs",
  "AI & LLM-Powered Web Integrations",
  "Clean Code, DSA & System Optimization",
];

export default function About() {
  const edu = EDUCATION[0];

  return (
    <section id="about" className="relative section-pad py-24 sm:py-28 overflow-hidden">
      {/* Section Header */}
      <SectionHeading
        eyebrow="ABOUT SATWIK"
        title={
          <>
            Engineering with <span className="gradient-text">Precision & Innovation</span>
          </>
        }
        subtitle="Full-Stack Developer & Backend Engineer blending robust architectures with intuitive, interactive user experiences."
      />

      {/* Main Grid Content */}
      <div className="mx-auto mt-10 sm:mt-14 max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* ===================================================================== */}
        {/* LEFT COLUMN: Narrative Bio, Strengths, Education (7 Cols)             */}
        {/* ===================================================================== */}
        <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-5 sm:p-8 border border-slate-200/90 dark:border-white/10"
          >
            {/* Top Identity Header */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-accent-300 font-semibold tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                <span>WHO I AM</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-600 dark:text-white/50 bg-slate-100 dark:bg-white/[0.04] px-2.5 sm:px-3 py-1 rounded-full border border-slate-200 dark:border-white/10">
                <MapPin className="h-3.5 w-3.5 text-cyan-600 dark:text-accent-400" />
                <span>{PROFILE.location}</span>
              </span>
            </div>

            {/* Narrative text */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-white/80 leading-relaxed">
              I'm <span className="text-slate-900 dark:text-white font-semibold">{PROFILE.name}</span>, a passionate{" "}
              <span className="text-cyan-700 dark:text-accent-200 font-medium">{PROFILE.title}</span> based in India. I focus on developing scalable, end-to-end web applications — from interactive, high-performance user interfaces with <span className="text-slate-900 dark:text-white font-medium">React.js</span> to robust backend architectures powered by <span className="text-slate-900 dark:text-white font-medium">Spring Boot</span> and <span className="text-slate-900 dark:text-white font-medium">Node.js</span>.
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-white/70 leading-relaxed">
              I enjoy solving real-world challenges through clean code, solid data structures, and incorporating modern Generative AI to craft intelligent, responsive workflows.
            </p>

            {/* Core Strengths Checklist */}
            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {STRENGTHS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-white/80 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Card */}
          {edu && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-2xl p-4 sm:p-6 border border-slate-200/90 dark:border-white/10 hover:border-cyan-500/40 dark:hover:border-accent-400/40 transition-all shadow-sm"
            >
              <div className="flex items-start gap-3.5">
                <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan-50 dark:bg-accent-400/10 border border-cyan-200 dark:border-accent-400/20 text-cyan-600 dark:text-accent-300">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">{edu.degree}</h4>
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 dark:bg-accent-400/15 dark:text-accent-300 font-semibold border border-cyan-300 dark:border-accent-400/30">
                      CGPA 9.18
                    </span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-white/60">
                    {edu.school} · <span className="text-cyan-700 dark:text-accent-300/90 font-mono font-medium">{edu.period}</span>
                  </p>
                  <p className="mt-2 text-xs text-slate-500 dark:text-white/50 leading-relaxed">
                    {edu.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

        </div>

        {/* ===================================================================== */}
        {/* RIGHT COLUMN: Expertise Domains & Telemetry Stats (5 Cols)           */}
        {/* ===================================================================== */}
        <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
          
          {/* 4-Metric Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-2.5 sm:gap-3.5"
          >
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="glass rounded-xl p-3.5 sm:p-5 border border-slate-200/90 dark:border-white/10 text-center hover:border-cyan-500/40 dark:hover:border-accent-400/40 hover:-translate-y-0.5 transition-all group"
              >
                <div className={`text-xl sm:text-3xl font-bold font-mono ${stat.color} group-hover:scale-105 transition-transform duration-200`}>
                  {typeof stat.value === "number" && stat.value % 1 === 0 ? (
                    <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                  ) : (
                    `${stat.value}${stat.suffix}`
                  )}
                </div>
                <div className="mt-1 text-[11px] sm:text-xs text-slate-600 dark:text-white/60 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Technical Domains Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-4 sm:p-6 border border-slate-200/90 dark:border-white/10 flex flex-col gap-3 sm:gap-3.5"
          >
            <div className="flex items-center gap-2 mb-0.5 sm:mb-1 text-xs font-mono text-slate-500 dark:text-white/60 font-semibold">
              <Terminal className="h-3.5 w-3.5 text-cyan-600 dark:text-accent-300" />
              <span>CORE TECHNICAL DOMAINS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {DOMAINS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5 ${item.border} transition-all`}
                  >
                    <div className="flex items-center gap-2 mb-1 sm:mb-1.5">
                      <Icon className={`h-4 w-4 ${item.color}`} />
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-600 dark:text-white/55 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
