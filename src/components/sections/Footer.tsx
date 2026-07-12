import { Github, Linkedin, Mail, ArrowUp, Hexagon } from 'lucide-react';
import { PROFILE, NAV_ITEMS, type NavItem } from '../../constants/data';

export default function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/10 section-pad py-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/50 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          {/* brand */}
          <button onClick={() => go('home')} className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-400/20 to-neon-blue/20 border border-white/10">
              <Hexagon className="h-5 w-5 text-accent-300" />
            </span>
            <span className="font-semibold">
              {PROFILE.name.split(' ')[0]}
              <span className="text-accent-300">.</span>
            </span>
          </button>

          {/* nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {NAV_ITEMS.map((n: NavItem) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-xs sm:text-sm text-white/55 hover:text-accent-200 transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>

          {/* socials */}
          <div className="flex gap-3">
            {[
              { href: PROFILE.github, icon: Github, label: 'GitHub' },
              { href: "https://www.linkedin.com/in/satwik-12-dev/", icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:satwiksaxena41@gmail.com`, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl glass text-white/70 transition-all hover:text-accent-200 hover:border-accent-400/40 hover:-translate-y-0.5"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {PROFILE.name}. Crafted with React,
            Three.js & Framer Motion.
          </p>
          <button
            onClick={() => go('home')}
            className="group inline-flex items-center gap-2 text-xs text-white/50 hover:text-accent-200 transition-colors"
          >
            Back to top
            <span className="grid h-8 w-8 place-items-center rounded-lg glass transition-all group-hover:-translate-y-0.5 group-hover:border-accent-400/40">
              <ArrowUp className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
