// src/components/Typewriter.jsx
import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 50, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    let intervalId; // Define intervalId at the top of useEffect

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text[index]);
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) {
        clearInterval(intervalId); // Cleanup the interval
      }
    };
  }, [text, speed, delay]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
