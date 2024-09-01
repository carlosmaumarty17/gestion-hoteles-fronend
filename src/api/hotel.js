import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Obtener la lista de hoteles
export const getHoteles = async () => {
  return axios.get(`${API_URL}/hoteles`);
};

// Crear un nuevo hotel
export const createHotel = async (hotelData) => {
  return axios.post(`${API_URL}/hoteles`, hotelData);
};

// Modificar un hotel existente
export const updateHotel = async (id, hotelData) => {
  return axios.put(`${API_URL}/hoteles/${id}`, hotelData);
};

// Eliminar un hotel
export const deleteHotel = async (id) => {
  return axios.delete(`${API_URL}/hoteles/${id}`);
};

// Obtener un hotel por su ID
export const getHotelById = async (id) => {
  return axios.get(`${API_URL}/hoteles/${id}`);
};
