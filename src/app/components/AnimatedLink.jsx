"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedLink = ({ href, download, text, Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const iconHoverAnimation = {
    y: [0, 5, -5, 0],
    opacity: [1, 0, 0, 1],
    transition: {
      y: { duration: 0.6, ease: "easeInOut" },
      opacity: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <motion.a
      href={href}
      download={download}
      className="flex items-center justify-center  p-2 rounded-xl hover:bg-accentBackground transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex items-center "
        animate={isHovered ? iconHoverAnimation : {}}
      >
        {Icon && <Icon className="mr-2" />}
      </motion.div>
      {text}
    </motion.a>
  );
};

export default AnimatedLink;
