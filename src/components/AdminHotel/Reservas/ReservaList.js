import React, { useState, useEffect } from 'react';
import { getReservas, deleteReserva } from '../../api/reserva';
import { Link } from 'react-router-dom';

const ReservaList = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await getReservas();
        setReservas(response.data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservas();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteReserva(id);
      setReservas(reservas.filter(reserva => reserva._id !== id));
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Reservas</h2>
      <Link to="/reservas/nueva">Agregar Nueva Reserva</Link>
      <ul>
        {reservas.map(reserva => (
          <li key={reserva._id}>
            Reserva {reserva._id}
            <Link to={`/reservas/${reserva._id}`}>Ver Detalles</Link>
            <button onClick={() => handleDelete(reserva._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservaList;
