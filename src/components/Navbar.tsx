import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Hexagon } from 'lucide-react';
import { NAV_ITEMS, PROFILE } from '../constants/data';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { cn } from '../utils/cn';
import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-ink-900/70 backdrop-blur-xl border-b border-white/10 py-2.5'
          : 'bg-transparent py-4'
      )}
    >
      <nav className="section-pad flex items-center justify-between">
        <button
          onClick={() => go('home')}
          className="group flex items-center gap-2"
          aria-label="Go to home"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-400/20 to-neon-blue/20 border border-white/10">
            <Hexagon className="h-5 w-5 text-accent-300 transition-transform group-hover:rotate-90 duration-500" />
          </span>
          <span className="font-semibold tracking-tight">
            {PROFILE.name.split(' ')[0]}
            <span className="text-accent-300">.</span>
          </span>
        </button>

        {/* desktop */}
        <ul className="hidden lg:flex items-center gap-1 rounded-full glass px-2 py-1.5">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className={cn(
                  'relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                  activeId === item.id
                    ? 'text-ink-900'
                    : 'text-white/70 hover:text-white'
                )}
              >
                {activeId === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-300 to-neon-blue"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <button onClick={() => go('contact')} className="btn-primary !py-2 !px-5">
            Let's Talk
          </button>
        </div>

        {/* mobile toggle */}
        <button
          className="lg:hidden grid h-10 w-10 place-items-center rounded-xl glass text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
  {open && (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md lg:hidden"
      />

      {/* Mobile Menu */}
      <motion.div
  initial={{ x: "100%" }}
  animate={{ x: 0 }}
  exit={{ x: "100%" }}
  transition={{
    type: "spring",
    stiffness: 250,
    damping: 30,
  }}
  className="
    fixed
    top-0
    right-0
    z-50
    h-screen
    w-[88%]
    max-w-sm
    overflow-hidden
    border-l
    border-white/10
    bg-[#060816]/95
    backdrop-blur-3xl
    shadow-[0_0_80px_rgba(0,0,0,.6)]
    lg:hidden
  "
>
  {/* Animated Background */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
    <div className="absolute bottom-0 -left-32 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
  </div>

  <div className="relative flex h-full flex-col">

    {/* Header */}
    <div className="flex items-center justify-between border-b border-white/10 p-6">

      <div className="flex items-center gap-4">

        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-black font-bold text-xl shadow-lg">
          S
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">
            {PROFILE.name}
          </h2>

          <p className="text-sm text-cyan-300">
            Full Stack Developer
          </p>
        </div>

      </div>

      <button
        onClick={() => setOpen(false)}
        className="rounded-xl bg-white/5 p-2 hover:bg-white/10 transition"
      >
        <X className="h-5 w-5 text-white" />
      </button>

    </div>

    {/* Navigation */}
    <div className="flex-1 px-5 py-8 overflow-y-auto">

      {NAV_ITEMS.map((item, index) => (

        <motion.button
          key={item.id}
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: index * 0.08,
          }}
          whileHover={{
            x: 6,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.97,
          }}
          onClick={() => go(item.id)}
          className={cn(
            "group relative mb-4 flex w-full items-center rounded-2xl px-5 py-4 transition-all duration-300",

            activeId === item.id
              ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-xl"
              : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
          )}
        >
          {activeId === item.id && (
            <span className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-white" />
          )}

          <span className="text-lg font-medium">
            {item.label}
          </span>

        </motion.button>

      ))}

    </div>

    {/* Bottom */}

    <div className="border-t border-white/10 p-6">

      <button
        onClick={() => go("contact")}
        className="btn-primary w-full justify-center"
      >
        Let's Build Together 🚀
      </button>

      <div className="mt-6 flex justify-center gap-5">

        <a
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-white/5 p-3 hover:bg-cyan-500 hover:text-black transition"
        >
          <Github className="h-5 w-5" />
        </a>

        <a
          href={PROFILE.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-white/5 p-3 hover:bg-cyan-500 hover:text-black transition"
        >
          <Linkedin className="h-5 w-5" />
        </a>

        <a
          href={`mailto:${PROFILE.email}`}
          className="rounded-xl bg-white/5 p-3 hover:bg-cyan-500 hover:text-black transition"
        >
          <Mail className="h-5 w-5" />
        </a>

      </div>

      <p className="mt-6 text-center text-xs text-white/40">
        Crafted with ❤️ by Satwik
      </p>

    </div>

  </div>

</motion.div>
    </>
  )}
</AnimatePresence>
    </motion.header>
  );
}
