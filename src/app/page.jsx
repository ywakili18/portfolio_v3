"use client";
import { useState } from "react";
import NavBar from "./components/utils/NavBar";
import Main from "./components/main/Main";
import { motion } from "framer-motion";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div
        className={`${
          darkMode && "bg-stone-900 text-white transition-colors duration-50"
        } bg-[#f4f1e5] h-screen transition-colors duration-1000`}
      >
        <Main />
      </div>
    </motion.div>
  );
}
