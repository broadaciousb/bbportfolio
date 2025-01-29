import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import logo from "./logo.svg";
import "./App.css";
import Projects from "./Pages/Projects.jsx";
import About from "./Pages/About.jsx";
import Landing from "./Pages/Landing.jsx";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleContact = () => {
    if (!isContactOpen) {
      setIsContactOpen(true);
    } else {
      setIsContactOpen(false);
    }
  };

  const toggleNav = () => {
    if (!isNavOpen) {
      setIsNavOpen(true);
    } else {
      setIsNavOpen(false);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Landing
                toggleContact={toggleContact}
                isContactOpen={isContactOpen}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <Projects
                toggleContact={toggleContact}
                isContactOpen={isContactOpen}
                toggleNav={toggleNav}
                isNavOpen={isNavOpen}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                toggleContact={toggleContact}
                toggleNav={toggleNav}
                isNavOpen={isNavOpen}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
