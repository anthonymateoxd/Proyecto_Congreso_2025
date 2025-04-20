import React from 'react';
import '../styles/Agenda.css';

const Agenda = () => {
  const agendaData = {
    'Viernes 16': [
      {
        hora: '09:00 - 10:00',
        taller: 'Taller 1',
        conferencista: 'Nombre 1',
        salon: 'Salon 1',
      },
      {
        hora: '10:15 - 11:15',
        taller: 'Taller ',
        conferencista: 'Nombre 2',
        salon: 'Salon 2',
      },
    ],
    'Sábado 17': [
      {
        hora: '09:00 - 10:00',
        taller: 'Taller 3',
        conferencista: 'Nombre 3',
        salon: 'Salon 3',
      },
      {
        hora: '10:15 - 11:15',
        taller: 'Taller 4',
        conferencista: 'Nombre 4',
        salon: 'Salon 4',
      },
    ],
  };

  return (
    <div className='agenda-container'>
      <h2 className='agenda-title'>AGENDA</h2>
      {Object.entries(agendaData).map(([dia, actividades]) => (
        <div
          key={dia}
          className='agenda-dia'
        >
          <h3>{dia}</h3>
          <table className='agenda-tabla'>
            <thead>
              <tr>
                <th>Hora</th>
                <th>Taller</th>
                <th>Conferencista</th>
                <th>Salon</th>
              </tr>
            </thead>
            <tbody>
              {actividades.map((item, index) => (
                <tr key={index}>
                  <td className='agenda-hora'>{item.hora}</td>
                  <td className='agenda-taller'>{item.taller}</td>
                  <td className='agenda-conferencista'>{item.conferencista}</td>
                  <td className='agenda-salon'>{item.salon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Agenda;
