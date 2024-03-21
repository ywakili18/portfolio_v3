"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DiGithub } from "react-icons/di";
export default function WorkInfo() {
  const projects = [
    {
      name: "Encompass",
      description:
        "Proactively maintained, debugged, and added new features to the Encompass web application - a open source and non profit led project by 21PSTEM - employing a versatile tech stack including HTML, CSS, SaSS, Ember.js, React.js, Node.js, Express.js, MongoDB, Docker, Jenkins, GitHub Actions, and Jira",
      imgSrc: "/encompass.png",
      projectUrl: "https://encompass.mathematicalthinking.org/",

      techStackItems: [
        { id: "html5", name: "HTML" },
        { id: "css3", name: "CSS" },
        { id: "javascript", name: "JavaScript" },
        { id: "react", name: "React" },
        { id: "nodejs", name: "Node.js" },
        { id: "mongodb", name: "MongoDB" },
        { id: "postgresql", name: "PostgreSQL" },
        { id: "docker", name: "Docker" },
      ],
    },
    {
      name: "Reliance Digital Creative ",
      description:
        "Ran an freelance digital marketing agency focused on developing beautiful interactive websites and digital marketing campaigns for small businesses. Built with Next.js, Tailwindcss, framer motion, deployed on Vercel.",
      imgSrc: "/reliancedm.png",
      projectUrl: "https://reliancedm.com/",
      gitUrl: "https://github.com/ywakili18/reliancecreative",
      techStackItems: [
        { id: "html5", name: "HTML" },
        { id: "css3", name: "CSS" },
        { id: "javascript", name: "JavaScript" },
        { id: "react", name: "React" },
        { id: "SaSS", name: "Sass" },
        { id: "nextjs", name: "Next.js" },
        { id: "tailwind", name: "Tailwindcss" },
        { id: "framer", name: "Framer Motion" },
        { id: "vercel", name: "Vercel" },
      ],
    },
    {
      name: "Portfolio V3",
      description:
        "Developed a personal portfolio website using Next.js, Tailwindcss, framer motion, deployed on Vercel.",
      imgSrc: "/portfolio.png",
      projectUrl: "https://yousof.dev/",
      gitUrl: "https://github.com/ywakili18/portfolio_v3",
      techStackItems: [
        { id: "html5", name: "HTML" },
        { id: "css3", name: "CSS" },
        { id: "javascript", name: "JavaScript" },
        { id: "react", name: "React" },
        { id: "nextjs", name: "Next.js" },
        { id: "tailwind", name: "Tailwindcss" },
        { id: "framer", name: "Framer Motion" },
        { id: "vercel", name: "Vercel" },
      ],
    },
  ];
  const techStackVariants = {
    offscreen: {
      opacity: 0,
      y: -20,
    },
    onscreen: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <main className="px-4 py-10 sm:px-20 sm:py-20 lg:pl-44">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center lg:text-left"
      >
        <h1 className="text-4xl lg:text-5xl  mb-4 mt-20 lg:mt-0  text-accentBackground">
          My Work
        </h1>
        <p className="text-base lg:text-lg text-subheaderText">
          A showcase of my projects and contributions.
        </p>
      </motion.header>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mb-8"
        >
          <div className="lg:flex items-center">
            <motion.div
              className="lg:flex-shrink-0 mb-4 lg:mb-0 lg:mr-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <Image
                src={project.imgSrc}
                alt={project.name}
                width={500}
                height={300}
                className="rounded-lg object-cover"
                priority={index === 0}
              />
            </motion.div>
            <div className="text-left">
              <h3 className="text-xl lg:text-2xl font-semibold mb-1">
                {project.name}
              </h3>
              <a
                href={project.projectUrl}
                className="text-accentBackground hover:underline mr-4 flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site <FaExternalLinkAlt />
              </a>
              {project.gitUrl && (
                <a
                  href={project.gitUrl}
                  className="text-accentBackground hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Repo <DiGithub />
                </a>
              )}

              <p className="mt-2 text-sm lg:text-base font-light">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStackItems.map(({ id, name }) => (
                  <motion.span
                    key={id}
                    variants={techStackVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    className="bg-amber-500 text-white font-semibold text-xs lg:text-sm rounded-full px-3 py-1"
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </main>
  );
}
