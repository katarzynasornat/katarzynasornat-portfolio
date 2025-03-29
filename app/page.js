'use client';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectIcons from "./components/ProjectIcon";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Work/>
    <Contact/>
    <div className="min-h-screen flex justify-center items-center p-6 bg-gray-100">
      <ProjectIcons />
    </div>
    <Footer/>
    </>
  );
}
