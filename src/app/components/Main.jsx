export default function Main({ darkMode }) {
  return (
    <main className="sm:py-20 sm:px-40 pt-5 pl-24 sm:pl-40">
      <header className="mb-20">
        <h1 className=" font-thin sm:text-6xl mt-20 sm:mt-0">Yousof Wakili</h1>
        <h2 className="text-subheaderText">
          Full Stack Developer and Designer
        </h2>
      </header>
      <section className="flex flex-col gap-10 text-sm sm:text-lg">
        {" "}
        <div>
          <p>
            As a SF Bay Area native dedicated to building web applications that
            are both functional and beautiful, I am deeply passionate about
            crafting intuitive and accessible experiences. I strive to ensure
            that every aspect of the applications I build is not only
            aesthetically pleasing but also seamlessly functional.
          </p>
        </div>
        <div className="">
          <p>
            Currently, I'm working as a{" "}
            <a
              className="font-bold hover:text-subheaderText transition-all"
              href="https://www.21pstem.org/encompass"
            >
              full-stack engineer at 21st Century Partnership for STEM Education
            </a>
            , where my focus lies in identifying and implementing innovative
            solutions to transform education and empower learners.
          </p>
        </div>
        <div>
          {" "}
          <p>
            {" "}
            My role involves a diverse range of responsibilities, where I tackle
            everything from debugging and troubleshooting to crafting APIs,
            integrating new features, and enhancing the overall aesthetic appeal
            of our applications. I also assist in overseeing product management
            and establishing effective communication channels with Encompass
            staff for feature implementation, bug fixes, and requirement
            gathering.
          </p>
        </div>
      </section>
    </main>
  );
}
