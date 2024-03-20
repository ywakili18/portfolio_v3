// src/app/layout.js

"use client";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { motion } from "framer-motion";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

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
            <footer className="text-subheaderText transition-colors duration-50 fixed bottom-0 right-3 tracking-wide  text-xs">
              <p>yousof.dev ©2024</p>
              <p>Made with Next.js</p>
            </footer>
          </div>
        </motion.div>
      </body>
    </html>
  );
}
