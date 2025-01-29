import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactModal from "./ContactModal.jsx";
import NavModal from "./NavModal.jsx";

const Nav = ({ toggleContact, isContactOpen, toggleNav, isNavOpen }) => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="nav__bar">
              <div className="logo">BB</div>

              <ul className="nav__links">
                <li className="nav__link">
                  <Link to="/" className="link__hover-effect">
                    <span className="nav__link--color">Home</span>
                  </Link>
                </li>
                <li className="nav__link">
                  <Link to="/projects" className="link__hover-effect">
                    <span className="nav__link--color">Projects</span>
                  </Link>
                </li>
                <li className="nav__link">
                  <Link to="/about" className="link__hover-effect">
                    <span className="nav__link--color">About</span>
                  </Link>
                </li>
                <li className="nav__link">
                  <Link
                    href="#"
                    onClick={toggleContact}
                    className="link__hover-effect"
                  >
                    <span className="nav__link--color">Contact</span>
                  </Link>
                </li>
              </ul>
              <div className="nav-tab" onClick={toggleNav}>
                <FontAwesomeIcon icon="fa-solid fa-bars" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <ContactModal toggleContact={toggleContact} isOpen={isContactOpen} />
      <NavModal
        toggleContact={toggleContact}
        isOpen={isContactOpen}
        toggleNav={toggleNav}
        isNavOpen={isNavOpen}
      />
    </>
  );
};

export default Nav;
