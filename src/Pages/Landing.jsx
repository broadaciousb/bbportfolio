import React from "react";
import { Link } from "react-router";
import NavPlanet from "../Components/NavPlanet.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = ({ toggleContact, isContactOpen }) => {
  return (
    <>
      <section className="landing">
        <div className="container">
          <div className="row">
            <div className="landing__wrapper">
              <div className="landing__info">
                <h2 className="landing__title">Hello, my name is Broady</h2>
                <p className="landing__description">
                  I am a resilient frontend engineer looking to solve your web
                  application problems
                </p>
                <p className="landing__description">
                  Test out my navigation sphere on the right or the links to
                  below to see my projects, contact info, or more about me.
                </p>
                <div className="landing__links">
                  <div className="landing__link">
                    <Link>
                      <FontAwesomeIcon
                        className="landing__link--icon"
                        icon="fa-brands fa-github"
                      />
                    </Link>
                    <div className="landing__link--label">Github</div>
                  </div>
                  <div className="landing__link">
                    <Link>
                      <FontAwesomeIcon
                        className="landing__link--icon"
                        icon="fa-brands fa-linkedin"
                      />
                    </Link>
                    <div className="landing__link--label">LinkedIn</div>
                  </div>
                  <div className="landing__link">
                    <Link className="landing__link">
                      <FontAwesomeIcon
                        className="landing__link--icon"
                        icon="fa-solid fa-envelope"
                      />
                    </Link>
                    <div className="landing__link--label">Email</div>
                  </div>
                  <div className="landing__link">
                    <Link className="landing__link">
                      <FontAwesomeIcon
                        className="landing__link--icon"
                        icon="fa-solid fa-file-pdf"
                      />
                    </Link>
                    <div className="landing__link--label">Resume</div>
                  </div>
                </div>
              </div>
              <NavPlanet toggleContact={toggleContact} isContactOpen={isContactOpen}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
