import { motion } from 'framer-motion';
import { scale } from '../lib/animationVariants';
import Link from 'next/link';

interface ISocialIconProps {
  children: React.ReactNode;
  ariaValue: string;
  link: string;
}

const SocialIcon = ({ children, ariaValue, link }: ISocialIconProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener"
      className="transition-transform duration-300 ease-in-out hover:rotate-12 "
    >
      <motion.button
        className="bg-transparent hover:text-blueLight-500 dark:hover:text-blueDark-200 text-2xl md:text-4xl"
        variants={scale}
        initial="start"
        whileInView="end"
        aria-label={ariaValue}
      >
        {children}
      </motion.button>
    </Link>
  );
};

export default SocialIcon;
