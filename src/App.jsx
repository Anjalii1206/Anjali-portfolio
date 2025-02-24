import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="fixed inset-0 -z-10 min-h-screen w-full bg-no-repeat bg-cover bg-fixed [background:radial-gradient(125%_125%_at_50%_10%,#000_30%,#500073_100%)]"></div>
    <div className="container mx-auto px-8">
      <Navbar />
        <section id="home"><Hero /></section>
        <section id="about"><AboutMe /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      <Footer />
    </div>
  </>
  );
}

export default App;
