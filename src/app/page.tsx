import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <About />

      </main>
    </>
    
  );
}
