"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiPostgresql,
  DiDocker,
} from "react-icons/di";
import { FaEmber, FaSass } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const techStackItems = [
  { id: "html5", name: "HTML", Icon: DiHtml5 },
  { id: "css3", name: "CSS", Icon: DiCss3 },
  { id: "sass", name: "Sass", Icon: FaSass },
  { id: "tailwindcss", name: "Tailwind CSS", Icon: SiTailwindcss },
  { id: "javascript", name: "JavaScript", Icon: DiJavascript1 },
  { id: "react", name: "React", Icon: DiReact },
  { id: "nextjs", name: "Next.js", Icon: SiNextdotjs },
  { id: "ember", name: "Ember.js", Icon: FaEmber },
  { id: "nodejs", name: "Node.js", Icon: DiNodejsSmall },
  { id: "mongodb", name: "MongoDB", Icon: DiMongodb },
  { id: "postgresql", name: "PostgreSQL", Icon: DiPostgresql },
  { id: "docker", name: "Docker", Icon: DiDocker },
];

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.section
      className="mt-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h3 className="text-lg font-semibold  text-center mb-10">Tech Stack</h3>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5"
        variants={containerVariants}
      >
        {techStackItems.map(({ id, name, Icon }) => (
          <motion.div
            key={id}
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <Icon className="text-3xl sm:text-5xl" />
            <span className="text-xs sm:text-base">{name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
