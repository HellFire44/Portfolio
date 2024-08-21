import React from "react";
import './navbar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faBook, faFolderOpen, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
          <nav aria-label="Navigation principale">
            <ul className="nav-links">
              <li><a href="#home" aria-label="Accueil">Accueil</a></li>
              <li><a href="#aboutme" aria-label="À propos de moi">À propos de moi</a></li>
              <li><a href="#mycompetence" aria-label="Mes compétences">Mes compétences</a></li>
              <li><a href="#myportfolio" aria-label="Mon portfolio">Mon portfolio</a></li>
              <li><a href="#contact" aria-label="Contactez-moi">Contactez-moi</a></li>
            </ul>
            <ul className="nav-phone">
            <li><a href="#home" aria-label="Accueil"><FontAwesomeIcon icon={faHouse} /></a></li>
              <li><a href="#aboutme" aria-label="À propos de moi"><FontAwesomeIcon icon={faUser} /></a></li>
              <li><a href="#mycompetence" aria-label="Mes compétences"><FontAwesomeIcon icon={faBook} /></a></li>
              <li><a href="#myportfolio" aria-label="Mon portfolio"><FontAwesomeIcon icon={faFolderOpen} /></a></li>
              <li><a href="#contact" aria-label="Contactez-moi"><FontAwesomeIcon icon={faEnvelope} /></a></li>
            </ul>
          </nav>
    );
};

export default NavBar;
