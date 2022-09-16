import { motion } from 'framer-motion';
import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { CustomImg } from '../pages/index';

interface ICardFaceProps {
  icon: string;
  title: string;
}

const CardFace: React.FC<ICardFaceProps> = ({ icon, title }) => {
  return (
    <Flex direction="column" justify="center" align="center" gap={3}>
      <CustomImg
        src={`/${icon}${useColorModeValue('-light', '-dark')}.svg`}
        width={100}
        height={100}
        alt={`${title} card image`}
      />
      <Heading as={motion.h3}>{title}</Heading>
    </Flex>
  );
};

interface ISkillCardProps extends ICardFaceProps {
  children: React.ReactNode;
}

const SkillCard: React.FC<ISkillCardProps> = ({ icon, title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Flex
        as={motion.div}
        layout
        bg={useColorModeValue('#E6D9CE', '#2B2B2E')}
        onClick={() => setIsOpen(true)}
        shadow="lg"
        direction={{ base: 'column', md: 'row' }}
        py={10}
        px={5}
        borderRadius="2em"
      >
        <CardFace icon={icon} title={title} />
        {isOpen && <motion.div>asd</motion.div>}
      </Flex>
    </>
  );
};

export default SkillCard;
