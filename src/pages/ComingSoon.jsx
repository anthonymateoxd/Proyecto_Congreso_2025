import React, { useState, useEffect, useMemo } from "react";
import "../styles/ComingSoon.css";
import fondo1 from "../Recursos/img/image1.png";
import overlayImg from "../Recursos/img/30Aniv2.png";
import logo from "../Recursos/img/logo.png";
import fb from "../Recursos/img/iconos/fb.png";
import ig from "../Recursos/img/iconos/ig.png";
import git from "../Recursos/img/iconos/git.png";
import google from "../Recursos/img/iconos/google.png";
import Umg from "../Recursos/img/Logofooter.png"; 

function ComingSoon() {
  const targetDate = useMemo(() => new Date("2025-12-31T23:59:59"), []);

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    return difference > 0 ? {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    } : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTimeUnit = (unit) => unit.toString().padStart(2, '0');

  return (
    <div className="coming-soon-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-background" style={{ backgroundImage: `url(${fondo1})` }} />
        <img src={overlayImg} alt="Evento especial" className="hero-overlay" />
        
        <nav className="main-nav">
          <img src={logo} alt="Logo" className="nav-logo" />
          <div className={`nav-links ${isMobile ? 'mobile-menu' : ''}`}>
            <button className="nav-link">Inicio</button>
            <button className="nav-link">Acerca de</button>
            <button className="nav-link">Talleres</button>
            <button className="nav-link">Conferencias</button>
          </div>
          {isMobile && <button className="menu-toggle">☰</button>}
        </nav>
      </header>

      {/* Countdown Section */}
      <section className="countdown-section">
        <h2 className="section-title">P R Ó X I M A M E N T E</h2>
        <div className="countdown-timer">
          <div className="time-box">
            <span>{formatTimeUnit(timeLeft.days)}</span>
            <p className="time-title">DÍAS</p>
          </div>
          <span className="separator">:</span>
          <div className="time-box">
            <span>{formatTimeUnit(timeLeft.hours)}</span>
            <p className="time-title">HORAS</p>
          </div>
          <span className="separator">:</span>
          <div className="time-box">
            <span>{formatTimeUnit(timeLeft.minutes)}</span>
            <p className="time-title">MINUTOS</p>
          </div>
          <span className="separator">:</span>
          <div className="time-box">
            <span>{formatTimeUnit(timeLeft.seconds)}</span>
            <p className="time-title">SEGUNDOS</p>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-social">
          <div className="social-icons">
            <a href="https://www.facebook.com/u.marianogalvez/" target="_blank" className="social-icon"><img src={fb} alt="Facebook" /></a>
            <a href="https://www.instagram.com/marianogalvez/" target="_blank" className="social-icon"><img src={ig} alt="Instagram" /></a>
            <a href="https://www.umg.edu.gt/" target="_blank" className="social-icon"><img src={google} alt="Google" /></a>
          </div>
        </div>
        
        <div className="footer-content">
          <div className="footer-logo-container">
            <img src={Umg} alt="Logo Universidad" className="footer-logo" />
          </div>
          <div className="footer-info">
            <div className="footer-contact">
              <p>info@umg.edu.gt</p>
              <p><strong>PBX: (502) 7952-1041  </strong></p>
              <p>Ingeniería en sistemas 2025  </p>
            </div>
              
            <div className="footer-university">
              <p>Universidad Mariano Gálvez de Guatemala  </p>
              <p>© Derechos Reservados 2025 | Conferencia Ingeniería en sistemas  </p>
            </div>
        </div>
      </div>
</footer>
    </div>
  );
}

export default ComingSoon;