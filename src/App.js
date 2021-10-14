import React from "react";
import "./App.css";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import ToLearn from "./components/ToLearn";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Skills />
      <ToLearn />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
