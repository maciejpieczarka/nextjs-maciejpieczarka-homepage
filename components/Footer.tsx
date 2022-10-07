import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer>
      <Flex align="center" justify="center" width="100%" height="2em">
        <Text align="center">
          &copy; {new Date().getFullYear()} Maciej Pieczarka. All rights
          reserved.
        </Text>
      </Flex>
    </footer>
  );
};

export default Footer;
