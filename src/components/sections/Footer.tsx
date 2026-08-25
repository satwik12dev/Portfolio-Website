import { Github, Linkedin, Mail, ArrowUp, Hexagon } from 'lucide-react';
import { PROFILE, NAV_ITEMS, type NavItem } from '../../constants/data';

export default function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/10 section-pad py-12 overflow-hidden w-full max-w-[100vw]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 dark:via-accent-400/50 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          {/* brand */}
          <button onClick={() => go('home')} className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/15 to-purple-500/20 dark:from-accent-400/20 dark:to-neon-blue/20 border border-slate-300 dark:border-white/10 shadow-sm">
              <Hexagon className="h-5 w-5 text-cyan-600 dark:text-accent-300" />
            </span>
            <span className="font-bold text-slate-900 dark:text-white">
              {PROFILE.name.split(' ')[0]}
              <span className="text-cyan-600 dark:text-accent-300">.</span>
            </span>
          </button>

          {/* nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 gap-y-2">
            {NAV_ITEMS.map((n: NavItem) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-xs sm:text-sm text-slate-600 dark:text-white/55 hover:text-cyan-600 dark:hover:text-accent-200 transition-colors font-medium px-1.5 py-1 rounded-lg active:scale-95"
              >
                {n.label}
              </button>
            ))}
          </nav>

          {/* socials */}
          <div className="flex gap-2.5 sm:gap-3">
            {[
              { href: PROFILE.github, icon: Github, label: 'GitHub' },
              { href: "https://www.linkedin.com/in/satwik-12-dev/", icon: Linkedin, label: 'LinkedIn' },
              {
                href: "https://wa.me/918126666980?text=Hi%20Satwik%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%21",
                icon: ({ className }: { className?: string }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.677.15-.2.301-.777.979-.953 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.675-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.201-.301.301-.501.101-.201.05-.376-.025-.527-.075-.15-.677-1.633-.928-2.235-.244-.586-.493-.506-.677-.516-.176-.008-.376-.01-.577-.01-.201 0-.527.075-.802.376s-1.053 1.029-1.053 2.509 1.078 2.91 1.229 3.111c.15.201 2.122 3.24 5.14 4.544.719.311 1.28.497 1.718.636.722.23 1.378.198 1.898.12.579-.088 1.78-.727 2.031-1.43.25-.703.25-1.305.175-1.43-.075-.125-.276-.201-.577-.351z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 21.95a.75.75 0 0 0 .937.937l4.782-1.388A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zM3.5 12c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5a8.47 8.47 0 0 1-4.457-1.258.75.75 0 0 0-.54-.087l-3.535 1.026 1.026-3.535a.75.75 0 0 0-.087-.54A8.47 8.47 0 0 1 3.5 12z" />
                  </svg>
                ),
                label: 'WhatsApp',
              },
              { href: `mailto:${PROFILE.email}`, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl glass text-slate-700 dark:text-white/70 transition-all hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/40 dark:hover:border-emerald-400/40 hover:-translate-y-0.5 active:scale-95"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 dark:border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500 dark:text-white/40">
            © {new Date().getFullYear()} {PROFILE.name}. Crafted with React,
            Three.js & Framer Motion.
          </p>
          <button
            onClick={() => go('home')}
            className="group inline-flex items-center gap-2 text-xs text-slate-500 dark:text-white/50 hover:text-cyan-600 dark:hover:text-accent-200 transition-colors font-medium"
          >
            Back to top
            <span className="grid h-8 w-8 place-items-center rounded-lg glass transition-all group-hover:-translate-y-0.5 group-hover:border-cyan-500/40 dark:group-hover:border-accent-400/40">
              <ArrowUp className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
