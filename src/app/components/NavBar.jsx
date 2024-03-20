"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";
import { motion } from "framer-motion";

const NavBar = ({ darkMode, toggleDarkMode }) => {
  const pathname = usePathname();

  const getLinkStyling = (path) => {
    const isActive = pathname === path;
    return `${
      darkMode
        ? "text-white hover:text-stone-400"
        : "text-black hover:text-stone-500"
    } ${isActive ? "font-bold underline" : ""} transition-colors duration-400`;
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={`${
        darkMode ? "bg-stone-900" : "bg-navLightBackground"
      } transition-colors duration-500 fixed sm:left-0 sm:h-full sm:w-36 h-[85px] w-full top-0 flex sm:flex-col sm:justify-between justify-center gap-10 sm:gap-0 items-center sm:items-start p-4 sm:p-10 text-xs sm:text-sm font-pp-book tracking-wide`}
    >
      <div className="flex items-center gap-6 xs:gap-14 sm:grid">
        <p className="italic text-xs">hello world.</p>
        <ul className="flex gap-5 sm:gap-0 justify-center sm:mt-44 sm:space-y-5 sm:flex-col">
          <li>
            <Link href="/" className={getLinkStyling("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={getLinkStyling("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link href="/work" className={getLinkStyling("/work")}>
              Work
            </Link>
          </li>
          <li>
            <Link href="/contact" className={getLinkStyling("/contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="outline-none" onClick={toggleDarkMode}>
          <DarkModeToggle darkMode={darkMode} />
        </button>
      </div>
    </motion.nav>
  );
};

export default NavBar;
