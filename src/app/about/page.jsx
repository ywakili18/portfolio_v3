import TechStack from "../components/TechStack";
import AboutMe from "../components/AboutMe";
import Timeline from "../components/Timeline";
export const metadata = {
  title: "Yousof Wakili | About",
};

export default function Page() {
  return (
    <div className="">
      <main
        className="sm:px-20 sm:py-20 sm:pl-44 
      sm:flex flex-col lg:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <div className="lg:flex lg:items-center lg:justify-between">
            <section className="lg:w-1/2">
              <AboutMe />
            </section>
            <section>
              <TechStack />
            </section>
          </div>
          <div>
            <section>
              <Timeline />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
