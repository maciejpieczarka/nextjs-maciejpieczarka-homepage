'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useColorModeValue } from '@chakra-ui/react';

const Logo = () => {
  const Img = `/logo${useColorModeValue('-light', '-dark')}.svg`;

  return (
    <Link href="/">
      <Image src={Img} width={50} height={50} alt="Logo Image" />
    </Link>
  );
};

export default Logo;
