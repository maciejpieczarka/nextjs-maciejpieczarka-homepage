import { motion } from 'framer-motion';
import {
  Flex,
  Heading,
  ListItem,
  UnorderedList,
  Text,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
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
        width={170}
        height={170}
        alt={`${title} card image`}
      />
      <Heading as={motion.h3} fontSize="2.7em">
        {title}
      </Heading>
    </Flex>
  );
};

interface ISkillCardProps extends ICardFaceProps {
  listContent: {
    skillName: string;
    skillDesc: string;
  }[];
}

const SkillCard: React.FC<ISkillCardProps> = ({ icon, title, listContent }) => {
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
        p="3em"
        borderRadius="2em"
        gap={5}
      >
        <CardFace icon={icon} title={title} />
        {isOpen && (
          <Flex bg="red" align="flex-start">
            <UnorderedList as={motion.ul} spacing={3}>
              {listContent.map(({ skillName, skillDesc }, i) => {
                return (
                  <ListItem as={motion.li} key={i}>
                    <Text as="span" fontWeight="bold">
                      {skillName}
                    </Text>
                    <Text as="span">- {skillDesc}</Text>
                  </ListItem>
                );
              })}
            </UnorderedList>
            <Button position="relative" top="-10" right="-5" cursor="pointer">
              X
            </Button>
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default SkillCard;
