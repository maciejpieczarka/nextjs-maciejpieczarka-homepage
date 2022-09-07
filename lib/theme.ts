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

const theme = extendTheme({
  config,
  styles
});

export default theme;
