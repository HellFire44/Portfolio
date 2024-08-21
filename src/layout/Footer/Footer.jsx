import React from "react";
import './Footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li><a href="#home" aria-label="Accueil">Accueil</a></li>
          <li><a href="#about" aria-label="A Propos de Moi">A Propos de Moi</a></li>
          <li><a href="#services" aria-label="Mes Compétences">Mes Compétences</a></li>
          <li><a href="#portfolio" aria-label="Mon Portfolio">Mon Portfolio</a></li>
          <li><a href="#contact" aria-label="Contactez Moi">Contactez Moi</a></li>
        </ul>
      </nav>
      <div className="footer__content">
        <div className="footer__left">
          <div className="footer__logo">
            <img src="https://via.placeholder.com/400x100.png?text=Logo" alt="Company Logo" />
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="footer__right">
          <p>&copy; 2024 Hell'Corps. Tous droits réservés | Design par HellFire44</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
