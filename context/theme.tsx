'use client';
import { createContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type Props = {
  theme: Theme;
  toggleTheme: () => void;
};

const themeContext = createContext<Props>({
  theme: 'light',
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const setHTMLAttribue = (theme: Theme) => {
    const el = document.querySelector('html');
    el?.setAttribute('data-theme', theme);
  };

  useEffect(() => {
    const storagedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storagedTheme as Theme);
    setHTMLAttribue(storagedTheme as Theme);
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
      setHTMLAttribue('dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
      setHTMLAttribue('light');
    }
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export { themeContext, ThemeProvider };
