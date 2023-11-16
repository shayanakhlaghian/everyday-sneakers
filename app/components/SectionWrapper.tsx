'use client';
import { motion } from 'framer-motion';

import { fadeIn } from '@/utils';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      className='px-1 md:px-8 lg:px-24 text-center md:text-left my-32 lg:my-40'
      variants={fadeIn(2, 0.25)}
      initial='out'
      whileInView='in'
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
};
export default SectionWrapper;
