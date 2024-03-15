// src/app/page.jsx

import Main from "./components/Main";
export const metadata = {
  title: "Yousof Wakili",
  description:
    "Yousof Wakili - Full Stack Developer and Designer, portfolio. Based out of San Francisco Bay Area.",
};

export default function Home({ darkMode }) {
  return (
    <div>
      <Main darkMode={darkMode} />
    </div>
  );
}
