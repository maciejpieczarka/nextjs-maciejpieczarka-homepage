import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#F1E3D7', '#202023')(props),
    },
  }),
};

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const colors = {
  textDark: '#202023',
  textLight: '#ffffff',
  blueLight: {
    50: '#e2f3ff',
    100: '#b6d6fe',
    200: '#88b6f7',
    300: '#5b94f1',
    400: '#2d6fec',
    500: '#1363d2',
    600: '#0b57a4',
    700: '#044777',
    800: '#00314a',
    900: '#00141e',
  },
  blueDark: {
    50: '#E5EEFF',
    100: '#B8D0FF',
    200: '#8AB3FF',
    300: '#5C95FF',
    400: '#2E77FF',
    500: '#0059FF',
    600: '#0047CC',
    700: '#003599',
    800: '#002466',
    900: '#001233',
  },
};

const fonts = {
  body: `'Segoe UI', 'sans-serif'`,
  heading: `'Nunito', 'sans-serif'`,
};

const components = {
  Text: {
    variants: {
      highlight: (props: StyleFunctionProps) => ({
        fontWeight: 'bold',
        color: props.colorMode === 'dark' ? 'blueDark.200' : 'blueLight.500',
      }),
    },
  },
};

const theme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  components,
});

export default theme;
