import Sectionlayout from '../components/layouts/section';
import SkillCard from '../components/SkillCard';
import skills from '../lib/skills.json';

const SkillsPage = () => {
  return (
    <Sectionlayout heading="skills" webTitle="Skills">
      <SkillCard
        title="Frontend"
        icon="frontend-icon"
        listContent={skills.frontend}
      />
    </Sectionlayout>
  );
};

export default SkillsPage;
