import type { NextPage } from 'next';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Box,
  Flex,
  Text,
  Heading,
  useColorModeValue,
  Button,
  HStack,
  chakra,
  Divider,
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

const CustomImg = chakra(Image, {
  baseStyle: { maxH: '100%', maxW: '100%' },
  shouldForwardProp: prop => {
    return ['width', 'height', 'layout', 'src', 'alt'].includes(prop);
  },
});

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
              <NextLink href="/works" passHref>
                <Button
                  colorScheme={useColorModeValue('blueLight', 'blueDark')}
                  color={useColorModeValue('textLight', 'textDark')}
                  variant="solid"
                  size="md"
                  rightIcon={<ChevronRightIcon />}
                >
                  Check My Work
                </Button>
              </NextLink>
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

          <Box
            boxSize={{ base: 100, md: 300, lg: 500 }}
            borderWidth={{ base: '.3em', md: '1em' }}
            borderStyle="solid"
            borderColor="textLight"
            borderRadius="full"
            position="relative"
          >
            <CustomImg
              borderRadius="full"
              src="/HeroImg.jpg"
              alt="Profile Picture"
              layout="fill"
            />
          </Box>
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
      <Sectionlayout heading="about">
        <Flex align="center" gap={4}>
          <Flex
            display={{ base: 'none', md: 'flex' }}
            flex={1}
            justify="flex-end"
          >
            <Box position="relative" boxSize={{ md: 400, lg: 500 }}>
              <CustomImg
                src={`/about-img${useColorModeValue('-light', '-dark')}.svg`}
                layout="fill"
              />
            </Box>
          </Flex>
          <Flex
            width="50%"
            direction="column"
            align={{ base: 'center', md: 'flex-start' }}
            flex={1}
          >
            <Text
              fontSize={{ base: 14, md: 15, lg: 18 }}
              align={{ base: 'center', md: 'justify' }}
            >
              Hi, I&apos;m{' '}
              <Text as="span" variant="highlight">
                Maciej Pieczarka
              </Text>
              , a self-taught{' '}
              <Text as="span" variant="highlight">
                full-stack developer
              </Text>{' '}
              from Poland. Currently a student in the Technical High School of
              IT and Electronic on a{' '}
              <Text as="span" variant="highlight">
                Programmer Technician
              </Text>{' '}
              profile. Since the beginning of my journey with Web Dev{' '}
              <Text as="span" variant="highlight">
                5 years ago
              </Text>
              , I fell in love with learning new stuff, trying to{' '}
              <Text as="span" variant="highlight">
                always stay up-to-date
              </Text>{' '}
              with the currently dominating technologies.
            </Text>
            <Divider
              variant="solid"
              borderColor={useColorModeValue('textDark', 'textLight')}
              my={3}
            />
            <Text align={{ base: 'center', md: 'left' }}>
              A Few technologies I&apos;ve been working with recently:
            </Text>

            <HStack spacing={5} my={3}>
              <Box>
                <ChevronRightIcon
                  color={useColorModeValue('blueLight.500', 'blueDark.200')}
                />
                TypeScript
              </Box>
              <Box>
                <ChevronRightIcon
                  color={useColorModeValue('blueLight.500', 'blueDark.200')}
                />
                NodeJS
              </Box>
              <Box>
                <ChevronRightIcon
                  color={useColorModeValue('blueLight.500', 'blueDark.200')}
                />
                ChakraUI
              </Box>
            </HStack>
            <NextLink href="/skills" passHref>
              <Button
                mt={5}
                colorScheme={useColorModeValue('blueLight', 'blueDark')}
                color={useColorModeValue('textLight', 'textDark')}
                variant="solid"
                size="md"
                rightIcon={<ChevronRightIcon />}
              >
                My Skills
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </Sectionlayout>
    </Box>
  );
};

export default Home;
