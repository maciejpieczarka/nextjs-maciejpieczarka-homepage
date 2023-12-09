'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
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
import { FaChevronRight } from 'react-icons/fa';
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import { BsArrow90DegDown } from 'react-icons/bs';

import SocialIcon from '../components/SocialIcon';

export const CustomImg = chakra(Image, {
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
              <Link href="/works" passHref>
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
              </Link>
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
                  <Link href="/CV_Maciej_Pieczarka.pdf" passHref>
                    <LinkOverlay isExternal>Download CV</LinkOverlay>
                  </Link>
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
              ariaValue="Github Profile"
              link="https://github.com/maciejpieczarka"
            >
              <AiOutlineGithub />
            </SocialIcon>
            <SocialIcon
              ariaValue="Github Profile"
              link="https://www.instagram.com/pieczareq_/"
            >
              <AiOutlineInstagram />
            </SocialIcon>
            <SocialIcon
              ariaValue="Github Profile"
              link="https://www.linkedin.com/in/maciej-pieczarka-2311821a4/"
            >
              <AiFillLinkedin />
            </SocialIcon>
          </HStack>
        </Flex>
      </Flex>
      <div
        className="flex flex-col items-center w-full mb-20 gap-10"
        id="about"
      >
        <Link href="/#about">
          <h1 className="mb-6 after:bg-blueLight-500 dark:after:bg-blueDark-200 text-textDark dark:text-textLight  text-4xl font-bold text-center relative pb-1 content-none after:absolute after:rounded-full after:w-1/2 after:h-1 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all after:duration-300 after:ease hover:after:w-[125%]">
            About
          </h1>
        </Link>

        <div className="flex items-stretch gap-6 ">
          <motion.div
            className="hidden md:flex flex-1 justify-end relative w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] "
            variants={scale}
            initial="start"
            whileInView="end"
          >
            <Image
              className="hidden dark:block"
              src={`/about-img-dark.svg`}
              alt="About section image"
              fill
            />
            <Image
              className="dark:hidden"
              src={`/about-img-light.svg`}
              alt="About section image"
              fill
            />
          </motion.div>

          <div className="flex flex-col flex-1  items-center md:items-start justify-center">
            <motion.p
              className="text-base md:text-lg lg:text-xl text-center md:text-justify"
              variants={slideRight}
              initial="start"
              whileInView="end"
            >
              Hi, I&apos;m{' '}
              <span className="font-bold text-blueLight-500 dark:text-blueDark-200">
                Maciej Pieczarka
              </span>
              , a self-taught{' '}
              <span className="font-bold text-blueLight-500 dark:text-blueDark-200">
                full-stack developer
              </span>{' '}
              from Poland. Currently a student in the Technical High School of
              IT and Electronic on a{' '}
              <span className="font-bold text-blueLight-500 dark:text-blueDark-200">
                Programmer Technician
              </span>{' '}
              profile. Since the beginning of my journey with Web Dev{' '}
              <span className="font-bold text-blueLight-500 dark:text-blueDark-200">
                5 years ago
              </span>
              , I fell in love with learning new stuff, trying to{' '}
              <span className="font-bold text-blueLight-500 dark:text-blueDark-200">
                always stay up-to-date
              </span>{' '}
              with the currently dominating technologies.
            </motion.p>
            <motion.hr
              className="h-px border-0 w-full my-3 bg-textDark dark:bg-textLight"
              variants={scale}
              initial="start"
              whileInView="end"
            />
            <motion.p
              className="text-center md:text-left"
              variants={visibility}
              initial="start"
              whileInView="end"
            >
              A Few technologies I&apos;ve been working with recently:
            </motion.p>

            <motion.div
              className="flex flex-row gap-5 my-3"
              transition={{ staggerChildren: 0.3 }}
              initial="start"
              whileInView="end"
            >
              <motion.div variants={slideLeft} className="flex items-center">
                <FaChevronRight className="text-blueLight-500 dark:text-bluedark-200" />
                <motion.p className="font-semibold text-sm md:text-base">
                  Next.js
                </motion.p>
              </motion.div>
              <motion.div variants={slideLeft} className="flex items-center">
                <FaChevronRight className="text-blueLight-500 dark:text-bluedark-200" />
                <motion.p className="font-semibold text-sm md:text-base">
                  TypeScript
                </motion.p>
              </motion.div>
              <motion.div variants={slideLeft} className="flex items-center">
                <FaChevronRight className="text-blueLight-500 dark:text-bluedark-200" />
                <motion.p className="font-semibold text-sm md:text-base">
                  Prisma & MongoDB
                </motion.p>
              </motion.div>
            </motion.div>
            <Link href="/skills" className="mt-5" passHref>
              <motion.button
                className="flex py-2 px-4 items-center gap-2  transition-colors ease-in duration-200 bg-blueLight-500 hover:bg-blueLight-600  text-textLight dark:text-textDark dark:hover:bg-blueDark-300 rounded-md dark:bg-blueDark-200"
                variants={rise}
                initial="start"
                whileInView="end"
              >
                My Skills
                <FaChevronRight size={14} />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Home;
