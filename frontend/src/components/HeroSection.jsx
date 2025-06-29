import React from "react";

const HeroSection = ({ backgroundImage }) => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Pain Management Program</h1>
        <p className="hero-description">
          Our goal is to help you return to the highest level of function and independence possible,
          while improving your overall quality of life—physically, emotionally, and socially.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;