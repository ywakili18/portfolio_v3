"use client";
import { FiDownload } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { DiGithub } from "react-icons/di";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import AnimatedLink from "./AnimatedLink";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.3 } },
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center lg:flex-row lg:gap-20 p-4">
      <motion.section
        className="text-center mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-2xl md:text-4xl mb-4 text-accentBackground">
          Get in Touch
        </h1>
        <p className="text-sm md:text-base">
          Feel free to reach out for collaborations or just a friendly hello 👋.
        </p>
      </motion.section>
      <div className="space-y-4 font-light">
        <AnimatedLink
          href="https://www.linkedin.com/in/youseffect/"
          text="Connect with me on LinkedIn"
          Icon={FaLinkedinIn}
        />
        <AnimatedLink
          href="/resume.pdf" // Update with your resume file
          text="Download my resume"
          Icon={FiDownload}
        />
        <AnimatedLink
          href="https://www.github.com/ywakili18"
          text="My Github Profile"
          Icon={DiGithub}
        />
        <AnimatedLink
          href="mailto:ywakilidev@gmail.com"
          text="Email me"
          Icon={HiOutlineMail}
        />
      </div>
    </main>
  );
}
