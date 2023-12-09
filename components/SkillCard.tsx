import * as React from 'react';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import CardFace from './CardFace';
import type { ICardFaceProps } from './CardFace';
import { slideRight, rise } from '../lib/animationVariants';

interface ISkillCardProps extends ICardFaceProps {
  listContent: {
    skillName: string;
    skillDesc: string;
  }[];
}

const SkillCard: React.FC<ISkillCardProps> = ({ icon, title, listContent }) => {
  const [selectedCard, setSelectedCard] = React.useState<string | null>(null);

  return (
    <>
      <motion.div
        className="p-12 rounded-3xl shadow-lg bg-[#E6D9CE] dark:bg-[#2B2B2E] cursor-pointer hover:shadow-xl"
        variants={rise}
        layoutId={title}
        onClick={() => setSelectedCard(title)}
      >
        <CardFace title={title} icon={icon} />
      </motion.div>

      {selectedCard && (
        <>
          <div className="fixed top-0 left-0 h-screen w-screen bg-textDark dark:bg-textLight opacity-50 z-10" />
          <div className="flex fixed inset-0 items-center justify-center z-20">
            <motion.div
              className="flex flex-col md:flex-row relative p-12 rounded-3xl shadow-xl gap-12 justify-center items-center bg-[#E6D9CE] dark:bg-[#2B2B2E]"
              layoutId={title}
            >
              <CardFace title={title} icon={icon} />
              <motion.ul
                initial="start"
                whileInView="end"
                transition={{ delayChildren: 0.1, staggerChildren: 0.1 }}
              >
                {listContent.map(({ skillName, skillDesc }) => (
                  <motion.li
                    className="list-disc"
                    key={skillName}
                    variants={slideRight}
                  >
                    <span className="font-bold">{skillName}</span>
                    &nbsp;-&nbsp;{skillDesc}
                  </motion.li>
                ))}
              </motion.ul>
              <div className="absolute top-6 right-6">
                <button
                  className="text-3xl hover:text-blueLight-500 dark:hover:blueDark-200"
                  aria-label="Hide details"
                  onClick={() => {
                    setSelectedCard(null);
                  }}
                >
                  <IoClose />
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
};

export default SkillCard;
