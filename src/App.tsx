import { lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Loader from './components/ui/Loader';
import GlobalBackground from './components/ui/GlobalBackground';

const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Certifications = lazy(() => import('./components/sections/Certifications'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Footer = lazy(() => import('./components/sections/Footer'));

function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden />;
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-black dark:text-white antialiased selection:bg-cyan-500/20 dark:selection:bg-accent-400/20 selection:text-inherit dark:selection:text-white w-full max-w-[100vw] overflow-x-hidden transition-colors duration-300">
        {/* Persistent Three.js Particle Background & Ambient Atmosphere */}
        <GlobalBackground />

        <Navbar />

        <main className="relative z-10 w-full max-w-[100vw] overflow-x-hidden">
          <Suspense fallback={<Loader />}>
            <Hero />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Certifications />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Footer />
          </Suspense>
        </main>
      </div>
    </ThemeProvider>
  );
}
