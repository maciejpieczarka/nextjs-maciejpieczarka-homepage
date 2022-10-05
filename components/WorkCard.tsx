import NextLink from 'next/link';
import {
  Box,
  GridItem,
  Text,
  Heading,
  Flex,
  useColorModeValue,
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
const WorkBox = styled(Box)`
  :after {
    content: '';
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
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
        as={WorkBox}
        width={340}
        height={190}
        position="relative"
        borderRadius={20}
        overflow="hidden"
        mx="auto"
      >
        <CustomImg src={img} layout="fill" />
        <Flex
          bg={useColorModeValue('textDark', 'textLight')}
          //   display="none"
          _hover={{ display: 'none' }}
        >
          <NextLink href={url}>
            <WorkLink>Live Preview</WorkLink>
          </NextLink>
          <NextLink href={codeUrl}>
            <WorkLink>Code</WorkLink>
          </NextLink>
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
