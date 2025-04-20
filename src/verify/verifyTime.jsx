import React, { useState, useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import moment from 'moment-timezone';

function VerifyTime() {
  const fechaHoraLimite = '2025-04-10T00:11:00-06:00'; // Fecha límite ajustable
  const [timeExpired, setTimeExpired] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const checkTime = () => {
      const ahora = moment().tz('America/Guatemala');
      const limite = moment.tz(fechaHoraLimite, 'America/Guatemala');
      setTimeExpired(ahora.isSameOrAfter(limite));
    };

    checkTime();

    // Verificar periódicamente si el tiempo ha expirado
    const interval = setInterval(checkTime, 1000);
    return () => clearInterval(interval);
  }, [fechaHoraLimite]);

  if (timeExpired === null) {
    return <div>Verificando acceso...</div>;
  }

  // Lógica de redirección basada en la ruta y el tiempo
  if (location.pathname === '/home') {
    return timeExpired ? (
      <Outlet />
    ) : (
      <Navigate
        to='/'
        replace
      />
    );
  } else {
    return timeExpired ? (
      <Navigate
        to='/home'
        replace
      />
    ) : (
      <Outlet />
    );
  }
}

export default VerifyTime;
