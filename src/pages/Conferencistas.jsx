//Importar Fotografías
import React from 'react';
import '../styles/Conferencistas.css';
import img1 from '../Recursos/img/Conferencistas/con1.jpg';
import img2 from '../Recursos/img/Conferencistas/con2.jpg';
import img3 from '../Recursos/img/Conferencistas/con3.jpg';
import img4 from '../Recursos/img/Conferencistas/con4.jpg';
import img5 from '../Recursos/img/Conferencistas/con5.jpg';
import fondoConferencistas from '../Recursos/img/fondo3.jpg';

function Conferencistas() {
  const conferencistas = [
    { nombre: 'Nombre Apellido', imagen: img1 },
    { nombre: 'Nombre Apellido', imagen: img2 },
    { nombre: 'Nombre Apellido', imagen: img3 },
    { nombre: 'Nombre Apellido', imagen: img4 },
    { nombre: 'Nombre Apellido', imagen: img5 },
  ];

  return (
    <section
      className='conferencistas-section'
      style={{ backgroundImage: `url(${fondoConferencistas})` }}
    >
      <div className='conferencistas-overlay'>
        <div className='conferencistas-content'>
          <div className='conferencistas-header'>
            <h2 className='titulo-conferencistas'>CONFERENCISTAS</h2>
            <div className='profesion-conferencistas'>
              <p>Conoce a Nuestros Profesionales</p>
            </div>
          </div>

          <div className='conferencistas-grid'>
            {conferencistas.map((conferencista, index) => (
              <div
                key={index}
                className='conferencista-item'
              >
                <div className='conferencista-foto-container'>
                  <img
                    src={conferencista.imagen}
                    alt={conferencista.nombre}
                    className='conferencista-foto'
                  />
                </div>
                <p className='nombre-conferencista'>{conferencista.nombre}</p>
              </div>
            ))}
          </div>

          {/* Botones actualizados - misma posición */}
          <div className='conferencista-botones'>
            <a
              href='https://docs.google.com/forms/d/1lHnRHdfSnxuBd-YpPLn1ML6ViollzdApDudCD_teDG4/edit'
              target='_blank'
              rel='noopener noreferrer'
              className='boton-union'
            >
              Únete a Nosotros
            </a>
            <a
              href='https://docs.google.com/forms/d/1kswaO1CRvbmyxPvfOMTzuIxHCBkdiRAU34zuOf_v4hs/edit#responses'
              target='_blank'
              rel='noopener noreferrer'
              className='boton-acceso'
            >
              Acceso Exclusivo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conferencistas;
