import React from "react";
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
  return (
    <section className="mt-10 sm:mt-20">
      <h3 className="text-lg font-semibold sm:mb-20 text-center mb-5">
        Tech Stack
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
        {techStackItems.map(({ id, name, Icon }) => (
          <div key={id} className="flex flex-col items-center">
            <Icon className="text-3xl sm:text-5xl" />
            <span className="text-xs sm:text-base">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
