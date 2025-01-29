import React from 'react';
import { Link } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactModal = ({ toggleContact, isOpen }) => {
  if (!isOpen) return null;

  return(
    <div id="modal" className="modal">
      <div className="modal__content">
        <h3 className="modal__title">
          Thank you very much for checking out my portfolio, I will be excited to hear from you.
        </h3>
        <form className="modal__form" onsubmit="contact(event)">
          <div className="form-item">
            <label className="form-item__label">Name:</label>
            <input
              type="text"
              className="form__input"
              name="user_name"
              required
            ></input>
          </div>
          <div className="form-item">
            <label className="form-item__label">Email:</label>
            <input
              type="email"
              className="form__input"
              name="user_email"
              required
            ></input>
          </div>
          <div className="form-item">
            <label className="form-item__label">Message:</label>
            <textarea
              type="textarea"
              className="form__textarea"
              name="message"
              required
            ></textarea>
          </div>
          <button id="form__submit" className="form__submit">
            Submit
          </button>
        </form>
      </div>
      <Link href="#" className="modal__close-button" onClick={toggleContact}>
        <FontAwesomeIcon
          icon="times"
          className="fas fa-times"
        ></FontAwesomeIcon>
      </Link>
    </div>
  );
};

export default ContactModal;