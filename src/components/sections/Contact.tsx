import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  Clock,
  MessageSquare,
  User,
  AtSign,
  ShieldCheck,
  Zap,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import { PROFILE } from "../../constants/data";
import SectionHeading from "../ui/SectionHeading";
import { cn } from "../../utils/cn";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.677.15-.2.301-.777.979-.953 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.675-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.201-.301.301-.501.101-.201.05-.376-.025-.527-.075-.15-.677-1.633-.928-2.235-.244-.586-.493-.506-.677-.516-.176-.008-.376-.01-.577-.01-.201 0-.527.075-.802.376s-1.053 1.029-1.053 2.509 1.078 2.91 1.229 3.111c.15.201 2.122 3.24 5.14 4.544.719.311 1.28.497 1.718.636.722.23 1.378.198 1.898.12.579-.088 1.78-.727 2.031-1.43.25-.703.25-1.305.175-1.43-.075-.125-.276-.201-.577-.351z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 21.95a.75.75 0 0 0 .937.937l4.782-1.388A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zM3.5 12c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5a8.47 8.47 0 0 1-4.457-1.258.75.75 0 0 0-.54-.087l-3.535 1.026 1.026-3.535a.75.75 0 0 0-.087-.54A8.47 8.47 0 0 1 3.5 12z"
      />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [localTime, setLocalTime] = useState<string>("");

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const timeString = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(new Date());
      setLocalTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PROFILE.phone || "8126666980");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  // ---------------- Validation ----------------
  const validate = () => {
    const e: Record<string, string> = {};

    if (!form.name.trim()) {
      e.name = "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }

    if (form.message.trim().length < 10) {
      e.message = "Message must be at least 10 characters long.";
    }

    return e;
  };

  // ---------------- Submit ----------------
  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    const e = validate();
    setErrors(e);

    if (Object.keys(e).length > 0) return;

    try {
      setLoading(true);

      const response = await fetch(
        "https://email-server-1-e9ua.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setSent(true);
      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSent(false);
      }, 5000);
    } catch (error: any) {
      alert(error.message || "Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative section-pad py-24 sm:py-32 overflow-hidden">
      {/* Dynamic Ambient Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-48 h-[500px] w-[500px] rounded-full bg-cyan-500/10 dark:bg-accent-400/8 blur-[170px]" />
        <div className="absolute bottom-1/4 -left-48 h-[500px] w-[500px] rounded-full bg-purple-500/10 dark:bg-purple-500/8 blur-[170px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Direct Transmission"
          title={
            <>
              Let's build something <span className="gradient-text">extraordinary</span>
            </>
          }
          subtitle="Open for full-stack engineering roles, high-concurrency backend architecture, and collaborative projects."
        />

        {/* Global Dispatch Status Bar */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white/80 dark:bg-white/[0.02] border border-slate-200/90 dark:border-white/10 p-3 sm:p-4 backdrop-blur-xl flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-slate-800 dark:text-white/80 font-semibold">
              Live Inbox Available
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-white/50">
            <span className="flex items-center gap-1.5 font-medium">
              <Globe className="h-3.5 w-3.5 text-cyan-600 dark:text-accent-400" />
              <span>IST (UTC+5:30):</span>
              <span className="text-slate-800 dark:text-white/80 font-bold">{localTime || "11:58 AM"}</span>
            </span>

            <span className="hidden sm:flex items-center gap-1.5 border-l border-slate-200 dark:border-white/10 pl-4 font-medium">
              <Clock className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Response: &lt; 12 hrs</span>
            </span>
          </div>
        </div>

        {/* Main Console Bento Layout */}
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:gap-8 lg:grid-cols-12 items-start">
          
          {/* ===================================================================== */}
          {/* LEFT COLUMN: Direct Channels & Phone / Email (5 cols)                 */}
          {/* ===================================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 lg:col-span-5"
          >
            {/* Channels Box */}
            <div className="relative rounded-2xl bg-white/80 dark:bg-white/[0.02] border border-slate-200/90 dark:border-white/10 p-4 sm:p-6 backdrop-blur-xl shadow-sm shadow-slate-200/50 dark:shadow-[0_15px_35px_rgba(0,0,0,0.5)] overflow-hidden">
              {/* Subtle top ambient line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 dark:via-accent-400/50 to-transparent" />

              <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-700 dark:text-accent-300 uppercase tracking-wider mb-2 font-semibold">
                <Zap className="h-4 w-4" />
                <span>Direct Contact Channels</span>
              </div>

              <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                Let's discuss your next project.
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-white/65 leading-relaxed">
                Feel free to call, email, or send a direct message. I am actively looking for engineering roles and collaborations.
              </p>

              {/* Prominent WhatsApp Me Quick Banner Button */}
              <a
                href="https://wa.me/918126666980?text=Hi%20Satwik%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%21"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-between rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white p-3 sm:p-3.5 shadow-md shadow-emerald-900/20 hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300 group active:scale-[0.98]"
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-xl bg-white/20 backdrop-blur-md group-hover:scale-105 transition-transform shadow-inner">
                    <WhatsAppIcon className="h-5 w-5 fill-white" />
                  </span>
                  <div>
                    <span className="text-xs sm:text-sm font-bold tracking-tight block">
                      WhatsApp Me Directly
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-emerald-100/90 block">
                      Instant message • +91 8126666980
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold bg-white/15 px-2.5 py-1 rounded-lg border border-white/25 group-hover:bg-white/25 transition-colors">
                  <span>Chat</span>
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>

              {/* Direct Channels Cards */}
              <div className="mt-4 space-y-2.5 sm:space-y-3">
                {/* Phone Card */}
                <div className="group flex items-center justify-between rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 p-3 sm:p-3.5 transition-all hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:border-cyan-500/40 dark:hover:border-accent-400/40">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <span className="grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-xl bg-cyan-50 dark:bg-accent-400/10 border border-cyan-200 dark:border-accent-400/30 text-cyan-600 dark:text-accent-300 group-hover:scale-105 transition-transform">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-white/40 block font-medium">Phone / WhatsApp</span>
                      <a
                        href="tel:+918126666980"
                        className="text-xs sm:text-sm font-mono text-slate-900 dark:text-white/90 truncate block hover:text-cyan-600 dark:hover:text-accent-300 transition-colors font-semibold"
                      >
                        +91 8126666980
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                    <a
                      href="https://wa.me/918126666980?text=Hi%20Satwik%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 text-xs font-mono font-semibold transition-all active:scale-95 shadow-sm"
                      title="Open WhatsApp Chat"
                      aria-label="Chat on WhatsApp"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5 fill-current" />
                      <span className="hidden sm:inline">Chat</span>
                    </a>

                    <button
                      onClick={handleCopyPhone}
                      className="p-2 rounded-lg bg-slate-200/80 dark:bg-white/[0.05] hover:bg-slate-300 dark:hover:bg-white/15 text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-all active:scale-95"
                      title="Copy Phone Number"
                      aria-label="Copy Phone Number"
                    >
                      {copiedPhone ? (
                        <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Email Card with 1-Click Copy */}
                <div className="group flex items-center justify-between rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 p-3 sm:p-3.5 transition-all hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:border-cyan-500/40 dark:hover:border-accent-400/40">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <span className="grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-xl bg-cyan-50 dark:bg-accent-400/10 border border-cyan-200 dark:border-accent-400/30 text-cyan-600 dark:text-accent-300 group-hover:scale-105 transition-transform">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-white/40 block font-medium">Primary Email</span>
                      <a
                        href={`mailto:${PROFILE.email}`}
                        className="text-xs sm:text-sm font-mono text-slate-900 dark:text-white/90 truncate block hover:text-cyan-600 dark:hover:text-accent-300 transition-colors font-semibold"
                      >
                        {PROFILE.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-200/80 dark:bg-white/[0.05] hover:bg-slate-300 dark:hover:bg-white/15 text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-all shrink-0 ml-2 active:scale-95"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Location Card */}
                <div className="flex items-center gap-2.5 sm:gap-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 p-3 sm:p-3.5">
                  <span className="grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-xl bg-cyan-50 dark:bg-accent-400/10 border border-cyan-200 dark:border-accent-400/30 text-cyan-600 dark:text-accent-300">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-white/40 block font-medium">Location</span>
                    <span className="text-xs sm:text-sm font-mono text-slate-900 dark:text-white/90 font-semibold">
                      {PROFILE.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social & Chat Links Row */}
              <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-200 dark:border-white/10 grid grid-cols-3 gap-2 sm:gap-2.5">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 py-2.5 text-xs font-mono text-slate-700 dark:text-white/70 transition-all hover:bg-slate-100 dark:hover:bg-white/[0.08] hover:border-cyan-500/40 dark:hover:border-accent-400/40 hover:text-cyan-700 dark:hover:text-white font-medium shadow-sm active:scale-95"
                >
                  <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-600 dark:text-accent-300" />
                  <span className="truncate">GitHub</span>
                </a>

                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 py-2.5 text-xs font-mono text-slate-700 dark:text-white/70 transition-all hover:bg-slate-100 dark:hover:bg-white/[0.08] hover:border-cyan-500/40 dark:hover:border-accent-400/40 hover:text-cyan-700 dark:hover:text-white font-medium shadow-sm active:scale-95"
                >
                  <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-600 dark:text-accent-300" />
                  <span className="truncate">LinkedIn</span>
                </a>

                <a
                  href="https://wa.me/918126666980?text=Hi%20Satwik%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 py-2.5 text-xs font-mono text-emerald-700 dark:text-emerald-300 transition-all hover:bg-emerald-100 dark:hover:bg-emerald-500/20 hover:border-emerald-400 font-semibold shadow-sm active:scale-95"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-emerald-600 dark:fill-emerald-400" />
                  <span className="truncate">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Security Guarantee Note */}
            <div className="rounded-xl bg-slate-100/80 dark:bg-white/[0.015] border border-slate-200 dark:border-white/10 p-3 sm:p-3.5 flex items-center gap-2.5 sm:gap-3 text-xs font-mono text-slate-500 dark:text-white/50 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Encrypted transmission via HTTPS email microservice.</span>
            </div>
          </motion.div>

          {/* ===================================================================== */}
          {/* RIGHT COLUMN: Terminal Message Console (7 cols)                       */}
          {/* ===================================================================== */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl bg-white/80 dark:bg-white/[0.02] border border-slate-200/90 dark:border-white/10 p-4 sm:p-8 backdrop-blur-xl space-y-4 sm:space-y-5 lg:col-span-7 shadow-sm shadow-slate-200/50 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Ambient Top Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/60 dark:via-cyan-400/60 to-transparent" />

            {/* Header Title inside form */}
            <div className="pb-1">
              <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-white/50 font-mono mt-0.5">
                Fill in the details below to dispatch directly to my inbox.
              </p>
            </div>

            {/* Name and Email in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-mono text-slate-600 dark:text-white/60 flex items-center gap-1.5 font-semibold"
                >
                  <User className="h-3.5 w-3.5 text-cyan-600 dark:text-accent-400" />
                  <span>Your Name</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  placeholder="e.g. Alex Mercer"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={cn(
                    "w-full rounded-xl bg-slate-50 dark:bg-white/[0.03] border px-3.5 sm:px-4 py-2.5 text-base sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/25 outline-none transition-all focus:border-cyan-500/70 dark:focus:border-accent-400/70 focus:bg-white dark:focus:bg-white/[0.06] focus:shadow-md",
                    errors.name ? "border-red-500/50" : "border-slate-200 dark:border-white/10"
                  )}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500 dark:text-red-400 font-mono">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-mono text-slate-600 dark:text-white/60 flex items-center gap-1.5 font-semibold"
                >
                  <AtSign className="h-3.5 w-3.5 text-cyan-600 dark:text-accent-400" />
                  <span>Your Email</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  placeholder="e.g. alex@company.com"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={cn(
                    "w-full rounded-xl bg-slate-50 dark:bg-white/[0.03] border px-3.5 sm:px-4 py-2.5 text-base sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/25 outline-none transition-all focus:border-cyan-500/70 dark:focus:border-accent-400/70 focus:bg-white dark:focus:bg-white/[0.06] focus:shadow-md",
                    errors.email ? "border-red-500/50" : "border-slate-200 dark:border-white/10"
                  )}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 dark:text-red-400 font-mono">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-mono text-slate-600 dark:text-white/60 flex items-center gap-1.5 font-semibold"
                >
                  <MessageSquare className="h-3.5 w-3.5 text-cyan-600 dark:text-accent-400" />
                  <span>Message Payload</span>
                </label>
                <span className="text-[10px] font-mono text-slate-400 dark:text-white/35">
                  {form.message.length} chars
                </span>
              </div>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                placeholder="Describe your role, project details, or questions..."
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={cn(
                  "w-full rounded-xl bg-slate-50 dark:bg-white/[0.03] border px-3.5 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/25 outline-none resize-none transition-all focus:border-cyan-500/70 dark:focus:border-accent-400/70 focus:bg-white dark:focus:bg-white/[0.06] focus:shadow-md",
                  errors.message ? "border-red-500/50" : "border-slate-200 dark:border-white/10"
                )}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500 dark:text-red-400 font-mono">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="relative w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-accent-300 dark:to-neon-blue text-white dark:text-ink-950 font-bold text-sm py-3.5 px-6 transition-all duration-300 flex items-center justify-center gap-2 shadow-md dark:shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:shadow-lg dark:hover:shadow-[0_0_35px_rgba(34,211,238,0.55)] disabled:opacity-60 active:scale-[0.99] group"
            >
              {loading ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white dark:border-ink-950 border-t-transparent" />
                  <span>Transmitting Message...</span>
                </>
              ) : sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Message Delivered to Inbox!</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span>Dispatch Message</span>
                </>
              )}
            </button>

            {/* Success Toast */}
            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="rounded-xl border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 p-3.5 text-center text-xs font-mono text-emerald-700 dark:text-emerald-300 flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>Transmission confirmed! I will review your message and reply promptly.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
