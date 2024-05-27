import React from 'react';
import './hero.css';

const HeroSection = ({ title, description, imageSrc }) => {
  return (
    <div className="hero-container">
      <div className="hero-text-box">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="hero-image-box">
        <img src={imageSrc} alt={title} className="character-image" />
      </div>
    </div>
  );
};

export default HeroSection;
