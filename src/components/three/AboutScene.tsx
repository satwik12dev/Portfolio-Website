import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Float,
  Sphere,
  Sparkles,
  Stars,
  Line,
} from "@react-three/drei";
import * as THREE from "three";

export default function AboutScene() {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    if (group.current) {
      group.current.rotation.y = t * 0.25;
    }

    if (core.current) {
      core.current.rotation.x = t * 0.6;
      core.current.rotation.y = t * 0.8;

      const scale = 1 + Math.sin(t * 2) * 0.08;
      core.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />

      <pointLight
        position={[5, 5, 5]}
        intensity={60}
        color="#00e5ff"
      />

      <pointLight
        position={[-5, -5, -5]}
        intensity={40}
        color="#6366f1"
      />

      <Stars
        radius={20}
        depth={40}
        count={1800}
        factor={4}
        fade
      />

      <Sparkles
        count={100}
        scale={8}
        size={2}
        speed={0.6}
        color="#22d3ee"
      />

      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={1.5}
      >
        <group ref={group}>
          {/* Core */}
          <Sphere ref={core} args={[0.5, 64, 64]}>
            <meshPhysicalMaterial
              color="#06b6d4"
              emissive="#22d3ee"
              emissiveIntensity={2}
              transmission={1}
              roughness={0}
              metalness={0.4}
              clearcoat={1}
            />
          </Sphere>

          {/* Orbit Ring 1 */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1, 0.02, 32, 200]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>

          {/* Orbit Ring 2 */}
          <mesh rotation={[0, Math.PI / 2, 0]}>
            <torusGeometry args={[1.25, 0.015, 32, 200]} />
            <meshBasicMaterial color="#818cf8" />
          </mesh>

          {/* Orbit Ring 3 */}
          <mesh rotation={[0.8, 0.3, 0]}>
            <torusGeometry args={[1.55, 0.01, 32, 200]} />
            <meshBasicMaterial color="#22d3ee" />
          </mesh>

          {/* Energy Lines */}
          <Line
            points={[
              [-2, 0, 0],
              [2, 0, 0],
            ]}
            color="#22d3ee"
            lineWidth={1}
          />

          <Line
            points={[
              [0, -2, 0],
              [0, 2, 0],
            ]}
            color="#38bdf8"
            lineWidth={1}
          />

          <Line
            points={[
              [0, 0, -2],
              [0, 0, 2],
            ]}
            color="#818cf8"
            lineWidth={1}
          />
        </group>
      </Float>
    </>
  );
}