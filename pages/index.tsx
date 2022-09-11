import type { NextPage } from 'next';
import { Box, Flex, Text } from '@chakra-ui/react';

import Sectionlayout from '../components/layouts/section';

const Home: NextPage = () => {
  return (
    <div>
      <Flex bg="red.100">
        <Box></Box>
        <Box></Box>
      </Flex>
      {/* <Sectionlayout heading="About"></Sectionlayout> */}
    </div>
  );
};

export default Home;
