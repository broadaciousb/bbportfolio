import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import movieSite from "../assets/movie-site.png";
import fesInternship from "../assets/fes-internship.png";
import libraryReact from "../assets/libraryReact.png";
import Nav from "../Components/Nav";

const Projects = ({ toggleContact, isContactOpen, toggleNav, isNavOpen }) => {
  return (
    <section>
      <Nav toggleContact={toggleContact} isContactOpen={isContactOpen}
            toggleNav={toggleNav} isNavOpen={isNavOpen} />
      <div className="container">
        <div className="row">
          <h2 className="projects__title">
            Here are some projects that I worked on
          </h2>
          <ul className="project__list">
            <li className="project">
              <div className="project__img--wrapper">
                <img src={movieSite} alt="" className="project__img" />
                <div className="project__info" >
                  <h3 className="project__title">Movie Site</h3>
                  <p className="project__description">
                    A website where a user can search movie or TV show titles
                    and it returns multiple results collected from an API that
                    can be clicked on to see individual movie information. I
                    created all the React, HTML, CSS, and JavaScript code for
                    the website visual, loading states, and functionality.
                  </p>
                  <div className="project__links">
                    <Link
                      to="https://movie-react-site.vercel.app/"
                      target="_blank"
                      className="project__link"
                    >
                      <FontAwesomeIcon icon="fa-solid fa-link" />
                    </Link>
                    <Link
                      to="https://github.com/broadaciousb/movie-react-site"
                      target="_blank"
                      className="project__link"
                    >
                      <FontAwesomeIcon icon="fa-brands fa-github" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="project">
              <div className="project__img--wrapper">
                <img src={fesInternship} alt="" className="project__img" />
                <div className="project__info">
                  <h3 className="project__title">NFT Site</h3>
                  <p className="project__description">
                    A website that I forked from another repository provided to
                    me as a virtual internship, where all the CSS and HTML
                    existed. Through multiple branches and
                    pull requests I implemented carousels for different NFT
                    sections and used Axios to dynamically
                    load NFT/artist data.
                  </p>
                  <div className="project__links">
                    <Link
                      to="https://broady-internship.vercel.app/"
                      target="_blank"
                      className="project__link"
                    >
                      <FontAwesomeIcon icon="fa-solid fa-link" />
                    </Link>
                    <Link
                      to="https://github.com/broadaciousb/broady-internship"
                      target="_blank"
                      className="project__link"
                    >
                      <FontAwesomeIcon icon="fa-brands fa-github" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="project">
              <div className="project__img--wrapper">
                <img src={libraryReact} alt="" className="project__img" />
                <div className="project__info">
                  <h3 className="project__title">Book Store</h3>
                  <p className="project__description">
                    Educational project I worked on where an object of books and
                    and individual book info was used as an imitation of an API.
                    I wrote JavaScript functions to dynamically load movie data
                    like titles, prices, stars for ratings, cart items, and totals.
                  </p>
                  <div className="project__links">
                    <Link
                      to="https://library-react-53d28fe01db4.herokuapp.com/"
                      target="_blank"
                      className="project__link"
                    >
                      <FontAwesomeIcon icon="fa-solid fa-link" />
                    </Link>
                    <Link
                      to="https://github.com/broadaciousb/library-react"
                      target="_blank"
                      className="project__link"
                    >
                      <FontAwesomeIcon icon="fa-brands fa-github" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
