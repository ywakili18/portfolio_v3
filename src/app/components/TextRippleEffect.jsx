import { motion } from "framer-motion";

export default function TextRippleEffect({ textLines }) {
  // Animation variants for the container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  // Animation variants for each child (line of text)
  const childVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
      y: 0,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-2"
    >
      {textLines.map((line, index) => (
        <motion.div key={index} variants={childVariants}>
          <p className="">{line}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
