import { motion } from "framer-motion";
export default function Timeline() {
  const events = [
    {
      year: "01/2021 - Present",
      title: "Lead Full Stack Engineer",
      company: "21PSTEM",
      description:
        "Lead Full-Stack agile web development for the EnCOMPASS project: HTML, CSS, SaSS, JavaScript, Ember.js, Node.js, Express.js, MongoDB, Docker, Jenkins, Material. Assisted in migration of legacy Ember.js models, controllers, and routes code. Consolidated and removed 200+ lines of stale code from web client and Node.js back end services, leading to 15% increase in web performance time. Addressed software issues and implemented new features as product manager between CSU San Marcos, Drexel University, and 21PSTEM board leading into a 25% increase in new user engagement with teachers, students, and admin",
      techStackItems: [
        { id: "html5", name: "HTML" },
        { id: "css3", name: "CSS" },
        { id: "sass", name: "Sass" },
        { id: "tailwindcss", name: "Tailwind CSS" },
        { id: "javascript", name: "JavaScript" },
        { id: "react", name: "React" },
        { id: "nextjs", name: "Next.js" },
        { id: "ember", name: "Ember.js" },
        { id: "nodejs", name: "Node.js" },
        { id: "mongodb", name: "MongoDB" },
        { id: "postgresql", name: "PostgreSQL" },
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
      ],
    },
    {
      year: "01/2021 - 07/2021",
      title: "Integrated Solutions Expert & Project Manager",
      company: "AT&T",
      description:
        "B2B and B2C sales, customer service, and technical support for AT&T products and services. Led daily team meetings, managed team performance, and provided coaching and feedback to team members. Developed and implemented new sales strategies, and provided training to new hires.",
    },
  ];

  return (
    <div className="text-xs mt-10">
      {events.map(({ year, title, company, description, techStackItems }) => (
        <div
          key={company}
          className="flex items-start mb-8 hover:shadow-2xl p-2 rounded transition-all"
        >
          {/* Year as a subheader */}
          <div className="flex-shrink-0 w-32 pr-4">
            <h4 className="text-sm font-semibold text-stone-400">{year}</h4>
          </div>
          {/* Main content */}
          <div className="flex-1">
            <h5 className="text-lg font-semibold">{title}</h5>
            <h6 className="text-base font-semibold">- {company}</h6>
            <p className="mt-1 text-sm text-stone-400">{description}</p>
            {/* Tech stack */}
            {techStackItems && (
              <div className="mt-2 flex flex-wrap gap-2">
                {techStackItems.map(({ id, name }) => (
                  <span
                    key={id}
                    className="px-2 py-1 bg-amber-700 text-yellow-200 font-semibold text-xs rounded-full"
                  >
                    {name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
