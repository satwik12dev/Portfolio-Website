import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS, type Skill } from "../../constants/data";
import SectionHeading from "../ui/SectionHeading";
import {
  Code2,
  Server,
  Database,
  Cpu,
  Bot,
  Globe,
  Search,
  LayoutGrid,
  Layers,
  GitBranch,
} from "lucide-react";

const CATEGORIES = ["All", "Frontend", "Backend", "Database", "DevOps", "AI & Tools"] as const;

const CATEGORY_META: Record<
  string,
  { title: string; subtitle: string; icon: typeof Code2; color: string }
> = {
  Frontend: {
    title: "Frontend Engineering",
    subtitle: "Component-driven UI, type safety, dynamic styling & modern state workflows.",
    icon: Globe,
    color: "text-cyan-600 dark:text-cyan-400",
  },
  Backend: {
    title: "Backend & Microservices",
    subtitle: "Enterprise Java Spring Boot services, Node.js runtimes, and secure RESTful APIs.",
    icon: Server,
    color: "text-emerald-600 dark:text-emerald-400",
  },
  Database: {
    title: "Database Architecture",
    subtitle: "Relational ACID integrity with MySQL, flexible NoSQL with MongoDB & high-speed caching with Redis.",
    icon: Database,
    color: "text-blue-600 dark:text-blue-400",
  },
  "AI & Tools": {
    title: "AI & Intelligent Systems",
    subtitle: "Generative AI orchestration with Google Gemini API & LLM integration.",
    icon: Bot,
    color: "text-purple-600 dark:text-purple-400",
  },
  DevOps: {
    title: "DevOps & Collaboration",
    subtitle: "Containerization with Docker, Git version control, and CI/CD pipelines.",
    icon: GitBranch,
    color: "text-rose-600 dark:text-rose-400",
  },
};

