import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { ErrorBoundary } from "react-error-boundary";
import CanvasLoader from "../Loader";

const Fallback = () => (
  <div style={{ textAlign: "center", marginTop: "2rem" }}>
    WebGL not supported on this device.
  </div>
);

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive
      object={earth.scene}
      scale={1.5} 
      position-y={0}
      rotation-y={0}g
    />
  );
}; 
const EarthCanvas = () => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          preserveDrawingBuffer: true,
          powerPreference: "high-performance",
          version: 1,
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-2, 1.5, 4], 
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  );
};

export default EarthCanvas;
