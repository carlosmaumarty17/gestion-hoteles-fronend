import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createReserva, getReservaById, updateReserva } from '../../api/reserva';
import { getHabitaciones } from '../../api/habitacion';

const ReservaForm = () => {
  const [reserva, setReserva] = useState({
    habitacion: '',
    fechaEntrada: '',
    fechaSalida: '',
    cantidadPersonas: '',
    datosHuespedes: {}
  });
  const [habitaciones, setHabitaciones] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHabitaciones = async () => {
      try {
        const response = await getHabitaciones(); // Cambia según la lógica de obtención de habitaciones
        setHabitaciones(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchHabitaciones();
  }, []);

  useEffect(() => {
    if (id) {
      const fetchReserva = async () => {
        try {
          const response = await getReservaById(id);
          setReserva(response.data);
        } catch (error) {
          console.error('Error fetching reservation:', error);
        }
      };

      fetchReserva();
    }
  }, [id]);

  const handleChange = (e) => {
    setReserva({ ...reserva, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateReserva(id, reserva);
      } else {
        await createReserva(reserva);
      }
      navigate('/reservas');
    } catch (error) {
      console.error('Error saving reservation:', error);
    }
  };

  return (
    <div>
      <h2>{id ? 'Editar Reserva' : 'Nueva Reserva'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Habitación:</label>
          <select
            name="habitacion"
            value={reserva.habitacion}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar Habitación</option>
            {habitaciones.map(habitacion => (
              <option key={habitacion._id} value={habitacion._id}>
                {habitacion.nombre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Fecha de Entrada:</label>
          <input
            type="date"
            name="fechaEntrada"
            value={reserva.fechaEntrada}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Fecha de Salida:</label>
          <input
            type="date"
            name="fechaSalida"
            value={reserva.fechaSalida}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Cantidad de Personas:</label>
          <input
            type="number"
            name="cantidadPersonas"
            value={reserva.cantidadPersonas}
            onChange={handleChange}
            required
          />
        </div>
        {/* Agrega más campos para datos de los huéspedes si es necesario */}
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default ReservaForm;

