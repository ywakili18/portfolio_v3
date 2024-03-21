// src/app/layout.js

"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { motion } from "framer-motion";
import { DiGithub } from "react-icons/di";
import { SiPcgamingwiki } from "react-icons/si";
const roboto = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" sizes="any" />
      <body className={roboto.className}>
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
            <footer className="text-subheaderText transition-colors duration-50 fixed bottom-0 right-3 tracking-wide  text-sm">
              <div className=" flex flex-col items-end">
                <a
                  href="https://github.com/ywakili18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-accentBackground transition-all flex items-center gap-1"
                >
                  Check out my GitHub <DiGithub className="text-2xl" />
                </a>
                <p>
                  &copy; {new Date().getFullYear()} Yousof Wakili. All Rights
                  Reserved.{" "}
                </p>
              </div>
            </footer>
          </div>
        </motion.div>
      </body>
    </html>
  );
}
