export default function Main({ darkMode }) {
  const paragraphFormat = "text-center sm:text-start";
  return (
    <main className="sm:py-20 sm:px-40 p-5 sm:pl-60 mt-20 sm:mt-0 ">
      <header className="mb-14 sm:mb-20 text-center sm:text-start">
        <h1 className="mt-10 sm:mt-0  sm:text-5xl ">Yousof Wakili</h1>
        <h2 className="text-subheaderText ">
          Full Stack Engineer | Front End Enthusiast
        </h2>
      </header>
      <section className="flex flex-col gap-5 sm:gap-10 text-sm sm:text-lg ">
        {" "}
        <div className={`${paragraphFormat}`}>
          <p>
            Born and raised in the San Francisco Bay Area, I'm dedicated to
            building web applications that are both functional and beautiful, I
            am deeply passionate about crafting intuitive and accessible
            experiences. I strive to ensure that every aspect of the
            applications I build is not only aesthetically pleasing but also
            seamlessly functional.
          </p>
        </div>
      </section>
    </main>
  );
}
