"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedLink = ({ href, download, text, Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverAnimation = {
    y: [0, 10, -5, 0], // Moves the icon downwards, then slightly up, and resets
    opacity: [1, 0, 0, 1], // Fades the icon out and back in
    transition: {
      y: { duration: 0.6, ease: "easeInOut" },
      opacity: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <motion.a
      href={href}
      download={download}
      className="flex items-center justify-center rounded-xl p-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={isHovered ? hoverAnimation : {}}
        className="flex items-center"
      >
        {Icon && <Icon className="mr-2" />}
      </motion.div>
      {text}
    </motion.a>
  );
};

export default AnimatedLink;
