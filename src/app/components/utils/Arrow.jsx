import React from "react";
import { motion } from "framer-motion";

const Arrow = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="cursor-pointer">
        <motion.div
          whileHover={{ height: "100px" }} // Adjust width as needed
          className="w-6 h-0.5 bg-black cursor-pointer"
        />
      </div>
      <div className="">
        <p>text goes here</p>
      </div>
    </div>
  );
};

export default Arrow;
