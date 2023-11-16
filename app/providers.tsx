'use client';
import { useEffect } from 'react';

import { ThemeProvider } from '@/context';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
export default Providers;
