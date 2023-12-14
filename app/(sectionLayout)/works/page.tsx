import ClientWorksPageComponent from './works';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works | Maciej Pieczarka',
};

const WorksPage = () => {
  return <ClientWorksPageComponent />;
};

export default WorksPage;
