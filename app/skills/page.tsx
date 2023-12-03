'use client';

import { Flex, type FlexProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Sectionlayout from '../../components/layouts/section';
import SkillCard from '../../components/SkillCard';
import skills from '../../lib/skills.json';

const MotionBox = motion<Omit<FlexProps, 'transition'>>(Flex);

const SkillsPage = () => {
  return (
    <Sectionlayout heading="skills" webTitle="Skills">
      <MotionBox
        as={motion.div}
        gap={10}
        direction={{ base: 'column', md: 'row' }}
        initial="start"
        whileInView="end"
        transition={{ staggerChildren: 0.2 }}
        mt={10}
      >
        <SkillCard
          title="Frontend"
          icon="frontend-icon"
          listContent={skills.frontend}
        />

        <SkillCard
          title="Backend"
          icon="backend-icon"
          listContent={skills.backend}
        />

        <SkillCard title="Tools" icon="tools-icon" listContent={skills.tools} />
      </MotionBox>
    </Sectionlayout>
  );
};

export default SkillsPage;
