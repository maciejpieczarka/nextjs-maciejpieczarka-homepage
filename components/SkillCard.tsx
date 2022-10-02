import { motion } from 'framer-motion';
import { CloseIcon } from '@chakra-ui/icons';
import {
  Flex,
  ListItem,
  UnorderedList,
  Text,
  useColorModeValue,
  Box,
  IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import CardFace from './CardFace';
import type { ICardFaceProps } from './CardFace';

interface ISkillCardProps extends ICardFaceProps {
  listContent: {
    skillName: string;
    skillDesc: string;
  }[];
}

const SkillCard: React.FC<ISkillCardProps> = ({ icon, title, listContent }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const modalBg = useColorModeValue('textDark', 'textLight');
  const cardBg = useColorModeValue('#E6D9CE', '#2B2B2E');
  const btnColor = useColorModeValue('blueLight.500', 'blueDark.200');

  return (
    <>
      <Box
        padding={12}
        borderRadius={20}
        shadow="xl"
        bg={cardBg}
        as={motion.div}
        layoutId={title}
        onClick={() => setSelectedCard(title)}
        cursor="pointer"
      >
        <CardFace title={title} icon={icon} />
      </Box>

      {selectedCard && (
        <>
          <Box
            position="fixed"
            top={0}
            left={0}
            height="100vh"
            width="100vw"
            bg={modalBg}
            opacity={0.3}
            zIndex={2}
          />
          <Flex
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            align="center"
            justify="center"
            zIndex={3}
          >
            <Flex
              position="relative"
              padding={12}
              borderRadius={20}
              shadow="xl"
              gap={12}
              justify="center"
              align="center"
              as={motion.div}
              direction={{ base: 'column', md: 'row' }}
              layoutId={title}
              bg={cardBg}
            >
              <CardFace title={title} icon={icon} />
              <UnorderedList as={motion.ul}>
                {listContent.map(({ skillName, skillDesc }) => (
                  <ListItem key={skillName} as={motion.li}>
                    <Text as="span" fontWeight="bold">
                      ddd
                    </Text>
                    &nbsp;-&nbsp;{skillDesc}
                  </ListItem>
                ))}
              </UnorderedList>
              <Box position="absolute" top={6} right={6}>
                <IconButton
                  variant="unstyled"
                  icon={<CloseIcon />}
                  aria-label="Hide details"
                  onClick={() => {
                    setSelectedCard(null);
                  }}
                  _hover={{ color: btnColor }}
                  fontSize="14px"
                />
              </Box>
            </Flex>
          </Flex>
        </>
      )}
    </>
  );
};

export default SkillCard;