/* -------------------------------------------------------------------------- */
/* High-Fidelity Tech Brand SVG Icons                                         */
/* -------------------------------------------------------------------------- */
function TechIcon({ name, color }: { name: string; color: string }) {
  switch (name) {
    case "React.js":
      return (
        <svg className="h-6 w-6" viewBox="-11.5 -10.23174 23 20.46348" fill={color}>
          <circle cx="0" cy="0" r="2.05" />
          <g stroke={color} strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case "TypeScript":
      return (
        <svg className="h-6 w-6" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="6" fill="#3178C6" />
          <path
            d="M10.8 19.8v-8.2H7V9h10.4v2.6h-3.8v8.2h-2.8zm7 0c0-1.8.8-3.1 2.3-3.8l2.2-1c.9-.4 1.3-.9 1.3-1.6 0-.8-.7-1.3-1.7-1.3-1.2 0-2 .6-2.2 1.6h-2.6c.3-2.1 2.1-3.7 4.8-3.7 2.8 0 4.6 1.5 4.6 3.6 0 1.5-.7 2.6-2.3 3.4l-2.1 1c-1 .5-1.4 1-1.4 1.8 0 .8.7 1.4 1.8 1.4 1.3 0 2.2-.7 2.4-1.8h2.6c-.3 2.3-2.3 3.9-5 3.9-2.9 0-4.8-1.7-4.8-3.5z"
            fill="#fff"
          />
        </svg>
      );

    case "JavaScript":
      return (
        <svg className="h-6 w-6" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="6" fill="#F7DF1E" />
          <path
            d="M12.5 19.5c0 1.8-1.1 2.7-2.8 2.7-1.5 0-2.5-.8-2.9-2.2l2.3-1.3c.2.7.5 1.1 1 1.1.5 0 .8-.3.8-.9v-7.3h2.6v7.9zm6.3-1.8c.8 1.3 1.8 2.1 3.4 2.1 1.5 0 2.4-.7 2.4-1.8 0-1.2-.9-1.7-2.5-2.4l-.8-.4c-2.4-1-4-2.3-4-5 0-2.5 1.9-4.4 4.8-4.4 2.1 0 3.6.8 4.6 2.5l-2.1 1.4c-.5-.9-1.2-1.4-2.5-1.4-1.2 0-2 .7-2 1.6 0 1.1.7 1.6 2.3 2.3l.9.4c2.8 1.2 4.3 2.5 4.3 5.2 0 3-2.3 4.7-5.3 4.7-3 0-4.8-1.6-5.6-3.4l2.1-1.5z"
            fill="#000"
          />
        </svg>
      );

    case "Tailwind CSS":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
        </svg>
      );

    case "HTML5":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm16.5 6.5H6l.3 3.5h11.4l-.5 5.5-5.2 1.4-5.2-1.4-.3-3.2h2.5l.2 1.7 2.8.8 2.8-.8.3-3.2H6.4L5.6 3.5h12.7l-.3 3z" />
        </svg>
      );

    case "CSS3":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm16.5 6.5H6.2l.3 3.5h10.9l-.5 5.5-4.9 1.4-4.9-1.4-.3-3.2h2.5l.1 1.7 2.6.7 2.6-.7.3-3.2H6.4L5.6 3.5h12.7l-.3 3z" />
        </svg>
      );

    case "Spring Boot":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M21.5 9.5c-.8-3.6-3.8-6.3-7.5-6.5-4.4-.2-8.2 2.8-9 7.1-.5 2.7.2 5.5 1.9 7.6 1.7 2.1 4.3 3.3 7 3.3 5 0 9.2-3.8 9.6-8.8.1-.9-.2-1.8-.7-2.5-.4-.1-.8-.2-1.3-.2zm-8.8 7.3c-.6.3-1.4.3-2 .1-.6-.2-1.1-.7-1.3-1.3-.3-.8-.1-1.7.5-2.2.5-.5 1.3-.7 2-.5.7.1 1.2.6 1.4 1.3.3.8.1 1.8-.6 2.6z" />
        </svg>
      );

    case "Java":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M8.8 19.3c2.4.2 5-.2 7.1-.9.6-.2 1.3-.6 1.8-.3.2.1.2.4.1.6-.7 1-2.4 1.5-3.6 1.7-2 .3-4.1.2-6.1-.2-.7-.2-1.5-.5-1.9-1.1-.2-.4.2-.7.6-.8.6-.1 1.3-.1 2 0zm-1.6-2.4c2.8.3 5.7.2 8.4-.5.9-.2 1.9-.6 2.8-.2.2.1.3.4.1.6-.9 1.1-2.6 1.7-4 1.9-2.5.4-5.1.3-7.6-.2-.9-.2-1.9-.5-2.4-1.3-.2-.4.2-.7.6-.8.7-.1 1.4.4 2.1.5zm6.5-6.3c.7 1.4-.4 2.6-1.5 3.3-1.1.7-2.3 1.1-3.6 1.3-1.1.2-2.3.1-3.3-.4-.4-.2-.8-.5-.8-.9 0-.4.3-.8.6-1 .9-.7 2-1.1 3-1.5 1.4-.6 2.7-1.3 3.7-2.5.4-.5.9-.9 1.4-.7.4.2.4.8.5 1.2.1.4 0 .9 0 1.2z" />
        </svg>
      );

    case "Node.js":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.3 7.2-4.3v-7L12 4.3zm0 4.2a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
        </svg>
      );

    case "Express.js":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.5 16.5h-2.8l-2.2-3.8-2.2 3.8H8.5L12 10.5 8.7 5.5h2.8l2 3.6 2-3.6h2.8L15 10.5l3.5 6z" />
        </svg>
      );

    case "REST APIs":
      return <Cpu className="h-6 w-6" style={{ color }} />;

    case "PostgreSQL":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2a10 10 0 00-7.8 16.3c.3.4.7.7 1.1 1 2 1.7 4.5 2.7 7.2 2.7 6.1 0 11-4.9 11-11S18.1 2 12 2zm3.6 15.3c-.6.3-1.3.4-2 .4-1.9 0-3.6-1.1-4.5-2.7-.4-.8-.6-1.6-.6-2.5 0-2.8 2.3-5 5.1-5 .8 0 1.6.2 2.3.6.4.2.7.5 1 .8l-1.4 1.4c-.5-.5-1.2-.8-1.9-.8-1.7 0-3.1 1.4-3.1 3.1 0 .6.2 1.1.5 1.6.6 1 1.6 1.6 2.8 1.6.4 0 .9-.1 1.3-.3.3-.2.6-.4.8-.7v-1.6h-2.1v-2h4.1v4.7c-.6.6-1.2 1.1-1.9 1.5z" />
        </svg>
      );

    case "MongoDB":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M12 1.5s-.3.3-.6.8C9.5 5.5 5.5 11 5.5 15.5c0 4.2 3.2 7 6.5 7s6.5-2.8 6.5-7C18.5 11 14.5 5.5 12.6 2.3c-.3-.5-.6-.8-.6-.8zm0 18.7c-2.3 0-4.3-1.9-4.3-4.7 0-3.2 2.8-7.3 4.3-9.5 1.5 2.2 4.3 6.3 4.3 9.5 0 2.8-2 4.7-4.3 4.7z" />
        </svg>
      );

    case "MySQL":
      return <Database className="h-6 w-6" style={{ color }} />;

    case "Redis":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M11.996 0a1.92 1.92 0 0 0-.858.204L1.758 4.887a1.92 1.92 0 0 0-1.062 1.71v10.806a1.92 1.92 0 0 0 1.062 1.71l9.38 4.683a1.92 1.92 0 0 0 1.716 0l9.38-4.683a1.92 1.92 0 0 0 1.062-1.71V6.597a1.92 1.92 0 0 0-1.062-1.71L12.854.204A1.92 1.92 0 0 0 11.996 0zm.004 2.246 8.355 4.172-8.355 4.172-8.355-4.172zm-9.355 5.96 8.355 4.172v8.344L2.645 16.55zm18.71 0v8.344l-8.355 4.172V12.378z" />
        </svg>
      );

    case "Gemini AI / LLMs":
      return <Bot className="h-6 w-6" style={{ color }} />;

    case "Postman":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.6 15.3l-4.1-4.1a.996.996 0 010-1.41l4.1-4.1a.996.996 0 111.41 1.41L11.71 12l3.3 3.29c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0z" />
        </svg>
      );

    case "Docker":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M22.5 10.5c-.3-.2-1.2-.4-2.3-.1-.3-.6-.8-1.2-1.5-1.6l-.6-.3-.4.5c-.4.6-.6 1.4-.6 2.2 0 .2 0 .4.1.6-1 .2-2 .8-2.5 1.6-.3-.1-.6-.1-.9-.1H3.6c-.6 0-1.1.2-1.5.6-.4.4-.6 1-.6 1.6 0 2.2 1.8 4.6 4.6 5.6 2.3.8 5 .8 7.3 0 2.7-1 4.7-3.3 5.1-6.1.7-.1 1.7-.6 2.3-1.6.4-.7.6-1.5.6-2.3 0-.3 0-.6-.1-.9l-.8-.2zm-15-2h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-6 3h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2z" />
        </svg>
      );

    case "Git & GitHub":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={color}>
          <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.8 4.6l2.7 2.7c.6-.2 1.4 0 1.9.5.5.5.7 1.3.5 1.9l2.6 2.6c.6-.2 1.4 0 1.9.5.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.6-.6-.7-1.4-.5-2.1L12.5 11v5.2c.2.1.4.3.5.5.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8.2-.2.4-.4.7-.5V10.8c-.2-.1-.5-.3-.7-.5-.6-.6-.7-1.4-.5-2.1L7 5.5 2.4 10.1c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.6 0-2.2z" />
        </svg>
      );

    default:
      return <Code2 className="h-6 w-6" style={{ color }} />;
  }
}

