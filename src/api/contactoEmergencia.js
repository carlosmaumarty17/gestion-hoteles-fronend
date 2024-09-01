import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Obtener los contactos de emergencia para una reserva
export const getContactosEmergencia = async (reservaId) => {
  return axios.get(`${API_URL}/contactos-emergencia?reservaId=${reservaId}`);
};

// Crear un nuevo contacto de emergencia
export const createContactoEmergencia = async (contactoData) => {
  return axios.post(`${API_URL}/contactos-emergencia`, contactoData);
};

// Modificar un contacto de emergencia existente
export const updateContactoEmergencia = async (id, contactoData) => {
  return axios.put(`${API_URL}/contactos-emergencia/${id}`, contactoData);
};

// Eliminar un contacto de emergencia
export const deleteContactoEmergencia = async (id) => {
  return axios.delete(`${API_URL}/contactos-emergencia/${id}`);
};

// Obtener un contacto de emergencia por su ID
export const getContactoEmergenciaById = async (id) => {
  return axios.get(`${API_URL}/contactos-emergencia/${id}`);
};
