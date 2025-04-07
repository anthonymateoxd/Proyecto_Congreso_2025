import React from 'react';
import '../styles/Patrocinadores.css';
import fondoPatrocinadores from '../Recursos/img/Fondo4.jpg'; // Asegúrate de tener esta imagen

function Patrocinadores() {
  return (
    <section 
      className="patrocinadores-section"
      style={{ backgroundImage: `url(${fondoPatrocinadores})` }}
    >
      <div className="patrocinadores-overlay">
        <div className="patrocinadores-content">
          <h2 className="patrocinadores-titulo">PATROCINADORES</h2>
          {/* Aquí irán los logos de los patrocinadores posteriormente */}
        </div>
      </div>
    </section>
  );
}

export default Patrocinadores;