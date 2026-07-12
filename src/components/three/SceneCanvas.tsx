import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  cameraPosition?: [number, number, number];
  fov?: number;
  className?: string;
  dpr?: [number, number];
  gl?: Record<string, unknown>;
};

export default function SceneCanvas({
  children,
  cameraPosition = [0, 0, 7],
  fov = 45,
  className = '',
  dpr = [1, 1.8],
  gl,
}: Props) {
  return (
    <Canvas
      className={className}
      camera={{ position: cameraPosition, fov }}
      dpr={dpr}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance', ...gl }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}
