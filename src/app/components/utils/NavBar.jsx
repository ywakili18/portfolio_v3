import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { motion } from "framer-motion";
const NavBar = ({ darkMode, toggleDarkMode }) => {
  const linkStyling = `${
    darkMode
      ? "text-white hover:text-stone-600 transition-colors duration-400"
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
      }  transition-colors duration-1000 fixed left-0 top-0 h-full bg-[#f4f1e5] w-30 flex flex-col
      justify-between p-5 `}
    >
      <div>
        <ul className="flex flex-col space-y-10 ">
          <li>
            <Link href="/">
              <span className={linkStyling}>home</span>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <span className={linkStyling}>about</span>
            </Link>
          </li>
          <li>
            <Link href="/#work">
              <span className={linkStyling}>work</span>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <span className={linkStyling}>contact</span>
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
