import React, { useState, useEffect } from 'react';
import "../styles/ComingSoon.css";
import fondo1 from '../Recursos/img/image1.png';
import overlayImg from '../Recursos/img/Aniv.png';
import logo from '../Recursos/img/logo.png';

function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date("2025-12-31T23:59:59");
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="coming-soon">
      <div 
        className="nav-container"
        style={{ backgroundImage: `url(${fondo1})` }}
      >
        <img src={overlayImg} alt="Overlay" className="overlay-img" />

        <div className="sub-navbar">
          <img src={logo} alt="Logo" className="logo" />
          <div className="navbar-buttons">
            <button className="navbar-btn">Inicio</button>
            <button className="navbar-btn">Acerca de</button>
            <button className="navbar-btn">Talleres</button>
            <button className="navbar-btn">Conferencias</button>
          </div>
        </div>
      </div>

      <div className="new-container">
        <h2>PROXIMAMENTE</h2>
        <p className="countdown">
          {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
        </p>
      </div>
    </div>
  );
}

export default ComingSoon;
