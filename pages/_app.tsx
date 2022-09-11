import { type AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../lib/theme';
import Layout from '../components/layouts/main';
import Fonts from '../components/Fonts';

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
