const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex items-center justify-center w-full h-8">
        <p className="text-center text-textDark dark:text-textLight">
          &copy; {new Date().getFullYear()} Maciej Pieczarka. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
