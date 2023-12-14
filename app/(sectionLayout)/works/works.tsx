'use client';
import WorkCard from '../../../components/WorkCard';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import { slideRight } from '../../../lib/animationVariants';

const ClientWorksPageComponent = () => {
  return (
    <>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-20 mb-5"
        initial="start"
        whileInView="end"
        transition={{ staggerChildren: 0.2 }}
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
      </motion.div>
      <a
        href="https://github.com/maciejpieczarka?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <motion.button
          className="flex items-center gap-2 py-2 px-4 font-semibold bg-blueLight-500 dark:bg-blueDark-200 text-textLight dark:text-textDark rounded-md"
          variants={slideRight}
          initial="start"
          whileInView="end"
        >
          See More <FaChevronRight />
        </motion.button>
      </a>
    </>
  );
};

export default ClientWorksPageComponent;
