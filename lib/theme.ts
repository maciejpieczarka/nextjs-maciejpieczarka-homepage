import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: props.colorMode === 'dark' ? '#202023' : '#F1E3D7'
    }
  })
};

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const colors = {
  textDark: '#202023',
  textLight: '#ffffff',
  blueLight: '#3D7AED',
  blueDark: '#6198FF'
};

const fonts = {
  body: `'Nunito', 'sans-serif'`
};

const components = {
  Divider: {
    variants: {
      'section-title': {
        h: '4px',
        borderWidth: '30px',
        width: '30px'
      }
    }
  }
};

const theme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  components
});

export default theme;
