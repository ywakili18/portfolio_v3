"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
  const paragraphFormat = "text-center sm:text-start";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="mt-[85px] lg:mt-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header
        className="mb-5 sm:mb-20 text-center sm:text-start"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="sm:text-5xl pt-5 text-accentBackground">About Me</h1>
        <h2 className="text-subheaderText text-sm md:text-base">
          Get to know me a little better
        </h2>
      </motion.header>
      {/* paragraphs start here */}
      <motion.div
        className="flex flex-col gap-8 text-xs xs:text-sm sm:text-base font-light"
        variants={containerVariants} // Apply container variants here
      >
        <motion.p className={`${paragraphFormat}`} variants={childVariants}>
          Currently, I&apos;m working as a{" "}
          <a
            className="hover:text-accentBackground transition-all font-bold "
            href="https://www.21pstem.org/encompass"
          >
            full-stack engineer at 21st Century Partnership for STEM Education
          </a>
          , where my focus lies in identifying and implementing innovative
          solutions to transform education and empower learners.
        </motion.p>
        <motion.p className={`${paragraphFormat}`} variants={childVariants}>
          My role involves a diverse range of responsibilities, where I tackle
          everything from debugging and troubleshooting, to crafting APIs,
          integrating new features, and enhancing the overall aesthetic appeal
          of our application. I also assist in overseeing product management and
          establishing effective communication channels with Encompass staff for
          feature implementation, bug fixes, and requirement gathering.
        </motion.p>
        <motion.p className={`${paragraphFormat}`} variants={childVariants}>
          Previously, I worked in B2B and B2C sales, client support, team
          management, and leading daily meetings. I&apos;ve always had a passion
          for coding in my part time, and in 2020 I decided to go through a
          self-coding journey which led me enrolling in a software engineering
          immersive course. I&apos;ve been coding, fixing bugs ever since and
          I&apos;m loving every bit of it.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
