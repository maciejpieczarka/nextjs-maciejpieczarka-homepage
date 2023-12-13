'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { IoClose, IoMenu } from 'react-icons/io5';
import { ImSpinner10 } from 'react-icons/im';

// Components
const ThemeToggleButton = dynamic(() => import('./ThemeToggleBtn'), {
  loading: () => (
    <div className="flex items-center justify-center w-10 h-10">
      <ImSpinner10 className="animate-spin text-center" />
    </div>
  ),
});
import Link from 'next/link';
import Logo from './Logo';

// hooks
import { usePathname } from 'next/navigation';
import { useOutsideAlerter } from '../hooks/useOutsideAlerter';

interface ILinkItemProps {
  href: string;
  path: string;
  children: React.ReactNode;
  mobile?: boolean;
}

const LinkItem: React.FC<ILinkItemProps> = ({
  href,
  path,
  children,
  mobile = false,
}) => {
  const active = path === href;

  return (
    <>
      {mobile ? (
        <Link
          href={href}
          className={`${active ? 'font-semibold' : 'font-light'} font-nunito`}
        >
          <div
            className={`px-2 py-2  ${
              active && 'bg-gray-100 dark:bg-zinc-900'
            } hover:bg-gray-100 hover:dark:bg-zinc-900 text-textDark dark:text-textLight`}
          >
            {children}
          </div>
        </Link>
      ) : (
        <Link
          href={href}
          className={`${
            active ? 'underline font-semibold' : 'no-underline font-light'
          } font-nunito text-textDark dark:text-textLight`}
        >
          {children}
        </Link>
      )}
    </>
  );
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const mobileNavRef = React.useRef<HTMLDivElement>(null);
  const clickedOutside = useOutsideAlerter(mobileNavRef);

  React.useEffect(() => {
    setIsOpen(false); // Close the navigation panel
  }, [pathname]);

  React.useEffect(() => {
    if (clickedOutside) {
      setIsOpen(false);
    }
  }, [clickedOutside]);

  return (
    <nav className="w-full bg-[#F4E9DF] dark:bg-[#27272B] sticky top-0 backdrop-blur-sm z-10 py-1">
      <div className="px-2 md:px-0 max-w-7xl mx-auto ">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex justify-center items-center gap-2 w-full  text-textDark dark:text-textLight ">
            <LinkItem href="/" path={pathname}>
              Home
            </LinkItem>
            <LinkItem href="/skills" path={pathname}>
              Skills
            </LinkItem>
            <LinkItem href="/works" path={pathname}>
              Works
            </LinkItem>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggleButton />

            <div className="md:hidden relative">
              <button
                className=" w-10 h-10 rounded-md flex items-center justify-center bg-textDark dark:bg-textLight"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu-button"
              >
                {isOpen ? (
                  <IoClose className="text-textLight dark:text-textDark text-2xl" />
                ) : (
                  <IoMenu className="text-textLight dark:text-textDark text-2xl" />
                )}
              </button>

              {isOpen && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  ref={mobileNavRef}
                  className="absolute flex flex-col w-56 bg-textLight dark:bg-textDark mt-2 right-0 py-2 rounded-md border-gray-300 border"
                >
                  <LinkItem mobile href="/" path={pathname}>
                    Home
                  </LinkItem>

                  <LinkItem mobile href="/skills" path={pathname}>
                    Skills
                  </LinkItem>

                  <LinkItem mobile href="/works" path={pathname}>
                    Works
                  </LinkItem>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
