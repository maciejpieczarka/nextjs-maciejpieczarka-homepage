'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  slideLeft,
  slideRight,
  rise,
  riseDelay,
  visibility,
  scale,
} from '../lib/animationVariants';
//Icons
import { FaChevronRight } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

import SocialIcon from '../components/SocialIcon';

const Home = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen gap-10 md:gap-24">
        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-0 items-center justify-center md:justify-between w-full">
          <div className="text-center md:text-left">
            <div className="mb-5">
              <motion.h3
                className="text-lg md:text-3xl font-bold text-textDark dark:text-textLight"
                variants={slideLeft}
                initial="start"
                whileInView="end"
              >
                Hello!
              </motion.h3>
              <motion.h2
                className="text-2xl md:text-5xl font-bold text-textDark dark:text-textLight"
                variants={slideRight}
                initial="start"
                whileInView="end"
              >
                I am Maciej Pieczarka
              </motion.h2>
              <motion.p
                className="bg-blueLight-500 text-textLight dark:bg-blueDark-200 dark:text-textDark text-md md:text-lg px-4 md:pl-1 md:pr-0 my-2 rounded-b-3xl md:rounded-br-3xl md:rounded-bl-none"
                variants={visibility}
                initial="start"
                whileInView="end"
              >
                Junior Web Developer &amp; Designer{' '}
              </motion.p>
              <motion.p
                className="font-light text-textDark dark:text-textLight"
                variants={visibility}
                initial="start"
                whileInView="end"
              >
                From Poland
              </motion.p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 m-auto md:m-0 max-w-max ">
              <Link href="/works">
                <motion.button
                  className="flex items-center py-2 px-4 gap-2 font-semibold rounded-md bg-blueLight-500 hover:bg-blueLight-600 dark:bg-blueDark-200 hover:dark:bg-blueDark-300 text-textLight dark:text-textDark"
                  variants={rise}
                  initial="start"
                  whileInView="end"
                >
                  Check My Work <FaChevronRight />
                </motion.button>
              </Link>
              <Link href="/CV_Maciej_Pieczarka.pdf" target="_blank">
                <motion.button
                  className="w-full flex items-center py-2 px-4 gap-2 font-semibold rounded-md outline outline-2 outline-blueLight-500 hover:bg-textDark hover:text-textLight hover:outline-none hover:dark:outline-none hover:dark:bg-textLight hover:dark:text-textDark dark:outline-blueDark-200 text-blueLight-500 dark:text-blueDark-200"
                  variants={riseDelay}
                  initial="start"
                  whileInView="end"
                >
                  Download CV <IoMdDownload />
                </motion.button>
              </Link>
            </div>
          </div>

          <motion.div
            className="w-[100px] h-[100px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] overflow-hidden rounded-full relative border-4 md:border-6 lg:border-8 border-textLight"
            variants={rise}
            initial="start"
            whileInView="end"
          >
            <Image src="/HeroImg.jpg" alt="Profile Picture" fill priority />
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <motion.div
            className="flex justify-start items-center gap-2 w-full"
            variants={visibility}
            initial="start"
            whileInView="end"
          >
            <MdKeyboardDoubleArrowDown className="animate-bounce text-lg md:text-xl text-blueLight-500 dark:text-blueDark-200" />
            <p className="text-sm md:text-xl text-textDark dark:text-textLight">
              Find Me Here
            </p>
            <MdKeyboardDoubleArrowDown className="animate-bounce text-lg md:text-xl text-blueLight-500 dark:text-blueDark-200" />
          </motion.div>
          <div className="flex items-center justify-center gap-4 w-full">
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
          </div>
        </div>
      </div>
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
              className="text-base md:text-lg lg:text-xl text-center md:text-justify text-textDark dark:text-textLight"
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
              className="text-center md:text-left text-textDark dark:text-textLight"
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
                <FaChevronRight className="text-blueLight-500 dark:text-blueDark-200" />
                <motion.p className="font-semibold text-sm md:text-base text-textDark dark:text-textLight">
                  Next.js
                </motion.p>
              </motion.div>
              <motion.div variants={slideLeft} className="flex items-center">
                <FaChevronRight className="text-blueLight-500 dark:text-blueDark-200" />
                <motion.p className="font-semibold text-sm md:text-base text-textDark dark:text-textLight">
                  TypeScript
                </motion.p>
              </motion.div>
              <motion.div variants={slideLeft} className="flex items-center">
                <FaChevronRight className="text-blueLight-500 dark:text-blueDark-200" />
                <motion.p className="font-semibold text-sm md:text-base text-textDark dark:text-textLight">
                  Prisma & MongoDB
                </motion.p>
              </motion.div>
            </motion.div>
            <Link href="/skills" className="mt-5" passHref>
              <motion.button
                className="flex py-2 px-4 items-center gap-2 font-semibold transition-colors ease-in duration-200 bg-blueLight-500 hover:bg-blueLight-600  text-textLight dark:text-textDark dark:hover:bg-blueDark-300 rounded-md dark:bg-blueDark-200"
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
    </div>
  );
};

export default Home;
