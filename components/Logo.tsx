import Link from 'next/link';
import Image from 'next/image';
import { useColorModeValue } from '@chakra-ui/react';

const Logo = () => {
  const Img = `/logo${useColorModeValue('-light', '-dark')}.svg`;

  return (
    <Link href="/">
      <a>
        <Image src={Img} width={60} height={60} alt="Logo Image" />
      </a>
    </Link>
  );
};

export default Logo;
