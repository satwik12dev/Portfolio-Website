import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Torus, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({
  position,
  scale = 1,
  color = '#22d3ee',
  speed = 1.5,
  kind = 'ico',
}: {
  position: [number, number, number];
  scale?: number;
  color?: string;
  speed?: number;
  kind?: 'ico' | 'torus' | 'box';
}) {
  return (
    <Float speed={speed} rotationIntensity={1.4} floatIntensity={1.6}>
      {kind === 'ico' && (
        <Icosahedron args={[scale, 1]} position={position}>
          <MeshDistortMaterial
            color={color}
            distort={0.35}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            emissive={color}
            emissiveIntensity={0.18}
          />
        </Icosahedron>
      )}
      {kind === 'torus' && (
        <Torus args={[scale, scale * 0.32, 16, 64]} position={position}>
          <MeshDistortMaterial
            color={color}
            distort={0.2}
            speed={1.5}
            roughness={0.15}
            metalness={0.85}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </Torus>
      )}
      {kind === 'box' && (
        <mesh position={position} scale={scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={color}
            roughness={0.25}
            metalness={0.7}
            emissive={color}
            emissiveIntensity={0.15}
          />
        </mesh>
      )}
    </Float>
  );
}

export default function HeroScene({ isMobile = false }: { isMobile?: boolean }) {
  const group = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      mouse.current.x * 0.3 + t * 0.05,
      0.04
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouse.current.y * 0.2,
      0.04
    );
  });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <group ref={group}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} color="#88f0ff" />
      <pointLight position={[-6, -4, -6]} intensity={2.2} color="#3b82f6" />
      <pointLight position={[6, 4, 4]} intensity={2.0} color="#22d3ee" />

      <FloatingShape position={[0, 0.3, 0]} scale={1.5} color="#22d3ee" speed={1.6} kind="ico" />
      {!isMobile && (
        <>
          <FloatingShape position={[-3.2, 1.4, -1.5]} scale={0.7} color="#3b82f6" speed={1.9} kind="torus" />
          <FloatingShape position={[3.0, -1.2, -1.2]} scale={0.6} color="#10b981" speed={1.4} kind="box" />
          <FloatingShape position={[2.4, 2.0, -2]} scale={0.45} color="#ec4899" speed={2.1} kind="ico" />
          <FloatingShape position={[-2.6, -1.6, -1.8]} scale={0.5} color="#a855f7" speed={1.7} kind="torus" />
        </>
      )}
    </group>
  );
}
