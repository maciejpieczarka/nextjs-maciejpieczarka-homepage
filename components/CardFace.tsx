import { Flex, useColorModeValue, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { CustomImg } from '../pages/index';

export interface ICardFaceProps {
  icon: string;
  title: string;
}

const CardFace: React.FC<ICardFaceProps> = ({ icon, title }) => {
  return (
    <Flex zIndex={3} direction="column" justify="center" align="center" gap={3}>
      <motion.div layoutId={`${title}-icon`}>
        <CustomImg
          src={`/${icon}${useColorModeValue('-light', '-dark')}.svg`}
          width={170}
          height={170}
          alt={`${title} card image`}
        />
      </motion.div>
      <Heading as={motion.h3} layoutId={`${title}-title`} fontSize="2.7em">
        {title}
      </Heading>
    </Flex>
  );
};

export default CardFace;
