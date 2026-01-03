import { motion } from "framer-motion";

interface TechBadgeProps {
  name: string;
  index?: number;
}

const TechBadge = ({ name, index = 0 }: TechBadgeProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-badge text-badge-foreground transition-colors hover:bg-primary/10 hover:text-primary cursor-default"
      data-hoverable
    >
      {name}
    </motion.span>
  );
};

export default TechBadge;