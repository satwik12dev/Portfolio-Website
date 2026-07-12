import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: string;
};

export default function TiltCard({
  children,
  className = '',
  intensity = 12,
  glowColor = 'rgba(34,211,238,0.35)',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glow, setGlow] = useState({ x: 50, y: 50, on: false });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * intensity;
    const ry = (px - 0.5) * intensity;
    setTransform(
      `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.03,1.03,1.03)`
    );
    setGlow({ x: px * 100, y: py * 100, on: true });
  };

  const handleLeave = () => {
    setTransform('perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
    setGlow((g) => ({ ...g, on: false }));
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform, transformStyle: 'preserve-3d' }}
      className={`relative transition-[transform] duration-200 ease-out ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: glow.on ? 1 : 0,
          background: `radial-gradient(420px circle at ${glow.x}% ${glow.y}%, ${glowColor}, transparent 45%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
