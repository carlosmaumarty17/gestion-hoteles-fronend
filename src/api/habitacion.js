import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Obtener la lista de habitaciones para un hotel específico
export const getHabitaciones = async (hotelId) => {
  return axios.get(`${API_URL}/habitaciones?hotelId=${hotelId}`);
};

// Crear una nueva habitación
export const createHabitacion = async (habitacionData) => {
  return axios.post(`${API_URL}/habitaciones`, habitacionData);
};

// Modificar una habitación existente
export const updateHabitacion = async (id, habitacionData) => {
  return axios.put(`${API_URL}/habitaciones/${id}`, habitacionData);
};

// Eliminar una habitación
export const deleteHabitacion = async (id) => {
  return axios.delete(`${API_URL}/habitaciones/${id}`);
};

// Obtener una habitación por su ID
export const getHabitacionById = async (id) => {
  return axios.get(`${API_URL}/habitaciones/${id}`);
};
