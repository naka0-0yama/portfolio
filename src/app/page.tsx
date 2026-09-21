import Image from "next/image";
import HeaderPage from "./components/Header";
import Hero from "./components/Hero";
import SkillsPage from "./components/Skills";
export default function Home() {
  return (
    <main className="">
      <HeaderPage />
      <Hero />
      <SkillsPage />
    </main>
  );
}
