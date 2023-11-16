'use client';
import { useEffect, useContext } from 'react';

import { themeContext } from '@/context';

const Cursor = () => {
  const { theme } = useContext(themeContext);

  useEffect(() => {
    const handleCursor = (e: MouseEvent) => {
      const cursorEl = document.getElementById('cursor');
      if (!cursorEl) return;

      cursorEl.style.left = `${e.clientX}px`;
      cursorEl.style.top = `${e.clientY}px`;
    };
    document.addEventListener('mousemove', handleCursor);

    return () => document.removeEventListener('mousemove', handleCursor);
  }, []);

  return (
    <div
      id='cursor'
      className={`w-8 h-8 fixed rounded-full
      hidden lg:inline-block
      ${theme === 'light' ? 'bg-slate-800' : 'bg-primary'}
      transition-all duration-[50ms] pointer-events-none 
      z-[500] translate-x-[-50%] translate-y-[-50%]
      flex justify-center items-center
      shadow-md
      `}
    ></div>
  );
};
export default Cursor;
