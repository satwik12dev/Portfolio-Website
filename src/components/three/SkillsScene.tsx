import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sphere, Text } from "@react-three/drei";
import * as THREE from "three";
import { SKILLS, type Skill } from "../../constants/data";

function SkillSphere({
  skill,
  index,
  total,
}: {
  skill: Skill;
  index: number;
  total: number;
}) {
  const ref = useRef<THREE.Group>(null);

  const angle = (index / total) * Math.PI * 2;

  const radius = 4;

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = clock.elapsedTime * 0.35;

    const current = angle + t;

    ref.current.position.x = Math.cos(current) * radius;

    ref.current.position.z = Math.sin(current) * radius;

    ref.current.position.y =
      Math.sin(current * 2 + index) * 0.8;

    ref.current.rotation.y += 0.015;

    ref.current.lookAt(0, 0, 0);
  });

  return (
    <group ref={ref}>
      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={1}
      >
        <Sphere args={[0.38, 64, 64]}>
          <meshStandardMaterial
            color={skill.color}
            emissive={skill.color}
            emissiveIntensity={1}
            metalness={1}
            roughness={0.08}
          />
        </Sphere>

        <Text
          position={[0, 0.8, 0]}
          fontSize={0.22}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="black"
        >
          {skill.name}
        </Text>
      </Float>
    </group>
  );
}

export default function SkillsScene() {
  const skills = useMemo(() => SKILLS.slice(0, 12), []);

  const core = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!core.current) return;

    core.current.rotation.y += 0.01;

    core.current.rotation.x =
      Math.sin(clock.elapsedTime * 0.4) * 0.2;
  });

  return (
    <>
      {/* Lights */}

      <ambientLight intensity={0.7} />

      <pointLight
        position={[0, 0, 0]}
        intensity={5}
        color="#22d3ee"
      />

      <pointLight
        position={[5, 5, 5]}
        intensity={2}
        color="#3b82f6"
      />

      <pointLight
        position={[-5, -5, -5]}
        intensity={2}
        color="#8b5cf6"
      />

      {/* Center Core */}

      <mesh ref={core}>
        <icosahedronGeometry args={[0.9, 2]} />

        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={2}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Skills */}

      {skills.map((skill, i) => (
        <SkillSphere
          key={skill.name}
          skill={skill}
          index={i}
          total={skills.length}
        />
      ))}
    </>
  );
}