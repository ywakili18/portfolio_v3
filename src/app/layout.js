// src/app/layout.js

"use client";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { motion } from "framer-motion";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true);
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
              darkMode
                ? "bg-darkBackground text-darkPrimaryText"
                : "bg-lightBackground text-lightPrimaryText"
            }  h-screen transition-colors duration-50`}
          >
            {children} {/* Render children directly */}
            <footer
              className={`${
                darkMode
                  ? "text-stone-500 transition-colors duration-50 fixed bottom-0 right-3 tracking-wide font-light text-xs sm:text-base"
                  : "text-stone-500 transition-colors duration-50 fixed bottom-0 right-3 tracking-wide font-light text-xs sm:text-base"
              }`}
            >
              <span>yousof.dev ©2024</span>
            </footer>
          </div>
        </motion.div>
      </body>
    </html>
  );
}
