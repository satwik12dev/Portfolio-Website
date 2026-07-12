import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { PROFILE, EDUCATION, ABOUT_STATS } from '../../constants/data';
import SectionHeading from '../ui/SectionHeading';
import AnimatedCounter from '../ui/AnimatedCounter';
import { useIsMobile } from '../../hooks/useIsMobile';

const SceneCanvas = lazy(() => import('../three/SceneCanvas'));
const AboutScene = lazy(() => import('../three/AboutScene'));

export default function About() {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="relative section-pad py-24 sm:py-32">
      <SectionHeading
        eyebrow="About Me"
        title={
          <>
            Turning ideas into <span className="gradient-text">interactive reality</span>
          </>
        }
        subtitle="A passionate developer blending engineering rigor with creative design to ship products people love."
      />

      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        {/* 3D illustration */}
        <div className="order-1 lg:order-2 h-[320px] sm:h-[400px]">
          <Suspense fallback={null}>
            <SceneCanvas cameraPosition={[0, 0, 4.5]} dpr={isMobile ? [1, 1.2] : [1, 1.8]}>
              <AboutScene />
            </SceneCanvas>
          </Suspense>
        </div>

        {/* content */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <div className="mb-4 flex items-center gap-2 text-accent-300">
              <Sparkles className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">Who I Am</span>
            </div>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              I'm {PROFILE.name}, a {PROFILE.title.toLowerCase()} based in {PROFILE.location}.
              I specialize in building end-to-end web applications — from pixel-perfect,
              performant frontends with React and Three.js to robust, scalable backends
              with Spring Boot and Node.js. I care deeply about motion, accessibility,
              and the small details that make an interface feel alive.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-white/50">
              <MapPin className="h-4 w-4 text-accent-300" />
              {PROFILE.location}
            </div>
          </motion.div>

          {/* stats */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
            {ABOUT_STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-xl p-4 text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  <AnimatedCounter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-[11px] sm:text-xs text-white/50">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* education */}
          <div className="mt-6 space-y-3">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-xl p-4 sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent-400/10 border border-accent-400/20">
                    <GraduationCap className="h-5 w-5 text-accent-300" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">{edu.degree}</h4>
                    <p className="text-xs sm:text-sm text-white/60">
                      {edu.school} · <span className="text-accent-300/80">{edu.period}</span>
                    </p>
                    <p className="mt-1 text-xs text-white/45 leading-relaxed">{edu.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
