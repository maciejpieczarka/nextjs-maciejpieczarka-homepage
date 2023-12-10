'use client';
import { motion } from 'framer-motion';
import SkillCard from '../../../components/SkillCard';
import skills from '../../../lib/skills.json';

const SkillsPage = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-10 mt-10"
      initial="start"
      whileInView="end"
      transition={{ staggerChildren: 0.2 }}
    >
      <SkillCard
        title="Frontend"
        icon="frontend-icon"
        listContent={skills.frontend}
      />

      <SkillCard
        title="Backend"
        icon="backend-icon"
        listContent={skills.backend}
      />

      <SkillCard title="Tools" icon="tools-icon" listContent={skills.tools} />
    </motion.div>
  );
};

export default SkillsPage;
