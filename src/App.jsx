// src/App.jsx
import React from 'react';
import { DarkModeProvider, useDarkMode } from './context/DarkModeProvider';
import Content from './components/Content/Content';

const AppContent = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Content />
    </div>
  );
};

const App = () => (
  <DarkModeProvider>
    <AppContent />
  </DarkModeProvider>
);

export default App;
