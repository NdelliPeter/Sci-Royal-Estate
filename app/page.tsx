import Header from "./components/Header";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Stats from "./components/Stats";
import Divisions from "./components/Divisions";
import WhyUs from "./components/WhyUs";
import OurGroup from "./components/OurGroup";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Welcome />
        <Divisions />
        <WhyUs />
        <OurGroup />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
