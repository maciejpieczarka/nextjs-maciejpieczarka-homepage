import type { NextPage } from 'next';
import type { NextRouter } from 'next/router';
import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';

import Navbar from '../Navbar';

interface ILayoutProps {
  children: React.ReactElement;
  router: NextRouter;
}

const MainLayout: NextPage<ILayoutProps> = ({ children, router }) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Maciej Pieczarka&apos;s Portfolio</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.xl" mt="57px">
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;
