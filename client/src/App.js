import React, { useEffect, useState } from "react";
import './App.css';
import './styles/style.css';
import './styles/media.css';
import useScrollSpy from './hooks/useScrollSpy';

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";
import Resume from "./components/sections/Resume";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";

function App() {
  const [about, setAbout] = useState({});
  const [contact, setContact] = useState({});
  const [projects, setProjects] = useState([]);

  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    // Fetch data from backend
    fetch(`${BASE_URL}/api/about`)
      .then(res => res.json())
      .then(setAbout)
      .catch(err => console.error("Error fetching About:", err));

    fetch(`${BASE_URL}/api/contact`)
      .then(res => res.json())
      .then(setContact)
      .catch(err => console.error("Error fetching Contact:", err));

    fetch(`${BASE_URL}/api/project`)
      .then(res => res.json())
      .then(setProjects)
      .catch(err => console.error("Error fetching Projects:", err));

    // Typed.js
    const typedScript = document.createElement("script");
    typedScript.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
    typedScript.async = true;
    typedScript.onload = () => {
      if (window.Typed) {
        new window.Typed("#auto-type", {
          strings: ["Developer.", "Professional Coder."],
          typeSpeed: 50,
          backSpeed: 50,
          loop: true
        });
      }
    };
    document.body.appendChild(typedScript);

    // WOW.js
    const wowScript = document.createElement("script");
    wowScript.src = "https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js";
    wowScript.async = true;
    wowScript.onload = () => {
      if (window.WOW) {
        new window.WOW().init();
      }
    };
    document.body.appendChild(wowScript);

    // Cleanup
    return () => {
      document.body.removeChild(typedScript);
      document.body.removeChild(wowScript);
    };
  }, [BASE_URL]);

  useScrollSpy();

  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <MobileMenu />

      <main id="main">
        <Home />
        <About data={about} />
        <Services />
        <Skills />
        <Resume />
        <Portfolio data={projects} />
        <Contact data={contact} />
      </main>

      <ScrollToTop />
    </div>
  );
}

export default App;
