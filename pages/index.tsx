import type { NextPage } from 'next';
import {
  Box,
  Flex,
  Text,
  Heading,
  useColorModeValue,
  Button,
  Image,
  HStack,
} from '@chakra-ui/react';
import { DownloadIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

import { BsArrow90DegDown } from 'react-icons/bs';

import Sectionlayout from '../components/layouts/section';
import SocialIcon from '../components/SocialIcon';

const Home: NextPage = () => {
  return (
    <Box>
      <Flex
        height="calc(100vh - 57px)"
        direction="column"
        justify="center"
        align="center"
        gap={{ base: 10, md: 20 }}
      >
        <Flex
          direction={{ base: 'column-reverse', md: 'row' }}
          gap={{ base: '6', md: '0' }}
          align="center"
          justify={{ base: 'center', md: 'space-between' }}
          w="100%"
        >
          <Box textAlign={{ base: 'center', md: 'left' }}>
            <Box mb={5}>
              <Heading
                as="h3"
                size={{ base: 'md', md: 'lg' }}
                fontWeight="bold"
              >
                Hello!
              </Heading>
              <Heading
                as="h1"
                size={{ base: 'xl', lg: '2xl' }}
                fontWeight="bold"
              >
                I am Maciej Pieczarka
              </Heading>
              <Text
                bg={useColorModeValue('blueLight.500', 'blueDark.200')}
                color={useColorModeValue('textLight', 'textDark')}
                fontSize={{ base: 'md', md: 'lg' }}
                pl={{ base: 'none', md: 0.5 }}
                borderRadius={{ base: '0 0 1.5em 1.5em', md: '0 0 1.5em 0' }}
                my={2}
              >
                Junior Web Developer &amp; Designer{' '}
              </Text>
              <Text fontWeight="light">From Poland</Text>
            </Box>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              gap={3}
              m={{ base: 'auto', md: '0' }}
              maxW="max-content"
            >
              <Button
                colorScheme={useColorModeValue('blueLight', 'blueDark')}
                color={useColorModeValue('textLight', 'textDark')}
                variant="solid"
                size="md"
                rightIcon={<ChevronRightIcon />}
              >
                Check My Work
              </Button>
              <Button
                variant="outline"
                borderWidth={2}
                colorScheme={useColorModeValue('blueLight', 'blueDark')}
                size="md"
                rightIcon={<DownloadIcon />}
              >
                <Text color={useColorModeValue('textDark', 'textLight')}>
                  Download CV
                </Text>
              </Button>
            </Flex>
          </Box>

          <Image
            borderWidth={{ base: '.3em', md: '1em' }}
            borderStyle="solid"
            borderColor="textLight"
            borderRadius="100%"
            src="/HeroImg.jpg"
            alt="Profile Picture"
            boxSize={{ base: 100, md: 300, lg: 500 }}
          />
        </Flex>

        <Flex direction="column" gap={2}>
          <Flex justify="flex-start" position="relative" left="-8">
            <Text display="inline-block" lineHeight="2em">
              Find Me Here
            </Text>
            <BsArrow90DegDown
              size="1.2em"
              fill={useColorModeValue('#1363d2', '#8AB3FF')}
              style={{
                display: 'inline-block',
                transform: 'scaleX(-1)',
                alignSelf: 'flex-end',
              }}
            />
          </Flex>
          <HStack spacing={4}>
            <SocialIcon
              icon={<AiOutlineGithub />}
              ariaValue="Github Profile"
              link="https://github.com/maciejpieczarka"
            />
            <SocialIcon
              icon={<AiOutlineInstagram />}
              ariaValue="Github Profile"
              link="https://www.instagram.com/pieczareq_/"
            />
            <SocialIcon
              icon={<AiFillLinkedin />}
              ariaValue="Github Profile"
              link="https://www.linkedin.com/in/maciej-pieczarka-2311821a4/"
            />
          </HStack>
        </Flex>
      </Flex>
      <Sectionlayout heading="About">Coming Soon</Sectionlayout>
    </Box>
  );
};

export default Home;
