"use client";
import { useState } from "react";
import NavBar from "./components/utils/NavBar";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div
        className={`${
          darkMode && "bg-stone-900 text-white transition-colors duration-50"
        } bg-[#f4f1e5] h-screen transition-colors duration-1000`}
      ></div>
    </div>
  );
}
