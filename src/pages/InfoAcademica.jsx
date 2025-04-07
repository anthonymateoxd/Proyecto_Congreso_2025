import React from 'react';
import '../styles/InfoAcademica.css';
import fondoInfo from '../Recursos/img/carrusel4.jpg.jpg'; 

function InfoAcademica() {
    return (
      <section 
        className="info-academica-section"
        style={{ backgroundImage: `url(${fondoInfo})` }}
      >
        <div className="info-academica-overlay">
          <div className="info-academica-content-wrapper">
            <div className="info-academica-container">
              <h1 className="info-academica-titulo">
                ¿QUIERES SABER MÁS INFORMACIÓN DE SISTEMAS UMG?
              </h1>
              
              <div className="info-academica-contenido">
                <a 
                  href="https://www.umg.edu.gt/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="boton-transparente"
                >
                  ¡CONÓCENOS!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default InfoAcademica;