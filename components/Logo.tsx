import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  const lightModeLogo = `/logo-light.svg`;
  const darkModeLogo = `/logo-dark.svg`;

  return (
    <Link href="/">
      <Image
        className="dark:hidden"
        src={lightModeLogo}
        width={50}
        height={50}
        alt="Logo Image"
      />
      <Image
        className="hidden dark:block"
        src={darkModeLogo}
        width={50}
        height={50}
        alt="Logo Image"
      />
    </Link>
  );
};

export default Logo;
