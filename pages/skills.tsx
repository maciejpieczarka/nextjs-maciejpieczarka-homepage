import Sectionlayout from '../components/layouts/section';
import SkillCard from '../components/SkillCard';

const SkillsPage = () => {
  return (
    <Sectionlayout heading="skills" webTitle="Skills">
      <SkillCard title="Backend" icon="backend-icon" />
    </Sectionlayout>
  );
};

export default SkillsPage;
