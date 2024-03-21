"use client";
import { motion } from "framer-motion";
import TextRippleEffect from "./TextRippleEffect";
import Image from "next/image";
export default function Main() {
  const headerVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
  };
  const subHeaderVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };
  const containerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,

      y: 0,
      transition: { delay: 0.1, duration: 0.3 },
    },
  };
  const textLines = [
    "Born and raised in the San Francisco Bay Area.",
    "I'm dedicated to building web applications that are both functional and beautiful.",
    "I'm deeply passionate about crafting intuitive and accessible experiences and strive to ensure that every aspect of the applications I build is not only aesthetically pleasing but also seamlessly functional.",
    "When I'm not coding, you can find me playing basketball, gaming, or exploring the great outdoors.",
  ];
  const paragraphFormat = "text-center sm:text-start";
  return (
    <main className="sm:py-20 sm:px-40 p-5 sm:pl-60 mt-20 sm:mt-0 flex flex-col lg:flex-row items-center lg:gap-10">
      <div>
        {" "}
        <motion.header className="mb-14 sm:mb-20 text-center sm:text-start">
          <motion.h1
            className="mt-10 sm:mt-0  sm:text-5xl text-accentBackground "
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            Yousof Wakili
          </motion.h1>
          <motion.h2
            className="text-subheaderText"
            variants={subHeaderVariants}
            initial="hidden"
            animate="visible"
          >
            Full Stack Engineer | Front End Enthusiast
          </motion.h2>
        </motion.header>
        <section className="flex flex-col gap-5 sm:gap-10 text-sm sm:text-base  font-light">
          <div className={`${paragraphFormat}`}>
            <TextRippleEffect textLines={textLines} />
          </div>
        </section>
      </div>
      <div>
        <div className="flex justify-center items-center ">
          <motion.div
            className="relative w-full max-w-md"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            style={{ minWidth: "300px" }}
          >
            <div className="relative w-full h-0 pb-[166.66%]">
              <Image
                src="/profile_pic.png"
                alt="A picture of Yousof Wakili"
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
