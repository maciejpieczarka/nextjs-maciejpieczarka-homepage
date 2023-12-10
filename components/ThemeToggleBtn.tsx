import * as React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { TiWeatherSunny } from 'react-icons/ti';
import { FaSpinner } from 'react-icons/fa';
import { IoMdMoon } from 'react-icons/io';
import { useTheme } from 'next-themes';

const ThemeToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <AnimatePresence>
      {currentTheme === 'dark' ? (
        <motion.button
          className="w-10 h-10 rounded-md bg-orange-300 flex items-center justify-center text-textDark text-xl"
          key="theme-toggler"
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.4, rotate: '90deg', opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        >
          <TiWeatherSunny />
        </motion.button>
      ) : (
        <motion.button
          className="w-10 h-10 rounded-md bg-violet-600 flex items-center justify-center text-textLight text-xl"
          key="theme-toggler2"
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.4, rotate: '90deg', opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        >
          <IoMdMoon />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
