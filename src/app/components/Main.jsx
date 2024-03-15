export default function Main() {
  return (
    <main className="sm:py-20 sm:px-40 pt-5 pl-24 sm:pl-40">
      <header className="mb-20">
        <h1 className=" font-thin sm:text-6xl mt-20 sm:mt-0">Yousof Wakili</h1>
        <h2>Full Stack Developer and Designer</h2>
      </header>
      <section className="flex flex-col gap-10 text-sm sm:text-lg">
        {" "}
        <div>
          <p>
            I am a SF Bay Area native focused on building web applications that
            are functional and beautiful. I am passionate about creating
            experiences that are intuitive and accessible. Based out of the SF
            Bay Area.
          </p>
        </div>
        <div className="">
          <p>
            Currently, I work as a{" "}
            <a
              className="font-bold hover:text-stone-400 cursor-pointer "
              href="https://www.21pstem.org/encompass"
            >
              full-stack engineer at 21st Century Partnership for STEM Education
            </a>
            , dedicated to identifying and implementing ways to transform
            education to empower learners and improve lives.{" "}
          </p>
        </div>
      </section>
    </main>
  );
}
