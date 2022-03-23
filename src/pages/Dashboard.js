import React from "react";
import Contact from "../layouts/Contact";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Projects from "../layouts/Projects";
import Skills from "../layouts/Skills";
import Welcome from "../layouts/Welcome";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Dashboard;
