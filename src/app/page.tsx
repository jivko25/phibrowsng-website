import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Benefits />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
