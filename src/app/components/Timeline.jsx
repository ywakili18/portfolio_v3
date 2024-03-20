"use client";
import { motion, useAnimation, useInView } from "framer-motion";
export default function Timeline() {
  const events = [
    {
      year: "01/2022 - Present",
      title: "Lead Full Stack Engineer",
      company: "21PSTEM",
      description:
        "Lead Full-Stack agile web development for the EnCOMPASS project: sHTML, CSS, SaSS, JavaScript, Ember.js, Node.js, Express.js, MongoDB, Docker, Jenkins, Material. Assisted in migration of legacy Ember.js models, controllers, and routes code. Consolidated and removed 200+ lines of stale code from web client and Node.js back end services, leading to 15% increase in web performance time",

      techStackItems: [
        { id: "html5", name: "HTML" },
        { id: "css3", name: "CSS" },
        { id: "sass", name: "Sass" },
        { id: "javascript", name: "JavaScript" },
        { id: "nextjs", name: "Next.js" },
        { id: "ember", name: "Ember.js" },
        { id: "nodejs", name: "Node.js" },
        { id: "mongodb", name: "MongoDB" },
        { id: "docker", name: "Docker" },
      ],
    },

    {
      year: "07/2021 - 10/2021",
      title: "Software Engineer Fellow",
      company: "General Assembly",
      description:
        "14 week full-time immersive program that focuses on full-stack development, software engineering, and product development using the latest technologies, OOP, and agile methodologies.",
      techStackItems: [
        { id: "html5", name: "HTML" },
        { id: "css3", name: "CSS" },
        { id: "javascript", name: "JavaScript" },
        { id: "react", name: "React" },
        { id: "nodejs", name: "Node.js" },
        { id: "mongodb", name: "MongoDB" },
        { id: "postgresql", name: "PostgreSQL" },
        { id: "docker", name: "Docker" },
        { id: "python", name: "Python" },
        { id: "django", name: "Django" },
      ],
    },
    {
      year: "01/2021 - 07/2021",
      title: "Integrated Solutions Expert & Project Manager",
      company: "AT&T",
      description:
        "B2B and B2C sales, customer service, and technical support for AT&T products and services. Led daily team meetings, managed team performance, and provided coaching and feedback to team members. Developed and implemented new sales strategies, and provided training to new hires.",
    },
    {
      year: "07/2020 - 12/2020",
      title: "Sales Leader",
      company: "Airport Home Appliance",
      description:
        "Appliance sales, customer service, and technical support for Airport Home Appliance.",
    },
    {
      year: "02/2020 - 07/2020",
      title: "Staffing Manager",
      company: "Randstad USA",
      description:
        "Managed full-cycle recruiting process for Randstad USA. Sourced, screened, and interviewed candidates, and provided coaching and feedback to team members. Developed and implemented new recruiting strategies.",
    },
    {
      year: "03/2015 - 08/2019",
      title: "Account Executive",
      company: "T-Mobile",
      description:
        "B2B sales, client relationship management, and technical support for T-Mobile products and services. ",
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
    <div className="text-xs mt-10">
      {events.map(
        ({ year, title, company, description, techStackItems }, index) => (
          <motion.div
            key={index}
            className="flex items-start mb-5 hover:shadow-lg p-2 rounded transition-all"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={techStackVariants}
          >
            <div className="flex-shrink-0 w-32 pr-4">
              <h4 className="text-sm font-semibold text-stone-400">{year}</h4>
            </div>
            <div className="flex-1">
              <h5 className="xs:text-lg font-semibold">{title}</h5>
              <h6 className="xs:text-base font-semibold">- {company}</h6>
              <p className="mt-1 xs:text-sm text-stone-400">{description}</p>
              <motion.div className="mt-2 flex flex-wrap gap-2">
                {techStackItems &&
                  techStackItems.map(({ id, name }) => (
                    <motion.span
                      key={id}
                      className="px-2 xs:py-1 bg-amber-700 text-yellow-200 font-semibold text-xs rounded-full"
                    >
                      {name}
                    </motion.span>
                  ))}
              </motion.div>
            </div>
          </motion.div>
        )
      )}
    </div>
  );
}
