// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';

// Détection du mode sombre préféré de l'utilisateur
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
document.body.className = prefersDarkMode ? 'dark-mode' : 'light-mode';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
