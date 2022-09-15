import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Heading,
  useColorModeValue,
  Flex,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

interface iSectionLayoutProps {
  children: React.ReactNode;
  heading: string;
  webTitle?: string;
}

const styledHeading = styled.h1`
  position: relative;
  text-align: 'center';
  padding-bottom: 0.1em;
  :after {
    content: '';
    position: absolute;
    width: 50%;
    height: 4px;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    transition: all 300ms ease;
    border-radius: 1em;
  }

  :hover:after {
    width: 125%;
  }
`;

const Sectionlayout: NextPage<iSectionLayoutProps> = ({
  children,
  heading,
  webTitle,
}) => {
  const webTitleText = `Maciej Pieczarka - ${webTitle}`;

  return (
    <>
      {webTitle && (
        <Head>
          <title>{webTitleText}</title>
          <meta name="twitter:title" content={webTitleText} />
          <meta property="og:title" content={webTitleText} />
        </Head>
      )}
      <Flex
        id={heading}
        direction="column"
        align="center"
        width="100%"
        h="calc(100vh - 57px)"
        py={20}
        gap={10}
      >
        <LinkBox>
          <LinkOverlay href={heading === 'about' ? '/#about' : `/${heading}`}>
            <Heading
              as={styledHeading}
              color={useColorModeValue('textDark', 'textLight')}
              _after={{
                bg: useColorModeValue('blueLight.500', 'blueDark.200'),
              }}
              mb={10}
            >
              {heading.charAt(0).toUpperCase() + heading.slice(1)}
            </Heading>
          </LinkOverlay>
        </LinkBox>

        {children}
      </Flex>
    </>
  );
};

export default Sectionlayout;
