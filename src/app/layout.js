// src/app/layout.js

"use client";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { motion } from "framer-motion";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <html lang="en">
      <body className={space_grotesk.className}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div
            className={`${
              darkMode &&
              "bg-stone-800 text-stone-300 transition-colors duration-50"
            } bg-[#fffefa] h-screen transition-colors duration-500`}
          >
            {children} {/* Render children directly */}
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
          </div>
        </motion.div>
      </body>
    </html>
  );
}
