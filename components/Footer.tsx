import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex align="center" justify="center" width="100%" pb={5}>
      <Text align="center">
        &copy; {new Date().getFullYear()} Maciej Pieczarka. All rights reserved.
      </Text>
    </Flex>
  );
};

export default Footer;
