'use client'
import React, { useState, useEffect } from 'react';

function AnimatedHeading({ finalLetter, delay }) {
  const [letter, setLetter] = useState('');

  useEffect(() => {
    let frame = 0;
    const duration = 2000; 
    const totalFrames = 100;
    const frameDuration = duration / totalFrames;

    const startAnimation = () => {
      const intervalId = setInterval(() => {
        const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        setLetter(randomLetter);
        frame += 1;
      }, frameDuration);

      const timeoutId = setTimeout(() => {
        clearInterval(intervalId);
        setLetter(finalLetter);
      }, duration);

      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    };

    const timeoutId = setTimeout(startAnimation, delay);

    return () => clearTimeout(timeoutId);
  }, [finalLetter, delay]);

  return (
    <h1 >
      {letter}
    </h1>
  );
}

export default AnimatedHeading;
