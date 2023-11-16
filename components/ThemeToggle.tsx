'use client';
import { useContext } from 'react';
import { Sun, Moon } from 'lucide-react';

import { themeContext } from '@/context';

const ThemeToggle = () => {
  const { toggleTheme, theme } = useContext(themeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' && <Moon className='fill-current' />}
      {theme === 'dark' && <Sun className='fill-current' />}
    </button>
  );
};
export default ThemeToggle;
