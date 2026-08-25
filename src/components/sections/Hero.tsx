import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  FolderGit2,
  Mail,
  Github,
  Linkedin,
  Terminal,
  Code2,
  Sparkles,
  Cpu,
  Award,
  ArrowRight,
  GitBranch,
  Copy,
  Check,
  Play,
  Server,
} from "lucide-react";

import { PROFILE } from "../../constants/data";
import { useTypewriter } from "../../hooks/useTypewriter";
import AnimatedCounter from "../ui/AnimatedCounter";
import { cn } from "../../utils/cn";

const TECH_PILLS = [
  { name: "React.js", color: "text-cyan-700 dark:text-cyan-300 border-cyan-400/40 dark:border-cyan-500/30 bg-cyan-50 dark:bg-cyan-500/10" },
  { name: "Spring Boot", color: "text-emerald-700 dark:text-emerald-300 border-emerald-400/40 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10" },
  { name: "Node.js", color: "text-green-700 dark:text-green-300 border-green-400/40 dark:border-green-500/30 bg-green-50 dark:bg-green-500/10" },
  { name: "MySQL", color: "text-sky-700 dark:text-sky-300 border-sky-400/40 dark:border-sky-500/30 bg-sky-50 dark:bg-sky-500/10" },
  { name: "Express.js", color: "text-purple-700 dark:text-purple-300 border-purple-400/40 dark:border-purple-500/30 bg-purple-50 dark:bg-purple-500/10" },
  { name: "REST APIs", color: "text-amber-700 dark:text-amber-300 border-amber-400/40 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-500/10" },
];

const METRICS = [
  {
    value: 10,
    suffix: "+",
    label: "Tech Stacks & Tools",
    subtitle: "React, Node & Spring Boot",
    tag: "TECH_STACK",
    icon: Code2,
    textColor: "text-cyan-600 dark:text-cyan-300",
    glowColor: "rgba(34,211,238,0.35)",
    borderHover: "hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] dark:hover:border-cyan-400/50 dark:hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]",
    spotlight: "from-cyan-500/15 via-cyan-500/5 to-transparent",
    iconBg: "bg-cyan-50 text-cyan-600 border-cyan-200 dark:bg-cyan-500/10 dark:border-cyan-500/30 dark:text-cyan-300",
  },
  {
    value: 8,
    suffix: "+",
    label: "Completed Projects",
    subtitle: "Full-Stack Web & APIs",
    tag: "PORTFOLIO",
    icon: FolderGit2,
    textColor: "text-blue-600 dark:text-blue-400",
    glowColor: "rgba(59,130,246,0.35)",
    borderHover: "hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] dark:hover:border-blue-400/50 dark:hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]",
    spotlight: "from-blue-500/15 via-blue-500/5 to-transparent",
    iconBg: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/30 dark:text-blue-400",
  },
  {
    value: 100,
    suffix: "+",
    label: "REST Endpoints Built",
    subtitle: "Scalable APIs & Microservices",
    tag: "BACKEND",
    icon: Cpu,
    textColor: "text-emerald-600 dark:text-emerald-300",
    glowColor: "rgba(52,211,153,0.35)",
    borderHover: "hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(52,211,153,0.2)] dark:hover:border-emerald-400/50 dark:hover:shadow-[0_0_25px_rgba(52,211,153,0.2)]",
    spotlight: "from-emerald-500/15 via-emerald-500/5 to-transparent",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-300",
  },
  {
    value: 7,
    suffix: "+",
    label: "Certifications & Honors",
    subtitle: "9.18 CGPA • Verified Dev",
    tag: "HONORS",
    icon: Award,
    textColor: "text-purple-600 dark:text-purple-300",
    glowColor: "rgba(168,85,247,0.35)",
    borderHover: "hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] dark:hover:border-purple-400/50 dark:hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]",
    spotlight: "from-purple-500/15 via-purple-500/5 to-transparent",
    iconBg: "bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-500/10 dark:border-purple-500/30 dark:text-purple-300",
  },
];

