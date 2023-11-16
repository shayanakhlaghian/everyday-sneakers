'use client';
import { useState, useContext } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { themeContext } from '@/context';
import { slideIn } from '@/utils';
import { NavList } from '.';

const MobileMenu = () => {
  const { theme } = useContext(themeContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <div className='inline-block lg:hidden font-bold'>
      {/* Menu Toggle */}
      <label className='btn btn-circle btn-ghost swap swap-rotate'>
        <input type='checkbox' onClick={handleMenuToggle} />
        <Menu className='swap-off fill-current' />
        <X className='swap-on fill-current' />
      </label>
      {/* Menu List */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed left-0 bottom-0 
            ${theme === 'light' ? 'bg-accent' : 'bg-accent-focus'}
            rounded-t-3xl w-full h-[85%] px-4 pt-8 overflow-scroll`}
            variants={slideIn('tween', 0.25, 0.2)}
            initial='out'
            animate='in'
            exit='out'
          >
            <NavList />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default MobileMenu;
