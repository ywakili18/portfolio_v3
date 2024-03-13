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
          darkMode &&
          "bg-stone-800 text-stone-300 transition-colors duration-50"
        } bg-[#fffefa] h-screen transition-colors duration-500`}
      >
        <Main darkMode={{ darkMode }} />
      </div>
      <footer
        className={`${
          darkMode &&
          "text-white transition-colors duration-50 fixed bottom-0 right-0"
        } "text-black transition-colors duration-50 fixed bottom-2 right-3 `}
      >
        <span
          className={`${
            darkMode && "text-sm tracking-widest text-stone-200"
          }, text-sm tracking-widest text-stone-700`}
        >
          yousof.dev ©2024
        </span>
      </footer>
    </motion.div>
  );
}
