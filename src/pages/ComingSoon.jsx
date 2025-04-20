import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { useNavigate } from 'react-router-dom';
import '../styles/ComingSoon.css';
import fondo1 from '../Recursos/img/Fondooooo.jpg';
import overlayImg from '../Recursos/img/XIII30Si.png';
import logo from '../Recursos/img/logo.png';
import fb from '../Recursos/img/iconos/fb.png';
import google from '../Recursos/img/iconos/google.png';
import Umg from '../Recursos/img/Logofooter.png';
import fondo2 from '../Recursos/img/Edificio5.png';

function ComingSoon() {
  const fechaObjetivo = '2025-04-10 23:10:00'; // Puedes dejarlo así
  const navigate = useNavigate();

  const [tiempoRestante, setTiempoRestante] = useState({
    diasRestantes: '00',
    horasRestantes: '00',
    minutosRestantes: '00',
    segundosRestantes: '00',
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const actualizarTemporizador = () => {
      const ahora = moment().tz('America/Guatemala');
      const fechaFinal = moment.tz(fechaObjetivo, 'America/Guatemala');

      // Calcula la diferencia manualmente si es necesario
      const diferencia = fechaFinal.diff(ahora);

      // Si el tiempo ya pasó (diferencia negativa)
      if (diferencia <= 0) {
        navigate('/home');
        return;
      }

      // Calcula días, horas, minutos, segundos
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

      setTiempoRestante({
        diasRestantes: String(dias).padStart(2, '0'),
        horasRestantes: String(horas).padStart(2, '0'),
        minutosRestantes: String(minutos).padStart(2, '0'),
        segundosRestantes: String(segundos).padStart(2, '0'),
      });
      //
    };

    const timer = setInterval(actualizarTemporizador, 1000);
    return () => clearInterval(timer);
  }, [fechaObjetivo, navigate]);

  return (
    <div className='coming-soon-container'>
      {/* Hero Section */}
      <header className='hero-section'>
        <div
          className='hero-background'
          style={{ backgroundImage: `url(${fondo1})` }}
        />
        <img
          src={overlayImg}
          alt='Evento especial'
          className='hero-overlay'
        />

        <nav className='main-nav'>
          <img
            src={logo}
            alt='Logo'
            className='nav-logo'
          />
          <div className={`nav-links ${isMobile ? 'mobile-menu' : ''}`}>
            <button className='nav-link'>Inicio</button>
            <button className='nav-link'>Acerca de</button>
            <button className='nav-link'>Talleres</button>
            <button className='nav-link'>Conferencias</button>
          </div>
          {isMobile && <button className='menu-toggle'>☰</button>}
        </nav>
      </header>

      {/* Countdown Section */}
      <section
        className='countdown-section'
        style={{ backgroundImage: `url(${fondo2})` }}
      >
        <h2 className='section-title'>P R Ó X I M A M E N T E</h2>
        <div className='countdown-timer'>
          <div className='time-box'>
            <span>{tiempoRestante.diasRestantes}</span>
            <p className='time-title'>DÍAS</p>
          </div>
          <span className='separator'>:</span>
          <div className='time-box'>
            <span>{tiempoRestante.horasRestantes}</span>
            <p className='time-title'>HORAS</p>
          </div>
          <span className='separator'>:</span>
          <div className='time-box'>
            <span>{tiempoRestante.minutosRestantes}</span>
            <p className='time-title'>MINUTOS</p>
          </div>
          <span className='separator'>:</span>
          <div className='time-box'>
            <span>{tiempoRestante.segundosRestantes}</span>
            <p className='time-title'>SEGUNDOS</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='main-footer'>
        <div className='footer-social'>
          <div className='social-icons'>
            <a
              href='https://www.facebook.com/share/15yy2oABkN/'
              target='_blank'
              className='social-icon'
            >
              <img
                src={fb}
                alt='Facebook'
              />
            </a>
            <a
              href='https://www.umg.edu.gt/'
              target='_blank'
              className='social-icon'
            >
              <img
                src={google}
                alt='Google'
              />
            </a>
          </div>
        </div>

        <div className='footer-content'>
          <div className='footer-logo-container'>
            <img
              src={Umg}
              alt='Logo Universidad'
              className='footer-logo'
            />
          </div>
          <div className='footer-info'>
            <div className='footer-contact'>
              <p>
                <strong>PBX: (502) 7952-1041</strong>
              </p>
              <p>Ingeniería en Sistemas 2025</p>
            </div>
            <div className='footer-university'>
              <p>Universidad Mariano Gálvez de Guatemala | Campus Coban</p>
              <p>
                © Derechos Reservados 2025 | XIII Congreso Ingeniería en
                Sistemas
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ComingSoon;
