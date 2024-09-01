import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createHabitacion, getHabitacionById, updateHabitacion } from '../../api/habitacion';

const HabitacionForm = () => {
  const [habitacion, setHabitacion] = useState({ nombre: '', costoBase: '', impuestos: '', tipo: '', ubicacion: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchHabitacion = async () => {
        try {
          const response = await getHabitacionById(id);
          setHabitacion(response.data);
        } catch (error) {
          console.error('Error fetching room:', error);
        }
      };

      fetchHabitacion();
    }
  }, [id]);

  const handleChange = (e) => {
    setHabitacion({ ...habitacion, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateHabitacion(id, habitacion);
      } else {
        await createHabitacion(habitacion);
      }
      navigate('/admin/hoteles');
    } catch (error) {
      console.error('Error saving room:', error);
    }
  };

  return (
    <div>
      <h2>{id ? 'Editar Habitación' : 'Nueva Habitación'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={habitacion.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Costo Base:</label>
          <input
            type="number"
            name="costoBase"
            value={habitacion.costoBase}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Impuestos:</label>
          <input
            type="number"
            name="impuestos"
            value={habitacion.impuestos}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tipo:</label>
          <input
            type="text"
            name="tipo"
            value={habitacion.tipo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Ubicación:</label>
          <input
            type="text"
            name="ubicacion"
            value={habitacion.ubicacion}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default HabitacionForm;
