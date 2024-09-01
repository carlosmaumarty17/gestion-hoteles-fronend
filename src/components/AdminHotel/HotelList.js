import React, { useState, useEffect } from 'react';
import { getHoteles, deleteHotel } from '../../api/hotel';
import { Link } from 'react-router-dom';

const HotelList = () => {
  const [hoteles, setHoteles] = useState([]);

  useEffect(() => {
    const fetchHoteles = async () => {
      try {
        const response = await getHoteles();
        setHoteles(response.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHoteles();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteHotel(id);
      setHoteles(hoteles.filter(hotel => hotel._id !== id));
    } catch (error) {
      console.error('Error deleting hotel:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Hoteles</h2>
      <Link to="/admin/hoteles/nuevo">Agregar Nuevo Hotel</Link>
      <ul>
        {hoteles.map(hotel => (
          <li key={hotel._id}>
            {hotel.nombre}
            <Link to={`/admin/hoteles/${hotel._id}`}>Editar</Link>
            <button onClick={() => handleDelete(hotel._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;

