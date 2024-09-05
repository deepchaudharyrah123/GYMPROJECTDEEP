// Hero.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/gallery');
  };

  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>LET'S</h1>
          <h1>START</h1>
          <h1>GYM</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey Starts </p>
          <p>Unleash Your ...</p>
        </div>
        <div className="buttons">
          <button onClick={handleStartJourney}>About GYM...</button>
          <button>Cancle Your Plan</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
