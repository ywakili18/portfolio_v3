"use client";
import { FiDownload } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedLink from "./AnimatedLink";
export default function Contact() {
  return (
    <main className="min-h-screen  flex flex-col items-center justify-center">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold  mb-4">Get in Touch</h1>
        <p className="text-subheaderText">
          Feel free to reach out for collaborations or just a friendly hello 👋.
        </p>
      </section>
      <div className="space-y-4">
        <AnimatedLink
          href="https://www.linkedin.com/in/youseffect/"
          download={false}
          text="Connect with me on LinkedIn"
          Icon={FaLinkedinIn}
        />
        <AnimatedLink
          href="/resume.pdf" // Update with your resume file
          download={true}
          text="Download my resume"
          Icon={FiDownload}
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
