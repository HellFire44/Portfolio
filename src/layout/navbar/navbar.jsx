import React from "react";
import './navbar.scss';

const NavBar = () => {
    return (
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#aboutme">A propos de moi</a></li>
            <li><a href="#mycompetence">Mes compétences</a></li>
            <li><a href="#myportfolio">Mon portfolio</a></li>
            <li><a href="#contact">Contactez moi</a></li>
          </ul>
        </nav>
    );

};

export default NavBar;