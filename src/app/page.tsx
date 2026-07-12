import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Posa from "@/components/Posa";
import Portfolio from "@/components/Portfolio";
import Fornitura from "@/components/Fornitura";
import Process from "@/components/Process";
import About from "@/components/About";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Gallery />
        <Posa />
        <Portfolio />
        <Fornitura />
        <Process />
        <About />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
