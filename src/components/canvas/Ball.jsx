import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const FloatingIcon = ({ imgUrl }) => {
  const meshRef = useRef();
  const [texture] = useTexture([imgUrl]);

  // Floating effect (gentle up & down)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <>
      {/* Bright light from below */}
      <pointLight position={[0, -2, 3]} intensity={4} color="#ffffff" />

      {/* Soft ambient light to cover all angles */}
      <ambientLight intensity={1.2} />

      {/* Icon plane */}
      <mesh ref={meshRef} scale={2.5} position={[0, 0.5, 0]}>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial map={texture} transparent />
      </mesh>
    </>
  );
};

const FloatingIconCanvas = ({ icon }) => {
  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        {/* Disable zoom & rotation */}
        <OrbitControls enableZoom={false} enableRotate={false} />
        <FloatingIcon imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default FloatingIconCanvas;