export default function Hero() {
  const typed = useTypewriter(PROFILE.roles);
  const [copied, setCopied] = useState(false);
  const [cliCopied, setCliCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"js" | "json">("js");
  const [executing, setExecuting] = useState(false);
  const [executionOutput, setExecutionOutput] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleCopyCode = () => {
    const code =
      activeTab === "js"
        ? `const developer = {
  name: "${PROFILE.name}",
  title: "${PROFILE.title}",
  status: "Available for Roles & Freelancing",
  skills: ["React.js", "Spring Boot", "Node.js", "MySQL"],
  contact: "${PROFILE.email}",
};`
        : JSON.stringify(
            {
              name: PROFILE.name,
              roles: PROFILE.roles,
              location: PROFILE.location,
              email: PROFILE.email,
            },
            null,
            2
          );

    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyCli = () => {
    navigator.clipboard.writeText("npx satwik-saxena");
    setCliCopied(true);
    setTimeout(() => setCliCopied(false), 2000);
  };

  const handleRunCode = () => {
    setExecuting(true);
    setExecutionOutput(null);
    setTimeout(() => {
      setExecuting(false);
      setExecutionOutput("✨ Output: Profile compiled successfully. Ready to build something extraordinary!");
    }, 600);
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-28 sm:pt-32 pb-12 overflow-hidden"
    >
      {/* ========================================================================= */}
      {/* Hero Central Content Container */}
      {/* ========================================================================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 sm:px-8 lg:px-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ===================================================================== */}
          {/* LEFT COLUMN: Developer Headline, Identity, CTAs */}
          {/* ===================================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live System Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-emerald-500/10 dark:bg-white/[0.04] backdrop-blur-xl px-3.5 py-1.5 text-xs text-emerald-800 dark:text-white/80 border border-emerald-500/20 dark:border-white/10 hover:border-emerald-500/40 transition-colors shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              </span>
              <span className="font-mono font-semibold dark:font-medium text-emerald-900 dark:text-white/90 tracking-wide text-[11px] sm:text-xs">
                SYSTEM: OPEN FOR OPPORTUNITIES
              </span>
              <Sparkles className="h-3 w-3 text-emerald-500 dark:text-emerald-400" />
            </motion.div>

            {/* Main Developer Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] sm:leading-[1.1]"
            >
              Hi, I'm{" "}
              <span className="gradient-text drop-shadow-[0_0_35px_rgba(34,211,238,0.3)]">
                {PROFILE.name}
              </span>
            </motion.h1>

            {/* Developer Typewriter Terminal Prompt */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 inline-flex items-center gap-1.5 sm:gap-2 rounded-xl bg-slate-100/90 dark:bg-ink-800/80 border border-slate-300/80 dark:border-white/10 px-3 sm:px-3.5 py-1.5 sm:py-2 backdrop-blur-md shadow-sm max-w-full overflow-hidden"
            >
              <Terminal className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-600 dark:text-accent-300 shrink-0" />
              <span className="font-mono text-[11px] sm:text-xs text-slate-500 dark:text-white/50 shrink-0">&gt; const role =</span>
              <span className="font-mono text-xs sm:text-base font-semibold text-cyan-700 dark:text-accent-200 truncate">
                "{typed}"
              </span>
              <span className="inline-block h-3.5 sm:h-4 w-[2px] animate-pulse bg-cyan-500 dark:bg-accent-400 shrink-0" />
            </motion.div>

            {/* Bio Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 dark:text-white/70 leading-relaxed font-normal max-w-xl"
            >
              Passionate developer engineering scalable web systems with{" "}
              <span className="text-slate-900 dark:text-white font-medium">React</span>, robust backend architectures using{" "}
              <span className="text-slate-900 dark:text-white font-medium">Spring Boot & Node.js</span>, and modern high-performance databases.
            </motion.p>

            {/* Interactive Tech Badge Pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2"
            >
              {TECH_PILLS.map((pill) => (
                <span
                  key={pill.name}
                  className={`inline-flex items-center px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[11px] sm:text-xs font-mono font-semibold border ${pill.color} transition-all hover:scale-105 shadow-sm cursor-default`}
                >
                  {pill.name}
                </span>
              ))}
            </motion.div>

            {/* Developer CTA Buttons & CLI Command */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto"
            >
              {/* Explore Projects */}
              <button
                onClick={() => scrollTo("projects")}
                className="btn-primary group px-6 py-3 shadow-md dark:shadow-[0_0_25px_rgba(34,211,238,0.35)] w-full sm:w-auto justify-center"
              >
                <FolderGit2 className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span>Explore Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Download Resume */}
              <a
                href={PROFILE.resumeUrl || "Resume.pdf"}
                download="Satwik_Saxena_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost px-5 py-3 group hover:border-cyan-500/50 dark:hover:border-accent-400/50 w-full sm:w-auto justify-center"
              >
                <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 text-cyan-600 dark:text-accent-300" />
                <span>Resume</span>
              </a>

              {/* Contact Me */}
              <button
                onClick={() => scrollTo("contact")}
                className="btn-ghost px-5 py-3 group hover:border-emerald-500/50 dark:hover:border-emerald-400/50 w-full sm:w-auto justify-center"
              >
                <Mail className="h-4 w-4 transition-transform group-hover:scale-110 text-emerald-600 dark:text-emerald-400" />
                <span>Contact</span>
              </button>
            </motion.div>

            {/* Interactive Terminal Quick-Run Pill & Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-white/50"
            >
              {/* CLI Command Box */}
              <button
                onClick={handleCopyCli}
                className="group flex items-center gap-2 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-300/80 dark:border-white/10 px-3 py-1.5 font-mono text-slate-700 dark:text-white/70 hover:border-cyan-500/50 dark:hover:border-accent-400/50 hover:text-cyan-700 dark:hover:text-accent-200 transition-all cursor-pointer shadow-sm"
                title="Click to copy CLI command"
              >
                <Terminal className="h-3.5 w-3.5 text-cyan-600 dark:text-accent-400" />
                <span>npx satwik-saxena</span>
                {cliCopied ? (
                  <Check className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400" />
                ) : (
                  <Copy className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                )}
              </button>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-300/80 dark:border-white/10 text-slate-700 dark:text-white/70 hover:text-cyan-600 dark:hover:text-accent-300 hover:border-cyan-400/40 dark:hover:border-accent-400/40 hover:scale-110 transition-all shadow-sm"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-300/80 dark:border-white/10 text-slate-700 dark:text-white/70 hover:text-cyan-600 dark:hover:text-accent-300 hover:border-cyan-400/40 dark:hover:border-accent-400/40 hover:scale-110 transition-all shadow-sm"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  aria-label="Email Satwik"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-300/80 dark:border-white/10 text-slate-700 dark:text-white/70 hover:text-cyan-600 dark:hover:text-accent-300 hover:border-cyan-400/40 dark:hover:border-accent-400/40 hover:scale-110 transition-all shadow-sm"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ===================================================================== */}
          {/* RIGHT COLUMN: Interactive MacOS / Linux Developer Code Editor */}
          {/* ===================================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-5 w-full relative"
          >
            {/* Ambient Backlight Glow behind editor */}
            <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-500/15 blur-2xl opacity-60 transition-opacity duration-500" />

            <div className="relative rounded-2xl bg-slate-900 dark:bg-ink-800/90 border border-slate-700/80 dark:border-white/15 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden backdrop-blur-2xl">
              
              {/* Code Window Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 dark:border-white/10 px-4 py-3 bg-slate-950/90 dark:bg-ink-900/90 select-none">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]/90 inline-block shadow-[0_0_6px_rgba(255,95,86,0.5)]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]/90 inline-block shadow-[0_0_6px_rgba(255,189,46,0.5)]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]/90 inline-block shadow-[0_0_6px_rgba(39,201,63,0.5)]" />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab("js")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                      activeTab === "js"
                        ? "bg-white/10 text-cyan-300 dark:text-accent-300 font-semibold border border-white/15 shadow-sm"
                        : "text-white/40 hover:text-white/70 hover:bg-white/[0.04]"
                    }`}
                  >
                    <Code2 className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Developer.js</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("json")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                      activeTab === "json"
                        ? "bg-white/10 text-cyan-300 dark:text-accent-300 font-semibold border border-white/15 shadow-sm"
                        : "text-white/40 hover:text-white/70 hover:bg-white/[0.04]"
                    }`}
                  >
                    <Server className="h-3.5 w-3.5 text-purple-400" />
                    <span>stack.json</span>
                  </button>
                </div>

                {/* Actions: Git branch & Copy */}
                <div className="flex items-center gap-2 text-white/50">
                  <span className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-white/40">
                    <GitBranch className="h-3 w-3 text-emerald-400" />
                    main*
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                    title="Copy code"
                  >
                    {copied ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-white/80 bg-slate-900/90 dark:bg-ink-900/80">
                {activeTab === "js" ? (
                  <div className="space-y-1">
                    <div className="flex">
                      <span className="w-6 text-white/20 select-none">01</span>
                      <span>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-cyan-300 font-semibold">developer</span> = &#123;
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-white/20 select-none">02</span>
                      <span className="pl-4">
                        <span className="text-cyan-200">name</span>:{" "}
                        <span className="text-emerald-300">"{PROFILE.name}"</span>,
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-white/20 select-none">03</span>
                      <span className="pl-4">
                        <span className="text-cyan-200">title</span>:{" "}
                        <span className="text-emerald-300">"{PROFILE.title}"</span>,
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-white/20 select-none">04</span>
                      <span className="pl-4">
                        <span className="text-cyan-200">status</span>:{" "}
                        <span className="text-emerald-400">"🟢 Available"</span>,
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-white/20 select-none">05</span>
                      <span className="pl-4">
                        <span className="text-cyan-200">coreStack</span>: [
                        <span className="text-amber-200">"React"</span>,{" "}
                        <span className="text-amber-200">"SpringBoot"</span>,{" "}
                        <span className="text-amber-200">"Node"</span>,{" "}
                        <span className="text-amber-200">"MySQL"</span>],
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-white/20 select-none">06</span>
                      <span className="pl-4">
                        <span className="text-cyan-200">cgpa</span>:{" "}
                        <span className="text-purple-300">9.18</span>,
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-white/20 select-none">07</span>
                      <span className="pl-4">
                        <span className="text-blue-400">async</span>{" "}
                        <span className="text-yellow-300">deploy</span>() &#123;
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-white/20 select-none">08</span>
                      <span className="pl-8">
                        <span className="text-purple-400">return</span>{" "}
                        <span className="text-emerald-300">"🚀 Ship high quality code"</span>;
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-white/20 select-none">09</span>
                      <span className="pl-4">&#125;,</span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-white/20 select-none">10</span>
                      <span>&#125;;</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <div className="flex">
                      <span className="w-6 text-white/20 select-none">01</span>
                      <span>&#123;</span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-white/20 select-none">02</span>
                      <span className="pl-4">
                        <span className="text-purple-300">"frontend"</span>:{" "}
                        <span className="text-emerald-300">["React.js", "JavaScript", "TailwindCSS"]</span>,
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-white/20 select-none">03</span>
                      <span className="pl-4">
                        <span className="text-purple-300">"backend"</span>:{" "}
                        <span className="text-emerald-300">["Spring Boot", "Node.js", "Express.js"]</span>,
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-white/20 select-none">04</span>
                      <span className="pl-4">
                        <span className="text-purple-300">"database"</span>:{" "}
                        <span className="text-emerald-300">["MySQL", "MongoDB", "Redis"]</span>,
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-white/20 select-none">05</span>
                      <span className="pl-4">
                        <span className="text-purple-300">"focus"</span>:{" "}
                        <span className="text-cyan-300">"Scalability & REST APIs"</span>
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-6 text-white/20 select-none">06</span>
                      <span>&#125;</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Code Window Footer / Interactive Run Bar */}
              <div className="border-t border-slate-800 dark:border-white/10 px-4 py-2.5 bg-slate-950/90 dark:bg-ink-800/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleRunCode}
                    disabled={executing}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/20 dark:bg-accent-400/20 border border-cyan-400/30 dark:border-accent-400/30 px-2.5 py-1 text-xs font-mono font-medium text-cyan-300 dark:text-accent-200 hover:bg-cyan-500/30 dark:hover:bg-accent-400/30 transition-all active:scale-95 disabled:opacity-50"
                  >
                    <Play className={`h-3 w-3 ${executing ? "animate-spin text-cyan-300 dark:text-accent-300" : "fill-cyan-300 text-cyan-300 dark:fill-accent-300 dark:text-accent-300"}`} />
                    <span>{executing ? "Running..." : "Run Preview"}</span>
                  </button>
                  <span className="text-[11px] font-mono text-white/40">status: 200 OK</span>
                </div>

                <div className="text-[11px] font-mono text-white/40">
                  UTF-8 • JavaScript
                </div>
              </div>

              {/* Simulated Execution Output Console */}
              <AnimatePresence>
                {executionOutput && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-emerald-500/20 bg-emerald-950/40 px-4 py-2.5 text-xs font-mono text-emerald-300"
                  >
                    {executionOutput}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

        {/* ======================================================================= */}
        {/* BOTTOM METRICS TELEMETRY GRID (4 Upgraded Premium Telemetry Cards)     */}
        {/* ======================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 w-full"
        >
          {METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className={cn(
                  "group relative rounded-2xl p-3.5 sm:p-5 overflow-hidden transition-all duration-300 cursor-default",
                  "bg-white/80 dark:bg-white/[0.03] backdrop-blur-2xl",
                  "border border-slate-200/90 dark:border-white/10 shadow-sm shadow-slate-200/50 dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)]",
                  metric.borderHover
                )}
              >
                {/* Ambient Radial Spotlight inside Card */}
                <div
                  className={cn(
                    "pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                    metric.spotlight
                  )}
                />

                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent group-hover:via-cyan-400 dark:group-hover:via-white/40 transition-all duration-500" />

                {/* Top header row: Icon + System Chip */}
                <div className="flex items-center justify-between mb-2.5 sm:mb-3.5">
                  <div
                    className={cn(
                      "relative grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-xl border transition-all duration-300 group-hover:scale-110 shadow-sm",
                      metric.iconBg
                    )}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>

                  <span className="inline-flex items-center gap-1 sm:gap-1.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-500 dark:text-white/40 group-hover:text-slate-900 dark:group-hover:text-white/80 transition-colors bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 px-1.5 sm:px-2 py-0.5 rounded-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                    {metric.tag}
                  </span>
                </div>

                {/* Counter & Label */}
                <div className="text-left space-y-0.5">
                  <h3 className={cn("text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight font-mono", metric.textColor)}>
                    <AnimatedCounter to={metric.value} suffix={metric.suffix} />
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white/90 group-hover:text-cyan-700 dark:group-hover:text-white transition-colors truncate sm:whitespace-normal">
                    {metric.label}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-white/50 group-hover:text-slate-700 dark:group-hover:text-white/70 transition-colors truncate sm:line-clamp-1 font-mono">
                    {metric.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* Scroll Down Indicator */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 mt-8 flex justify-center"
      >
        <button
          onClick={() => scrollTo("about")}
          aria-label="Scroll to About section"
          className="group inline-flex flex-col items-center gap-1.5 text-xs text-slate-400 dark:text-white/40 hover:text-cyan-600 dark:hover:text-accent-300 transition-colors focus:outline-none"
        >
          <span className="font-mono tracking-widest text-[10px] uppercase group-hover:tracking-wider transition-all font-semibold">
            Scroll To Explore
          </span>
          <span className="flex h-7 w-4 items-start justify-center rounded-full border border-slate-300 dark:border-white/20 p-0.5 group-hover:border-cyan-500 dark:group-hover:border-accent-400/50">
            <span className="h-1.5 w-1 rounded-full bg-cyan-500 dark:bg-accent-400 animate-bounce" />
          </span>
        </button>
      </motion.div>
    </section>
  );
}