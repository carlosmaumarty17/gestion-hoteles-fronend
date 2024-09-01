import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      <h2>Panel de Administración</h2>
      <ul>
        <li><Link to="/admin/hoteles">Hoteles</Link></li>
        <li><Link to="/admin/habitaciones">Habitaciones</Link></li>
        <li><Link to="/admin/reservas">Reservas</Link></li>
        <li><Link to="/admin/contactos-emergencia">Contactos de Emergencia</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
