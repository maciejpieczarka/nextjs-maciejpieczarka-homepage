'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sectionlayout = ({ children }: { children: React.ReactNode }) => {
  const heading = usePathname().slice(1);

  return (
    <div
      className="flex flex-col items-center w-full py-16 gap-5 text-textDark dark:text-textLight min-h-[calc(100vh-4rem-2rem)]"
      id={heading ? heading : undefined}
    >
      <Link href={`/${heading}`}>
        <h1 className="mb-6 after:bg-blueLight-500 dark:after:bg-blueDark-200 text-textDark dark:text-textLight  text-4xl font-bold text-center relative pb-1 content-none after:absolute after:rounded-full after:w-1/2 after:h-1 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all after:duration-300 after:ease-in hover:after:w-[125%]">
          {heading.charAt(0).toUpperCase() + heading.slice(1)}
        </h1>
      </Link>

      {children}
    </div>
  );
};

export default Sectionlayout;
