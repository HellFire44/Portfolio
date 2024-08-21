// src/components/ToggleButton.jsx
import React from 'react';
import { useDarkMode } from '../../context/DarkModeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './ToggleButton.scss';

const ToggleButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button 
      onClick={toggleDarkMode} 
      className={`toggle-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
    </button>
  );
};

export default ToggleButton;
