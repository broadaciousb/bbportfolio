import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactModal from "./ContactModal";

const NavModal = ({ toggleContact, isContactOpen, toggleNav, isNavOpen }) => {
  if (!isNavOpen) return null;

  return (
    <>
      <div className="nav__modal">
        <ul className="nav__modal--links">
          <li className="nav__modal--link">
            <Link to="/" className="link__hover-effect" onClick={toggleNav}>
              <span className="nav__link--color">Home</span>
            </Link>
          </li>
          <li className="nav__modal--link">
            <Link to="/projects" className="link__hover-effect" onClick={toggleNav}>
              <span className="nav__link--color">Projects</span>
            </Link>
          </li>
          <li className="nav__modal--link">
            <Link to="/about" className="link__hover-effect" onClick={toggleNav}>
              <span className="nav__link--color">About</span>
            </Link>
          </li>
          <li className="nav__modal--link">
            <Link
              href="#"
              onClick={() => {
                toggleNav();
                toggleContact();
              }}
              className="link__hover-effect"
            >
              <span className="nav__link--color">Contact</span>
            </Link>
          </li>
        </ul>
        <div className="nav__modal--close" onClick={toggleNav}>
          <FontAwesomeIcon icon="fa-times" />
        </div>
      </div>
      <ContactModal toggleContact={toggleContact} isOpen={isContactOpen} />
    </>
  );
};

export default NavModal;
