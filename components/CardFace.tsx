import { motion } from 'framer-motion';
import Image from 'next/image';

export interface ICardFaceProps {
  icon: string;
  title: string;
}

const CardFace: React.FC<ICardFaceProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <motion.div layoutId={`${title}-icon`}>
        <Image
          className="dark:hidden max-h-full max-w-full"
          src={`/${icon}-light.svg`}
          width={170}
          height={170}
          alt={`${title} card image`}
        />
        <Image
          className="hidden dark:block max-h-full max-w-full"
          src={`/${icon}-dark.svg`}
          width={170}
          height={170}
          alt={`${title} card image`}
        />
      </motion.div>
      <motion.h3 className="text-4xl font-bold" layoutId={`${title}-title`}>
        {title}
      </motion.h3>
    </div>
  );
};

export default CardFace;
