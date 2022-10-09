import { IconButton, Link, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { scale } from '../lib/animationVariants';

interface ISocialIconProps {
  icon: JSX.Element;
  ariaValue: string;
  link: string;
}

const SocialIcon = ({ icon, ariaValue, link }: ISocialIconProps) => {
  return (
    <Link href={link} target="_blank" rel="noopener">
      <IconButton
        as={motion.button}
        variants={scale}
        initial="start"
        whileInView="end"
        icon={icon}
        aria-label={ariaValue}
        variant="ghost"
        _hover={{
          background: 'transparent',
          transform: 'rotate(15deg)',
          color: `${useColorModeValue('blueLight.500', 'blueDark.200')}`,
        }}
        fontSize={{ base: '2em', md: '2.5em' }}
      />
    </Link>
  );
};

export default SocialIcon;
