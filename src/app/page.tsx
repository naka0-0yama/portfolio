import Image from "next/image";
import HeaderPage from "./components/Header";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <main className="">
      <HeaderPage />
      <Hero />
    </main>
  );
}
