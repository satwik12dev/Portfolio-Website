import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Torus, Octahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

type Props = {
  isMobile?: boolean;
};

// 1. Digital Topographic Mathematical Wave Mesh
function TopographicWaveGrid({ isMobile = false }: { isMobile?: boolean }) {
  const countX = isMobile ? 35 : 65;
  const countY = isMobile ? 25 : 45;
  const numPoints = countX * countY;

  const pointsRef = useRef<THREE.Points>(null);

  // Generate initial grid coordinates
  const { positions, colors, originalY } = useMemo(() => {
    const pos = new Float32Array(numPoints * 3);
    const col = new Float32Array(numPoints * 3);
    const origY = new Float32Array(numPoints);

    const spacingX = isMobile ? 0.35 : 0.28;
    const spacingZ = isMobile ? 0.35 : 0.28;
    const offsetX = (countX * spacingX) / 2;
    const offsetZ = (countY * spacingZ) / 2;

    let idx = 0;
    for (let ix = 0; ix < countX; ix++) {
      for (let iz = 0; iz < countY; iz++) {
        const x = ix * spacingX - offsetX;
        const z = iz * spacingZ - offsetZ;
        const y = -1.8;

        pos[idx * 3] = x;
        pos[idx * 3 + 1] = y;
        pos[idx * 3 + 2] = z;
        origY[idx] = y;

        // Gradient from cyan to royal blue to soft purple across grid
        const progressX = ix / countX;
        const progressZ = iz / countY;

        col[idx * 3] = 0.05 + progressX * 0.45; // R
        col[idx * 3 + 1] = 0.55 + (1 - progressZ) * 0.35; // G
        col[idx * 3 + 2] = 0.85 + progressX * 0.15; // B

        idx++;
      }
    }
    return { positions: pos, colors: col, originalY: origY };
  }, [countX, countY, isMobile, numPoints]);

  // Texture for round smooth dots
  const circleTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.85)');
      gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.3)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  // Undulating wave animation
  useFrame((state) => {
    if (!pointsRef.current) return;
    const positionAttr = pointsRef.current.geometry.attributes.position;
    const posArray = positionAttr.array as Float32Array;
    const t = state.clock.elapsedTime * 1.2;

    for (let i = 0; i < numPoints; i++) {
      const x = posArray[i * 3];
      const z = posArray[i * 3 + 2];
      // Multi-frequency undulating wave
      const wave =
        Math.sin(x * 0.8 + t) * 0.35 +
        Math.cos(z * 0.8 + t * 0.9) * 0.35 +
        Math.sin((x + z) * 0.5 + t * 0.7) * 0.2;

      posArray[i * 3 + 1] = originalY[i] + wave;
    }
    positionAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} position={[0, -0.6, -1]} rotation={[0.45, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        map={circleTexture}
        size={isMobile ? 0.08 : 0.095}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// 2. Floating Prismatic Chromatic Glass Crystal
function FloatingGlassPolyhedron({
  position,
  scale = 1,
  color = '#0284c7',
  speed = 1.6,
  type = 'ico',
}: {
  position: [number, number, number];
  scale?: number;
  color?: string;
  speed?: number;
  type?: 'ico' | 'torus' | 'octa';
}) {
  return (
    <Float speed={speed} rotationIntensity={1.2} floatIntensity={1.4}>
      {type === 'ico' && (
        <Icosahedron args={[scale, 1]} position={position}>
          <MeshDistortMaterial
            color={color}
            distort={0.25}
            speed={2}
            roughness={0.1}
            metalness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transparent
            opacity={0.7}
          />
        </Icosahedron>
      )}

      {type === 'torus' && (
        <Torus args={[scale, scale * 0.28, 16, 64]} position={position} rotation={[0.8, 0.4, 0]}>
          <MeshDistortMaterial
            color={color}
            distort={0.2}
            speed={1.5}
            roughness={0.15}
            metalness={0.3}
            clearcoat={0.9}
            transparent
            opacity={0.65}
          />
        </Torus>
      )}

      {type === 'octa' && (
        <Octahedron args={[scale, 0]} position={position}>
          <MeshDistortMaterial
            color={color}
            distort={0.3}
            speed={1.8}
            roughness={0.1}
            metalness={0.25}
            clearcoat={1}
            transparent
            opacity={0.7}
          />
        </Octahedron>
      )}
    </Float>
  );
}

// 3. Main Light Scene Container
export default function LightScene({ isMobile = false }: Props) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.04) * 0.06;
  });

  return (
    <group ref={groupRef}>
      {/* Dynamic Lighting for Prismatic Crystals */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[6, 8, 4]} intensity={2.2} color="#ffffff" />
      <pointLight position={[-5, 3, 2]} intensity={2.5} color="#38bdf8" />
      <pointLight position={[5, -2, 2]} intensity={2.2} color="#a855f7" />
      <pointLight position={[0, 4, -2]} intensity={2.0} color="#06b6d4" />

      {/* Undulating Digital Topography Wave Grid */}
      <TopographicWaveGrid isMobile={isMobile} />

      {/* Floating Prismatic Glass Geometry Elements */}
      <FloatingGlassPolyhedron
        position={isMobile ? [1.6, 1.8, -1.5] : [3.8, 1.6, -1]}
        scale={isMobile ? 0.45 : 0.65}
        color="#0284c7"
        speed={1.4}
        type="ico"
      />

      <FloatingGlassPolyhedron
        position={isMobile ? [-1.6, -1.2, -1.5] : [-3.8, -0.8, -1.2]}
        scale={isMobile ? 0.4 : 0.6}
        color="#7c3aed"
        speed={1.8}
        type="torus"
      />

      {!isMobile && (
        <>
          <FloatingGlassPolyhedron
            position={[-3.2, 2.2, -2]}
            scale={0.42}
            color="#0d9488"
            speed={1.6}
            type="octa"
          />
          <FloatingGlassPolyhedron
            position={[3.2, -2.0, -2]}
            scale={0.4}
            color="#e11d48"
            speed={2.0}
            type="ico"
          />
          <FloatingGlassPolyhedron
            position={[0.2, 2.8, -3]}
            scale={0.35}
            color="#6366f1"
            speed={1.2}
            type="torus"
          />
        </>
      )}
    </group>
  );
}
