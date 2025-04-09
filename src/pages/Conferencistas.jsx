//Importar Fotografías
import React from 'react';
import '../styles/Conferencistas.css';
import img1 from '../Recursos/img/Conferencistas/con1.jpg';
import img2 from '../Recursos/img/Conferencistas/con2.jpg';
import img3 from '../Recursos/img/Conferencistas/con3.jpg';
import img4 from '../Recursos/img/Conferencistas/con4.jpg';
import img5 from '../Recursos/img/Conferencistas/con5.jpg';
//import img6 from '../Recursos/img/Conferencistas/con6.jpg';
import fondoConferencistas from '../Recursos/img/fondo3.jpg';

function Conferencistas() {
  const conferencistas = [
    { nombre: 'Nombre Apellido', imagen: img1, },
    { nombre: 'Nombre Apellido', imagen: img2,  },
    { nombre: 'Nombre Apellido', imagen: img3, },
    { nombre: 'Nombre Apellido', imagen: img4,  },
    { nombre: 'Nombre Apellido', imagen: img5,  },
    //{ nombre: 'Nombre Apellido', imagen: img6, },
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
              <div key={index} className='conferencista-item'>
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
        </div>
      </div>

      <div className="conferencista-boton">
                <a 
                  href="" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="boton-transparente"
                >
                  ¡REGISTRATE!
                </a>
              </div>
    </section>
  );
}

export default Conferencistas;
