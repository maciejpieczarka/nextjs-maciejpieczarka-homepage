import type { NextPage } from 'next';
import type { NextRouter } from 'next/router';
import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';

import Navbar from '../Navbar';
import Footer from '../Footer';

interface ILayoutProps {
  children: React.ReactElement;
  router: NextRouter;
}

const MainLayout: NextPage<ILayoutProps> = ({ children, router }) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Maciej Pieczarka - Homepage</title>
        <link rel="icon" type="image/x-icon" href="/icon.ico" />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.xl" mt="57px">
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default MainLayout;
