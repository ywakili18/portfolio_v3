import { useState } from "react";
import { motion } from "framer-motion";
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";

const DarkModeToggle = () => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSwitch = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div onClick={toggleSwitch} className=" p-2">
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, y: 10, rotate: -45 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, y: -10, rotate: 45 }}
          transition={{ duration: 0.3 }}
        >
          <FaRegSun className="text-xl" />
        </motion.div>
      )}
      {!isSelected && (
        <motion.div
          initial={{ opacity: 0, y: 10, rotate: -45 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, y: -10, rotate: 45 }}
          transition={{ duration: 0.3 }}
        >
          <FaRegMoon className="text-xl" />
        </motion.div>
      )}
    </div>
  );
};

export default DarkModeToggle;
