// src/app/layout.js

"use client";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { motion } from "framer-motion";

const space_grotesk = Montserrat({ subsets: ["latin"] });

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <html lang="en">
      <body className={space_grotesk.className}>
        <motion.div>
          <div
            className={`${
              darkMode
                ? "bg-darkBackground text-darkPrimaryText"
                : "bg-lightBackground text-lightPrimaryText"
            }  min-h-screen transition-colors duration-50`}
          >
            {" "}
            <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            {children}
            <footer
              className={`${
                darkMode
                  ? "text-subheaderText transition-colors duration-50 fixed bottom-0 right-3 tracking-wide  text-xs sm:text-base"
                  : "text-subheaderText transition-colors duration-50 fixed bottom-0 right-3 tracking-wide  text-xs sm:text-base"
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
