import { CustomImg } from '../app/page';
import { motion } from 'framer-motion';
import { rise } from '../lib/animationVariants';

interface IWorkCardProps {
  img: string;
  url: string;
  codeUrl: string;
  title: string;
  description: string;
}

const WorkCard: React.FC<IWorkCardProps> = ({
  img,
  url,
  codeUrl,
  title,
  description,
}) => {
  return (
    <motion.div className="text-center w-full h-full relative" variants={rise}>
      <div className="aspect-video relative rounded-3xl overflow-hidden mx-auto shadow-md">
        <CustomImg src={img} layout="fill" alt={`${title} preview image`} />
        <div className="flex absolute inset-0 flex-col items-center justify-center gap-10 opacity-0 transition-opacity duration-300 ease-in hover:opacity-90 bg-textDark dark:text-textLight">
          <a href={url} target="_blank" rel="noreferrer noopener">
            <p className="cursor-pointer underline text-xl text-textLight dark:text-textDark">
              Live Preview
            </p>
          </a>
          <a href={codeUrl} target="_blank" rel="noreferrer">
            <p className="cursor-pointer underline text-xl text-textLight dark:text-textDark">
              Code
            </p>
          </a>
        </div>
      </div>

      <h3 className="mt-3 text-2xl font-semibold">{title}</h3>

      <p>{description}</p>
    </motion.div>
  );
};

export default WorkCard;
