import Image from "next/image";
import HeaderPage from "./components/Header";
import Hero from "./components/Hero";
import SkillsPage from "./components/Skills";
import ProjectsPage from "./components/Projects";
export default function Home() {
  return (
    <main className="">
      <HeaderPage />
      <Hero />
      <SkillsPage />
      <ProjectsPage />
    </main>
  );
}
