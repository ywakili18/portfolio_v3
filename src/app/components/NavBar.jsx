"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";
import { motion } from "framer-motion";

const NavBar = ({ darkMode, toggleDarkMode }) => {
  const pathname = usePathname();

  const linkVariants = {
    hover: {
      scale: 1.1,
      y: -5,
      transition: { type: "spring", stiffness: 300 },
    },
    tap: { scale: 0.95 },
  };

  const getLinkStyling = (path) => {
    const isActive = pathname === path;
    return `${
      darkMode
        ? "text-white hover:text-stone-400"
        : "text-black hover:text-stone-500"
    } ${
      isActive
        ? "font-semibold underline decoration-accentBackground underline-offset-4"
        : ""
    } transition-colors duration-300 cursor-pointer`;
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        darkMode ? "bg-stone-900" : "bg-navLightBackground"
      } transition-colors duration-500 fixed sm:left-0 sm:h-full sm:w-36 h-[85px] w-full top-0 flex sm:flex-col sm:justify-between justify-center gap-10 sm:gap-0 items-center sm:items-start p-4 sm:p-10 text-xs sm:text-sm font-pp-book tracking-wide`}
    >
      <div className="flex items-center gap-6 xs:gap-14 sm:grid">
        <motion.p
          className=" font-bold text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          hello world.
        </motion.p>
        <ul className="flex gap-5 sm:gap-0 justify-center sm:mt-44 sm:space-y-5 sm:flex-col">
          {["/", "/about", "/work", "/contact"].map((path, index) => (
            <li key={path}>
              <Link href={path}>
                <motion.span
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className={getLinkStyling(path)}
                >
                  {path === "/"
                    ? "Home"
                    : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <motion.div whileTap={{ scale: 0.8 }}>
        <button className="outline-none" onClick={toggleDarkMode}>
          <DarkModeToggle darkMode={darkMode} />
        </button>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
