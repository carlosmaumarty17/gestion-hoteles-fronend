import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Mi Plataforma de Viajes</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/admin/hoteles">Administrar Hoteles</Link></li>
          <li><Link to="/reservas">Mis Reservas</Link></li>
          <li><Link to="/login">Iniciar Sesión</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
