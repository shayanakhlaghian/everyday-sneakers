'use client';
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as='div' center>
      <div
        className='radial-progress bg-primary text-primary-content border-4 border-primary lg:left-16 top-12 lg:top-0'
        // @ts-ignore
        style={{ '--value': Math.round(progress) }}
        role='progressbar'
      >
        70%
      </div>
    </Html>
  );
};

export default CanvasLoader;
