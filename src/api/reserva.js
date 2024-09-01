import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Obtener la lista de reservas para un usuario específico
export const getReservas = async () => {
  const token = localStorage.getItem('token');
  return axios.get(`${API_URL}/reservas`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

// Crear una nueva reserva
export const createReserva = async (reservaData) => {
  const token = localStorage.getItem('token');
  return axios.post(`${API_URL}/reservas`, reservaData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

// Modificar una reserva existente
export const updateReserva = async (id, reservaData) => {
  const token = localStorage.getItem('token');
  return axios.put(`${API_URL}/reservas/${id}`, reservaData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

// Eliminar una reserva
export const deleteReserva = async (id) => {
  const token = localStorage.getItem('token');
  return axios.delete(`${API_URL}/reservas/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

// Obtener una reserva por su ID
export const getReservaById = async (id) => {
  const token = localStorage.getItem('token');
  return axios.get(`${API_URL}/reservas/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
