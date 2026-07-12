import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  FolderGit2,
  Mail,
} from "lucide-react";

import { PROFILE } from "../../constants/data";
import { useTypewriter } from "../../hooks/useTypewriter";
import { useIsMobile } from "../../hooks/useIsMobile";

const SceneCanvas = lazy(() => import("../three/SceneCanvas"));
const ParticleField = lazy(() => import("../three/ParticleField"));

export default function Hero() {
  const typed = useTypewriter(PROFILE.roles);
  const isMobile = useIsMobile(768);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      {/* ==================== */}
      {/* Background Canvas */}
      {/* ==================== */}

      <div className="absolute inset-0 h-full w-full">
        <Suspense fallback={null}>
          <SceneCanvas
            cameraPosition={[0, 0, 7]}
            dpr={isMobile ? [1, 1.2] : [1, 2]}
          >
            <ParticleField
              count={isMobile ? 250 : 1800}
              size={isMobile ? 0.02 : 0.012}
              color="#22d3ee"
            />
          </SceneCanvas>
        </Suspense>

        <div className="pointer-events-none absolute inset-0 bg-radial-fade" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-900 to-transparent" />
      </div>

      {/* ==================== */}
      {/* Hero Content */}
      {/* ==================== */}

      <div className="relative z-10 flex min-h-[100svh] w-full items-center justify-center px-6 pt-24 sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
          {/* Badge */}

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-xs text-white/70 sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            Available for Opportunities & Freelancing
          </motion.span>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              mx-auto
              max-w-6xl
              text-4xl
              font-extrabold
              leading-tight
              tracking-tight
              text-white

              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
            "
          >
            Hi, I'm{" "}

            <span className="gradient-text break-words">
              {PROFILE.name}
            </span>
          </motion.h1>

          {/* Typewriter */}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="mt-5 flex min-h-[40px] items-center justify-center"
          >
            <span className="font-mono text-lg text-accent-200 sm:text-2xl md:text-3xl">
              {typed}

              <span className="ml-1 inline-block h-7 w-[2px] animate-pulse bg-accent-300 align-middle" />
            </span>
          </motion.div>
                    {/* Introduction */}

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="
              mt-6
              max-w-3xl
              px-2
              text-base
              leading-7
              text-white/70

              sm:text-lg
              md:text-xl
            "
          >
            {PROFILE.intro}
          </motion.p>

          {/* Action Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
            className="
              mt-10
              flex
              w-full
              max-w-xl
              flex-col
              gap-4

              sm:flex-row
              sm:flex-wrap
              sm:justify-center
            "
          >
            {/* View Projects */}

            <button
              onClick={() => scrollTo("projects")}
              className="btn-primary w-full sm:w-auto"
            >
              <FolderGit2 className="h-5 w-5" />

              <span>View Projects</span>
            </button>

            {/* Resume */}

            <a
              href="Resume.pdf"
              download
              className="btn-ghost w-full sm:w-auto"
            >
              <Download className="h-5 w-5" />

              <span>Download Resume</span>
            </a>

            {/* Contact */}

            <button
              onClick={() => scrollTo("contact")}
              className="btn-ghost w-full sm:w-auto"
            >
              <Mail className="h-5 w-5" />

              <span>Contact Me</span>
            </button>
          </motion.div>

          {/* Optional Stats */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.9,
            }}
            className="
              mt-12
              grid
              w-full
              max-w-4xl
              grid-cols-2
              gap-5

              md:grid-cols-4
            "
          >
            <div className="glass rounded-xl p-5">
              <h2 className="text-2xl font-bold text-accent-300">
                10+
              </h2>

              <p className="mt-1 text-sm text-white/60">
                Technologies
              </p>
            </div>

            <div className="glass rounded-xl p-5">
              <h2 className="text-2xl font-bold text-accent-300">
                8+
              </h2>

              <p className="mt-1 text-sm text-white/60">
                Projects
              </p>
            </div>

            <div className="glass rounded-xl p-5">
              <h2 className="text-2xl font-bold text-accent-300">
                100+
              </h2>

              <p className="mt-1 text-sm text-white/60">
                REST APIs
              </p>
            </div>

            <div className="glass rounded-xl p-5">
              <h2 className="text-2xl font-bold text-accent-300">
                7+
              </h2>

              <p className="mt-1 text-sm text-white/60">
                Certifications
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}