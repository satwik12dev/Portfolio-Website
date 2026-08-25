import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Props = {
  isMobile?: boolean;
  isDark?: boolean;
};

// Generates a smooth circular point alpha texture for crisp, glowing particles
function createCircleTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.9)");
    gradient.addColorStop(0.65, "rgba(255, 255, 255, 0.4)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
  }
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

export default function ParticleField({ isMobile = false, isDark = true }: Props) {
  const groupRef = useRef<THREE.Group>(null);
  const deepStarsRef = useRef<THREE.Points>(null);
  const brightStarsRef = useRef<THREE.Points>(null);
  const dustRef = useRef<THREE.Points>(null);

  const circleTexture = useMemo(() => createCircleTexture(), []);

  // 1. Deep Celestial Starfield
  const deepCount = isMobile ? 1800 : 4500;
  const deepData = useMemo(() => {
    const pos = new Float32Array(deepCount * 3);
    const col = new Float32Array(deepCount * 3);

    for (let i = 0; i < deepCount; i++) {
      const radius = 25 + Math.random() * 55;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const brightness = 0.6 + Math.random() * 0.4;
      const rand = Math.random();

      if (isDark) {
        if (rand > 0.88) {
          // Vibrant Cyan star
          col[i * 3] = 0.22 * brightness;
          col[i * 3 + 1] = 0.88 * brightness;
          col[i * 3 + 2] = 1.0 * brightness;
        } else if (rand > 0.76) {
          // Ethereal Violet / Indigo star
          col[i * 3] = 0.72 * brightness;
          col[i * 3 + 1] = 0.48 * brightness;
          col[i * 3 + 2] = 1.0 * brightness;
        } else if (rand > 0.65) {
          // Warm Sirius Gold
          col[i * 3] = 1.0 * brightness;
          col[i * 3 + 1] = 0.9 * brightness;
          col[i * 3 + 2] = 0.65 * brightness;
        } else {
          // Pure Crystal White
          col[i * 3] = 0.95 * brightness;
          col[i * 3 + 1] = 0.98 * brightness;
          col[i * 3 + 2] = 1.0 * brightness;
        }
      } else {
        // Light mode: Vivid saturated jewel crystals (Sapphire, Electric Cyan, Violet, Emerald)
        if (rand > 0.8) {
          // Electric Cyan
          col[i * 3] = 0.02;
          col[i * 3 + 1] = 0.68;
          col[i * 3 + 2] = 0.88;
        } else if (rand > 0.6) {
          // Sapphire Royal Blue
          col[i * 3] = 0.12;
          col[i * 3 + 1] = 0.38;
          col[i * 3 + 2] = 0.95;
        } else if (rand > 0.4) {
          // Deep Violet
          col[i * 3] = 0.55;
          col[i * 3 + 1] = 0.20;
          col[i * 3 + 2] = 0.92;
        } else if (rand > 0.2) {
          // Emerald Teal
          col[i * 3] = 0.04;
          col[i * 3 + 1] = 0.65;
          col[i * 3 + 2] = 0.52;
        } else {
          // Slate Indigo
          col[i * 3] = 0.25;
          col[i * 3 + 1] = 0.40;
          col[i * 3 + 2] = 0.70;
        }
      }
    }
    return { positions: pos, colors: col };
  }, [deepCount, isDark]);

  // 2. Bright Hero Luminous Stars
  const brightCount = isMobile ? 280 : 850;
  const brightData = useMemo(() => {
    const pos = new Float32Array(brightCount * 3);
    const col = new Float32Array(brightCount * 3);

    const darkPalette = [
      new THREE.Color("#22D3EE"), // Cyan
      new THREE.Color("#38BDF8"), // Bright Sky Blue
      new THREE.Color("#818CF8"), // Soft Indigo
      new THREE.Color("#C084FC"), // Vibrant Purple
      new THREE.Color("#FFFFFF"), // Pure Diamond White
      new THREE.Color("#FDE047"), // Golden Spark
    ];

    const lightPalette = [
      new THREE.Color("#0284C7"), // Deep Sky Blue
      new THREE.Color("#2563EB"), // Royal Blue
      new THREE.Color("#7C3AED"), // Deep Violet
      new THREE.Color("#0891B2"), // Rich Cyan
      new THREE.Color("#E11D48"), // Rose Spark
      new THREE.Color("#D97706"), // Amber Gem
      new THREE.Color("#4338CA"), // Indigo
    ];

    const palette = isDark ? darkPalette : lightPalette;

    for (let i = 0; i < brightCount; i++) {
      const radius = 12 + Math.random() * 32;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return { positions: pos, colors: col };
  }, [brightCount, isDark]);

  // 3. Foreground Floating Interstellar Particles
  const dustCount = isMobile ? 160 : 500;
  const dustData = useMemo(() => {
    const pos = new Float32Array(dustCount * 3);
    const col = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount; i++) {
      const radius = 4 + Math.random() * 16;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      if (isDark) {
        col[i * 3] = 0.25;
        col[i * 3 + 1] = 0.85;
        col[i * 3 + 2] = 0.98;
      } else {
        col[i * 3] = 0.08;
        col[i * 3 + 1] = 0.52;
        col[i * 3 + 2] = 0.90;
      }
    }
    return { positions: pos, colors: col };
  }, [dustCount, isDark]);

  // Dynamic automatic, peaceful celestial rotation & floating wave loop
  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.016;
      groupRef.current.rotation.x = Math.sin(t * 0.012) * 0.04;
    }

    if (deepStarsRef.current) {
      deepStarsRef.current.rotation.y = -t * 0.01;
      deepStarsRef.current.rotation.z = Math.cos(t * 0.015) * 0.03;
    }

    if (brightStarsRef.current) {
      brightStarsRef.current.rotation.y = t * 0.028;
      brightStarsRef.current.rotation.x = Math.sin(t * 0.02) * 0.05;
    }

    if (dustRef.current) {
      dustRef.current.rotation.y = t * 0.04;
      dustRef.current.rotation.z = Math.sin(t * 0.025) * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Deep Celestial Starfield */}
      <points ref={deepStarsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[deepData.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[deepData.colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          map={circleTexture}
          size={isMobile ? (isDark ? 0.045 : 0.07) : (isDark ? 0.06 : 0.09)}
          vertexColors
          transparent
          opacity={isDark ? 0.95 : 0.88}
          sizeAttenuation
          depthWrite={false}
          blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        />
      </points>

      {/* 2. Bright Hero Pulsing Stars */}
      <points ref={brightStarsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[brightData.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[brightData.colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          map={circleTexture}
          size={isMobile ? (isDark ? 0.075 : 0.12) : (isDark ? 0.095 : 0.15)}
          vertexColors
          transparent
          opacity={isDark ? 0.98 : 0.92}
          sizeAttenuation
          depthWrite={false}
          blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        />
      </points>

      {/* 3. Floating Foreground Diamond Dust */}
      <points ref={dustRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dustData.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[dustData.colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          map={circleTexture}
          size={isMobile ? (isDark ? 0.09 : 0.14) : (isDark ? 0.12 : 0.18)}
          vertexColors
          transparent
          opacity={isDark ? 0.88 : 0.85}
          sizeAttenuation
          depthWrite={false}
          blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        />
      </points>
    </group>
  );
}
