import Image from "next/image";
import HeaderPage from "./components/Header";
import Hero from "./components/Hero";
import SkillsPage from "./components/Skills";
import ProjectsPage from "./components/Projects";
import About from "./components/About";
export default function Home() {
  return (
    <main className="">
      <HeaderPage />
      <Hero />
      <About />
      <SkillsPage />
      <ProjectsPage />
    </main>
  );
}
