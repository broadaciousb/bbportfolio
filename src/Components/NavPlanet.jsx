import React, { useState } from "react";
import { Link } from "react-router";
import ContactModal from "./ContactModal";

const NavPlanet = ({ toggleContact, isContactOpen }) => {
  return (
    <>
      {isContactOpen ? (
        <ContactModal toggleContact={toggleContact} isOpen={isContactOpen} />
      ) : (
        <div className="nav-wheel__wrapper">
          <div className="nav-wheel">
            <div className="nav-wheel__revolution-point">
              <div className="nav-planet"></div>
              <div className="nav-planet2"></div>
              <div className="nav-planet3"></div>
              <div className="nav-planet4"></div>
              <div className="nav-planet5"></div>
              <div className="nav-planet6"></div>
              <div className="nav-planet7"></div>
              <div className="nav-planet8"></div>
            </div>
            <div className="nav-planet__links">
              <Link to="/projects">
                <div className="nav-planet__projects">Projects</div>
              </Link>
              <Link href="#" onClick={toggleContact}>
                <div className="nav-planet__contact">Contact</div>
              </Link>
              <Link to="#" className="not-done">
                <div className="nav-planet__about">About</div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavPlanet;
