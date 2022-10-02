import { LayoutGroup } from 'framer-motion';
import { Flex } from '@chakra-ui/react';
import Sectionlayout from '../components/layouts/section';
import SkillCard from '../components/SkillCard';
import skills from '../lib/skills.json';

const SkillsPage = () => {
  return (
    <Sectionlayout heading="skills" webTitle="Skills">
      <LayoutGroup>
        <Flex gap={10} direction={{ base: 'column', md: 'row' }}>
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

          <SkillCard
            title="Tools"
            icon="tools-icon"
            listContent={skills.tools}
          />
        </Flex>
      </LayoutGroup>
    </Sectionlayout>
  );
};

export default SkillsPage;