export default function Skills() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grouped" | "grid">("grouped");

  const filteredSkills = useMemo(() => {
    return SKILLS.filter((s) => {
      const matchesFilter = filter === "All" || s.category === filter;
      const matchesSearch =
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.tag && s.tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery]);

  const activeCategories = useMemo(() => {
    if (filter !== "All") return [filter];
    return ["Frontend", "Backend", "Database", "AI & Tools", "DevOps"] as const;
  }, [filter]);

  return (
    <section id="skills" className="relative section-pad py-24 sm:py-32 overflow-hidden">
      {/* Section Header */}
      <SectionHeading
        eyebrow="TECHNICAL ARSENAL"
        title={
          <>
            Technologies I <span className="gradient-text">Command & Ship</span>
          </>
        }
        subtitle="A versatile production-tested stack — from reactive modern frontends to high-scale backend services and AI integrations."
      />

      {/* Controls Bar: Category Filters + Search + View Toggle */}
      <div className="mx-auto mt-12 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 sm:py-0 w-full md:w-auto flex-nowrap sm:flex-wrap justify-start sm:justify-center">
          {CATEGORIES.map((cat) => {
            const isActive = filter === cat;
            const count =
              cat === "All" ? SKILLS.length : SKILLS.filter((s) => s.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative flex items-center gap-1.5 rounded-full px-3.5 sm:px-4 py-1.5 text-xs font-medium transition-all duration-300 shrink-0 ${
                  isActive
                    ? "text-white dark:text-ink-900 font-semibold shadow-md dark:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    : "glass text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skills-filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 dark:from-accent-300 dark:via-neon-blue dark:to-accent-400"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
                <span
                  className={`relative z-10 text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-white dark:bg-ink-900/20 dark:text-ink-900 font-bold" : "bg-slate-200 text-slate-600 dark:bg-white/10 dark:text-white/50"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & View Switcher */}
        <div className="flex items-center gap-2.5 w-full md:w-auto justify-center">
          {/* Quick Search */}
          <div className="relative flex-1 md:w-56">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 dark:text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack..."
              className="w-full pl-8 pr-3 py-1.5 rounded-full glass text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/40 focus:outline-none focus:border-cyan-500/60 dark:focus:border-accent-400/50 transition-all font-mono"
            />
          </div>

          {/* View Toggle */}
          <div className="flex items-center rounded-full glass p-1 border border-slate-200/90 dark:border-white/10">
            <button
              onClick={() => setViewMode("grouped")}
              className={`p-1.5 rounded-full text-xs transition-all ${
                viewMode === "grouped"
                  ? "bg-cyan-500/15 text-cyan-700 dark:bg-accent-400/20 dark:text-accent-300 shadow-sm"
                  : "text-slate-400 dark:text-white/40 hover:text-slate-800 dark:hover:text-white"
              }`}
              title="Categorized View"
            >
              <Layers className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded-full text-xs transition-all ${
                viewMode === "grid"
                  ? "bg-cyan-500/15 text-cyan-700 dark:bg-accent-400/20 dark:text-accent-300 shadow-sm"
                  : "text-slate-400 dark:text-white/40 hover:text-slate-800 dark:hover:text-white"
              }`}
              title="Compact Grid View"
            >
              <LayoutGrid className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Main Content Area */}
      <div className="mx-auto mt-10 max-w-6xl">
        {filteredSkills.length === 0 ? (
          <div className="text-center py-16 glass rounded-2xl border border-slate-200/90 dark:border-white/10">
            <p className="text-sm font-mono text-slate-500 dark:text-white/50">No technologies matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setFilter("All");
              }}
              className="mt-3 text-xs text-cyan-600 dark:text-accent-300 hover:underline font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          /* ================================================================= */
          /* GRID VIEW MODE                                                    */
          /* ================================================================= */
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            <AnimatePresence>
              {filteredSkills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* ================================================================= */
          /* GROUPED CATEGORIZED VIEW MODE                                     */
          /* ================================================================= */
          <div className="space-y-10">
            {activeCategories.map((catKey) => {
              const catSkills = filteredSkills.filter((s) => s.category === catKey);
              if (catSkills.length === 0) return null;
              const meta = CATEGORY_META[catKey];
              const Icon = meta?.icon || Code2;

              return (
                <motion.div
                  key={catKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5 }}
                  className="glass rounded-2xl p-5 sm:p-6 border border-slate-200/90 dark:border-white/10"
                >
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-200/80 dark:border-white/10">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] ${meta?.color || "text-cyan-600 dark:text-accent-300"} border border-slate-200 dark:border-white/10 shadow-sm`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                          {meta?.title || catKey}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-white/50">{meta?.subtitle}</p>
                      </div>
                    </div>

                    <span className="self-start sm:self-auto text-xs font-mono text-slate-500 dark:text-white/40 bg-slate-100 dark:bg-white/[0.03] px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/5">
                      {catSkills.length} Technologies
                    </span>
                  </div>

                  {/* Category Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {catSkills.map((skill, i) => (
                      <SkillCard key={skill.name} skill={skill} index={i} compact />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Skill Card Component                                                       */
/* -------------------------------------------------------------------------- */
function SkillCard({
  skill,
  index,
  compact = false,
}: {
  skill: Skill;
  index: number;
  compact?: boolean;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 15 }}
      transition={{ duration: 0.3, delay: (index % 6) * 0.03 }}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className={`group relative rounded-2xl glass p-3 sm:p-4 text-center border border-slate-200/90 dark:border-white/10 hover:border-cyan-400/40 dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between ${
        compact ? "bg-white/80 dark:bg-white/[0.02]" : ""
      }`}
    >
      {/* Dynamic Hover Glow in Skill Color */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(120px circle at 50% 0%, ${skill.color}25, transparent 70%)`,
        }}
      />

      <div>
        {/* Tech Icon Box */}
        <div
          className="relative mx-auto mb-2 sm:mb-2.5 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110 shadow-sm"
          style={{
            background: `${skill.color}15`,
            border: `1px solid ${skill.color}35`,
          }}
        >
          <TechIcon name={skill.name} color={skill.color} />
        </div>

        {/* Skill Name */}
        <h4 className="relative text-xs sm:text-sm font-semibold text-slate-900 dark:text-white tracking-tight truncate">
          {skill.name}
        </h4>

        {/* Sub-tag */}
        {skill.tag && (
          <span className="relative mt-0.5 inline-block text-[10px] font-mono text-slate-500 dark:text-white/40 truncate max-w-full">
            {skill.tag}
          </span>
        )}
      </div>

      {/* Proficiency Level Bar */}
      <div className="mt-3">
        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1 + (index % 6) * 0.03,
              ease: "easeOut",
            }}
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
            }}
          />
        </div>
        <div className="mt-1 flex items-center justify-between text-[10px] font-mono text-slate-400 dark:text-white/40">
          <span>Proficiency</span>
          <span className="font-semibold text-slate-700 dark:text-white/70">{skill.level}%</span>
        </div>
      </div>
    </motion.div>
  );
}
