"use client";
import { motion } from "framer-motion";
export default function AboutMe() {
  const paragraphFormat = "text-center sm:text-start";
  return (
    <motion.div className="mt-[85px] lg:mt-0">
      <header className=" mb-5 sm:mb-20 text-center sm:text-start">
        <h1 className="sm:text-5xl pt-5">About Me</h1>
        <h2 className="text-subheaderText text-sm  md:text-base">
          Get to know me a little better
        </h2>
      </header>
      <div className="flex flex-col gap-8 text-xs xs:text-sm  sm:text-lg">
        <div className={`${paragraphFormat}`}>
          <p>
            Currently, I'm working as a{" "}
            <a
              className=" hover:text-subheaderText transition-all"
              href="https://www.21pstem.org/encompass"
            >
              full-stack engineer at 21st Century Partnership for STEM Education
            </a>
            , where my focus lies in identifying and implementing innovative
            solutions to transform education and empower learners.
          </p>
        </div>
        <div className={`${paragraphFormat}`}>
          <p>
            My role involves a diverse range of responsibilities, where I tackle
            everything from debugging and troubleshooting, to crafting APIs,
            integrating new features, and enhancing the overall aesthetic appeal
            of our application. I also assist in overseeing product management
            and establishing effective communication channels with Encompass
            staff for feature implementation, bug fixes, and requirement
            gathering.
          </p>
        </div>
        <div className={`${paragraphFormat}`}>
          <p>
            Previously, I worked in B2B and B2C sales, client support, team
            management and leading daily meetings. I've always had a passion for
            coding in my part time, and in 2020 I decided to go through a self
            coding journey which led me enrolling in a software engineering
            immersive course. I've been coding, fixing bugs ever since and I'm
            loving every bit of it.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
