import { useState } from 'react';
import NextLink from 'next/link';
import {
  Box,
  Container,
  Flex,
  Stack,
  Link,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from './Logo';
import ThemeToggleButton from './ThemeToggleBtn';

interface ILinkItemProps {
  href: string;
  path: string;
  children: React.ReactNode;
}

const LinkItem: React.FC<ILinkItemProps> = ({ href, path, children }) => {
  const active = path === href;

  return (
    <NextLink href={href} passHref>
      <Link
        textDecoration={active ? 'underline' : 'none'}
        fontWeight={active ? 'semibold' : 'light'}
      >
        {children}
      </Link>
    </NextLink>
  );
};

interface INavbarProps {
  path: string;
}

const Navbar: React.FC<INavbarProps> = ({ path }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box w="100%" as="nav" bg={useColorModeValue('#F4E9DF', '#27272B')}>
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Logo />
          <Stack
            direction={{ base: 'column', md: 'row' }}
            width={{ base: 'full', md: 'auto' }}
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
          >
            <LinkItem href="/" path={path}>
              Home
            </LinkItem>
            <LinkItem href="/skills" path={path}>
              Skills
            </LinkItem>
            <LinkItem href="/works" path={path}>
              Works
            </LinkItem>
          </Stack>

          <Box>
            <ThemeToggleButton />
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu>
                <MenuButton
                  onClick={() => setIsOpen(prev => !prev)}
                  as={IconButton}
                  aria-label="Menu-button"
                  colorScheme="gray"
                  icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon />}
                />
                <MenuList>
                  <NextLink href="/" passHref>
                    <MenuItem as={Link}>Home</MenuItem>
                  </NextLink>

                  <NextLink href="/skills" passHref>
                    <MenuItem as={Link}>Skills</MenuItem>
                  </NextLink>

                  <NextLink href="/works" passHref>
                    <MenuItem as={Link}>Works</MenuItem>
                  </NextLink>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
