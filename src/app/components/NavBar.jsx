import Link from "next/link";

import DarkModeToggle from "./DarkModeToggle";
import { motion } from "framer-motion";
const NavBar = ({ darkMode, toggleDarkMode }) => {
  const linkStyling = `${
    darkMode
      ? "text-white hover:text-stone-400 transition-colors duration-400"
      : "text-black hover:text-stone-500 transition-colors duration-400"
  }`;

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={`${
        darkMode && "bg-stone-900 transition-colors duration-50"
      }  transition-colors duration-500 
      fixed sm:left-0 sm:h-full sm:w-36 h-[85px] w-full top-0 bg-navLightBackground
      flex sm:flex-col sm:justify-between justify-center 
      gap-10 sm:gap-0 items-center sm:items-start xs:p-4 sm:p-10 text-xs sm:text-sm font-pp-book tracking-wide`}
    >
      <div className="flex items-center gap-6 xs:gap-14 sm:grid">
        <p className="italic text-xs">hello world.</p>
        <ul className="flex gap-5 sm:gap-0 justify-center sm:mt-44 sm:space-y-5 sm:flex-col">
          <li>
            <Link href="/">
              <span className={linkStyling}>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className={linkStyling}>About</span>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <span className={linkStyling}>Work</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className={linkStyling}>Contact</span>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <button className={linkStyling} onClick={toggleDarkMode}>
          <DarkModeToggle />
        </button>
      </div>
    </motion.nav>
  );
};

export default NavBar;
