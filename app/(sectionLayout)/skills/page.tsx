import ClientSkillsPageComponent from './skills';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills | Maciej Pieczarka',
  // description: '...',
};

const SkillsPage = () => {
  return <ClientSkillsPageComponent />;
};

export default SkillsPage;
