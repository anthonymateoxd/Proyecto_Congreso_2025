import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { obtenerTiempoRestante } from '../Logica/contador';
import '../styles/ComingSoon.css';
import fondo1 from '../Recursos/img/image1.png';
import overlayImg from '../Recursos/img/XIII30Si.png';
import logo from '../Recursos/img/logo.png';
import fb from '../Recursos/img/iconos/fb.png';
import google from '../Recursos/img/iconos/google.png';
import Umg from '../Recursos/img/Logofooter.png';
import fondo2 from '../Recursos/img/Edificio5.png';
import fondo_3_tierra from '../Recursos/img/fondo_3_tierra.png';
import '../styles/InformationPage.css';
import logo_1_informacion from '../Recursos/img/iconos/logo_1_informacion.png';
import calendario from '../Recursos/img/iconos/logo-2-calendario.png';
import ubicacion from '../Recursos/img/iconos/logo-3-ubicacion.png';
import Agenda from '../pages/Agenda'; // importar agenda
import '../styles/Agenda.css'; // Importar css de agenda

import Conferencistas from '../pages/Conferencistas'; // Importar Apartadod de Conferencistas
import '../styles/Conferencistas.css'; // Importar css de conferencistas
import InfoAcademica from './InfoAcademica';
import Patrocinadores from './Patrocinadores';



function HomePage() {
  const fechaObjetivo = '2025-04-18 00:00:00';

  const [tiempoRestante, setTiempoRestante] = useState({
    diasRestantes: '00',
    horasRestantes: '00',
    minutosRestantes: '00',
    segundosRestantes: '00',
  });
  const [horaGuatemala, setHoraGuatemala] = useState('00:00:00');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const actualizarTemporizador = () => {
      const tiempo = obtenerTiempoRestante(fechaObjetivo);
      setTiempoRestante({
        diasRestantes: String(tiempo.diasRestantes).padStart(2, '0'),
        horasRestantes: String(tiempo.horasRestantes).padStart(2, '0'),
        minutosRestantes: String(tiempo.minutosRestantes).padStart(2, '0'),
        segundosRestantes: String(tiempo.segundosRestantes).padStart(2, '0'),
      });
      setHoraGuatemala(
        moment.tz('America/Guatemala').format('YYYY-MM-DD HH:mm:ss')
      );
    };

    const timer = setInterval(actualizarTemporizador, 1000);
    return () => clearInterval(timer);
  }, [fechaObjetivo]);

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

      {/* INICIO DE LA SECCION DE INFORMACION */}

      {/* Sección de Información del Evento */}
      <section
        className='information-event'
        style={{ backgroundImage: `url(${fondo_3_tierra})` }}
      >
        {/* Fondo de pantalla */}

        <h1 className='title-event-1_5'>INFORMACION</h1>
        <h1 className='title-event-2_5'>DEL EVENTO</h1>

        <div className='logo-container'>
          <img
            src={logo_1_informacion}
            alt='logo-1-information'
            className='logo-1-information information-page'
          />
        </div>
        <p className='information-text information-page'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          reiciendis modi, ducimus at sed nostrum nihil minima iusto ipsum ipsam
          distinctio, corrupti blanditiis? Tempora laborum voluptatem recusandae
          repellat odit error!
        </p>
        <div className='contenedor-1-zona information-page'>
          <img
            src={calendario}
            alt='logo-2-calendario'
            className='logo-2-information information-page'
          />
          <p className='information-text-1'>
            VIERNES 16 DE ABRIL Y SABADO 17 DE ABRIL
          </p>
        </div>
        <div className='contenedor-2-zona information-page'>
          <p className='information-text-2'>
            1RA AVENIDA CALLE, ZONA, COBAN, ALTA VERAPAZ HOTEL
          </p>
          <img
            src={ubicacion}
            alt='logo-3-ubicacion'
            className='logo-3-information information-page'
          />
        </div>
      </section>

      {/* INICIO DE LA SECIÓN DE TALLERES*/}

        <section className="agenda-programada">
            {/*<h2 className="agenda-title">Agenda Programada</h2>*/}
            <Agenda />
        </section>


      {/* FIN DE LA SECIÓN DE TALLERES*/}

      {/* INICIO DE LA SECCIÓN DE CONFERENCISTAS */}

      <Conferencistas />

      {/* FIN DE LA SECCIÓN DE CONFERENCISTAS */}

      {/* INICIO DE LA SECCIÓN DE INFORMACIÓN ACADEMICA */}

      <InfoAcademica />

      {/* FIN DE LA SECCIÓN DE INFORMACIÓN ACADEMICA */}

      {/* INICIO DE LA SECCIÓN DE PATROCINADORES*/}

      <Patrocinadores />

      {/* FIN DE LA SECCIÓN DE PATROCINADORES */}

      {/* FIN DE LA SECCION DE INFORMACION */}

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

export default HomePage;
