'use client';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectIcons from "./components/ProjectIcon";
import Fun from "./components/Fun";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    {/* <Work/> */}
    <Fun/>
    <ProjectIcons />
    <Contact/>
    <Footer/>
    </>
  );
}
