import { Suspense, lazy, useEffect, useState } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useTheme } from '../../context/ThemeContext';

const SceneCanvas = lazy(() => import('../three/SceneCanvas'));
const ParticleField = lazy(() => import('../three/ParticleField'));

export default function GlobalBackground() {
  const isMobile = useIsMobile(768);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Interactive mouse cursor spotlight for desktop
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (isMobile) return;
    const handlePointerMove = (e: MouseEvent) => {
      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);
      setMouse({ x, y });
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('mousemove', handlePointerMove);
  }, [isMobile]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-0 overflow-hidden select-none transition-colors duration-700 ${
        isDark ? 'bg-black' : 'bg-[#f4f7fb]'
      }`}
    >
      {/* ======================================================================= */}
      {/* 1. DARK MODE: 3D COSMIC STARFIELD & PARTICLES                           */}
      {/* ======================================================================= */}
      {isDark ? (
        <>
          {/* 3D Particle Starfield Canvas */}
          <div className="absolute inset-0 h-full w-full">
            <Suspense fallback={null}>
              <SceneCanvas
                cameraPosition={[0, 0, 7]}
                dpr={isMobile ? [1, 1.2] : [1, 2]}
              >
                <ParticleField isMobile={isMobile} isDark={true} />
              </SceneCanvas>
            </Suspense>
          </div>

          {/* Dark Starfield Twinkle Dot Matrix */}
          <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.07] pointer-events-none" />

          {/* Deep Space Cosmic Glowing Orbs */}
          <div className="absolute -top-32 left-1/4 h-[550px] w-[550px] rounded-full bg-cyan-500/[0.05] blur-[170px] animate-aurora-1" />
          <div className="absolute top-1/2 -right-20 h-[550px] w-[550px] rounded-full bg-purple-600/[0.05] blur-[180px] animate-aurora-2" />
          <div className="absolute -bottom-32 left-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/[0.04] blur-[160px] animate-aurora-3" />
        </>
      ) : (
        /* ======================================================================= */
        /* 2. LIGHT MODE: DEEP, ELEGANT, CLEARLY VISIBLE DYNAMIC CSS BACKGROUND    */
        /* ======================================================================= */
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top-Left: Deep Radiant Electric Cyan & Sky Blue Aurora Orb */}
          <div className="absolute -top-40 -left-28 h-[750px] w-[750px] rounded-full bg-gradient-to-tr from-cyan-400/40 via-sky-400/35 to-blue-300/20 blur-[130px] animate-aurora-1" />

          {/* Top-Right: Deep Royal Indigo & Lavender Purple Mesh */}
          <div className="absolute -top-20 -right-32 h-[720px] w-[720px] rounded-full bg-gradient-to-bl from-indigo-400/40 via-purple-400/30 to-sky-300/15 blur-[140px] animate-aurora-2" />

          {/* Center-Right: Soft Coral / Rose Amber Radiant Glow */}
          <div className="absolute top-1/3 right-1/6 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-rose-300/30 via-purple-300/25 to-transparent blur-[140px] animate-aurora-3" />

          {/* Center-Left: Luminous Mint & Ocean Teal Atmospheric Cloud */}
          <div className="absolute top-1/2 -left-28 h-[650px] w-[650px] rounded-full bg-gradient-to-tr from-teal-400/35 via-cyan-300/25 to-transparent blur-[135px] animate-aurora-4" />

          {/* Bottom-Center: Deepening Cobalt & Sky Radiant Wash */}
          <div className="absolute -bottom-40 left-1/4 h-[750px] w-[750px] rounded-full bg-gradient-to-t from-sky-400/40 via-indigo-300/30 to-transparent blur-[150px] animate-aurora-1" />

          {/* Clearly Visible Technical Coordinate Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,132,199,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,132,199,0.09)_1px,transparent_1px)] [background-size:40px_40px] animate-pan-grid" />

          {/* Coordinate Intersection Accent Dots */}
          <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1.5px,transparent_1.5px)] [background-size:40px_40px] animate-pan-grid opacity-40" />

          {/* Large Architectural Macro Grid (160px) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.06)_1.5px,transparent_1.5px),linear-gradient(to_bottom,rgba(99,102,241,0.06)_1.5px,transparent_1.5px)] [background-size:160px_160px]" />
        </div>
      )}

      {/* ======================================================================= */}
      {/* 3. INTERACTIVE CURSOR SPOTLIGHT FOLLOW (DESKTOP)                        */}
      {/* ======================================================================= */}
      {!isMobile && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: isDark
              ? `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, rgba(34,211,238,0.04), transparent 70%)`
              : `radial-gradient(550px circle at ${mouse.x}% ${mouse.y}%, rgba(6,182,212,0.22), transparent 65%)`,
          }}
        />
      )}
    </div>
  );
}
