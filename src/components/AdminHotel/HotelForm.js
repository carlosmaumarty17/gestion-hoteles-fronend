import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createHotel, getHotelById, updateHotel } from '../../api/hotel';

const HotelForm = () => {
  const [hotel, setHotel] = useState({ nombre: '', descripcion: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchHotel = async () => {
        try {
          const response = await getHotelById(id);
          setHotel(response.data);
        } catch (error) {
          console.error('Error fetching hotel:', error);
        }
      };

      fetchHotel();
    }
  }, [id]);

  const handleChange = (e) => {
    setHotel({ ...hotel, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateHotel(id, hotel);
      } else {
        await createHotel(hotel);
      }
      navigate('/admin/hoteles');
    } catch (error) {
      console.error('Error saving hotel:', error);
    }
  };

  return (
    <div>
      <h2>{id ? 'Editar Hotel' : 'Nuevo Hotel'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={hotel.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={hotel.descripcion}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default HotelForm;
