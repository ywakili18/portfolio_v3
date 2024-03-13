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
    //
    <motion.nav
      className={`${
        darkMode && "bg-stone-900 transition-colors duration-50"
      }  transition-colors duration-500 fixed left-0 top-0 h-full bg-[#f4f1e5] sm:w-30
      flex flex-col justify-between p-4 sm:p-10 text-sm`}
    >
      <div>
        <ul className="flex mt-64 space-y-5 flex-col">
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
