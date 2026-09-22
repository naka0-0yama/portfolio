import Hero from "./components/Hero";
import SkillsPage from "./components/Skills";
import ProjectsPage from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <SkillsPage />
      <ProjectsPage />
      <Contact />
    </main>
  );
}
