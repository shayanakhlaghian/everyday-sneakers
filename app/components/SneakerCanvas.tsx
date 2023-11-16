'use client';
import { useEffect, useState, Suspense, useContext } from 'react';
import { useGLTF, Float, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { themeContext } from '@/context';
import { SneakerLoader } from '.';

const Sneaker = ({ isMobile }: { isMobile: boolean }) => {
  const sneaker = useGLTF('/sneaker/scene.gltf');

  return (
    <Float floatIntensity={5}>
      <mesh castShadow receiveShadow>
        <primitive
          object={sneaker.scene}
          scale={isMobile ? 27.5 : 30}
          position={isMobile ? [0.5, 1, -0.5] : [2, 1, -0.5]}
          rotation={[0.35, -0.75, 0.15]}
        />
      </mesh>
    </Float>
  );
};

const SneakerCanvas = () => {
  const { theme } = useContext(themeContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  return (
    <Canvas camera={{ position: [3, 5, 15] }}>
      <Suspense fallback={<SneakerLoader />}>
        <ambientLight intensity={theme === 'light' ? 4 : 2.75} />
        <Sneaker isMobile={isMobile} />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
    </Canvas>
  );
};
export default SneakerCanvas;
