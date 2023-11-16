'use client';
import { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

import { heroTexts } from '@/constants';

const Text = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      4000 // every 4 secs
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 className='text-[1.85rem] md:text-3xl lg:text-5xl text-primary font-bold'>
      <TextTransition springConfig={presets.wobbly} inline>
        {heroTexts[index % heroTexts.length]}
      </TextTransition>
      <span className='ml-2 lg:ml-3'>Sneakers</span>
    </h1>
  );
};

export default Text;
