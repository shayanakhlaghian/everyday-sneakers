'use client';
import { useEffect, useState } from 'react';

import { Logo, Menu, MobileMenu, ThemeToggle } from '.';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`
        navbar fixed top-0 left-0 duration-200 justify-between px-1 lg:px-4 items-center
        z-[30]
        ${isScrolled ? 'bg-base-200' : 'bg-transparent'}
        ${isScrolled && 'shadow-lg'}
    `}
    >
      <Logo />
      <div>
        <ThemeToggle />
        <Menu />
        <MobileMenu />
      </div>
    </div>
  );
};
export default Navbar;
