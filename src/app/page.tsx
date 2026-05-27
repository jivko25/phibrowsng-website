import { About } from "@/components/About";
import { GuideTeaser } from "@/components/GuideTeaser";
import { HomeIntro } from "@/components/HomeIntro";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
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
        <HomeIntro />
        <AnimateOnScroll>
          <Services />
        </AnimateOnScroll>
        <AnimateOnScroll delay={80}>
          <Benefits />
        </AnimateOnScroll>
        <AnimateOnScroll delay={120}>
          <About />
        </AnimateOnScroll>
        <GuideTeaser />
        <AnimateOnScroll delay={80}>
          <FAQ />
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <Contact />
        </AnimateOnScroll>
      </main>
      <Footer />
    </>
  );
}
