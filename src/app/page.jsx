"use client";
import { useState } from "react";
import DarkModeToggle from "./components/utils/DarkModeToggle";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      {" "}
      <div
        className={`${
          darkMode && "bg-[#1d1d1d] text-white transition-colors duration-50"
        } bg-[#f4f1e5] h-screen transition-colors duration-1000`}
      >
        <button className="" onClick={toggleDarkMode}>
          <DarkModeToggle />
        </button>
      </div>
    </div>
  );
}
