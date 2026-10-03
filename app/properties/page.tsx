import type { Metadata } from "next";
import Header from "../components/Header";
import Divisions from "../components/Divisions";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Properties | SCI Royal Estate",
  description:
    "Six disciplines, under one roof — explore SCI Royal Estate's property divisions.",
};

export default function PropertiesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#121212] pt-20">
        <Divisions />
      </main>
      <Footer />
    </>
  );
}
