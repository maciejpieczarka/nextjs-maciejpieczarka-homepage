import Sectionlayout from '../components/layouts/section';
import {
  Button,
  SimpleGrid,
  useColorModeValue,
  type SimpleGridProps,
} from '@chakra-ui/react';
import WorkCard from '../components/WorkCard';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { slideRight } from '../lib/animationVariants';

const MotionSimpleGrid =
  motion<Omit<SimpleGridProps, 'transition'>>(SimpleGrid);

const WorksPage = () => {
  return (
    <Sectionlayout heading="works" webTitle="Works">
      <MotionSimpleGrid
        initial="start"
        whileInView="end"
        transition={{ staggerChildren: 0.2 }}
        columns={{ base: 1, md: 2, lg: 3 }}
        width="100%"
        spacing={20}
        mb={5}
      >
        <WorkCard
          img="/work-images/colorGenerator.png"
          url="https://color-generator-sepia.vercel.app/"
          codeUrl="https://github.com/maciejpieczarka/reactjs-color-generator"
          title="Color Generator"
          description="Dynamic Color palette generator with click-to-copy functionality."
        />

        <WorkCard
          img="/work-images/markdownEditor.png"
          url="https://reactjs-markdown-editor.vercel.app/"
          codeUrl="https://github.com/maciejpieczarka/reactjs-color-generator"
          title="Markdown Editor"
          description="Markdown editor built using React.js and TypeScript."
        />

        <WorkCard
          img="/work-images/portfolioWebsite.png"
          url="https://nextjs-maciejpieczarka-homepage.vercel.app/"
          codeUrl="https://github.com/maciejpieczarka/nextjs-maciejpieczarka-homepage"
          title="Portfolio Website"
          description="My own portfolio website built using Next.js and TypeScript."
        />
      </MotionSimpleGrid>
      <a
        href="https://github.com/maciejpieczarka?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <Button
          as={motion.button}
          variants={slideRight}
          initial="start"
          whileInView="end"
          colorScheme={useColorModeValue('blueLight', 'blueDark')}
          color={useColorModeValue('textLight', 'textDark')}
          variant="solid"
          size="md"
          rightIcon={<ChevronRightIcon />}
        >
          See More
        </Button>
      </a>
    </Sectionlayout>
  );
};

export default WorksPage;
