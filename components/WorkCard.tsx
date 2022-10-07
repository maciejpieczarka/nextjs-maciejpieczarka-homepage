import {
  Box,
  GridItem,
  Text,
  Heading,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { CustomImg } from '../pages/index';
import styled from '@emotion/styled';

interface IWorkCardProps {
  img: string;
  url: string;
  codeUrl: string;
  title: string;
  description: string;
}

const WorkLink = styled(Text)`
  cursor: pointer;
  text-decoration: underline;
  font-size: 1.4em;
`;

const WorkCard: React.FC<IWorkCardProps> = ({
  img,
  url,
  codeUrl,
  title,
  description,
}) => {
  return (
    <GridItem textAlign="center" width="100%" height="100%" position="relative">
      <Box
        width={340}
        height={190}
        position="relative"
        borderRadius={20}
        overflow="hidden"
        mx="auto"
        shadow="md"
      >
        <CustomImg src={img} layout="fill" />
        <Flex
          position="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          direction="column"
          align="center"
          justify="center"
          gap={10}
          opacity={0}
          transition="opacity 300ms ease"
          cursor="pointer"
          bg={useColorModeValue('textDark', 'textLight')}
          _hover={{ opacity: 0.9 }}
        >
          <a href={url} target="_blank" rel="noreferrer">
            <WorkLink color={useColorModeValue('textLight', 'textDark')}>
              Live Preview
            </WorkLink>
          </a>
          <a href={codeUrl} target="_blank" rel="noreferrer">
            <WorkLink color={useColorModeValue('textLight', 'textDark')}>
              Code
            </WorkLink>
          </a>
        </Flex>
      </Box>

      <Heading as="h3" fontSize={20} my={2}>
        {title}
      </Heading>

      <Text>{description}</Text>
    </GridItem>
  );
};

export default WorkCard;
