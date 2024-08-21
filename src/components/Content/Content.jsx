// src/components/Content.jsx
import React from 'react';
import { useDarkMode } from '../../context/DarkModeProvider';
import ToggleButton from '../ToggleButton/ToggleButton';
import './Content.scss'; // Assurez-vous d'importer les styles spécifiques à ce composant

import NavBar from '../../layout/navbar/navbar';
import Accueil from '../../layout/Accueil/Accueil';
import AboutMe from '../../layout/AboutMe/AboutMe';
import MyCompetence from '../../layout/MyCompetence/MyCompetence';
import Portfolio from '../../layout/Portfolio/Portfolio';
import Contact from '../../layout/Contact/Contact';

const Content = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <header className="header">
        <NavBar/>
        <ToggleButton />
      </header>
      <main>
        <Accueil />
        <AboutMe />
        <MyCompetence />
        <Portfolio />
        <Contact />
      </main>
      <footer className="footer">
        {/* Contenu du pied de page */}
      </footer>
    </div>
  );
};

export default Content;
