'use client';
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();

  const rounded = Math.round(progress);
  return (
    <Html as='div' center>
      <div
        className='radial-progress bg-primary text-primary-content border-4 border-primary lg:left-16 top-12 lg:top-0'
        // @ts-ignore
        style={{ '--value': rounded }}
        role='progressbar'
      >
        {rounded}%
      </div>
    </Html>
  );
};

export default CanvasLoader;
