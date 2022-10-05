import Sectionlayout from '../components/layouts/section';
import { SimpleGrid } from '@chakra-ui/react';
import WorkCard from '../components/WorkCard';

const WorksPage = () => {
  return (
    <Sectionlayout heading="works" webTitle="Works">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} width="100%" spacing={20}>
        <WorkCard
          img="/work-images/colorGenerator.png"
          url="#"
          codeUrl="#"
          title="Color Generator"
          description="Dynamic Color palette generator with click-to-copy functionality."
        />
      </SimpleGrid>
    </Sectionlayout>
  );
};

export default WorksPage;
