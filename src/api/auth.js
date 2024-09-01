import axios from 'axios';

// Configura la URL base para tus solicitudes
const API_URL = 'http://localhost:5000/api';

// Registro de un nuevo usuario
export const register = async (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

// Inicio de sesión
export const login = async (credentials) => {
  return axios.post(`${API_URL}/auth/login`, credentials);
};

// Obtención de datos del usuario (requiere autenticación)
export const getUser = async () => {
  const token = localStorage.getItem('token');
  return axios.get(`${API_URL}/auth/user`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
