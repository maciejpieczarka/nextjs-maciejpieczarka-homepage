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
  type StackProps,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  slideLeft,
  slideRight,
  rise,
  riseDelay,
  visibility,
  scale,
} from '../lib/animationVariants';
import { DownloadIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import { BsArrow90DegDown } from 'react-icons/bs';

import Sectionlayout from '../components/layouts/section';
import SocialIcon from '../components/SocialIcon';

export const CustomImg = chakra(Image, {
  baseStyle: { maxH: '100%', maxW: '100%' },
  shouldForwardProp: prop => {
    return ['width', 'height', 'layout', 'src', 'alt'].includes(prop);
  },
});

const MotionHStack = motion<Omit<StackProps, 'transition'>>(HStack);

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
                as={motion.h3}
                variants={slideLeft}
                initial="start"
                whileInView="end"
                size={{ base: 'md', md: 'lg' }}
                fontWeight="bold"
              >
                Hello!
              </Heading>
              <Heading
                as={motion.h2}
                variants={slideRight}
                initial="start"
                whileInView="end"
                size={{ base: 'xl', lg: '2xl' }}
                fontWeight="bold"
              >
                I am Maciej Pieczarka
              </Heading>
              <Text
                as={motion.p}
                variants={visibility}
                initial="start"
                whileInView="end"
                bg={useColorModeValue('blueLight.500', 'blueDark.200')}
                color={useColorModeValue('textLight', 'textDark')}
                fontSize={{ base: 'md', md: 'lg' }}
                pl={{ base: 'none', md: 0.5 }}
                borderRadius={{ base: '0 0 1.5em 1.5em', md: '0 0 1.5em 0' }}
                my={2}
              >
                Junior Web Developer &amp; Designer{' '}
              </Text>
              <Text
                fontWeight="light"
                as={motion.p}
                variants={visibility}
                initial="start"
                whileInView="end"
              >
                From Poland
              </Text>
            </Box>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              gap={3}
              m={{ base: 'auto', md: '0' }}
              maxW="max-content"
            >
              <NextLink href="/works" passHref>
                <Button
                  as={motion.button}
                  variants={rise}
                  initial="start"
                  whileInView="end"
                  colorScheme={useColorModeValue('blueLight', 'blueDark')}
                  color={useColorModeValue('textLight', 'textDark')}
                  variant="solid"
                  size="md"
                  rightIcon={<ChevronRightIcon />}
                >
                  Check My Work
                </Button>
              </NextLink>
              <LinkBox>
                <Button
                  as={motion.button}
                  variants={riseDelay}
                  initial="start"
                  whileInView="end"
                  variant="outline"
                  borderWidth={2}
                  colorScheme={useColorModeValue('blueLight', 'blueDark')}
                  size="md"
                  rightIcon={<DownloadIcon />}
                >
                  <NextLink href="/CV_Maciej_Pieczarka.pdf" passHref>
                    <LinkOverlay isExternal>Download CV</LinkOverlay>
                  </NextLink>
                </Button>
              </LinkBox>
            </Flex>
          </Box>

          <Box
            as={motion.div}
            variants={rise}
            initial="start"
            whileInView="end"
            boxSize={{ base: 100, md: 300, lg: 450 }}
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
          <Flex
            as={motion.div}
            variants={visibility}
            initial="start"
            whileInView="end"
            justify="flex-start"
            position="relative"
            left="-8"
          >
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
        <Flex align="center" gap={4} py="10">
          <Flex
            display={{ base: 'none', md: 'flex' }}
            flex={1}
            justify="flex-end"
          >
            <Box
              as={motion.div}
              variants={scale}
              initial="start"
              whileInView="end"
              position="relative"
              boxSize={{ md: 400, lg: 500 }}
            >
              <CustomImg
                src={`/about-img${useColorModeValue('-light', '-dark')}.svg`}
                alt="About section image"
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
              as={motion.p}
              variants={slideRight}
              initial="start"
              whileInView="end"
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
              as={motion.hr}
              variants={scale}
              initial="start"
              whileInView="end"
              variant="solid"
              borderColor={useColorModeValue('textDark', 'textLight')}
              my={3}
            />
            <Text
              as={motion.p}
              variants={visibility}
              initial="start"
              whileInView="end"
              align={{ base: 'center', md: 'left' }}
            >
              A Few technologies I&apos;ve been working with recently:
            </Text>

            <MotionHStack
              as={motion.div}
              transition={{ staggerChildren: 0.3 }}
              initial="start"
              whileInView="end"
              spacing={5}
              my={3}
            >
              <Box as={motion.div} variants={slideLeft}>
                <ChevronRightIcon
                  color={useColorModeValue('blueLight.500', 'blueDark.200')}
                />
                TypeScript
              </Box>
              <Box as={motion.div} variants={slideLeft}>
                <ChevronRightIcon
                  color={useColorModeValue('blueLight.500', 'blueDark.200')}
                />
                NodeJS
              </Box>
              <Box as={motion.div} variants={slideLeft}>
                <ChevronRightIcon
                  color={useColorModeValue('blueLight.500', 'blueDark.200')}
                />
                ChakraUI
              </Box>
            </MotionHStack>
            <NextLink href="/skills" passHref>
              <Button
                as={motion.button}
                variants={rise}
                initial="start"
                whileInView="end"
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
