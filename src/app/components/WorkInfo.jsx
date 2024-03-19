import Image from "next/image";
export default function WorkInfo() {
  const projects = [
    {
      name: "Encompass",
      description:
        "Proactively maintained, debugged, and added new features to the Encompass web application, employing a versatile tech stack including HTML, CSS, SaSS, Ember.js, React.js, Node.js, Express.js, MongoDB, Docker, Jenkins, GitHub Actions, and Jira",
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
      imgSrc: "/reliancedm.png",
      projectUrl: "https://reliancedm.com/",
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
  return (
    <main className="sm:px-20 sm:py-20 sm:pl-44 pt-24">
      <header className=" mb-5 sm:mb-20 text-center sm:text-start">
        <h1 className="sm:text-5xl pt-5">My Work</h1>
        <h2 className="text-subheaderText text-sm  md:text-base">
          A showcase of my projects and contributions.
        </h2>
      </header>
      <div>
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row pb-10  items-center sm:items-start shadow-lg rounded-lg hover:shadow-2xl transition-all"
          >
            {/* Image container */}
            <div className="flex-shrink-0 mb-4 sm:mb-0">
              <Image
                src={project.imgSrc}
                alt={project.name}
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
            {/* Description container aligned to the right */}
            <div className="flex-grow ml-0 lg:ml-10 p-2">
              {/* Project name and link */}
              <a
                href={project.projectUrl}
                className="text-xl sm:text-2xl font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </a>
              <p className="mt-2 text-sm sm:text-base">{project.description}</p>
              {/* Tech stack */}
              {project.techStackItems && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.techStackItems.map(({ id, name }) => (
                    <span
                      key={id}
                      className="bg-amber-700 text-yellow-200 font-semibold text-xs rounded-full hover:bg-amber-600 transition-colors p-2"
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
    </main>
  );
}
