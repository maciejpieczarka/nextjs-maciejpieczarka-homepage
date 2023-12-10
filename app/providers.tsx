'use client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './../lib/theme';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {children}
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}
