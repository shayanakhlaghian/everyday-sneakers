'use client';
import { useContext } from 'react';

import { themeContext } from '@/context';

const SneakerBg = () => {
  const { theme } = useContext(themeContext);

  return (
    <>
      <div
        className={`absolute w-52 h-52 
      ${theme === 'light' ? 'bg-primary' : 'bg-primary-focus'} 
      top-[30%] lg:top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] 
      rounded-2xl rotate-[25deg] lg:w-96 lg:h-96 lg:left-[30%]`}
      />
      <div
        className={`absolute w-52 h-52 shadow-lg
      ${theme === 'light' ? 'bg-slate-200' : 'bg-slate-600'} 
      top-[30%] lg:top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] 
      rounded-2xl rotate-12 lg:w-96 lg:h-96 lg:left-[30%]`}
      />
    </>
  );
};

export default SneakerBg;
